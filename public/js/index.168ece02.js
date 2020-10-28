(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={index:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"bg-blue-800 "},[a("nav",{staticClass:"container mx-auto text-white"},[a("router-link",{staticClass:"inline-block py-3 px-8 hover:bg-blue-700",attrs:{to:"/"}},[t._v("Map")])],1)]),a("router-view")],1)},s=[],n=a("2877"),o={},l=Object(n["a"])(o,i,s,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto relative"},[t._m(0),a("div",{staticClass:"grid grid-cols-4"},[a("div",{staticClass:"col-span-4 md:col-span-1 p-2 bg-beige"},[a("h2",{staticClass:"text-2xl text-center"},[t._v("Attractions")]),a("div",{staticClass:"flex justify-between items-center"},[a("label",{staticClass:"w-1/3 text-gray-700"},[t._v("Filter")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filterCategory,expression:"filterCategory"}],staticClass:"form-select w-2/3",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filterCategory=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Nothing selected")]),a("option",{attrs:{value:"Park"}},[t._v("Park")]),a("option",{attrs:{value:"Museum"}},[t._v("Museum")]),a("option",{attrs:{value:"Place"}},[t._v("Place")]),a("option",{attrs:{value:"Neighborhood"}},[t._v("Neighborhood")]),a("option",{attrs:{value:"Pueblo Magico"}},[t._v("Pueblo Magico")])])]),t._l(t.filteredAttractions,(function(e){return a("button",{key:e.properties.id,staticClass:"w-full my-1 py-1 bg-blue-600 hover:bg-blue-500 hover:shadow-lg focus:outline-none focus:shadow-outline rounded uppercase",on:{click:function(a){return t.zoomToLocation(e.geometry.coordinates)}}},[t._v(t._s(e.properties.name))])})),a("button",{staticClass:"w-full my-1 py-1 bg-green-600 hover:bg-green-500 hover:shadow-lg focus:outline-none focus:shadow-outline rounded uppercase",on:{click:t.zoomAll}},[t._v("Zoom all")])],2),a("div",{staticClass:"col-span-4 md:col-span-3 h-160"},[a("l-map",{ref:"cdmxMap",attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,mousemove:t.updatePosition,click:t.handleOnMapClicked}},[a("l-tile-layer",{attrs:{url:t.url}}),t._l(t.filteredAttractions,(function(e){return a("l-marker",{key:e.properties.id,attrs:{"lat-lng":[e.geometry.coordinates[1],e.geometry.coordinates[0]]}},[a("l-popup",{staticClass:"w-48"},[a("h4",{staticClass:"text-lg text-center"},[t._v(t._s(e.properties.name))]),a("div",{staticClass:"flex justify-between items-center"},[a("h4",[t._v(t._s(e.properties.category))]),a("div",{staticClass:"flex"},[a("svg",{staticClass:"w-4 h-4 mr-1 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:function(a){return t.editFeature(e)}}},[a("path",{staticClass:"text-red-500",attrs:{d:"M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"}}),a("rect",{staticClass:"text-red-700",attrs:{width:"20",height:"2",x:"2",y:"20",rx:"1"}})]),a("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:function(a){return t.deleteFeature(e.properties.id)}}},[a("path",{staticClass:"text-red-500",attrs:{d:"M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"}}),a("path",{staticClass:"text-red-700",attrs:{d:"M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"}})])])]),a("a",{attrs:{href:e.properties.web,blank:"_traget"}},[a("img",{attrs:{src:"http://localhost:5000/img/"+e.properties.image,alt:e.properties.name}})])])],1)}))],2)],1)]),a("div",{staticClass:"h-16 bg-gray-200 text-center"},[a("h4",{staticClass:"pt-2"},[t._v("Lattitude: "+t._s(t.mousePos.lat)+" | Longitude: "+t._s(t.mousePos.lng)+" | Zoom Level: "+t._s(t.zoom))]),t._m(1)]),t.showAttractionDialog?a("new-attraction-dialog",{attrs:{attrGeom:t.attrGeom,attrProps:t.attrProps?t.attrProps:void 0},on:{"close-dialog":t.closeAttractionDialog,"add-feature":t.addFeature,"update-feature":t.updateFeature}}):t._e(),t.showAttractionsTable?a("attractions-table",{attrs:{attractions:t.closestAttractions},on:{"close-table":t.closeAttractionsTable}}):t._e()],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-orange-400 text-center"},[a("h1",{staticClass:"py-4 text-4xl"},[t._v("Mexico City")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v(" ©2016 "),a("a",{attrs:{href:"http://millermountain.com"}},[t._v("Miller Mounain LLC")])])}],p=(a("99af"),a("4de4"),a("c740"),a("d81d"),a("fb6a"),a("b680"),a("2909")),g=(a("96cf"),a("1da1")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"absolute inset-0 bg-black z-9000 opacity-25",on:{click:function(e){return t.$emit("close-dialog")}}}),a("div",{staticClass:"absolute inset-0 z-9010 flex justify-center items-center"},[a("div",{staticClass:"w-full mx-4 md:w-2/3 md:mx-0 p-4 grid grid-cols-4 gap-6 bg-tan rounded-lg"},[a("div",{staticClass:"col-span-1 flex flex-col justify-between"},[t.attrProps.id?a("h2",{staticClass:"mb-4 text-lg text-700"},[t._v("Edit Attraction")]):a("h2",{staticClass:"mb-4 text-lg text-gray-700"},[t._v("Add Attraction")]),a("div",{staticClass:"flex flex-col"},[t.attrProps.id?a("button",{staticClass:"px-4 py-1 mb-4 text-white bg-blue-600 hover:bg-blue-700 uppercase tracking-wider rounded ",on:{click:t.updateAttraction}},[t._v("Submit")]):a("button",{staticClass:"px-4 py-1 mb-4 text-white bg-blue-600 hover:bg-blue-700 uppercase tracking-wider rounded ",on:{click:t.saveAttraction}},[t._v("Submit")]),a("button",{staticClass:"px-4 py-1 text-gray-700 font-bold border-2 border-gray-700 hover:shadow-lg uppercase tracking-wider rounded ",on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("Cancel")])])]),a("div",{staticClass:"col-span-3"},[a("label",{staticClass:"block mb-4"},[a("span",{staticClass:"text-gray-700"},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Attraction"},domProps:{value:t.$v.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.name.$dirty?a("div",[t.$v.name.required?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Name is required")]),t.$v.name.maxLength?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Name must have at most "+t._s(t.$v.name.$params.maxLength.max)+" letters.")])]):t._e()]),a("div",{staticClass:"flex justify-between"},[a("label",{staticClass:"block mb-4"},[a("span",{staticClass:"text-gray-700"},[t._v("Lattitude")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.lat.$model,expression:"$v.lat.$model",modifiers:{trim:!0}},{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Attraction"},domProps:{value:t.$v.lat.$model,value:t.lat},on:{input:[function(e){e.target.composing||(t.lat=e.target.value)},function(e){e.target.composing||t.$set(t.$v.lat,"$model",e.target.value.trim())}],blur:function(e){return t.$forceUpdate()}}}),t.$v.lat.$dirty?a("div",[t.$v.lat.required?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Latitude is required")]),t.$v.lat.decimal?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Latitude must be a decimal value")])]):t._e()]),a("label",{staticClass:"block mb-4"},[a("span",{staticClass:"text-gray-700"},[t._v("Longitude")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.lng.$model,expression:"$v.lng.$model",modifiers:{trim:!0}}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Attraction"},domProps:{value:t.$v.lng.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.lng,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.lng.$dirty?a("div",[t.$v.lng.required?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Longitude is required")]),t.$v.lng.decimal?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Longitude must be a decimal value")])]):t._e()])]),a("label",{staticClass:"block mb-4"},[a("span",{staticClass:"text-gray-700"},[t._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.$v.category.$model,expression:"$v.category.$model"}],staticClass:"form-select block w-full mt-1",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.category,"$model",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Nothing selected")]),a("option",{attrs:{value:"Park"}},[t._v("Park")]),a("option",{attrs:{value:"Museum"}},[t._v("Museum")]),a("option",{attrs:{value:"Place"}},[t._v("Place")]),a("option",{attrs:{value:"Neighborhood"}},[t._v("Neighborhood")]),a("option",{attrs:{value:"Pueblo Magico"}},[t._v("Pueblo Magico")])]),t.$v.category.$dirty?a("div",[t.$v.category.required?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Category is required")])]):t._e()]),a("label",{staticClass:"block mb-4"},[a("span",{staticClass:"text-gray-700"},[t._v("Wikipedia Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.web.$model,expression:"$v.web.$model"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"https://..."},domProps:{value:t.$v.web.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.web,"$model",e.target.value)}}}),t.$v.web.$dirty?a("div",[t.$v.web.required?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Link is required.")]),t.$v.web.url?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Wikipedia Link must be a valid url.")])]):t._e()]),a("div",{staticClass:"grid grid-cols-5 gap-2"},[a("div",{staticClass:"col-span-2"},[a("div",{staticClass:"relative bg-red-400 pb-3/5"},[a("img",{staticClass:"absolute h-full w-full object-cover cursor-pointer",attrs:{src:t.imgPreview,alt:"Attraction Image for Upload"},on:{click:function(e){return t.$refs.attrImg.click()}}}),a("input",{ref:"attrImg",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:t.onImgSelected}})])]),a("div",{staticClass:"col-span-3"},[a("label",{staticClass:"block"},[a("span",{staticClass:"text-gray-700"},[t._v("Upload Image as")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.image.$model,expression:"$v.image.$model"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"Image name without its extension"},domProps:{value:t.$v.image.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.image,"$model",e.target.value)}}}),t.$v.category.$dirty?a("div",[t.$v.image.required?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Image Upload Name is required.")]),t.$v.image.maxLength?t._e():a("div",{staticClass:"ml-3 text-red-700 text-xs italic"},[t._v("Image Upload Name must have at most "+t._s(t.$v.image.$params.maxLength.max)+" letters.")])]):t._e()])])])])])])])},f=[],h=(a("baa5"),a("b0c0"),a("d3b7"),a("bc3a")),b=a.n(h),x=function(){return b.a.create({baseURL:"/api"})},w={loadAttractions:function(t){return t?x().get("/attraction/".concat(t)):x().get("/attraction")},loadClosestAttractions:function(){return x().get("/closest")},saveAttraction:function(t){return x().post("/attraction",t)},updateAttraction:function(t){return x().put("/attraction",t)},deleteAttraction:function(t){return x().delete("/attraction/".concat(t))},uploadImage:function(t){return x().post("/uplImg",t)}},y=a("b5ae"),_={name:"NewAttractionDialog",props:{attrGeom:{type:Object,required:!0},attrProps:{type:Object,default:function(){return{category:""}}}},created:function(){this.attrProps.image?this.imgPreview="http://localhost:5000/img/"+this.attrProps.image:this.imgPreview="http://via.placeholder.com/400x120.png?text=Click+to+select+image"},data:function(){return{name:this.attrProps.name,category:this.attrProps.category,web:this.attrProps.web,image:this.attrProps.image,lat:Math.round(1e5*this.attrGeom.lat)/1e5,lng:Math.round(1e5*this.attrGeom.lng)/1e5,imgPreview:null,uploadFile:null}},validations:{name:{required:y["required"],maxLength:Object(y["maxLength"])(50)},category:{required:y["required"]},web:{required:y["required"],url:y["url"]},image:{required:y["required"],maxLength:Object(y["maxLength"])(20)},lat:{required:y["required"],decimal:y["decimal"]},lng:{required:y["required"],decimal:y["decimal"]}},methods:{onImgSelected:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.uploadFile=t.target.files[0],console.log(t.target.files[0]),a.prev=2,a.next=5,e.previewImage(e.uploadFile);case 5:r=a.sent,e.imgPreview=r.success.preview,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[2,9]])})))()},previewImage:function(t){return new Promise((function(e,a){var r=new FileReader;r.onload=function(){e({success:{preview:r.result}})},r.onerror=function(t){console.log("Reader Error",t),a("Cannot preview image!")},t&&(/\.(jpe?g|png|gif)$/i.test(t.name)?r.readAsDataURL(t):a("Please select only image files with extension jpeg, jpg, png or gif"))}))},uploadImage:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.image.lastIndexOf("."),r=/\.(jpe?g|png|gif)$/i.test(t.image)?t.image.substring(0,a):t.image,i=new FormData,i.append("dbFilename",r),i.append("image",t.uploadFile,t.uploadFile.name),e.next=7,w.uploadImage(i);case 7:return s=e.sent,console.log(s),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))()},updateAttraction:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$invalid){e.next=12;break}return e.prev=2,e.next=5,w.updateAttraction({id:t.attrProps.id,name:t.name,category:t.category,image:t.image,web:t.web,lat:+t.lat,lng:+t.lng});case 5:a=e.sent.data,a.success&&t.$emit("update-feature",{type:"Feature",properties:{id:t.attrProps.id,name:t.name,category:t.category,image:t.image,web:t.web},geometry:{type:"Point",coordinates:[t.lng,t.lat]}}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},saveAttraction:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$invalid){e.next=20;break}return e.prev=2,e.next=5,t.uploadImage();case 5:if(a=e.sent,!a.success){e.next=10;break}t.image=a.success,e.next=11;break;case 10:throw new Error("Image Upload unsuccessful. Attraction was not saved!");case 11:return e.next=13,w.saveAttraction({name:t.name,category:t.category,image:t.image,web:t.web,lat:+t.lat,lng:+t.lng});case 13:r=e.sent.data,r.success&&t.$emit("add-feature",{type:"Feature",properties:{id:r.success.id,name:t.name,category:t.category,image:t.image,web:t.web},geometry:{type:"Point",coordinates:[t.lng,t.lat]}}),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](2),alert(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))()}}},C=_,$=Object(n["a"])(C,v,f,!1,null,null,null),k=$.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"absolute inset-0 bg-black z-9000 opacity-25",on:{click:function(e){return t.$emit("close-dialog")}}}),r("div",{staticClass:"absolute inset-0 z-9010 flex justify-center items-center"},[r("div",{staticClass:"w-2/3 p-4 bg-tan rounded-lg"},[r("table",{staticClass:"table-auto mb-4 w-full bg-burlyWood"},[t._m(0),r("tbody",t._l(t.attractions,(function(e,i){return r("tr",{key:i},[r("td",{staticClass:"border px-4 py-2"},[r("img",{staticClass:"w-24",attrs:{src:a("bb6e")("./"+e.image)}})]),r("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.name))]),r("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.category))]),r("td",{staticClass:"border pr-10 py-2 text-right"},[t._v(t._s(Math.round(100*e.dist)/100))])])})),0)]),r("div",{staticClass:"text-center"},[r("button",{staticClass:"px-4 py-1 ml-6 text-white bg-red-600 hover:bg-red-700 uppercase tracking-wider rounded",on:{click:function(e){return t.$emit("close-table")}}},[t._v("close")])])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"px-4 py-2"},[t._v("Image")]),a("th",{staticClass:"px-4 py-2"},[t._v("Name")]),a("th",{staticClass:"px-4 py-2"},[t._v("Category")]),a("th",{staticClass:"px-4 py-2"},[t._v("Distance in Km")])])])}],j={name:"AttractionsTable",props:{attractions:{type:Array,required:!0}},data:function(){return{}},methods:{}},O=j,L=Object(n["a"])(O,A,P,!1,null,null,null),M=L.exports,q={loadClosestAttractions:function(t){return x().get("/analytics/closest/".concat(t))}},N=a("2699"),I=a("a40a"),z=a("4e2b"),F=a("f60f"),D={name:"Home",components:{LMap:N["a"],LTileLayer:I["a"],LMarker:z["a"],LPopup:F["a"],NewAttractionDialog:k,AttractionsTable:M},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.loadAttractions();case 3:t.attractions=e.sent.data,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:11,center:{lat:19.4,lng:-99.1},mousePos:{lat:19.4,lng:-99.1},attractions:{},closestAttractions:null,showAttractionDialog:!1,showAttractionsTable:!1,attrGeom:{},attrProps:null,filterCategory:""}},computed:{filteredAttractions:function(){var t=this;return this.filterCategory?this.attractions.features.filter((function(e){return e.properties.category===t.filterCategory})):this.attractions.features},markers:function(){var t=this;return this.filterCategory?this.attractions.features.filter((function(e){return e.properties.category===t.filterCategory})).map((function(t){return[t.geometry.coordinates[1],t.geometry.coordinates[0]]})):this.attractions.features.map((function(t){return[t.geometry.coordinates[1],t.geometry.coordinates[0]]}))}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},zoomAll:function(){this.$refs.cdmxMap.mapObject.fitBounds(this.markers)},zoomToLocation:function(t){var e=this;this.$nextTick((function(){e.$refs.cdmxMap.mapObject.setView([t[1],t[0]],17)}))},updatePosition:function(t){this.mousePos={lat:t.latlng.lat.toFixed(5),lng:t.latlng.lng.toFixed(5)}},handleOnMapClicked:function(t){t.originalEvent.shiftKey?this.getClosestAttraction(t.latlng):this.setNewAttraction(t.latlng)},setNewAttraction:function(t){this.attrGeom=t,this.showAttractionDialog=!0},addFeature:function(t){this.attractions.features.push(t),this.showAttractionDialog=!1,this.closeAttractionDialog()},editFeature:function(t){this.attrGeom.lat=t.geometry.coordinates[1],this.attrGeom.lng=t.geometry.coordinates[0],this.attrProps=t.properties,this.showAttractionDialog=!0},updateFeature:function(t){var e=this.attractions.features.findIndex((function(e){return e.properties.id===t.properties.id}));this.attractions.features=[].concat(Object(p["a"])(this.attractions.features.slice(0,e)),[t],Object(p["a"])(this.attractions.features.slice(e+1))),this.closeAttractionDialog()},deleteFeature:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){var r,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=confirm("Do you really want to delete this attraction?"),!r){a.next=12;break}return a.prev=2,a.next=5,w.deleteAttraction(t);case 5:i=a.sent.data,i.success&&(s=e.attractions.features.findIndex((function(e){return e.properties.id===t})),e.attractions.features=[].concat(Object(p["a"])(e.attractions.features.slice(0,s)),Object(p["a"])(e.attractions.features.slice(s+1)))),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),alert(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[2,9]])})))()},getClosestAttraction:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q.loadClosestAttractions("".concat(t.lat,"&").concat(t.lng));case 3:e.closestAttractions=a.sent.data,e.closestAttractions.length&&(e.showAttractionsTable=!0),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),alert(a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},closeAttractionDialog:function(){this.showAttractionDialog=!1,this.attrGeom={},this.attrProps=null},closeAttractionsTable:function(){this.showAttractionsTable=!1,this.closestAttractions=null}}},U=D,R=Object(n["a"])(U,d,m,!1,null,null,null),T=R.exports;r["a"].use(u["a"]);var E=[{path:"/",name:"Home",component:T}],G=new u["a"]({mode:"history",base:"/",routes:E}),S=G,H=(a("c898"),a("6cc5"),a("e11e")),B=a("1dce"),W=a.n(B);r["a"].use(W.a),delete H["Icon"].Default.prototype._getIconUrl,H["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),r["a"].prototype.$env="production",r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(t){return t(c)}}).$mount("#app")},bb6e:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="bb6e"},c898:function(t,e,a){}});
//# sourceMappingURL=index.168ece02.js.map