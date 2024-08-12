import React from 'react';
import { isEmpty } from 'lodash';

const Table = (props) => {
    const {data, action} = props;

    return (
        <table className={'table'}>
                    <thead className={'table__head'}>
                        <tr className={'table__head__row'}>
                            <th className={'table__head__row__column'}>Name</th>
                            <th className={'table__head__row__column'}>Email</th>
                            <th className={'table__head__row__column'}>Phone</th>
                            <th className={'table__head__row__column'}>Gender</th>
                            <th className={'table__head__row__column'}>Action</th>
                        </tr>
                    </thead>
                    <tbody className={'table__body'}>
                    {!isEmpty(data) && data.map( user => {
                        return (
                                    <tr className={'table__body__row'} key={user.id}>
                                        <td className={'table__body__row__column'}>{user.name}</td>
                                        <td className={'table__body__row__column'}>{user.email}</td>
                                        <td className={'table__body__row__column'}>{user.phone}</td>
                                        <td className={'table__body__row__column'}>{user.gender}</td>
                                        <td className={'table__body__row__column'}>
                                            <button className={'table__body__row__column__delete'} onClick={() => action(user.id)}>Delete</button>
                                        </td>
                                    </tr>)})}
                    </tbody>
        </table>
    )
}

export default Table;