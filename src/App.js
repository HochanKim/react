// import UseEffect02 from "./component_1017/UseEffect02";
// import React, { useEffect, useState } from 'react';
import React, { useState, useRef } from 'react';

import Input from "./component_1017/Input";
import Result from "./component_1017/Result";


function App() {
    // const [flg, setFlg] = useState(true);
    // return (
    //     <>
    //         {flg && <UseEffect02></UseEffect02>}
    //         <button onClick={() => {
    //             setFlg(!flg);
    //         }}>보이기/숨기기</button>
    //     </>
    // )
    const num1 = useRef();
    const num2 = useRef();

    const [number, setNumber] = useState({num1:"", num2:""});

    const calculate = () => {
        setNumber({
            num1 : num1.current.value,
            num2 : num2.current.value,
        });
    };

    return (
        <>
            {/* <Test02></Test02> */}
            <Result num1={number.num1} num2={number.num2} />
                <div>
                    <input placeholder='첫 번째 숫자' onChange={setNumber} value={number}></input>
                    <input placeholder='두 번째 숫자' onChange={setNumber} value={number}></input>
                    {/* <input placeholder='+, -, *, /'></input> */}
                    <button onClick={calculate}>계산</button>
                </div>
        </>
    )
}

export default App;