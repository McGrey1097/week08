import logo from './logo.svg';
import './App.css';
import TaskTracker from "./components/TaskTracker";
// import TaskDetail from "./components/TaskDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskTracker />
      </header>
    </div>
  );
}

export default App;
