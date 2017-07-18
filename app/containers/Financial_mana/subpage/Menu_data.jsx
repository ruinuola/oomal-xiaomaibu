import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { history_menu } from '../../../fetch/money/history_menu.js'

import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'

import Menu_month from '../../../components/Menu_month'

import './style.less'

class Menu_data extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        const data = this.state.data
        return (
            <div id='history_menu'>
            {
                data.length>0
                    ? data.map(( value, item ) => {
                        return (
                            <div key={item} className="years">
                                <p className="year">
                                    {value.year}年
                                    <span className="float-right">
                                        ￥<span className="num">{value.total.toFixed(2)}</span>
                                    </span>
                                </p>
                                <ul className="months">
                                {
                                    value.months.map((value, item)=>{
                                        return <Menu_month key={item} data={value}/>
                                    })
                                }
                                </ul>
                            </div>
                        )
                    }):<p>加载中...</p>
            }
            </div>
        )
    }
    componentDidMount(){
        //获取首页数据
        this.loadFirstPageData();
    }
    //获取首页数据
    loadFirstPageData() {
        const username = this.props.userinfo.username
        let userinfo = this.props.userinfo

        const result = history_menu()
        this.resultHandle( result )
    }
    //处理数据
    resultHandle( result ) {
        result.then(res => {
            return res.json()
        }).then(json => {
            json.forEach(( value, item )=>{
                let total = 0
                const months = value.months
                months.forEach(( v, i )=>{
                    total += v.money
                })
                json[item].total = total
            })
            console.log(json)
            this.setState({
                data: json
            })
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
)(Menu_data)