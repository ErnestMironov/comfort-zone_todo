(function(t){function e(e){for(var n,a,i=e[0],s=e[1],d=e[2],f=0,b=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(b.length)b.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},c=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/comfort-zone_todo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=s;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0b4f":function(t,e,o){"use strict";o("0f8e")},"0b63":function(t,e,o){},"0f8e":function(t,e,o){},1572:function(t,e,o){t.exports=o.p+"img/times.e103935a.svg"},"27e4":function(t,e,o){t.exports=o.p+"img/arrow.1a7804f5.svg"},"2e0a":function(t,e,o){"use strict";o("b12a")},"3d6c":function(t,e,o){},"4f05":function(t,e,o){"use strict";o("fd2b")},"549b":function(t,e,o){"use strict";o("0b63")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("78a7"),o("77ed");var n=o("7a23");function r(t,e,o,r,c,a){var i=Object(n["y"])("Header"),s=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(i),Object(n["i"])(s,null,{default:Object(n["F"])((function(t){return[Object(n["i"])(n["b"],{name:"page",mode:"out-in"},{default:Object(n["F"])((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["z"])(t.Component)))]})),_:2},1024)]})),_:1})],64)}var c=o("27e4"),a=o.n(c),i=Object(n["I"])("data-v-9f9775e2");Object(n["u"])("data-v-9f9775e2");var s={class:"header"},d={class:"container"},u=Object(n["i"])("img",{class:"header__back",src:a.a,alt:""},null,-1),f=Object(n["i"])("h1",{class:"header__name"}," Список дел ",-1);Object(n["s"])();var b=i((function(t,e,o,r,c,a){var b=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("header",s,[Object(n["i"])("div",d,[a.isHome?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(b,{key:0,tag:"a",to:"/",exact:"","active-class":"active"},{default:i((function(){return[u]})),_:1})),f])])})),l={computed:{isHome:function(){return"/"===this.$route.path}}};o("549b");l.render=b,l.__scopeId="data-v-9f9775e2";var p=l,m={components:{Header:p}};m.render=r;var O=m,v=o("9483");Object(v["a"])("".concat("/comfort-zone_todo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var j=o("6c02"),g=Object(n["I"])("data-v-55c3a282");Object(n["u"])("data-v-55c3a282");var h={class:"home"};Object(n["s"])();var _=g((function(t,e,o,r,c,a){var i=Object(n["y"])("Form"),s=Object(n["y"])("TodosList");return Object(n["r"])(),Object(n["f"])("div",h,[Object(n["i"])(i),Object(n["i"])(s)])})),y=o("7059"),T=o.n(y),x=Object(n["I"])("data-v-753fdc7b");Object(n["u"])("data-v-753fdc7b");var I={class:"todo-wrap container"},w={class:"todo-list"},S={class:"trash"},k=Object(n["i"])("img",{class:"trash__icon",src:T.a,alt:"удалить"},null,-1),D=Object(n["i"])("div",{class:"trash__txt"},[Object(n["i"])("h3",{class:"trash__title"},"Корзина"),Object(n["i"])("span",null,[Object(n["h"])(" Перетащите сюда "),Object(n["i"])("br"),Object(n["h"])(" для удаления ")])],-1);Object(n["s"])();var H=x((function(t,e,o,r,c,a){var i=Object(n["y"])("TodoItem");return Object(n["r"])(),Object(n["f"])("div",I,[Object(n["i"])("ul",w,[Object(n["i"])(n["c"],{name:"page",mode:"out-in"},{default:x((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(a.todos,(function(t){return Object(n["r"])(),Object(n["f"])(i,{key:t.id,todo:t,draggable:"true",onDragstart:function(e){return a.dragStart(t.id,e)},onDragover:e[1]||(e[1]=Object(n["H"])((function(){}),["prevent"])),onDragend:a.dragEnd,onDrop:function(e){return a.dragFinish(t.id,e)}},null,8,["todo","onDragstart","onDragend","onDrop"])})),128))]})),_:1})]),Object(n["i"])("div",S,[Object(n["i"])("div",{onDragover:e[2]||(e[2]=Object(n["H"])((function(){}),["prevent"])),onDrop:e[3]||(e[3]=function(t){return a.dragFinish(-1,t)}),class:"trash__can"},[k,D],32)])])})),$=(o("a434"),o("b0c0"),o("a29b")),F=o.n($),N=o("68e3"),J=o.n(N),P=o("1572"),z=o.n(P),B=Object(n["I"])("data-v-5c1942bc");Object(n["u"])("data-v-5c1942bc");var C={class:"todo"},E={class:"checkbox"},M=Object(n["i"])("span",null,[Object(n["i"])("img",{src:F.a,alt:"Удалить контакт"})],-1),q={class:"todo__name"},A={class:"btns-row"},G=Object(n["i"])("img",{src:J.a,alt:"Изменить контакт"},null,-1),L=Object(n["i"])("img",{src:z.a,alt:"Удалить контакт"},null,-1);Object(n["s"])();var U=B((function(t,e,o,r,c,a){var i=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("li",C,[Object(n["i"])("label",E,[Object(n["i"])("input",{type:"checkbox",name:"completed",checked:o.todo.complete,onClick:e[1]||(e[1]=function(t){return a.completeTodo(o.todo.id)})},null,8,["checked"]),M]),Object(n["i"])("h2",q,Object(n["B"])(o.todo.name),1),Object(n["i"])("div",A,[Object(n["i"])(i,{tag:"div",tabindex:"0",class:"btn btn_s btn_yellow",to:"/"+o.todo.id},{default:B((function(){return[G]})),_:1},8,["to"]),Object(n["i"])("div",{onClick:e[2]||(e[2]=function(t){return a.removeTodo(o.todo.id)}),tabindex:"0",type:"submit",class:"btn btn_s btn_red"},[L])])])})),V={props:["todo"],methods:{removeTodo:function(t){this.$store.dispatch("removeTodo",t)},completeTodo:function(t){this.$store.dispatch("completeTodo",t)}}};o("7391");V.render=U,V.__scopeId="data-v-5c1942bc";var K=V,Q={components:{TodoItem:K},data:function(){return{newItem:"",dragging:-1}},computed:{todos:function(){return this.$store.getters.todos},isDragging:function(){return this.dragging>-1}},methods:{removeTodo:function(t){this.$store.dispatch("removeTodo",t)},dragStart:function(t,e){e.dataTransfer.setData("Text",this.id),e.dataTransfer.dropEffect="move",this.dragging=t},dragEnd:function(t){this.dragging=-1},dragFinish:function(t,e){this.moveItem(this.dragging,t)},moveItem:function(t,e){-1===e?this.removeTodo(t):this.todos.splice(e,0,this.todos.splice(t,1)[0])}}};o("0b4f");Q.render=H,Q.__scopeId="data-v-753fdc7b";var R=Q,W=o("5860"),X=o.n(W),Y=Object(n["I"])("data-v-82acd3a4");Object(n["u"])("data-v-82acd3a4");var Z=Object(n["i"])("button",{type:"submit",class:"btn btn_green form__submit"},[Object(n["i"])("img",{src:X.a,alt:""}),Object(n["i"])("span",null,"Добавить")],-1);Object(n["s"])();var tt=Y((function(t,e,o,r,c,a){return Object(n["r"])(),Object(n["f"])("form",{onSubmit:e[2]||(e[2]=Object(n["H"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"])),action:"post",class:"form container"},[Object(n["G"])(Object(n["i"])("input",{class:"form__input",type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.name=e}),placeholder:"Чего изволите?",required:""},null,512),[[n["D"],t.name]]),Z],32)})),et={data:function(){return{name:""}},methods:{submit:function(){var t={name:this.name,id:Date.now(),complete:!1};this.$store.dispatch("createTodo",t),this.name=""}}};o("67e7");et.render=tt,et.__scopeId="data-v-82acd3a4";var ot=et,nt={components:{TodosList:R,Form:ot},name:"Home"};o("2e0a");nt.render=_,nt.__scopeId="data-v-55c3a282";var rt=nt,ct=o("c64f"),at=o.n(ct),it=Object(n["I"])("data-v-8d9ae1f0");Object(n["u"])("data-v-8d9ae1f0");var st={class:"todo-page"},dt=Object(n["i"])("button",{type:"submit",class:"btn btn_green form__submit"},[Object(n["i"])("img",{src:at.a,alt:""}),Object(n["i"])("span",null,"Сохранить")],-1);Object(n["s"])();var ut=it((function(t,e,o,r,c,a){return Object(n["r"])(),Object(n["f"])("div",st,[Object(n["i"])("form",{onSubmit:e[2]||(e[2]=Object(n["H"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"])),action:"post",class:"todo-page__form container"},[Object(n["G"])(Object(n["i"])("textarea",{class:"todo-page__input",type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.name=e}),val:"name",placeholder:"Чего изволите?",required:""},null,512),[[n["D"],t.name]]),dt],32)])})),ft=o("5530"),bt={data:function(){return{name:""}},computed:{todo:function(){return this.$store.getters.getTodoById(+this.$route.params.id)}},created:function(){this.name=this.todo.name},methods:{submit:function(){var t=Object(ft["a"])(Object(ft["a"])({},this.todo),{},{name:this.name});this.$store.dispatch("updateTodo",t),this.$router.push("/")}}};o("4f05");bt.render=ut,bt.__scopeId="data-v-8d9ae1f0";var lt=bt,pt=[{path:"/",name:"Home",component:rt},{path:"/:id",name:"todo",component:lt}],mt=Object(j["a"])({history:Object(j["b"])("/comfort-zone_todo/"),routes:pt}),Ot=mt,vt=(o("7db0"),o("c740"),o("5502")),jt=Object(vt["a"])({state:{todos:JSON.parse(localStorage.getItem("todos"))||[{name:"Выполнить тестовое задание",id:1,complete:!0}]},mutations:{createTodo:function(t,e){t.todos.unshift(e),localStorage.setItem("todos",JSON.stringify(t.todos))},removeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1),localStorage.setItem("todos",JSON.stringify(t.todos))},completeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos[o].complete=!t.todos[o].complete,localStorage.setItem("todos",JSON.stringify(t.todos))},updateTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));t.todos[o]=e,localStorage.setItem("todos",JSON.stringify(t.todos))}},actions:{createTodo:function(t,e){var o=t.commit;o("createTodo",e)},removeTodo:function(t,e){var o=t.commit;o("removeTodo",e)},completeTodo:function(t,e){var o=t.commit;o("completeTodo",e)},updateTodo:function(t,e){var o=t.commit;o("updateTodo",e)}},modules:{},getters:{todos:function(t){return t.todos},getTodoById:function(t){return function(e){return t.todos.find((function(t){return t.id===e}))}}}});Object(n["e"])(O).use(jt).use(Ot).mount("#app")},5860:function(t,e,o){t.exports=o.p+"img/plus.535ac3b2.svg"},"5edf":function(t,e,o){},"67e7":function(t,e,o){"use strict";o("3d6c")},"68e3":function(t,e,o){t.exports=o.p+"img/pencil.98e788b4.svg"},7059:function(t,e,o){t.exports=o.p+"img/trash-can.629c671f.svg"},7391:function(t,e,o){"use strict";o("5edf")},"78a7":function(t,e,o){},a29b:function(t,e,o){t.exports=o.p+"img/complete.d23ac634.svg"},b12a:function(t,e,o){},c64f:function(t,e,o){t.exports=o.p+"img/save.da03fb21.svg"},fd2b:function(t,e,o){}});
//# sourceMappingURL=app.c3609570.js.map