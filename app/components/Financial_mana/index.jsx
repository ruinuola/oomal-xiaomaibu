import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class Financial_mana extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div id="financial_mana">
                <div className="part1">
                    <h4>今日流水销售额</h4>
                    <h1><span className="num">{data.today_money.toFixed(2)}</span>元</h1>
                    <h5>当前账户总金额</h5>
                    <h2><span className="num">{data.total_money.toFixed(2)}</span>元</h2>
                </div>
                <ul className="part2 clear-fix">
                    <li>
                        <p>昨日流水销售额</p>
                        <h4><span className="num">{data.yesterday_money.toFixed(2)}</span>元</h4>
                    </li>
                    <li>
                        <p>当月流水销售额</p>
                        <h4><span className="num">{data.month_money.toFixed(2)}</span>元</h4>
                    </li>
                </ul>
                <button className='apply'><Link to="/Apply_money">申请提现</Link></button>
            </div>

        )
    }
}

export default Financial_mana