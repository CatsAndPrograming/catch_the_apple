var basket_img = document.createElement('img');
basket_img.src='img/basket.png';
basket_img.style.display='none';

var dirt = document.createElement('img');
dirt.src='img/dirt.png';
dirt.style.display='none';

var basket_img_flip = document.createElement('img');
basket_img_flip.src='img/basket_flip.png';
basket_img_flip.style.display='none';

var cute_tree = [];
cute_tree.push(document.createElement('img'));
cute_tree[0].src='img/tree_1.png';
cute_tree[0].style.display='none';

cute_tree.push(document.createElement('img'));
cute_tree[1].src='img/tree_2.png';
cute_tree[1].style.display='none';

cute_tree.push(document.createElement('img'));
cute_tree[2].src='img/tree_3.png';
cute_tree[2].style.display='none';

var apl = document.createElement('img');
apl.src='img/apple_tree.png';
apl.style.display='none';

//tree['tree_6'].style.display='none';

var tree_data={
    'tree_1':[200, 370],
    'tree_2':[230, 300],
    'tree_3':[190, 280],
    'tree_4':[200, 250],
    'tree_5':[160, 230]
    //'tree_6':[150, 200]
}

var apple_org = document.createElement('img');
apple_org.src='img/apple.png';
apple_org.style.display='none';

var enm_org = document.createElement('img');
enm_org.src='img/apple_worm.png';
enm_org.style.display='none';

var apples = [[apple_org, 0, 'red_apple', 5]];
var enemy = [[enm_org, 0, 'a_good_apple:)']]

var apples_rotated = {
    'red_apple':[]
}

function get_apple_img_by_name(name){
    for (let index = 0; index < apples.length; index++) {
        if(apples[index][2] == name){
            return apples[index][0];
        }
        
    }
    return null;
}
/*
i=0;
while(i<180){
    let temp_img=document.createElement('img');
    temp_img.src=rotate_image(get_apple_img_by_name('red_apple'), i);
    apples_rotated.red_apple.push(temp_img);
    i++;
}*/

basket_img.addEventListener('load', function(){
import_script('js/class.js', 'cls');
listener('cls', function(){
    import_script('js/animation.js', 'anm');
    listener('anm', function(){}, 'load');
}, 'load')
})