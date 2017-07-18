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
        const active = this.props.active
        const listClick = this.props.listClick
        return (
            <div id="proList">
                {
                    data.map(function(value, item){
                        return <Item key={item} listClick={listClick} active={active} data={value}/>
                    })
                }
            </div>
        )
    }
}

export default ProList