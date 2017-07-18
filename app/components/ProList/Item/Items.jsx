import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Items extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const classify3 = data.classify3
        console.log(data)
        return (
            <div className="items">
                <p>{data.name}</p>
                {
                classify3.map(function(value, item){
                    return (
                        <div key={item} className="index clear-fix">
                            <div className="img float-left">
                                <img src={value.img} alt=""/>
                            </div>
                            <div className="content">
                                <p className="title">{value.name}</p>
                                <p className="stock">{value.stock}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Items