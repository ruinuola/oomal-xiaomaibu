import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class First extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="first">
                <p className='sure_num'>请确认您的提现账号</p>
                <div className="form-block">
                    <label className="name">收款账号:</label>
                    {/**/}
                    <input ref='brank_num' required name='brank_num' type="text"/>
                </div>
                <div className="form-block">
                    <label className="name">开户行银行:</label>
                    <input ref='brank' name='brank' required type="text"/>
                </div>
                <div className="form-block">
                    <label className="name">开户人:</label>
                    <input ref='person' name='person' required type="text"/>
                </div>
            </div>
        )
    }
}

export default First