
MorphSVGPlugin.convertToPath('polygon');
var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  pContainer = select('.pContainer'),
  mainSVG = select('.mainSVG'),
  star = select('#star'),
  sparkle = select('.sparkle'),
  tree = select('#tree'),
  showParticle = true,
  particleColorArray = ['#E8F6F8', '#ACE8F8', '#F6FBFE','#A2CBDC','#B74551', '#5DBA72', '#910B28', '#910B28', '#446D39'],
  particleTypeArray = ['#star','#circ','#cross','#heart'],
 // particleTypeArray = ['#star'],
  particlePool = [],
  particleCount = 0,
  numParticles = 201


gsap.set('svg', {
  visibility: 'visible'
})

gsap.set(sparkle, {
	transformOrigin:'50% 50%',
	y:-100
})

let getSVGPoints = (path) => {
	
	let arr = []
	var rawPath = MotionPathPlugin.getRawPath(path)[0];
	rawPath.forEach((el, value) => {
		let obj = {}
		obj.x = rawPath[value * 2]
		obj.y = rawPath[(value * 2) + 1]
		if(value % 2) {
			arr.push(obj)
		}
		
	})
	
	return arr;
}
let treePath = getSVGPoints('.treePath')

var treeBottomPath = getSVGPoints('.treeBottomPath')


var mainTl = gsap.timeline({delay:0, repeat:0}), starTl;




function flicker(p){
  
  //console.log("flivker")
  gsap.killTweensOf(p, {opacity:true});
  gsap.fromTo(p, {
    opacity:1
  }, {
		duration: 0.07,
    opacity:Math.random(),
    repeat:-1
  })
}

function createParticles() {
  
  
  var i = numParticles, p, particleTl, step = numParticles/treePath.length, pos;
  while (--i > -1) {
    
    p = select(particleTypeArray[i%particleTypeArray.length]).cloneNode(true);
    mainSVG.appendChild(p);
    p.setAttribute('fill', particleColorArray[i % particleColorArray.length]);
    p.setAttribute('class', "particle");   
    particlePool.push(p);
    //hide them initially
    gsap.set(p, {
                 x:-100, 
                 y:-100,
   transformOrigin:'50% 50%'
                 })
    
    

  }

}

var getScale = gsap.utils.random(0.5, 3, 0.001, true);

function playParticle(p){
  if(!showParticle){return};
  var p = particlePool[particleCount]
 gsap.set(p, {
	 x: gsap.getProperty('.pContainer', 'x'),
	 y: gsap.getProperty('.pContainer', 'y'),
	 scale:getScale()
    }
    );
var tl = gsap.timeline();
  tl.to(p, {
		duration: gsap.utils.random(0.61,6),
      physics2D: {
        velocity: gsap.utils.random(-23, 23),
        angle:gsap.utils.random(-180, 180),
        gravity:gsap.utils.random(-6, 50)
      },
      scale:0,
      rotation:gsap.utils.random(-123,360),
      ease: 'power1',
      onStart:flicker,
      onStartParams:[p],
     
      onRepeat: (p) => {
        gsap.set(p, {         
            scale:getScale()
        })
      },
      onRepeatParams: [p]

    });
  

  
  particleCount++;
 
  particleCount = (particleCount >=numParticles) ? 0 : particleCount
  
}

function drawStar(){
  
  starTl = gsap.timeline({onUpdate:playParticle})
  starTl.to('.pContainer, .sparkle', {
		duration: 6,
		motionPath :{
			path: '.treePath',
      autoRotate: false
		},
    ease: 'linear'
  })  
  .to('.pContainer, .sparkle', {
		duration: 1,
    onStart:function(){showParticle = false},
    x:treeBottomPath[0].x,
    y:treeBottomPath[0].y
  })
  .to('.pContainer, .sparkle',  {
		duration: 2,
    onStart:function(){showParticle = true},
		motionPath :{
			path: '.treeBottomPath',
      autoRotate: false
		},
    ease: 'linear'    
  },'-=0')
.from('.treeBottomMask', {
		duration: 2,
  drawSVG:'0% 0%',
  stroke:'#FFF',
  ease:'linear'
},'-=2')  
  


  
}


createParticles();
drawStar();


mainTl.from(['.treePathMask','.treePotMask'],{
	duration: 6,
  drawSVG:'0% 0%',
  stroke:'#FFF',
	stagger: {
		each: 6
	},
    duration: gsap.utils.wrap([6, 1,2]),
  ease:'linear'
})
.from('.treeStar', {
	duration: 3,
  
  scaleY:0,
  scaleX:0.15,
  transformOrigin:'50% 50%',
  ease: 'elastic(1,0.5)'
},'-=4')

 .to('.sparkle', {
	duration: 3,
    opacity:0,
    ease:"rough({strength: 2, points: 100, template: linear, taper: both, randomize: true, clamp: false})"
  },'-=0')
  .to('.treeStarOutline', {
	duration: 1,
    opacity:1,
    ease:"rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})"
  },'+=1')
  mainT1.add(starT1,0)
  gsap.globalTimeline.timeScale(1.5);
  (function(){function f(a,b,d,f){for(var g=h=0;g<a;g++){var c=document.createElementNS("http://www.w3.org/2000/svg","rect");isFirefox?mainSVG.appendChild(c):b.appendChild(c);g>h*p&&h++;c.setAttributeNS(null,"fill",maskValueArr[h]);c.setAttributeNS(null,"width",16);c.setAttributeNS(null,"rx",16);c.setAttributeNS(null,"ry",16);c.setAttributeNS(null,"height",16);TweenMax.set(c,{transformOrigin:"50% 50%",scaleY:1-g/100});var e=new TimelineMax;e.to(c,1.52,{bezier:{type:"cubic",values:d,autoRotate:!0},ease:Linear.easeNone}).to(c,
.1,{alpha:0},"-=0.1");f.add(e,g/200);isFirefox&&b.appendChild(c)}}function d(a,b){return Math.floor(Math.random()*(b-a+1)+a)}select=function(a){return document.querySelector(a)};selectAll=function(a){return document.querySelectorAll(a)};container=select(".container");mainSVG=select(".mainSVG");merryGroup=select("#merryGroup");springStroke1=select("#springStroke1");springStroke2=select("#springStroke2");springStroke3=select("#springStroke3");particleContainer=select("#particleContainer");strokeMask1=
select("#strokeMask1");strokeMask2=select("#strokeMask2");strokeMask3=select("#strokeMask3");allTextMasks=selectAll(".textMask *");maskValueArr="#111 #222 #333 #444 #555 #666 #777 #888 #999 #aaa #bbb #ccc #ddd #eee #FFF".split(" ").reverse();particleColorArray=["#F3F1E2"];particleTypeArray=["#flake1","#flake2","#flake3","#star","#heart"];particlePool=[];particleCount=0;numParticles=512;isFirefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");TweenMax.set(container,{position:"absolute",top:"50%",
left:"50%",xPercent:-50,yPercent:-50});TweenMax.set("svg",{visibility:"visible"});TweenMax.set(particleContainer,{x:0,y:0});var k=new TimelineMax({paused:!0}),l=new TimelineMax({paused:!0}),m=new TimelineMax({paused:!0}),h,p=Math.round(100/maskValueArr.length),q=MorphSVGPlugin.pathDataToBezier(springStroke1.getAttribute("d"),{offsetX:-8,offsetY:-8}),n=MorphSVGPlugin.pathDataToBezier(springStroke2.getAttribute("d"),{offsetX:-8,offsetY:-8}),r=MorphSVGPlugin.pathDataToBezier(springStroke3.getAttribute("d"),
{offsetX:-8,offsetY:-8}),e=new TimelineMax({repeat:-1,paused:!0});e.to("#dot",.4,{attr:{cy:200,rx:12,ry:12},ease:Power2.easeOut}).to("#dot",.3,{attr:{cy:300},ease:Power2.easeIn}).set("#splashRing",{alpha:1}).to("#dot",1.2,{attr:{rx:76,ry:76},alpha:0,ease:Power1.easeOut}).to("#splashRing",1.2,{attr:{r:50},strokeWidth:0,ease:Power1.easeOut},"-=1.2").to(k,3,{time:2.33,ease:Power2.easeOut},"-=1.2").to(l,3.9,{time:2.33,ease:Power2.easeOut},"-=2.9").staggerFrom("#merryGroup path",.9,{rotation:-95,alpha:0,
transformOrigin:"50% 150%",ease:Elastic.easeOut.config(2,.8)},.036,"-=3.3").to(m,1,{time:2.1,ease:SlowMo.ease.config(.1,.86,!1)},"-=2.9").to(particleContainer,1.4,{bezier:{type:"cubic",values:n,autoRotate:!1},onUpdate:function(a){a=particlePool[particleCount];TweenMax.set(a,{x:particleContainer._gsTransform.x,y:particleContainer._gsTransform.y,scale:d(1,15)/10,transformOrigin:"50% 50%"});(new TimelineMax).to(a,d(3,6),{physics2D:{velocity:d(5,10),angle:0,gravity:d(23,577)},scale:0,rotation:d(180,780),
onStart:function(a){TweenMax.killTweensOf(a,{opacity:!0});TweenMax.fromTo(a,.7,{alpha:1},{alpha:Math.random(),ease:RoughEase.ease.config({template:Power0.easeNone,strength:3,points:6,taper:"both",randomize:!0,clamp:!1}),repeat:-1})},onStartParams:[a]});particleCount++;particleCount=particleCount>=numParticles?0:particleCount},ease:Linear.easeNone},"-=4").from("#letterI",.76,{y:-200,alpha:0,ease:Power4.easeIn},"-=2.7").from("#letterI",1,{rotation:23,transformOrigin:"50% 100%",ease:Elastic.easeOut.config(1,
.3)},"-=2.2").staggerTo(selectAll(".endFlake"),.6,{cycle:{x:[-10,0,10],y:[200,100,300],transformOrigin:["50% 50%","50% 150%"]},alpha:0,rotation:d(200,360),ease:SlowMo.ease.config(.1,.4,!1)},.02,"-=1.95").staggerTo("#merryGroup *",.6,{alpha:0},.05).to("#letterI",.6,{alpha:0},"-=0.6");(function(){for(var a=numParticles,b;-1<--a;)b=document.createElementNS("http://www.w3.org/2000/svg","use"),b.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",particleTypeArray[a%particleTypeArray.length]),mainSVG.appendChild(b),

b.setAttributeNS(null,"fill",particleColorArray[a%particleColorArray.length]),b.setAttributeNS(null,"opacity",0),b.setAttribute("class","particle"),particlePool.push(b)})();f(100,strokeMask1,q,k);f(100,strokeMask2,n,l);f(100,strokeMask3,r,m);e.timeScale(.8);TweenMax.delayedCall(2,function(){e.play()})})();
'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width, height, lastNow;
let snowflakes;
const maxSnowflakes = 100;

function init() {
  snowflakes = [];
  resize();
  render(lastNow = performance.now());
}

function render(now) {
  requestAnimationFrame(render);

  const elapsed = now - lastNow;
  lastNow = now;

  ctx.clearRect(0, 0, width, height);
  if (snowflakes.length < maxSnowflakes)
  snowflakes.push(new Snowflake());

  ctx.fillStyle = ctx.strokeStyle = '#fff';

  snowflakes.forEach(snowflake => snowflake.update(elapsed, now));
}

function pause() {
  cancelAnimationFrame(render);
}
function resume() {
  lastNow = performance.now();
  requestAnimationFrame(render);
}


class Snowflake {
  constructor() {
    this.spawn();
  }

  spawn(anyY = false) {
    this.x = rand(0, width);
    this.y = anyY === true ?
    rand(-50, height + 50) :
    rand(-50, -10);
    this.xVel = rand(-.05, .05);
    this.yVel = rand(.02, .1);
    this.angle = rand(0, Math.PI * 2);
    this.angleVel = rand(-.001, .001);
    this.size = rand(7, 12);
    this.sizeOsc = rand(.01, .5);
  }

  update(elapsed, now) {
    const xForce = rand(-.001, .001);

    if (Math.abs(this.xVel + xForce) < .075) {
      this.xVel += xForce;
    }

    this.x += this.xVel * elapsed;
    this.y += this.yVel * elapsed;
    this.angle += this.xVel * 0.05 * elapsed; //this.angleVel * elapsed

    if (
    this.y - this.size > height ||
    this.x + this.size < 0 ||
    this.x - this.size > width)
    {
      this.spawn();
    }

    this.render();
  }

  render() {
    ctx.save();
    const { x, y, angle, size } = this;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.2, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
  }}


// Utils
const rand = (min, max) => min + Math.random() * (max - min);

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
window.addEventListener('blur', pause);
window.addEventListener('focus', resume);
init();