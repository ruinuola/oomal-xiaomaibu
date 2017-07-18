import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getChuShouList, getCangKuList, getShouKongList } from '../../fetch/pro_gov/pro_gov.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import List from '../../components/Pro_gov_list'
import Header from '../../components/Header6'
import SearchInput1 from '../../components/SearchInput1'
import Nav from '../../components/nav'
import Footer from '../../components/Footer1'

class Pro_gov extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            headerActive:0,
            navActive:0,
            data: [],
            navData:{
                storeroom: 20,
                sale_out: 20
            },
            searchContent:'',
            total: 0,
            allCheck: false
        }
    }
    render() {
        return (
            <div id="pro_gov">
                <Header headerNav={['出售中','仓库']} headerActive={this.state.headerActive} headerClick={this.headerClick.bind(this)}/>
                {
                    this.state.headerActive === 1
                        ? <Nav navClick={this.navClick.bind(this)} navActive={this.state.navActive} data={this.state.navData}/> : ''
                }
                <SearchInput1 getSearch={this.getSearch.bind(this)}/>
                {
                    this.state.data.length > 0
                        ? <List checkIt={this.checkIt.bind(this)} hide_xiajia={this.hide_xiajia.bind(this)} hide_del={this.hide_del.bind(this)} show_tan2={this.show_tan2.bind(this)} navActive={this.state.navActive} headerActive={this.state.headerActive} data = {this.state.data}/>
                        : <p>加载中...</p>
                }
                <Footer xiajia_all={this.xiajia_all.bind(this)} del_all={this.del_all.bind(this)} check={this.state.allCheck} allCheck={this.allCheck.bind(this)} total={this.state.total} headerActive={this.state.headerActive} navActive={this.state.navActive}/>
            </div>
        )
    }
    componentDidMount(){
        document.title = '商品管理'
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo
        const result = (
            this.state.headerActive === 0
                ? getChuShouList()
                :(this.state.navActive === 0
                ? getCangKuList()
                : getShouKongList())
        )
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {

            let listDate = json.map((value,item)=>{
                value.check = false
                return value
            })

            this.setState({
                data: listDate,
                total: listDate.length
            })
        })
    }

    //header的click事件
    headerClick(index){
        const self = this
        this.setState({
            headerActive:index
        },()=>{
            //获取数据
            self.loadFirstPageData();
        })
    }
    //获取搜索内容
    getSearch(str){
        this.setState({
            searchContent: str
        })
    }
    //nav的click事件
    navClick(index){
        const self = this
        this.setState({
            navActive: index
        },()=>{
            //获取数据
            self.loadFirstPageData();
        })
    }

    show_tan2(i){
        const data = [].concat(this.state.data)
        const newData = data.filter((value, item)=>{
            return item !== i
        })
        this.setState({
            data: newData,
            total: newData.length
        })
    }
    //删除弹框
    hide_del(i){
        const data = [].concat(this.state.data)
        const newData = data.filter((value, item)=>{
            return item !== i
        })
        this.setState({
            data: newData,
            total: newData.length
        })
    }
    //下架弹框
    hide_xiajia(i){
        const data = [].concat(this.state.data)
        const newData = data.filter((value, item)=>{
            return item !== i
        })
        this.setState({
            data: newData,
            total: newData.length
        })
    }
    //全选
    allCheck(check){
        const data = [].concat(this.state.data)
        data.forEach((value, item)=>{
            value.check = check
        })
        this.setState({
            data: data,
            allCheck: check
        })
    }
    checkIt(i,check){
        const data = [].concat(this.state.data)
        data[i].check = check
        if(check === false){
            this.setState({
                data: data,
                allCheck: false
            })
        }else{
            const isAllCheck = data.every((value,item)=>{
                return value.check === true;
            })
            if(isAllCheck === true){
                this.setState({
                    data: data,
                    allCheck: true
                })
            }else{
                this.setState({
                    data: data,
                })
            }
        }
    }
    del_all(){
        const data = [].concat(this.state.data)
        const newDate = data.filter((value, item)=>{
            return value.check == false
        })
        this.setState({
            data:newDate
        })
    }
    xiajia_all(){
        const data = [].concat(this.state.data)
        const newDate = data.filter((value, item)=>{
            return value.check == false
        })
        this.setState({
            data:newDate
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
)(Pro_gov)