import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getYetActive } from '../../fetch/active/active.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header6'
import Crea_active from '../../components/Crea_active'
import Yet_active from '../../components/Yet_active'

class Active_gov extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            headerActive:0,
            data: [],
        }
    }
    render() {
        return (
            <div id="pro_gov">
                <Header headerNav={['创建活动','已创建活动']} headerActive={this.state.headerActive} headerClick={this.headerClick.bind(this)}/>
                {
                    this.state.headerActive === 0
                        ? <Crea_active />
                        : this.state.data.length > 0
                            ? <Yet_active data={this.state.data}/>
                            : <p>加载中...</p>
                }
            </div>
        )
    }
    componentDidMount(){
        document.title = '活动管理'
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo
        const result = (
            this.state.headerActive === 1
                ? getYetActive()
                : ''
        )
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json,
            })
        })
    }
    //header的click事件
    headerClick(index){
        const self = this
        this.setState({
            headerActive:index
        },()=>{
            if(index === 1){
                //获取已创建活动的数据
                self.loadFirstPageData();
            }
        })
    }
    //删除弹框
    hide_del(i){
        const data = [].concat(this.state.data)
        const newData = data.filter((value, item)=>{
            return item !== i
        })
        this.setState({
            data: newData
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
)(Active_gov)