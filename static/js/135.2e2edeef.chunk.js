"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{598:function(e,n,r){r.d(n,{k:function(){return i}});var t=r(689),a=r(87),c="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",u="TrendMoviesList_movieList__jBwpv",s="TrendMoviesList_movieItem__xDQkZ",o=r(184),i=function(e){var n=e.movies,r=(0,t.TH)();return(0,o.jsx)("ul",{className:u,children:n.map((function(e){return(0,o.jsx)("li",{className:s,children:(0,o.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(e.id),children:e.title||e.name})},function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",r=crypto.getRandomValues(new Uint8Array(e));e--;)n+=c[63&r[e]];return n}())}))})}},167:function(e,n,r){r.d(n,{n:function(){return t}});var t={idle:"idle",pending:"pending",success:"success",error:"error"}},135:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),o=r(449),i=r(167),p=r(784),f=r(598),l="Searchbar_searchbar__0FWoU",h="Searchbar_searchForm__Bt5yh",v="Searchbar_searchFormButton__Y7AQk",d="Searchbar_searchFormButtonLabel__EPPP6",m="Searchbar_searchFormInput__k+juR",_=r(87),x=r(184),g=function(e){var n=e.onSubmit,r=(0,_.lr)(),t=(0,a.Z)(r,2),c=t[0],u=t[1],s=c.get("query");return(0,x.jsx)("div",{children:(0,x.jsx)("header",{className:l,children:(0,x.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.searchInput.value;n(s),u({query:r})},children:[(0,x.jsx)("button",{type:"submit",className:v,children:(0,x.jsx)("span",{className:d,children:"Search"})}),(0,x.jsx)("input",{className:m,type:"text",name:"searchInput",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})})},b=function(){var e=(0,s.useState)(i.n.idle),n=(0,a.Z)(e,2),r=n[0],c=n[1],l=(0,s.useState)(null),h=(0,a.Z)(l,2),v=h[0],d=h[1],m=(0,s.useState)(null),_=(0,a.Z)(m,2),b=_[0],k=_[1],y=(0,s.useState)(""),w=(0,a.Z)(y,2),S=w[0],Z=w[1];return(0,s.useEffect)((function(){if(null!==S){var e=function(){var e=(0,t.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(i.n.pending),e.next=4,(0,o.A0)(S);case 4:n=e.sent,c(i.n.success),k(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),d(e.t0.message),c(i.n.error);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[S]),(0,x.jsxs)("div",{children:[(0,x.jsx)(g,{onSubmit:function(e){Z(e)}}),r===i.n.pending&&(0,x.jsx)(p.a,{}),r===i.n.error&&(0,x.jsxs)("p",{children:["ERROR",v]}),null!==b&&b.length>0&&(0,x.jsx)(f.k,{movies:b})]})}},449:function(e,n,r){r.d(n,{$m:function(){return h},A0:function(){return p},aU:function(){return f},kb:function(){return l},zg:function(){return i}});var t=r(861),a=r(757),c=r.n(a),u=r(294),s="https://api.themoviedb.org/3/",o="32341dbd589795538eacfb126ee51fa5",i=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"trending/all/day?language=en-US&api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"search/movie?query=").concat(n,"&language=en-US&api_key=").concat(o));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(n,"?language=en-US&api_key=").concat(o));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/credits?language=en-US&api_key=").concat(o));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/reviews?language=en-US&api_key=").concat(o));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.2e2edeef.chunk.js.map