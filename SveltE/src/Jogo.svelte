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
    let Pares = 0
        
    function flipcards(){
        if(!PrimeiroCard){
            PrimeiroCard = this
            PrimeiroCard.classList.add('flip')
            console.log(PrimeiroCard.dataset.identificacao,'primeiro')
            
        }
        else{
            SegundoCard = this
            SegundoCard.classList.add('flip')
            console.log(SegundoCard.dataset.identificacao,'segundo')
            VerificarCards()
            
            
        }

       

        
    }
    function VerificarCards(){
        
        let teste = document.querySelectorAll('#click div');
        for(let i = 0; i < teste.length; i++){
            if(teste[i] == PrimeiroCard){
            console.log(teste[i])
            console.log( document.getElementById('clicks'))
            document.getElementById('click').style.pointerEvents = 'none';
            
            }
        }
        iguais = PrimeiroCard.dataset.identificacao === SegundoCard.dataset.identificacao
        if(iguais == true){
            
            
            PrimeiroCard = null
            SegundoCard = null
            Pares ++
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
            PrimeiroCard = null
            SegundoCard = null
            iguais = null
            console.log(iguais)
            console.log(PrimeiroCard)
        }, 700);
    }

    function VerificarFim(){
        setTimeout(() => {
            if(Pares == 6){
                alert("Parabens! Você Venceu")
            }
            
        }, 700);
    }

 
    
    
    function misturarCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * array.length);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    misturarCards(images)

</script>

<style>
    .titi {
        pointer-events: none;
        cursor:default;
    }
</style>

<div class="game-display">

  {#each images as {Src,Id} }
        
    <div id="click" class="flip-card">
        <div on:click={flipcards} class="flip-card-inner titi" data-identificacao={Id}>
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