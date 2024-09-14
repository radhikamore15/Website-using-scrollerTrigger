gsap.from(" #page1 #nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.3
  
})
gsap.to("#page2 #img2",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
       // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:4,
        pin:true
    }
})
gsap.to("#page3 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
       // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:4,
        pin:true
    }
})