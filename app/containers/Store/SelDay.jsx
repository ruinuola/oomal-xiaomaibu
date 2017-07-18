import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SelDayDate from './subpage/SelDayDate'

class SelDay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            footDate:{}
        }
    }
    render() {
        return (
            <div>
                <SelDayDate/>
            </div>

        )
    }
    componentDidMount(){
        document.title = '选择营业日'
    }
}

export default SelDay