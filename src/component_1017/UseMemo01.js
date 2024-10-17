import React, { useState, useMemo } from 'react';
function numFunc (count){
    for(var i=0; i<30000; i++){
        console.log(i);
    }
    return count * 2;
}

function plusFunc(count){
    return count + 1;
}

function UseMemo01(props) {
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(1);

    // var num = numFunc(count);
    var num = useMemo(() => {
        return numFunc(count);
    }, [count]);
    var num2 = plusFunc(count2);

    return (
        <div>
            {num}
            <button onClick={()=>{setCount(count+1)}}>증가1</button>
            <hr/>
            {num2}
            <button onClick={()=>{setCount2(count2+1)}}>증가2</button>
        </div>
    );
}

export default UseMemo01;