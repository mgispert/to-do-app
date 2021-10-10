import { render, screen, fireEvent } from '@testing-library/react';
import { TaskBar } from '.';

describe('TaskBar', () => {
    it('should render a button in the document', () => {
        render(<TaskBar />);
        const button = screen.getByText(/add task/i);
        expect(button).toBeInTheDocument();
    })
    it('should render a label in the document', () => {
        render(<TaskBar />);
        const label = screen.getByText(/write a task to add/i);
        expect(label).toBeInTheDocument();
    })
    it('should call onAddTask with value when input is updated and form is submitted', () => {
        const mockOnAddTask = jest.fn();
        render(<TaskBar onAddTask={mockOnAddTask} />);
        const input = screen.getByPlaceholderText(/add your task here/i);
        fireEvent.change(input, { target: { value: 'input value' } })
        const button = screen.getByText(/add task/i);
        fireEvent.click(button);
        expect(mockOnAddTask).toBeCalledTimes(1);
        expect(mockOnAddTask).toBeCalledWith('input value');
    })
    it('should set empty string as input value when form is submitted', () => {
        const mockOnAddTask = jest.fn();
        render(<TaskBar onAddTask={mockOnAddTask} />);
        const input = screen.getByPlaceholderText(/add your task here/i);
        fireEvent.change(input, { target: { value: 'input value' } })
        expect(input).toHaveValue('input value');
        const button = screen.getByText(/add task/i);
        fireEvent.click(button);
        expect(input).toHaveValue('');
    })
})




