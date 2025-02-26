import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from '../components/User.jsx'

function Home() {
    const [users, setUsers] = useState([])

    async function main() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
    }

    useEffect(() => {
        main()
    }, [])

    return (
        <div>
            <h1>Home</h1>

            {users.length > 0 ? (
                users.map(user => (
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        username={user.username}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Home