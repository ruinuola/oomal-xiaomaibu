import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import './style.less'

class Change_password extends React.Component {
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
            <form id="change_password">
                <ul>
                    <li>
                        <span className="name">当前密码</span>
                        <input ref='cur_password' required type="text" placeholder='请输入原始密码'/>
                    </li>
                    <li>
                        <span className="name">新密码</span>
                        <input ref='new_password' required type="text" placeholder='请输入新密码，6-12位'/>
                    </li>
                    <li>
                        <span className="name">确认密码</span>
                        <input ref='sure_password' required type="text"/>
                    </li>
                </ul>
                <button onClick={this.cancel_login.bind(this)} id='cancel_login' type='button'>提交</button>
            </form>

        )
    }
    componentDidMount(){

    }
    cancel_login(){
        //清除用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        const password = userinfo.password
        console.log('password:'+password)
        const cur_password = this.refs.cur_password
        const new_password = this.refs.new_password
        const sure_password = this.refs.sure_password
        if( cur_password !== password ){
            alert( '您输入的当前密码不正确！' )
            return true
        }
        if( new_password !== new_password ){
            alert( '您输入的新密码与确认密码不一致！' )
            return true
        }
        userinfo.password = new_password
        actions.update(userinfo)
        this.goHomePage()
    }
    //跳转到主页
    goHomePage() {
        hashHistory.push('/More_set')
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
)(Change_password)