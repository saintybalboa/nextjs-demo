import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '.';

const mockOnSubmit = jest.fn((email, password) => {
    return Promise.resolve({ email, password });
});

describe('LoginForm', () => {
    beforeEach(() => {
        render(<LoginForm onSubmit={mockOnSubmit} />);
    });

    it('should fail form validation when the email address is empty', async () => {
        await act(async () => {
            fireEvent.input(screen.getByLabelText('Email'), {
                target: {
                    value: ''
                }
            });

            fireEvent.submit(screen.getByRole('button'));
        });

        expect(screen.getByLabelText('Email').value).toBe('');
        expect(screen.getAllByText('Please enter a valid email address')).toHaveLength(1);
        expect(mockOnSubmit).not.toBeCalled();
    });

    it('should fail form validation when the password is empty', async () => {
        await act(async () => {
            fireEvent.input(screen.getByLabelText('Password'), {
                target: {
                    value: ''
                }
            });

            fireEvent.submit(screen.getByRole('button'));
        });

        expect(screen.getAllByText('Please enter a password')).toHaveLength(1);
        expect(screen.getByLabelText('Password').value).toBe('');
        expect(mockOnSubmit).not.toBeCalled();
    });

    it('should submit form when the email and password fields are not empty', async () => {
        await act(async () => {
            fireEvent.input(screen.getByLabelText('Email'), {
                target: {
                    value: 'test@test.com'
                }
            });

            fireEvent.input(screen.getByLabelText('Password'), {
                target: {
                    value: 'test'
                }
            });

            fireEvent.submit(screen.getByRole('button'));
        });

        expect(screen.getByLabelText('Email').value).toBe('test@test.com');
        expect(screen.getByLabelText('Password').value).toBe('test');
        expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument();
        expect(screen.queryByText('Please enter a password')).not.toBeInTheDocument();
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
});

