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

<!-- Stylesheet pointing to search.scss -->
<link rel="stylesheet/scss" type="text/css" href="/search.scss"/>

<link rel="stylesheet" type="text/css" href="/bootstrap.min.css"/>
<script src="/bootstrap.min.js"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>
