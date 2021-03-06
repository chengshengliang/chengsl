(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{162:function(n,t,e){"use strict";e.r(t);var a=e(0),o=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"this是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#this是什么？"}},[n._v("#")]),n._v(" this是什么？")]),n._v(" "),e("pre",[e("code",[n._v("this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。\nthis 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式\n")])]),n._v(" "),e("h2",{attrs:{id:"绑定this几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绑定this几种方式"}},[n._v("#")]),n._v(" 绑定this几种方式")]),n._v(" "),e("pre",[e("code",[n._v(" 1：默认绑定\n var a=2;\n function test(){\n    console.log(this.a)\n }\n test()//2\n 调用函数test后，执行打印操作，此时this其实是执行函数调用者，其实是window.test()，\n 所以window.a=2;\n\n\n 2：隐式绑定\n    function test(){\n        console.log(this.a)\n    }\n\n    var obj={\n        a:66,\n        test:test\n    }\n    obj.test()//66\n    是调用位置是否有上下文对象，此时函数调用者是obj对象，所有this，指向obj，从而this.a=66\n    注意： 对象属性引用链中只有最顶层或者说最后一层会影响调用位置。\n    function test(){\n        console.log(this.a)\n    }\n\n    var obj2={\n        a:66,\n        test:test\n    }\n    var obj={\n        a:55,\n        obj2:obj2\n    }\n    obj.obj2.test()//66\n\n    隐式丢失例子：\n    function bar(){\n        console.log(this.num)\n    }\n    var obj={\n        num:1,\n        bar:bar\n    }\n   \n    var test=obj.bar()\n     var num=22;\n     test()//22\n    虽然test是obj.bar的一个引用，但是它是引用函数本身，因应用了默认绑定。this指向全局变量。\n\n\n\n3：显示绑定（可以通过 apply 、call 和 bind 将函数中的 this 绑定到指定对象。）\n显式绑定的核心是 JavaScript 内置的 call(..) 和 apply(..) 方法，\n这两个方法在 JavaScript 提供的绝大多数函数以及开发者自己创建的所有函数上都可以使用。\n\n注:如果call()和apply()的第一个参数是null，在非严格模式下，\n第一个参数为null或者undefined时会自动替换为指向全局对象(window)，\n\n\n4：强绑定\n其实也是显示绑定的一种，不过很好的解决了隐式丢失问题\n\n5：new绑定\n只是被 new 操作符调用的普通函数而已。\n\n\n优先级：new绑定 > 显示绑定 > 隐式绑定 > 默认绑定，\n所以es6的箭头函数this指向他外层函数的this指向，\n且无法修改\n")])]),n._v(" "),e("p",[n._v("改变this指向的call，apply，bind")]),n._v(" "),e("p",[n._v("call和apply类似，第一个参数都是指向this的绑定函数，第二个参数不同，call传入是单个参数形式，\napply传入是数组参数形式。call和apply可以用作，改变this指向，继承（调用他人函数），调用函数\nbind（低版本的 IE 中不兼容）绑定，bind 方法不会立即执行，而是返回一个改变了上下文this后的函数。\n而原函数func中的 this并没有被改变，依旧指向全局对象 window。")]),n._v(" "),e("p",[n._v("bind:\n1:创建一个新的函数。\n2：bind被调用时，新函数的this被bind的第一个参数指定\nbind手写polyfill：")]),n._v(" "),e("pre",[e("code",[n._v("if(!function.prototype.bind){\n    function.prototype.bind=function(oThis){\n        if(typeof this!='function'){\n            throw new TypeError('当前调用bind方法的不是函数！')\n        }\n\n        var args=Array.prototype.slice.call(arguments,1)\n        var fToBlod=this;\n        var fBound=function(){\n            return fToBlod.apply(oThis,args.concat(Array.prototype.slice.call(arguments)))\n        }\n        return fBound;\n    }\n}\n")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5c6f66986fb9a049ec6bae37",target:"_blank",rel:"noopener noreferrer"}},[n._v("call,apply,bind用法和区别"),e("OutboundLink")],1),n._v(" "),e("a",{attrs:{href:"https://juejin.im/post/5ec9cfd0f265da76e81a28c7",target:"_blank",rel:"noopener noreferrer"}},[n._v("掘金上this参考文档"),e("OutboundLink")],1),n._v(" "),e("a",{attrs:{href:"https://juejin.im/post/5dce1f6ef265da0bd61f109b#heading-1",target:"_blank",rel:"noopener noreferrer"}},[n._v("手写polyfill"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);