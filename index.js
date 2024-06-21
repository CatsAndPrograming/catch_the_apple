var loading = document.createElement('p');
loading.style.top='50%';
loading.style.left='50%';
loading.style.fontSize='40px';
loading.style.position='absolute';
loading.innerHTML='Loading...';
document.body.appendChild(loading);


function import_script(src, id){
    let element = document.createElement("script");
    element.src=src;
    element.id=id;
    document.body.appendChild(element);
    return 0;
}

function listener(id, fs=function(){console.error('listener function error: function == null');}, event='click'){
    document.getElementById(id).addEventListener(event, fs);
    return 0;
}
/*
var play=true;
var global_width=0;
var global_height=0;
let elm = getComputedStyle(document.getElementById('screen_size'))
global_width = parseInt(elm.getPropertyValue('width').replace('px', ''));
global_height = parseInt(elm.getPropertyValue('height').replace('px', ''));*/

function isLocalStorageAvailable(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function load_data(){
    if(isLocalStorageAvailable()){
        if(localStorage.getItem("best_score_mvc_apple_catch") == null){
            return 0;
        } else{
            return parseInt(localStorage.getItem("best_score_mvc_apple_catch"));
        }
    }else{
        return 0;
    }
}

function set_data(val){
    if(isLocalStorageAvailable()){
        localStorage.setItem("best_score_mvc_apple_catch", val.toString());
    }
}

var pastw=0;
var pasth=0;
var play=false;

function calc_procent(p, sum){
    let g = p*sum;
    return g/100;
}

var canvas = document.getElementById('game_canvas');
var screen = canvas.getContext("2d");
screen.imageSmoothingEnabled =false;

document.addEventListener('contextmenu', event => event.preventDefault());
var score = 0;//make game saving
var best_score=0;
best_score = load_data();
var apple_count = 0;
var i =0;

function rotate_image(img, angle){
    let cnv = document.createElement('canvas');
    cnv.width=img.width;
    cnv.height=img.height;
    let ctx = cnv.getContext("2d");
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    let data_url = cnv.toDataURL('image/png');
    cnv.remove();
    return data_url;
}
var allow = false;

var global_height = 0;
var global_width = 0;
/*
function data_update(){
    let elm = getComputedStyle(document.getElementById('screen_size'))
    global_width = parseInt(elm.getPropertyValue('width').replace('px', ''));
    global_height = parseInt(elm.getPropertyValue('height').replace('px', ''));
    canvas.style.width=global_width+'px';
    canvas.style.height=global_height+'px';
}

data_update()
var data_interval = setInterval(data_update, 10);
canvas.style.width=global_width+'px';
canvas.style.height=global_height+'px';*/

import_script('js/images.js', 'img_loading');
