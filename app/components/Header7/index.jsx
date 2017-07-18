import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="header7" className="header">
                <i onClick={this.back_page.bind(this)} className="icon icon-to_left float-left"></i>
                <h2>
                    商品详情
                </h2>
                <i className="icon icon-edit1"></i>
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