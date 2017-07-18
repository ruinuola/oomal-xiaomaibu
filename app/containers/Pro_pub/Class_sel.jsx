import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'
import SearchInput from '../../components/SearchInput'
import ClassSelDate from './subpage/ClassSelDate'

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
                <Header title='类目选择'/>
                <ClassSelDate/>
            </div>
        )
    }
    componentDidMount(){
        document.title='类目选择'
    }
}

export default SearchList