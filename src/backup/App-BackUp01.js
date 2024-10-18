import { useReducer } from 'react';

const reducer = (prev, action) => {
  console.log('prev -', prev);
  console.log('action -', action);
  
  if(action.req == '찬성'){
    return {yes : prev.yes + 1, no : prev.no};
  } else if(action.req == '반대'){
    return {yes : prev.yes, no : prev.no + 1};
  } else {
    return {yes : 0, no : 0};
  }


}

function App() {
  const [state, dispatch] = useReducer(reducer, {yes : 0, no : 0});


  return (
    <div className='app'>
      <h1>투표 시스템</h1>
      <div>찬성 : {state.yes}</div>
      <div>반대 : {state.no}</div>
      <button onClick={
        () => {
          dispatch({req : '찬성'});
        }
      }>찬성</button>
      <button onClick={
        () => {
          dispatch({req : '반대'});
        }
      }>반대</button>
      <button onClick={
        () => {
          dispatch({req : '초기화'});
        }
      }>초기화</button>
    </div>
  );
}

export default App;
