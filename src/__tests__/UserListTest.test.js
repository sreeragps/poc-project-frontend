import { render, screen } from '@testing-library/react';
import UserList from '../components/UserList';

test('Testing User List page loading', () => {
    render(<UserList/>)
    expect(screen.getByText(/name/i)).toBeInTheDocument();
});