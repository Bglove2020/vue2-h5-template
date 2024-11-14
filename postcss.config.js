module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 50, // 表示根元素字体大小或根据input参数返回根元素字体大小
            propList: ['*'], // 可以从px更改为rem的属性, 通配符*表示启用所有属性
        }
    }
}
