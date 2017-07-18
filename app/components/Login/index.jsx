import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, haskHistory } from 'react-router'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showPassword:true
        }
    }
    render() {
        return (
            <div className="login-container">
                <div className="inputs">
                    <div className="user">
                        <i className="icon icon-users"></i>
                        <input type="text" ref="phone" placeholder="手机号"/>
                        <i className="icon icon-close float-right"></i>
                    </div>
                    <div className="password">
                        <i className="icon icon-suo"></i>
                        {
                            this.state.showPassword
                                ? <input type="text" ref="password" placeholder="密码"/>
                                : <input type="password" ref="password" placeholder="密码"/>
                        }
                        {
                            this.state.showPassword
                                ? <i className="icon icon-show float-right"></i>
                                : <i className="icon icon-Blind float-right"></i>
                        }
                    </div>
                </div>
                <Link to='/findPassword1'>
                    <span className="float-right find-password"> 忘记密码</span>
                </Link>
                <button onClick={this.loginHandle.bind(this)} className="login-btn" type="button">登录</button>
            </div>
        )
    }
    //显示与隐藏密码
    showAndHide() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    //清空手机号
    clearPhone() {
         this.refs.phone.value = ''
    }
    loginHandle() {
        var loginHandle = this.props.loginHandle
        var user = this.refs.phone.value.trim()
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
        if(user.length === 0 || !myreg.test(user))
        {
            alert('请输入有效的手机号码！')
            return false
        }
        var password = this.refs.password.value.trim()
        if(password.length === 0){
            alert('请输入正确的密码')
            return false
        }
        loginHandle()
    }

}

export default Login