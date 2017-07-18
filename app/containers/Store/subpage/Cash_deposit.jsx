import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Cash_deposit extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="cash_deposit">
                <h3>保证金问题中心</h3>
                <ul className="content">
                    <li>
                        <h4>1.为什么要交纳保证金？</h4>
                        <p>为了保障消费者的利益，部分类目发布商品（发布时有提示）必须要缴纳保证金才可以；非强制缴纳保证金的商品类目缴纳保证金后，可以凸显与其他店铺的差异，提升买家购买转换。</p>
                    </li>
                    <li>
                        <h4>2.保证金要交纳多少钱？</h4>
                        <p>目前除手机类目最低保证金额度需要缴纳10000元外，其他类目缴纳保证金最低额度为1000元。特殊保证金要求以特殊通知，招商规则等为准。</p>
                    </li>
                    <li>
                        <h4>3.保证金缴纳后钱还是我的吗？还可以解冻退回给我吗？</h4>
                        <p>保证金缴纳成功后钱冻结在您的支付宝账户，为不可用余额；缴纳后随时可以申请解冻，如符合条件会立即解冻成功，由您支付宝账户内不可用余额。</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Cash_deposit