import React ,{Component,Fragment} from 'react'
import axios from 'axios' //yarn add axios --save
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
class XiaJieJie extends Component{
     //生命周期：在某一个时刻，可以自动执行的函数
    constructor(props) { ////构造函数
        super(props)
        this.state={
            inputValue:"默认值",
            list:[]
        }        
    }
    componentWillMount(){
        console.log("1-componentWillMount-组件将要挂载")
    }
    componentDidMount(){
        console.log("3-componentDidMount-组件已经挂载") 
        axios.get('https://www.easy-mock.com/mock/5fc0b8c2bbfbda51199fe6d4/reactDome01/xjjMenuList')
            .then((res)=>{
                console.log("axios获取到的数据成功"+JSON.stringify(res))
                this.setState({
                    list:res.data.data
                })
            }) 
            .catch((error)=>{console.log("axios获取数据出错"+error)})  
    }
    shouldComponentUpdate(){//必须返回 布尔值 --用于优化性能
        console.log("a-shouldComponentUpdate")
        return true 
    }

    render(){
        console.log("2-b-render-组件挂载中")
        return (
            // <div>
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input  
                        id="jspang" 
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul className='list' ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return(               
                                <XiaojiejieItem 
                                    key={index+XiaojiejieItem}
                                    content={item}
                                    index={index}
                                    xjjName = "ff"
                                    deleItem={this.deleItem.bind(this,index)}
                                /> 
                            )
                        })
                    }   
                </ul>           
            </Fragment>
            // </div>
        )
    }
    // inputChange(e){
    //     this.setState({
    //         inputValue:e.target.value
    //     })
    // }
    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        }, () => { //setState虚拟dom渲染是有延时的
            console.log(this.ul.querySelectorAll("li").length, "长度2") //正确
        })
        console.log(this.ul.querySelectorAll("li").length, "长度1")//少一个
    }
    //删除项
    deleItem(index){
        console.log(index);
        let list =this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        })
    }

}
export default XiaJieJie