import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import IncriaseCounter from './components/IncriaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncriaseByTwoCounter from './components/IncriaseByTwoCounter';


function App() {
  return (
    <div>

      <Counter>

      </Counter>
        <IncriaseCounter/>
        <DecreaseCounter/>
        <IncriaseByTwoCounter/>
   

    </div>
  );
}

export default App;
