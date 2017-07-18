import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="jiaMeng">
                <i className="icon icon-phone"></i>
                加盟热线
            </div>
        )
    }
}

export default NotFound