import logo from './logo.svg';
import './App.css';
import Reminders from './Components/Reminders';
import JobApplications from './Components/JobApplications';

function App() {
  return (
    <div >
        <h1>Bobby's To-do list</h1>
        <div className='boxOne'>
          <Reminders/>
        </div>
        <div className="boxOne">
          <JobApplications/>
        </div>
    </div>
  );
}

export default App;
