!function () {
    var duration = 20
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
let code = `
/* 
 * 你好，我是阿经
 * 下面我用CSS来画一只皮卡丘
 */

/* 
 * 先画皮卡丘的皮
 */
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
    box-shadow: 10px 10px 5px #888888;
}

.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
.wrapper > :not(:last-child){
    z-index: 1;
}

/* 
 * 再画一下皮卡丘的鼻子
 */
.nose{
    width: 0;
    height: 0;
    border: 22px solid ;
    border-width: 20px 22px;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translate(-50%);
}

/* 
 * 然后画一下皮卡丘的眼睛
 */
.eye{
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2E2E2E;
    position: absolute;
    border: 2px solid black;
}

/* 
 * 眼睛里的珠子
 */
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    border: 1px solid black;
    left: 5px;
}
/* 
 * 左眼在左边（废话）
 */
.eye.left{
    right: 50%;
    margin-right: 85px;
}

/* 
 * 右眼在右边（废话）
 */
.eye.right{
    left: 50%;
    margin-left: 85px;
}

/* 
 * 接下来画皮卡丘的脸蛋
 */
.face{
    position: absolute;
    top: 85px;
    width: 68px;
    height: 68px;
    border: 2px solid black;
    background: #FC0D1C;
    border-radius: 50%;
}

/* 
 * 将脸蛋放到正确的位置
 */
.face.left{
    right: 50%;
    margin-right: 110px;
}

.face.right{
    left: 50%;
    margin-left: 110px;
}

/* 
 * 然后画上嘴唇
 */
.upperLip{
    position: absolute;  
    top: 60px;
    width: 64px;
    height: 20px;
    border: 2px solid black;
    border-top: none;
    background: #FEE433;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-25deg);
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(25deg);
}

/* 
 * 画下嘴唇
 */
.lowerLip-wrapper{
    height: 130px;
    width: 139px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -30px;
    overflow: hidden;
    border-radius: 40%;
}
.lowerLip{
    width: 139px;
    height: 900px;
    border-radius: 100px/500px;
    border: 2px solid black;
    position: absolute;
    bottom: 0px;
    background: #990513;
    z-index: -1;
    overflow: hidden;
}

/* 
 * 最后画皮卡丘的小舌头
 */
.lowerLip::after{
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    background: #Fc4a62;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 45%;
}

/* 
 * 好了，这只皮卡丘送给你，喜欢吗？
 */`
    writeCode('',code)
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 50
                break
            case 'normal':
                duration = 20
                break
            case 'fast':
                duration = 0
                break
        }
    })
}.call()