(function(t){function e(e){for(var n,a,i=e[0],s=e[1],d=e[2],l=0,b=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==c[s]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},c={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/comfort-zone_todo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0b63":function(t,e,o){},"0bd0":function(t,e,o){},1572:function(t,e,o){t.exports=o.p+"img/times.e103935a.svg"},"217d":function(t,e,o){},"27e4":function(t,e,o){t.exports=o.p+"img/arrow.1a7804f5.svg"},"2e0a":function(t,e,o){"use strict";o("b12a")},"2fb6":function(t,e,o){},"549b":function(t,e,o){"use strict";o("0b63")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("78a7"),o("77ed");var n=o("7a23");function c(t,e,o,c,r,a){var i=Object(n["y"])("Header"),s=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(i),Object(n["i"])(s,null,{default:Object(n["F"])((function(t){return[Object(n["i"])(n["b"],{name:"page",mode:"out-in"},{default:Object(n["F"])((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["z"])(t.Component)))]})),_:2},1024)]})),_:1})],64)}var r=o("27e4"),a=o.n(r),i=Object(n["I"])("data-v-9f9775e2");Object(n["u"])("data-v-9f9775e2");var s={class:"header"},d={class:"container"},u=Object(n["i"])("img",{class:"header__back",src:a.a,alt:""},null,-1),l=Object(n["i"])("h1",{class:"header__name"}," Список дел ",-1);Object(n["s"])();var b=i((function(t,e,o,c,r,a){var b=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("header",s,[Object(n["i"])("div",d,[a.isHome?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(b,{key:0,tag:"a",to:"/",exact:"","active-class":"active"},{default:i((function(){return[u]})),_:1})),l])])})),f={computed:{isHome:function(){return"/"===this.$route.path}}};o("549b");f.render=b,f.__scopeId="data-v-9f9775e2";var p=f,m={components:{Header:p}};m.render=c;var O=m,j=o("9483");Object(j["a"])("".concat("/comfort-zone_todo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=o("6c02"),g=Object(n["I"])("data-v-55c3a282");Object(n["u"])("data-v-55c3a282");var h={class:"home"};Object(n["s"])();var _=g((function(t,e,o,c,r,a){var i=Object(n["y"])("Form"),s=Object(n["y"])("TodosList");return Object(n["r"])(),Object(n["f"])("div",h,[Object(n["i"])(i),Object(n["i"])(s)])})),y=o("7059"),T=o.n(y),x=Object(n["I"])("data-v-4dee9792");Object(n["u"])("data-v-4dee9792");var I={class:"todo-wrap container"},w={class:"todo-list"},k={class:"trash"},S=Object(n["i"])("img",{class:"trash__icon",src:T.a,alt:"удалить"},null,-1),D=Object(n["i"])("div",{class:"trash__txt"},[Object(n["i"])("h3",{class:"trash__title"},"Корзина"),Object(n["i"])("span",null,[Object(n["h"])(" Перетащите сюда "),Object(n["i"])("br"),Object(n["h"])(" для удаления ")])],-1);Object(n["s"])();var F=x((function(t,e,o,c,r,a){var i=Object(n["y"])("TodoItem");return Object(n["r"])(),Object(n["f"])("div",I,[Object(n["i"])("ul",w,[Object(n["i"])(n["c"],{name:"page",mode:"out-in"},{default:x((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(a.todos,(function(t){return Object(n["r"])(),Object(n["f"])(i,{key:t.id,todo:t,draggable:"true",onDragstart:function(e){return a.dragStart(t.id,e)},onDragover:e[1]||(e[1]=Object(n["H"])((function(){}),["prevent"])),onDragend:a.dragEnd,onDrop:function(e){return a.dragFinish(t.id,e)}},null,8,["todo","onDragstart","onDragend","onDrop"])})),128))]})),_:1})]),Object(n["i"])("div",k,[Object(n["i"])("div",{onDragover:e[2]||(e[2]=Object(n["H"])((function(){}),["prevent"])),onDrop:e[3]||(e[3]=function(t){return a.dragFinish(-1,t)}),class:"trash__can"},[S,D],32)])])})),H=(o("a434"),o("b0c0"),o("a29b")),C=o.n(H),$=o("68e3"),N=o.n($),J=o("1572"),P=o.n(J),U=Object(n["I"])("data-v-c99d4b56");Object(n["u"])("data-v-c99d4b56");var V={class:"todo"},B={class:"checkbox"},G=Object(n["i"])("span",null,[Object(n["i"])("img",{src:C.a,alt:"Удалить контакт"})],-1),z={class:"todo__name"},E={class:"btns-row"},M=Object(n["i"])("img",{src:N.a,alt:"Изменить контакт"},null,-1),A=Object(n["i"])("img",{src:P.a,alt:"Удалить контакт"},null,-1);Object(n["s"])();var q=U((function(t,e,o,c,r,a){var i=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("li",V,[Object(n["i"])("label",B,[Object(n["i"])("input",{type:"checkbox",name:"completed",checked:o.todo.complete,onClick:e[1]||(e[1]=function(t){return a.completeTodo(o.todo.id)})},null,8,["checked"]),G]),Object(n["i"])("h2",z,Object(n["B"])(o.todo.name),1),Object(n["i"])("div",E,[Object(n["i"])(i,{tag:"div",tabindex:"0",class:"btn btn_s btn_yellow",to:"/"+o.todo.id},{default:U((function(){return[M]})),_:1},8,["to"]),Object(n["i"])("div",{onClick:e[2]||(e[2]=function(t){return a.removeTodo(o.todo.id)}),tabindex:"0",type:"submit",class:"btn btn_s btn_red"},[A])])])})),L={props:["todo"],methods:{removeTodo:function(t){this.$store.dispatch("removeTodo",t)},completeTodo:function(t){this.$store.dispatch("completeTodo",t)}}};o("a0ed");L.render=q,L.__scopeId="data-v-c99d4b56";var K=L,Q={components:{TodoItem:K},data:function(){return{newItem:"",dragging:-1}},computed:{todos:function(){return this.$store.getters.todos},isDragging:function(){return this.dragging>-1}},methods:{removeTodo:function(t){this.$store.dispatch("removeTodo",t)},dragStart:function(t,e){e.dataTransfer.setData("Text",this.id),e.dataTransfer.dropEffect="move",this.dragging=t},dragEnd:function(t){this.dragging=-1},dragFinish:function(t,e){this.moveItem(this.dragging,t)},moveItem:function(t,e){-1===e?this.removeTodo(t):this.todos.splice(e,0,this.todos.splice(t,1)[0])}}};o("c4f0");Q.render=F,Q.__scopeId="data-v-4dee9792";var R=Q,W=o("5860"),X=o.n(W),Y=Object(n["I"])("data-v-2f02b08e");Object(n["u"])("data-v-2f02b08e");var Z=Object(n["i"])("button",{type:"submit",class:"btn btn_green form__submit"},[Object(n["i"])("img",{src:X.a,alt:""}),Object(n["i"])("span",null,"Добавить")],-1);Object(n["s"])();var tt=Y((function(t,e,o,c,r,a){return Object(n["r"])(),Object(n["f"])("form",{onSubmit:e[2]||(e[2]=Object(n["H"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"])),action:"post",class:"form container"},[Object(n["G"])(Object(n["i"])("input",{class:"form__input",type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.name=e}),placeholder:"Чего изволите?",required:""},null,512),[[n["D"],t.name]]),Z],32)})),et={data:function(){return{name:""}},methods:{submit:function(){var t={name:this.name,id:Date.now(),complete:!1};this.$store.dispatch("createTodo",t),this.name=""}}};o("8646");et.render=tt,et.__scopeId="data-v-2f02b08e";var ot=et,nt={components:{TodosList:R,Form:ot},name:"Home"};o("2e0a");nt.render=_,nt.__scopeId="data-v-55c3a282";var ct=nt,rt=Object(n["I"])("data-v-0dcc7074");Object(n["u"])("data-v-0dcc7074");var at={class:"home"},it={class:"container"},st={class:"input"},dt=Object(n["i"])("span",null,"Имя:",-1),ut={class:"input"},lt=Object(n["i"])("span",null,"Телефон:",-1),bt={class:"input"},ft={class:"input"},pt={class:"btns-row"},mt=Object(n["i"])("img",{src:X.a,alt:""},null,-1),Ot=Object(n["h"])(" Добавить поле "),jt=Object(n["i"])("button",{type:"submit",class:"btn btn_green"}," Сохранить изменения ",-1);Object(n["s"])();var vt=rt((function(t,e,o,c,r,a){return Object(n["r"])(),Object(n["f"])(n["b"],{name:"page",mode:"out-in"},{default:rt((function(){return[Object(n["i"])("div",at,[Object(n["i"])("div",it,[Object(n["i"])("form",{onSubmit:e[4]||(e[4]=Object(n["H"])((function(){return a.saveContact&&a.saveContact.apply(a,arguments)}),["prevent"])),action:"post"},[Object(n["i"])("h1",null,Object(n["B"])(r.form.name),1),Object(n["i"])("label",st,[dt,Object(n["G"])(Object(n["i"])("input",{type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.form.name=t})},null,512),[[n["D"],r.form.name]])]),Object(n["i"])("label",ut,[lt,Object(n["G"])(Object(n["i"])("input",{type:"tel",name:"tel","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.form.tel=t})},null,512),[[n["D"],r.form.tel]])]),(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(r.form.bonusFields,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"inputs-row",key:t},[Object(n["i"])("label",bt,[Object(n["i"])("span",null,"Дополнительное поле "+Object(n["B"])(e+1),1),Object(n["G"])(Object(n["i"])("input",{"onUpdate:modelValue":function(e){return t.name=e},placeholder:"Введите название поля"},null,8,["onUpdate:modelValue"]),[[n["D"],t.name]])]),Object(n["i"])("label",ft,[Object(n["G"])(Object(n["i"])("input",{"onUpdate:modelValue":function(e){return t.value=e},placeholder:"Введите значение"},null,8,["onUpdate:modelValue"]),[[n["D"],t.value]])])])})),128)),Object(n["i"])("div",pt,[Object(n["i"])("div",{tabindex:"0",onClick:e[3]||(e[3]=function(){return a.addField&&a.addField.apply(a,arguments)}),class:"btn"},[mt,Ot]),jt])],32)])])]})),_:1})})),gt=o("5530"),ht={name:"Home",data:function(){return{form:{name:"",tel:"",bonusFields:[]}}},computed:{contact:function(){return this.$store.getters.getContactById(+this.$route.params.id)}},methods:{addField:function(){var t={name:"",value:""};this.form.bonusFields.push(t)},saveContact:function(){this.$store.dispatch("updateContact",Object(gt["a"])({id:this.contact.id},this.form)),this.$router.push({path:"/"})}},mounted:function(){this.form=this.contact,console.log(this.form)}};o("a25b");ht.render=vt,ht.__scopeId="data-v-0dcc7074";var _t=ht,yt=[{path:"/",name:"Home",component:ct},{path:"/:id",name:"contact",component:_t}],Tt=Object(v["a"])({history:Object(v["b"])("/comfort-zone_todo/"),routes:yt}),xt=Tt,It=(o("7db0"),o("c740"),o("5502")),wt=Object(It["a"])({state:{todos:JSON.parse(localStorage.getItem("todos"))||[{name:"Выполнить тестовое задание",id:1,complete:!0}]},mutations:{createTodo:function(t,e){t.todos.unshift(e),localStorage.setItem("todos",JSON.stringify(t.todos))},removeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1),localStorage.setItem("todos",JSON.stringify(t.todos))},completeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos[o].complete=!t.todos[o].complete,localStorage.setItem("todos",JSON.stringify(t.todos))},updateTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));t.todos[o]=e,localStorage.setItem("todos",JSON.stringify(t.todos))}},actions:{createTodo:function(t,e){var o=t.commit;o("createTodo",e)},removeTodo:function(t,e){var o=t.commit;o("removeTodo",e)},completeTodo:function(t,e){var o=t.commit;o("completeTodo",e)},updateTodo:function(t,e){var o=t.commit;o("updateTodo",e)}},modules:{},getters:{todos:function(t){return t.todos},getTodoById:function(t){return function(e){return t.todos.find((function(t){return t.id===e}))}}}});Object(n["e"])(O).use(wt).use(xt).mount("#app")},5860:function(t,e,o){t.exports=o.p+"img/plus.535ac3b2.svg"},"68e3":function(t,e,o){t.exports=o.p+"img/pencil.98e788b4.svg"},7059:function(t,e,o){t.exports=o.p+"img/trash-can.629c671f.svg"},"78a7":function(t,e,o){},8646:function(t,e,o){"use strict";o("2fb6")},a0ed:function(t,e,o){"use strict";o("217d")},a25b:function(t,e,o){"use strict";o("0bd0")},a29b:function(t,e,o){t.exports=o.p+"img/complete.d23ac634.svg"},b12a:function(t,e,o){},c4f0:function(t,e,o){"use strict";o("f3bd")},f3bd:function(t,e,o){}});
//# sourceMappingURL=app.8124e4af.js.map