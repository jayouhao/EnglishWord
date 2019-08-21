    function setCookie(name, value)//设置cookie  7天
    {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    setCookie("name", phoneNum);
    
 function getCookie(name)//拿到cookie
    {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    getCookie('name')



    //设置location
     this.$router.push({path:"register",query:{id:1,bt:2,cc:"撒地方"}})
     
    function loca(name)//拿到location
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");        
        var r = window.location.search.split("?")[1].match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    loca('name')

    core.getParame('pan')




    检验手机号码
    var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    var patternPhone = new RegExp(regPhone);
    !patternPhone.test(phoneNum); 请输入正确的手机号码





    



    下拉更新

    <p class="pullnew">{{pullnew}}</p>

.pullnew {
  font-size: 0.34rem;
  padding: 0.4rem 0;
  text-align: center;
}

    mounted:function() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  //下拉更新  vue下拉更新 下拉加载

    handleScroll:function(){
      var ts=this;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        //请求数据接口
        if(ts.state){
          ts.page++;
          ts.start();
        }                
      }
    },


判断
ts.state = true;
for (var i = 0; i < res.data.info.length; i++) {
  ts.videolist.push(res.data.info[i]);
}
if (res.data.info.length < 10) {
  ts.state = false;
  ts.pullnew = "已加载完所有数据";
} else {
  ts.pullnew = "下拉更新";
}






input框不自动补全 
普通
autocomplete="off" name="userName"
密码
autocomplete="new-password" name="password"
表单
autocomplete="off"                  



//清楚小数点   取小数点
var clear=(s)=>parseInt(Number(s)*10000)/10000;


浏览器返回键
jQuery(document).ready(function ($) {
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            location.replace("yqqsj.html");
        });
    }
    window.history.pushState('forward', null);
});



阻止冒泡冒泡冒泡
e.stopPropagation();

js修改伪类
var dom = document.getElementsByClassName("icon-right");
        document.styleSheets[0].addRule('.icon-right::before', 'z-index:0 !important');

跳转
onclick="window.location.href='html'"
onclick="window.history.go(-1)"



弹出  提示
vant.Toast({duration: 1300,message: '提示'});

layer.open({content: res.data.msg,skin: 'msg',time:1});

this.$createToast({txt: 'Plain txt',type: 'txt',time:1100}).show();
if(!self.mobile) return core.toast('请输入手机号');

请求
core.load("{:url('index/publics/get_new_notice')}", {}, function(res){
    console.log(res);
    if(res.code==0){
        self.mes=res.info;                        
    }else{
        core.toast(res.msg);
    }
})

      


倒计时       import { setInterval, clearInterval } from "timers";
var sum = 10000;
function diao(){    
  console.log("要改的东西");
};
diao();      
var times = setInterval(() => {
    if (sum <= 0) {
        clearInterval(times); 
    } else {
        diao();
        sum--;
    }
}, 1000);


颜色渐变
background: -webkit-gradient(linear, left top, left bottom, from(#cd9f4c), to(#efe8a5));
中间
background: -webkit-radial-gradient(red, green, blue);


图片上传
accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
$("#file").change(function(){
    var $this = $(this);
    var file = this.files[0];
    if(file.length == 0)
    {
      mui.alert("请选择要上传的图片");
      return false;
    }
    var data = new FormData();
    data.append('image',file);
    // console.log(data);return false;
    mui.showLoading("正在上传...");
    $.ajax({
      url:"/index/upload/uploadEditor",
      type:"post",
      data:data,
      processData:false,
      contentType:false,
      dataType:'json',
      success:function(data){
        var url = data.data[0];
        if(data.errno == 0)
        {
          mui.hideLoading();
          $("#show").attr("src", url);
          $("#avatar").val(url);
        }
        else
        {
          mui.alert(data.fail);
        }
      }
    })
  })




      $(document).scroll(function () {
        var srollPos = $(document).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)

        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if (($(document).height() - range) <= totalheight) {
          console.log("底部")
        }
      })



禁止点击
pointer-events: none;

<script src="//g.yimenyun.ltd/cdn/jsbridge-mini.js"></script>
var text = "Hello 世界 "
jsBridge.setClipboardText(text);
alert("已复制到剪贴板");


刷新
location.reload();


button
background: linear-gradient(90deg, rgba(255, 190, 30, 1) 0%, rgba(251, 211, 62, 1) 100%);


垂直居中
align-items:center;


点点
overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;


  排序
  white-space: pre-line;


  判断app 手机
 var u = navigator.userAgent, app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器  
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端  
  console.log(isiOS, isAndroid, 'kkk')
  if(isiOS||isAndroid){
      window.location.href = 'login.html';
  }else{
      window.location.href = 'http://vfe.wzhigang.cn/YHEWy1';
  }