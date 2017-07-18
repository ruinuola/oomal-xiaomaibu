import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header4'
import More_set_component from '../../components/More_set'

class More_set extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='更多设置'/>
                <More_set_component/>
            </div>
        )
    }
    componentDidMount(){
        document.title = '更多设置'
        document.body.style.backgroundColor = '#fff'
    }
}

export default More_set