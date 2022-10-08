window.addEventListener('load',()=>{
    document.querySelectorAll('.m3ss-button').forEach((element,key)=>{
        console.log(element)
        m3ss.initBtn(element)
    })

})


class m3ss{
    constructor(){}
    static initBtn(button){
        //键盘触发
        button.addEventListener('click',(event)=>{
            if(event.pointerId != -1 && event.mozInputSource != 6){ return; }
            let radius = button.clientWidth > button.clientHeight ?
                         button.clientWidth :
                         button.clientHeight;

            let ripple = document.createElement('div')
            ripple.style.top = (button.clientHeight / 2) - 5 + "px";
            ripple.style.left = (button.clientWidth / 2) - 5 + "px";
            button.appendChild(ripple);
            ripple.setAttribute('class','m3ss-ripple');

            ripple.style.top = "-" + (radius * 1.2 - button.clientHeight) / 2 + "px";
            ripple.style.left = "-" + (radius * 1.2 - button.clientWidth) / 2 + "px";
            ripple.style.height = radius * 1.2 + "px";
            ripple.style.width = radius * 1.2 +"px";

            setTimeout(()=>{ ripple.style.opacity = 0; },100)
            setTimeout(()=>{ ripple.remove(); },1500)
        })

        //鼠标触发
        button.addEventListener('mousedown', (e)=>{
            //获取鼠标相对位置
            let innerx = e.clientX - button.offsetLeft;
            let innery = e.clientY - button.offsetTop;
    

            let radius = Math.sqrt(Math.pow(button.clientWidth,2) + Math.pow(button.clientHeight,2))
            console.log(radius)
            //生成一个圆，作为ripple效果
            let ripple = document.createElement('div')
            ripple.setAttribute('class','m3ss-ripple');

            //设置ripple初始位置
            ripple.style.left  = (innerx - 5) +'px';
            ripple.style.top = (innery - 5) + 'px';
            button.appendChild(ripple);
    
            //生成完成后，设置ripple大小至对角线，并将ripple放在中心点位置
            ripple.style.top = "-" + (radius - button.clientHeight) / 2 + "px";
            ripple.style.left = "-" + (radius - button.clientWidth) / 2 + "px";
            ripple.style.height = radius + "px";
            ripple.style.width = radius + "px";
    
            //放开鼠标或在固定时间后逐渐将ripple效果透明度降至0
            document.onmouseup = () => { ripple.style.opacity = 0; }
            setTimeout(()=>{ ripple.style.opacity = 0; },400)
    
            //固定时间后移除ripple效果对应dom节点
            setTimeout(()=>{ ripple.remove(); },1500)
        })
    }
}