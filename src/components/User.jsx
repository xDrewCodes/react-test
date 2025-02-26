
import React from 'react'

function User({ id, name, email, username }) {
    
    return (
        <div key={id} style={{ border: `2px solid black`, margin: `10px`, padding: `10px` }} >
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
        </div>
    )

}

export default User