import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header8'
import Financial_mana_component from '../../components/Financial_mana'

class Financial_mana extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:{
                today_money: 532.5,
                total_money: 5328.5,
                yesterday_money: 596,
                month_money: 23785
            }
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Financial_mana_component data={this.state.data}/>
            </div>
        )
    }
    componentDidMount(){
        document.title = '财务管理'
        document.body.style.backgroundColor = '#fff'
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
)(Financial_mana)