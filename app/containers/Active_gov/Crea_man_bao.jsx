import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import { getYetActive } from '../../fetch/active/active.js'

import Header from '../../components/Header4'

import './style.less'

class Crea_man_bao extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="man_bao">
                <Header title='满减包邮'/>
                <form className="content">
                    <div className="time form-block">
                        <span className="name">满</span>
                        <input type="number" ref='man'/>
                        <span className="jiange">元</span>
                        <span className="pl8">免运费</span>
                    </div>
                    <div className="time form-block">
                        <span className="name">有效期限</span>
                        <input className='time1' type="date" ref='time1'/>
                        <span className="jiange">至</span>
                        <input type="date" ref='time2'/>
                    </div>
                    <div className="btns">
                        <button onClick={this.saveBtn.bind(this)} className='save' type='button'>编辑</button>
                    </div>
                </form>

            </div>
        )
    }
    componentDidMount(){
        document.title = '满减包邮'
    }
    saveBtn(){
        const man = this.refs.man.value
        const time1 = this.refs.time1.value
        const time2 = this.refs.time2.value
        if(man.length === 0){
            alert('请输入优惠条件！')
            return false
        }
        if(time1.length === 0 || time2.length === 0){
            alert('请输入有效期限！')
            return false
        }
        if(time1 >= time2){
            alert('请输入合理的有效期限！')
            return false
        }
        hashHistory.push('/Active_gov')
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

export default Crea_man_bao