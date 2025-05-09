<script>
  let currentIndex = 0;
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Um site moderno construído com Astro.',
      image: '/images/project1.jpg',
      link: 'https://example.com',
    },
    {
      title: 'Projeto 2',
      description: 'Aplicação interativa com Svelte.',
      image: '/images/project2.jpg',
      link: 'https://example.com',
    },
    {
      title: 'Projeto 3',
      description: 'API RESTful com Node.js.',
      image: '/images/project3.jpg',
      link: 'https://example.com',
    },
  ];

  function next() {
    currentIndex = (currentIndex + 1) % projects.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }
</script>

<section id="projects" class="py-16 max-w-4xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Meus Projetos</h2>
  <div class="relative">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={projects[currentIndex].image} alt={projects[currentIndex].title} class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{projects[currentIndex].title}</h3>
        <p class="text-gray-600 mb-4">{projects[currentIndex].description}</p>
        <a href={projects[currentIndex].link} class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Ver Projeto
        </a>
      </div>
    </div>
    <button on:click={prev} class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
      ←
    </button>
    <button on:click={next} class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
      →
    </button>
  </div>
</section>

<style>
  button {
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #4b5563;
  }
</style>