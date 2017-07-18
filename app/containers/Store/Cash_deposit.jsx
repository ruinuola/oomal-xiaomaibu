import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'
import Cash_deposit_component from './subpage/Cash_deposit'

import './style.less'

class Cash_deposit extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            footDate:{}
        }
    }
    render() {
        return (
            <div id='cash_deposit'>
                <Header title='保证金'/>
                <p className="notice">
                    已缴纳保证金金额
                    <span className="float-right">￥1000.0</span>
                </p>
                <Cash_deposit_component/>
            </div>

        )
    }
    componentDidMount(){
        document.title = '保证金'
    }
}

export default Cash_deposit