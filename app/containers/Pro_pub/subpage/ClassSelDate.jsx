import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getStoreInfo} from '../../../fetch/pro/pro_ku.js'

import ProNav from '../../../components/ProNav'
import ClassList from '../../../components/ClassList'

import './style.less'

class ClassSelDate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            list: [],
            active: [0,0,0]
        }
    }
    render() {
        return (
            <div className='list clear-fix'>
                <ProNav navClickClass2={this.navClickClass2.bind(this)} navClickClass1={this.navClickClass1.bind(this)} active={this.state.active}  data={this.state.data}/>
                {
                    this.state.list.length>0
                        ?<ClassList listClick={this.listClick.bind(this)} active={this.state.active} data={this.state.list}/>
                        :<p>加载中。。。</p>
                }
            </div>
        )
    }
    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const result = getStoreInfo()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            let list = json[0].classify2
            this.setState({
                data: json,
                list: [list]
            })
        })
    }
    //nav点击事件
    navClickClass2(i, k){
        console.log('i:'+i+',k:'+k)
        let event = window.event
        event.cancelBubble = true

        let active = this.clone( this.state.active )
        active[0] = i
        active[1] = k
        let list = this.clone(this.state.data)
        list = list[i].classify2
        let arr = [list[k]]
        let arr1 = [arr]
        this.setState({
            list: arr1,
            active: active
        })
    }
    navClickClass1(index){
        let event = window.event
        event.cancelBubble = true
        let active = [].concat(this.state.active)
        active[0] = index
        let list = [].concat(this.state.data)
        list = list[index].classify2
        this.setState({
            list: [list],
            active: active
        })
    }
    //list点击事件
    listClick(i){
        let active = [].concat(this.state.active)
        active[2] = i
        this.setState({
            active: active
        })
    }
    //克隆对象
    clone(Obj){
        var buf
        if(Obj instanceof Array) {
            buf = []
            var i = Obj.length
            while(i--){
                buf[i] = this.clone(Obj[i])
            }
            return buf
        }else if(Obj instanceof Object) {
            buf = {}
            for(let k in Obj){
                buf[k] = this.clone(Obj[k])
            }
            return buf
        }else{
            return Obj
        }
    }
}

export default ClassSelDate