import './app.css';
import Example from './Example.svelte';
// import App from './App.svelte';

const app = new Example({
	target: document.getElementById('app')
});

export default app;
