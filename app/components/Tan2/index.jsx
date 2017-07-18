import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Tan extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const reason = this.props.reason
        return (
            <div id="tan3">
                上架成功
            </div>
        )
    }
    hide_tan(){
        const hide_tan = this.props.hide_tan
    }
}

export default Tan