import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ExploreCard2C from './ExploreCard2C';

describe('ExploreCard2C', () => {
  test('navigates to the correct URL when clicked', () => {
    const mockNavigate = jest.fn();

    // Mock useNavigate
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    // Render the component
    render(
      <Router>
        <ExploreCard2C
          imglink="https://example.com/image.jpg"
          heading="Test Heading"
          value="core"
        />
      </Router>
    );

    // Find the button and simulate a click event
    const button = screen.getByText(/click it../i);
    fireEvent.click(button);

    // Assert that the mockNavigate function was called with the correct URL
    expect(mockNavigate).toHaveBeenCalledWith('/aot/core');
  });
});
