import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header1'
import WaitHandleDate from './subpage/waitHandleDate'


class WaitHandle extends React.Component {
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
                <Header title="订单管理"/>
                <WaitHandleDate/>
            </div>

        )
    }
    componentDidMount(){
        document.title = '待处理订单'
    }
}

export default WaitHandle