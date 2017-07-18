import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRefund, getWaitSend } from '../../../fetch/order/order.js'

import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'

import OrderList from '../../../components/OrderList'
import Footer from '../../../components/Footer'

import './style.less'

class WaitHandleDate extends React.Component {
    constructor( props, context ){
        super( props, context );
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind( this );
        this.state = {
            navActive: 'waitSend',
            listDate: [],
            footDate: {}
        }
    }
    render(){
        return (
            <div>
                <ul className="nav clear-fix">
                    <li onClick={this.clickHandle.bind(this)} className={this.state.navActive === "waitSend"?'active':''} id="waitSend">代发配送</li>
                    <li onClick={this.clickHandle.bind(this)} className={this.state.navActive === "refund"?'active':''} id="refund">退款</li>
                </ul>
                <OrderList listDate={this.state.listDate}/>
                {
                    this.state.footDate.hasOwnProperty('foot_index')
                        ?<Footer footDate={this.state.footDate}/>
                        :''
                }
            </div>
        )
    }
    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo

        const result = (
            this.state.navActive === 'waitSend'
                ? getWaitSend()
                : getRefund()
        )
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const footDate = {
                foot_index: 1,
                wait_handle_order_num: json.wait_handle_order_num
            }
            this.setState({
                listDate: json.data,
                footDate: footDate
            })
        })
    }
    //nav点击事件
    clickHandle(e) {
        let target = e.target
        let id = e.target.id
        this.setState({
            navActive: id
        })
        this.loadData(id)
    }
    //获取首页数据
    loadData(id) {
        const result = (
            id === 'waitSend'
                ? getWaitSend()
                : getRefund()
        )
        this.resultListHandle( result )
    }
    //处理数据
    resultListHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                listDate: json.data,
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
)(WaitHandleDate)