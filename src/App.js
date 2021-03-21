import './App.css';
import { UsersNumber } from './forInput';
import { UsersForm } from './forForm/index';
function App() {
  return (
    <div className="App">
      <div>
        <UsersForm />
      </div>
     <div className="taskNumber">
       <UsersNumber />
      </div>
    </div>
  );
}

export default App;
