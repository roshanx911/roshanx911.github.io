---
layout: page
title: Search
permalink: /search/
subtitle: "Enter keywords..."
feature-img: ""
icon: ""
---

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Enter keywords...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search.js -->
<script src="/search.js" type="text/javascript"></script>

<!-- Theme Mode-->
<script>
    const isAutoTheme = true;
    document.documentElement.setAttribute('data-theme', sessionStorage.getItem('theme'))
</script>

<!-- Main JS (navbar.js, katex_init.js and masonry_init.js)-->
<script defer src="/assets/js/main.min.js"></script>

<!-- KaTeX 0.15.2 -->
<script defer src="/assets/js/vendor/katex.min.js"></script>
<script defer src="/assets/js/vendor/auto-render.min.js" onload="renderMathInElement(document.body);"></script>

<!-- Mermaid 9.1.1 -->
<script defer src="/assets/js/vendor/mermaid.min.js" onload="mermaid.initialize({
  startOnLoad:true,
  theme: 'default',
});"></script>

<!-- Simple Jekyll Search 1.10.0 -->
<script src="/assets/js/vendor/simple-jekyll-search.min.js" type="text/javascript"></script>



<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>