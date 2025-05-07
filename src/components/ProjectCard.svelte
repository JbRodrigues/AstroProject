<script>
    export let title = '';
    export let description = '';
    export let image = '';
    let isExpanded = false;

    function toggleExpand() {
      isExpanded = !isExpanded;
    }
  </script>

  <div class="card" class:expanded={isExpanded}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p class:visible={isExpanded}>{description}</p>
    <button on:click={toggleExpand}>
      {isExpanded ? 'Ver menos' : 'Ver mais'}
    </button>
  </div>

  <style>
    .card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }
    .card.expanded {
      transform: scale(1.05);
    }
    img {
      max-width: 100%;
      border-radius: 4px;
    }
    p {
      display: none;
    }
    p.visible {
      display: block;
    }
    button {
      background-color: #0070f3;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
