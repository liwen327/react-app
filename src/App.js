import React from 'react';
import './App.css';
import ReactReduxPage from './pages/ReactReduxPage';
import RouterPage from './pages/RouterPage';
import UseCallbackPage from './pages/UseCallbackPage';
// import UseMemoPage from './pages/UseMemoPage';
// import PureComponentPage from './pages/PureComponentPage'
// import CustomHookPage from './pages/CustomHookPage';
// import HookPage from './pages/HookPage';

function App() {
  return (
    <div className="App">
      <ReactReduxPage></ReactReduxPage>
      <RouterPage></RouterPage>
      {/* <PureComponentPage></PureComponentPage> */}
      {/* <HookPage></HookPage> */}
      {/* <CustomHookPage></CustomHookPage> */}
      {/* <UseMemoPage></UseMemoPage> */}
      <UseCallbackPage></UseCallbackPage>

    </div>
  );
}

export default App;
