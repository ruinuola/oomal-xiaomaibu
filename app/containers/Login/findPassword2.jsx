import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import "./findPassword.less"

class findPassword2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone_hide: this.props.userinfo.phone.slice(0,3)+'********',
            test_hide: false
        }
    }
    render() {
        return (
            <div>
                <Header title='找回密码'/>
                <form className="findPas2">
                    <p>已发送一条带验证码的短信至 &nbsp;{this.state.phone_hide}</p>
                    <div className="testNum clear-fix">
                        <input onKeyUp={this.checkTestLength.bind(this)} ref="test_num" className="float-left" type="text" placeholder="短信验证码"/>
                        <button className="float-right resend">重新发送</button>
                    </div>
                    <button onClick={this.checkTest.bind(this)} className={this.state.test_hide?"active":""} ref="next" disabled={this.state.test_hide?"":"disabled"} type="button">下一步</button>
                </form>
            </div>

        )
    }
    componentWillMount() {
        document.title="找回密码"
    }
    //检查输入验证码的位数
    checkTestLength(e){
        var num = e.target.value
        if(num.length === 4){
            this.setState({
                test_hide: true
            })
        }else{
            this.setState({
                test_hide: false
            })
        }
    }
    //验证验证码
    checkTest() {
        var num = this.refs.test_num.value.trim()
        if(num.length === 4){
            this.goPage()
        }else{
            alert('请输入有效的手机号码！')
            return false
        }
    }
    goPage() {
        hashHistory.push( '/ResetPassword' )
    }

}

//------------------redux react 绑定-----------------------
function mapStateToProps( state ){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps( dispatch ){
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( findPassword2 )