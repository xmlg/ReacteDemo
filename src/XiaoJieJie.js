import React ,{Component,Fragment} from 'react'

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
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul className='list'>
                     {
                        this.state.list.map((item,index)=>{
                            return<li key={index+item}>{item}</li>
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
    addList(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}
export default XiaJieJie