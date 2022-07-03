<svelte:head>
    <link rel="stylesheet" href="/styles/jogo.css">
</svelte:head>
<script>

    let images = [
        {Class: 'card-frente', Src:'./images/alce-frente.png', Id:'alce'},
        {Class: 'card-frente', Src:'./images/caveira-frente.png', Id:'caveira'},
        {Class: 'card-frente', Src:'./images/coruja-frente.png', Id:'coruja'},
        {Class: 'card-frente', Src:'./images/triangulo-frente.png', Id:'triangulo'},
        {Class: 'card-frente', Src:'./images/leao-frente.png', Id:'leao'},
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'},
        {Class: 'card-frente', Src:'./images/alce-frente.png', Id:'alce'},
        {Class: 'card-frente', Src:'./images/caveira-frente.png', Id:'caveira'},
        {Class: 'card-frente', Src:'./images/coruja-frente.png', Id:'coruja'},
        {Class: 'card-frente', Src:'./images/triangulo-frente.png', Id:'triangulo'},
        {Class: 'card-frente', Src:'./images/leao-frente.png', Id:'leao'},
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'}
        
        
    ] 
    let PrimeiroCard
    let SegundoCard
    let iguais
    let Pares = 6
    let contador = 0
    function flipcards(){
        let vid = document.getElementById('audio')   
        let div = document.getElementById('audio1')
        if(!PrimeiroCard){
           vid.play();
           PrimeiroCard = this
           PrimeiroCard.classList.add ('vip')
           PrimeiroCard.classList.add('flip')
           SegundoCard = true
           console.log(PrimeiroCard.dataset.identificacao,'primeiro')
           
           
        }
        else if(SegundoCard == true){
            div.play();
            SegundoCard = this
            console.log(SegundoCard.dataset.identificacao,'segundo')
            SegundoCard.classList.add ('vip')
            SegundoCard.classList.add('flip')
            VerificarCards()
            
            
        }


       

        
    }
    function VerificarCards(){
        iguais = PrimeiroCard.dataset.identificacao === SegundoCard.dataset.identificacao
        if(iguais == true){
            PrimeiroCard = null
            SegundoCard = null
            Pares --
            VerificarFim()
        }
        else{
            contador++
            console.log(contador)
            if(contador > 7){
                let vapo = document.getElementById('video')
                vapo.play();
                document.getElementById('indo').style.display = "flex"
            }
            Desflipar()
        }
 
  

    }
    function Desflipar(){
        let vid = document.getElementById('audio2');
        setTimeout(() => {
            document.getElementById('indo').style.display = "none"
            vid.play();
            PrimeiroCard.classList.remove('flip');
            SegundoCard.classList.remove('flip');
            PrimeiroCard.classList.remove ('vip');
            SegundoCard.classList.remove ('vip');
            PrimeiroCard = null
            SegundoCard = null
            console.log(iguais)
            console.log(PrimeiroCard)
        }, 1000);
    }

    function VerificarFim(){
        let a = document.getElementById('video1')
        setTimeout(() => {
            if(Pares == 0){
                a.play();
                alert("Parabens! Você Venceu");
                
            }
            
        }, 1000);
    }

    
    
    
    function misturarCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * 12);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    misturarCards(images)
    
    
    
   
</script>

<div class="conteudo-jogo">
    <div class="infos">
        <div class="tempo">
            <h1>Tempo da Tentativa: 150s</h1>

        </div>
        <div class="pares">
            <h1>Pares Restantes: {Pares}</h1>
        </div>
    </div>



    <div style="display:none;" >
        <audio id="audio" src="audios/sound-cart.mp3"></audio>
        <audio id="audio1" src="audios/sound-cart1.mp3"></audio>
        <audio id="audio2"src="audios/sound-cart2.mp3"></audio>
    </div>




    <div id="indo" style="display: none ;">

        <video style="display: none ;" id="video1"
           src="/audios/musicpica.mp4">
        <track default
               kind="captions"
               srclang="en"
                                 />
        Sorry, your browser doesn't support embedded videos.
    </video>

        <video id="video"
           src="/audios/theroqui.mp4">
        <track default
               kind="captions"
               srclang="en"
                                 />
        Sorry, your browser doesn't support embedded videos.
    </video>
    </div>



    <div class="game-display">
      {#each images as {Src,Id} }
    
        <div class="flip-card">
            <div on:click={flipcards} class="flip-card-inner" data-identificacao={Id}>
                <div class="flip-card-front">
                    <img src="./images/carta-costa.png" alt="card-costa">
                </div>
                <div class="flip-card-back">
                    <img src={Src} alt={Id}>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>