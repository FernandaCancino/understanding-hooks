import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/Hooks/index';

describe('pruebas en useCounter', () => {

  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook( () => useCounter() );
    const { counter, increment, decrement, reset } = result.current;

    expect( counter ).toBe(10);
    expect( increment ).toEqual( expect.any( Function ) );
    expect( decrement ).toEqual( expect.any( Function ) );
    expect( reset ).toEqual( expect.any( Function ) );
  });

  test('debe de generar el counter con el valor de 100', () =>{
    const { result } = renderHook( () => useCounter( 100 ) );
    const { counter } = result.current;

    expect( counter ).toBe(100);
  });

  test('debe de incrementar el contador', () => {
    const { result } = renderHook( () => useCounter( 100 ) );
    const { increment } = result.current;

    // al realizar pruebas, el codigo que provoca actualizaciones de estado de React debe envolverse en act(...)
    act(() => {
      increment();
      increment(2);
    });

    expect( result.current.counter ).toBe(103);
  });

  test('debe de decrementar el contador', () => {
    const { result } = renderHook( () => useCounter( 100 ) );
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect( result.current.counter ).toBe(97);
  });

  test('debe de realizar el reset', () => {
    const { result } = renderHook( () => useCounter( 100 ) );
    const { increment, decrement, reset } = result.current;

    act(() => {
      increment(100);
      decrement(2);
      reset();
    });

    expect( result.current.counter ).toBe(100);
  });

});