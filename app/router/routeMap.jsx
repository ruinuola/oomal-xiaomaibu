import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'  //主页
import WaitHandle from '../containers/WaitHandle'  //待处理订单
import OrderGov from '../containers/OrderGov'
import Store from '../containers/Store'    //店铺管理
import SetTime from '../containers/Store/SetTime'
import SelDay from '../containers/Store/SelDay'
import Cash_deposit from '../containers/Store/Cash_deposit'   //保证金
import Store_certificate from '../containers/Store/store_certificate' //商家资质
import Search from '../containers/Search'
import Pro_pub from '../containers/Pro_pub'         //商品发布
import Put_pro from '../containers/Pro_pub/Put_pro'  //导入商品
import Search_list from '../containers/Pro_pub/Search_list'
import Class_sel from '../containers/Pro_pub/Class_sel'
import Pro_des from '../containers/Pro_pub/Pro_des'
import Pro_gov from '../containers/Pro_gov'         //商品管理
import ProDetail from '../containers/Pro_gov/Pro_detail'  //商品详情
import Active_gov from '../containers/Active_gov'   //活动管理
import Man_zeng from '../containers/Active_gov/Man_zeng' //满赠活动
import Man_jian from '../containers/Active_gov/Man_jian' //满减活动
import Crea_man_zeng from '../containers/Active_gov/Crea_man_zeng'
import Crea_new_jian from '../containers/Active_gov/Crea_new_jian' //新客立减
import Crea_man_bao from '../containers/Active_gov/Crea_man_bao'//满减包邮
import Crea_man_jian from '../containers/Active_gov/Crea_man_jian'
import Set_yunfei from '../containers/Set_yunfei'
import Financial_mana from '../containers/Financial_mana'
import History_menu from '../containers/Financial_mana/History_menu'
import Money_detail from '../containers/Financial_mana/Money_detail'
import Detail from '../containers/Financial_mana/Detail'        //账户明细
import Apply_money from '../containers/Financial_mana/Apply_money' //申请提现
import More_set from '../containers/More_set'   //更多设置
import Change_password from '../containers/More_set/Change_password'
import Login from '../containers/Login'
import findPassword1 from '../containers/Login/findPassword1'
import findPassword2 from '../containers/Login/findPassword2'
import ResetPassword from '../containers/Login/resetPassword'
import NotFound from '../containers/404'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Login}/>
                    <Route path='Home' component={Home}/>
                    <Route path='WaitHandle' component={WaitHandle}/>
                    <Route path='OrderGov' component={OrderGov}/>
                    <Route path='Login' component={Login}/>
                    <Route path='findPassword1' component={findPassword1}/>
                    <Route path='findPassword2' component={findPassword2}/>
                    <Route path='ResetPassword' component={ResetPassword}/>
                    <Route path='Store' component={Store}/>
                    <Route path='SetTime' component={SetTime}/>
                    <Route path='SelDay' component={SelDay}/>
                    <Route path='Store_certificate' component={Store_certificate}/>
                    <Route path="search/:type(/:keyword)" component={Search}/>
                    <Route path="Pro_pub" component={Pro_pub}/>
                    <Route path="Put_pro" component={Put_pro}/>
                    <Route path="Search_list"  component={Search_list}/>
                    <Route path="Class_sel"  component={Class_sel}/>
                    <Route path="Pro_des"  component={Pro_des}/>
                    <Route path="Pro_gov"  component={Pro_gov}/>
                    <Route path="ProDetail"  component={ProDetail}/>
                    <Route path="Active_gov"  component={Active_gov}/>
                    <Route path="Man_zeng"  component={Man_zeng}/>
                    <Route path="Man_jian"  component={Man_jian}/>
                    <Route path="Crea_man_zeng"  component={Crea_man_zeng}/>
                    <Route path="Crea_new_jian"  component={Crea_new_jian}/>
                    <Route path="Crea_man_bao"  component={Crea_man_bao}/>
                    <Route path="Crea_man_jian"  component={Crea_man_jian}/>
                    <Route path="Set_yunfei"  component={Set_yunfei}/>
                    <Route path="Financial_mana"  component={Financial_mana}/>
                    <Route path="Detail"  component={Detail}/>
                    <Route path="History_menu"  component={History_menu}/>
                    <Route path="Money_detail"  component={Money_detail}/>
                    <Route path="Apply_money"  component={Apply_money}/>
                    <Route path="More_set"  component={More_set}/>
                    <Route path="Change_password"  component={Change_password}/>
                    <Route path="Cash_deposit"  component={Cash_deposit}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap