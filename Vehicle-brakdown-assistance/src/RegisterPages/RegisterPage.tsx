import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextInput, PasswordInput, Title, Stack, Notification } from '@mantine/core';
import axios from 'axios';

function RegisterPage() {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobile: '',
    city: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/auth/register/business`, formData);
      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  // Safely format the role for display
  const formattedRole = role ? 
    role.charAt(0).toUpperCase() + role.slice(1) : 
    'Business'; // Fallback if role is undefined

  return (
    <div className="min-h-screen flex items-center justify-center bg-mine-shaft-950 p-4">
      <div className="w-full max-w-md bg-mine-shaft-800 p-8 rounded-lg">
        <Title order={2} className="text-center text-bright-sun-400 mb-6">
          Register as {formattedRole}
        </Title>

        {error && (
          <Notification color="red" onClose={() => setError('')} className="mb-4">
            {error}
          </Notification>
        )}

        {success && (
          <Notification color="green" onClose={() => setSuccess(false)} className="mb-4">
            Registration successful! Redirecting to login...
          </Notification>
        )}

        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <TextInput
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="text-bright-sun-400"
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-bright-sun-400"
            />
            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="text-bright-sun-400"
            />
            <TextInput
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="text-bright-sun-400"
            />
            <TextInput
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="text-bright-sun-400"
            />
            <TextInput
              label="Address/Landmark"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="text-bright-sun-400"
            />
           
            <Button type="submit" color="yellow" fullWidth mt="xl">
              Register
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;