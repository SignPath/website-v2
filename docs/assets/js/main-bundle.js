/*! For license information please see main-bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}const t=function t(n,o){function c(t,c,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var s in i)i[s]&&(r+="; "+s,!0!==i[s]&&(r+="="+i[s].split(";")[0]));return document.cookie=t+"="+n.write(c,t)+r}}return Object.create({set:c,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},c=0;c<t.length;c++){var i=t[c].split("="),r=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(o[s]=n.read(r,s),e===s)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){c(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});let n;const o={1:{eventCategory:"free_trial_link",eventAction:"click",eventLabel:'"Start free trial" link clicked'},2:{eventCategory:"buy_link",eventAction:"click",eventLabel:'"Buy" link clicked'},3:{eventCategory:"contact_form",eventAction:"submitted",eventLabel:'"Contact Form" submitted'},4:{eventCategory:"subscribe_newsletter_link",eventAction:"click",eventLabel:'"Subscribe Newsletter" link clicked'},5:{eventCategory:"page_visits",eventAction:"visit",eventLabel:"User visited more than one page"},6:{eventCategory:"scroll_50",eventAction:"scrolled",eventLabel:"User scrolled more than 50%"},7:{eventCategory:"scroll_80",eventAction:"scrolled",eventLabel:"User scrolled more than 80%"},8:{eventCategory:"mail_link",eventAction:"click",eventLabel:'"Mailto:" link clicked'},9:{eventCategory:"login_button",eventAction:"click",eventLabel:'"Login" link clicked'}};function c(e=.5){let t=!0;document.addEventListener("scroll",function(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>{e.apply(this,o)}),t)}}((()=>{document.documentElement.scrollHeight*e<window.scrollY+window.innerHeight&&t&&(.5===e&&(t=!1,i(6)),.8===e&&(t=!1,i(7)))}),1e3))}function i(e){n("event",o[e].eventAction,{event_category:o[e].eventCategory,event_label:o[e].eventLabel})}function r(e,t,n){const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);const c="expires="+o.toUTCString();document.cookie=e+"="+t+";"+c+";path=/"}function s(e){const t=e+"=",n=document.cookie.split(";");for(var o=0;o<n.length;o++){for(var c=n[o];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return""}function a(e){return s(e)}function l(e){return"true"===s(e)}function d(){document.querySelectorAll(".information").forEach((e=>{e.classList.toggle("active")})),document.querySelectorAll(".show-less").forEach((e=>{e.classList.toggle("active")})),document.querySelectorAll(".show-more").forEach((e=>{e.classList.toggle("active")}))}const u="acknowledged-cookies2";function f(){console.log("checking consent cookie"),a(u)?g():(console.log("cookie is set"),function(){console.log("checking user continent");const e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);if("success"!==e.status)return void console.log("query failed: "+e.message);"EU"===e.continentCode?(console.log("user is from EU"),m()):(console.log("user is from elsewhere"),g())}},e.open("GET","https://pro.ip-api.com/json?fields=status,continentCode&key=eJ1eA5qDeyPkvao",!0),e.send()}())}function m(){a(u)?document.querySelectorAll(".revoke-cookie-consent").forEach((e=>{e.addEventListener("click",(function(){document.cookie.split(";").forEach((function(e){document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")})),m()}))})):(document.getElementById("cookie-info").classList.add("show"),document.getElementById("acknowledge-cookies-btn").addEventListener("click",(function(){r(u,"true",7300),document.getElementById("cookie-info").classList.remove("show"),g()})),document.getElementById("refuse-cookies-btn").addEventListener("click",(function(){r(u,"false",7300),document.getElementById("cookie-info").classList.remove("show")})),document.querySelectorAll(".show-more").forEach((e=>{e.addEventListener("click",(function(){d()}))})),document.querySelectorAll(".show-less").forEach((e=>{e.addEventListener("click",(function(){d()}))})))}function g(){var e,o,s,d;console.log("loading resources"),function(){if(l(u)){const e=window.location.search,t=new URLSearchParams(e);t.get("adgroupid")&&r("adgroupid",t.get("adgroupid"),365)}}(),function(){if(a(u)&&l(u)){let e=document.createElement("script");function o(){dataLayer.push(arguments)}e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=UA-119338300-1"),document.getElementsByTagName("head")[0].appendChild(e),window.dataLayer=window.dataLayer||[],o("consent","default",{ad_storage:"granted",analytics_storage:"granted"}),o("js",new Date),o("config","UA-119338300-1",{anonymize_ip:!0,domains:["app.signpath.io","secure.avangate.com"]}),o("config","AW-744401159",{anonymize_ip:!0,domains:["app.signpath.io","secure.avangate.com"]}),n=o,document.querySelectorAll(".btn.trial").forEach((e=>{e.addEventListener("click",(e=>{i(1)}))})),document.querySelectorAll(".btn.btn-primary.footer.buy").forEach((e=>{e.addEventListener("click",(e=>{i(2)}))})),document.querySelectorAll("#helpdesk_ticket_submit").forEach((e=>{e.addEventListener("click",(e=>{i(3)}))})),document.querySelectorAll(".btn.newsletter").forEach((e=>{e.addEventListener("click",(e=>{i(4)}))})),a(u)&&l(u)&&(t.get("vc")&&"0"===t.get("vc")?t.set("vc",1,{expires:7}):t.get("vc")&&"1"===t.get("vc")?(i(5),t.set("vc",2,{expires:7})):"2"!==t.get("vc")&&t.set("vc",0,{expires:7})),c(.5),c(.8),document.querySelectorAll('a[href*="mailto"]').forEach((e=>{e.addEventListener("click",(e=>{i(8)}))})),document.querySelectorAll("a[href='"+window.location.protocol+"//"+window.location.hostname+"/Web/Home/Login']").forEach((e=>{e.addEventListener("click",(e=>{i(9)}))}))}}(),a(u)&&l(u)&&(window.ldfdr=window.ldfdr||{},e=document,o="script",s=e.getElementsByTagName(o)[0],(d=e.createElement(o)).src="https://sc.lfeeder.com/lftracker_v1_3P1w24dnWAB8mY5n.js",setTimeout((function(){s.parentNode.insertBefore(d,s)}),1))}document.addEventListener("DOMContentLoaded",(function(){f()}))})();