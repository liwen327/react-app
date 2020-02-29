import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ContextPage from './pages/ContextPage';
import ReduxPage from './pages/ReduxPage';
// import ConsumerPage from './pages/ConsumerPage';





// import HocPage from './pages/HocPage'

function App() {
  return (
    <div className="App">
      <ContextPage></ContextPage>
      {/* <ConsumerPage></ConsumerPage> */}
      {/* redux学习 */}
      <ReduxPage></ReduxPage>
    </div>
  );
}

export default App;
