document.addEventListener("DOMContentLoaded", function(event){

    function DomElement( selector, height, width, bg, fontSize ){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    
    };
    DomElement.prototype.addElement = function (selector,text) {
        let body = document.querySelector('body');
        let script = document.querySelector('script');
        if (selector[0] === '.') {
            let itemDiv = document.createElement('div');
            itemDiv.textContent = ''+text;
            itemDiv.classList.add(selector.substring(1));
            itemDiv.style.cssText = 'height: 100px; width: 100px; background-color: yellow; font-size: 250%; position: absolute;';
            // itemDiv.addEventListener('keypress',onkeydown.bind(DomElement));
            body.insertBefore(itemDiv,script);
            
        } else if (selector[0] === '#') {
            let itemP = document.createElement('p');
            itemP.textContent = ''+text;
            itemP.id = selector.substring(1);
            itemP.style.cssText = 'height: 100px; width: 100px; background-color: yellow; font-size: 250%;';
            body.insertBefore(itemP,script);
        }
    };
   
    move = function (event) {
        let item = document.querySelector('.divItems');
        // console.log('событие');

        let code =  event.key;    
        // let code = event.key || event.charCode;    
        // console.log( code);
                // if (code !== 37 && code !== 39 && code !== 38 && code !== 40)
                
                //         return;
                // // <-
                if (code === 'ArrowLeft') {
                    console.log('<');
                    // item.style.left -=  100  + 'px';
                    item.style.left = (item.offsetLeft) -10  + 'px'; //от границы слева
                    // console.log('item.style.left: ', item.style.left);
                }
                // up
                if (code === 'ArrowUp') {
                    console.log('up');
                    item.style.top = (item.offsetTop) - 10  + 'px';//от границы сверху 
                    // console.log('item.style.left: ', item.style.top);
    
                    
                }
                // ->
                if (code === 'ArrowRight') {
                    console.log('>');
                    // item.style.left += 100 + 'px';
                    item.style.left = (item.offsetLeft) + 10  + 'px';
                    // item.style.left = item.offsetRight+ (code === 39 ? -10 : 10) + 'px';
    
                }
                //down
                if (code === 'ArrowDown') {
                    console.log('down');
                    item.style.top = (item.offsetTop) + 10  + 'px';
    
                    
                }
        
                
        
    };

    let element = new DomElement();
    element.addElement('.divItems','test');
    let item = document.querySelector('.divItems');


    document.addEventListener('keydown',move);

});





    