import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class storePart1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let status = this.props.status
        return (
            <ul className="store_part1 clear-fix">
                <li>
                    门店二维码
                    <i className="icon icon-2D_barcode"></i>
                </li>
                <li>
                    状态：
                    {status? '停止营业': '开始营业' }
                    <i onClick={this.show_tan.bind(this)} className="icon icon-edit"></i>
                </li>
            </ul>
        )
    }
    show_tan(){
        const show_tan = this.props.show_tan
        show_tan()
    }
}

export default storePart1