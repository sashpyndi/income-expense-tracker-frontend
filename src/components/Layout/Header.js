import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { message } from 'antd';
import logo from './ExpenseTrackerLogo.png';
import picChart from './ExpenseTracker-Pie.png';

const Header = () => {
  const [loginUser, setLoginUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    message.success('Logout successfully');
  };

  return (
    <header className="bg-cyan-500 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img src={picChart} alt="Expense Tracker Icon" className="h-[100px] max-w-[250px] mx-3" />
        <img src={logo} alt="Expense Tracker Logo" className="h-[100px] max-w-[250px] mx-3" />
          <h1 className="text-xl font-bold"></h1>
        </div>
        <nav>
          <ul className="flex space-x-4 justify-center align-middle">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">
                {loginUser && loginUser.name.split(' ')[0]}
              </Link>
            </li>
            <li>
              <button
                className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 mr-2" // Added `mr-2` for margin
                onClick={handleLogout}
              >
                <LogoutOutlined className="mr-2 m-auto" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
