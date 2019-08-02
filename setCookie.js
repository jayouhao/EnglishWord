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
        var r = window.location.hash.split("?")[1].match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    loca('name')




    检验手机号码
    var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    var patternPhone = new RegExp(regPhone);
    !patternPhone.test(phoneNum); 请输入正确的手机号码





    



    下拉更新

    <p class="pullnew">{{pullnew}}</p>

   .pullnew {
  font-size: 0.4rem;
  padding: 0.6rem 0;
  text-align: center;
}

    mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  //下拉更新  vue下拉更新 下拉加载
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        //请求数据接口
        this.list.length > 9 ? (this.page++,this.request(this.page)) : "";
        return false;
      }
    },


    判断
    if(res.data.code==0&&res.data.info.length>0){
        var he=()=>{
            for(var i=0; i<res.data.info.length; i++){
              this.items.push(res.data.info[i])
            }
        }
        !s&&res.data.info.length<19?(this.items=res.data.info,this.newxin="已加载完所有数据"):
        !s&&res.data.info.length>19?(this.items=res.data.info,this.newxin="下拉更新"):"";
        s&&res.data.info.length<19?(he(),this.newxin="已加载完所有数据")
        :s?(he(),this.newxin="下拉更新"):'';
    }else{
      !s?(this.newxin="",this.items = []):this.newxin="已加载完所有数据";
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



阻止冒泡
e.stopPropagation();

js修改伪类
var dom = document.getElementsByClassName("icon-right");
        document.styleSheets[0].addRule('.icon-right::before', 'z-index:0 !important');

跳转
onclick="window.location.href='html'"
onclick="window.history.go(-1)"


弹出
this.$createToast({txt: 'Plain txt',type: 'txt',time:1100}).show();
      


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




 
                
