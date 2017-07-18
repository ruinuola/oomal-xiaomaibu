import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class HomeList2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <ul className="homeList2 clear-fix">
                <li>
                    <div className="center">
                        <Link to='/Pro_pub'>
                            <i className="icon icon-icon1"></i>
                            <p>商品发布</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <Link to='/Pro_gov'>
                            <i className="icon icon-icon2"></i>
                            <p>商品管理</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <Link to='/Active_gov'>
                            <i className="icon icon-icon3"></i>
                            <p>活动管理</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <Link to='/Financial_mana'>
                            <i className="icon icon-icon4"></i>
                            <p>财务管理</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <Link to='/Set_yunfei'>
                            <i className="icon icon-icon5"></i>
                            <p>物流管理</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <Link to='/More_set'>
                            <i className="icon icon-icon6"></i>
                            <p>更多设置</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="center">
                        <i className="icon icon-icon7"></i>
                    </div>
                </li>
            </ul>
        )
    }
}

export default HomeList2

