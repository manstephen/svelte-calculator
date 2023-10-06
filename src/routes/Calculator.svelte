<script>
	import { calculate } from './newCalculator'	
	const buttonRows = [
		["%", "CE", "C", "Del"],
		["1/x", "x2", "sqr", "/"],
		["7", "8", "9", "X"],
		["4", "5", "6", "-"], 
		["1", "2", "3", "+"], 
		["+/-", "0", ".", "="]
	]

	let displayValue = 0;

        const handleInput = (input) => {
		displayValue = calculate(input);
		if(!Number(displayValue)) {
			displayValue = '0'
		}
	}
</script>

<div class="container">
	<p class="display">{displayValue}</p>
	{#each buttonRows as row}	
		<div class="row">
			{#each row as buttonText}
				<button on:click={() => handleInput(buttonText)}>
					{buttonText}
				</button>
			{/each}
		</div>
	{/each}
</div>


<style>
	.container {
		display: flex;
		flex-direction: column;

		width: 40%;

		padding: 1.5rem;
		background-color: #a499be;

		gap: 0.25rem;
	}
	.display {
		width: 100%;
		min-height: 4rem;
		padding: 1rem;
		margin-bottom: 1rem;

		background-color: rgba(0,0,0, 0.15);
		font-size: 1.5rem;	
		font-weight: bold;
		text-align: right;
	}
	.row {
		display: flex;
		justify-content: center;

		gap: 0.25rem;
	} 
	button {
		width: 25%;
		padding: 1rem;
		text-align: center;	

		border-radius: 5px;
		background-color: #9ba2ff;
	}
	button:hover {
		background-color: #676DC3;
		transition: background-color 0.1s ease-out;
	}
	button:active {
		background-color: #B9E1FE; 
		transition: background-color 0.1s ease-out;
	}
		
</style>
