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

    function flipcards(){
        if(!PrimeiroCard){
            PrimeiroCard = this
            PrimeiroCard.classList.add ('vip')
            PrimeiroCard.classList.add('flip')
            SegundoCard = true
            console.log(PrimeiroCard.dataset.identificacao,'primeiro')
            
            
        }
        else if(SegundoCard == true){
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
            Desflipar()
        }
 
  

    }
    function Desflipar(){
        setTimeout(() => {
            PrimeiroCard.classList.remove('flip')
            SegundoCard.classList.remove('flip')
            PrimeiroCard.classList.remove ('vip');
            SegundoCard.classList.remove ('vip');
            PrimeiroCard = null
            SegundoCard = null
            console.log(iguais)
            console.log(PrimeiroCard)
        }, 1000);
    }

    function VerificarFim(){
        setTimeout(() => {
            if(Pares == 0){
                alert("Parabens! Você Venceu")
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