import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  //AAA: Arrange, Act, Assert

  //Arrange: set up the "testing environment"
  //Get the DOM ready (render it)
  //Setup any test the we want in the DOM
  const {getByText} = render(<App/>)
  // const result = render(<App />);
  // console.log(result.debug())
  // console.log(result)
  
  //Act: Take the USER "action" that we want to test
  //e.g., Click submit button
  //fill out one of the inputs
  //clear the form

  //Assert: Test that the data or app responded the way you expected it to
  //Testing that something is visible to the user
  //Test that you got routed to a specific place
  //Test that there's a new component in the UI

  //QUERY FUNCTIONS
  const linkElement = getByText(/add new animal/i);
  // EXPECTATIONS
  expect(linkElement).toBeInTheDocument();
});
