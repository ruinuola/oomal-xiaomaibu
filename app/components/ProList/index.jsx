import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class ProList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        console.log(data)
        return (
            <div id="proList">
                {
                    data.map(function(value, item){
                        return <Item key={item} data={value}/>
                    })
                }
            </div>
        )
    }
}

export default ProList