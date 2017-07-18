import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class Item2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className='item2'>
                <div className="line1 clear-fix">
                    <div className="part1 float-left">
                        <span className="biaozhi zeng">赠</span>
                    </div>
                    <div className="part2 float-left">
                        <p><span className='justify'>赠品</span>: &nbsp;{data.zeng_name}</p>
                        <p><span className='justify'>条件</span>: &nbsp;满{data.man}元</p>
                        <p><span className='justify'>有效期限</span>: &nbsp;{data.time[0]}-{data.time[1]}</p>
                        <p><span className='justify'>发放总量</span>: &nbsp;{data.stock!==''?data.stock:'不限量'}</p>
                    </div>
                </div>
                <ul className="line2 clear-fix">
                    <li className={data.state==='start'?'red_txt':''}>{data.state==='start'?'进行中':data.state==='not_start'?'未开始':data.state==='end'?'已结束':''}</li>
                    <li>
                        <Link to="/Crea_man_zeng"><i className="icon icon-edit2"></i></Link>
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

export default Item2