var currencyCalculator={vars:{rate:{from:1,fromDecimals:0,to:1,toDecimals:1}},events:{keyup:new CustomEvent("keyup"),change:new CustomEvent("change")},init:function(){currencyCalculator.setup("to","from"),currencyCalculator.setup("from","to")},setup:function(e,t){var c={input:document.getElementById("currency-"+e+"__amount"),otherInput:document.getElementById("currency-"+t+"__amount")};c.input.addEventListener("keyup",function(e){(e.which>=37&&e.which<=40||e.which>=48&&e.which<=57||e.which>=96&&e.which<=105||8===e.which||46===e.which||110===e.which||190===e.which)&&c.input.dispatchEvent(currencyCalculator.events.change)}),c.input.addEventListener("blur",function(e){c.input.dispatchEvent(currencyCalculator.events.change)}),c.input.addEventListener("change",function(n){c.otherInput.value=parseFloat(this.value/currencyCalculator.vars.rate[t]*currencyCalculator.vars.rate[e]).toFixed(currencyCalculator.vars.rate[t+"Decimals"])})}};