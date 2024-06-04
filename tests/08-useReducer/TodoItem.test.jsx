import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => {

  const todo = {
    id: 1,
    description: 'Piedra del estudio',
    done: false,
  };
  const onToggleTodo = jest.fn();
  const onDeleteTodo = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test('debe de mostrar el Todo pendiente de completar', () => {
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodo }
        onDeleteTodo={ onDeleteTodo }
      />
    );

    const liElement = screen.getByRole('listitem');
    expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
  
    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('align-self-center');
    expect( spanElement.className ).not.toContain('text-decoration-line-through');
  });

  test('debe de mostrar el Todo completado', () => {
    todo.done = true;

    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodo }
        onDeleteTodo={ onDeleteTodo }
      />
    );

    const liElement = screen.getByRole('listitem');
    expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
  
    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('align-self-center');
    expect( spanElement.className ).toContain('text-decoration-line-through');
  });

  test('debe de mostrar el Todo completado', () => {
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodo }
        onDeleteTodo={ onDeleteTodo }
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );
    expect( onToggleTodo ).toHaveBeenCalledWith( todo.id );
  });

  test('debe de llamar el deleteTodo', () => {
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodo }
        onDeleteTodo={ onDeleteTodo }
      />
    );

    const deleteButton = screen.getByRole('button', {name: 'Borrar'});
    fireEvent.click( deleteButton );
    expect( onDeleteTodo ).toHaveBeenCalledWith( todo.id )
  });

});
