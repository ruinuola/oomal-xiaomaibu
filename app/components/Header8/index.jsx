import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="header8" className="header">
                <i onClick={this.back_page.bind(this)} className="icon icon-to_left float-left"></i>
                <h2>
                    财务管理
                </h2>
                <button><Link to="/History_menu">账户明细</Link></button>
            </div>
        )
    }
    //返回上一页
    back_page() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            hashHistory.push(backRouter)
        }else{
            window.history.back()
        }
    }
}

export default Header