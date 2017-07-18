import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header2'
import OrderGovDate from './subpage/OrderGovDate'

class OrderGov extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            footDate:{}
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <OrderGovDate/>
            </div>

        )
    }
    componentDidMount(){
        document.title = '待处理订单'
    }
}

export default OrderGov