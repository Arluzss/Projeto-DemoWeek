<svelte:head>
	<link rel="stylesheet" href="./styles/Principal.css">
</svelte:head>

<script>
	import Jogo from "./Jogo.svelte";
	import Jogo2 from "./Jogo2.svelte";
	import  Sobre  from "./Sobre.svelte";
	import {estado} from "./Navigate";
	import PaginaInicial from "./PaginaInicial.svelte";
	import ComoJogar from "./ComoJogar.svelte";

</script>

<section>
	{#if $estado == "inicial"}
		<PaginaInicial />
		{:else if $estado == "como"}
		<ComoJogar />
		{:else if $estado == "jogar"}
		<Jogo />
		{:else if $estado == 'sobre'}
		<Sobre />
		{:else if $estado == 'jogo2'}
		<Jogo2 />
	{/if}

	
	
</section>



