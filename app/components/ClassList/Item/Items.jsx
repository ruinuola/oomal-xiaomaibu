import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Items extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const classify3 = data.classify3
        const active = this.props.active
        const listClick = this.props.listClick
        return (
            <div className="items">
            {
            classify3.map(function(value, item){
                return (
                    <div key={item} onClick={listClick.bind(this, item)} className={active[2]==item?'index active':'index'}>{value.name}</div>
                )
            })
            }
            </div>
        )
    }
}

export default Items