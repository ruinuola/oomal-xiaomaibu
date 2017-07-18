import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class Crea_active extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <ul id="Crea_active">
                <li className='clear-fix'>
                    <div className="part1 float-left">
                        <span className="biaozhi jian">减</span>
                    </div>
                    <div className="part2 float-left">
                        <h2>满额立减</h2>
                        <p>引流 &amp; 促销</p>
                    </div>
                    <div className="part3 edit float-right">
                        <button>
                            <Link to="/Man_jian">编辑</Link>
                        </button>
                    </div>
                </li>
                <li className='clear-fix'>
                    <div className="part1 float-left">
                        <span className="biaozhi mian">免</span>
                    </div>
                    <div className="part2 float-left">
                        <h2>满额包邮</h2>
                        <p>引流 &amp; 促销</p>
                    </div>
                    <div className="part3 edit float-right">
                        <button>
                            <Link to="/Crea_man_bao">编辑</Link>
                        </button>
                    </div>
                </li>
                <li className='clear-fix'>
                    <div className="part1 float-left">
                        <span className="biaozhi xin">新</span>
                    </div>
                    <div className="part2 float-left">
                        <h2>新客立减</h2>
                        <p>拉新</p>
                    </div>
                    <div className="part3 edit float-right">
                        <button>
                            <Link to="/Crea_new_jian">编辑</Link>
                        </button>
                    </div>
                </li>
                <li className='clear-fix'>
                    <div className="part1 float-left">
                        <span className="biaozhi zeng">赠</span>
                    </div>
                    <div className="part2 float-left">
                        <h2>满赠活动</h2>
                        <p>提升客单价 &amp; 提升交易额</p>
                    </div>
                    <div className="part3 edit float-right">
                        <button>
                            <Link to="/Man_zeng">编辑</Link>
                        </button>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Crea_active