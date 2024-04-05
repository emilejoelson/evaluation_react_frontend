import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { AddUser as AddUserService } from "../../config/UserApi";
import UserModel from '../../models/entities/UserModel';
import { validateUserForm } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [formData, setFormData] = useState<UserModel>({
    username: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddUser = async () => {
    try {
      validateUserForm(formData);
      await AddUserService(formData);
      navigate("/users");
      console.log('User added successfully!', formData);
    } catch (error) {
      console.error('Error adding user:', error);
      alert(error.message); // Display validation error message
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        width: '400px',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
      <h2>Add User</h2>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddUser}>
        Add
      </Button>
    </Box>
  );
}

export default AddUser;
