import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="searchInput">
                <div className="input">
                    <i className="icon icon-search1"></i>
                    <input type="text" placeholder='搜索'/>
                </div>
            </div>
        )
    }
}

export default SearchInput