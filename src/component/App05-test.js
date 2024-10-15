import {useState} from "react";

function App(){
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    const incerment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return  (<>
                <div>현재 숫자 : {count}</div>
                <div>
                    <input onChange={setNumber} value={number}></input>
                    <div>
                        <button onClick = {incerment}>증가</button>        
                        <button onClick = {decrement}>감소</button>        
                        <button onClick = {reset}>초기화</button>
                    </div>
                </div>
            </>);
}

// function App(){
//     const [number, setNumber] = useState(0);
//     const intNum = 0;
//     const inputNumber = (e) => {
//         console.log(e.target.value);
//         parseInt(setNumber(e.target.value));
//     }
//     if(number < 0){
//         const plus = setNumber(0);
//         intNum = <div>현재 카운트 : {plus}</div>
//     } else {
//         intNum = <div>현재 카운트 : {number}</div>
//     }

//     return(<>
//             {intNum}
//             <input type="number" onChange={inputNumber} value={number}></input>
//             <div>
//                 <button onClick={() => {setNumber(number + 1);}}>증가</button>        
//                 <button onClick={() => {setNumber(number - 1);}}>감소</button>        
//                 <button onClick={() => {setNumber(0);}}>초기화</button>
//             </div>       
//         </>);
// }

export default App;