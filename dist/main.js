(()=>{"use strict";function t(t,e){var n=document.createElement("button");n.setAttribute("id",t);var a=document.createElement("span");return a.textContent=e,n.appendChild(a),n.classList.add("tabs"),n}const e=function(){var t=document.getElementById("tab-content");t.textContent="",function(t,e){var n=document.createElement("img"),a=document.getElementById("tab-content");n.setAttribute("id","tableImg"),n.classList.add("homeFood"),n.setAttribute("src","https://pbs.twimg.com/media/DAuME7uVwAAYBCK.jpg"),n.setAttribute("alt","Dining tables with food"),a.appendChild(n)}();const e=function(){var t=document.createElement("section");t.classList.add("section"),t.setAttribute("id","about-section");var e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);var n=document.createElement("p");return n.classList.add("section-description"),n.textContent="We offer the best food from all over Middle-Earth, allowing you to escape into the greatest fictional world. Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit.",t.appendChild(n),t}();var n;(n=document.querySelector(".tabs.active"))&&n.classList.remove("active"),document.getElementById("home").classList.add("active"),t.appendChild(e)};function n(t,e,n,a){var d=document.createElement("div");d.classList.add("food");var i=document.createElement("img");i.setAttribute("src",t),i.setAttribute("alt",e);var c=document.createElement("div");c.classList.add("description");const o=document.createElement("h2");o.textContent=n;const s=document.createElement("p");return s.textContent=a,c.appendChild(o),c.appendChild(s),d.appendChild(i),d.appendChild(c),d}var a,d,i;(function(){const e=document.getElementById("content");var n=function(t,e){var n=document.createElement("header");n.setAttribute("id","header");var a=document.createElement("h1");return a.textContent="Middle-Earth Dining",n.appendChild(a),n}();e.appendChild(n);var a=function(e){var n=document.createElement("nav");n.setAttribute("id","nav");var a=t("home","home"),d=t("menu","menu"),i=t("contact","contact");return n.appendChild(a),n.appendChild(d),n.appendChild(i),n}();e.appendChild(a);var d=function(t){var e=document.createElement("main");return e.classList.add("tabContent"),e.setAttribute("id","tab-content"),e}();e.appendChild(d)})(),e(),a=document.getElementById("home"),d=document.getElementById("menu"),i=document.getElementById("contact"),a.addEventListener("click",e),d.addEventListener("click",(function(){var t,e=document.getElementById("tab-content");e.textContent="",[n("https://i2.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/04/the-lord-of-the-rings-lembas-recipe.jpg?resize=701%2C1024","Lembas Bread","Lembas Bread","Lembas, Elvish waybread. One small bite is enough to fill the stomach of a grown man")].forEach((t=>{e.appendChild(t)})),(t=document.querySelector(".tabs.active"))&&t.classList.remove("active"),document.getElementById("menu").classList.add("active")})),i.addEventListener("click",(function(){var t;document.getElementById("tab-content").textContent="",(t=document.querySelector(".tabs.active"))&&t.classList.remove("active"),document.getElementById("contact").classList.add("active")}))})();