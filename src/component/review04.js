import {useState} from "react";

function App() {
    const [input, setInput] = useState("");
    const printText = (event) => {
        setInput(event.target.value);
        // 이벤트 객체 : onChange를 통해 감지된 행동을 저장
    }
    return <>
        <input onChange={printText} value={input}></input>
        <div>{input}</div>
    </>
}

export default App;