import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const data = {
  departureSelect: 'departure-select',
  destinationSelect: 'destination-select',
  textTitle: 'Parcel quotation',
  textContent: 'Please choose the route and insert the weights of all parcels',
};

test('renders the correct text and select fields', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(getByText(data.textTitle)).toBeInTheDocument();
  expect(getByText(data.textContent)).toBeInTheDocument();
  expect(getByTestId(data.departureSelect)).toBeInTheDocument();
  expect(getByTestId(data.destinationSelect)).toBeInTheDocument();
});
