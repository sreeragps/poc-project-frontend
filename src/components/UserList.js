import React,{useState,useEffect} from 'react';
import './userList.scss';
import axios from 'axios';
import { isEmpty } from 'lodash';
import Table from '../generic/Table';

const UserList = (props) => {
    const tmp = [
                    {
                        'id':'1',
                        'name':'John',
                        'email':'john@gmail.com',
                        'phone':'9934567899',
                        'gender': 'male'
                    },
                    {
                        'id':'11',
                        'name':'John',
                        'email':'john@gmail.com',
                        'phone':'9934567899',
                        'gender': 'male'
                    },
                    {
                        'id':'2',
                        'name':'John',
                        'email':'john@gmail.com',
                        'phone':'9934567899',
                        'gender': 'male'
                    }
                ]
    const [ userData, setUserData ] = useState(tmp);
    useEffect(() => {
        axios.get('https://localhost:44339/api/Users')
        .then((response) => setUserData(response.data))
        .catch((error) => console.log(error))
        .finally(() => console.log('network call completed'));
    }, [] );
    const actionDeleteUser = (id) => {
    const payload={ id: id };
    console.log('iddd ', id);
        axios.delete( `https://localhost:44339/api/users/${id}`, {
            data: payload
            } )
            .then((response) => { 
                    window.alert(response.data)
                    axios.get('https://localhost:44339/api/Users')
                    .then((response) => setUserData(response.data))
            })
           .catch((error) => console.log(error));
    }
    return(
        <div className = {'userList'}>
            {<Table data={userData} action={actionDeleteUser}/>}
        </div>
       
    )
}

export default  UserList;