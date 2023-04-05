import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  render as renderTest,
  screen,
  fireEvent,
} from '@testing-library/react-native';

import Routes from '../screens/routes';

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

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = <Routes />;
    const navigation = {navigate: jest.fn()};

    renderTest(component);
    // const title = await screen.findByTestId('product-1');
    // const id = await screen.findByText('1');
    // const price = await screen.findByText(549);
    const items = await screen.findAllByText(/Add/);

    // expect(title).toBe('iPhone 9');
    expect(items.length).toBe(1);
  });

  test('clicking on one item takes you to the details screen', async () => {
    renderTest(<Routes />);
    const toClick = await screen.findAllByText(/Carrinho/);

    await fireEvent(toClick[0], 'press');
    const newHeader = await screen.findAllByText(/Carrinho/);
    // const newBody = await screen.findByText('the number you have chosen is 5');

    expect(newHeader).toBe('Carrinho');
    // expect(newBody).toBeOnTheScreen();
  });
});
