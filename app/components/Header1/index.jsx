import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <div id="header1" className="header">
                <h2>{this.state.title}</h2>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            title: this.props.title
        })
    }
}

export default Header1