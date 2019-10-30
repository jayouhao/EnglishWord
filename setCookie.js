    function setCookie(name, value)//设置cookie  7天
    {        
        var exp = new Date();
        exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    setCookie("name", phoneNum);
    
 function getCookie(name){
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    getCookie('name')



    //设置location
     this.$router.push({path:"register",query:{id:1,bt:2,cc:"撒地方"}})
     
   function loca(name) {
        if (!window.location.search) return null;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");        
        var r = window.location.search.split("?")[1].match(reg);
        if (r != null) return unescape(r[2]); return null;
      }
    loca('name')

    core.getParame('pan')




    检验手机号码
  ismobile(s){
    var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    var patternPhone = new RegExp(regPhone);
    if(patternPhone.test(s)){
      return true
    }else{
      return false
    }
  },




    下拉更新

    <p class="pullnew">{{pullnew}}</p>

.pullnew {
  font-size: 0.34rem;
  padding: 0.4rem 0;
  text-align: center;
}

    mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  //下拉更新  vue下拉更新 下拉加载

handleScroll(){
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + windowHeight == scrollHeight) {
      //请求数据接口
      if(this.state){
        this.page++;
        this.start();
      }
    }
  },


beforeDestroy(){
    window.removeEventListener("scroll", this.handleScroll, true);
  }
  

判断
.then(res=>{
    this.state = true;
     if(res.data.code==0){
        for (var i = 0; i < res.data.info.length; i++) {
          this.info.push(res.data.info[i]);
        }
        if (res.data.info.length < 10) {
          this.state = false;
          this.pullnew = "已加载完所有数据";
        } else {
          this.pullnew = "下拉更新";
        }
        if(this.page==1&&res.data.info.length<1){
          this.pullnew = "暂无数据";
        }
    }
})


not vue

  function handleScroll() {      
      var scrollTop =document.getElementsByClassName('screenHeight')[0].scrollTop;
      var windowHeight =document.getElementsByClassName('screenHeight')[0].clientHeight;
      var scrollHeight =document.getElementsByClassName('screenHeight')[0].scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
          //请求数据接口
          if (state) {
              page++;
              requ(type)
          }
      }
  }
      window.addEventListener("scroll", handleScroll, true);



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
  
this.$toast.loading({message:'',duration:1400,type: 'text'});
this.$toast.loading({message:res.data.msg,duration:1400,type: 'text'});

this.$toast.loading({message:'正在上传',duration:0,loadingType: 'spinner '});

this.$toast.success({message:'成功退出',duration:1200});
this.$toast.fail({message:'上传失败',duration:1200});

this.$toast.success({message:res.data.msg,duration:1200});
this.$toast.fail({message:res.data.msg,duration:1200});


this.$toast.clear();

vant.Toast({duration: 1300,message: '提示'});

写js  axios
this.$toast.loading({message:'正在提交',duration:0,loadingType: 'spinner '});
.then(res=>{
    if(res.data.code==0){
      this.$toast.success({message:res.data.msg,duration:1600});
      setTimeout(()=>{
        this.$router.back();
      },1600)
    }else{
      this.$toast.fail({message:res.data.msg,duration:1200});
    }
  })



<script src="../js/layer.js"></script>
layer.open({content: res.data.msg,skin: 'msg',time:1});

this.$createToast({txt: "",type: "txt",time:1200}).show();

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

var sum = rs.limit_time;
function diao() {
    var time = parseInt(sum / 3600);
    var minute = parseInt(sum / 60) - (time * 60);
    var sec = sum - (minute * 60) - (time * 3600);
    time < 10 ? (time = "0" + time) : "";
    minute < 10 ? (minute = "0" + minute) : "";
    sec < 10 ? (sec = "0" + sec) : "";
    timedom.text(`${time}:${minute}:${sec}`);
};
diao();

var times = setInterval(() => {
      if (sum <= 0) {
          clearInterval(times);
          timedom.css({ display: "none" });
          pudom.css({ display: "block" });
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




      var num = getQueryString("num");
  var cid = getQueryString("cid");
  var order_id = getQueryString("order_id");



禁止点击
pointer-events: none;

禁止复制
document.oncopy = function(){
  return false;
}


乘法浮点运算  精度
//加 
function floatAdd(arg1,arg2){ 
  var r1,r2,m; 
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
  m=Math.pow(10,Math.max(r1,r2)); 
  return (arg1*m+arg2*m)/m; 
} 
   
//减 
function floatSub(arg1,arg2){ 
 var r1,r2,m,n; 
 try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
 try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
 m=Math.pow(10,Math.max(r1,r2)); 
 //动态控制精度长度 
 n=(r1>=r2)?r1:r2; 
 return ((arg1*m-arg2*m)/m).toFixed(n); 
} 
   
//乘 
function floatMul(arg1,arg2) { 
 var m=0,s1=arg1.toString(),s2=arg2.toString(); 
 try{m+=s1.split(".")[1].length}catch(e){} 
 try{m+=s2.split(".")[1].length}catch(e){} 
 return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m); 
} 
   
   
//除 
function floatDiv(arg1,arg2){ 
  var t1=0,t2=0,r1,r2; 
  try{t1=arg1.toString().split(".")[1].length}catch(e){} 
  try{t2=arg2.toString().split(".")[1].length}catch(e){} 
    
  r1=Number(arg1.toString().replace(".","")); 
  
  r2=Number(arg2.toString().replace(".","")); 
  return (r1/r2)*Math.pow(10,t2-t1); 
}


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

点点一行
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;


  排序
  white-space: pre-wrap;
  换行
  word-break: break-all;


判断app 手机  判断判断
if (/LT-APP/.test(navigator.userAgent)) {
  alert("在APP内");
} else {
  alert("不在APP内");
}


  

上传图片  图片图片

    upImg(e) {
          var ts = this;
          var file = e.target.files[0];
          let fd = new FormData();
          fd.append("file", file);     
    axios.post(api + "index/Upload/uploadImg",fd
    )

axios.defaults.timeout = 10000 // 超时时间

axios.interceptors.response.use((res) =>{
    // 用户信息是否超时，重定向到登录页面  请求拦截
  if(res.data.code==-2){
    Toast.loading({message:res.data.msg,duration:0,loadingType: 'spinner '});
    setTimeout(()=>{
      console.log(router.history.current.path)
      if(router.history.current.path!='/signlogin'){
        Toast.loading({message:"正在跳登录页",duration:0,loadingType: 'spinner '});
        setTimeout(()=>{
          Toast.clear();
          router.replace("signlogin");
        },600)
      }
    },1200)
    return;
  }
  return res;
}, (error) =>{
    // Do something with response error
})



v-cloak

google  翻译
class="notranslate"  添加类名，禁止google翻译

:class="egls?'':'notranslate'"


canvas转imgimg  保存图片
this.$refs.imgsave.childNodes[0].toDataURL('image/png')
jsBridge.saveImageToAlbum(this.$refs.imgsave.childNodes[0].toDataURL('image/png'), function(succ) {
  succ ? this.$toast.success({message:'保存成功',duration:1200}) : this.$toast.fail({message:'保存失败：转码失败或没有相册使用权限',duration:1200});
});

删除数组 array

for(var i=0; i<this.list.length; i++){
    if(this.list[i].id==id){
      this.list.splice(i,1);
    }
  }


a标签
a{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}

禁止输入中文中文
this.address=s.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g,'');




