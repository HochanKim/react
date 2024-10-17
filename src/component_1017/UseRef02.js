import React, {useEffect, useRef} from 'react';

function UseRef02(props) {
    const idRef = useRef();
    useEffect(() => {
        idRef.current.focus();
        console.log(idRef);
    }, [])

    return (
        <div>
            <input ref={idRef}></input>
            <button onClick={()=>{
                console.log(idRef.current.value);
            }}>클릭</button>
        </div>
    );
}

export default UseRef02;