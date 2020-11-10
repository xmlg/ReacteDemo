import React,{Component} from 'react'

class App extends Component{
    render(){
        return(
            <ul className="my-list">
                <li>what is your name?</li>
                <li>may name is XuMin</li>
            </ul>
            // var child1 = React.createElement('li',null,'what is your name?')
            // var child2 =  React.createElement('li',null,'my name is XuMin')
            // var root = React.createElement('ul',{className:'my-list'},child1,child2)
        )
    }
}
export default App