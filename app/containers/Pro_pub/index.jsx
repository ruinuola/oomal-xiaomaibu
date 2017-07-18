import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header5'
import Pro_pub_component from '../../components/Pro_pub'

class Pro_pub extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header/>
                <Pro_pub_component/>
            </div>
        )
    }
    componentDidMount(){
        document.title='商品发布'
    }
}

export default Pro_pub