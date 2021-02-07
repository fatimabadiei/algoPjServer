import { Injectable, NotFoundException } from '@nestjs/common';
import { Console } from 'console';
import { GetFile } from 'src/sort/get-file';
import { AlgoBase } from './algoBase';
import { GenRandom } from './gen-random';

@Injectable()
export class SortService {
  getFile;
  algo;
  genRandom;
  constructor() {
    this.getFile = new GetFile();
    this.algo = new AlgoBase();
    this.genRandom = new GenRandom();
  }

  async sortInt(algoName) {
   
    await this.genRandom.genRandomInt();
    const intArr = this.getFile.loadData('./integer.json');
    let res = [];
    let algoStart = Date.now()
    if(algoName === "insertionSort"){
        res = await this.algo.insertionSort(intArr);
    }else if(algoName === "bubbleSort"){
        res = await this.algo.bubbleSort(intArr);
    }else if(algoName === "heapSort"){
        res = await this.algo.heapSort(intArr);
    }else if(algoName === "mergeSort"){
        res = await this.algo.mergeSort(intArr);
    }else if(algoName === "quickSort"){
        res = await this.algo.quickSort(intArr,0,99999);
    }else if(algoName === "selectionSort"){
        res = await this.algo.selectionSort(intArr);
    }else if(algoName === "radixSort"){ 
        res = await this.algo.radixSort(intArr);
    }else if(algoName === "jsSort"){
        res = await intArr.sort();
    }else if(algoName === "countingSort"){  //didn't worked
        res = await this.algo.countingSort(intArr,Math.min(intArr),Math.max(intArr)); 
    }
    else{
        throw new NotFoundException("Algorithm Not Founded");
    }
    //console.log(res.length);
    let algoEnd = Date.now()
    let algoExcution = algoEnd - algoStart;
    //console.log("ALgoRunTime: ",algoExcution ,"ms")
    await this.genRandom.storeData(res, './sorted.json');
    const filePath = './sorted.json';
    return {algoName,algoExcution,filePath}
  }

  async sortFloat(algoName){
      await this.genRandom.genRandomFloat();
      const floatArr = this.getFile.loadData('./float.json');
      let res = [];
      let algoStart = Date.now()
      if(algoName === "bubbleSort"){
          res = await this.algo.bubbleSort(floatArr);
      }else if(algoName === "insertionSort"){
          res = await this.algo.insertionSort(floatArr);
      }else if(algoName === "heapSort"){
          res = await this.algo.heapSort(floatArr);
      }else if(algoName === "mergeSort"){
          res = await this.algo.mergeSort(floatArr);
      }else if(algoName === "quickSort"){  
          res = await this.algo.quickSort(floatArr,0,99999);
      }else if(algoName === "selectionSort"){
          res = await this.algo.selectionSort(floatArr);
      }else if(algoName === "jsSort"){ //didn't worked
          res = await floatArr.sort();
      }else{
          throw new NotFoundException("Algorithm Not Founded");
      }
    //console.log(res.length)
    let algoEnd = Date.now()
    let algoExcution = algoEnd - algoStart;
    //console.log("ALgoRunTime: ",algoExcution ,"ms")
    await  this.genRandom.storeData(res, './sortedFloat.json');
    let filePath = './sortedFloat.json'
    return {algoName,algoExcution,filePath}
  }

  async sortString(algoName){
      await this.genRandom.arrOfRandomString();
      const stringArr = this.getFile.loadData('./str.json');
      console.log('Created')
      let res = [];
      let algoStart = Date.now()
      if(algoName === "bubbleSort"){
        res = await this.algo.bubbleSort(stringArr);
      }else if(algoName === "selectionSort"){
          res = await this.algo.selectionSort(stringArr);
      }else if(algoName === "heapSort"){
          res = await this.algo.heapSort(stringArr);
      }else if(algoName === "insertionSort"){
          res = await this.algo.insertionSort(stringArr);
      }else if(algoName === "mergeSort"){
          res = await this.algo.mergeSort(stringArr);
      }else if(algoName === "quickSort"){
          res = await this.algo.quickSort(stringArr,0,99999);
      }else if(algoName === "jsSort"){
          res = await stringArr.sort();
      }
      else{
          throw new NotFoundException("Algorithm Not Founded");
      }
      
      //console.log(res.length)
      let algoEnd = Date.now()
      let algoExcution = algoEnd - algoStart;
      //console.log("ALgoRunTime: ",algoExcution ,"ms")
      await this.genRandom.storeData(res,'./sortedStr.json');
      let filePath = './sortedStr.json'
      return {algoName,algoExcution,filePath}
  }
}
