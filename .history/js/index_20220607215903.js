// 使用哪一个事件?
// 使用onscroll
// 如何获取滚动条的位置?
// 获取pc端滚动条位置:document.documentElement.scrollTop
// 获取移动端滚动条位置:document.body.scrollTop


window.onload=function(){
    document.onscroll=function(){
        //获取滚动条位置
        let s1 =document.documentElement.scrollTop;
        let s2=document.body.scr
    }
}