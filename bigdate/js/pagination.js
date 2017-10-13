layui.use(['laypage', 'layer'], function(){
  var laypage = layui.laypage
  ,layer = layui.layer;
  
   laypage.render({
   	theme: '#578fe6',
    elem: 'opagination'
    ,count: 100
    ,first: '首页'
    ,last: '末页'
    ,prev: '上一页'
    ,next: '下一页'
    ,layout: ['page', 'count']
  });
})