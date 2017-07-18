import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'
import Pro_des_component from '../../components/Pro_des'

class Pro_des extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='商品描述'/>
                <Pro_des_component/>
            </div>
        )
    }
    componentDidMount(){
        document.title='商品描述'
    }
}

export default Pro_des