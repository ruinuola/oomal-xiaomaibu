import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Item2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const item = this.props.data
        return (
            <div className="item item2">
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
                    <li onClick={this.del_tan.bind(this,'您确定要删除该商品?')}>删除</li>
                    <li><Link to="/Pro_pub">编辑</Link></li>
                </ul>
            </div>
        )
    }
    del_tan(){
        const del_tan = this.props.del_tan
        del_tan()
    }
    checkIt(e){
        const checkIt = this.props.checkIt
        const i = this.props.item
        console.log('i:'+ i)
        checkIt(i, e.target.checked)
    }
}

export default Item2