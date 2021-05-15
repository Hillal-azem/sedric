import { useState } from "react";
import '../App.css';
import Counter from './counter'
import Button from "./Button";

function App() {

    const [counter, setCounter] = useState(0)

    return (
        <div className="App">

            <h1>Bienvenu sur le compteur</h1>

            <Counter counter={counter}/>

            <Button counter={counter} setCounter={setCounter}/>

        </div>
    );
}

export default App;
