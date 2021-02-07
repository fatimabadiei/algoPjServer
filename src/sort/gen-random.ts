const fs = require('fs')


export class GenRandom {


 storeData (data, path)  {
    try {
      fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }

  genRandomInt() {
    let min = -4294967296;
    let max = 4294967296;
    let arr = [];

    for (let i = 0; i < 100000; i++) {
      let randomInt = Math.floor(Math.random() * (max - min + 1) + min); //Create Random
      arr.push(randomInt);
    }
    this.storeData(arr, './integer.json');
  }
   

  genRandomFloat() {
        let min = 5 * 10 ^ -324;
        let max = 1.8 * 10^ 308;
        let arr = [];
        for (let i = 0; i < 100000; i++) {
            let randomFloat = Math.random() * (max - min + 1) + min;
            arr.push(randomFloat);
        }
        this.storeData(arr, './float.json')
   }
    
    
      randLength() {
        for (let j = 0; j < 80; j++) {
          let length = Math.floor((Math.random()*80)+1);
        }
        return length;
      }
    
      genRandomString() {
        let result = ' ';
        let arr = []
        let randomLength = Math.floor((Math.random()*40)+1)
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < randomLength; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
        //for(let j = 0; j < 10000 ; j++){
        //    arr.push(result);
        //}
        //this.storeData(arr, './str.json');

        
    
      arrOfRandomString() {
        let arr = [];
        for (let i = 0; i < 100000; ++i) {
          arr.push(this.genRandomString());
        }
        this.storeData(arr, './str.json');
        
      }

      writeStringFile(){
        var fs = require('fs');
        let data = this.arrOfRandomString();
        fs.writeFile('./String.txt',data,function(err){
            if (err) throw err;
            console.log("Create a file")
        });
    }
}
