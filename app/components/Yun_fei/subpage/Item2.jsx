import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Item2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const item = this.props.item
        return (
            <div className="item2">
                {
                    data.is_close
                        ? <i onClick={this.del_moban.bind(this, item)} className="icon icon-close float-right"></i>
                        :''
                }

                <div className="line">
                    <span className="line_name">起送价格</span>
                    <div className="line_content">
                        <input onChange={this.input_change.bind(this)} name='qisong_money' value={data.qisong_money} type="number" ref="qisong_money" placeholder='单行输入'/>
                    </div>
                </div>
                <div className="line">
                    <span className="line_name">运送范围</span>
                    <div className="line_content">
                        <input onChange={this.input_change.bind(this)} name='range1' type="number" ref="range1" value={data.range[0]} placeholder='单行输入'/> -&nbsp;
                        <input onChange={this.input_change.bind(this)} name='range2' type="number" ref="range2" value={data.range[1]} placeholder='单行输入'/> 公里内
                    </div>
                </div>
                <div className="line">
                    <span className="line_name">首重</span>
                    <div className="line_content">
                        <span className="weight">
                            <input onChange={this.input_change.bind(this)} name='first_weight' value={data.first_weight} type="number" ref="first_weight" placeholder='单行输入'/> 千克内
                        </span>
                        <span className="money float-right">
                            <input onChange={this.input_change.bind(this)} name='first_money' value={data.first_money} type="number" ref="first_money" placeholder='单行输入'/> 元
                        </span>
                    </div>

                </div>
                <div className="line">
                    <span className="line_name">每增加</span>
                    <div className="line_content">
                        <span className="weight">
                            <input onChange={this.input_change.bind(this)} name='every_weight' value={data.every_weight} type="number" ref="every_weight" placeholder='单行输入'/> 千克
                        </span>
                        <span className="money float-right">
                            加运费 <input onChange={this.input_change.bind(this)} name='every_money' value={data.every_money} type="number" ref="every_money" placeholder='单行输入'/> 元
                        </span>
                    </div>
                </div>
                <div className="line">
                    <span className="line_name">发货后大约</span>
                    <div className="line_content">
                        <span className="weight">
                            <input onChange={this.input_change.bind(this)} name='time' value={data.time} type="number" ref="time" placeholder='单行输入'/> 小时送达
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    del_moban(i){
        const del_moban = this.props.del_moban(i)
    }
    input_change(e){
        const target = e.target
        const item = this.props.item
        const name = target.name
        const value = target.value
        const input_change = this.props.input_change
        input_change(item, name, value,e)
    }
}

export default Item2