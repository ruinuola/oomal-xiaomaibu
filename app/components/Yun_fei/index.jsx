import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getYunfei } from '../../fetch/yunfei/yunfei.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Item1 from './subpage/Item1'
import Item2 from './subpage/Item2'

import './style.less'

class Yunfei extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            is_edit: false,
            data:[],
            edit_data:[]
        }
    }
    render() {
        const data = this.state.data
        const edit_data = this.state.edit_data
        const is_edit = this.state.is_edit
        return (
            <form className="content">
                {
                    data.map((value, item)=>{
                        return <Item1 key={item} data={value}/>
                    })
                }
                {
                    edit_data.map((value, item)=>{
                        return <Item2 key={item} item={item} data={value} input_change={this.input_change.bind(this)} del_moban={this.del_moban.bind(this)}/>
                    })
                }
                <div onClick={this.add_moban.bind(this)} className="add_moban">
                    增加指定地区运费模板
                </div>
                <div className="btns">
                    <button onClick={this.save_edit.bind(this)} className='save' type='button'>
                        {is_edit? '保存设置':'编辑修改'}
                    </button>
                </div>
            </form>
        )
    }
    componentDidMount(){
        document.title = '运费设置'
        this.loadFirstPageData()
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo
        const result = getYunfei()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            if(json.length>0){
                this.setState({
                    data: json
                })
            }else{
                this.setState({
                    edit_data: {
                        range:[0,3],
                        is_close: false
                    },
                    is_edit: true
                })
            }

        })
    }
    //增加模板
    add_moban(){
        let last_data, range
        if( this.state.edit_data.length === 0 ){
            last_data = this.state.data[this.state.data.length-1]
        }else{
            last_data = this.state.edit_data[this.state.edit_data.length-1]
        }
        range = last_data.range
        const new_data = {
            is_close: true,
            range: [range[1], range[1]+2]
        }
        let edit_data = [].concat(this.state.edit_data)
        edit_data.push(new_data)
        this.setState({
            is_edit: true,
            edit_data: edit_data
        })
    }
    //删除模板
    del_moban(i){
        console.log('i:'+i)
        let edit_data = [].concat(this.state.edit_data)
        const new_data = edit_data.filter((value, item)=>{
            return item != i
        })
        //edit_data.slice(i,1)
        this.setState({
            is_edit: new_data.length > 0,
            edit_data: new_data
        })
    }
    //保存设置和编辑修改
    save_edit(){
        if( this.state.is_edit ){
            this.save()
        }else{
            this.edit()
        }
    }
    save(){
        console.log('保存')
        let edit_data = [].concat(this.state.edit_data)
        let is_manzu = edit_data.every((value, item)=>{
            if(!value.hasOwnProperty('qisong_money')||value.qisong_money<=0){
                alert('请输入合理的起送价格！')
                return false
            }
            if( !value.hasOwnProperty('range')||(value.range[0]>=value.range[1]) ){
                alert('请输入合理的运送范围！')
                return false
            }
            if(!value.hasOwnProperty('first_weight')||value.first_weight<=0){
                alert('请输入合理的首重！')
                return false
            }
            if(!value.hasOwnProperty('first_money')||value.first_money<=0){
                alert('请输入合理的首重金额！')
                return false
            }
            if(!value.hasOwnProperty('every_weight')||value.every_weight<=0){
                alert('请输入合理的增加重量！')
                return false
            }
            if(!value.hasOwnProperty('every_money')||value.every_money<=0){
                alert('请输入合理的增加重量金额！')
                return false
            }
            if(!value.hasOwnProperty('time')||value.time<=0){
                alert('请输入合理的运送时间！')
                return false
            }
            return true
        })
        if(is_manzu){
            this.setState({
                data: this.state.data.concat( edit_data ),
                edit_data: [],
                is_edit: false
            })
        }
    }
    edit(){
        this.setState({
            data: [],
            edit_data: this.state.data.concat( this.state.edit_data ),
            is_edit: true
        })
    }
    //输入框改变，存储数据
    input_change(i,name, value){
        const data = [].concat(this.state.edit_data)
        if(name === 'range1'){
            data[i][name][0] = value
        }else if(name === 'range2'){
            data[i][name][1] = value
        }else{
            data[i][name] = value
        }
        this.setState({
            edit_data: data
        })
    }
}

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
)(Yunfei)