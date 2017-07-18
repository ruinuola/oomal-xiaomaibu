import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import StoreDate from './subpage/storeDate'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <StoreDate/>
            </div>
        )
    }
    componentDidMount(){
        document.title="抠抠小卖部"
        document.body.style.backgroundColor = '#eee'
        console.log('抠抠小卖部')
    }
}

export default Home
