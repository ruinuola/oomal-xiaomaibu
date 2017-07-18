import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const title = this.props.title
        return (
            <div className="header">
                <i onClick={this.back_page.bind(this)} className="icon icon-to_left float-left"></i>
                <h2>{title}</h2>
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