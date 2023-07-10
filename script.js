var t = gsap.timeline()
t.from("#left , #right , #middle",{
   y:-100,
   duration:1,
   opacity:0
})

t.from("h2",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
})

t.from("#topleft,#bottomright,#bhagatsingh,#adventure,#bullet",{
    duration:1,
    opacity:0,
})
t.from("#scroll",{
    opacity:0,
    y:50,
    repeat:-1,
    duration:0.5,
    yoyo:true,

})