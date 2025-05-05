import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  const adminName = {name:'Admin'};

  const handleLogin = (email, password) => {
    if(userData && userData.admin.find((data) => email == data.email && password == data.password)) {
      setUser('admin');
      
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}));
    } else if(userData && userData.employees.find((data) => email == data.email && password == data.password)) {
      const employee = userData.employees.find((data) => email == data.email && password == data.password);
      if(employee) {
        setUser('employee');
        setLoggedInUserData(employee);
      }
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}));
    } else {
      alert('Invalid Credentials');
    }
  }

  return (
     <>
      { !user ? <Login handleLogin={handleLogin} /> : '' }
      { user == 'admin' ? <AdminDashboard changeUser={setUser} adminData={adminName} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} employeeData = {loggedInUserData} /> : null) }
     </>
  )
}

export default App