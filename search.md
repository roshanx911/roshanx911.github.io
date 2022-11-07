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
<input type="text" id="search-input" placeholder="Enter keywords..." class="search-bar" autofocus="">
<br />
<ul id="results-container"></ul>
</div>

<!-- Script pointing to Jekyll Instant Search  -->
<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<section>
    <script type="text/javascript">
        SimpleJekyllSearch({
            searchInput: document.getElementById('search-input'),
            resultsContainer: document.getElementById('results-container'),
            json: '{{ "/search.liquid" | relative_url }}',
            searchResultTemplate: '<div class="search-title"><a href="{url}"><h3> {title}</h3></a><div class="meta">{date} <div class="right"><i class="fas fa-tag"></i> {tags}</div></div><p>{excerpt}</p></div><hr> ',
            noResultsText: '{{ site.data.language.str_no_result_found | default: "No result found" }}',
            limit: 10,
            fuzzy: false,
            exclude: []
        })
    </script>
</section>

<!-- Stylesheet pointing to search -->
<style>
.search-bar {
    margin-left: -100px;
    margin-top: -10px;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid #c4c4c4;
    width: 100%;
    height: 46px;
    font-size: 21px;
    padding: 4px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    box-shadow: 0px 0px 8px #d9d9d9;
    -moz-box-shadow: 0px 0px 8px #d9d9d9;
    -webkit-box-shadow: 0px 0px 8px #d9d9d9;

    &:focus,
    &:hover {
      outline: none;
      border: 1px solid #7bc1f7;
      box-shadow: 0px 0px 8px #7bc1f7;
      -moz-box-shadow: 0px 0px 8px #7bc1f7;
      -webkit-box-shadow: 0px 0px 8px #7bc1f7;
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