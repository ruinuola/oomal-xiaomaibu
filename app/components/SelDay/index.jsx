import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SelDay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            setDay:this.props.setDay
        }
    }
    render() {
        let setDay = this.props.setDay
        const duiYing = {
            Mon:'周一',
            Tues:'周二',
            Wed:'周三',
            Thur:'周四',
            Fri:'周五',
            Sat:'周六',
            Sun:'周日'
        }
        const arr = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
        let self = this
        return (
            <div className="selDay">
                <ul>
                {
                arr.map( function(value,index){
                    return (
                        <li onClick={self.clickHandle.bind(self,value)} className={setDay[value]?'active':''} key={index}>
                            <span>每{duiYing[value]}</span>
                            <i className="icon icon-blue_right float-right"></i>
                        </li>
                    )
                })
                }
                </ul>
            </div>
        )
    }
    //选中与取消
    clickHandle( value ){
        console.log('点击了')
        const selActiveFn = this.props.sel_active
        selActiveFn(value)
    }
}

export default SelDay