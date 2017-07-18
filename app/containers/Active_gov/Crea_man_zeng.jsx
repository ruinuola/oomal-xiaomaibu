import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import { getYetActive } from '../../fetch/active/active.js'

import Header from '../../components/Header4'

import './style.less'

class Crea_man_zeng extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="man_zeng">
                <Header title='创建满赠活动'/>
                <form className="content">
                    <div className="man form-block">
                        <span className="name">赠品条件</span>
                        满
                        <input type="number" ref='man' placeholder='必须为整数'/>
                        元起赠
                    </div>
                    <div className="zeng form-block">
                        <span className="name">赠品名称</span>
                        <input type="text" ref='zeng_name'/>
                    </div>
                    <div className="stock form-block">
                        <span className="name">发放总量</span>
                        <input type="numder" ref='stock' placeholder="必须为整数，空为不限量"/>
                    </div>
                    <div className="time form-block">
                        <span className="name">有效期限</span>
                        <input className='time1' type="date" ref='time1'/>
                        至
                        <input type="date" ref='time2'/>
                    </div>
                    <div className="btns">
                        <button type='reset'>重置</button>
                        <button onClick={this.saveBtn.bind(this)} className='save' type='button'>保存设置</button>
                    </div>
                </form>

            </div>
        )
    }
    componentDidMount(){
        document.title = '创建满赠活动'
    }
    saveBtn(){
        const man = this.refs.man.value
        const zeng_name = this.refs.zeng_name.value.trim()
        const stock = this.refs.stock.value
        const time1 = this.refs.time1.value
        const time2 = this.refs.time2.value
        if(man.length === 0){
            alert('请输入赠品条件！')
            return false
        }
        if(zeng_name.length === 0){
            alert('请输入赠品名称！')
            return false
        }

        if(time1.length === 0 && time2.length === 0){
            alert('请输入有效期限！')
            return false
        }
        hashHistory.push('/Man_zeng')
    }
    ////获取首页数据
    //loadFirstPageData() {
    //    const username = this.props.userinfo.username
    //    let userinfo = this.props.userinfo
    //    const result = getYetActive()
    //    this.resultHandle( result )
    //}
    ////处理数据
    //resultHandle( result ) {
    //    result.then(res => {
    //        return res.json()
    //    }).then(json => {
    //        const data = json.filter((value, item) => {
    //            return value.biaozhi === 'jian'
    //        })
    //        this.setState({
    //            data: data
    //        })
    //    })
    //}
}

export default Crea_man_zeng