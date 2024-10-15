function Header(props){
  return    <div id="header">
              <div>
                <a href="#" onClick={() => {
                  props.printText();
                }}>{props.title}</a>
              </div>
            </div>
}
// Main, Footer 컴포넌트 생성해서 부착
function Main(props){
  var list = [];

  props.list.forEach(element => {
    list.push(<li key={element}> {element} </li>);
  });

  return  <div id="main">
            <ul>
              {list}
            </ul>
          </div>
  // return  <div id="main">
  //           <ul>
  //             {props.list.map((subject, index) => (
  //               <li key={index}>
  //                 {subject}
  //               </li>  
  //             ))}
  //           </ul>
  //         </div>
}

function Footer(props){
  return  <div id="footer">
            <a href="#" onClick={() => {
              props.printText();
            }}>
              <p>{props.message}</p>
            </a>
          </div>
}

function App() {
  var subj1 = [ "자바", "자바스크립트", "오라클" ];
  var subj2 = [ "html", "css", "리액트", "mysql" ];
  return (
    <>
      <Header title="자바 재밌다!" printText={() => {
        console.log("함수 보내기 테스트!!");
      }}></Header>
      <Header title="오라클 재밌다!" printText={() => {
        console.log("함수 보내기 테스트22");
      }}></Header>

      <Main list={subj1}></Main>
      <Main list={subj2}></Main>
      
      <Footer message="ㅋㅋㅋㅋ" printText={(message) => {
        alert(message);
      }}></Footer>
    </>
  );
}

export default App;
