import React, { useState } from 'react';
import { Button, TextInput, PasswordInput, Title, Group, Stack, Anchor } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [role, setRole] = useState<'user' | 'admin' | 'business' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formatRole = (r: string) => r[0].toUpperCase() + r.slice(1);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
        role
      });

      const { token, role: returnedRole } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', returnedRole);

      if (returnedRole === 'admin') navigate('/admin');
      else if (returnedRole === 'business') navigate('/business');
      else navigate('/user');
    } catch (err) {
      alert('Login failed. Check your credentials.');
    }
  };

  const handleRegisterRedirect = () => {
    if (role) {
      navigate(`/register/${role}`);
    }
  };

  return (
    <div className='min-h-screen flex bg-gray-100'>
      {/* Left side with branding */}
      <div className='w-1/2 bg-mine-shaft-950 flex flex-col p-12'>
        <div className='flex justify-between items-center mb-16'>
          <div className='text-bright-sun-400 font-bold text-2xl'>ORVBA</div>
          <div className='text-bright-sun-400'>On-Road Vehicle Breakdown Assistance</div>
        </div>
        
        <div className='flex-grow flex flex-col justify-center'>
          <h1 className='text-white text-4xl font-bold mb-6'>On-Road Vehicle Breakdown Assistance</h1>
          <p className='text-white text-xl mb-10'>
            Stranded on the road? Get reliable help in minutes. Connect with nearby mechanics or request towing assistance – anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className='w-1/2 flex bg-black items-center justify-center p-12'>
        <div className='w-full max-w-md'>
          <Title className='text-center text-bright-sun-400' mb={30}>Welcome to ORVBA</Title>

          {!role ? (
            <Stack className='gap-4'>
              <Button 
                color='yellow' 
                size='lg' 
                fullWidth 
                onClick={() => setRole('user')}
              >
                Login as User
              </Button>
              <Button 
                color='yellow' 
                size='lg' 
                fullWidth 
                onClick={() => setRole('admin')}
              >
                Login as Admin
              </Button> 
              <Button 
                color='yellow' 
                size='lg' 
                fullWidth 
                onClick={() => setRole('business')}
              >
                Login as Business
              </Button>
            </Stack>
          ) : (
            <div className='bg-mine-shaft-800 p-10 gap-5 flex flex-col'>
              <Title className='text-center text-bright-sun-400' size="h4" mb="lg">
                Login as {role && formatRole(role)}
              </Title>
              <TextInput
                className='text-bright-sun-400'
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <PasswordInput
                className='text-bright-sun-400'
                label="Password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                mt="md"
              />
              <Group justify="space-between" mt="lg">
                <Button color="gray" onClick={() => setRole(null)}>Back</Button>
                <Button color="yellow" onClick={handleLogin}>Login</Button>
              </Group>
              <Anchor component="button" type="button" c="bright-sun.4" onClick={handleRegisterRedirect} ta="center" mt="md">
                Don't have an account? Register as {role}
              </Anchor>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;