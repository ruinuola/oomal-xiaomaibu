import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'
import SearchInput from '../../components/SearchInput'
import SearchListDate from './subpage/SearchListDate'

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <div>
                <Header title='搜索列表'/>
                <SearchInput/>
                <SearchListDate/>
            </div>
        )
    }
    componentDidMount(){
        document.title='搜索列表'
    }
}

export default SearchList