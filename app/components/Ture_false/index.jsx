import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Ture_false extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            result: this.props.result
        }
    }
    render() {
        const result=this.state.result
        return (
            <div className={result?"ture_false is_ture float-right":"ture_false float-right"}>
                <div className="circle"></div>
                <input onClick={this.tuihuan_btn.bind(this)} ref='is_tuihuan' name="is_tuihuan" type="checkbox"/>
            </div>
        )
    }
    tuihuan_btn(){
        let check = this.refs.is_tuihuan
        let parent = document.getElementsByClassName('ture_false')[0]
        this.setState({
            result: check.checked
        })
    }
}

export default Ture_false