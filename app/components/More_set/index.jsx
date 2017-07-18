import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import './style.less'

class More_set extends React.Component {
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
            <div id="more_set">
                <ul>
                    <li>
                        <Link to="/Change_password">
                            <i className="icon icon-edit3"></i>
                            修改密码
                            <i className="icon icon-to_right1 float-right center"></i>
                        </Link>
                    </li>
                    <li>
                        <i className="icon icon-user"></i>
                        关于我们
                        <i className="icon icon-to_right1 float-right center"></i>
                    </li>
                    <li>
                        <i className="icon icon-share"></i>
                        应用分享
                        <i className="icon icon-to_right1 float-right center"></i>
                    </li>
                </ul>
                <button id='cancel_login' type='button'>
                    <Link to="/Login">
                        注销登录
                    </Link>
                </button>
            </div>

        )
    }
    componentDidMount(){

    }
    cancel_login(){
        //清除用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo = {}
        actions.update(userinfo)
        this.goHomePage()
    }
    //跳转到主页
    goHomePage() {
        hashHistory.push('/Login')
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
)(More_set)