(function(e){function t(t){for(var c,s,o=t[0],i=t[1],u=t[2],b=0,f=[];b<o.length;b++)s=o[b],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},r={app:0},a=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c6f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"container"},a={class:"row mt-3"};function s(e,t,n,s,o,i){var u=Object(c["i"])("the-header"),l=Object(c["i"])("search-country"),b=Object(c["i"])("country-list");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["f"])(u),Object(c["f"])("div",r,[Object(c["f"])("div",a,[Object(c["f"])(l),Object(c["f"])(b)])])],64)}var o={class:"col"},i=Object(c["f"])("h3",null,"Total Cases:",-1),u={key:0,class:"list-group"},l={class:"row"},b={class:"col"},f={class:"col"};function d(e,t,n,r,a,s){return Object(c["g"])(),Object(c["c"])("div",o,[i,!1===a.isLoading&&null!==a.isLoading?(Object(c["g"])(),Object(c["c"])("ul",u,[(Object(c["g"])(),Object(c["c"])(c["a"],null,Object(c["h"])(10,(function(e){return Object(c["f"])("li",{class:"list-group-item",key:a.countries[e-1].countryInfo._id},[Object(c["f"])("div",l,[Object(c["f"])("span",b,Object(c["j"])(a.countries[e-1].country),1),Object(c["f"])("span",f,Object(c["j"])(a.countries[e-1].cases),1)])])})),64))])):Object(c["d"])("",!0)])}n("96cf");var j=n("1da1"),p=n("bc3a"),O=n.n(p),g={name:"CountryList",components:{},data:function(){return{countries:null,isLoading:null}},mounted:function(){this.isLoading=!0,this.fetchData()},methods:{fetchData:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://disease.sh/v3/covid-19/countries?sort=cases");case 2:n=t.sent,200===n.status&&(e.countries=n.data,console.log(n.data),e.isLoading=!1);case 4:case"end":return t.stop()}}),t)})))()}}};g.render=d;var y=g,h={class:"navbar navbar-dark bg-primary"},v={class:"container-fluid"},m=Object(c["f"])("a",{class:"navbar-brand p-2"},"Covid Tracker",-1),w={class:"text-white p-2"};function x(e,t,n,r,a,s){return Object(c["g"])(),Object(c["c"])("nav",h,[Object(c["f"])("div",v,[m,Object(c["f"])("span",w,Object(c["j"])(a.date),1)])])}n("fb6a"),n("d3b7"),n("25f0");var C={name:"TheHeader",data:function(){return{date:(new Date).toString().slice(0,15)}}};C.render=x;var k=C,M={class:"col"},P={class:"d-grid gap-2"},S={key:0,class:"alert alert-danger mt-3",role:"alert"},I={key:1,class:"card mt-3"},T={class:"card-body"},D={class:"card-title"},L={class:"list-group"},_={class:"list-group-item d-flex justify-content-between align-items-center"},R=Object(c["e"])(" Total Cases "),H={class:"badge bg-danger"},J={class:"list-group-item d-flex justify-content-between align-items-center"},A=Object(c["e"])(" Deaths "),E={class:"badge bg-danger"},q={class:"list-group-item d-flex justify-content-between align-items-center"},z=Object(c["e"])(" Drecovered "),B={class:"badge bg-danger"},F={class:"list-group-item d-flex justify-content-between align-items-center"},G=Object(c["e"])(" Today Cases "),K={class:"badge bg-danger"},N={class:"list-group-item d-flex justify-content-between align-items-center"},Q=Object(c["e"])(" Today Deaths "),U={class:"badge bg-danger"},V={class:"list-group-item d-flex justify-content-between align-items-center"},W=Object(c["e"])(" Today Recovered "),X={class:"badge bg-danger"},Y={class:"list-group-item d-flex justify-content-between align-items-center"},Z=Object(c["e"])(" Cases Per Million "),$={class:"badge bg-danger"},ee={class:"list-group-item d-flex justify-content-between align-items-center"},te=Object(c["e"])(" Deaths Per Million "),ne={class:"badge bg-danger"};function ce(e,t,n,r,a,s){return Object(c["g"])(),Object(c["c"])("div",M,[Object(c["f"])("input",{class:"form-control me-2",type:"search",placeholder:"Enter a Country","aria-label":"Search",onInput:t[1]||(t[1]=function(){return s.setInput&&s.setInput.apply(s,arguments)})},null,32),Object(c["f"])("div",P,[Object(c["f"])("button",{class:"btn btn-primary",type:"button ",onClick:t[2]||(t[2]=function(){return s.fetchCountry&&s.fetchCountry.apply(s,arguments)})}," Search ")]),!0===a.errorMsg?(Object(c["g"])(),Object(c["c"])("div",S," Please enter a valid country name! ")):Object(c["d"])("",!0),null!==a.country?(Object(c["g"])(),Object(c["c"])("div",I,[Object(c["f"])("div",T,[Object(c["f"])("h5",D,Object(c["j"])(a.country.country),1),Object(c["f"])("ul",L,[Object(c["f"])("li",_,[R,Object(c["f"])("span",H,Object(c["j"])(a.country.cases),1)]),Object(c["f"])("li",J,[A,Object(c["f"])("span",E,Object(c["j"])(a.country.deaths),1)]),Object(c["f"])("li",q,[z,Object(c["f"])("span",B,Object(c["j"])(a.country.recovered),1)]),Object(c["f"])("li",F,[G,Object(c["f"])("span",K,Object(c["j"])(a.country.todayCases),1)]),Object(c["f"])("li",N,[Q,Object(c["f"])("span",U,Object(c["j"])(a.country.todayDeaths),1)]),Object(c["f"])("li",V,[W,Object(c["f"])("span",X,Object(c["j"])(a.country.todayRecovered),1)]),Object(c["f"])("li",Y,[Z,Object(c["f"])("span",$,Object(c["j"])(a.country.casesPerOneMillion),1)]),Object(c["f"])("li",ee,[te,Object(c["f"])("span",ne,Object(c["j"])(a.country.deathsPerOneMillion),1)])])])])):Object(c["d"])("",!0)])}var re={name:"SearchCountry",data:function(){return{isShow:!1,country:null,searchInput:"china",errorMsg:null}},mounted:function(){this.fetchCountry()},methods:{setInput:function(e){this.searchInput=e.target.value},fetchCountry:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.searchInput){t.next=4;break}e.errorMsg=!0,t.next=17;break;case 4:return t.prev=4,t.next=7,O.a.get("https://disease.sh/v3/covid-19/countries/".concat(e.searchInput,"?strict=true"));case 7:n=t.sent,e.country=n.data,e.searchInput="",e.errorMsg=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](4),console.log(t.t0),e.errorMsg=!0;case 17:case"end":return t.stop()}}),t,null,[[4,13]])})))()}}};re.render=ce;var ae=re,se={name:"App",components:{TheHeader:k,CountryList:y,SearchCountry:ae}};n("5f63");se.render=s;var oe=se;Object(c["b"])(oe).mount("#app")},"5f63":function(e,t,n){"use strict";n("3c6f")}});
//# sourceMappingURL=app.33d8438d.js.map