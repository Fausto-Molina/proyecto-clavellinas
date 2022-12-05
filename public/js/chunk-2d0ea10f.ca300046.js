(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ea10f"],{"8fe0":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.periodos,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[e._v("PERIODOS")]),o("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),o("v-spacer"),o("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"teal accent-4",dark:""}},"v-btn",i,!1),r),[e._v(" Nuevo Periodo ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"10",md:"4"}},[o("v-text-field",{attrs:{rules:e.nombrePeriodo1,counter:20,label:"NOMBRE PERIODO"},model:{value:e.nombrePeriodo,callback:function(t){e.nombrePeriodo=t},expression:"nombrePeriodo"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{rules:e.nuemeroPeriodo1,counter:3,label:"NUMERO PERIODO"},model:{value:e.nuemeroPeriodo,callback:function(t){e.nuemeroPeriodo=t},expression:"nuemeroPeriodo"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4"},on:{click:e.close}},[e._v(" Cancel ")]),o("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4",disabled:e.dessavilitar},on:{click:e.save}},[e._v(" Guardar ")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[e._v("ESTA SEGURO DE QUE QUIERE ELIMINAR "+e._s(e.nombrePeriodo)+"?")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"red",elevation:"2"},on:{click:e.closeDelete}},[e._v("Cancel")]),o("v-btn",{attrs:{color:"green",elvation:"2"},on:{click:e.deleteItemConfirm}},[e._v("Eliminar")]),o("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[o("v-btn",{staticClass:"mx-1",attrs:{fab:"",small:"",color:"teal accent-4"},on:{click:function(t){return e.editItem(r)}}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-pencil")])],1),o("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"red",small:""},on:{click:function(t){return e.deleteItem(r)}}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-delete")])],1)]}},{key:"no-data",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})},i=[],a=o("bc3a"),n=o.n(a),s=o("3d20"),l=o.n(s),c={data:function(){return{id:"",dialog:!1,corecto:"",nombrePeriodo:"",mensaje1:"",valor:"",nuemeroPeriodo:"",periodos:[],dialogDelete:!1,headers:[{text:"NOMBRE",align:"start",sortable:!1,value:"nombrePeriodo"},{text:"NUMERO",value:"nuemeroPeriodo"},{text:"FECHA",value:"createdAt"},{text:"Actions",value:"actions",sortable:!1}],nombrePeriodo1:[function(e){return!!e||"EL NOMBRE DEL PERIODO ES REQUERIDO"},function(e){return e.length<=20||"EL NOMBRE DEL PERIODO DEBE TENER MENOS DE 20 CARACTERES"}],nuemeroPeriodo1:[function(e){return!!e||"EL NUMERO DEL PERIODO ES REQUERIDO"},function(e){return e.length<=3||"EL NUMERO DEL PERIODO DEBE TENER MENOS DE 3 CARACTERES"}],editedIndex:-1}},computed:{formTitle:function(){return-1===this.editedIndex?"NUEVO PERIODO":"EDITAR PERIODO"},dessavilitar:function(){return 0===this.nombrePeriodo.length||0===this.nuemeroPeriodo.length}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.listarperiodos()},methods:{error:function(e){l.a.fire({icon:"error",title:"NOMBRE DE PERIODO",text:e})},error1:function(e){l.a.fire({icon:"error",title:"NUMERO DE PERIODO",text:e})},msjAlerta:function(e){l.a.fire({position:"top",icon:"success",title:e,showConfirmButton:!1,timer:3e3})},listarperiodos:function(){var e=this,t={headers:{token:this.$store.state.token}};n.a.get("periodos",t).then((function(t){console.log(t.data.periodos),e.periodos=t.data.periodos})).catch((function(e){console.log(e.msg)}))},editItem:function(e){this.id=e._id,this.editedIndex=0,this.nombrePeriodo=e.nombrePeriodo,this.nuemeroPeriodo=e.nuemeroPeriodo,this.dialog=!0},deleteItem:function(e){this.nombrePeriodo=e.nombrePeriodo,this.editedIndex=0,this.id=e._id,this.dialogDelete=!0},deleteItemConfirm:function(){var e=this,t={headers:{token:this.$store.state.token}};n.a.delete("periodos/".concat(this.id),t).then((function(){e.listarperiodos(),e.close(),e.corecto="PERIODO ELIMINADO CORECTAMENTE",e.msjAlerta(e.corecto)})).catch((function(e){console.log(e.msg)})),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.limpiar(),this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.limpiar(),this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},limpiar:function(){this.id="",this.nombrePeriodo="",this.nuemeroPeriodo=""},save:function(){var e=this,t=this;if(-1===this.editedIndex){var o={headers:{token:this.$store.state.token}};n.a.post("periodos",{nombrePeriodo:this.nombrePeriodo,nuemeroPeriodo:this.nuemeroPeriodo},o).then((function(){t.listarperiodos(),t.close(),t.limpiar(),t.corecto="PERIODO GUARDADO CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(t){e.valor=t.response.data.errors[0].param,console.log(e.valor),"nuemeroPeriodo"==e.valor?(e.mensaje1=t.response.data.errors[0].msg,e.error1(e.mensaje1)):(e.mensaje1=t.response.data.errors[0].msg,e.error(e.mensaje1))}))}else{var r={headers:{token:this.$store.state.token}};n.a.put("periodos/".concat(this.id),{nombrePeriodo:this.nombrePeriodo,nuemeroPeriodo:this.nuemeroPeriodo},r).then((function(){console.log("editanmdo"),t.listarperiodos(),t.close(),t.corecto="PERIODO EDITADO CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(e){console.log(e.msg)}))}this.close()}}},d=c,u=o("2877"),m=o("6544"),v=o.n(m),E=o("8336"),h=o("b0af"),f=o("99d9"),b=o("62ad"),O=o("a523"),p=o("8fea"),P=o("169a"),D=o("ce7e"),R=o("132d"),I=o("0fd9"),g=o("2fa4"),x=o("8654"),C=o("71d9"),k=o("2a7f"),T=Object(u["a"])(d,r,i,!1,null,null,null);t["default"]=T.exports;v()(T,{VBtn:E["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:b["a"],VContainer:O["a"],VDataTable:p["a"],VDialog:P["a"],VDivider:D["a"],VIcon:R["a"],VRow:I["a"],VSpacer:g["a"],VTextField:x["a"],VToolbar:C["a"],VToolbarTitle:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0ea10f.ca300046.js.map