import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Pro_detail_content1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data

        return (
            <div id="Pro_detail">
                <img className="head_img" src={data.img} alt=""/>
                <p className="pro_name line">{data.name}</p>
                <p className="line">条形码： <span className="float-right">{data.tiao_ma}</span></p>
                <div className="line">
                    <p className="price">价格： <span className="float-right">{data.price}</span></p>
                    <p>原价： <span className="float-right">{data.origin_price}</span></p>
                </div>
                <p className="line">重量： <span className="float-right">{data.weight}</span></p>
                <p className="line">库存： <span className="float-right">{data.stock}</span></p>
            </div>
        )
    }
}

export default Pro_detail_content1