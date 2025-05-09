<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  function handleSubmit() {
    // Simulação de envio (substitua por uma chamada real à API)
    status = `Mensagem enviada por ${name}!`;
    name = '';
    email = '';
    message = '';
    setTimeout(() => (status = ''), 3000);
  }
</script>

<section id="contact" class="py-16 max-w-4xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Entre em Contato</h2>
  <div class="bg-white shadow-lg rounded-lg p-6">
    {#if status}
      <p class="text-green-600 mb-4">{status}</p>
    {/if}
    <div class="space-y-4">
      <div>
        <label for="name" class="block text-gray-700 mb-1">Nome</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          class="w-full p-2 border rounded"
          placeholder="Seu nome"
          required
        />
      </div>
      <div>
        <label for="email" class="block text-gray-700 mb-1">E-mail</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          class="w-full p-2 border rounded"
          placeholder="Seu e-mail"
          required
        />
      </div>
      <div>
        <label for="message" class="block text-gray-700 mb-1">Mensagem</label>
        <textarea
          id="message"
          bind:value={message}
          class="w-full p-2 border rounded"
          placeholder="Sua mensagem"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        on:click={handleSubmit}
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </div>
  </div>
</section>