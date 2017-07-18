import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import { getStoreInfo } from '../../../fetch/home/home.js'

import SelDay from '../../../components/SelDay'

import './style.less'

class SetTimeDate extends React.Component {
    constructor( props, context ){
        super( props, context );
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind( this );
        this.state = {
            setDay: {},
        }
    }
    render(){
        return (
            <div>
                <div className="header">
                    <i onClick={this.back_page.bind(this)} className="icon icon-to_left float-left"></i>
                    <h2>选择营业日</h2>
                    <button onClick={this.sel_all.bind(this)}>全选</button>
                </div>
                <SelDay sel_active={this.sel_active.bind(this)} setDay={this.state.setDay}/>
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
            const setDay = json.yingye_day
            const setTime = json.yingye_time
            this.setState({
                setDay: setDay,
            })
        })
    }
    //全选
    sel_all(){
        const all_sel_arr = {
            Mon: true,
            Tues: true,
            Wed: true,
            Thur: true,
            Fri: true,
            Sat: true,
            Sun: true
        }
        this.setState({
            setDay: all_sel_arr,
        })
    }
    //选中与取消
    sel_active( value ){
        console.log('执行sel_active')
        let setDay = this.clone( this.state.setDay )
        setDay[value] = !setDay[value]
        this.setState({
            setDay: setDay
        })
    }
    //返回上一页
    back_page() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            hashHistory.push(hashHistory)
        }else{
            window.history.back()
        }
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

export default SetTimeDate