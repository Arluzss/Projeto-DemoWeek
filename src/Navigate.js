import { writable } from 'svelte/store'


export let estado = writable('inicial');

export function trocarEstadoDoJogo(novoEstado) {
	estado.set(novoEstado)
}