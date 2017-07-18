import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Items from './Items'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const active = this.props.active
        const listClick = this.props.listClick
        return (
            <div className="item">
            {
                data.map(function(value, item){
                    return <Items key={item} listClick={listClick} active={active} data={value}/>
                })
            }
            </div>
        )
    }
}

export default Item