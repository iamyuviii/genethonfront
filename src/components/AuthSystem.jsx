import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Label } from './Label';


const UserTypeSelection = ({ setUserType }) => {
  return (
    <div className="">
      <div className="w-80 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Choose User Type</h2>
        <p className="text-gray-500 mb-6">Select whether you're an admin or an employee.</p>
        <div className="flex justify-between">
          <Button onClick={() => setUserType('admin')}>Admin</Button>
          <Button onClick={() => setUserType('employee')}>Employee</Button>
        </div>
      </div>
    </div>
  );
};

const AuthForms = ({ userType, setUserType }) => {
  return (
    <div className="">
      <div className="w-80 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          {userType === 'admin' ? 'Admin' : 'Employee'} Authentication
        </h2>
        <p className="text-gray-500 mb-6">Login or sign up to continue.</p>
        <Tabs userType={userType} />
        <Button variant="outline" onClick={() => setUserType(null)} className="w-full mt-4">
          Back to User Selection
        </Button>
      </div>
    </div>
  );
};

const Tabs = ({ userType }) => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button
          className={`w-full text-center py-2 ${activeTab === 'login' ? 'border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`w-full text-center py-2 ${activeTab === 'signup' ? 'border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>
      {activeTab === 'login' ? <LoginForm userType={userType} /> : <SignupForm userType={userType} />}
    </div>
  );
};

const LoginForm = ({ userType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType} login submitted`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">Login</Button>
    </form>
  );
};

const SignupForm = ({ userType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType} signup submitted`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" type="password" required />
      </div>
      <Button type="submit" className="w-full">Sign Up</Button>
    </form>
  );
};

export default function AuthSystem() {
  const [userType, setUserType] = useState(null);

  if (userType === null) {
    return <UserTypeSelection setUserType={setUserType} />;
  }

  return <AuthForms userType={userType} setUserType={setUserType} />;
}
