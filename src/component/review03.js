import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    return <>
        <div>{number}</div>
        <button onClick={() => {
            setNumber(number + 1);
        }}>증가</button>
    </>


}

export default App;