import React, { useState } from 'react';
import '../Create/create.scss';
import { usePostUsersMutation } from '../../../context/api/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PCreate = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: ''
  });

  const [createUser, { isLoading }] = usePostUsersMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(userData)
      .unwrap()
      .then(() => {
        toast.success("User created successfully!");
        setUserData({
          name: '',
          age: ''
        });
      })
      .catch((error) => {
        toast.error("Failed to create user: " + error.message);
      });
  };

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
            placeholder="19"
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PCreate;
