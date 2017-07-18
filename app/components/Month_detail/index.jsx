import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class Month_detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div id="month_detail">
                <p className='zhouqi'>记账周期 {data.time}</p>
                <div className="total">
                    账单总金额
                    <span className="float-right">
                        ￥
                        <span className="num">{data.total}</span>
                    </span>
                </div>
                <ul className="list">
                {
                     data.days.map(( value, item )=>{
                     return <Item key={item} data={value}/>
                     })
                }
                </ul>

            </div>
        )
    }
}

export default Month_detail