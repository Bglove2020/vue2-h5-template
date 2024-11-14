import axios from "@/http";

export function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        } else if (typeof time === 'string') {
            time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

// 转换子标签
export function changeIdToLabel(array,value,label,myValue){
    if(array.length === 0){
        return myValue
    }
    for(let i=0;i<array.length;i++){
        if(array[i][value] === myValue){
            return array[i][label]
        }
    }
}

// 获取若依字典
export function getDict(vm,dicts){
    console.log('开始挂载字典')
    for(let dict of dicts){
        vm[dict] =[]
        axios({
            url:'/system/dict/data/type/'+ dict,
            method:'get',
        }).then((res)=>{
            vm[dict] = res.data.map((item)=>{
                return {label:item.dictLabel,value:item.dictValue}
            })
        })
    }
}

// 下载文件方法
export function downFile(url, fileName){
    console.log("开始下载")
    const x = new window.XMLHttpRequest();
    x.open('GET', url, true);
    x.responseType = 'blob';
    x.onload = () => {
        const url = window.URL.createObjectURL(x.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    };
    x.send();
}

