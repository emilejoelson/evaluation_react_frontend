import React, { useEffect, useState } from 'react';
import UserModel from '../models/entities/UserModel';
import { getAllUsers } from '../config/UserApi';
import AllUsers from '../composants/User/AllUsers';

const User = () => {
    const [users, setUsers] = useState<Array<UserModel>>(Array);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const usersData = await getAllUsers();
            setUsers(usersData);
          } catch (error) {
            console.error('Error fetching rooms:', error);
          }
        };
    
        fetchUsers();
      }, []);
  return (
    <div>
       <AllUsers users={users}/>
    </div>
  );
}

export default User;
