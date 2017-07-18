import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item1 from './Item/Item1'
import Item2 from './Item/Item2'
import Tan1 from '../Tan1'
import Tan2 from '../Tan2'
import Tan3 from '../Tan3'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            tan1_show: false,
            tan2_show: false,
            del_show: false,
            weigui_reason: '',
            del_tan_i: '',
            tan3_content: ''
        }
    }
    render() {
        const data = this.props.data
        const headerActive = this.props.headerActive
        const navActive = this.props.navActive
        const self = this
        const checkIt = this.props.checkIt
        return (
            <div id="pro_gov_list">
            {
                data.map((value, item)=>{
                    return (headerActive === 0 || (headerActive === 1 && navActive === 0)
                        ? <Item1 checkIt={checkIt} del_tan={self.del_tan.bind(self, item)} show_tan2={self.show_tan2.bind(self, item)} show_tan1={self.show_tan1.bind(self)} key={item} item={item} data={value}/>
                        : <Item2 checkIt={checkIt} del_tan={self.del_tan.bind(self, item)} key={item} item={item} data={value}/>)
                })
            }
                <div className="h69"></div>
            {
                this.state.tan1_show
                    ? <Tan1 hide_tan1={this.hide_tan1.bind(this)} reason={this.state.weigui_reason}/>
                    : ''
            }
            {
                this.state.tan2_show
                    ? <Tan2/>
                    : ''
            }
            {
                this.state.del_show
                    ? <Tan3 hide_del={this.hide_del.bind(this)} hide_del_tan={this.hide_del_tan.bind(this)} content={this.state.tan3_content}/>
                    : ''
            }
            </div>
        )
    }
    show_tan1(reason){
        console.log('reson:'+reason)
        this.setState({
            tan1_show: true,
            weigui_reason: reason
        })
    }
    hide_tan1(){
        this.setState({
            tan1_show: false,
            weigui_reason: ''
        })
    }
    show_tan2(i){
        const show_tan2 = this.props.show_tan2

        this.setState({
            tan2_show: true,
        })
        setTimeout(()=>{
            this.setState({
                tan2_show: false,
            })
            show_tan2(i)
        },800)
    }
    del_tan(i,str){
        this.setState({
            del_show: true,
            del_tan_i: i,
            tan3_content: str
        })
    }
    hide_del(){
        const hide_del = this.props.hide_del
        const i = this.state.del_tan_i
        this.setState({
            del_show: false
        })
        hide_del(i)
    }
    hide_del_tan(){
        this.setState({
            del_show: false
        })
    }
    hide_xiajia(){
        const hide_xiajia = this.props.hide_xiajia
        const i = this.state.del_tan_i
        this.setState({
            del_show: false
        })
        hide_xiajia(i)
    }
}

export default List