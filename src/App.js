import './App.css';
import Header from './components/header/header';
import Task from './components/task/task';

function App() {
  return (
    <div className="App">
      <Header title="To Do react" />
      <Task />
    </div>
  );
}

export default App;
