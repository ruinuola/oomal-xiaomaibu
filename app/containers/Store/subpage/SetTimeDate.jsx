import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getStoreInfo } from '../../../fetch/home/home.js'


import SetDay from '../../../components/SetDay'
import SetTime from '../../../components/SetTime'

class SetTimeDate extends React.Component {
    constructor( props, context ){
        super( props, context );
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind( this );
        this.state = {
            setDay: {},
            setTime: []
        }
    }
    render(){
        return (
            <div>
                <SetDay setDay={this.state.setDay}/>
                <SetTime add_time={this.add_time.bind(this)} del_time={this.del_time.bind(this)} setTime={this.state.setTime}/>
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
                setTime: setTime
            })
        })
    }
    //添加时间段
    add_time(time){
        let times = this.clone(this.state.setTime)
        for(let i=0,t;t=times[i++];){
            if(t.start === time.start && t.end === time.end){
                alert('不能够添加重复的时间段')
                return false
            }
        }
        times.push(time)
        this.setState({
            setTime: times
        })
    }
    //删除时间段
    del_time(index){
        let times = this.clone(this.state.setTime)
        times.splice(index-1, 1)
        this.setState({
            setTime: times
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

export default SetTimeDate