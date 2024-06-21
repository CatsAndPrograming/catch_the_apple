class rect{
    constructor(left, dtop, width, height){
        this.left=left;
        this.top=dtop;
        this.width=width;
        this.height=height;
    }
    collide(rect){
        return rect.left + rect.width > this.left &&
               this.left + this.width > rect.left &&
               rect.top + rect.height > this.top &&
               this.top + this.height > rect.top;
    }
}



class sprite{
    constructor(img, left, dtop, width, height, elm){
        this.left=left;
        this.top=dtop;
        this.width=width;
        this.height=height;
        //this.position='absolute';
        this.rect = new rect(this.left, this.top, this.width, this.height);
        //this.html=document.createElement('img');
        this.img=img;
        //this.html.src=this.path;
        //this.parent=elm;
        //this.parent.appendChild(this.html);
        this.update();
    }
    rectUpdate(){
        this.rect = new rect(this.left, this.top, this.width, this.height);
    }
    htmlUpdate(){
        /*this.html.style.left=this.left+'px';
        this.html.style.top=this.top+'px';
        this.html.style.width=this.width+'px';
        this.html.style.height=this.height+'px';
        this.html.style.position=this.position;*/
        if(!this.img){return;}
        screen.drawImage(this.img, this.left,this.top, this.width, this.height);
    }
    update(){
        this.rectUpdate();
        this.htmlUpdate();
    }
    collide(otherSprite){
        return this.rect.collide(otherSprite.rect);
    }
}