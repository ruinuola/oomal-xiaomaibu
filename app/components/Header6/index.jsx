import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const headerActive = this.props.headerActive
        const headerNav = this.props.headerNav
        return (
            <div id="header6" className="header">
                <i onClick={this.back_page.bind(this)} className="icon icon-to_left float-left"></i>

                <div className="nav">
                    <button onClick={this.headerClick.bind(this,0)} className={headerActive===0?'active':''}>{headerNav[0]}</button>
                    <button onClick={this.headerClick.bind(this,1)} className={headerActive===1?'active':''}>{headerNav[1]}</button>
                </div>
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
    headerClick(index){
        const headerClick = this.props.headerClick(index)
    }
}

export default Header