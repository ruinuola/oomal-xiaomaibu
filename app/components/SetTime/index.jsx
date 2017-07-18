import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SetStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        }
    }
    render() {
        let setTime = this.props.setTime
        const self = this
        return (
            <div className="setTime">
                <p>请设置营业时间段（最多三个）</p>
                <ul>
                {
                setTime.map(function(value, index){
                    return (
                        <li key={index}>
                            <span>{value.start} - {value.end}</span>
                            <i onClick={self.del_time.bind(self, index)} className="icon icon-del float-right"></i>
                        </li>
                    )
                })
                }
                </ul>
                <button onClick={this.show_tan1.bind(this)}>添加营业时间</button>
                {/*弹框*/}
                <div className="tan">
                    <div id="tan1">
                        <div className="zhanshi">
                            <div className="input1">
                                <input onKeyUp={this.set_focus.bind(this)} id="h1" ref='h1' required maxLength='2' type="number"/>
                                <span>:</span>
                                <input onKeyUp={this.set_focus.bind(this)} id="m1" ref='m1' required maxLength='2' type="number"/>
                            </div>
                            <i className="icon icon-time_jiange"></i>
                            <div className="input2">
                                <input onKeyUp={this.set_focus.bind(this)} id="h2" ref='h2' required maxLength='2' type="number"/>
                                <span>:</span>
                                <input onKeyUp={this.set_focus.bind(this)} id="m2" ref='m2' required maxLength='2' type="number"/>
                            </div>
                        </div>
                        <button onClick={this.add_time.bind(this)}>确认添加</button>
                    </div>
                </div>
            </div>
        )
    }
    //显示添加时间弹框
    show_tan1(){
        let setTime = this.props.setTime
        if(setTime.length>=3){
            alert('营业时间段最多3个')
            return false
        }
        let tan = document.getElementsByClassName('tan')[0]
        let tan1 = document.getElementById('tan1')
        tan.style.display = 'block'
        tan1.style.display = 'block'
    }
    //添加时间
    add_time() {
        let add_time = this.props.add_time
        const h1 = this.refs.h1.value.trim()
        const m1 = this.refs.m1.value.trim()
        const h2 = this.refs.h2.value.trim()
        const m2 = this.refs.m2.value.trim()
        const time = {start:h1+':'+m1, end:h2+':'+m2}
        let tan = document.getElementsByClassName('tan')[0]
        let tan1 = document.getElementById('tan1')
        tan.style.display = 'none'
        tan1.style.display = 'none'
        add_time(time)
    }
    //删除时间
    del_time(i) {
        let del_time = this.props.del_time
        del_time(i)
    }
    set_focus(e) {
        let target = e.target
        let id = target.id
        let value = target.value.trim()
        this
        if(value.length >= 2){
            if(id === 'h1'){
                if(parseInt(value)>24){
                    alert('请输入合法的时间段')
                    return false
                }
                this.refs.m1.focus()
            }else if(id === 'm1'){
                if(parseInt(value)>60){
                    alert('请输入合法的时间段')
                    return false
                }
                this.refs.h2.focus()
            }else if(id === 'h2'){
                if(parseInt(value)>24){
                    alert('请输入合法的时间段')
                    return false
                }
                this.refs.m2.focus()
            }else if(id === 'm2'){
                if(parseInt(value)>60){
                    alert('请输入合法的时间段')
                    return false
                }
            }
        }

    }
}

export default SetStore