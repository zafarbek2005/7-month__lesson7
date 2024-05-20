import React from 'react';
import './Edit.scss';
import { usePutUsersMutation } from '../../context/api/userApi';

const EditModel = ({ setData, data }) => {
  const [updateUser, { isLoading }] = usePutUsersMutation();

  const handleUpdate = (e) => {
    e.preventDefault();
    const user = {
      name: data.name,
      age: data.age,
    };
    updateUser({ body: user, id: data.id })
      .then(() => {
        setData(null);
      })
      .catch((error) => {
        console.error("Failed to update user:", error);
      });
  };

  return (
    <>
      <div onClick={() => setData(null)} className="Edit__overlay"></div>
      <form className="Edit__Wrapper" onSubmit={handleUpdate}>
        <h3>Edit Model</h3>
        <input
          type="text"
          placeholder="Name"
          required
          value={data.name}
          onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Age"
          required
          value={data.age}
          onChange={(e) => setData((prev) => ({ ...prev, age: e.target.value }))}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save'}
        </button>
        <button type="button" onClick={() => setData(null)}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditModel;
