var currencyDropdown={vars:{shownList:0},events:{input:new CustomEvent("input"),click:new CustomEvent("click")},init:function(){currencyDropdown.setup("to","from")},setup:function(e,t){for(var n={direction:e,input:document.getElementById("currency-"+e),prepend:document.getElementById("currency-"+e+"__dropdown-prepend"),label:document.getElementById("currency-"+e+"__dropdown-label"),otherLabel:document.getElementById("currency-"+t+"__dropdown-label"),list:document.getElementById("currency-"+e+"__list"),otherList:document.getElementById("currency-"+t+"__list"),currencies:document.querySelectorAll("#currency-"+e+"__list button"),amount:document.getElementById("currency-"+e+"__amount"),otherAmount:document.getElementById("currency-"+t+"__amount")},r=0;r<n.currencies.length;r++)n.currencies[r].addEventListener("click",function(e){e.preventDefault(),currencyDropdown.makeSelection(n,this),currencyDropdown.hideList(n.list,n.label),n.otherAmount.dispatchEvent(currencyCalculator.events.change)}),"US"===n.currencies[r].getAttribute("data-country")&&(n.currencies[r].dispatchEvent(currencyDropdown.events.click),n.input.value="");n.label.classList.remove("inactive"),n.label.addEventListener("click",function(e){"block"===n.list.style.display?currencyDropdown.hideList(n.list,n.label):currencyDropdown.showList(n)}),n.input.addEventListener("input",function(){typeAhead.filter({input:n.input,targets:n.currencies}),currencyDropdown.toggleIcon(n)}),n.input.nextElementSibling.addEventListener("click",function(){n.input.value="",n.input.dispatchEvent(currencyDropdown.events.input)})},toggleIcon:function(e){e.input.value.length?e.input.nextElementSibling.classList.add("active"):e.input.nextElementSibling.classList.remove("active")},hideList:function(e,t){currencyDropdown.vars.shownList=0,e&&(e.style.display="none",t.classList.remove("active"))},showList:function(e){currencyDropdown.hideList(e.otherList,e.otherLabel),currencyDropdown.vars.shownList=e.list,e.list.style.display="block",e.label.classList.add("active")},makeSelection:function(e,t){currencyDropdown.hideList(e.list,e.label),currencyCalculator.vars.rate[e.direction]=Number(t.getAttribute("data-rate")),currencyCalculator.vars.rate[e.direction+"Decimals"]=Number(t.getAttribute("data-decimals"));var n=t.getAttribute("data-symbol"),r='<img src="assets/img/flags/'+t.getAttribute("data-country")+'.png" alt="" class="hero__calculator-flag"><span class="input-group-text">'+t.value+"</span>";e.input.value=t.name,e.input.dispatchEvent(currencyDropdown.events.input),e.label.innerHTML=r,e.prepend.innerHTML=n}};