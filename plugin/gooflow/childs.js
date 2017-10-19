/**
 * Created by qiangxl on 2017/10/10.
 */
var currentDags = sessionStorage.getItem('dag');
console.log(currentDags)
var jsondata;
if(currentDags == null || currentDags == 'null') {
  jsondata = '';
}else {
  jsondata = eval("("+currentDags+")");
}