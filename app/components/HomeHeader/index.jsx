import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link, hashHistory} from 'react-router'

import './style.less'

class HomeHeader extends React.Component {
	constructor( props, context ){
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div id="home-header" className="clear-fix">
				<div className='home-header-left float-left'>
					<div className="circle">
						<i className="icon icon-eg1"></i>
					</div>
					<span>{this.props.headerDate.storeName}</span>
				</div>
				<div className='home-header-right float-right'>
					<i className="icon icon-help"></i>
				</div>
			</div>
		)
	}
}

export default HomeHeader

