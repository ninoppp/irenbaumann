!function(){"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}();var e=wp.element,n=t.p+"src/icons/link.svg";function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,l=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(o=n.next()).done)&&(l.push(o.value),!e||l.length!==e);c=!0);}catch(t){a=!0,r=t}finally{try{c||null==n.return||n.return()}finally{if(a)throw r}}return l}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var i=jQuery,u=function(t){var o=t.attributes,l=t.clientId,a=t.isBackend,u=void 0!==a&&a,f=t.custom,s=void 0===f?{}:f,p=o.categories,m=o.portfolios,d=o.columns,b=o.columnGap,g=o.rowGap,y=o.background,v=o.padding,w=o.border,h=o.filterBtnTypo,E=o.filterBtnColors,x=o.filterBtnHoverColors,P=o.itemHeight,k=o.itemHoverEffect,O=o.isLink,j=o.titleStyle,S=o.titleBG,C=o.titleTypo,I=o.titleColor,N=c((0,e.useState)(""),2),A=N[0],F=N[1],B=(0,e.useRef)(null);return(0,e.useEffect)((function(){F(B.current.clientWidth)}),[B.current,d,b,g]),(0,e.useEffect)((function(){var t={filter:"*",itemSelector:".galleryItem",masonry:{fitWidth:!0,gutter:b},stagger:30,transitionDuration:"0.5s"},e=i("#gallery-".concat(l)).isotope(t);e.isotope("destroy"),e.isotope(t),i("#filter-".concat(l)).on("click","button",(function(){i("#filter-".concat(l," .current")).removeClass("current"),i(this).addClass("current");var n=i(this).attr("data-filter");e.isotope(r(r({},t),{},{filter:n}))}))}),[null==m?void 0:m.length,d,b,g,A,P]),(0,e.useEffect)((function(){!u&&i(".galleryItem").fancybox({baseClass:"pfbFancyBox pfbFancyBox-".concat(l),buttons:["slideShow","close"],loop:!1,protect:!0})}),[]),wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t".concat(null!=h&&h.googleFontLink?"@import url(".concat(null==h?void 0:h.googleFontLink,");"):"","\n\t\t\t").concat(null!=C&&C.googleFontLink?"@import url(".concat(null==C?void 0:C.googleFontLink,");"):"","\n\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio{\n\t\t\t\t").concat((null==y?void 0:y.styles)||"background: #fff;","\n\t\t\t\tpadding: ").concat((null==v?void 0:v.styles)||"10px 10px",";\n\t\t\t\t").concat((null==w?void 0:w.styles)||"border-radius: 5px;","\n\t\t\t\tbox-shadow: 0px 25px 30px -20px rgba(0, 0, 0, 0.2);\n\t\t\t}\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio .filter button{\n\t\t\t\t").concat((null==h?void 0:h.styles)||"font-size: 14px;","\n\t\t\t\t").concat((null==E?void 0:E.styles)||"color: #fff; background: #4527a4;","\n\t\t\t}\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio .filter button:hover, #pfbPortfolio-").concat(l," .pfbPortfolio .filter button.current{\n\t\t\t\t").concat((null==x?void 0:x.styles)||"color: #fff; background: #8344c5;","\n\t\t\t}\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio .pfbColumnSizer {\n\t\t\t\tgrid-column-gap: ").concat(b,"px;\n\t\t\t}\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio .gallery .galleryItem{\n\t\t\t\twidth: ").concat(A,"px;\n\t\t\t\theight: ").concat(P,";\n\t\t\t\tmargin-bottom: ").concat(g,"px;\n\t\t\t}\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio .galleryItem figcaption{\n\t\t\t\t").concat((null==S?void 0:S.styles)||"background-color: #0006;","\n\t\t\t\t").concat(u&&s.isTitleEdit?"opacity: 1;":"","\n\t\t\t}\n\t\t\t#pfbPortfolio-").concat(l," .pfbPortfolio .galleryItem figcaption p{\n\t\t\t\t").concat((null==C?void 0:C.styles)||"font-size: 22px;","\n\t\t\t\tcolor: ").concat(I,";\n\t\t\t}\n\t\t\t.pfbFancyBox-").concat(l," .fancybox-caption__body a{\n\t\t\t\tdisplay: ").concat(O?"inline-flex":"none",";\n\t\t\t}\n\t\t\t").replace(/\s+/g," ")}}),wp.element.createElement("div",{className:"pfbPortfolio"},wp.element.createElement("div",{id:"filter-".concat(l),className:"filter"},wp.element.createElement("button",{"data-filter":"*",className:"current"},"All Categories"),null==p?void 0:p.map((function(t){return wp.element.createElement("button",{key:lodash.camelCase(t),"data-filter":".".concat(lodash.camelCase(t))},t)}))),wp.element.createElement("div",{className:"pfbColumnSizer columns-".concat(d.desktop," columns-tablet-").concat(d.tablet," columns-mobile-").concat(d.mobile)},wp.element.createElement("div",{className:"pfbColumn",ref:B})),wp.element.createElement("div",{id:"gallery-".concat(l),className:"gallery"},null==m?void 0:m.map((function(t,e){var o=t.image,r=t.title,c=t.link,a=t.cats;return u?wp.element.createElement("div",{onClick:function(){return u&&s.setActiveIndex(e)},className:"galleryItem ".concat(null==a?void 0:a.map((function(t){return lodash.camelCase(t)})).join(" ")," ").concat(e===s.activeIndex?"pfbNowEditing":"")},wp.element.createElement("figure",{className:"galleryFigure ".concat(k)},wp.element.createElement("img",{src:null==o?void 0:o.url,alt:(null==o?void 0:o.alt)||(null==o?void 0:o.title)}),wp.element.createElement("figcaption",{className:j},wp.element.createElement("p",null,r)))):wp.element.createElement("a",{key:e,className:"galleryItem ".concat(null==a?void 0:a.map((function(t){return lodash.camelCase(t)})).join(" ")),"data-fancybox":"fancybox-".concat(l),href:u?"":null==o?void 0:o.url,"data-caption":"".concat(r," <a href='").concat(c,"'>\n\t\t\t\t\t\t\t<svg width='20px' height='20px'>\n\t\t\t\t\t\t\t\t<use xlink:href='").concat(n,"#linkIcon'></use>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>")},wp.element.createElement("figure",{className:"galleryFigure ".concat(k)},wp.element.createElement("img",{src:null==o?void 0:o.url,alt:(null==o?void 0:o.alt)||(null==o?void 0:o.title)}),wp.element.createElement("figcaption",{className:j},wp.element.createElement("p",null,r))))})))))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-pfb-portfolio").forEach((function(t){var n=JSON.parse(t.dataset.attributes);(0,e.render)(wp.element.createElement(u,{attributes:n,clientId:n.cId}),t),null==t||t.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=script.js.map