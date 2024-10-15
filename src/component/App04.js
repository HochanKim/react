import {useState} from "react";

function App(){
    const [menu, setMenu] = useState(1);
        // 1번 - 홈, 2번 - 마이 페이지
    var display = "";
    if(menu == 1){
        display = <div>메인 페이지 입니다.</div>
    } else {
        display = <div>마이 페이지 입니다.</div>
    }
    return  (<>
                <button onClick={() => {setMenu(1)}}>1번 메뉴</button>
                <button onClick={() => {setMenu(2)}}>2번 메뉴</button>
                {display} 
            </>);
}

export default App;