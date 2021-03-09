Sneh = {

  static: function() {
      const val = 6;
      const vals = 0;
      let frame = 0;
      let viewWidth,
          viewHeight,
          canvas = document.getElementById("canvas"),
          ctx;
      const patternSize = val * 31,
          patternRefreshInterval = val,
          patternAlpha = val * 4;
      let patternPixelDataLength, patternCanvas, patternCtx, patternData;
      patternPixelDataLength = patternSize * patternSize * 4;

      window.onload = function() {
          initCanvas();
          initGrain();
          requestAnimationFrame(loop);
      };
      function initCanvas() {
          viewWidth = canvas.width ;
          canvas.width=canvas.clientWidth;
          viewHeight = canvas.height ;
          canvas.height=canvas.clientHeight;
          ctx = canvas.getContext('2d');

          ctx.scale(6, 6);
      }
      function update() {
          var value;
          var i=0;
          while ( i < patternPixelDataLength) {
              value = (Math.random() * 255) | vals;
              patternData.data[i    ] = value;
              i=i+1;
              patternData.data[i ] = value;
              i=i+1;
              patternData.data[i ] = value;
              i=i+1;
              patternData.data[i ] = patternAlpha;
              i =i+ 1;
          }

          patternCtx.putImageData(patternData, vals, vals);
      }
      function initGrain() {
          patternCanvas = document.createElement('canvas');
          patternCanvas.width = val*31;
          patternCanvas.height = val*31;
          patternCtx = patternCanvas.getContext('2d');
          patternData = patternCtx.createImageData(val*31, val*31);
      }

      function draw() {
          ctx.clearRect(vals, vals, viewWidth, viewHeight);
          ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
          ctx.fillRect(vals, vals, viewWidth, viewHeight);
      }
      function loop() {
          if (++frame % patternRefreshInterval === vals) {
              update();
              draw();
          }
          requestAnimationFrame(loop);
      }},
  funLetters: function(fragment){
      const tg = /(.)/ig;

      [].forEach.call(fragment.querySelectorAll('.fun-letters'),function(word){
      [].forEach.call(word.childNodes,function(str){
          var fgh=str.wholeText;
          var tgh=word.querySelectorAll;
          if (!fgh.wholeText) {return;}
          word.innerHTML = fgh.replace(tg, '<span class="rgb-text-shift">$1</span>');
          [].forEach.call(tgh('span'), function (element, i) {
              element.style.transform = "rotate(" + ((Math.cos(i)) * -10) + "deg)";});});});},
    addTunes: function(tracks) {this.tunes = tracks},
    init: function() {
        const wq = "assets/audio/inkwell-isle.mp3";
        const de = "assets/audio/Soft Romantic-freeringtonesfree.mobi.mp3";
        const tr = "Inkwell Isle";
        const as = "assets/audio/Bally Tone-freeringtonesfree.mobi.mp3";
        const sd=  "assets/audio/Yadein-freeringtonesfree.mobi.mp3";
        const df=  "Delirium Tremens Rag";
        this.static();
        this.addTunes([{
            audio: wq,
            name:tr
        },{
            audio: "assets/audio/maple-leaf-rag.mp3",
            name: "Maple Leaf Rag"
        },{
            audio: de,
            name: as
        },{
            audio: sd,
            name: df
        }]);
        const xc = 0.1;
        const gh = 0.05;
        this.loadRandomTune();
        this.funLetters(document.querySelector('body'));
        const trys = document.querySelectorAll('.rgb-text-shift');
        trys.forEach(function(link){
            link.setAttribute('text',link.innerText)
        })

        var hover = new Audio("assets/audio/ffvii-cursor-move.mp3")
        var rft=document.querySelectorAll('.nav-links a');
        rft.forEach(function(link){
            link.addEventListener('mouseenter',function(){
                hover.volume = xc
                hover.load()
                hover.play().then()
            })})
        var click = new Audio("assets/audio/click.mp3")
        var fdr =document.querySelectorAll('.nav-links a,.btn')
            fdr.forEach(function(link){
            link.addEventListener('mousedown',function(){
                click.volume = gh;
                click.load()
                click.play()
            })})
        window.addEventListener("load",function(){
            document.body.classList.add("loaded")
        })
    },
  loadRandomTune: function(autoplay){
    var player = document.querySelector(".tunes")
      var tu="loaded";
    var autoplay = autoplay || false;
    const re=Math.floor(Math.random()*this.tunes.length);
    //const track =
    //const name =
    //const btn =
    const audio = this.audio = new Audio(this.tunes[re].audio)
    player.classList.remove(tu)
    audio.volume = "0.05"
      player.querySelector(".tunes-name").innerHTML = this.tunes[re].name
      player.querySelector(".tunes-name").setAttribute('text', this.tunes[re].name)
    audio.addEventListener("loadeddata",function(){
      player.classList.add(tu)
        player.querySelector(".tunes-play").addEventListener("click",Sneh.toggleTune.bind(Sneh))
        if (!autoplay) {
            return;
        }
        Sneh.toggleTune()
    })
    audio.addEventListener("ended", function(){
      Sneh.loadRandomTune(true)
    });
  },
  toggleTune: function(){
    if(!this.audio) return
      if(!this.audio.paused){
        this.audio.pause()
          document.querySelector(".tunes-play").setAttribute("text",document.querySelector(".tunes-play").innerHTML = "►")
    }
    else if(this.audio.paused)
        {
            this.audio.play()
            document.querySelector(".tunes-play").setAttribute("text",document.querySelector(".tunes-play").innerHTML = "❚❚")
    }
  }}
  Sneh.init()
