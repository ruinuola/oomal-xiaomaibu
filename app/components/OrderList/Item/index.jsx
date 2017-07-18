import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:{},
            order_list:[],
            total:0,
            shifu:0
        }
    }
    render() {
        const item = this.props.data
        return (
            <div className="item">
                <div className="info info1">
                    <h1>{item.name} {item.new_jian?<span>#门店新客</span>:''}</h1>
                    <h4>{item.phone}</h4>
                    {item.state === 'finish'
                        ? <p className="float-right blueTxt">已完成</p>
                        :item.state === 'waitSend'
                            ? <p className="float-right redTxt">待配送</p>
                            : <p className="float-right redTxt">配送中</p>
                    }
                </div>
                <div className="info info2">
                    <p className="pos">{item.pos}</p>
                    <p className="juli">{item.juli}</p>
                </div>
                <div className="info info3">
                    <div onClick={this.zhankai.bind(this)} className="btn">
                        <i className="icon icon-order"></i>
                        <span>订单</span>
                        {
                            item.state === 'refund'
                                ? <span className="redTxt">（退款中）</span>
                                : ''
                        }
                        <i className="icon icon-to_bottom center float-right"></i>
                    </div>
                    <div className="zhankai">
                        <ul>
                            {
                                this.state.order_list.map((p, i)=>{
                                    return (
                                        <li key={i}>
                                            <span className="name">*{p.name}</span>
                                            <span className="num">x{p.num}</span>
                                            <span className="price float-right">￥{p.price}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="other_price">
                            <div className="total">
                                小计
                                <span className="float-right">￥{this.state.total}</span>
                            </div>
                            <div className="peiSong">
                                配送费
                                <span className="float-right">￥{item.peiSong}</span>
                            </div>
                            {
                                item.man_jian
                                    ?(<div className="man_jian">
                                    <i className="red_bg">减</i>
                                    满额立减
                                    <span className="float-right">-￥{item.man_jian}</span>
                                </div>)
                                    :''
                            }
                            {
                                item.new_jian
                                    ?(<div className="new_jian">
                                    <i className="green_bg">新</i>
                                    新客立减
                                    <span className="float-right">-￥{item.new_jian}</span>
                                </div>)
                                    :''
                            }
                        </div>
                    </div>
                </div>
                <div className="info info4">
                    <i className="icon icon-shifu"></i>
                    <span>实付</span>
                    <span className="price float-right">￥{this.state.shifu}</span>
                </div>
                {
                item.reason
                    ?<div className="info info5">
                        <i className="icon icon-refund"></i>
                        <span>退款理由</span>
                        <span className="reason">{item.reason}</span>
                    </div>
                    :''
                }
                {
                item.reason
                    ? (<div className="info btns">
                    <button className="blueBtn float-right">拒绝退款</button>
                    <button className="baiBtn float-right">同意退款</button>
                </div>)
                    : (<div className="info btns">
                    <button className="baiBtn float-right">打印订单</button>
                    {
                    item.state === 'finish'
                        ?<button className="blueBtn float-right">删除订单</button>
                        :item.state === 'waitSend'
                            ? <button onClick={this.start_song.bind(this)} className="blueBtn float-right">开始配送</button>
                            : ''
                    }
                </div>)
                }
                <div className="orderInfo">
                    <span>{item.time}下单</span>
                    &nbsp;|&nbsp;
                    <span>订单号:{item.order_num}</span>
                </div>
            </div>
        )
        const order_list = this.props.data.order_list
        console.log(item)
    }
    componentDidMount(){
        this.setState({
            data:this.props.data,
            order_list:this.props.data.order_list,
        })
        let total = 0//小计
        let order_list = this.props.data.order_list
        order_list.forEach((index, item)=>{
            total += index.price
        })
        this.setState({
            total: total
        })
        var man_jian = this.props.data.man_jian || '0';//满减
        var new_jian = this.props.data.new_jian || '0';//新客立减
        let shifu = total + this.props.data.peiSong - man_jian - new_jian//实付
        this.setState({
            shifu: shifu.toFixed(1)
        })
    }
    zhankai(e){
        let target = e.currentTarget
        e.stopPropagation()
        e.preventDefault()
        let zhankai = target.nextSibling
        if(zhankai.style.maxHeight== '1000px'){
            zhankai.style.maxHeight = '0px'
            setTimeout(function(){
                zhankai.style.borderTop = 'none'
            }, 500)
        }else{
            zhankai.style.maxHeight = '1000px'
            zhankai.style.borderTop = '1px solid #ddd'
        }


    }
    //开始配送弹框
    start_song(){
        this.props.transferTan(true)
    }
}

export default Item