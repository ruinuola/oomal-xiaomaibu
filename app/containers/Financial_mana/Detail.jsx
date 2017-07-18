import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { get_month_detail } from '../../fetch/money/month_detail.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import Money_detail from '../../components/Money_detail'

class Detail extends React.Component {
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
                <Header title='详情'/>
                {
                    data.hasOwnProperty('name')
                        ? <Money_detail data={data}/>
                        : <p>加载中...</p>
                }
            </div>
        )
    }
    componentDidMount(){
        document.title = '详情'
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
                data: json.days[0]
            },()=>{
                console.log(this.state.data)
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
)(Detail)