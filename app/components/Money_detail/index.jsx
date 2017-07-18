import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Money_detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div id="money_detail">
                <div className="part1">
                    <p>类型：
                        <span className="float-right">
                            {
                                data.state == 1? '收款'
                                    :data.state == 2? '退款': '提现'
                            }
                        </span>
                    </p>
                    <p>
                        金额：
                        <span className="float-right">
                            {
                                data.state == 1
                                    ? '+'+data.money.toFixed(2)
                                    : '-'+data.money.toFixed(2)
                            }
                        </span>
                    </p>
                </div>
                <div className="part2">
                    <p>交易时间：{data.time}</p>
                    <p>订单号：{data.order_num}</p>
                    <p>商品信息：
                        <span className="txt_sheng">{data.name}</span>
                        <span className='float-right'>等多件</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Money_detail