import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class OrderStatistics extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div id="orderStatistics">
                <p>
                    今日
                    {
                        data.status === 'refund'
                            ? '退款'
                            : data.status === 'finish'
                                ? '已完成'
                                : '进行中'
                    }
                    <span className='red_txt'>{data.num}</span>
                    单，总额
                    <span className='red_txt'>{data.price}</span>
                    元
                </p>
            </div>
        )
    }
}

export default OrderStatistics