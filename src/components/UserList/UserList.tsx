import React, { useEffect, useState } from 'react';
import { User } from '../../utils/interface';
import { getUsers } from '../../api/UsersService';
import { UserInfo } from '../UserInfo';
import './UserList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersSelector } from '../../store/selectors';
import { setUsersAction } from '../../store';
import { Typography } from '@mui/material';
import { SearchBar } from '../SearchBar/SearchBar';

export const UserList = () => {
  const [filters, setFilters] = useState({
    parametr: '',
    value: '',
  });
  const dispatch = useDispatch();
  const users: User[] = useSelector(getUsersSelector(filters.parametr, filters.value));

  useEffect(() => {
    getUsers().then((newUsers)=> {
      dispatch(setUsersAction(newUsers))
    })
  }, []);

  return (
    <div className="UserList">
      <Typography variant="h3" className="UserList__title">
        Users Page
      </Typography>
      <SearchBar setFilters={setFilters} fields={['name', 'email', 'username']} filters={filters}/>
      <div className="UserList__list">
        {users.map((user) => (
          <UserInfo user={user} />
        ))}
      </div>
    </div>
  )
};