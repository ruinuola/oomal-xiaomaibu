import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class SetDay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let setDay = this.props.setDay
        let Days = this.setDays(setDay)
        return (
            <div className="setDay">
                <p>请选择每周重复的营业日</p>
                <div>
                    <Link to="/SelDay">
                        <span>营业日</span>
                        <div className="float-right">
                            <span>{Days}</span>
                            <i className="icon icon-to_right1"></i>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
    //处理传过来的day数据
    setDays( setDay ){
        let days = []
        let duizhao = {Mon:'周一', Tues:'周二',
            Wed:'周三', Thur:'周四', Fri:'周五',
            Sat:'周六', Sun:'周日'}
        for(let key in setDay){
            if(setDay[key]){
                days.push(duizhao[key])
            }
        }
        if(days.length === 7){
            return '每天'
        }else{
            return days.join('，')
        }
    }
}

export default SetDay