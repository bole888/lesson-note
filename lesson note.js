<script>

/* 常用的键盘事件有两个
    键盘按下
      keydown
    键盘弹起
      keyup
 */
/* 在文本域里面注册键盘事件 */
let txt = document.getElementById('txt');
txt.onkeydown = function(){
  console.log('键盘按下了');
}

txt.onkeyup = function(){
  console.log('键盘松开');
}

-----------------------------{/*  */}
微博案例:

/* 效果：
          点击发布按钮，会把文本域里面的内容，作为ul的子元素创建
      步骤：
        1. 获取元素
          - 按钮
          - 文本域
          - ul
        2. 注册点击事件

        3. 动态创建一个新的li，放到ul里面
     */

    // 获取元素
    let btn = document.querySelector('.weibo-btn');
    let text = document.querySelector('.weibo-text');
    let list = document.querySelector('.weibo-list');
    //  let first = document.querySelector('li:first-child');

    // 注册点击事件
    btn.onclick = function () {
        // 先得到文本域的内容 - 文本域是一个表单元素，获取表单元素的内容 使用value属性
        let content = text.value;
        console.log(content);
        // 创建一个新的li，放到ul里面
        let li = document.createElement('li');
        // 给li添加内容
        li.innerHTML = '<p>' + content + '</p><span>删除</span>';
        // 手动添加 - 放到最前面
        let first = document.querySelector('li:first-child'); // 每次添加之后，新的元素会作为第一个，所以每次都要重新获取
        list.insertBefore(li, first);
        // 第二个做法是： 在外面先获取一次，每次添加之后，把第一个修改为新的那一个
        // first = li;
        // 把文本域清空
        text.value = '';

        // 新建了新的li，里面的span是没有注册事件的，所以我们重新的把所有的span再来注册事件就性了
        regDelEvent();
    }


    /* 实现删除 */
    /*
       点击 删除 这个span，就把对应的li，从ul里面移除就行
    */
    function regDelEvent() {
        // 获取所有的用于删除的span
        let dels = document.querySelectorAll('.weibo-list span');
        // 给span注册点击事件
        for (let i = 0; i < dels.length; i++) {
            dels[i].onclick = function () {
                // 获取对应 li，移除
                // 可以根据索引获取对应li
                // li和span是什么关系 ——父子关系
                // 可以通过span找到我的父元素
                // console.log(this.parentNode);
                list.removeChild(this.parentNode);
            }
        }
    }
    regDelEvent();









</script>