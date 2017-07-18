import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item1 from './Item/Item1'
import Item2 from './Item/Item2'
import Tan from '../Tan3'

import './style.less'

class Yet_active extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            del_show: false,
            del_tan_i: ''
        }
    }
    render() {
        const data = this.props.data
        const self = this
        return (
            <div id="yet_active">
            {
                data.map((value, item) => {
                    return (
                        value.biaozhi === 'zeng'
                            ? <Item2 del_tan={self.del_tan.bind(self, item)} key={item} data={value}/>
                            : <Item1 del_tan={self.del_tan.bind(self, item)} key={item} data={value}/>
                    )
                })
            }
            {
                this.state.del_show
                    ? <Tan hide_del={this.hide_del.bind(this)} hide_del_tan={this.hide_del_tan.bind(this)} content='您确定要删除该活动吗'/>
                    : ''
            }
            </div>
        )
    }
    del_tan(i,str){
        this.setState({
            del_show: true,
            del_tan_i: i
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
}

export default Yet_active