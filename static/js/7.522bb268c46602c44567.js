webpackJsonp([7],{"6p3m":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("woOf"),l=o.n(i),n=o("ZYmg"),a={name:"Edit",data:function(){return{blogId:null,editBlog:{title:"",description:"",content:"",atIndex:!1}}},created:function(){var t=this;this.blogId=this.$route.params.blogId,n.a.getDetail({blogId:this.blogId}).then(function(e){l()(t.editBlog,e.data)})},methods:{onEdit:function(){var t=this;n.a.updataBlog({blogId:this.blogId},this.editBlog).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"edit"}},[o("h1",[t._v("编辑文章")]),t._v(" "),o("el-form",{ref:"form",model:{value:t.editBlog,callback:function(e){t.editBlog=e},expression:"editBlog"}},[o("el-form-item",{attrs:{label:"文章标题"}},[o("el-input",{attrs:{type:"text",maxlength:"40","show-word-limit":""},model:{value:t.editBlog.title,callback:function(e){t.$set(t.editBlog,"title",e)},expression:"editBlog.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"内容简介"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},maxlength:"140","show-word-limit":""},model:{value:t.editBlog.description,callback:function(e){t.$set(t.editBlog,"description",e)},expression:"editBlog.description"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"文章内容"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30}},model:{value:t.editBlog.content,callback:function(e){t.$set(t.editBlog,"content",e)},expression:"editBlog.content"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"是否展示在首页"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.editBlog.atIndex,callback:function(e){t.$set(t.editBlog,"atIndex",e)},expression:"editBlog.atIndex"}})],1),t._v(" "),o("el-form-item",[o("el-button",{on:{click:t.onEdit}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var d=o("VU/8")(a,s,!1,function(t){o("ggEC")},null,null);e.default=d.exports},ggEC:function(t,e){}});
//# sourceMappingURL=7.522bb268c46602c44567.js.map