import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Not_first from './subpage/Not_first'
import First from './subpage/First'
import './style.less'

class Apply_money extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <form action='/Financial_mana' name='apply_money' id="apply_money">
                {
                    data.hasOwnProperty('brank_num')
                        ?<Not_first data={data}/>
                        :<First/>
                }
                <p className="red_txt">若需要更换提现账户，请致电客服</p>
                <a className='phone' href="wtai://wp//wc;4008808800">
                    <i className="icon icon-phone1 center"></i>
                    400 880 8800
                </a>

                <div className="bottom">
                    <div className="form-block tixian">
                        <label className="name">提现金额</label>
                        <input ref='tixian' name="tixian" required type="number" placeholder={'本次最多可提现'+data.max_money+'元'}/>
                    </div>
                    <button onClick={this.submit.bind(this)} type='button'>确认提交</button>
                </div>
            </form>
        )
    }
    submit(){
        console.log('执行了！')
        const data = this.props.data
        if( !data.hasOwnProperty('brank_num') ){
            const brank_num = this.refs.brank_num.value.trim()
            var regex=/^(\d{4}[\s\-]?){4,5}\d{3}$/g;
            if(!regex.test(brank_num)) {
                alert('请输入正确的银行卡账号')
                return false
            }
            const brank = this.refs.brank.value.trim()
            if(brank.length<=0){
                alert('开户行银行不能为空')
                return false
            }
            const person = this.refs.person.value.trim()
            if(person.length<=0){
                alert('开户人不能为空')
                return false
            }
        }
        const tixian = parseInt(this.refs.tixian.value.trim())
        if( isNaN(tixian) || tixian<=0 || tixian>data.max_money ){
            alert('请输入合理的提现金额')
            return false
        }
        document.apply_money.submit()
        //hashHistory.push('/Financial_mana')
    }
}

export default Apply_money