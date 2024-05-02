import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if username and password match predefined credentials
        if (username === 'student' && password === 'student') {
            // Redirect user to the desired page
            navigate('/StudentDashboard')
            // history.push('/StudentDashboard'); // Assuming '/dashboard' is the desired page
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                    placeholder="Enter your username"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    placeholder="Enter your password"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Login
            </button>
        </form>
    );
}
export default Login;
