import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class ProNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const active = this.props.active
        const navClickClass1 = this.props.navClickClass1
        const navClickClass2 = this.props.navClickClass2
        return (
            <div className="proNav float-left">
                <ul className="classify1">
                {
                    data.length>0? (
                        data.map(( value, index )=>{
                            return <Item key={index} navClickClass2={navClickClass2} navClickClass1={navClickClass1} active={active} index={index} value={value}/>
                        })
                    ): ''
                }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        const docW = parseInt(document.documentElement.clientHeight)
        const proNav = document.getElementsByClassName('proNav')[0]
        proNav.style.height = docW - 44 + 'px'
    }
}

export default ProNav