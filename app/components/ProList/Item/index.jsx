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
        console.log(data)
        return (
            <div className="item">
            {
                data.map(function(value, item){
                    return <Items key={item} data={value}/>
                })
            }
            </div>
        )
    }
}

export default Item