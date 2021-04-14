var timeGame=0;
var timeWIn=0;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
function randomGame(){
var a=getRandomIntInclusive(1,9);
var b=getRandomIntInclusive(1,9);
var c=getRandomIntInclusive(1,9);
console.log(a,b,c);
if(a===8||b===8||c===8)
{
  timeGame++;
  timeWIn++;
  window.alert("你赢了Ծ‸ Ծ 你的战绩"+timeWIn+"/"+timeGame);}
else{
  timeGame++;
window.alert("我赢了ﾟ∀ﾟ)σ 你的战绩"+timeWIn+"/"+timeGame);
}
}
