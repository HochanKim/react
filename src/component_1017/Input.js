import React from 'react';

function Input(props) {
    return (
        <div>
            <input placeholder='첫 번째 숫자'></input>
            <input placeholder='두 번째 숫자'></input>
            <input placeholder='+, -, *, /'></input>
            <button>계산</button>
        </div>
    );
}

export default Input;