import React from 'react';

const UserCard = ({user}) => {

  return (
    <article>
        <header>
            <img 
              src={user?.picture.large} alt="image" />
        </header>
        <h2>Nombre: <span className='color'> {user?.name.first} {user?.name.last}</span></h2>
        <ul>
            <li>Email: {user?.email}</li>
            <li>Genero: {user?.gender}</li>
            <li>Telefono: {user?.phone}</li>
        </ul>
    </article>
  )
}

export default UserCard;

