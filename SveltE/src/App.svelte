<svelte:head>
	<link rel="stylesheet" href="./styles/Principal.css">
</svelte:head>

<script>
	import Menu from "./Menu.svelte"
	import Jogo from "./Jogo.svelte";
	import  Sobre  from "./Sobre.svelte";
	import {estado} from "./Navigate";
	import {trocarEstadoDoJogo} from "./Navigate"

</script>
<header>
	<div class="botoes">
		<div class="botao" on:click={()=>trocarEstadoDoJogo('menu')}>Menu</div>
		<div class="botao" on:click={()=>trocarEstadoDoJogo('jogar')}>jogar</div>
		<div class="botao" on:click={()=>trocarEstadoDoJogo('sobre')}>sobre</div>
	</div>
</header>
<section>
	{#if $estado == "menu"}
		<Menu />
		
	{/if}
	{#if $estado == "jogar"}
		<Jogo />
		
	{/if}
	{#if $estado == "sobre"}
		<Sobre />
		
	{/if}
	
</section>



