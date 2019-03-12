cnvs = document.getElementById('canvas');
cnvs.width = window.innerWidth-50;
c=cnvs.getContext('2d');
wd = cnvs.width;
ht = cnvs.height;

bndx = wd-10;
bndy = ht-10;

var pnts = [[bndx/2,15],[50,bndy-100],[bndx-50,bndy-100]];

pnt_sz = 3;

var mx_cnt = 500;
var cnt = 0;
  x1 = rint(10,bndx);
  y1 = rint(10,bndy);
function init() {
    x1 = rint(10,bndx);
    y1 = rint(10,bndy);
    cnt=0;
    c.clearRect(0,0,cnvs.width,cnvs.height);
  for(i=0;i<3;i++){
    c.fillRect(pnts[i][0],pnts[i][1],pnt_sz,pnt_sz);
  }
  c.fillRect(x1,y1,pnt_sz,pnt_sz);
}

function rint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function build(){
  cnt+=1;
  if(cnt>mx_cnt) return;
  ch = rint(0,3);
  x1 = Math.floor((x1+pnts[ch][0])/2);
  y1 = Math.floor((y1+pnts[ch][1])/2);
  c.fillRect(x1,y1,pnt_sz,pnt_sz);
  document.getElementById('iterations').innerHTML = cnt;
}

init();
var timer;
function start(){
  stop();
  init();
  mx_cnt = document.getElementById('max_iter').value;
  tmspn = document.getElementById('interval').value;
  timer = setInterval(build,tmspn);
}

function stop(){
  clearInterval(timer);
}
