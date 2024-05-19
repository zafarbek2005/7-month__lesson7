import React, { useState } from 'react';
import './create.scss';
import { usePostUsersMutation } from '../../../context/api/userApi';

const Create = () => {
  const [userData, setUserData] = useState({ // userData adında bir state tanımlayın
    name: '', // name alanını temsil eden bir anahtar (key)
    age: ''   // age alanını temsil eden bir anahtar (key)
  });

  const [createUser, { isLoading }] = usePostUsersMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(userData); // createUser fonksiyonunu kullanarak userData'yı gönderin
    setUserData({       // Gönderdikten sonra userData'yı sıfırlayın
      name: '',
      age: ''
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
            value={userData.name} // userData'nın name alanına erişin
            onChange={(e) => setUserData({ ...userData, name: e.target.value })} // name'i güncelleyin
            placeholder="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
          required
            type="number"
            id="age"
            value={userData.age} // userData'nın age alanına erişin
            onChange={(e) => setUserData({ ...userData, age: e.target.value })} // age'i güncelleyin
            placeholder='19'
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
