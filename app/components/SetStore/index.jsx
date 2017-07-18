import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class SetStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            txt_num: 0
        }
    }
    render() {
        let storeInfo = this.props.storeInfo
        return (
            <div>
                <div className="setStore">
                    <p>店铺设置</p>
                    <ul>
                        <li className='storeName'>
                            <span>店铺名称</span>
                            <span className='float-right'>{storeInfo.storeName}</span>
                        </li>
                        <li>
                            <span>店铺LOGO</span>
                            <div className='float-right'>
                                <div className="circle">
                                    <img src={require('../../static/images/eg1.png')} alt="店铺LOGO"/>
                                </div>
                                <div className="btn">
                                    <input onChange={this.changeImg.bind(this)} type="file" accept="image/gif,image/png,image/jpg,image/jpeg"/>
                                    <i className="icon icon-to_right1"></i>
                                </div>
                            </div>
                        </li>
                        <li className="homeBg">
                            <span>店铺背景</span><span className="gray_txt">（非必填）</span>
                            <div className='float-right'>
                                <img src={require('../../static/images/homeBg.jpg')} alt="店铺LOGO"/>
                                <div className="btn">
                                    <input onChange={this.changeImg.bind(this)} type="file" accept="image/gif,image/png,image/jpg,image/jpeg"/>
                                    <i className="icon icon-to_right1"></i>
                                </div>
                            </div>
                        </li>
                        <li className="gongGao">
                            <textarea onKeyUp={this.txtNum.bind(this)} placeholder='输入店铺公告（非必填）'></textarea>
                            <span className="gray_txt">{this.state.txt_num}/60</span>
                        </li>
                        <li className="phone">
                            <span>商家电话</span>
                            <span className="float-right">{storeInfo.phone}</span>
                        </li>
                        <li className="setTime">
                            <Link to='/SetTime'>
                                <span>设置营业时间</span>
                                <div className='float-right'>
                                    <span className='gray_txt'>营业中</span>
                                    <i className="icon icon-to_right1"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="other">
                    <p>其他</p>
                    <ul>
                        <li>
                            <Link to='/Cash_deposit'>
                                <span>保证金</span>
                                <i className="icon icon-to_right1 float-right"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Store_certificate'>
                                <span>商家资质</span>
                                <i className="icon icon-to_right1 float-right"></i>
                            </Link>
                        </li>
                        <li className="shiti_img">
                            <span>实体店图片</span><span className="gray_txt">（非必填）</span>
                            <div className="float-right">
                                <img src={require('../../static/images/shiti_img.jpg')} alt="实体图片"/>
                                <div className="btn">
                                    <input onChange={this.changeImg.bind(this)} type="file" accept="image/gif,image/png,image/jpg,image/jpeg"/>
                                    <i className="icon icon-to_right1"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    //统计textarea的字数
    txtNum(e){
        let txt = e.target.value
        let l = txt.length
        if(l>60){
            e.target.value = txt.slice(0,60)
            return false;
        }
        this.setState({
            txt_num: l
        })
    }
    changeImg(e){
        const target = e.target
        const self = this
        const file = target.files[0]
        var ireg = /image\/.*/i
        if(!file.type.match(ireg)){
            alert( file.name + '不是图片文件。' )
            return false
        }
        var reader = new FileReader()
        //读取文件内容
        reader.readAsDataURL(file);
        reader.onload = (function(f){
            return function(e){
                let parent = self.getParent(target)
                let imgNode = self.getChild(parent)
                imgNode.src = this.result
            }
        })( file )
    }
    //获取父节点
    getParent(target){
        let matched = []
        while( (target = target.parentNode) && target.nodeType !==9 ){
            if ( target.nodeType ===1 ) {//判断elem是元素类型
                if ( target.className == 'float-right' ) {
                    matched.push(target)
                    break
                }
            }
        }
        return matched[ matched.length-1 ]
    }
    //获取子节点
    getChild(parent){
        let matched = parent.getElementsByTagName('img')[0]
        return matched
    }
}

export default SetStore