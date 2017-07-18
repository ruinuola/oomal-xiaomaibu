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
            <div className="tan tan1">
                <div id="tan2">
                    <div className="tan_body">
                        <p>{reason}</p>
                    </div>
                    <div className="tan_foot">
                        <button onClick={this.hide_tan.bind(this)}>知道了</button>
                    </div>
                </div>
            </div>
        )
    }
    hide_tan(){
        const hide_tan = this.props.hide_tan1
        hide_tan()
    }
}

export default Tan