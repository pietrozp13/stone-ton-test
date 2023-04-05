import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  render as renderTest,
  screen,
  fireEvent,
} from '@testing-library/react-native';

import Products from '../screens/Products';
import Cart from '../screens/Cart';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

// jest.mock('@react-navigation/native', () => {
//   navigate: () => jest.fn();
// });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        status: 200,
        products: [
          {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            // thumbnail: '...',
            // images: ['...', '...', '...'],
          },
        ],
      }),
  }),
);

describe('Testing Products screen', () => {
  test('page contains the header and 10 items', async () => {
    const component = <Products />;

    renderTest(component);
    const items = await screen.findAllByText(/Add/);

    expect(items.length).toBe(1);
  });

  test('Testing Cart screen', async () => {
    renderTest(<Cart />);
    const toClick = await screen.findAllByText(/Carrinho/);

    await fireEvent(toClick[0], 'press');
    const newHeader = await screen.findAllByText(/Carrinho/);

    expect(newHeader).toBe('Carrinho');
  });
});
