import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Tan extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const content = this.props.content
        return (
            <div className="tan tan4">
                <div id="tan4">
                    <div className="tan_body">
                        <p>{content}</p>
                    </div>
                    <div className="tan_foot">
                        <button onClick={this.hide_del_tan.bind(this)}>取消</button>
                        <button onClick={this.hide_del.bind(this)}>确定</button>
                    </div>
                </div>
            </div>
        )
    }
    hide_del_tan(){
        const hide_del_tan = this.props.hide_del_tan
        hide_del_tan()
    }
    hide_del(){
        const hide_del = this.props.hide_del
        hide_del()
    }
}

export default Tan