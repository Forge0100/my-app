$(function(){var t="#result";result=function(){var l="",e="";if(null==window.localStorage.getItem("r0"))return void $(t).html('<h3 align="center">Результаты теста отсутствуют</h3>');for(var i=0;i<data.length;i++){var a=window.localStorage.getItem("r"+i);l+="<li><h3>"+data[i][0]+"</h3><p>"+data[i][3][a]+"</p>"}e+='<h3>Результат</h3><ol data-role="listview">'+l+"</ol>",$(t).html(e)},init=function(){result(),$('[data-role="listview"]').listview().listview("refresh")},init()});