import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeList1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <ul className="homeList1 clear-fix">
                <li>
                    <div className="center">
                        <h3>{this.props.listDate.firm_order_num}</h3>
                        <p>今日有效订单</p>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <h3>{this.props.listDate.sale_money}</h3>
                        <p>今日流水销售额</p>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <h3>{this.props.listDate.balance}</h3>
                        <p>账户余额</p>
                    </div>
                </li>
            </ul>
        )
    }
}

export default HomeList1

