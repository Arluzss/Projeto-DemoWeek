<svelte:head>
    <link rel="stylesheet" href="/styles/jogo2.css">
</svelte:head>
<script>
    import MenuBotao from './Botoes/MenuBotao.svelte';
    import PaginaInicialBotao from './Botoes/PaginaInicialBotao.svelte'
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
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'},
        {Class: 'card-frente', Src:'./images/geo-frente.png', Id:'geo'},
        {Class: 'card-frente', Src:'./images/estrela-frente.png', Id:'estrela'},
        {Class: 'card-frente', Src:'./images/geo-frente.png', Id:'geo'},
        {Class: 'card-frente', Src:'./images/unicornio-frente.png', Id:'unicornio'},
        {Class: 'card-frente', Src:'./images/estrela-frente.png', Id:'estrela'},
        {Class: 'card-frente', Src:'./images/unicornio-frente.png', Id:'unicornio'}        
    ] 

    let PrimeiroCard
    let SegundoCard
    let Pares = 9

    function flipcards(){
        if(!PrimeiroCard){
            PrimeiroCard = this
            PrimeiroCard.classList.add ('travar')
            PrimeiroCard.classList.add('flip')
            SegundoCard = true
            document.getElementById('SomFlip1').play()
            
            
        }
        else if(SegundoCard == true){
            SegundoCard = this
            SegundoCard.classList.add ('travar')
            SegundoCard.classList.add('flip')
            document.getElementById('SomFlip2').play()
            VerificarCards()

        }


       

        
    }
    function VerificarCards(){
        
        if(PrimeiroCard.dataset.identificacao === SegundoCard.dataset.identificacao){
            PrimeiroCard = null
            SegundoCard = null
            Pares --
            VerificarFim()
        }
        else{
            Desflipar()
        }
 
  

    }
    function Desflipar(){
        setTimeout(() => {
            PrimeiroCard.classList.remove('flip')
            SegundoCard.classList.remove('flip')
            PrimeiroCard.classList.remove ('travar');
            SegundoCard.classList.remove ('travar');
            document.getElementById('SomFlip3').play()
            PrimeiroCard = null
            SegundoCard = null
        }, 1000);
    }

    function VerificarFim(){
        setTimeout(() => {
            if(Pares == 0){
                document.querySelector('.TelaVitoria').style.display='flex'
                document.querySelector('.paresinfo').style.color='rgb(204, 205, 206)'
                document.querySelector('#vitoria').play()
            }
        }, 1000);
    }
    
    function misturarCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * 18);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    misturarCards(images)

</script>
<audio id="SomFlip1" src="/audio/Flip.mp3" preload="auto"></audio>
<audio id="SomFlip2" src="/audio/Flip2.mp3" preload="auto"></audio>
<audio id="SomFlip3" src="/audio/desflipar.mp3" preload="auto"></audio>
<audio id="vitoria" src="/audio/vitoria.mp3" preload="auto"></audio>

<div class="conteudo-jogo">
    <div class="pares">
        <MenuBotao />
        <h1 class="paresinfo">Pares Restantes: {Pares}</h1>
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
    <div class="TelaVitoria">
        <h1>Você completou todas as fases</h1>
        <p style="font-size: 25pt;">Retorne para a página inicial.</p>
        <div class="escolhas">
            <PaginaInicialBotao />
        </div>
    </div>
</div>