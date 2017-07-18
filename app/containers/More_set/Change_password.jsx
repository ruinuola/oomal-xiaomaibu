import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header4'
import Change_password_component from '../../components/Change_password'

class Change_password extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='修改账户密码'/>
                <Change_password_component/>
            </div>
        )
    }
    componentDidMount(){
        document.title = '修改账户密码'
        document.body.style.backgroundColor = '#fff'
    }
}

export default Change_password