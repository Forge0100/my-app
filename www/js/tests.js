$(function(){var t,o="#question";questions=function(){$(o+" h3").text(data[t][0]);for(var a=0;a<=data[t][1].length;a++)$(o+' label[for="radio-'+a+'"]').text(data[t][1][a])},clear_cookie=function(){for(var t=0;t<=data.length;t++)window.localStorage.removeItem("r"+t)},clear_fields=function(){for(var a=0;a<=data[t][1].length+1;a++)$(o+' label[for="radio-'+a+'"]').text("")},controle_radio=function(){for(var a=0;a<=data[t][1].length+1;a++){var e=o+' label[for="radio-'+a+'"]',n=o+' input[id="radio-'+a+'"]';""!==$(e).text()?$(e).show():($(n).hide(),$(e).hide())}},controle_image=function(){for(var a=o+" #img-",e=0;e<=data[t][2].length+1;e++)null!=data[t][2][e]?$(a+e).attr("src","img/"+data[t][2][e]).show():$(a+e).attr("src","").hide()},confirm_test=function(){null!=window.localStorage.getItem("r0")&&(confirm("Вы действительно хотите перепройти тест?")?clear_cookie():location="result.html")},update=function(){var a=$(o+" input[name=radio]:checked").val();window.localStorage.setItem("r"+t,a),t++,clear_fields(),controle_image(),questions(),controle_radio()},init=function(){t=0,confirm_test(),controle_image(),questions(),controle_radio()},$("button").click(function(){t<data.length?(update(),console.log(t),t==data.length&&$(o).hide()):location="result.html"}),init()});