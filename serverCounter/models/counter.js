'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Counter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Counter.init({
    input: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Counter',
  });
  Counter.beforeCreate((el) => {
    function getCounts(string) {
      let alfabet = 'abcdefghijklmnopqrstuvwxyz';
      let newStr = ""
    

      const charCount = {}
      for (let i in string) {
        for(let j in alfabet){
          if(string[i] === alfabet[j]){
            newStr += alfabet[j]
            break
          }
        }
      }
 
      for(let k in newStr){
        const char = newStr[k]
        if(!charCount[char] ){
            charCount[char] = 0
        }
        charCount[char]++
      
  

      }
      return charCount
  }
  
 
  
  
  function getSliceCount (string){
      const arr = []
      for(const key of Object.values(getCounts(string))) {
          // console.log(`${key}`);
          if(key <= 1){
              // console.log(`${key}`);
              arr.push(key)
          }
      }
      el.count = arr.length
  }
  
  
      // console.log(arr.length);
  
      getSliceCount(el.input);
  
    
  })

  return Counter;
};