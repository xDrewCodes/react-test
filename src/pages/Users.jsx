
import { useParams } from 'react-router-dom'

function Users() {
    const { username } = useParams()

    console.log(username)
    
    return (
        <div>
            <h1>Users</h1>
            <p> { username } </p>
        </div>
    )
}

export default Users