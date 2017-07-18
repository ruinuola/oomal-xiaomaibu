import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class Menu_month extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        console.log(data)
        return (
            <li onClick={this.navClick.bind(this,0)} className='month clear-fix'>
                <Link to="/Money_detail">
                    <div className="part1 float-left">
                        <p className="line1">{data.month}月账单</p>
                        <p className="line2">{data.time}</p>
                    </div>
                    <div className="part2 float-right">
                        ￥{data.money.toFixed(2)}
                        <i className="icon icon-to_right1"></i>
                    </div>
                </Link>
            </li>
        )
    }
    navClick(index){
        //const navClick = this.props.navClick
        //navClick(index)
    }
}

export default Menu_month