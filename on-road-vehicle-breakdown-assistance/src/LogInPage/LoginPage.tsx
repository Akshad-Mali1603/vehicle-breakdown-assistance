import { useState } from 'react';
import { Button, TextInput, PasswordInput, Title, Anchor } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preselectedRole = queryParams.get("role");
  const [role, setRole] = useState(preselectedRole ||null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formatRole = (role: string) => role[0].toUpperCase() + role.slice(1);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // ✅ Mock login instead of calling backend
    try {
      // Simulate backend response
      const mockResponse = {
        token: 'mock-jwt-token-123',
        role: role,
      };

      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('role', String(mockResponse.role));

      if (mockResponse.role === 'admin') navigate('/admin');
      else if (mockResponse.role === 'business') navigate('/business');
      else navigate('/user');
    } catch (err) {
      alert('Login failed (mock).');
    }
  };

  const handleRegisterRedirect = () => {
    if (role) {
      navigate(`/register/${role}`);
    }
  };

  return (
    <div className="min-h-screen  flex bg-gray-100">
      {/* Left side */}
      <div className="w-1/2 bg-slate-900 flex flex-col p-12">
        <div className="flex justify-between items-center mb-16">
          <div className="text-bright-sun-400 font-bold text-2xl">ORVBA</div>
          <div className="text-bright-sun-400">On-Road Vehicle Breakdown Assistance</div>
        </div>

        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-white text-4xl font-bold mb-6">On-Road Vehicle Breakdown Assistance</h1>
          <p className="text-white text-xl mb-10">
            Stranded on the road? Get reliable help in minutes. Connect with nearby mechanics or request towing assistance – anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex bg-slate-950 items-center justify-center p-12">
        <div className="w-fit h-fit p-40 backdrop-blur-md shadow-lg bg-slate-900  shadow-bright-sun-200">
          <Title className="text-center text-bright-sun-400 text-3xl ">Welcome to ORVBA</Title>

          {!role ? (
            <div className="flex flex-col gap-5 mt-11">
              <Button className='bg-bright-sun-400 cursor-pointer p-3 rounded-lg hover:bg-mine-shaft-200 font-semibold' fullWidth onClick={() => setRole('user')}>
                Login as User
              </Button>

              <Button className='bg-bright-sun-400 cursor-pointer p-3 rounded-lg hover:bg-mine-shaft-200 font-semibold' fullWidth onClick={() => setRole("admin")}>
                Login as Admin
              </Button>

              <Button className='bg-bright-sun-400 cursor-pointer p-3 rounded-lg hover:bg-mine-shaft-200 font-semibold' fullWidth onClick={() => setRole('business')}>
                Login as Business
              </Button>
            </div>
          ) : (
            <div className="bg-slate-800 p-10 gap-3 flex flex-col items-center justify-center">
              <Title className="text-center text-bright-sun-400" size="h4" mb="lg">
                Login as {formatRole(role)}
              </Title>
              <TextInput
                size="md"
                radius="md"
                label="Input label"
                placeholder="Input placeholder"
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                mt="md"
              />
              <div className='gap-24 pl-8 flex items-center justify-center'>
                <Anchor
                onClick={()=>navigate('/login')}
                >
                <Button className='text-bright-sun-400' onClick={() => setRole(null)}>Back</Button>
                </Anchor>
                <Button className=' bg-bright-sun-400 cursor-pointer p-3 rounded-lg hover:bg-mine-shaft-200 font-semibold' onClick={handleLogin}>Login</Button>
              </div>
              <Anchor
                component="button"
                type="button"
                className="text-bright-sun-400 text-center"
                onClick={handleRegisterRedirect}
                mt="md"
              >
                Don't have an account? Register as {role}
              </Anchor>
            </div>
          )}
          <div className='mt-5 '>
             <Button 
          className='text-slate-50'
          onClick={()=>navigate('/home')}
          >Back to Home</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
