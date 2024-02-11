
import './Die.css'
import { sum } from "./Utils"
import Box from './Box';
import BoxGrid from './BoxGrid';


function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameVals(dice) {
  return dice.every(v=>v===dice[0])
}

function App() {
  return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload. test
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
    <>
      {/* <LuckyN winCheck={lessThan4} title='Roll less than 4' />
      <LuckyN winCheck={allSameVals} numDice={3} title='All Same Values'/> */}
      {/* // <LuckyN numDice={3} goal={11} color='red'/> */}
      <BoxGrid/>
    </>
   
  )
}

export default App;
