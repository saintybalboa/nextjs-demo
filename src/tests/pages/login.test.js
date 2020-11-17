import { render } from '@testing-library/react';
import Login from '../../pages/login';
import LoginForm from '../../forms/LoginForm';

jest.mock('../../forms/LoginForm', () => {
  return jest.fn(() => null)
});

describe('Login', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render logo', () => {
    const { container } = render(<Login />);
    expect(container.querySelector('img')).not.toBeNull();
  });

  it('should render login form', () => {
    render(<Login />);
    expect(LoginForm).toBeCalledTimes(1);
  });
});
