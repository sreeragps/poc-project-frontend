import { render, screen } from '@testing-library/react'
import AddUser from '../components/AddUser';
import userEvent from '@testing-library/user-event';
import {jest} from '@jest/globals';

test('Delete click handler called', async () => {
    const mockDeleteHandleClick = jest.fn();
    render(<AddUser 
                handleClick = {mockHandleClick}
          />)
    await userEvent.click(screen.getByText(/x/i));
    expect(mockDeleteHandleClick).toHaveBeenCalled();
});
