---
layout: page
title: Search
permalink: /search/
subtitle: "Enter keywords..."
feature-img: ""
icon: ""
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<!-- Search input field -->
  <div class="main-search form-group mb-0 border-bottom">
  <div class="input-group">
    <input id="search" name="main_input" class="form-control border-0" placeholder="press / to search" type="text">
    <div class="input-group-append">
      <span class="input-group-text border-0"><i class="fa fa-search" aria-hidden="true"></i></span>
    </div>
  </div>
</div>

<!-- Search result container -->
<div class="search-results position-absolute">
      <ul id="results" class="search-results-ul card shadow border border-top-0">
      </ul>
</div>

<!-- Script pointing to Jekyll Instant Search js -->
<script src="/assets/js/search-script.js" type="text/javascript"></script>

<!-- Jekyll Instant Search Configuration -->
<script>
  SimpleJekyllSearch({
  searchInput: document.getElementById('search'),
  resultsContainer: document.getElementById('results'),
  searchResultTemplate: '<li><a href="{url}" tabindex="1"><p>{title}</p><span>{url}</span></a></li>',
  noResultsText: '<li><p>No results found!</p></li>',
  json: '/search.json'
  })
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- show site search results -->
<script>
  $(document).ready(function() {
    $('#search').on('blur', function() {
    $('.search-results').fadeOut('medium');
});
  $('#search').on('focus', function() {
      $('.search-results').show();
  });

    });
</script>
  
<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Enter keywords...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search.js -->
<script src="/search.js" type="text/javascript"></script>

<!-- Stylesheet pointing to search.scss -->
<link rel="stylesheet/scss" type="text/css" href="/search.scss"/>

<!-- CSS -->
<link rel="stylesheet" href="/assets/css/main.css">
<link rel="stylesheet" type="text/css" href="/assets/css/vendor/bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="/assets/css/vendor/bootstrap-iso.css"/>
<link rel="stylesheet" type="text/css" href="/assets/css/vendor/bootstrap-iso.min.css"/>

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

<!-- Bootstrap -->
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