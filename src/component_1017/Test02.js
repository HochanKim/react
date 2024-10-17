import React, { useState, useEffect, useRef } from 'react';

function Test02(props) {
    const [save, setSave] = useState([]);
    const [text, setText] = useState("");
    const [flg, setFlg] = useState(false);

    const addText = () => {
        setSave((prev) => {
            return [...prev, text]
        });
    }


    return (
        <div>
            <input onChange={event => {
                console.log(event.target.value.length);
                setText(event.target.value);
            }} value={text}></input>
            <button onClick={addText}>저장</button>
            <p >
                3글자 이상 입력하세요
            </p>
            <h1>이전 입력값 : </h1>
            <ul>
                {save.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default Test02;