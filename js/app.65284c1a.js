(function(t){function e(e){for(var n,a,i=e[0],s=e[1],d=e[2],l=0,b=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==c[s]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},c={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/comfort-zone_todo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"07b1":function(t,e,o){},1572:function(t,e,o){t.exports=o.p+"img/times.e103935a.svg"},"1e37":function(t,e,o){},"27e4":function(t,e,o){t.exports=o.p+"img/arrow.1a7804f5.svg"},"2e0a":function(t,e,o){"use strict";o("b12a")},"400d":function(t,e,o){},"4bfd":function(t,e,o){"use strict";o("1e37")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("78a7"),o("77ed");var n=o("7a23");function c(t,e,o,c,r,a){var i=Object(n["y"])("Header"),s=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(i),Object(n["i"])(s,null,{default:Object(n["F"])((function(t){return[Object(n["i"])(n["b"],{name:"page",mode:"out-in"},{default:Object(n["F"])((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["z"])(t.Component)))]})),_:2},1024)]})),_:1})],64)}var r=o("27e4"),a=o.n(r),i=Object(n["I"])("data-v-64565e1c");Object(n["u"])("data-v-64565e1c");var s={class:"header"},d={class:"container"},u=Object(n["i"])("img",{class:"header__back-img",src:a.a,alt:""},null,-1),l=Object(n["i"])("h1",{class:"header__name"}," Список дел ",-1);Object(n["s"])();var b=i((function(t,e,o,c,r,a){var b=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("header",s,[Object(n["i"])("div",d,[a.isHome?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(b,{key:0,tag:"a",to:"/",exact:"","active-class":"active",class:"header__back",tabindex:"1"},{default:i((function(){return[u]})),_:1})),l])])})),f={computed:{isHome:function(){return"/"===this.$route.path}}};o("93ef");f.render=b,f.__scopeId="data-v-64565e1c";var m=f,p={components:{Header:m}};p.render=c;var O=p,j=o("9483");Object(j["a"])("".concat("/comfort-zone_todo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=o("6c02"),g=Object(n["I"])("data-v-55c3a282");Object(n["u"])("data-v-55c3a282");var h={class:"home"};Object(n["s"])();var _=g((function(t,e,o,c,r,a){var i=Object(n["y"])("Form"),s=Object(n["y"])("TodosList");return Object(n["r"])(),Object(n["f"])("div",h,[Object(n["i"])(i),Object(n["i"])(s)])})),y=o("7059"),T=o.n(y),I=Object(n["I"])("data-v-3361cc5e");Object(n["u"])("data-v-3361cc5e");var x={class:"todo-wrap container"},k={key:0,class:"todo-list"},w=Object(n["h"])(" Похоже что вы разобрались со всеми своими делами, "),S=Object(n["i"])("br",null,null,-1),D=Object(n["h"])(" в противном случае добавьте еще! "),F={key:2,class:"trash"},H=Object(n["i"])("img",{class:"trash__icon",src:T.a,alt:"удалить"},null,-1),$=Object(n["i"])("div",{class:"trash__txt"},[Object(n["i"])("h3",{class:"trash__title"},"Корзина"),Object(n["i"])("span",null,[Object(n["h"])(" Перетащите сюда "),Object(n["i"])("br"),Object(n["h"])(" для удаления ")])],-1);Object(n["s"])();var N=I((function(t,e,o,c,r,a){var i=Object(n["y"])("TodoItem");return Object(n["r"])(),Object(n["f"])("div",x,[a.todos.length?(Object(n["r"])(),Object(n["f"])("ul",k,[Object(n["i"])(n["c"],{name:"page",mode:"out-in"},{default:I((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(a.todos,(function(t){return Object(n["r"])(),Object(n["f"])(i,{key:t.id,todo:t,draggable:"true",onDragstart:function(e){return a.dragStart(t.id,e)},onDragover:e[1]||(e[1]=Object(n["H"])((function(){}),["prevent"])),onDragend:a.dragEnd,onDrop:function(e){return a.dragFinish(t.id,e)}},null,8,["todo","onDragstart","onDragend","onDrop"])})),128))]})),_:1})])):(Object(n["r"])(),Object(n["f"])("div",{key:1,class:"todo-placeholder",onClick:e[2]||(e[2]=function(){return a.inputFocus&&a.inputFocus.apply(a,arguments)})},[w,S,D])),a.todos.length?(Object(n["r"])(),Object(n["f"])("div",F,[Object(n["i"])("div",{onDragover:e[3]||(e[3]=Object(n["H"])((function(){}),["prevent"])),onDrop:e[4]||(e[4]=function(t){return a.dragFinish(-1,t)}),class:"trash__can"},[H,$],32)])):Object(n["g"])("",!0)])})),J=(o("b0c0"),o("a29b")),L=o.n(J),P=o("68e3"),E=o.n(P),q=o("1572"),C=o.n(q),z=Object(n["I"])("data-v-6de2cd44");Object(n["u"])("data-v-6de2cd44");var B={class:"todo"},M={class:"checkbox"},A=Object(n["i"])("span",null,[Object(n["i"])("img",{src:L.a,alt:"Удалить контакт"})],-1),G={class:"todo__name"},U={class:"btns-row"},V=Object(n["i"])("img",{src:E.a,alt:"Изменить контакт"},null,-1),K=Object(n["i"])("img",{src:C.a,alt:"Удалить контакт"},null,-1);Object(n["s"])();var Q=z((function(t,e,o,c,r,a){var i=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("li",B,[Object(n["i"])("label",M,[Object(n["i"])("input",{type:"checkbox",name:"completed",checked:o.todo.complete,onClick:e[1]||(e[1]=function(t){return a.completeTodo(o.todo.id)})},null,8,["checked"]),A]),Object(n["i"])("h2",G,Object(n["B"])(o.todo.name),1),Object(n["i"])("div",U,[Object(n["i"])(i,{tag:"div",tabindex:"0",class:"btn btn_s btn_yellow",to:"/"+o.todo.id},{default:z((function(){return[V]})),_:1},8,["to"]),Object(n["i"])("button",{onClick:e[2]||(e[2]=function(t){return a.removeTodo(o.todo.id)}),tabindex:"0",type:"submit",class:"btn btn_s btn_red"},[K])])])})),R={props:["todo"],methods:{removeTodo:function(t){this.$store.dispatch("removeTodo",t)},completeTodo:function(t){this.$store.dispatch("completeTodo",t)}}};o("df3a");R.render=Q,R.__scopeId="data-v-6de2cd44";var W=R,X={components:{TodoItem:W},data:function(){return{newItem:"",dragging:-1}},computed:{todos:function(){return this.$store.getters.todos},isDragging:function(){return this.dragging>-1}},methods:{inputFocus:function(){document.querySelector(".form__input").focus()},removeTodo:function(t){this.$store.dispatch("removeTodo",t)},dragStart:function(t,e){e.dataTransfer.dropEffect="move",this.dragging=t,e.target.classList.add("in-moution")},dragEnd:function(t){this.dragging=-1,t.target.classList.remove("in-moution")},dragFinish:function(t,e){this.moveItem(t)},highDeletedElement:function(){document.querySelector(".trash__can").classList.add("high"),this.movebleItem.classList.add("delete")},removeHighDeletedElement:function(t){t.target.classList.remove("high")},moveItem:function(t){-1===t&&this.removeTodo(this.dragging)}}};o("7801");X.render=N,X.__scopeId="data-v-3361cc5e";var Y=X,Z=o("5860"),tt=o.n(Z),et=Object(n["I"])("data-v-48bb1710");Object(n["u"])("data-v-48bb1710");var ot=Object(n["i"])("button",{type:"submit",class:"btn btn_green form__submit"},[Object(n["i"])("img",{src:tt.a,alt:""}),Object(n["i"])("span",null,"Добавить")],-1);Object(n["s"])();var nt=et((function(t,e,o,c,r,a){return Object(n["r"])(),Object(n["f"])("form",{onSubmit:e[2]||(e[2]=Object(n["H"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"])),action:"post",class:"form container"},[Object(n["G"])(Object(n["i"])("input",{class:"form__input",type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.name=e}),placeholder:"Чего изволите?",required:""},null,512),[[n["D"],t.name]]),ot],32)})),ct={data:function(){return{name:""}},methods:{submit:function(){var t={name:this.name,id:Date.now(),complete:!1};this.$store.dispatch("createTodo",t),this.name=""}}};o("4bfd");ct.render=nt,ct.__scopeId="data-v-48bb1710";var rt=ct,at={components:{TodosList:Y,Form:rt},name:"Home"};o("2e0a");at.render=_,at.__scopeId="data-v-55c3a282";var it=at,st=o("c64f"),dt=o.n(st),ut=Object(n["I"])("data-v-c8d38410");Object(n["u"])("data-v-c8d38410");var lt={class:"todo-page"},bt=Object(n["i"])("button",{type:"submit",class:"btn btn_green form__submit"},[Object(n["i"])("img",{src:dt.a,alt:""}),Object(n["i"])("span",null,"Сохранить")],-1);Object(n["s"])();var ft=ut((function(t,e,o,c,r,a){return Object(n["r"])(),Object(n["f"])("div",lt,[Object(n["i"])("form",{onSubmit:e[2]||(e[2]=Object(n["H"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"])),action:"post",class:"todo-page__form container"},[Object(n["G"])(Object(n["i"])("textarea",{class:"todo-page__input",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.name=e}),val:"name",placeholder:"Чего изволите?",required:"",tabindex:"0"},null,512),[[n["D"],t.name]]),bt],32)])})),mt=o("5530"),pt={data:function(){return{name:""}},computed:{todo:function(){return this.$store.getters.getTodoById(+this.$route.params.id)}},created:function(){this.name=this.todo.name},methods:{submit:function(){var t=Object(mt["a"])(Object(mt["a"])({},this.todo),{},{name:this.name});this.$store.dispatch("updateTodo",t),this.$router.push("/")}}};o("6e99");pt.render=ft,pt.__scopeId="data-v-c8d38410";var Ot=pt,jt=[{path:"/",name:"Home",component:it},{path:"/:id",name:"todo",component:Ot}],vt=Object(v["a"])({history:Object(v["b"])("/comfort-zone_todo/"),routes:jt}),gt=vt,ht=(o("7db0"),o("c740"),o("a434"),o("5502")),_t=Object(ht["a"])({state:{todos:JSON.parse(localStorage.getItem("todos"))||[{name:"Выполнить тестовое задание",id:1,complete:!0}]},mutations:{createTodo:function(t,e){t.todos.unshift(e),localStorage.setItem("todos",JSON.stringify(t.todos))},removeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1),localStorage.setItem("todos",JSON.stringify(t.todos))},completeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos[o].complete=!t.todos[o].complete,localStorage.setItem("todos",JSON.stringify(t.todos))},updateTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));t.todos[o]=e,localStorage.setItem("todos",JSON.stringify(t.todos))}},actions:{createTodo:function(t,e){var o=t.commit;o("createTodo",e)},removeTodo:function(t,e){var o=t.commit;o("removeTodo",e)},completeTodo:function(t,e){var o=t.commit;o("completeTodo",e)},updateTodo:function(t,e){var o=t.commit;o("updateTodo",e)}},modules:{},getters:{todos:function(t){return t.todos},getTodoById:function(t){return function(e){return t.todos.find((function(t){return t.id===e}))}}}});Object(n["e"])(O).use(_t).use(gt).mount("#app")},5860:function(t,e,o){t.exports=o.p+"img/plus.535ac3b2.svg"},"68e3":function(t,e,o){t.exports=o.p+"img/pencil.98e788b4.svg"},"6e99":function(t,e,o){"use strict";o("a3bf")},7059:function(t,e,o){t.exports=o.p+"img/trash-can.629c671f.svg"},7801:function(t,e,o){"use strict";o("07b1")},"78a7":function(t,e,o){},"93ef":function(t,e,o){"use strict";o("d8f9")},a29b:function(t,e,o){t.exports=o.p+"img/complete.d23ac634.svg"},a3bf:function(t,e,o){},b12a:function(t,e,o){},c64f:function(t,e,o){t.exports=o.p+"img/save.da03fb21.svg"},d8f9:function(t,e,o){},df3a:function(t,e,o){"use strict";o("400d")}});
//# sourceMappingURL=app.65284c1a.js.map