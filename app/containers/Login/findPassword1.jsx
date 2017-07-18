import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import "./findPassword.less"

class findPassword1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            is_phone_num: false
        }
    }
    render() {
        return (
            <div>
                <Header title='找回密码'/>
                <form className="findPas1">
                    <div className="phone clear-fix">
                        <span className="float-left">+86</span>
                        <input onKeyUp={this.checkPhoneLength.bind(this)} ref="phone" className="float-left" type="text" placeholder="请输入绑定到手机号"/>
                    </div>
                    <button onClick={this.checkPhone.bind(this)} className={this.state.is_phone_num?"active":""} disabled={this.state.is_phone_num?"":"disabled"} type="button">下一步</button>
                </form>
            </div>

        )
    }
    componentWillMount() {
        document.title="找回密码"
    }
    //检查输入手机号的位数
    checkPhoneLength(e){
        var num = e.target.value
        if(num.length === 11){
            this.setState({
                is_phone_num: true
            })
        }else{
            this.setState({
                is_phone_num: false
            })
        }
    }
    //验证手机号,并跳转页面
    checkPhone() {
        let num = this.refs.phone.value.trim()
        console.log('num:' + num)
        let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
        if(!myreg.test(num)){
            alert('请输入有效的手机号码！')
            return false
        }
        //保存手机号
        var actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.phone = num
        actions.update( userinfo )

        //跳转页面
        this.goPage()
    }
    goPage(){
        hashHistory.push('/findPassword2')
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(findPassword1)