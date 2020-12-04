import React, { Component} from 'react';
import PropTypes from "prop-types"

class XiaojiejieItem extends Component {
    //生命周期：在某一个时刻，可以自动执行的函数
    constructor(props) {//构造函数
        super(props);
        // this.handClick = this.handClick.bind(this)
        this.handClick = () => {
            this.props.deleItem(this.props.index)
        }
    }
    //组件第一次存在dom中，函数是不会被执行
    //已经存在dom中，修改了才可以执行
    componentWillReceiveProps() {
         console.log("c-child-componentWillReceiveProps")
    }
    componentWillUnmount(){
        console.log("c-child-componentWillUnmount")
    }
    render() {
        return ( <li 
                    onClick = {this.handClick} > 
                   {this.props.xjjName} -{this.props.content} 
                </li> 
        );
    }
}
XiaojiejieItem.propTypes ={//类型校验
    xjjName: PropTypes.string.isRequired, //strin 并必填，如果父组件不填会报错，
    content:PropTypes.string,
    index:PropTypes.number,
    deleItem:PropTypes.func
}
XiaojiejieItem.defaultProps={//设置默认值--避免父组件不填时的报错，
    xjjName:"小姐姐"
}
export default XiaojiejieItem;