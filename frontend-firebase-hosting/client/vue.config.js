const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, '../public')
  ,
  devServer:{
    proxy:{
      '/api':{
        target: 'https://ashmitaryan.herokuapp.com'
      }
    }
  }
}