import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <div id="header2" className="header">
                <div className="input">
                    <i className="icon icon-search"></i>
                    <input type="text" placeholder="订单序列号/订单号/手机号"/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            title: this.props.title
        })
    }
}

export default Header2