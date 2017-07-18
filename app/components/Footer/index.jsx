import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: '',
            wait_handle_order_num: 0
        }
    }
    render() {
        return (
            <ul id="footer">
                <li className={this.state.index===1? "active": ""}>
                    <Link to='/WaitHandle'>
                        {
                            this.state.index===1
                                ?<i className="icon icon-foot_red_1"></i>
                                :<i className="icon icon-foot1"></i>
                        }
                        <p>待处理</p>
                        {
                            this.state.wait_handle_order_num > 0
                                ? <span>{this.state.wait_handle_order_num}</span>
                                : ''
                        }
                    </Link>
                </li>
                <li className={this.state.index===2? "active": ""}>
                    <Link to='/OrderGov'>
                        {
                            this.state.index===2
                                ?<i className="icon icon-foot_red_2"></i>
                                :<i className="icon icon-foot2"></i>
                        }
                        <p>订单管理</p>
                    </Link>
                </li>
                <li className={this.state.index===3? "active": ""}>
                    <Link to='/Home'>
                        {
                            this.state.index===3
                                ?<i className="icon icon-foot_red_3"></i>
                                :<i className="icon icon-foot3"></i>
                        }
                        <p>门店运营</p>
                    </Link>
                </li>
                <li className={this.state.index===4? "active": ""}>
                    <Link to='/Store'>
                        {
                            this.state.index===4
                                ?<i className="icon icon-foot_red_4"></i>
                                :<i className="icon icon-foot4"></i>
                        }
                        <p>我的店铺</p>
                    </Link>
                </li>
            </ul>
        )
    }
    componentDidMount(){
        const index = this.props.footDate.foot_index
        const wait_handle_order_num = this.props.footDate.wait_handle_order_num
        this.setState({
            index: parseInt(index),
            wait_handle_order_num: wait_handle_order_num
        })
    }
}

export default Footer