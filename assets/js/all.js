function canWebP(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}for(var nextSlide=function(e){for(var t=0;t<e.length;t++){var n=t+1;if(e[t].checked){e[t].checked="false",n===e.length&&(n=0),e[n].checked="true";break}}},intervalCheck={interval:500,setUp:function(){intervalCheck.action=setInterval(function(){for(var e in intervalCheck.timeouts)intervalCheck.timeouts.hasOwnProperty(e)&&intervalCheck.timeouts[e].$_inputs.length&&intervalCheck.timeouts[e].action()},intervalCheck.interval)},action:0,timeouts:{tickerCarousel:{$_inputs:document.querySelectorAll('input[name="tickerCarousel"]'),count:0,change:5,paused:0,action:function(){intervalCheck.timeouts.tickerCarousel.paused||intervalCheck.timeouts.tickerCarousel.count++,intervalCheck.timeouts.tickerCarousel.count===intervalCheck.timeouts.tickerCarousel.change&&(intervalCheck.timeouts.tickerCarousel.count=0,nextSlide(intervalCheck.timeouts.tickerCarousel.$_inputs))}},heroCarousel:{$_inputs:document.querySelectorAll('input[name="heroCarousel"]'),count:0,change:20,paused:0,action:function(){intervalCheck.timeouts.heroCarousel.paused||intervalCheck.timeouts.heroCarousel.count++,intervalCheck.timeouts.heroCarousel.count===intervalCheck.timeouts.heroCarousel.change&&(intervalCheck.timeouts.heroCarousel.count=0,nextSlide(intervalCheck.timeouts.heroCarousel.$_inputs))}},sightsCarousel:{$_inputs:document.querySelectorAll('input[name="sightsCarousel"]'),count:0,change:25,paused:0,action:function(){intervalCheck.timeouts.sightsCarousel.paused||intervalCheck.timeouts.sightsCarousel.count++,intervalCheck.timeouts.sightsCarousel.count===intervalCheck.timeouts.sightsCarousel.change&&(intervalCheck.timeouts.sightsCarousel.count=0,nextSlide(intervalCheck.timeouts.sightsCarousel.$_inputs))}}}},$_carousels=document.querySelectorAll(".carousel__container"),i=0;i<$_carousels.length;i++){var $_carousel=$_carousels[i];$_carousel.addEventListener("mouseenter",function(){intervalCheck.timeouts[this.querySelectorAll("input")[0].name].paused=1}),$_carousel.addEventListener("mouseleave",function(){intervalCheck.timeouts[this.querySelectorAll("input")[0].name].paused=0});for(var $_inputs=$_carousel.querySelectorAll("input"),j=0;j<$_inputs.length;j++)$_inputs[j].addEventListener("change",function(){intervalCheck.timeouts[this.name].count=0})}document.documentElement.style.setProperty("--scrollbar",window.innerWidth-document.documentElement.clientWidth+"px"),canWebP()?document.body.className+=" webp":document.body.className+=" jpg";