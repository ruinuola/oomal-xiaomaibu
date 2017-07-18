import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const navActive = this.props.navActive
        const data = this.props.data
        return (
            <ul className="nav nav-two clear-fix">
                <li onClick={this.navClick.bind(this,0)} className={navActive===0?"active":''}>
                    仓库
                    <span className='gray_txt'>（{data.storeroom}）</span>
                </li>
                <li onClick={this.navClick.bind(this,1)} className={navActive===1?"active":''}>
                    已售空
                    <span className='gray_txt'>（{data.sale_out}）</span>
                </li>
            </ul>
        )
    }
    navClick(index){
        const navClick = this.props.navClick
        navClick(index)
    }
}

export default Nav