import { render, screen } from '@testing-library/react'
import AddUser from '../components/AddUser';

test('User interactions on form', async () => {
    render(<AddUser />)
          const nameInput = screen.getByPlaceholderText(/enter name/i);
          const emailInput = screen.getByPlaceholderText(/enter email/i);
          const phoneInput = screen.getByPlaceholderText(/enter phone no/i);
          const submitButton = screen.getByRole('button', { name: /submit/i });
          const resetButton = screen.getByRole('button', { name: /reset/i });
});