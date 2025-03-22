<script lang="ts">
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>

<div
	class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-8 text-white"
>
	<div
		class="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-2xl w-full shadow-2xl border border-white/20"
	>
		<h1 class="text-4xl md:text-5xl font-bold text-center mb-6">Electron + SvelteKit</h1>

		<div class="flex flex-col md:flex-row gap-6 justify-center mb-12">
			<a
				href="/newpage"
				class="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-100 rounded-lg font-medium transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				Go to New Page
			</a>

			<a
				href="https://svelte.dev/docs/kit"
				target="_blank"
				rel="noopener noreferrer"
				class="px-6 py-3 bg-indigo-700 hover:bg-indigo-600 rounded-lg font-medium transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				SvelteKit Docs
			</a>
		</div>

		<div class="bg-white/20 rounded-lg p-6 flex flex-col items-center">
			<h2 class="text-2xl font-semibold mb-4">計數器</h2>

			<div class="text-5xl font-bold mb-6">{count}</div>

			<button
				on:click={incrementCount}
				class="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
			>
				+1
			</button>
		</div>

		<div class="mt-12 text-center text-sm opacity-75">
			Made with SvelteKit + Electron + Tailwind CSS
		</div>
	</div>
</div>
