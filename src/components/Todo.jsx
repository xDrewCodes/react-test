

function Todo({ title, para }) {

    function deleteTodo() {
        console.log("deleted")
    }


    return (
        <div>
            <h2>{ title }</h2>
            <p>{ para  }</p>
            <button onClick={ deleteTodo }>Delete</button>
        </div>

    )
}

export default Todo