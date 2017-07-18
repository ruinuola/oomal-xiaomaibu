import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <li className='clear-fix'>
                <Link to="/Detail">
                    <div className="part1 float-left">
                        <p className="line1">周{data.week}</p>
                        <p className="line2">{data.day}</p>
                    </div>
                    <div className="part2 float-left">
                        <p className="line1">
                            {
                                data.state==1
                                    ? '+'+data.money.toFixed(2)
                                    : '-'+data.money.toFixed(2)
                            }
                        </p>
                        {
                            data.state !=3
                                ? <p className="line2 txt_sheng">{data.name}</p>
                                : ''
                        }
                    </div>
                    <div className="part3 float-right">
                        <h3>{data.state==1?'已收款':data.state==2?'已退款':data.state==3?'提现':''}</h3>
                    </div>
                </Link>
            </li>
        )
    }
}

export default Item