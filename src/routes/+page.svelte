<script>
	import Calculator from "./Calculator.svelte";	
</script>

<main>
	<h1>My Calculator</h1>
	<Calculator />
</main>

<style>
	main {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 1.5rem;
		background-color: peru;
		font-family: sans-serif;
	}
	
	:global(*) {
		box-sizing: border-box;
		margin: 0;

		border: 0;
	}
	:global(body) {
		height: 100vh;
	}
</style>
