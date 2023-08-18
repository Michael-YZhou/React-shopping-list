// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import About from "./About";

// function onToggleItem() {}
// function onDeleteItem() {}

// const testCases = [
//   { item: { title: "test item" }, onToggleItem, onDeleteItem },
// ];

// test that text is present and has correct class
it("should show about page", () => {
  render(<About></About>);

  // use RTL utility `screen.getByText` to search for element with expected text
  const about = screen.getByText("About this app");

  // assert element in document
  expect(about).toBeInTheDocument();
});
