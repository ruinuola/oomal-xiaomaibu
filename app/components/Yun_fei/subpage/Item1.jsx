import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Item1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="item1">
                <div className="line">
                    <span className="line_name">起送价格</span>
                    <div className="line_content">{data.qisong_money}</div>
                </div>
                <div className="line">
                    <span className="line_name">运送范围</span>
                    <div className="line_content">{data.range[0]} - {data.range[1]} 公里内</div>
                </div>
                <div className="line">
                    <span className="line_name">首重</span>
                    <div className="line_content">
                        <span className="weight">{data.first_weight} 千克内</span>
                        <span className="money float-right">{data.first_money} 元</span>
                    </div>

                </div>
                <div className="line">
                    <span className="line_name">每增加</span>
                    <div className="line_content">
                        <span className="weight">{data.every_weight} 千克</span>
                        <span className="money float-right">加运费 {data.every_money} 元</span>
                    </div>
                </div>
                <div className="line">
                    <span className="line_name">发货后大约</span>
                    <div className="line_content">
                        <span className="weight">{data.every_weight} 小时送达</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Item1