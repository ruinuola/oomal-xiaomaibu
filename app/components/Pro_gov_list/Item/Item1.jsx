import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class Item1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const item = this.props.data
        const i = this.props.item
        return (
            <div className="item">
                <div className="content1 clear-fix">
                    <div className="part1">
                        <input type="checkbox" checked={item.check} onChange={this.checkIt.bind(this)}/>
                    </div>
                    <div className="part2">
                        <Link to="/ProDetail">
                            <img src={item.img} alt=""/>
                        </Link>
                    </div>
                    <div className="part3">
                        <Link to="/ProDetail">
                            <p className="line1">{item.name}gfhsdfgsdfgdfgsdfgsdf fgsdfgdsgsdfgsdfgsdfgsdfgdfsgsdfgdfgf</p>
                            <p className="line2">
                                <span className="price">￥{item.price}</span>
                                <span className="stock">（库存：<span className="num">{item.stock}</span> 件）</span>
                            </p>
                            <p className="line3">
                                {
                                    item.hasOwnProperty('xiajia_time')
                                        ? '距离下架：'
                                        :item.hasOwnProperty('shangjia_time')
                                            ? '距离上架：' :''
                                }
                                <span className="time">
                                {
                                    item.hasOwnProperty('xiajia_time')
                                        ? item.xiajia_time
                                        : item.hasOwnProperty('shangjia_time')
                                        ? item.shangjia_time: ''
                                }
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
                <ul className="content2 clear-fix">
                    <li><Link to="/Pro_pub">编辑</Link></li>
                    <li onClick={this.del_tan.bind(this,'您确定要删除该商品？')}>删除</li>
                    {
                        item.hasOwnProperty('xiajia_time')
                            ? <li onClick={this.del_tan.bind(this,'您确定要让该商品下架？')}>下架</li>
                            :item.hasOwnProperty('shangjia_time')
                                ? item.hasOwnProperty('weigui_reason')
                                    ? <li onClick={this.show_tan1.bind(this, item.weigui_reason)} className='red_txt'>违规处理</li>: <li></li>
                                : item.hasOwnProperty('create_time')
                                    ? <li onClick={this.show_tan2.bind(this, i)}>上架</li>: <li></li>
                    }
                </ul>
            </div>
        )
    }
    show_tan1(reason){
        const show_tan1 = this.props.show_tan1
        show_tan1(reason)
    }
    show_tan2(){
        const show_tan2 = this.props.show_tan2
        show_tan2()
    }
    del_tan(str){
        const del_tan = this.props.del_tan
        del_tan(str)
    }
    checkIt(e){
        const checkIt = this.props.checkIt
        const i = this.props.item
        console.log('i:'+ i)
        checkIt(i, e.target.checked)
    }
}

export default Item1