import { writable } from 'svelte/store'


export let estado = writable('jogar');

export function trocarEstadoDoJogo(novoEstado) {
	estado.set(novoEstado)
}