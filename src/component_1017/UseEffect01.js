import React, { useEffect, useState } from 'react';

function UseEffect01(props) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("useEffect 실행!");
    }, []);

    return (
        <div>
            <div>count1 : {count1}</div>
            <div>count2 : {count2}</div>
            <button onClick={()=>{setCount1(count1 + 1)}}>count1</button>
            <button onClick={()=>{setCount2(count2 + 1)}}>count2</button>
        </div>
    );
}

export default UseEffect01;