import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import LoginComponent from '../../components/Login'
import JiaMeng from '../../components/JiaMeng'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title='农村抠抠'/>
            	<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
            	<JiaMeng/>
            </div>
        )
    }
    componentWillMount() {
        document.title="农村抠抠"
    }
    // 处理登录之后的事
    loginHandle(username){
    	//保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)
        this.goHomePage()

    }
	//跳转到主页
    goHomePage() {
    	hashHistory.push('/Home')
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
)( Login )