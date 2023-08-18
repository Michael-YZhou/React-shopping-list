// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import ItemList from "./ItemList";

it("returns todo items", async () => {
  const mockResponse = [
    {
      id: 1,
      title: "item 1",
    },
    {
      id: 2,
      title: "item 2",
    },
  ];

  fetch.mockResponse(JSON.stringify(mockResponse));
  render(<ItemList />);

  // assert that a fetch call was made
  expect(fetch.requests().length).toBe(1);

  // assert that the items match what was returned in API response
  const item = await screen.findByText("item 1");
  expect(item).toBeInTheDocument();

  const item2 = screen.queryByText("item 2");
  //const item2 = screen.findByText("item 2");
  expect(item2).toBeInTheDocument();
});
