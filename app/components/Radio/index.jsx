import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Radio extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="option-item">
                {
                    this.props.options.map((item, index)=>{
                        return (
                            <div key={index} ref={'radio-'+index} className="ui-radio" onClick={this.handleChecked.bind(this,index)}>
                                <input type="radio" name={item.name} value={item.value} defaultChecked={item.checked} onChange={this.props.onChange.bind(this,index)}/>
                                <span className="radio-body"></span>
                                <span className="radio-text">{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        const _options = this.props.options
        for(let i=0,option; option=_options[i++]; ){
            if(option.checked){
                this.refs['radio-'+(i-1)].className = 'ui-radio on'
            }else{
                this.refs['radio-'+(i-1)].className = 'ui-radio'
            }
        }
    }
    componentWillReceiveProps(nextProps){
        const _options = nextProps.options
        for(let i=0,option; option=_options[i++]; ){
            if(option.checked){
                this.refs['radio-'+(i-1)].className = 'ui-radio on'
            }else{
                this.refs['radio-'+(i-1)].className = 'ui-radio'
            }
        }
    }
    handleChecked(index){
        for(let i in this.refs){
            ReactDOM.findDOMNode(this.refs[i]).className = 'ui-radio'
        }
        const _this = this.refs['radio-'+index]
        _this.className = 'ui-radio on'
    }
}

export default Radio