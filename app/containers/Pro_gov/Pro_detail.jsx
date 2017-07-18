import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getProDetail } from '../../fetch/pro_gov/pro_detail.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header7'
import Pro_detail_content1 from '../../components/Pro_detail_content1'
import Pro_detail_content2 from '../../components/Pro_detail_content2'

class ProDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data1:[],
            data2:[]
        }
    }
    render() {
        return (
            <div id="pro_detail">
                <Header/>
                {
                    this.state.data1.hasOwnProperty('name')
                        ? <Pro_detail_content1 data={this.state.data1}/>
                        : <p>加载中...</p>
                }
                {
                    this.state.data2.hasOwnProperty('detail')
                        ? <Pro_detail_content2 data={this.state.data2}/>
                        : ''
                }

            </div>
        )
    }
    componentDidMount(){
        document.title = '商品详情'
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo
        const result = getProDetail()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const data1 = Object.assign({}, json)
            delete data1.detail
            delete data1.state
            const data2 = {
                detail: json.detail,
                state: json.state
            }
            this.setState({
                data1: data1,
                data2: data2,
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
)(ProDetail)