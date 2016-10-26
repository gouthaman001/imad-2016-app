console.log('Loaded!');
var madi=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    madi.style.marginLeft=marginLeft+'px';
}
madi.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};