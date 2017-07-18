import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getYetActive } from '../../fetch/active/active.js'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header4'
import Active_list from '../../components/Active_list'

import './style.less'

class Man_zeng extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            del_i: '',
            state: 'man_zeng'
        }
    }
    render() {
        return (
            <div id="man_zeng">
                <Header title='满赠活动'/>
                <div className='crea_act'>
                    <Link to='/Crea_man_zeng'>
                    创建 <span className='red_txt'>1</span>个满赠活动 <i className="icon icon-to_right"></i>
                    </Link>
                </div>
                {
                    this.state.data.length > 0
                        ? <Active_list state='man_zeng' hide_del={this.hide_del.bind(this)} data={this.state.data}/>
                        : <p>加载中...</p>
                }

            </div>
        )
    }
    componentDidMount(){
        document.title = '满赠活动'
        this.loadFirstPageData()
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo
        const result = getYetActive()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json.filter((value, item) => {
                return value.biaozhi === 'zeng'
            })
            this.setState({
                data: data
            })
        })
    }
    //删除弹框
    hide_del(i){
        const data = [].concat(this.state.data)
        const newData = data.filter((value, item)=>{
            return item !== i
        })
        this.setState({
            data: newData
        })
    }
}


//------------------redux react 绑定-----------------------
function mapStateToProps( state ){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps( dispatch ){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Man_zeng)