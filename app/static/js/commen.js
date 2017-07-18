//对象克隆
Object.prototype.clone = function(){
    var copy = (this instanceof Array)
    for(arr in this){
        if(!obj.hasOwnProperty(attr)) continue
        copy[attr] = (typeof this[i] == "object")?obj[attr].clone():obj[attr]
    }
    return copy
}

//克隆对象
function clone(Obj){
    var buf
    if(Obj instanceof Array) {
        buf = []
        var i = Obj.length
        while(i--){
            buf[i] = this.clone(Obj[i])
        }
        return buf
    }else if(Obj instanceof Object) {
        buf = {}
        for(let k in Obj){
            buf[k] = this.clone(Obj[k])
        }
        return buf
    }else{
        return Obj
    }
}