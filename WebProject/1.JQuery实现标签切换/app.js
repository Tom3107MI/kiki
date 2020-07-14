var timeoutid;
$(document).ready(function () {
  $("#tab li").each(function (index) {
    var liNode = $(this);
    $(this)
      .mouseover(function () {
        timeoutid = setTimeout(function () {
          //使用匿名函数,避免程序报错
          $("div.content").removeClass("content");
          $("#tab li.tabfirst").removeClass("tabfirst");
          $("div").eq(index).addClass("content");
          liNode.addClass("tabfirst");
        }, 200);
      })
      .mouseout(function () {
        clearTimeout(timeoutid);
      });
  });
  $(".contentbody").hide();
  //$("#tab-ul li").removeClass("tabsecond");
  $("#tab-ul li").each(function (index) {
    $(this)
      .mouseover(function () {
        $(".contentbody").show();
        $("#tab-ul li").eq(index).addClass("tabsecond");
        $(".contentbody").load("hello.html");
      })
      .mouseout(function () {
        $(".contentbody").hide();
        $("#tab-ul li").eq(index).removeClass("tabsecond");
      });
  });
});
