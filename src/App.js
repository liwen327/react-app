import React, { } from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import ReactReduxPage from './pages/ReactReduxPage';
import RouterPage from './pages/RouterPage';
// import RouteChildren from './pages/RouteChildren';
// import RenderComponentPage from './pages/RenderComponentPage';





// import HocPage from './pages/HocPage'

function App() {
  // console.log('useState(0)', useState(0));

  // const [num, setNum] = useState(0)
  return (
    <div className="App">
      {/* react-redux学习 */}
      {/* <button onClick={() => setNum(num + 1)}>num: {num}</button> */}
      {/* <ReactReduxPage msg={num}></ReactReduxPage> */}

      {/* react-router 学习 */}

      <RouterPage></RouterPage>
      {/* RouteChildren  children无论当前location是否匹配，都需要渲染内容的*/}
      {/* <RouteChildren></RouteChildren> */}
      {/* 比较render和component，这两个都是location匹配时才渲染内容   //! 要重点掌握 */}
      {/* <RenderComponentPage></RenderComponentPage> */}
    </div>
  );
}

export default App;
