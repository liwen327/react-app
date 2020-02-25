import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import styles from './index.module.css'
// import logo from "./logo192.png";
/* import App from './App';
import * as serviceWorker from './serviceWorker'; */
import SetState from './pages/setState.js'
import LifeCirclePage from './pages/LifeCirclePage.js'
import ClassComponentPage from './pages/ClassComponentPage';
import FunctionComponentPage from './pages/FunctionComponentPage';
// import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

const name = 'React'
const obj = {
  firstName: 'mike',
  lastName: 'jerry'
}
function format(name) {
  return name.firstName + ' ' + name.lastName
}
const show = false
const arr = [0, 1, 2]

function Welcome(props) {
  return 'Hello, ' + props.name
}
function App() {
  return (
    <div>
      <Welcome name="mike"></Welcome>
      <Welcome name="Jhon"></Welcome>
      <Welcome name="lily"></Welcome>
    </div>
  )
}

const jsx = (
  <div className={styles.app}>hello,{name}
    <h1>{format(obj)}</h1>
    <p>{show ? 'block' : 'none'}</p>
    <p>{show && <div>block</div>}</p>
    <ul>
      {arr.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    {/* <img className={styles.logo} src={logo} alt="img" /> */}
    <SetState></SetState>
    <App></App>
    <LifeCirclePage></LifeCirclePage>
    <ClassComponentPage></ClassComponentPage>
    <FunctionComponentPage></FunctionComponentPage>
    {/* <HomePage></HomePage> */}
    <UserPage></UserPage>
  </div>
)
ReactDOM.render(jsx, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


/**
 * 基本用法表达式用{}包裹
 * 函数
 *JSX对象
 *条件语句
 *
 * 数组
 * 属性
 * 模块化
 */


/* function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); */