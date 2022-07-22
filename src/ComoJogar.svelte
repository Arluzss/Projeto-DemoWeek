<svelte:head>
    <link rel="stylesheet" href="/styles/como.css">
</svelte:head>
<script>
    import JogarBotao from './Botoes/JogarBotao.svelte'
    import MenuBotao from './Botoes/MenuBotao.svelte'

    let images = [
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'},
        {Class: 'card-frente', Src:'./images/caveira-frente.png', Id:'caveira'},
        {Class: 'card-frente', Src:'./images/caveira-frente.png', Id:'caveira'},
        {Class: 'card-frente', Src:'./images/triangulo-frente.png', Id:'triangulo'},
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'},
        {Class: 'card-frente', Src:'./images/triangulo-frente.png', Id:'triangulo'},
    ] 
    let Titul0 = "TUTORIAL DE COMO JOGAR"
    let par = 3
    let card1 
    let card2
    function Tutorial(){
        document.querySelector('.tutorial').style.visibility='visible'
        document.querySelector('.comotuto').style.visibility='hidden'
        Titul0 = "COMO JOGAR"
    }
    function flipcard(){
        if(!card1){
            card1 = this
            card1.classList.add("flip")
            card1.classList.add("travado")
            document.querySelector('.guia').style.transition='0.5s'
            document.querySelector('.guia').style.opacity='0'
            
            setTimeout(() => {
                document.querySelector('.guia').style.transition='0.5s'
                document.querySelector('.guia').style.opacity='100'
                document.querySelector('.guia').innerHTML="Selecione outra carta"
                
            }, 800);
        }
        else if(!card2){
            card2 = this
            card2.classList.add("flip")
            card2.classList.add("travado")
            document.querySelector('.guia').style.transition='0.5s'
            document.querySelector('.guia').style.opacity='0'
            setTimeout(() => {
                verificar()
                
            }, 500);
        }
        
    }
    function verificar(){
        if(card1.dataset.identificacao === card2.dataset.identificacao){
            par = par -1
            card1 = false
            card2 = false
            document.querySelector('.guia').innerHTML=`Você encontrou um par`
            document.querySelector('.guia').style.transition='0.5s'
            document.querySelector('.guia').style.opacity='100'
            setTimeout(() => {
                document.querySelector('.guia').style.transition='0.5s'
                document.querySelector('.guia').style.opacity='0'
            }, 1000);
            fim()

        }
        else{
            document.querySelector('.guia').style.transition='0.5s'
            document.querySelector('.guia').style.opacity='100'
            document.querySelector('.guia').innerHTML=`Essas cartas não correspondem`
            setTimeout(() => {
                document.querySelector('.guia').style.transition='0.5s'
                document.querySelector('.guia').style.opacity='0'
                desvirar()
            },800);

        }
    }
    function desvirar(){

        setTimeout(() => {
            document.querySelector('.guia').innerHTML=`Selecione novamente uma carta`
            document.querySelector('.guia').style.transition='0.5s'
            document.querySelector('.guia').style.opacity='100'
            card1.classList.remove("flip")
            card1.classList.remove("travado")
            card2.classList.remove("flip")
            card2.classList.remove("travado")
            card1 = false
            card2 = false
            
        },1000);
    }
    function fim(){
        if(par == 0){
            document.querySelector('.guia').innerHTML=`Você encontrou o ultimo par`
            setTimeout(() => {
                
                document.querySelector(".FimCont").style.visibility='visible'
                document.querySelector(".pares").style.visibility='hidden'
            },2500);
            
        }
        else{
            setTimeout(() => {
                document.querySelector('.guia').innerHTML=`Selecione uma carta`    
                document.querySelector('.guia').style.transition='0.5s'
                document.querySelector('.guia').style.opacity='100'
            }, 1800);

        }
    }

</script>
<div class="ComoConteudo">
    <div class="titulo">
        <MenuBotao/>
        <h1>{Titul0}</h1>
    </div>
    <div class="comotuto">
        <p>Para ganhar, encontre os pares correspondentes das cartas e assim avançe de fase.</p>
        <p> Preparamos um tutorial básico para novos jogadores</p>
        <p>inicie o tutorial abaixo.</p>
   
        <div id="tutorialbtn" on:click={Tutorial}>INICIAR TUTORIAL</div>
    </div>
    

</div>
<div class="tutorial">
    <div class="texto">
        <p class="guia">Selecione a primeira carta</p>
    </div>
    <div class="tutorial-display">
        {#each images  as {Src,Id} }
            <div class="flip-card">
                <div on:click={flipcard} class="flip-card-inner" data-identificacao={Id}>
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
    <div class="pares">
        <h2>PARES RESTANTES: {par}</h2>
    </div>
</div>
<div class="FimCont">
    <div class="TelaFim">
        <h1>Você completou o tutorial.</h1>
        <p>Agora você já sabe jogar.</p>
        <p>clique no botão abaixo para começar.</p>
        <JogarBotao/>
    </div>
</div>