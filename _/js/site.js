!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return r(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",r),v(e)}),n.addEventListener("click",v);var o=n.querySelector("[data-panel=menu]");if(o){var c=n.querySelector(".nav"),l=o.querySelector(".is-current-page"),d=l;l?(u(l),m(o,l.querySelector(".nav-link"))):o.scrollTop=0,f(o,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));var n=function(e,t){var n=e.nextElementSibling;if(!n)return;return(!t||n[n.matches?"matches":"msMatchesSelector"](t))&&n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",a.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),o.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),o.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e))}function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=o.querySelector('.nav-link[href="'+n+'"]')))){var i=document.getElementById(n.slice(1));if(i)for(var a=i,c=document.querySelector("article.doc");(a=a.parentNode)&&a!==c;){var r=a.id;if(!r&&(r=a.className.match(s))&&(r=(a.firstElementChild||{}).id),r&&(e=o.querySelector('.nav-link[href="#'+r+'"]')))break}}if(e)t=e.parentNode;else{if(!d)return;e=(t=d).querySelector(".nav-link")}t!==l&&(f(o,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),u(l=t),m(o,e))}function u(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function r(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",r),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e)if(document.querySelector("body.-toc"))e.parentNode.removeChild(e);else{var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var d,c=document.querySelector("article.doc"),o=[],n=0;n<=t;n++)o.push(n?".sect"+n+">h"+(n+1)+"[id]":"h1[id].sect0");if(i=o.join(","),r=c,(d=[].slice.call((r||document).querySelectorAll(i))).length){var i,r,s,l={},u=d.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,l[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1))-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),a=e.querySelector(".toc-menu");a||((a=document.createElement("div")).className="toc-menu");var f=document.createElement("h3");f.textContent=e.dataset.title||"Contents",a.appendChild(f),a.appendChild(u);var m=!document.getElementById("toc")&&c.querySelector("h1.page ~ :not(.is-before-toc)");if(m){var v=document.createElement("aside");v.className="toc embedded",v.appendChild(a.cloneNode(!0)),m.parentNode.insertBefore(v,m)}window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}else e.parentNode.removeChild(e)}}function p(){var t,e=window.pageYOffset,o=1.15*h(document.documentElement,"fontSize"),n=c.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){s=Array.isArray(s)?s:Array(s||0);var i=[],r=d.length-1;return d.forEach(function(e,t){var o="#"+e.id;t===r||e.getBoundingClientRect().top+h(e,"paddingTop")>n?(i.push(o),s.indexOf(o)<0&&l[o].classList.add("is-active")):~s.indexOf(o)&&l[s.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,void(s=1<i.length?i:i[0])}if(Array.isArray(s)&&(s.forEach(function(e){l[e].classList.remove("is-active")}),s=void 0),d.some(function(e){if(e.getBoundingClientRect().top+h(e,"paddingTop")-o>n)return!0;t="#"+e.id}),t){if(t===s)return;s&&l[s].classList.remove("is-active");var a=l[t];a.classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,a.offsetTop+a.offsetHeight-u.offsetHeight)),s=t}else s&&(l[s].classList.remove("is-active"),s=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});

/**
 * touchHover.js
 *
 * Create tooltips on mouseover or on click (for supporting touch interfaces).
 * 
 * @author C. Scott Asbach
 */

$(document).ready(function() {	
	
	/**
	 * store the value of and then remove the title attributes from the
	 * abbreviations (thus removing the default tooltip functionality of
     * the abbreviations)
	 */
	$('abbr').each(function(){		
		
		$(this).data('title',$(this).attr('title'));
		$(this).removeAttr('title');
	
	});

    /**
	 * when abbreviations are mouseover-ed show a tooltip with the data from the title attribute
	 */	
	$('abbr').mouseover(function() {		
		
		// first remove all existing abbreviation tooltips
		$('abbr').next('.tooltip').remove();
		
		// create the tooltip
		$(this).after('<span class="tooltip">' + $(this).data('title') + '</span>');
		
		// position the tooltip 4 pixels above and 4 pixels to the left of the abbreviation
		var left = $(this).position().left + $(this).width() + 4;
		var top = $(this).position().top - 4;
		$(this).next().css('left',left);
		$(this).next().css('top',top);				
		
	});
	
    /**
	 * when abbreviations are clicked trigger their mouseover event then fade the tooltip
	 * (this is friendly to touch interfaces)
	 */
	$('abbr').click(function(){
		
		$(this).mouseover();
		
		// after a slight 2 second fade, fade out the tooltip for 1 second
		$(this).next().animate({opacity: 0.9},{duration: 2000, complete: function(){
			$(this).fadeOut(1000);
		}});
		
	});
	
	/**
	 * Remove the tooltip on abbreviation mouseout
	 */
	$('abbr').mouseout(function(){
			
		$(this).next('.tooltip').remove();				

	});	
	
});