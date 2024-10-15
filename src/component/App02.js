// react App.js 기본 형태
function Header(props){
    return    <div id="header">
                <p>{props.text}</p>
              </div>
}

function Body(props) {
    return (
      <div id="main">
        <ul>
          {props.list.map((element, index) => (
            <li key={index}>
              {/* 항목을 클릭할 때 해당 element 값을 전달 */}
                <a href="#" onClick={() => {
                    props.printSubject(element); // 리스트 항목 클릭 시 해당 항목을 전달
                }}>{element}
                </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

function Footer(props){
    return    <div id="footer">
                <p>{props.text}</p>
              </div>
}

function App(){
    var list = ["자바", "오라클", "html"];
    return (<div>
        <Header text="Web Header!"></Header>
        <Body list={list} printSubject={(subject)=>{
            alert(subject);
        }}></Body>
        <Footer text="Web Footer!"></Footer>
    </div>);
}

export default App;


// function Header(props){
//   return <div>
//               {props.text}
//           </div>
// }
// function Body(props) {
//   var list = [];
//   props.list.forEach(element => {
//       list.push(<li key={element}><a href="#" onClick={()=>{
//           props.printSubject(element);
//       }}>{element} </a></li>);
//   });
//   return <div>
//               <ul>
//                   {list}
//               </ul>
//           </div>
// }
// function Footer(props){
//   return <div>
//       {props.text}
//   </div>
// }

// function App(){
//   var list = ["자바", "오라클", "html"];
//   return (<div>
//       <Header text="Web Header!"></Header>
//       <Body list={list} printSubject={(subject)=>{
//           alert(subject);
//       }}></Body>
//       <Footer text="Web Footer!"></Footer>
//   </div>);
// }

// export default App;