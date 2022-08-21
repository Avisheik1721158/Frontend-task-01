import './App.css';
import Authors from './component/Authors/Authors';
import Long from './component/Long Stories/Long';
import Short from './component/Short Stories/Short';
import Long2 from './component/Long Stories 2/Long2';


function App() {
  return (
    <div className="App">
      <Short />
      <Long />
      <Long2 />
      <Authors />
      <Short />
      <Long2 />
      <Long />
      <Authors />


    </div>
  );
}

export default App;

