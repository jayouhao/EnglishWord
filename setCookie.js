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



wait a moment

//清楚小数点   取小数点
var clear=(s)=>parseInt(Number(s)*10000)/10000;


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