import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="searchInput1">
                <i className="icon icon-search2"></i>
                <input ref='search' onChange={this.getSearch.bind(this)} type="text" placeholder='请在这里搜索'/>
            </div>
        )
    }
    getSearch(){
        let str = this.refs.search.value.trim()
        const getSearch = this.props.getSearch
        getSearch(str)
    }
}

export default SearchInput1