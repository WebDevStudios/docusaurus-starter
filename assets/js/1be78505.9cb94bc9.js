(self.webpackChunkdocusaurus_starter=self.webpackChunkdocusaurus_starter||[]).push([[514,608],{8704:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>$});var n=a(7294),r=a(3905),o=a(6291),l=a(261),i=a(6010),c=a(1773),s=a(3783),d=a(7898),m=a(5537),u=a(2122);const p=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var b=a(4973),h=a(9756),f=a(6742),E=a(3919),v=a(8617);const g="menuLinkText_1J2g";var _=["items"],C=["item"],k=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],N=function e(t,a){return"link"===t.type?(0,c.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},S=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,_);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(T,(0,u.Z)({key:t,item:e},a))})))}));function T(e){var t=e.item,a=(0,h.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(I,(0,u.Z)({item:t},a));case"link":default:return n.createElement(w,(0,u.Z)({item:t},a))}}function I(e){var t,a=e.item,r=e.onItemClick,o=e.activePath,l=(0,h.Z)(e,k),s=a.items,d=a.label,m=a.collapsible,p=N(a,o),b=(0,c.uR)({initialState:function(){return!!m&&(!p&&a.collapsed)}}),f=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&r(!1)}),[t,o,a])}({isActive:p,collapsed:f,setCollapsed:E}),n.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":f})},n.createElement("a",(0,u.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[g]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.createElement(S,{items:s,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function w(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,Z),l=t.href,c=t.label,s=N(t,r);return n.createElement("li",{className:"menu__list-item",key:c},n.createElement(f.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":s}),"aria-current":s?"page":void 0,to:l},(0,E.Z)(l)&&{onClick:a},o),(0,E.Z)(l)?c:n.createElement("span",null,c,n.createElement(v.Z,null))))}const M="sidebar_15mo",y="sidebarWithHideableNavbar_267A",x="sidebarHidden_2kNb",A="sidebarLogo_3h0W",P="menu_Bmed",B="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function L(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",F),onClick:t},n.createElement(p,{className:H}))}function D(e){var t,a,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,u=function(){var e=(0,c.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,d.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),p=(0,c.LU)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,c.nT)().isClosed;return n.createElement("div",{className:(0,i.Z)(M,(t={},t[y]=b,t[x]=s,t))},b&&n.createElement(m.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",P,(a={},a[B]=!f&&u,a))},n.createElement("ul",{className:"menu__list"},n.createElement(S,{items:o,activePath:r}))),h&&n.createElement(L,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:"menu__list"},n.createElement(S,{items:a,activePath:r,onItemClick:function(){return t()}}))};function W(e){return n.createElement(c.Cv,{component:R,props:e})}var z=n.memo(D),Y=n.memo(W);function J(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),r&&n.createElement(Y,e))}var K=a(637),U=a(4608),q=a(5977);const G="backToTopButton_35hR",O="backToTopButtonShow_18ls";function Q(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}const X=function(){var e,t=(0,q.TH)(),a=Q(),r=a.smoothScrollTop,o=a.cancelScrollToTop,l=(0,n.useState)(!1),c=l[0],s=l[1];return(0,d.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||o(),a<300)s(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),n.createElement("button",{className:(0,i.Z)("clean-btn",G,(e={},e[O]=c,e)),type:"button",onClick:function(){return r()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function V(e){var t,a,o,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,u=d.pluginId,h=d.version,f=s.sidebar,E=f?d.docsSidebars[f]:void 0,v=(0,n.useState)(!1),g=v[0],_=v[1],C=(0,n.useState)(!1),k=C[0],Z=C[1],N=(0,n.useCallback)((function(){k&&Z(!1),_(!g)}),[k]);return n.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,c.os)(u,h)}},n.createElement("div",{className:j.docPage},n.createElement(X,null),E&&n.createElement("aside",{className:(0,i.Z)(j.docSidebarContainer,(t={},t[j.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(j.docSidebarContainer)&&g&&Z(!0)}},n.createElement(J,{key:f,sidebar:E,path:s.path,onCollapse:N,isHidden:k}),k&&n.createElement("div",{className:j.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(p,{className:j.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(j.docMainContainer,(a={},a[j.docMainContainerEnhanced]=g||!E,a))},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",j.docItemWrapper,(o={},o[j.docItemWrapperEnhanced]=g,o))},n.createElement(r.Zo,{components:K.Z},m)))))}const $=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,q.LX)(r.pathname,e)}));return l?n.createElement(V,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a})):n.createElement(U.default,e)}},4608:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(7294),r=a(261),o=a(4973);const l=function(){return n.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);