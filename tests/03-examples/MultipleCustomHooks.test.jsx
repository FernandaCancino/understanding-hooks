import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch, useCounter } from '../../src/Hooks';

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
  
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      state: {
        data: null,
        isLoading: true,
        hasError: null,
      }
    });

    render( <MultipleCustomHooks /> );

    expect( screen.getByText('Rick and Morty Characters') );
    expect( screen.getByText('Loading...') );

    const nextButton = screen.getByRole('button', {name: 'Next character'});
    expect( nextButton.disabled ).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {

    useFetch.mockReturnValue({
      state: {
        data: {
          name: "Rick Sanchez",
          gender: "Male",
          status: "Alive",
        },
        isLoading: false,
        hasError: null,
      }
    });

    render( <MultipleCustomHooks /> );

    expect( screen.getByText('Rick Sanchez') );
    expect( screen.getByText('Male - Alive') );

    const nextButton = screen.getByRole('button', {name: 'Next character'});
    expect( nextButton.disabled ).toBeFalsy();

  });

  test('debe de llamar a función incrementar', () => {


    useFetch.mockReturnValue({
      state: {
        data: {
          name: "Rick Sanchez",
          gender: "Male",
          status: "Alive",
        },
        isLoading: false,
        hasError: null,
      }
    });

    render( <MultipleCustomHooks /> );
    screen.debug();

    const nextButton = screen.getByRole('button', {name: 'Next character'});
    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled();
  });

})