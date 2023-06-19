(()=>{"use strict";async function t(t){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c49e4da312b346048e7224022233005&q=${t}&days=6`,{mode:"cors"});return await e.json()}catch(t){return"error"}}function e(t,e,n,c,o,d,a,i,r,s,u,m,l,y,h,f,p){this.date=t,this.city=e,this.country=n,this.temp_c=c,this.temp_f=o,this.is_day=d,this.wind_kph=a,this.wind_mph=i,this.humidity=r,this.text=s,this.icon=u,this.uv=m,this.wind_dir=l,this.rain=y,this.snow=h,this.sunrise=f,this.sunset=p}function n(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t).getUTCDay()]}function c(t,e){const n=document.querySelector(".day"),c=document.createElement("div");c.classList.add("tempDom");const o=document.createElement("button");o.classList.add("otherTemp"),"C"==e?o.textContent="°F":"F"==e&&(o.textContent="°C"),c.textContent=`${t}°${e}`,c.appendChild(o),n.appendChild(c)}function o(t,e){const n=document.querySelector(".day"),c=document.createElement("div");c.textContent=`Wind: ${t} ${e}`,n.appendChild(c)}function d(t,e,n,c,o,d,a,i,r,s,u,m,l,y){this.date=t,this.maxtemp_c=e,this.maxtemp_f=n,this.mintemp_c=c,this.mintemp_f=o,this.maxwind_kph=d,this.maxwind_mph=a,this.humidity=i,this.icon=r,this.uv=s,this.rain=u,this.snow=m,this.sunrise=l,this.sunset=y}function a(t,e){const c=document.querySelector(`.${t}`),o=document.createElement("div");o.classList.add("dateDom"),o.textContent=`${n(e)}`,c.appendChild(o)}function i(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("img");c.src="https://"+e,n.appendChild(c)}function r(t,e,n,c){const o=document.querySelector(`.${t}`),d=document.createElement("div");d.textContent=`${e}°${c} | ${n}°${c}`,o.appendChild(d)}function s(t,e,n){const c=document.querySelector(`.${t}`),o=document.createElement("div");o.textContent=`Max wind: ${e} ${n}`,c.appendChild(o)}function u(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("div");c.textContent=`Humidity: ${e}%`,n.appendChild(c)}function m(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("div");c.textContent=`Chance of rain: ${e}%`,n.appendChild(c)}function l(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("div");c.textContent=`Chance of snow: ${e}%`,n.appendChild(c)}function y(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("div");c.textContent=`Sunrise: ${e}`,n.appendChild(c)}function h(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("div");c.textContent=`Sunset: ${e}`,n.appendChild(c)}function f(t,e){const n=document.querySelector(`.${t}`),c=document.createElement("div");c.textContent=`Uv: ${e}`,n.appendChild(c)}function p(){const t=document.querySelector(".day"),e=document.querySelector(".restOfDays");for(document.querySelector(".locationDom").remove();t.hasChildNodes();)t.removeChild(t.firstChild);for(;e.hasChildNodes();)e.removeChild(e.firstChild)}!async function C($,_){null==_&&(_=await async function(){try{return(await async function(){try{const t=await fetch("https://api.weatherapi.com/v1/ip.json?key=c49e4da312b346048e7224022233005&q=auto:ip",{mode:"cors"});return await t.json()}catch(t){return"error"}}()).city}catch(t){return"error"}}());const v=await t(_);if(console.log(v),"error"==v);else{const t=new e(v.forecast.forecastday[0].date,v.location.name,v.location.country,v.current.temp_c,v.current.temp_f,v.current.is_day,v.current.wind_kph,v.current.wind_mph,v.current.humidity,v.current.condition.text,v.current.condition.icon,v.current.uv,v.current.wind_dir,v.forecast.forecastday[0].day.daily_chance_of_rain,v.forecast.forecastday[0].day.daily_chance_of_snow,v.forecast.forecastday[0].astro.sunrise,v.forecast.forecastday[0].astro.sunset,v.current.uv);!function(t,e){const n=document.querySelector("header"),c=document.createElement("div");c.classList.add("locationDom"),c.textContent=`${t}, ${e}`,n.appendChild(c)}(t.city,t.country),function(t){const e=document.querySelector(".day"),c=document.createElement("div");c.textContent=n(t),c.classList.add("dateDom"),e.appendChild(c)}(t.date),function(t){const e=document.querySelector(".day"),n=document.createElement("div"),c=document.createElement("img");c.src="https://"+t,n.appendChild(c),e.appendChild(n)}(t.icon),"C"==$?(c(t.temp_c,"C"),o(t.wind_kph,"kph")):"F"==$&&(c(t.temp_f,"F"),o(t.wind_mph,"mph")),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Wind direction: ${t}`,e.appendChild(n)}(t.wind_dir),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Humidity: ${t}%`,e.appendChild(n)}(t.humidity),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Chance of rain: ${t}%`,e.appendChild(n)}(t.rain),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Chance of snow: ${t}%`,e.appendChild(n)}(t.snow),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Sunrise: ${t}`,e.appendChild(n)}(t.sunrise),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Sunset: ${t}`,e.appendChild(n)}(t.sunset),function(t){const e=document.querySelector(".day"),n=document.createElement("div");n.textContent=`Uv: ${t}`,e.appendChild(n)}(t.uv)}!async function(e){const n=await t(e);if("error"==n)alert("Invalid location");else for(let t=0;t<n.forecast.forecastday.length-1;t++){const e=document.querySelector(".restOfDays"),c=document.createElement("div");c.classList.add(`d${t+1}`),c.classList.add("rest"),e.appendChild(c);const o=new d(n.forecast.forecastday[t+1].date,n.forecast.forecastday[t+1].day.maxtemp_c,n.forecast.forecastday[t+1].day.maxtemp_f,n.forecast.forecastday[t+1].day.mintemp_c,n.forecast.forecastday[t+1].day.mintemp_f,n.forecast.forecastday[t+1].day.maxwind_kph,n.forecast.forecastday[t+1].day.maxwind_mph,n.forecast.forecastday[t+1].day.avghumidity,n.forecast.forecastday[t+1].day.condition.icon,n.forecast.forecastday[t+1].day.uv,n.forecast.forecastday[t+1].day.daily_chance_of_rain,n.forecast.forecastday[t+1].day.daily_chance_of_snow,n.forecast.forecastday[t+1].astro.sunrise,n.forecast.forecastday[t+1].astro.sunset);a(`d${t+1}`,o.date),i(`d${t+1}`,o.icon);const p=document.querySelector(".otherTemp");"°F"==p.textContent?(r(`d${t+1}`,o.mintemp_c,o.maxtemp_c,"C"),s(`d${t+1}`,o.maxwind_kph,"kph")):"°C"==p.textContent&&(r(`d${t+1}`,o.mintemp_f,o.maxtemp_f,"F"),s(`d${t+1}`,o.maxwind_mph,"mph")),u(`d${t+1}`,o.humidity),m(`d${t+1}`,o.rain),l(`d${t+1}`,o.snow),y(`d${t+1}`,o.sunrise),h(`d${t+1}`,o.sunset),f(`d${t+1}`,o.uv)}}(_),function(t){const e=document.querySelector(".otherTemp");e.addEventListener("click",(()=>{p(),"°F"==e.textContent?C("F",t):C("C",t)}))}(_),function(){const t=document.querySelector("form");t.addEventListener("submit",(e=>{e.preventDefault(),p(),C("C",document.querySelector("#location").value),t.reset()}))}()}("C")})();