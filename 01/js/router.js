module.exports = {
    home(req,res){
        let obj = {
            name:'张三',
            age:18,
            sex:'男'
        }
        res.end(JSON.stringify(obj));
    },
    login(req,res){
        let obj2 = {
            name:'李四',
            age:20,
            sex:'女'
        }
        res.end(JSON.stringify(obj2));
    }
}