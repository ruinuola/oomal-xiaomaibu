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
            <div className='item'>
                <div className="line1">
                    <p><span className='justify'>条件</span>: &nbsp;满{data.man}减{data.jian}</p>
                    <p><span className='justify'>有效期限</span>: &nbsp;{data.time[0]}-{data.time[1]}</p>
                </div>
                <ul className="line2 clear-fix">
                    <li className={data.state==='start'?'red_txt':''}>{data.state==='start'?'进行中':data.state==='not_start'?'未开始':data.state==='end'?'已结束':''}</li>
                    <li>
                        <Link to="/Crea_man_jian">
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