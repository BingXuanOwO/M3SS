window.addEventListener('load',()=>{
    document.querySelectorAll('.m3ss-button').forEach((element,key)=>{
        console.log(element)
        m3ss.initBtn(element)
    })

})


class m3ss{
    constructor(){}
    static initBtn(button){
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

        button.addEventListener('mousedown', (e)=>{
            let innerx = e.clientX - button.offsetLeft;
            let innery = e.clientY - button.offsetTop;
    
            let radius = button.clientWidth > button.clientHeight ?
                         button.clientWidth :
                         button.clientHeight;
    
            let ripple = document.createElement('div')
            ripple.style.left  = (innerx - 5) +'px';
            ripple.style.top = (innery - 5) + 'px';

            ripple.setAttribute('class','m3ss-ripple');

            button.appendChild(ripple);
    
            ripple.style.top = "-" + (radius * 1.2 - button.clientHeight) / 2 + "px";
            ripple.style.left = "-" + (radius * 1.2 - button.clientWidth) / 2 + "px";
            ripple.style.height = radius * 1.2 + "px";
            ripple.style.width = radius * 1.2 +"px";
    
            document.onmouseup = () => { ripple.style.opacity = 0; }
    
            setTimeout(()=>{ ripple.style.opacity = 0; },400)
    
            setTimeout(()=>{ ripple.remove(); },1500)
        })
    }
}