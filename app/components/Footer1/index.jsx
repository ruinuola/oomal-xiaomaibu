import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: '',
            wait_handle_order_num: 0
        }
    }
    render() {
        const headerActive = this.props.headerActive
        const navActive = this.props.navActive
        const total = this.props.total
        const check = this.props.check
        const del_all = this.props.del_all
        const xiajia_all = this.props.xiajia_all
        return (
            <div id="footer1">
                <label>
                    <input onChange={this.allCheck.bind(this)} type="checkbox" checked={check}/>
                    全选
                    {headerActive===0 && total>0 ? <span>（{total}）</span>: ''}
                </label>
                {
                    headerActive === 0
                        ? <button onClick={xiajia_all.bind(this)} className='float-right'>批量下架</button>
                        : headerActive === 1 && navActive === 0
                            ? <button className='float-right'>批量上架</button>
                            : ''
                }
                <button onClick={del_all.bind(this)} className='float-right'>批量删除</button>
            </div>
        )
    }
    allCheck(e){
        const allCheck = this.props.allCheck
        allCheck(e.target.checked)
    }
}

export default Footer