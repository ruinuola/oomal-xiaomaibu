import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Items from './Items'

class ProNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const value = this.props.value
        const active = this.props.active
        //console.log('Item active:'+active)
        const key = this.props.index
        const navClickClass2 = this.props.navClickClass2
        return (
            <li className={key === active[0]? 'active': ''}>
                <p onClick={this.navClickClass1.bind(this, key)}>{value.name}</p>
                {
                value.classify2? (
                    <ul className="classify2">
                        {
                            value.classify2.map(( v, i )=>{
                                return <Items navClickClass2={navClickClass2} active={active} key={i} pos={[key,i]} v={v}/>
                            },this)
                        }
                    </ul>
                ): ''
                }
            </li>
        )
    }
    navClickClass1( key ){
        const navClickClass1 = this.props.navClickClass1
        navClickClass1(key)
    }
}

export default ProNav