var posts=["2024/10/18/JP大学习/","2024/08/03/amazon/","2024/08/03/hello-world/","2024/09/10/亚马逊自学/","2024/08/19/卖家大学/","2024/11/29/优先准备/","2024/11/12/商城支付/","2024/08/13/操作系统/","2024/11/17/重要/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };