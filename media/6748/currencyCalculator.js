var currencyCalculator={$_els:{from:document.getElementById("currency-from__amount"),to:document.getElementById("currency-to__amount"),button:document.getElementById("hero-calculator__purchase"),date:document.querySelector(".hero-calculator__date")},events:{keyup:new CustomEvent("keyup"),change:new CustomEvent("change")},init:function(){currencyCalculator.setup(currencyCalculator.$_els.to,currencyCalculator.$_els.from),currencyCalculator.setup(currencyCalculator.$_els.from,currencyCalculator.$_els.to),currencyCalculator.$_els.date.textContent=new Date(lastUpdate).toLocaleString("ja",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},minMax:function(e){var t=e.value,r=Number(e.min),a=Number(e.max);return r&&r>t?t=r:a&&a<t&&(t=a),Number(t)},setup:function(e,t){e.addEventListener("blur",function(t){e.dispatchEvent(currencyCalculator.events.change)}),e.addEventListener("change",function(r){e.value=currencyCalculator.minMax(e);var a=Number(parseFloat(e.value/t.getAttribute("data-rate")*e.getAttribute("data-rate")).toFixed(t.getAttribute("data-decimals")));t.value=a,a!==currencyCalculator.minMax(t)&&(t.value=currencyCalculator.minMax(t)),e.value=Number(parseFloat(t.value/e.getAttribute("data-rate")*t.getAttribute("data-rate")).toFixed(e.getAttribute("data-decimals"))),currencyCalculator.$_els.button.setAttribute("href",currencyCalculator.$_els.button.getAttribute("href").split("?")[0]+"?productCode1="+document.querySelector("#currency-to__dropdown-label .input-group-text").textContent+"&amount1="+document.getElementById("currency-from__amount").value)})}};