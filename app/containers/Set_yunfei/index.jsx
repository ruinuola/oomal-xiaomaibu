import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import Yun_fei from '../../components/Yun_fei'

class Set_yunfei extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="set_yunfei">
                <Header title='运费设置'/>
                <Yun_fei/>

            </div>
        )
    }
    componentDidMount(){
        document.title = '运费设置'
        document.body.style.backgroundColor = '#eee'
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
)(Set_yunfei)