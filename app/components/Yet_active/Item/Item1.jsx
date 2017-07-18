import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class Item1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className='item1'>
                <div className="line1 clear-fix">
                    <div className="part1 float-left">
                    {
                        data.biaozhi==='jian'
                            ? <span className="biaozhi jian">减</span>
                            : data.biaozhi==='mian'
                                ? <span className="biaozhi mian">免</span>
                                : <span className="biaozhi xin">新</span>
                    }
                    </div>
                    <div className="part2 float-left">
                        <h2>
                            {
                                data.biaozhi==='mian'? '免运费':data.jian+'元'
                            }
                            <span className="red_txt">满{data.man}可用</span>
                        </h2>
                        <p>有效期限: &nbsp;{data.time[0]}-{data.time[1]}</p>
                    </div>
                </div>
                <ul className="line2 clear-fix">
                    <li className={data.state==='start'?'red_txt':''}>{data.state==='start'?'进行中':data.state==='not_start'?'未开始':data.state==='end'?'已结束':''}</li>
                    <li>
                        <Link to={data.biaozhi==='mian'?'/Crea_Man_bao':data.biaozhi==='jian'?'/Crea_Man_jian':'Crea_new_jian'}>
                            <i className="icon icon-edit2"></i>
                        </Link>
                    </li>
                    <li> <i onClick={ this.del_tan.bind(this) } className="icon icon-del"></i></li>
                </ul>
            </div>
        )
    }
    del_tan(){
        const del_tan = this.props.del_tan
        del_tan()
    }
}

export default Item1