// document.addEventListener("DOMContentLoaded", function(){
//     element.addElement('.items','test');
// });

function DomElement( selector, height, width, bg, fontSize ){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

}
DomElement.prototype.addElement = function (selector,text) {
    let body = document.querySelector('body');
    let script = document.querySelector('script');
    if (selector[0] === '.') {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = ''+text;
        itemDiv.classList.add(selector.substring(1));
        itemDiv.style.cssText = 'height: 100px; width: 100px; background-color: yellow; font-size: 250%; position: absolute;';
        body.insertBefore(itemDiv,script);
        
    } else if (selector[0] === '#') {
        let itemP = document.createElement('p');
        itemP.textContent = ''+text;
        itemP.id = selector.substring(1);
        itemP.style.cssText = 'height: 100px; width: 100px; background-color: yellow; font-size: 250%;';
        body.insertBefore(itemP,script);
    }
}

let element = new DomElement();
console.log('element: ', element);
console.log('element: ', element.hasOwnProperty('addElement'));

// первая часть
element.addElement('#text','test');
element.addElement('.items','test');


onkeydown = function (event) {

            let code = event.keyCode || event.charCode;    
            if (code != 37 && code != 39 && code !==38 && code !==40)
                    return;

            let prop = document.getElementById('kvadr');
    
            prop.style.left = prop.offsetLeft+ (code == 37 ? -10 : 10) + 'px';
    
        };
    