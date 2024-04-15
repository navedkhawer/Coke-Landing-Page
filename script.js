
var tl = gsap.timeline();
tl.from(".nav",{
    y:-30,
    duration:2,
    opacity:0,
    ease: Expo.easeInOut
})
tl.to(".bounding img",{
    y:0,
    duration:0.7,
    ease: Power2,
    stagger:.2
})
tl.to(".bounding h1",{
    y:0,
    duration:0.5,
    ease: Power2,
    delay:-0.5
})
tl.from("#boundpara",{
    opacity:0,
    duration:1,
    ease: Power2,
    stagger: .2
})
tl.from(".btn",{
    opacity:0,
    duration:1,
    ease: Power2,
    stagger: .2,
    delay:-0.5
})
tl.from(".right-elems",{
    opacity:0,
    duration:1,
    ease: Power2,
    stagger: .2,
    delay:-0.5
})