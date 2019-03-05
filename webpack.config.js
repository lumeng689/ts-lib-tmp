
module.exports = {
  entry:  __dirname + "/src/hello.ts",//已多次提及的唯一入口文件
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: __dirname + "/dist/web",//打包后的文件存放的地方
    filename: "sdk.js", //打包后输出文件的文件名
    libraryTarget: 'window'
  }
}