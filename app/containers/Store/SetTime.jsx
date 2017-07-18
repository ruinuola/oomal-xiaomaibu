import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'
import SetTimeDate from './subpage/SetTimeDate'

class SetTime extends React.Component {
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
                <Header title='营业时间设置'/>
                <SetTimeDate/>
            </div>

        )
    }
    componentDidMount(){
        document.title = '营业时间设置'
    }
}

export default SetTime