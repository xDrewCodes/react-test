
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const { id } = useParams()

    const [user, setUser] = useState({})

    async function userData() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data)
    }

    useEffect(() => {
        userData()
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {

                <>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </>

            }
        </div>
    )
}

export default Users