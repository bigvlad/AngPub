var webpack=require('webpack');
var path = require('path');

module.exports={
    entry:'./src/main.js',
    output:{
        //path:'./dist',  //=> configuration.output.path: The provided value "./dist" is not an absolute path!
        path:path.join(__dirname,'./dist'),
        filename:'build.js'
    },
    watch: true
}