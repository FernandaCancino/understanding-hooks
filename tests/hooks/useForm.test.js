import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/Hooks/index';

describe('pruebas en useForm', () => {

  const initialForm = {
    name: 'Fernanda',
    email: 'fer@cancino.com',
  }

  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function ),
    });
  });

  test('debe de cambiar el nombre del formulario', () => {
    const newName = 'Valentina';
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({target: {name: 'name', value: newName}});
    });

    expect( result.current.name ).toBe( newName );
    expect( result.current.formState.name ).toBe( newName );
  });


  test('debe de realizar el reset del formulario', () => {
    const newName = 'Valentina';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({target: {name: 'name', value: newName}});
      onResetForm();
    });

    expect( result.current.name ).toBe( initialForm.name );
    expect( result.current.formState.name ).toBe( initialForm.name );
  });

});