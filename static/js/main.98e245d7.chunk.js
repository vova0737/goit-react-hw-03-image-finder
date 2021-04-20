(this["webpackJsonpgoit-react-hw"]=this["webpackJsonpgoit-react-hw"]||[]).push([[0],{16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1ATPC","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__KXT6N"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__28PjS",Modal:"Modal_Modal__373_r"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__32xl5"}},28:function(e,t,a){e.exports={Button:"Button_Button__2uR6G"}},30:function(e,t,a){e.exports={Spinner:"Spinner_Spinner__17kUg"}},36:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Mk0s",SearchForm:"Searchbar_SearchForm__2v0Do","SearchForm-button":"Searchbar_SearchForm-button__2E-NW","SearchForm-button-label":"Searchbar_SearchForm-button-label__o_qNC","SearchForm-input":"Searchbar_SearchForm-input__bN4LF"}},78:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(26),o=a.n(c),s=(a(36),a(14)),u=a(4),i=a.n(u),l=a(5),h=a(9),m=a(10),p=a(12),b=a(11),g=a(6),j=a.n(g),d=a(0),f=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onChangeQuery(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{className:j.a.Searchbar,children:Object(d.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:j.a["SearchForm-button"],children:Object(d.jsx)("span",{className:j.a["SearchForm-button-label"],children:"Search"})}),Object(d.jsx)("input",{className:j.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images...",onChange:this.handleChange,value:e})]})})})}}]),a}(r.Component),y=a(13),v=a.n(y);v.a.defaults.baseURL="https://pixabay.com/api/",v.a.defaults.params={key:"20353486-11ecb503bec0da706377a3524",image_type:"photo",orientation:"horizontal",per_page:12};var O=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("?q=".concat(t,"&page=").concat(a));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log("error :",{error:e.t0}),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),x=a(31),S=a(16),_=a.n(S),I=a(17),w=a.n(I);var C=function(e){var t=e.closeModal,a=e.children,n=function(e){"Escape"===e.key&&t()};return Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}})),Object(d.jsx)("div",{className:w.a.Overlay,onClick:function(e){"IMG"!==e.target.nodeName&&t()},children:Object(d.jsx)("div",{className:w.a.Modal,children:Object(d.jsx)(d.Fragment,{children:a})})})};var F=function(e){var t=e.url,a=e.alt,n=e.largeImageURL,c=Object(r.useState)(!1),o=Object(x.a)(c,2),s=o[0],u=o[1];return Object(d.jsxs)("li",{className:_.a.ImageGalleryItem,children:[Object(d.jsx)("img",{src:t,alt:a,className:_.a["ImageGalleryItem-image"],onClick:function(){return u(!0)}}),s&&Object(d.jsx)(C,{closeModal:function(){return u(!1)},children:Object(d.jsx)("img",{src:n,alt:a})})]})},k=a(27),N=a.n(k);var q=function(e){var t=e.gallery;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:N.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,n=e.tags;return Object(d.jsx)(F,{url:a,alt:n,largeImageURL:r},t)}))})})},L=a(28),G=a.n(L);var M=function(e){var t=e.pageChanger;return Object(d.jsx)("button",{type:"button",className:G.a.Button,onClick:t,children:"Load more"})},R=a(29),E=a.n(R),U=(a(77),a(30)),B=a.n(U);var D=function(){return Object(d.jsx)("div",{className:B.a.Spinner,children:Object(d.jsx)(E.a,{type:"ThreeDots",color:"#d6bb42",height:100,width:100,timeout:3e3})})},Q=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],query:"",page:1,isLoading:!1,error:!1},e.onChangeQuery=function(t){e.setState({query:t,page:1,gallery:[]})},e.fetchRequest=Object(l.a)(i.a.mark((function t(){var a,r,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state,r=a.query,n=a.page,t.next=4,O(r,n);case 4:return c=t.sent,t.abrupt("return",c.data.hits);case 8:t.prev=8,t.t0=t.catch(0),e.setState({error:!0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.pageChanger=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.state,n=r.query,c=r.page;n!==t.query&&(this.setState({isLoading:!0}),function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchRequest();case 2:t=e.sent,a.setState({gallery:Object(s.a)(t),isLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());c!==t.page&&(this.setState({isLoading:!0}),function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchRequest();case 2:t=e.sent,a.setState((function(e){return{gallery:[].concat(Object(s.a)(e.gallery),Object(s.a)(t)),isLoading:!1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,r=e.error;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{onChangeQuery:this.onChangeQuery}),r&&Object(d.jsx)("h1",{children:"Error, try again later"}),!!t.length&&!r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(q,{gallery:t}),!a&&Object(d.jsx)(M,{pageChanger:this.pageChanger})]}),a&&Object(d.jsx)(D,{})]})}}]),a}(r.Component);o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.98e245d7.chunk.js.map