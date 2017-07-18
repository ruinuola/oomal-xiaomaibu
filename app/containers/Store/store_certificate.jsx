import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header4'

import './style.less'

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
            <div id='certificate'>
                <Header title='商家资质'/>
                <ul>
                    <li>
                        <p>1.营业执照</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <p>2.税务登记证</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <p>3.组织机构代码证</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <p>4.商标证（授权代理或授权销售证明）</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <p>5.开户行许可证</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <p>6.特殊行业还需对应生产经营许可证</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <p>7.身份证</p>
                        <div className="img">
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                             <img src={require('../../static/images/certificate.jpg')} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
    componentDidMount(){
        document.title = '商家资质'
    }
}

export default SetTime