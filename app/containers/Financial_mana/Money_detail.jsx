import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { get_month_detail } from '../../fetch/money/month_detail.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import Month_detail_component from '../../components/Month_detail'

class month_detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:{}
        }
    }
    render() {
        const data = this.state.data
        let is_get_data = data.hasOwnProperty('days')
        console.log(is_get_data)
        return (
            <div>
                <Header title='财务明细'/>
                {
                    data.hasOwnProperty('days')
                        ? <Month_detail_component data={data}/>
                        : <p>加载中...</p>
                }

            </div>
        )
    }
    componentDidMount(){
        document.title = '财务明细'
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo

        const result = get_month_detail()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
            this.setState({
                data: json
            })
        })
    }
}

//------------------redux react 绑定-----------------------
function mapStateToProps( state ){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps( dispatch ){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(month_detail)