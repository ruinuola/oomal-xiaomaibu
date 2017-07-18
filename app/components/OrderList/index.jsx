import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import './style.less'

class WaitHandleList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            tan_show: false
        }
    }
    render() {
        const data = this.props.listDate
        const tanStyleShow = {
            display: 'block'
        }
        const tan1StyleShow = {
            transform: 'translateY(0)'
        }
        const tanStyleHide = {
            display: 'none'
        }
        const tan1StyleHide = {
            transform: 'translateY(100%)'
        }
        return (
            <div id="WaitHandleList">
                {
                    data.map((item, index)=>{
                        return <Item transferTan = {tan_show => this.transferTan(tan_show)} key={index} data={item}/>
                    })
                }
                {/*弹框*/}
                <div style={this.state.tan_show ? tanStyleShow:tanStyleHide} ref="tan" className="tan">
                    <div style={this.state.tan_show ? tan1StyleShow:tan1StyleHide} ref='tan1' className="tan1">
                        <form>
                            <div className="name">
                                <label>配送员姓名</label>
                                <input id="name" ref="name" type="text" placeholder="单行输入"/>
                            </div>
                            <div className="phone">
                                <label>配送员电话</label>
                                <input id="phone" ref="phone" type="text" placeholder="单行输入"/>
                            </div>
                            <button onClick={this.sure.bind(this)} type='submit'>确定</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
    }
    //确定
    sure(){
        const name = this.refs.name.value.trim()
        const phone = this.refs.phone.value.trim()
        if(name.length === 0){
            alert('请输入配送员姓名')
            return false
        }
        if(!(/^1[34578]\d{9}$/.test(phone))){
            alert("手机号码有误，请重填");
            return false;
        }

        this.setState({
            tan_show:false
        })
    }
    //子组件向父组件通讯
    transferTan(tan_show) {
        this.setState({
            tan_show
        })
    }
}

export default WaitHandleList