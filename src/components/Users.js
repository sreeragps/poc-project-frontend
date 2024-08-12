import React,{useState} from 'react';
import './users.scss';
import UserList from './UserList';
import AddUser from './AddUser';
import { isEqual } from 'lodash';
import { CONSTANT__USERS } from './Constants';
import Layout from './Layout';

 const Users = () => {
  const [actionValue, setActionValue]=useState('');
  console.log(actionValue);
  const userHandler = (value) => {
      console.log(value);
      setActionValue(value);
  }

  return (
          <Layout>
            <div className='users'>
              <div className='users__actions' >
                <button className='users__actions__userList' onClick={(e)=>userHandler(CONSTANT__USERS.LIST)}>User List</button>
                <button className='users__actions__addUser'  onClick={(e)=>userHandler(CONSTANT__USERS.ADD)}>Add User</button>
              </div>
              <div className='users__view'>
                {isEqual(actionValue, CONSTANT__USERS.LIST) && <UserList/>}
                {isEqual(actionValue, CONSTANT__USERS.ADD) && <AddUser setActionValue={setActionValue}/>}
              </div>
            </div>
          </Layout>)};

export default Users;