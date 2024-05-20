import React, { useState } from 'react'
import './Product.scss'
import { useDeleteUsersMutation } from '../../context/api/userApi';
import Swal from 'sweetalert2';
import Editmodel from '../Edit__model/Edit__model'


const Product = ({pData,isAdmin}) => {
  const [deleteUser, { isLoading }] = useDeleteUsersMutation();
  const [edit,setedit] = useState(null)
 

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this user? This process cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire(
          'Deleted!',
          'The user has been deleted.',
          'success'
        );
      }
    });
  };

  const userCards = pData?.map((user) => (
    <div className="user-wrapper container" key={user.id}>
      <div className="profile-card">
        <div className="top-icons">
          <i className="fas fa-long-arrow-alt-left"></i>
          <i className="fas fa-ellipsis-v"></i>
          <i className="far fa-heart"></i>
        </div>
        <div className="profile">
          <img
            src={user.avatar}
            className="thumbnail"
            alt="Profile thumbnail"
          />
          <div className="check"><i className="fas fa-check"></i></div>
          <h3 className="name">{user.name}</h3>
          <p className="title">{user.job}</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
          <div className="buttons">
          <button onClick={() => setedit(user)} type="button" className="btn hire">{isAdmin? 'Edit' :' Hire Me'}</button>
            {isAdmin && (
              <button 
                type="button" 
                className="btn delete" 
                onClick={() => handleDelete(user.id)}
                disabled={isLoading}
              >
                {isLoading ? 'Deleting...' : 'Delete'}
              </button>
            )}
          </div>
        </div>
        <div className="social-icons">
          <div className="icon">
            <a href="/"><i className="fab fa-dribbble">ifei </i></a>
            <h4>12.8k</h4>
            <p>Followers</p> 
          </div>
          <div className="icon">
            <a href="#"><i className="fab fa-behance">{user.age}</i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
          <div className="icon">
            <a href="#"><i className="fab fa-twitter">mdkj</i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  ));
  
  return (
    <>
    
    <div className="user-wrapper container">
      {userCards}
    </div>
    {
      edit ?   <Editmodel data={edit} setData={setedit}/> 
      :
      <></>
    }

  
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Product