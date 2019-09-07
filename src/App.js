import React from 'react';
import './App.less';

// 组件
import RButton from './components/RButton';
import RGrid from './components/RGrid';

function App() {
  return (
    <div className="App">
      <div>
        <RButton onClick={() => {console.log(123)}}>测试按钮</RButton>
        <RButton onClick={() => {console.log(123)}} loading>测试按钮</RButton>
        <RButton loading type="primary">测试按钮</RButton>
        <RButton type="dashed">测试按钮</RButton>
        <RButton type="danger">测试按钮</RButton>
        <RButton onClick={() => {console.log(123)}} disabled type="primary" shape="circle">测试按钮</RButton>
        <RButton type="primary" shape="round">测试按钮</RButton>
      </div>
      <div>
        <RGrid />
      </div>
    </div>
  );
}

export default App;
