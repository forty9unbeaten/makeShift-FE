(this.webpackJsonp3d=this.webpackJsonp3d||[]).push([[0],{256:function(e,t,a){e.exports=a(440)},265:function(e,t,a){},270:function(e,t,a){},371:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){},439:function(e,t,a){},440:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),o=a.n(c),l=a(30),s=a(220),i=a(26),u=a(245),m=a(14),p=a(20),d=a(15),g=a(16),h=a(17),f=(a(265),a(221)),v=a(222),E=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer__container"},r.a.createElement("div",{className:"Footer__logo"},r.a.createElement("div",{className:"Footer__logoIcon"}),r.a.createElement("div",{className:"Footer__logoText"},"MAKESHIFT")),r.a.createElement("div",{className:"Footer__copyright"},r.a.createElement(f.a,{icon:v.a,className:"Footer__copyIcon"}),r.a.createElement("p",{className:"Footer__copyText"},"2020")))}}]),t}(n.Component),_=a(452),b=a(448),C=a(155),y=a.n(C),O=a(450),N=a(56),S=a(22),j=function(e){var t=e.toUpperCase();return{START:t+".START",SUCCESS:t+".SUCCESS",FAIL:t+".FAIL"}},F=j("GET_PRODUCT"),R=j("GET_ALL_PRODUCTS"),k=j("POST_PRODUCT"),P=(j("DELETE_PRODUCT"),j("EDIT_PRODUCT"),{"Content-Type":"application/json",Accept:"application/json"}),T=function(e){return e.ok?e.json():e.json().then((function(e){throw e}))},A="https://printcatalog-capstone.herokuapp.com/products",L=function(e){return function(t){return t({type:F.START}),fetch(A+"/".concat(e)).then((function(e){return T(e)})).then((function(e){return t({type:F.SUCCESS,payload:e.product})})).catch((function(e){return t({type:F.FAIL,payload:e})}))}},I=function(){return function(e){return e({type:R.START}),fetch(A,{headers:P}).then((function(e){return T(e)})).then((function(t){e({type:R.SUCCESS,payload:t.products})})).catch((function(t){e({type:R.FAIL,payload:t})}))}},x=(a(270),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",matches:[]},a.handleChange=function(e){var t;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.awrap(a.setState({input:e.target.value}));case 2:t=[],a.props.products.forEach((function(e){e.productName.toLowerCase().includes(a.state.input.toLowerCase())&&t.push({title:e.productName,description:e.productDescription,image:e.productImgs[0],price:e.id})})),t.length>0?a.setState({matches:t}):a.setState({matches:[]});case 5:case"end":return n.stop()}}))},a.handleClick=function(e){var t=e.currentTarget.querySelectorAll(".price")[0].innerHTML;a.props.getProduct(t),a.props.history.push("/details/".concat(t))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{fluid:!0,placeholder:"Search Catalog",onSearchChange:this.handleChange,value:this.state.input,results:this.state.matches,onResultSelect:this.handleClick,noResultsMessage:"No Matches",noResultsDescription:"There are no products in our catalog that match the search term"})}}]),t}(n.Component));var D=Object(N.f)(Object(l.b)((function(e){return{products:e.allProducts.products}}),(function(e){return{getProduct:function(t){e(L(t))}}}))(x)),w=(a(371),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).handleClick=function(e){var t=e.target.innerHTML;a.setState({activeItem:t})},a.handleChange=function(e){"username"===e.target.name?a.setState({username:e.target.value}):a.setState({password:e.target.value})},a.openLogin=function(){a.setState({loginOpen:!0})},a.closeLogin=function(){a.setState({loginOpen:!1})},a.state={activeItem:"HOME",loginOpen:!1,username:"",password:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{className:"navbar__mainMenu"},r.a.createElement("div",{className:"navbar__logo"},r.a.createElement(i.c,{exact:!0,to:"/",className:"navbar__logoLink"},r.a.createElement("div",{className:"navbar__logoIcon"}),r.a.createElement("div",{className:"navbar__logoText"},"MAKESHIFT"))),r.a.createElement("div",{className:"navbar__searchBar"},r.a.createElement(D,null)),r.a.createElement("div",{className:"navbar__linksWrapper"},r.a.createElement(i.c,{exact:!0,to:"/",className:"navbar__link",activeClassName:"active"},"Home"),r.a.createElement(i.c,{exact:!0,to:"/catalog",className:"navbar__link",activeClassName:"active"},"Catalog"),r.a.createElement(b.a,{trigger:r.a.createElement("div",{onClick:this.openLogin,className:"navbar__link"},"Login/Register"),open:this.state.loginOpen,onClose:this.closeLogin,className:"Login__modal"},r.a.createElement(b.a.Header,{className:"Login__header"},"Log In"),r.a.createElement(b.a.Content,null,r.a.createElement("form",{className:"Login__form"},r.a.createElement("div",{className:"Login__input"},r.a.createElement("label",{htmlFor:"username"},"Username/Email"),r.a.createElement("input",{name:"username",type:"text",autoComplete:"username",onChange:this.handleChange,value:this.state.username})),r.a.createElement("div",{className:"Login__input"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{className:"Login__button",onClick:this.closeLogin},"Submit")),r.a.createElement("div",{className:"Login__register"},"Don't have an account?",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/register",onClick:this.closeLogin},"Register"))))))}}]),t}(r.a.Component)),M=(a(425),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero__container"},r.a.createElement("div",{className:"hero__description"},r.a.createElement("h2",{className:"hero__descriptionHead"},"3D Printing for Home DIY"),r.a.createElement("p",{className:"hero__descriptionSubHead"},"With the help of our growing community of makers and designers, search our free catalog of 3D print files to meet any of your household needs.")))}}]),t}(r.a.Component)),H=a(456),U=(a(426),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).getAverageRating=function(){var e=a.props.product.ratings,t=e.reduce((function(e,t){return e+t}),0);return Math.floor(t/e.length)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.productName,a=e.productImgs,n=e.id,c=e.productCategory,o=e.productDescription,l=e.ratingsCount;return r.a.createElement("div",{className:"PC__card"},r.a.createElement(i.b,{className:"PC__linkWrapper",to:"details/".concat(n)},r.a.createElement("div",{className:"PC__image",style:{backgroundImage:"url(".concat(a[0],")")}})),r.a.createElement("div",{className:"PC__detailContainer"},r.a.createElement(i.b,{to:"details/".concat(n),className:"PC__name"},t),r.a.createElement("div",{className:"PC__category"},c),r.a.createElement("div",{className:"PC__description"},o)),r.a.createElement("div",{className:"PC__ratingsContainer"},r.a.createElement(H.a,{className:"PC__ratings",disabled:!0,rating:this.getAverageRating(),maxRating:5}),r.a.createElement("div",{className:"PC__ratingsCount"},l," Ratings")))}}]),t}(n.Component)),B=(a(427),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).getAverageRating=function(){var e=a.props.ratings;return Math.floor(e.reduce((function(e,t){return e+t}),0)/e.length)},a.changeMainPicture=function(e){var t=document.getElementsByClassName("Detail__mainImg")[0];Array.from(document.getElementsByClassName("Detail__subImg")).forEach((function(e){e.classList.remove("activeImg")})),e.target.classList.add("activeImg"),t.style.backgroundImage=e.target.style.backgroundImage},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.description,c=t.imgs,o=t.ratingsCount,l=this.getAverageRating();return r.a.createElement("div",{className:"Detail__container"},r.a.createElement("div",{className:"Detail__imgContainer"},r.a.createElement("div",{className:"Detail__mainImg",style:{backgroundImage:"url(".concat(c[0],")")}}),r.a.createElement("div",{className:"Detail__subImgContainer"},c.map((function(t){return r.a.createElement("div",{className:0===c.indexOf(t)?"Detail__subImg activeImg":"Detail__subImg",key:c.indexOf(t),style:{backgroundImage:"url(".concat(t,")")},onMouseOver:e.changeMainPicture})})))),r.a.createElement("div",{className:"Detail__descContainer"},r.a.createElement("h1",{className:"Detail__name"},a),r.a.createElement("div",{className:"Detail__ratingsContainer"},r.a.createElement(H.a,{defaultRating:l,maxRating:5,disabled:!0}),r.a.createElement("text",{className:"Detail__ratingsCount"},o," Ratings")),r.a.createElement("p",{className:"Detail__descHeader"},"Description"),r.a.createElement("p",{className:"Detail__desc"},n)))}}]),t}(r.a.Component)),G=a(449),q=(a(428),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).applyFilter=function(e){var t=document.getElementById("Filter__menu").querySelectorAll(".text"),n=e.currentTarget.querySelector(".text");t.forEach((function(e){e.classList.remove("activeFilter")})),n.classList.add("activeFilter");var r=n.innerHTML;a.setState({filterText:r}),a.props.applyFilter(r)},a.clearFilter=function(){document.getElementById("Filter__menu").querySelectorAll(".text").forEach((function(e){e.classList.remove("activeFilter")})),a.setState({filterText:"Filter By Category"}),a.props.clearFilter()},a.componentDidMount=function(){var e=a.props,t=e.products,n=e.filter,r=[];t.forEach((function(e){r.includes(e.productCategory)||r.push(e.productCategory)})),a.setState({categories:r,filter:n})},a.state={categories:[],filter:null,filterText:"Filter By Category"},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.categories;return r.a.createElement(G.a,{icon:"filter",text:this.state.filterText,button:!0,scrolling:!0,className:"icon",id:"Filter__button"},r.a.createElement(G.a.Menu,{id:"Filter__menu"},r.a.createElement(G.a.Header,{icon:"tags",content:"Categories"}),r.a.createElement(G.a.Divider,null),t.map((function(t){return r.a.createElement(G.a.Item,{text:t,key:t,onClick:e.applyFilter})})),r.a.createElement(G.a.Divider,null),r.a.createElement(G.a.Item,{icon:"x",text:"Clear",onClick:this.clearFilter})))}}]),t}(n.Component)),Y=Object(l.b)((function(e){return{products:e.allProducts.products,filter:e.productFilter.category}}),(function(e){return{applyFilter:function(t){var a;e((a=t,function(e){e({type:"CHANGE_CATEGORY",payload:a})}))},clearFilter:function(){e((function(e){e({type:"CLEAR_FILTER"})}))}}}))(q),W=(a(434),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).applySort=function(e){var t=document.getElementById("Sorter__menu").querySelectorAll(".text"),n=e.currentTarget.querySelector(".text");t.forEach((function(e){e.classList.remove("activeFilter")})),n.classList.add("activeFilter");var r=n.innerHTML;a.setState({sortText:r}),a.props.changeSort(r)},a.clearSort=function(){document.getElementById("Sorter__menu").querySelectorAll(".text").forEach((function(e){e.classList.remove("activeFilter")})),a.setState({sortText:"Sort By"}),a.props.clearSort()},a.componentDidMount=function(){document.getElementById("Sorter__menu").getElementsByTagName("span")[0].classList.add("activeFilter")},a.state={sortText:"Most Popular"},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(G.a,{text:this.state.sortText,button:!0,id:"Sorter__button"},r.a.createElement(G.a.Menu,{id:"Sorter__menu"},r.a.createElement(G.a.Item,{text:"Most Popular",onClick:this.applySort}),r.a.createElement(G.a.Item,{text:"Highest Rated",onClick:this.applySort}),r.a.createElement(G.a.Divider,null),r.a.createElement(G.a.Item,{text:"Clear",icon:"x",onClick:this.clearSort})))}}]),t}(n.Component)),K=Object(l.b)((function(e){return{sorting:e.productSort.sort}}),(function(e){return{changeSort:function(t){var a;e((a=t,function(e){e({type:"CHANGE_SORT",payload:a})}))},clearSort:function(){e((function(e){e({type:"CLEAR_SORT"})}))}}}))(W),J=a(453),z=a(447),Q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(J.a,{active:!0,inverted:!0},r.a.createElement(z.a,{inverted:!0},"Loading..."))},a}return Object(h.a)(t,e),t}(n.Component),V=(a(435),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).componentDidMount=function(){a.props.getAllProducts()},a.componentDidUpdate=function(e){a.props.products&&e.products!==a.props.products&&a.setState({products:a.props.products})},a.getFourMostPopularProducts=function(){var e=a.state.products;if(e.length>0){var t=e.sort((function(e,t){return e.ratingsCount>t.ratingsCount?-1:e.ratingsCount<t.ratingsCount?1:0}));return t.filter((function(e){return t.indexOf(e)<4}))}return[]},a.state={products:[]},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.getFourMostPopularProducts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("div",{className:"Home__popularWrapper"},r.a.createElement("h3",{className:"Home__popularHead"},"POPULAR DESIGNS"),r.a.createElement("div",{className:"Home__popularCards"},e.map((function(e){return r.a.createElement(U,{key:e.id,product:e})})))))}}]),t}(r.a.Component)),X=Object(l.b)((function(e){return{products:e.allProducts.products}}),(function(e){return{getAllProducts:function(){e(I())}}}))(V),Z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={product:null},a.componentDidMount=function(){a.props.getSingleProduct(a.props.match.params.id),a.props.allProducts||a.props.getAllProducts()},a.componentDidUpdate=function(e){a.props.product&&e.product!==a.props.product&&a.setState({product:a.props.product})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.product;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(B,{name:e.productName,description:e.productDescription,imgs:e.productImgs,ratings:e.ratings,ratingsCount:e.ratingsCount}):r.a.createElement(Q,null))}}]),t}(r.a.Component),$=Object(l.b)((function(e){return{product:e.singleProduct.product,allProducts:e.allProducts.products}}),(function(e){return{getSingleProduct:function(t){e(L(t))},getAllProducts:function(){e(I())}}}))(Z),ee=(a(436),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Error__container"},r.a.createElement("h1",{className:"Error__heading"},"404 Error"),r.a.createElement("div",{className:"Error__gif"}),r.a.createElement(i.b,{className:"Error__homeLink",to:"/"},"Home"),r.a.createElement("h2",{className:"Error__description"},"Ouch. This is embarassing. Looks like that page doesn't exist yet..."))}}]),t}(r.a.Component)),te=(a(437),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).componentDidMount=function(){a.props.getAllProducts()},a.componentDidUpdate=function(e){a.props.products&&e.products!==a.props.products&&a.setState({products:a.props.products}),e.filter!==a.props.filter&&a.setState({filter:a.props.filter}),e.sort!==a.props.sort&&a.setState({sort:a.props.sort})},a.getFilteredProducts=function(){var e=a.state,t=e.products,n=e.filter,r=e.sort;if(0===t.length)return t;var c=t;if("All"!==n&&(c=t.filter((function(e){return e.productCategory===n}))),"Most Popular"===r)c=c.sort((function(e,t){return e.ratingsCount>t.ratingsCount?-1:e.ratingsCount<t.ratingsCount?1:0}));else if("Highest Rated"===r){var o=function(e,t){return e+t},l=function(e){return Math.floor(e.ratings.reduce(o,0)/e.ratings.length)};c=c.sort((function(e,t){return l(e)>l(t)?-1:l(e)<l(t)?1:0}))}return c},a.state={products:[],filter:"All",sort:"Most Popular"},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.getFilteredProducts();return r.a.createElement("div",{className:"Catalog__container"},this.state.products.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Catalog__controls"},r.a.createElement(Y,null),r.a.createElement(K,null)),r.a.createElement("div",{className:"Catalog__productContainer"},e.map((function(e){return r.a.createElement(U,{key:e.id,product:e})})))):r.a.createElement(Q,null))}}]),t}(r.a.Component)),ae=Object(l.b)((function(e){return{products:e.allProducts.products,filter:e.productFilter.category,sort:e.productSort.sort}}),(function(e){return{getAllProducts:function(){e(I())}}}))(te),ne=(a(438),a(80)),re={Home:{path:"/",component:X},Detail:{path:"/details/:id",component:$},Catalog:{path:"/catalog",component:ae},Register:{path:"/register",component:function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){switch(e.target.name){case"email":a.setState({email:e.target.value});break;case"username":a.setState({username:e.target.value});break;case"password":a.setState({password:e.target.value});break;case"fName":a.setState({fName:e.target.value});break;case"lName":a.setState({lName:e.target.value});break;case"bday":a.setState({bday:e.target.value})}},a.checkPasswordMatch=function(e){e.target.value!==a.state.password?a.setState({match:!1}):a.setState({match:!0})},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"Register__header"},r.a.createElement("div",{className:"Register__text"},"MAKESHIFT")," Account Registration"),r.a.createElement("div",{className:"Register__container"},r.a.createElement("div",{className:"Register__benefits"},r.a.createElement("h3",{className:"Register__benefitsHead"},"Simplicity"),r.a.createElement("p",null,"All of your favorite designs in one place. Save your favorites and make the most of your 3D printer!"),r.a.createElement("h3",{className:"Register__benefitsHead"},"Community"),r.a.createElement("p",null,"Browse, save, rate and review designs offered by other members in our diverse design catalog!"),r.a.createElement("h3",{className:"Register__benefitsHead"},"Opportunity"),r.a.createElement("p",null,"Post your own designs and make them immediately available to other memebrs across our design community!")),r.a.createElement("form",{className:"Register__form"},r.a.createElement("div",{className:"Register__input"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",type:"email",autoComplete:"email",placeholder:"123abc@example.com",onChange:a.handleChange,value:a.state.email})),r.a.createElement("div",{className:"Register__input"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",type:"text",autoComplete:"username",onChange:a.handleChange,value:a.state.username})),r.a.createElement("div",{className:"Register__input"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",autoComplete:"off",onChange:a.handleChange,value:a.state.password})),r.a.createElement("div",{className:"Register__input"},r.a.createElement("div",{className:"Register__confirm"},r.a.createElement("label",{htmlFor:"confirm"},"Confirm Password"),r.a.createElement(ne.a,{name:a.state.match?"check":"x",size:"small",color:a.state.match?"green":"red"})),r.a.createElement("input",{name:"confirm",type:"password",autoComplete:"off",onChange:a.checkPasswordMatch})),r.a.createElement("div",{className:"Register__input"},r.a.createElement("label",{htmlFor:"fName"},"First Name"),r.a.createElement("input",{name:"fName",type:"text",autoComplete:"given-name",onChange:a.handleChange,value:a.state.fName})),r.a.createElement("div",{className:"Register__input"},r.a.createElement("label",{htmlFor:"lName"},"Last Name"),r.a.createElement("input",{name:"lName",type:"text",autoComplete:"family-name",onChange:a.handleChange,value:a.state.lName})),r.a.createElement("div",{className:"Register__input"},r.a.createElement("label",{htmlFor:"bday"},"Birthday"),r.a.createElement("input",{name:"bday",type:"date",autoComplete:"bday",placeholder:"MM/DD/YYYY",onChange:a.handleChange,value:a.state.bday})),r.a.createElement("div",{className:"Register__button"},"Submit"))))},a.state={email:"",username:"",password:"",fName:"",lName:"",bday:"",match:!1},a}return Object(h.a)(t,e),t}(n.Component)},NotFound:{path:"*",component:ee}},ce=(a(439),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app__header"},r.a.createElement(w,null)),r.a.createElement(N.c,null,Object.entries(re).map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(N.a,{key:a,exact:!0,path:n.path,component:n.component})}))),r.a.createElement("div",{className:"app__footer"},r.a.createElement(E,null))))}}]),t}(r.a.Component)),oe=a(54),le={products:null,loading:!1,error:!1},se={product:null,loading:!1,error:!1},ie={result:null,loading:!1,error:null},ue={category:"All"},me={sort:"Most Popular"},pe=Object(oe.combineReducers)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.START:return Object(S.a)({},e,{loading:!0,error:!1});case R.SUCCESS:return Object(S.a)({},e,{loading:!1,products:t.payload});case R.FAIL:return Object(S.a)({},e,{loading:!1,error:t.payload});default:return e}},singleProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.START:return Object(S.a)({},e,{loading:!0,error:!1});case F.SUCCESS:return Object(S.a)({},e,{loading:!1,product:t.payload});case F.FAIL:return Object(S.a)({},e,{loading:!1,error:t.payload});default:return e}},newProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.payload){case k.START:return Object(S.a)({},e,{loading:!0,error:null});case k.SUCCESS:return Object(S.a)({},e,{loading:!1,result:t.payload});case k.FAIL:return{result:null,loading:!1,error:t.payload};default:return e}},productFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CATEGORY":return{category:t.payload};case"CLEAR_FILTER":return ue;default:return Object(S.a)({},e)}},productSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SORT":return{sort:t.payload};case"CLEAR_SORT":return me;default:return Object(S.a)({},e)}}}),de=a(244);a.d(t,"store",(function(){return ge}));var ge=Object(oe.createStore)(pe,Object(de.composeWithDevTools)(Object(oe.applyMiddleware)(s.a)));o.a.render(r.a.createElement(l.a,{store:ge},r.a.createElement(i.a,{basename:"/makeShift-FE"},r.a.createElement(ce,null))),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.7c55befa.chunk.js.map