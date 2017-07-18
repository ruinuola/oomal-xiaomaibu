import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRefund, getInProcess, getFinish } from '../../../fetch/order/order.js'

import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'

import OrderStatistics from '../../../components/OrderStatistics'
import OrderList from '../../../components/OrderList'
import Footer from '../../../components/Footer'

import './style.less'

class OrderGovDate extends React.Component {
    constructor( props, context ){
        super( props, context );
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind( this );
        this.state = {
            navActive: 'inProcess',
            listDate: [],
            footDate: {},
            orderStatistics: {}
        }
    }
    render(){
        return (
            <div>
                <ul className="nav clear-fix">
                    <li onClick={this.clickHandle.bind(this)} className={this.state.navActive === "inProcess"?'active':''} id="inProcess">进行中</li>
                    <li onClick={this.clickHandle.bind(this)} className={this.state.navActive === "finish"?'active':''} id="finish">已完成</li>
                    <li onClick={this.clickHandle.bind(this)} className={this.state.navActive === "refund"?'active':''} id="refund">退款</li>
                </ul>
                <OrderStatistics data={this.state.orderStatistics}/>
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
        console.log('navActive:'+this.state.navActive)
        const result = (
            this.state.navActive === 'refund'
                ? getRefund()
                :(this.state.navActive === 'finish'
                    ? getFinish()
                    : getInProcess())
        )
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            let userinfo = this.props.userinfo

            const footDate = {
                foot_index: 2,
                wait_handle_order_num: userinfo.wait_handle_order_num
            }

            const data = json.data
            const total = this.suan_total(data)
            const orderStatistics = {
                status: data[0].state,
                num: data.length,
                price: total
            }

            this.setState({
                orderStatistics: orderStatistics,
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
        console.log('id:'+id)
        const result = (
            id === 'refund'
                ? getRefund()
                :(id === 'finish'
                    ? getFinish()
                    : getInProcess())
        )
        this.resultListHandle( result )
    }
    //处理数据
    resultListHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json.data
            const total = this.suan_total(data)
            const orderStatistics = {
                status: data[0].state,
                num: data.length,
                price: total
            }

            this.setState({
                orderStatistics: orderStatistics,
                listDate: json.data,
            })
        })
    }
    //计算总额
    suan_total(data){
        let total = 0
        data.forEach((p, i) => {
            let order_list = p.order_list
            order_list.forEach((index, item) => {
                total += index.price * index.num
            })
            let man_jian = p.man_jian || 0
            let new_jian = p.new_jian || 0
            total += (p.peiSong - man_jian - new_jian)
        })
        return total
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
)(OrderGovDate)