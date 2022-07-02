<svelte:head>
	<link rel="stylesheet" href="./styles/Principal.css">
</svelte:head>

<script>
	import Menu from "./Menu.svelte"
	import Jogo from "./Jogo.svelte";
	import  Sobre  from "./Sobre.svelte";
	import {estado} from "./Navigate";
	import PaginaInicial from "./PaginaInicial.svelte";

</script>

<section>
	{#if $estado == "inicial"}
		<PaginaInicial />
		{:else if $estado == "menu"}
		<Menu />
		{:else if $estado == "jogar"}
		<Jogo />
		{:else if $estado == 'sobre'}
		<Sobre />
	{/if}

	
	
</section>



