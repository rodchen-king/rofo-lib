import React from 'react';
import './index.less';

/* basic information */
// padding: 9px 15px;
// font-size: 14px;
// font-height: 14px;
// height: 32px

/* 待传入属性值 */
// type: 主按钮，次按钮，虚线按钮，危险按钮
// 有无背景： true / false 默认背景颜色白色
// shape: 圆角，椭圆
// loading
// icon 待续

/* 自定义类型 */
// style

class RButton extends React.Component {
  constructor(props) {
    super(props);
    debugger;

    this.state = {

    };
  }

  // 渲染函数
  render() {
    const { children } = this.props;

    return (
      <button className="rbtn">
        <span>
          {children}
        </span>
      </button>
    );
  }
}

export default RButton;
