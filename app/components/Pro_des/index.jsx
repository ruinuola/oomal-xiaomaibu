import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Pro_des_component extends React.Component {
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
            <form className='pro_des'>
                <div id="content">
                {
                    data.map(function(value, item){
                        if(value.name==='img'){
                            return <img key={item} src={value.value}/>
                        }else if(value.name==='p'){
                            return <p key={item}>{value.value}</p>
                        }
                    })
                }

                    <div className="expandingArea">
                        <textarea ref='textarea' className='textarea' placeholder="添加图片和文字让你的商品更有活力"></textarea>
                    </div>
                </div>

                <div className="btn">
                    <div className="addImg">
                        <input onChange={this.changeImg.bind(this)} type="file"/>
                        <button type='button' className="addImg">添加图片</button>
                    </div>

                    <button onClick={this.submit.bind(this)} type='button' className="submit">提交</button>
                </div>
            </form>
        )
    }
    //上传图片并显示
    changeImg(e){
        this.getTextarea()
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
                const p={name:'img', value:this.result}
                self.add_data(p)
            }
        })( file )
    }
    //提交按钮
    submit(){
        getTextarea()
    }
    //获取textarea值
    getTextarea(){
        let value = this.refs.textarea.value
        if(value.length > 0){
            const p={name:'p', value:value}
            this.add_data(p)
        }
        this.refs.textarea.value = ''
    }
    //给data添加数值
    add_data(p){
        let data = [].concat(this.state.data)
        data.push(p)
        this.setState({
            data: data
        })
    }
}

export default Pro_des_component