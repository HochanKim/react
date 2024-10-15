// 컴포넌트
function Header(props){
    var header = ""
    return {header}
}


function App() {
    return <>
        {/* <QWER></QWER>      일반 html과 달리 react에서는 불특정 이름을 컴포넌트로 지정하여 태그명으로 사용가능 */}

        <Header class="kor"></Header>   {/* 지정한 컴포넌트를 태그로 사용하여 불러오기 */}
        <div>
            <div>컨텐츠1</div>
            <div>컨텐츠2</div>
            <div>컨텐츠3</div>
        </div>
        <div>푸터</div>
    </>
}

export default App;