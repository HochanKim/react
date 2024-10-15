import { useState } from "react";

function App() {
    const [count, setCount] = useState(99);
    // var state = useState(99);   // [99. function()]
    // var _count = state[0];
    // var _countFunc = state[1];
        
    return <>
        {count}
        <button onClick={() => {
            setCount(count + 10);
            console.log(count);
        }}>클릭</button>
    
    </>

    // const increment = () => {
    //     cnt++;
    //     console.log(cnt);
    // }
    // return <>
    //    <div>{cnt}</div>
    //    <button onClick={increment}>증가</button>
    // </>
}

export default App;