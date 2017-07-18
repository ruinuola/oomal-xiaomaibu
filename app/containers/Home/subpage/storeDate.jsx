import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStoreInfo } from '../../../fetch/home/home.js'

import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'

import HomeHeader from '../../../components/HomeHeader'
import HomeList1 from '../../../components/HomeList1'
import HomeList2 from '../../../components/HomeList2'
import Footer from '../../../components/Footer'

class HomeDate extends React.Component {
    constructor( props, context ){
        super( props, context );
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind( this );
        this.state = {
            headerDate: [],
            listDate: [],
            footDate: {}
        }
    }
    render(){
        return (
            <div>
                <HomeHeader headerDate={this.state.headerDate}/>
                <HomeList1 listDate={this.state.listDate}/>
                <img style={{width: "100%"}} src={require('../../../static/images/homeBg.jpg')} alt=""/>
                <HomeList2/>
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
        const result = getStoreInfo( username )
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const headerDate = {
                storeName: json.storeName,
            }
            const listDate = {
                firm_order_num: json.firm_order_num,
                sale_money: this.convert( json.sale_money ),
                balance: json.balance
            }
            const footDate = {
                foot_index: 3,
                wait_handle_order_num: json.wait_handle_order_num
            }
            this.setState({
                headerDate: headerDate,
                listDate: listDate,
                footDate: footDate
            })

            const actions = this.props.userInfoActions
            let userinfo = this.props.userinfo
            userinfo.wait_handle_order_num = json.wait_handle_order_num
            actions.update(userinfo)
        })
    }
    /**转化金额**/
    convert(money) {
        var str = money;
        str += "";
        var str=str.replace(/(\d{3})/g,'$1,').replace(/\,$/,'');
        return str;
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
)(HomeDate)