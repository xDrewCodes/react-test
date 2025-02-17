
import logo from './logo.svg'
import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {


  return (
    <div className="App">
      <Title />
      <Todo title="Wake up" para="Lock in"/>
      <Todo title="Eat breakfast" para="yoyo"/>
      <Todo title="Win bedwars" para="Celebrateee"/>
      {/*<Modal title="Would you like to continue?" />*/}
    </div>
  );
}

export default App
