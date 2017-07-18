import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="SearchItem">
                <div className="img float-left">
                    <img src={data.img} alt=""/>
                </div>
                <div className="content">
                    <p className="title">{data.name}</p>
                    <p className="stock">{data.stock}</p>
                    <p className="classify">{data.classify}</p>
                </div>
            </div>
        )
    }
}

export default SearchItem