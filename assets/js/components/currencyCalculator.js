var currencyCalculator={vars:{rate:{from:1,to:1}},events:{keyup:new Event("keyup"),change:new Event("change")},init:function(){currencyCalculator.setup("to","from"),currencyCalculator.setup("from","to")},setup:function(e,t){var n={input:document.getElementById("currency-"+e+"__amount"),otherInput:document.getElementById("currency-"+t+"__amount"),event:new Event("change")};n.input.addEventListener("keyup",function(e){(e.which>=48&&e.which<=57||e.which>=96&&e.which<=105||110===e.which||190===e.which)&&n.input.dispatchEvent(currencyCalculator.events.change)}),n.input.addEventListener("blur",function(e){this.value=parseFloat(this.value).toFixed(2),n.input.dispatchEvent(currencyCalculator.events.change)}),n.input.addEventListener("change",function(c){n.otherInput.value=parseFloat(this.value*currencyCalculator.vars.rate[t]/currencyCalculator.vars.rate[e]).toFixed(2)})}};currencyCalculator.init();