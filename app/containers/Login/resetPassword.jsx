import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import "./findPassword.less"

class resetPassword extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            is_pas_num: false
        }
    }
    render() {
        return (
            <div>
                <Header title='重置密码'/>
                <form className="resetPas">
                    <div className="reset clear-fix">
                        <input onKeyUp={this.checkPasL.bind(this)} ref="pas" className="float-left" type="text" placeholder="请重置账户密码"/>
                        <img className="float-right" src={require("../../static/images/show.png")} alt=""/>
                    </div>
                    <p>密码长度为6-20位</p>
                    <button onClick={this.checkPhone.bind(this)} className={this.state.is_pas_num?"active":""} ref="next" disabled={this.state.is_pas_num?"":"disabled"} type="button">下一步</button>
                </form>
            </div>

        )
    }
    componentWillMount() {
        document.title="重置密码"
    }
    //检查输入密码的位数
    checkPasL(e){
        var num = e.target.value
        if(num.length >=6 && num.length <=20){
            this.setState({
                is_pas_num: true
            })
        }else{
            this.setState({
                is_pas_num: false
            })
        }
    }
    //验证密码
    checkPhone() {
        var num = this.refs.pas.value.trim()
        console.log(num)
        if(this.state.is_pas_num){
            var actions = this.props.userInfoActions
            let userinfo = this.props.userinfo
            userinfo.password = num
            actions.update( userinfo )

            //跳转到门店运营页面
            this.goPage()
        }else{
            alert('请输入符合要求的密码！')
            return false
        }
    }
    goPage() {
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
)( resetPassword )