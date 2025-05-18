var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px";
  crsr.style.top = dets.y+"px";
  blur.style.left = dets.x-250+"px";
  blur.style.top = dets.y-250+"px";
})


gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#main",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
    
  }
});

// Main background scroll effect
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    start: "top -25%",
    end: "top -75vh",
    scrub: 2,
    
  }
});
gsap.to("#page3 p", {
  y:90,
  scale:0.8,
  scrollTrigger: {
    trigger: "#page3",
    stagger:0.2,
    scrub: 1,
    
  }
});
gsap.from("#page4 h1",{
  y:40,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller:"body",
    start: "top 75%",
    end: "top 70%",
    scrub:1,
  }
})
