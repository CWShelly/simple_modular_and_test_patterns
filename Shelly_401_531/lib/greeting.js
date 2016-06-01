const greeting = module.exports = {
    'greet': (name)=>{
        var name = process.argv[2] || 'bob';
        if(name){
            return 'hello ' + name;
        }
    }
};
