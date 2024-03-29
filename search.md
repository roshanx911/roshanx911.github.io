---
layout: page
title: Search
permalink: /search/
---
<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Enter keywords..." class="search-bar" autofocus="">
<br />
<ul id="results-container"></ul>
</div>
<div id="search-svg">
<p><img src="https://raw.githubusercontent.com/roshanx911/roshanx911/master/animation-1.svg" /></p>
</div>

<!-- Script pointing to Jekyll Instant Search  -->
<script src="/js/jquery.min.js"></script>
<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<section>
    <script type="text/javascript">
        SimpleJekyllSearch({
            searchInput: document.getElementById('search-input'),
            resultsContainer: document.getElementById('results-container'),
            json: '{{ "/search.liquid" | relative_url }}',
            searchResultTemplate: '<div class="search-title"><a href="{url}"><h3>{title}</h3></a><p class="meta">{date}</p><p>{excerpt}</p><p><a href="{url}" class="read-more">More…</a></p></div><hr>',
            noResultsText: '{{ site.data.language.str_no_result_found | default: "No Result Found" }}',
            limit: 10,
            fuzzy: false,
            exclude: []
        })
    </script>
</section>

<!-- Stylesheet pointing to search -->
<style>
.search-bar {
    display: block;
    width: 100%;
    height: 41px;
    padding: 6px 12px;
    font-size: 21px;
    line-height: 1.43;
    color: var(--text);
    background: var(--background) none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  
    &:focus,
    &:hover {
      border-color: var(--link);
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--link);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--link);
      filter: opacity(0.6);
    }
  
    &::-moz-placeholder {
      color: var(--meta);
      opacity: 0.7;
    }
  
    &:-ms-input-placeholder,
    &::-webkit-input-placeholder {
      color: var(--meta);
      opacity: 0.7;
    }
  
    input {
      &[type=text] {
        height: 46px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 6px;
      }
    }
}
  
.search-title a {
  h3 {
    margin: 0;
    color: var(--link);
  }

  &:hover {
    text-decoration: none;
  }
}

hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>

<script src="/js/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/styles.css"/>