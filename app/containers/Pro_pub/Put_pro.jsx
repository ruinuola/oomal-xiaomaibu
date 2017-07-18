import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'
import SearchInput from '../../components/SearchInput'
import Put_pro_data from './subpage/Put_pro_data'

class Put_pro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='导入商品入库'/>
                <SearchInput/>
                <Put_pro_data/>
            </div>
        )
    }
    componentDidMount(){
        document.title='导入商品'
    }

}

export default Put_pro