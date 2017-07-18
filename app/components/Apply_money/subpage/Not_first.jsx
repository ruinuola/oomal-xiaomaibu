import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Not_first extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="not_first">
                <div className="form-block">
                    <label className="name">收款账号:</label>
                    <span>{data.brank_num}</span>
                </div>
                <div className="form-block">
                    <label className="name">开户行银行:</label>
                    <span>{data.brank}</span>
                </div>
                <div className="form-block">
                    <label className="name">开户人:</label>
                    <span>{data.person}</span>
                </div>
            </div>
        )
    }
}

export default Not_first