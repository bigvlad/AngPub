var webpack=require('webpack');
var path = require('path');

module.exports={
    entry:'./src/main.ts',
    // resolve: {
    //     extensions: [ '.tsx', '.ts', '.js' ]
    // },
    output:{
        //path:'./dist',  //=> configuration.output.path: The provided value "./dist" is not an absolute path!
        path:path.join(__dirname,'./dist'),
        filename:'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              },
            { test: /\.css$/, loader: ['style-loader','css-loader'] },
        ]
    },
    //watch: true
}