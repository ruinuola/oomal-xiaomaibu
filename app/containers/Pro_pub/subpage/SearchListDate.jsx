import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getSearchList} from '../../../fetch/search/search_list'

import SearchItem from '../../../components/SearchItem'

class SearchListDate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list: []
        }
    }
    render() {
        const list = this.state.list
        return (
            <div id='searchList'>
            {
                list.map(function(value, item){
                    return <SearchItem key={item} data={value}/>
                })
            }
            </div>
        )
    }
    componentDidMount(){
        document.title='搜索列表'
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const result = getSearchList()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                list: json
            })
        })
    }
}

export default SearchListDate