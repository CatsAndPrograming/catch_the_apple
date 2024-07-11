let lastTime = 0;

movement={
    right:0,
    left:0
}



var player = new sprite(basket_img, 200, 430, 115, 100);
var player_box = new sprite(null, 200, 490, 115, 40);

let reflect = false;
var speed = 625;

window.addEventListener("keydown", (event) => {
    if(!play){return}
    switch(event.key){
        case 'A':
        case 'a':
        case 'ArrowLeft':
            reflect=false;
            movement.left =speed;
            break;
        case 'D':
        case 'd':
        case 'ArrowRight':
            reflect=true;
            movement.right = speed;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    if(!play){return}
    switch(event.key){
        case 'A':
        case 'a':
        case 'ArrowLeft':
            movement.left = 0;
            break;
        case 'D':
        case 'd':
        case 'ArrowRight':
            movement.right = 0;
            break;
    }
})

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

var arr = document.getElementById('arr');
var arr2 = document.getElementById('arr2');
var pause=document.getElementById('pause');
var play_btn = document.getElementById('play_btn');
var a2 = document.getElementById('tlt_img');
var scr = document.getElementById('scre');
var home = document.getElementById('home');

var menu_interval = setInterval(function () {
    if(play){
        home.style.display='none';
    }
    document.getElementById('fullscreen').style.display='block';
    document.getElementById('home_btn').style.fontSize=(window.innerHeight/10)+'px';
    document.getElementById('resume').style.fontSize=(window.innerHeight/10)+'px';
    document.getElementById('scoree').style.fontSize=(window.innerHeight/10)+'px';
    document.getElementById('del_btn').style.fontSize=(window.innerHeight/13)+'px';
    document.getElementById('title').style.fontSize=(window.innerHeight/8)+'px';
    document.getElementById('game_over').style.fontSize=(window.innerHeight/9)+'px';
    document.getElementById('home_btn2').style.fontSize=(window.innerHeight/10)+'px';
    document.getElementById('fullscreen').style.width=(window.innerHeight/7)+'px';
    document.getElementById('fullscreen').style.height=(window.innerHeight/7)+'px';
    document.getElementById('instructions').style.fontSize=(window.innerHeight/20)+'px';
    pause.style.height=(window.innerHeight/6)+'px';
    pause.style.width=(window.innerHeight/6)+'px';
    play_btn.style.width=(window.innerHeight/5)+'px';
    play_btn.style.height=(window.innerHeight/5)+'px';
    play_btn.style.display='block';
    scr.innerHTML='Best Score: '+best_score;
    if(play && window.mobileCheck()){
        arr.style.width=(window.innerHeight/5)+'px';
        arr.style.height=(window.innerHeight/5)+'px';
        arr.style.bottom='20%';
        arr.style.left='5%';
        arr.style.zIndex=5;
        arr2.style.width=(window.innerHeight/5)+'px';
        arr2.style.height=(window.innerHeight/5)+'px';
        arr2.style.bottom='20%';
        arr2.style.zIndex=5;
        arr2.style.right='5%';
        arr.style.display='block';
        arr2.style.display='block';
    }else{
        arr.style.display='none';
        arr2.style.display='none';
    }
})
var img_elements= document.getElementsByTagName('img');
for (let index = 0; index < img_elements.length; index++) {
    img_elements[index].setAttribute('draggable', false);
   }
arr.addEventListener('mousedown', function () {
    reflect=false;
    movement.left = speed;
})

arr.addEventListener('touchstart', function () {
    reflect=false;
    movement.left = speed;
})

arr2.addEventListener('mousedown', function(){
    reflect=true;
    movement.right = speed;
})

arr2.addEventListener('touchstart', function(){
    reflect=true;
    movement.right = speed;
})

arr.addEventListener('mouseup', function(){
    movement.left = 0;
})

arr.addEventListener('touchend', function(){
    movement.left = 0;
})


arr2.addEventListener('mouseup', function(){
    movement.right=0;
})

arr2.addEventListener('touchend', function(){
    movement.right=0;
})

function del_progress(){
    if(confirm('Do you want to delete your progress?')){
        set_data(0)
        best_score=0;
        return
    } else{
        return
    }
}
var paused = false;
var backup = {apples: [], enemy: []}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

var fullscreen_tgl=0;
function fullscreen_logic(){
    if(fullscreen_tgl == 0){
        openFullscreen(document.documentElement);
        document.getElementById('fullscreen').src='img/unfullscreen.png';
        fullscreen_tgl=1;
    } else if(fullscreen_tgl==1){
        closeFullscreen();
        document.getElementById('fullscreen').src='img/fullscreen.png';
        fullscreen_tgl=0;
    }
}

function show_pause_menu(){
    allow=false;
    paused=true;
    document.getElementById('pause_menu').style.display='block';
    document.getElementById('black_screen').style.display='block';
    document.getElementById('instructions').style.display='none';
    play=false;
    backup.apples=apple_sprites;
    backup.enemy=enemy_sprites;
}
function hide_pause_menu(){
    document.getElementById('pause_menu').style.display='none';
    document.getElementById('black_screen').style.display='none';
    document.getElementById('instructions').style.display='block';
    apple_sprites=backup.apples;
    enemy_sprites=backup.enemy;
    paused=false;
    play=true;
    allow=false;
}
function go_home_menu(){
    document.getElementById('pause_menu').style.display='none';
    document.getElementById('black_screen').style.display='none';
    document.getElementById('gm_over_screen').style.display='none';
    play=false;
    allow=false;
    menu_play();
}


function make_tree_order(){
    let options = ['tree_1', 'tree_2', 'tree_3', 'tree_4', 'tree_5']//, 'tree_6'];
    let temp = options.slice();
    let result = [];
    let random = 0;
    while(temp.length > 0){
        random = Math.floor(Math.random()*temp.length)
        result.push(temp[random]);
        temp.splice(random,1);
    }
    return result;
}

function get_random_apple_type(){
    let options=[];
    for (let index = 0; index < apples.length; index++) {
        if(apples[index][1] > score || apples[index][1] == 0){
            options.push(apples[index]);
        }
        
    }
    let wanted = options[Math.floor(Math.random()*options.length)];
    return wanted;
}

function get_random_enemy_type(){
    let options=[];
    for (let index = 0; index < enemy.length; index++) {
        if(enemy[index][1] > score || enemy[index][1] == 0){
            options.push(enemy[index]);
        }
        
    }
    let wanted = options[Math.floor(Math.random()*options.length)];
    return wanted;
}


var dirt_sprites = [];
var tree_order=[];
var tree_sprites = [];
var apples_tree=[];
var apple_sprites=[];
var enemy_sprites=[];
var game_s=false;
function game_start(){
    score=0;
    //tree_order=make_tree_order();
    i=0;
    dirt_sprites=[];
    tree_sprites=[];
    while(i< 7){
        dirt_sprites.push(new sprite(dirt, i*180, 530, 180, 70));
        dirt_sprites[i].update();
        i++;
    }
    /*i=0;
    while(i<tree_order.length){
        tree_sprites.push(new sprite(tree[tree_order[i]], 190*i ,600-70-tree_data[tree_order[i]][1], tree_data[tree_order[i]][0], tree_data[tree_order[i]][1]));
        tree_sprites[i].update();
        i++;
    }*/
   i=0
   while(i < 1160){
    tree_sprites.push(new sprite(cute_tree[Math.floor(Math.random()*3)], i*410, 11, 400, 521));
    tree_sprites[i].update();
    apples_tree.push(new sprite(apl, i*410, 0, 400, 240));
    i++
   }
   apple_sprites=[];
   enemy_sprites=[];
   player = new sprite(basket_img, 200, 430, 115, 100);//, document.getElementById('game'));
   player_box = new sprite(null, 200, 490, 115, 40);
   apple_count=0;
   play = true;
   game_s=true;
   pause.style.display='block';
   paused=false;
   document.getElementById('black_screen').style.display='none';
   document.getElementById('gm_over_screen').style.display='none';
   document.getElementById('instructions').style.display='block';
   requestAnimationFrame(animate);
   return;
}

function menu_play(){
    document.getElementById('black_screen').style.display='none';
    document.getElementById('gm_over_screen').style.display='none';
    document.getElementById('home').style.display='block';
    pause.style.display='none';
    screen.fillStyle = "#8ac8ff";
    screen.fillRect(0, 0, 1160, 600);
    i=0;
    dirt_sprites=[];
    tree_sprites=[];
    while(i< 7){
        dirt_sprites.push(new sprite(dirt, i*180, 530, 180, 70));
        dirt_sprites[i].update();
        i++;
    }
    /*i=0;
    while(i<tree_order.length){
        tree_sprites.push(new sprite(tree[tree_order[i]], 190*i ,600-70-tree_data[tree_order[i]][1], tree_data[tree_order[i]][0], tree_data[tree_order[i]][1]));
        tree_sprites[i].update();
        i++;
    }*/
   i=0
   while(i < 1160){
    tree_sprites.push(new sprite(cute_tree[Math.floor(Math.random()*3)], i*410, 11, 400, 521));
    tree_sprites[i].update();
    apples_tree.push(new sprite(apl, i*410, 0, 400, 240));
    i++
   }
   canvas.style.width="100%";
   canvas.style.height="100%";
}

function generate_apple(){
    if(!game_s){return}
    let apple_posy = Math.floor(Math.random()*71)
    apple_posy+=30;
    let apple_posx = Math.floor(Math.random()*1151);
    let apple_type = get_random_apple_type();
    apple_sprites.push({
        sprite: new sprite(apple_type[0], apple_posx, apple_posy, 40, 45),
        name: apple_type[2],
        xp: apple_type[3],
        angle: 1//forget about it :)
    });
    return;
}

function generate_enemy(){
    let posy = Math.floor(Math.random()*71)
    posy+=50;
    let posx = Math.floor(Math.random()*1151);
    let enemy_type = get_random_enemy_type();
    enemy_sprites.push({
        sprite: new sprite(enemy_type[0], posx, posy, 50, 50),
        name: enemy_type[2],
        angle: 1
    });
    return;
}
function del_temp_data(){
    dirt_sprites = [];
    tree_order=[];
    tree_sprites = [];
    apples_tree=[];
    apple_sprites=[];
    enemy_sprites=[];
}

function gm_over(){
    if(paused){return}
    pause.style.display='none';
    play=false;
    game_s=false;
    allow=false;
    dirt_sprites = [];
    tree_order=[];
    tree_sprites = [];
    apples_tree=[];
    apple_sprites=[];
    enemy_sprites=[];
    apple_count=0;
    document.getElementById('black_screen').style.display='block';
    document.getElementById('gm_over_screen').style.display='block';
    //alert("game over");
    //location.reload();
}



loading.remove();

var first=0;

function animate(currentTime) {
    if(!play){requestAnimationFrame(animate);return;}
    if(paused){requestAnimationFrame(animate);return;}
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    let temp_left=0;
    screen.fillStyle = "#8ac8ff";
    screen.fillRect(0, 0, 1160, 600);
    temp_left+=movement.right;
    temp_left-=movement.left;
    if(movement.left!=0 && pause.style.display == 'block' || movement.right!=0 && pause.style.display=='block'){
        document.getElementById('instructions').style.display='none';
        allow=true;
    }
    i=0;
    while(i<tree_sprites.length){
        tree_sprites[i].update();
        apples_tree[i].update();
        i++;
    }
    if(reflect){
        player.img=basket_img_flip;
    }else{player.img=basket_img;}
    if((player.left + (temp_left*deltaTime)) < 0 || (player.left + (temp_left*deltaTime))+player.width > 1160){
        temp_left=0;
    }
    player.left += (temp_left*deltaTime);
    player_box.left += (temp_left*deltaTime);
    player.update();
    player_box.update();
    /*i =0;
    while(i<tree_order.length){
        tree_sprites[i].update();
        i++;
    }*/
    i=0;
    while(i<7){
        dirt_sprites[i].update();
        i++;
    }
    if(apple_count==0 && apple_count < 1 && apple_count> -1 && play && game_s){
        generate_apple();
        apple_count+=1;
    }
    i=0;
    while(i<apple_sprites.length){//so many while because i fell like it
        if(paused){requestAnimationFrame(animate);return;}
        apple_sprites[i].sprite.update();
        if(apple_sprites[i].sprite.top > 300 && apple_count < 2 && game_s){
            generate_apple();
            generate_enemy();
            apple_count+=1;
        }
        if(player_box.collide(apple_sprites[i].sprite) && game_s){
            apple_sprites.splice(i, 1);
            apple_count-=1;
            score+=apple_sprites[i].xp;
        }else{
        if (apple_sprites[i].sprite.top > 485 && play && game_s) {
            apple_sprites.splice(i, 1);
            apple_count-=1;
            gm_over();
        } else if(play){
            if(paused){requestAnimationFrame(animate);return;}
            if(allow){apple_sprites[i].sprite.top += 150 * deltaTime;}
        }}
        i++;
    }
    i=0;
    while(i<enemy_sprites.length){
        if(paused){requestAnimationFrame(animate);return;}
        enemy_sprites[i].sprite.update();
        if (enemy_sprites[i].sprite.top > 485) {
            enemy_sprites.splice(i, 1);
        }else if(play && game_s){
            if(paused){requestAnimationFrame(animate);return;}
            if(allow){enemy_sprites[i].sprite.top += 150 * deltaTime;}
        }
        if(player_box.collide(enemy_sprites[i].sprite) && play && game_s){
            enemy_sprites.splice(i, 1);
            gm_over();
        }
        i++;
    }
    screen.font='35px Arial';
    screen.fillStyle='black';
    screen.fillText("Score: "+score,50,40);
    if(score>best_score){
        best_score=score;
        set_data(score);
    }
    screen.fillText("Best Score: "+best_score,50,80);
    if(first==0){
        canvas.style.width="100%";
        canvas.style.height="100%";
    }
    first=1;
    requestAnimationFrame(animate);
}

menu_play();