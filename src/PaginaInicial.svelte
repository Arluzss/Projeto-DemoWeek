<svelte:head>
    <link rel="stylesheet" href="/styles/inicial.css">
</svelte:head>
<script>
    import ComoJogarBotao from './Botoes/ComoJogarBotao.svelte';
    import JogarBotao from './Botoes/JogarBotao.svelte'
    import SobreBotao from './Botoes/SobreBotao.svelte'
</script>
<div class="Initconteudo">
    <div class="titulo">
        <h1>JOGO DA MEMORIA</h1>
    </div>
    <div class="botoes">
        <JogarBotao />
        <SobreBotao />
        <ComoJogarBotao />
    </div>

</div>