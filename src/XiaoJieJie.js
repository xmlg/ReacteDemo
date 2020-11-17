import React ,{Component,Fragment} from 'react'
import './style.css'
class XiaJieJie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:"默认值",
            list:['基础按摩','头部按摩']
        }        
    }
    render(){
        return (
            // <div>
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input  id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul className='list'>
                     {
                        this.state.list.map((item,index)=>{
                            return(
                                <li 
                                    key={index+item} 
                                    onClick={this.deleItem.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                    >
                                    {/* {item} */}
                                </li>
                            )
                        })
                     }   
                </ul>
            </Fragment>
            // </div>
        )
    }
    inputChange(e){
        console.log(e.target.value)
        this.setState({
            inputValue:e.target.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
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