module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.arrayLength()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    this.input = input
  }
  minimum() {
   return Math.min.apply(Math,this.input)
  }
  maximum(){
    return Math.max.apply(Math,this.input)
  }
  arrayLength(){
    return this.input.length
  }
  average(){
    var sum=0;
    for (var i = 0; i < this.input.length; i++) {
        sum+=this.input[i];
    };
    var avg=(sum/this.input.length).toFixed(2);
    return avg
  }
}
