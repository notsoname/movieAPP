(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{11:function(e,t,a){e.exports={wrapper:"AboutMovie_wrapper__SIquJ",poster:"AboutMovie_poster__3IQ3E",poster__img:"AboutMovie_poster__img__3bd_C",aboutMovie:"AboutMovie_aboutMovie__15GbF",info:"AboutMovie_info__2u6Wo",title:"AboutMovie_title__1wYSt",title__original:"AboutMovie_title__original__28TiU",rate:"AboutMovie_rate__1ncxj",date:"AboutMovie_date__2_W7S",descr:"AboutMovie_descr__Z8k81"}},14:function(e,t,a){e.exports={pagination:"Paginator_pagination__2aNuw",pagination__button:"Paginator_pagination__button__2H7em",current:"Paginator_current__1CPkO"}},16:function(e,t,a){e.exports={searchMovie:"Search_searchMovie__PM1k4",form:"Search_form__3z1z_",input:"Search_input__3Uhnu",movie:"Search_movie__37pyx",error:"Search_error__3oADs"}},17:function(e,t,a){e.exports={Search:"MovieCard_Search__2AD3f",poster:"MovieCard_poster__pE2Ng",posterWrap:"MovieCard_posterWrap__3lji-",searchMovie:"MovieCard_searchMovie__2409V",movie:"MovieCard_movie__27xGE",title:"MovieCard_title__1joDg",rate:"MovieCard_rate__2nd50",link:"MovieCard_link__3mJwf"}},23:function(e,t,a){e.exports={active:"AppHeader_active__1fHtB",header:"AppHeader_header__3A9wi",btn:"AppHeader_btn__3g46h"}},29:function(e,t,a){e.exports={app:"App_app__3MrmS",wrapper:"App_wrapper__kZjtV"}},73:function(e,t,a){e.exports={poster:"Top_poster__bTQQG",posterWrap:"Top_posterWrap__2ORIp"}},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),c=a.n(r),o=a(4),s=a(12),i=a(19),u=a(40),j=a(13),l=a.n(j),b=a(22),p=a(5),d=a(41).create({baseURL:"https://api.themoviedb.org/3/"}),_="1f1938aeaaee824cd6b3b9cd897c12b1",v=function(e){return d.get("movie/top_rated?api_key=".concat(_,"&language=ru&page=").concat(e))},A=function(e,t){return d.get("search/movie/?api_key=".concat(_,"&query=").concat(t,"&language=ru&page=").concat(e))},O=function(e){return d.get("movie/".concat(e,"?api_key=").concat(_,"&language=ru"))},h="SET_TOP_MOVIES",f="SET_MOVIES",x="TOGGLE_IS_FETCHING",g="SET_PAGE",m="SET_PAGES",y="IS_ERROR",N="GET_MOVIE_INFO",w={movies:[],topMovies:[],movieInfo:null,isFetching:!1,page:1,totalPage:null,error:null},M=function(e){return{type:x,payload:e}},E=function(e){return{type:g,payload:e}},I=function(e){return function(){var t=Object(b.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e).then((function(e){var t;console.log(e.data),a((t=e.data,{type:N,payload:t}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(b.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0)),t.next=3,v(e).then((function(e){var t,n;console.log(e.data),a((t=e.data.results,{type:h,payload:t})),a(M(!1)),a(E(e.data.page)),a((n=e.data.total_pages,{type:m,payload:n}))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=Object(i.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},{topMovies:t.payload});case f:return Object(p.a)(Object(p.a)({},e),{},{movies:t.payload});case g:return Object(p.a)(Object(p.a)({},e),{},{page:t.payload});case m:return Object(p.a)(Object(p.a)({},e),{},{totalPage:t.payload});case y:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});case x:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{movieInfo:t.payload});default:return e}}),Object(i.a)(u.a)),k=a(3),G=a.p+"static/media/spinner.7f937069.svg",S=a(1),F=function(){return Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsx)("img",{src:G,alt:"spinner"})})},W=a(11),T=a.n(W);function D(e){var t=Object(o.c)((function(e){return e.movieInfo})),a=Object(o.b)(),r=e.match.params.filmId;return Object(n.useEffect)((function(){return r&&a(I(+r)),function(){a(I(null))}}),[]),Object(S.jsx)("div",{children:t?Object(S.jsxs)("div",{className:T.a.wrapper,children:[Object(S.jsx)("div",{className:T.a.poster,children:Object(S.jsx)("img",{className:T.a.poster__img,src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"poster"})}),Object(S.jsxs)("div",{className:T.a.aboutMovie,children:[Object(S.jsxs)("div",{className:T.a.info,children:[Object(S.jsx)("div",{className:T.a.title,children:t.title}),Object(S.jsxs)("div",{className:T.a.title__original,children:["(",t.original_title,")"]}),Object(S.jsxs)("div",{className:T.a.rate,children:[t.vote_average,"/10"]})]}),Object(S.jsxs)("div",{className:T.a.date,children:[new Date("".concat(t.release_date)).getFullYear()," | ",Math.floor("".concat(t.runtime)/60)," \u0447 ",Math.floor("".concat(t.runtime))%60," \u043c\u0438\u043d. | ",t.genres.map((function(e){return(t="".concat(e.name," ")).charAt(0).toUpperCase()+t.slice(1);var t}))]}),Object(S.jsx)("div",{className:T.a.descr,children:t.overview})]})]}):Object(S.jsx)(F,{})})}var H=a(23),Z=a.n(H);function q(){return Object(S.jsxs)("div",{className:Z.a.header,children:[Object(S.jsx)(s.b,{to:"/search",children:Object(S.jsx)("button",{className:Z.a.btn,children:Object(S.jsx)("i",{className:"fa fa-search"})})}),Object(S.jsx)(s.b,{to:"/top",children:Object(S.jsxs)("button",{className:Z.a.btn,children:["TOP",Object(S.jsx)("i",{className:"fa fa-burn"})]})})]})}var K=a(43),R=a(16),V=a.n(R),Y=a(17),Q=a.n(Y);function U(e){var t=e.movie;return Object(S.jsx)(s.b,{className:Q.a.link,to:"/about/".concat(t.id),children:Object(S.jsxs)("div",{className:Q.a.posterWrap,children:[Object(S.jsx)("img",{className:Q.a.poster,src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX09PTh4eH19fXg4ODk5OTw8PDs7Ozq6uru7u7n5+dZKxXMAAAELUlEQVR4nO2dWXKtMAwFwQMX9r/hB9RNMOARhCTyTv/kIxVQl4kHYZmuAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAsZ03o9eA6OfwyH360bXWz30kyd2HHvbq8LaibQdJ2V+C7Yf6RSdQsEZOxApGqWCsyJNK5qPVsEZCsHOS1tksBNFI2rsZTY8gaG0QxaCRjRj0ITS4/wvW0judguaKbjaID1f+xLEZG8/psZtV6OeKF3GbH2DHW9fbDN0WgTn/j0wvBtVYEjSM9MAwxZgKAMMW4ChDLyGxoQ/eGA0NMYPk3O9c9PH80nyGZo1A/e9l3WEiZM8DxmeZm3GH/Ib1jFNXZna0AzntTFZcigPj2E8f2M/HIoshqkEFYsih+Fu7b9XZOhvWNow4bdw85YVMBjmkqg0Kb4sHG2YaUKaFF+W5w3zefDnO5vnR/wwPxXh8YwOw1Oaz4Pbmzct8ryhLxhe+EdsivRxw/RgePW2821a/uZ5w8ILt/auZp7Ct8Qqb9g6/17XKA3BKnhK227yswirjvZtPc22yqwN912jxW6bQGW87xrx93mCuoBfNWs7JkKqIuaYeWcf04brn3ey1ITMsXrK7F9oWD1Ft+pUxPyeFXB8L1I5aJYsRnKbTcM9E5utyleQzUTVz2eSu8mKYb8km5jbLleI+xUZ4cJ+wHzgr8jqFzY85iNnfPe0vJn5uVff8mamuKMzGzrn27Xu9+3a4Bu2JddsWc3Erv4NaeWe3HTw6t9yV246Tkev3bB6V3UyfOWGDdvGU/HrNmzbFx8X0GzYvPE/asA14l+hubIhqqC4DS+UbsQc9Bpeq005S2g1vFx8c7LQani5uuikIWhohnR5wI3yqaOHnOG8ZLQpxVv1YYd1p5jhuiZOKN4sgNsrShl+F/0xxfsVfjtFoRE/yGqcfkdQwhgqyrRhmLY5tiJJjWbwvkfEcJeXOjyoNEWoVrYND4m3UJGqyla2DU+ZxUCRqoxY1DCWOv3pbsjqpCUNo4LfVqQrBBc0jAquioaylF/OMCG4KlKW8j9vmBjxk4LUSLUhm6CUIZ+gkCGjoIwhp6CIIaughCGvoIAhsyC/Ibcg+4jPLsjdhvyCzIYCgryGEoK8hoV93u83lDn+i9VQ4iGFIQwrDN2fN/z7bQhDGMIQhjCEYdnwvxrxPyKnljIadn6QgNOwMxKwGgoDwxZgKAMMW4ChDE/N2kiCoyA4eYTgPO/t/PPluyc6COrICc5kDybZ1jodhPP+u4LFg1qkofjXyR9jIgzFaaKl84Rkoen9FDci1Tmb0h5JqM6gNFo7m2R5zgVFbd8kW5nHZzJOx0MowNqhHHiL4+h2H7ARZvl4HvUHAtfD1yfpycyX6TPSfwCxE8o+JXhADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs/ANyGFT0fw3sTAAAAABJRU5ErkJggg==",alt:"poster"}),Object(S.jsx)("div",{className:Q.a.title,children:t.title}),Object(S.jsxs)("div",{className:Q.a.rate,children:[t.vote_average,"/10"]})]})})}function J(){var e=Object(o.b)(),t=Object(n.useState)(""),a=Object(K.a)(t,2),r=a[0],c=a[1],s=function(t){var a,n;t.preventDefault(),e((a=1,n=r,function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(M(!0)),e.next=3,A(a,n).then((function(e){var a;t((a=e.data.results,{type:f,payload:a})),t(M(!1))})).catch((function(e){var a;t(M(!1)),e.response?t((a=e.response.data.errors,{type:y,payload:a})):e.request?console.log(e.request):console.log("Error",e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},i=Object(o.c)((function(e){return e.movies})),u=Object(o.c)((function(e){return e.isFetching})),j=Object(o.c)((function(e){return e.error}));return Object(S.jsxs)("div",{children:[Object(S.jsxs)("form",{onSubmit:function(e){return s(e)},className:V.a.form,children:[Object(S.jsx)("input",{className:V.a.input,onChange:function(e){return c(e.target.value)},value:r}),Object(S.jsx)("button",{className:"btn btn-secondary",children:Object(S.jsx)("i",{className:"fa fa-search"})})]}),Object(S.jsxs)("div",{className:V.a.searchMovie,children:[j?Object(S.jsx)("div",{className:V.a.error,children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0444\u0438\u043b\u044c\u043c \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"}):null,u?Object(S.jsx)(F,{}):Object(S.jsx)("div",{className:V.a.movie,children:i.map((function(e){return Object(S.jsx)(U,{movie:e},e.id)}))})]})]})}a(73);var z=a(14),L=a.n(z);function B(e){var t=Object(o.b)();return Object(S.jsx)("div",{className:L.a.pagination,children:Object(S.jsxs)("div",{className:L.a.buttons,children:[e.currentPage>1&&Object(S.jsx)("button",{className:L.a.pagination__button,onClick:function(){return t(e.fn(e.currentPage-1,e.payload))},children:e.currentPage-1}),Object(S.jsx)("button",{className:"".concat(L.a.pagination__button," ").concat(L.a.current),disabled:!0,children:e.currentPage}),e.currentPage<(e.pages?e.pages:0)&&Object(S.jsx)("button",{className:L.a.pagination__button,onClick:function(){return t(e.fn(e.currentPage+1,e.payload))},children:e.currentPage+1})]})})}function X(){var e=Object(o.b)();Object(n.useEffect)((function(){e(C(r))}),[]);var t=Object(o.c)((function(e){return e.topMovies})),a=Object(o.c)((function(e){return e.isFetching})),r=Object(o.c)((function(e){return e.page})),c=Object(o.c)((function(e){return e.totalPage}));Object(o.c)((function(e){return e.error}));return Object(S.jsx)("div",{children:a?Object(S.jsx)(F,{}):Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"d-flex justify-content-end",children:Object(S.jsx)(B,{pages:c,currentPage:r,fn:C})}),Object(S.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:t.map((function(e){return Object(S.jsx)(U,{movie:e},e.id)}))})]})})}var $=a(29),ee=a.n($);function te(){return Object(S.jsxs)("div",{className:ee.a.app,children:[Object(S.jsx)(q,{}),Object(S.jsx)("div",{className:ee.a.wrapper,children:Object(S.jsxs)(k.c,{children:[Object(S.jsx)(k.a,{path:"/search",render:function(){return Object(S.jsx)(J,{})}}),Object(S.jsx)(k.a,{exact:!0,path:"/top",render:function(){return Object(S.jsx)(X,{})}}),Object(S.jsx)(k.a,{exact:!0,path:"/about/:filmId",component:D})]})})]})}a(74);c.a.render(Object(S.jsx)(o.a,{store:P,children:Object(S.jsx)(s.a,{children:Object(S.jsx)(te,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.330148ee.chunk.js.map