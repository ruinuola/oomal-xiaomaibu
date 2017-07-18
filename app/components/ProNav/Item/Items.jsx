import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class ProNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const active = this.props.active
        const pos = this.props.pos
        const v = this.props.v
        //console.log('navClickClass2')
        return (
            <li onClick={this.navClickClass2.bind(this, pos[0], pos[1])} className={pos[1] == active[1]? 'cur': ''}>{v.name}</li>
        )
    }
    navClickClass2( i, k ){
        const navClickClass2 = this.props.navClickClass2
        navClickClass2(i, k)
    }
}

export default ProNav