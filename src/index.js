import React from 'react'
import ReactDOM from 'react-dom'
import XiaJieJie from './XiaoJieJie'

//<App />:jsx is javascript and xml 遇到<就当作javascript来解析
//自定义组件首字母大写 App 改为app会报错
ReactDOM.render(< XiaJieJie/>,document.getElementById('root'))