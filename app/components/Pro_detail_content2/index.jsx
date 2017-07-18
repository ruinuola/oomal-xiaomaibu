import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Ture_false from '../Ture_false'
import './style.less'

class Pro_detail_content2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const detail = data.detail
        console.log(data)
        return (
            <div id="Pro_detai2">
                <p className="title">商品描述</p>
                <div className="content">
                    <div className="pro_detail">
                        {
                            detail.map((value, item)=>{
                                return (value.hasOwnProperty('img')
                                        ? <img key={item} src={value.img}/>
                                        : <p key={item}>{value.txt}</p>
                                )
                            })
                        }
                    </div>

                    <div className="shuoming">
                        <p className="shuoming_title">假一赔五</p>
                        <span className="num">1. </span>
                        <p className="shuoming_content">抠抠承诺所有商品均为正品</p>
                        <span className="num">2. </span>
                        <p className="shuoming_content">若消费者购买到非正品商品，则有权获得退回实际支付的
                            商品价并增加赔偿其所有到的损失，增加赔偿的金额为消
                            费者实际支付商品价款的四倍。</p>
                    </div>
                    <div className="shuoming">
                        <p className="shuoming_title">三年质保</p>
                        <span className="num">1. </span>
                        <p className="shuoming_content">消费者在购买带“三年质保”服务的商品时，商家承诺三
                            年内对该商品提供维修、补寄零配件或商品的服务。</p>
                        <span className="num">2. </span>
                        <p className="shuoming_content">如果商家未履行承诺，需向消费者支付商品实际成交金额
                            的15%（金额最高不超过1000元）作为违约金。</p>
                    </div>
                    <div className="tuihuan">
                        <span>该商品不支持退换</span>
                        <Ture_false result={data.tuihuan}/>
                    </div>
                </div>
                <p className="title">商品状态</p>
                <div className="content">
                    <p className="state1">{data.state[0]}</p>
                    <p className="state2">{data.state[1]}</p>
                </div>
            </div>
        )
    }
}

export default Pro_detail_content2