import React from 'react';
import './App.less';

// 组件
import RButton from './components/RButton'

function App() {
  return (
    <div className="App">
      <RButton onClick={() => {console.log(123)}}>测试按钮</RButton>
      <RButton onClick={() => {console.log(123)}} loading>测试按钮</RButton>
      <RButton loading type="primary">测试按钮</RButton>
      <RButton type="dashed">测试按钮</RButton>
      <RButton type="danger">测试按钮</RButton>
      <RButton onClick={() => {console.log(123)}} disabled type="primary" shape="circle">测试按钮</RButton>
      <RButton type="primary" shape="round">测试按钮</RButton>
    </div>
  );
}

export default App;
