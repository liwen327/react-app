import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import DialogPage from './pages/DialogPage';
import MyFormPage from './pages/MyFormPage'
// import FormPage2 from './pages/FormPage2';
// import FormPage from './pages/FormPage';



// import HocPage from './pages/HocPage'

function App() {
  return (
    <div className="App">
      {/* <HocPage></HocPage> */}
      {/* <FormPage></FormPage> */}
      {/* <FormPage2></FormPage2> */}
      <MyFormPage></MyFormPage>
      <DialogPage></DialogPage>
    </div>
  );
}

export default App;
