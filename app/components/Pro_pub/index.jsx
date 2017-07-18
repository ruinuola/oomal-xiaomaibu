import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory, Link } from 'react-router'

import Radio from '../Radio'
import Ture_false from '../Ture_false'

import './style.less'

class Pro_pub extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            pro_img: '',
            txt_num: 0,
            classify: '生鲜果蔬-水果-苹果',
            radioOption:[
                {
                    text: '立即发布',
                    value: 'fabu',
                    name: 'operate',
                    checked:true
                },
                {
                    text: '放入仓库',
                    value: 'put_cangku',
                    name: 'operate',
                    checked:false
                },
                {
                    text: '商品按时段销售',
                    value: 'time_sale',
                    name: 'operate',
                    checked:false
                }
            ]
        }
    }
    render() {
        return (
            <form className="pro_pub clear-fix">
                <div ref='pro_img' className="pro_img">
                    <img src={this.state.pro_img} alt=""/>
                    <div className="img_btn">
                        <input onChange={this.changeImg.bind(this)} type="file"/>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="pro_title">
                            <textarea onKeyUp={this.txtNum.bind(this)} name="pro_title" placeholder='输入商品标题（非必填）'></textarea>
                            <span className="gray_txt">{this.state.txt_num}/30</span>
                        </div>
                        <div className="line">
                            <input name="tiao_ma" type="text" placeholder="商品条形码（非必填）"/>
                        </div>
                    </li>
                    <li className="line">
                        <i className="icon icon-red_xing"></i>
                        <span>类目</span>
                        <Link to="/Class_sel">
                            <i className="icon icon-to_right1 float-right"></i>
                            <span className="gray2_txt float-right">{this.state.classify}</span>
                        </Link>
                    </li>
                    <li>
                        <div className="price line">
                            <i className="icon icon-red_xing"></i>
                            <span>价格</span>
                            <span className="gray2_txt float-right">￥</span>
                            <input name='price' className="float-right" type="number"/>
                        </div>
                        <div className="origin_price line">
                            <i className="icon icon-red_xing opacity0"></i>
                            <span>原价</span>
                            <span className="gray1_txt">（非必填）</span>
                            <span className="gray2_txt float-right">￥</span>
                            <input name='origin_price' className="float-right" type="number"/>
                        </div>
                        <div className="weight line">
                            <i className="icon icon-red_xing"></i>
                            <span>重量</span>
                            <span className="gray2_txt float-right">g</span>
                            <input name='weight' className="float-right" type="number"/>
                        </div>
                        <div className="stock line">
                            <i className="icon icon-red_xing"></i>
                            <span>库存</span>
                            <input name='stock' className="float-right" type="number"/>
                        </div>
                    </li>
                    <li className="line">
                        <Link to='/Pro_des'>
                            <i className="icon icon-red_xing opacity0"></i>
                            <span>商品描述</span>
                            <span className="gray1_txt">（非必填）</span>
                            <i className="icon icon-to_right1 float-right"></i>
                        </Link>
                    </li>
                    <li className="line">
                        <i className="icon icon-red_xing opacity0"></i>
                        <span>该商品不支持退换</span>
                        <Ture_false result={false}/>
                    </li>
                </ul>
                <div className="radio">
                    <Radio options={this.state.radioOption} onChange={this.handleChangeRadio.bind(this)}/>
                </div>
                <div className="time">
                    <input type="date" placeholder="选择时间" id="datetimeStart"/>
                    <span>至</span>
                    <input type="date" placeholder="选择时间" id="datetimeEnd"/>
                </div>
                <div className="btns">
                    <button type="reset">重置</button>
                    <button onSubmit={this.submit.bind(this)} type="submit">确认提交</button>
                </div>
            </form>
        )
    }
    componentDidMount(){

    }
    //统计textarea的字数
    txtNum(e){
        let txt = e.target.value
        //console.log('txt:'+txt)
        let l = txt.length
        if(l>30){
            e.target.value = txt.slice(0,30)
            return false;
        }
        this.setState({
            txt_num: l
        })
    }
    //上传图片并显示
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
                self.setState({
                    pro_img:this.result
                })
                //imgNode.src = this.result
            }
        })( file )
    }
    //单选按钮
    handleChangeRadio(index){
        const _radioOptions = this.state.radioOption

        for(let r=0,radioOption; radioOption = _radioOptions[r++]; ){
            radioOption.checked = false
        }
        _radioOptions[ index ].checked = true

        this.setState({radioOption: _radioOptions})
    }
    //提交按钮
    submit(){
        hashHistory.push('/Home')
    }
}

export default Pro_pub