import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context';

describe('test in LoginPage', () => {

  const user = {
    id: 1,
    name: 'Fernanda Cancino',
  };


  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');

  });

  test('debe de llamar el setUser cuando se hace clic en el boton', () => {

    const mockSetUser = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: mockSetUser }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockSetUser).toHaveBeenCalled();
    expect(mockSetUser).toHaveBeenCalledWith({
      "email": "fer@cancino.com",
      "id": 123,
      "name": "Fernanda Cancino"
    });

  });
});