import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import StoreComplate from './subpage/store'

class Store extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <StoreComplate/>
            </div>
        )
    }
}

 export default Store