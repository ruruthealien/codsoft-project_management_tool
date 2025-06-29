import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Auth/login'
import SignUp from './pages/Auth/SignUp'
import ManageTask from './pages/Admin/ManageTask';
import CreateTask from './pages/Admin/CreateTask';
import ManageUsers from './pages/Admin/ManageUsers';
import Dashboard from './pages/Admin/Dashboard';

import UserDashboard from './pages/Users/UserDashboard';
import MyTask from './pages/Users/MyTask';
import ViewTaskDetails from './pages/Users/ViewTaskDetails';

import PrivateRoutes from './routes/PrivateRoutes';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />

          {/* Admin Routes */ }
          <Route element={<PrivateRoutes allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTask />} />
            <Route path="/admin/create-tasks" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} /> 
          </Route>
          
          {/* User Routes */ }
          <Route element={<PrivateRoutes allowedRoles={['admin']} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/my-tasks" element={<MyTask />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App