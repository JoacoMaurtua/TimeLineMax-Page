
  const t1 = new TimelineMax({
      paused: true
  })


  t1.to('.panel',1.5,{
    scaleY:1,
    height: '100vh',
    ease: Elastic.easeOut,
   
  });

  t1.to('#light',1,{
    opacity: 1,
    y:0,
    ease:Bounce.easeOut,    
  }, 1);

  t1.to('p',1,{
    opacity: 1,
    y:20,
  });

  t1.to('.box',3,{
    opacity: 1,
    scale: 1,
    ease: Elastic.easeOut.config(1,0.3),
  
  }, "-=3.5");

  t1.reversed(true);


document.getElementById('cta').addEventListener('click', function(){
    t1.reversed(!t1.reversed());
    if(t1.reversed()){
      t1.reverse();
    }  
    else{
      t1.play()
    }
})


document.getElementById('pause').addEventListener('click', function(){
    
  if(t1.paused()){
    t1.reverse();
  }  
  else{
    t1.pause();
    t1.paused(true);
  }
})
