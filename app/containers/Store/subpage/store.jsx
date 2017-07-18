import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStoreInfo } from '../../../fetch/home/home.js'

import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'

import Header from '../../../components/Header3'
import StorePart1 from '../../../components/StorePart1'
import SetStore from '../../../components/SetStore'
import Footer from '../../../components/Footer'

import './style.less'

class Store extends React.Component {
    constructor( props, context ){
        super( props, context );
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind( this );
        this.state = {
            headerDate: [],
            storeInfo: {},
            footDate: {}
        }
    }
    render(){
        const storeInfo = getStoreInfo()
        return (
            <div>
                <Header/>
                <StorePart1 change_yingye={this.change_yingye.bind(this)} hide_tan={this.hide_tan.bind(this)} show_tan={this.show_tan.bind(this)} status={this.state.status}/>
                <SetStore storeInfo={this.state.storeInfo}/>
                {
                    this.state.footDate.hasOwnProperty('foot_index')
                        ?<Footer footDate={this.state.footDate}/>
                        :''
                }
                <div className="tan">
                    <div id="tan2">
                        <div className="tan_body">
                            <p>当你需要长时间不在接收订单是，可以手动选择停止营业</p>
                        </div>
                        <div className="tan_foot">
                            <button onClick={this.hide_tan.bind(this)}>取消</button>
                            <button onClick={this.change_yingye.bind(this)}>{this.state.status?'开始营业':'停止营业'}</button>
                        </div>
                    </div>
                </div>
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
            let userinfo = this.props.userinfo

            const status = json.status
            const storeInfo = {
                storeName: json.storeName,
                phone: json.phone,
                logo_img: json.logo_img,
                store_bg: json.store_bg,
                shiti_img: json.shiti_img
            }
            const footDate = {
                foot_index: 4,
                wait_handle_order_num: userinfo.wait_handle_order_num
            }
            this.setState({
                status: status,
                storeInfo: storeInfo,
                footDate: footDate
            })
        })
    }
    //显示营业状态的弹框
    show_tan(){
        let tan = document.getElementsByClassName('tan')[0]
        let tan2 = document.getElementById('tan2')
        tan.style.display = 'block'
        tan2.style.display = 'block'
    }
    //隐藏营业状态的弹框
    hide_tan(){
        let tan = document.getElementsByClassName('tan')[0]
        let tan2 = document.getElementById('tan2')
        tan.style.display = 'none'
        tan2.style.display = 'none'
    }
    //改变营业状态
    change_yingye(){
        this.setState({
            status: !this.state.status
        })
        this.hide_tan()
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
)(Store)