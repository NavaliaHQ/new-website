import { FC, useContext } from 'react';

import { render, RenderOptions, fireEvent } from '@testing-library/react';

import { ThemeProvider, ThemeContext } from '.';

const ThemeConsumer: FC = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {themeName}
      <button onClick={toggleTheme}>toggle</button>
    </>
  );
};

const renderThemeProvider = (options?: RenderOptions) =>
  render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>,
    options,
  );

describe('<ThemeProvider />', () => {
  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    jest.spyOn(window.localStorage.__proto__, 'getItem');
    window.localStorage.__proto__.getItem = jest.fn();
  });

  it('starts with the value provided by localStorage', () => {
    jest.clearAllMocks();
    jest.spyOn(window.localStorage.__proto__, 'getItem');
    window.localStorage.__proto__.getItem = jest.fn(() => 'dark');

    const { getByText } = renderThemeProvider();
    expect(getByText('dark')).toBeInTheDocument();
  });

  it('provides a toggle function to toggle the theme', () => {
    const { getByText } = renderThemeProvider();
    expect(getByText('light')).toBeInTheDocument();
    fireEvent.click(getByText('toggle'));

    expect(getByText('dark')).toBeInTheDocument();
  });

  it('calls localStorage.setItem when toggling the theme', () => {
    const { getByText } = renderThemeProvider();
    expect(getByText('light')).toBeInTheDocument();
    fireEvent.click(getByText('toggle'));

    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
  });
});
