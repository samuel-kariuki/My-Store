import { render, screen, waitFor } from "@testing-library/react";
import Category from "./category"; // Import the correct component

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Product 1",
          image: "/test-image",
          rating: { rate: 4, count: 4 },
        },
        {
          id: 2,
          title: "Product 2",
          image: "/test-image",
          rating: { rate: 4, count: 4 },
        },
      ]),
  } as any)
);

describe("Category component", () => { // Rename the test suite
  it("fetches and displays products", async () => {
    render(<Category />); // Render the Category component directly

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
    });

    const product1Element = screen.getByText("Product 1 - 4/5 (4)");
    const product2Element = screen.getByText("Product 2 - 4/5 (4)");
    expect(product1Element).toBeInTheDocument();
    expect(product2Element).toBeInTheDocument();
  });
});
