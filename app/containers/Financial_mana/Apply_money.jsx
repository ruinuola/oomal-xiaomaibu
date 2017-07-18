import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { get_apply_money } from '../../fetch/money/apply_money.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import Apply_money_component from '../../components/Apply_money'

class Apply_money extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:{}
        }
    }
    render() {
        const data = this.state.data
        return (
            <div>
                <Header title='财务管理'/>
                {
                    data.hasOwnProperty('max_money')
                        ? <Apply_money_component data={data}/>
                        : <p>加载中...</p>
                }

            </div>
        )
    }
    componentDidMount(){
        document.title = '财务管理'
        document.body.backgroundColor = '#eee'
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo

        const result = get_apply_money()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
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
)(Apply_money)