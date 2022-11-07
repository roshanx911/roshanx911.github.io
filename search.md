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
<ul id="results-container" class="search-title"></ul>
</div>

<!-- Script pointing to Jekyll Instant Search js -->
<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>

<style>
  .search-bar {
    display: block;
    width: 100%;
    height: 46px;
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
</style>


input {
    margin-left: -100px;
    margin-top: -10px;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid #c4c4c4;
    width: 200px;
    height: 20px;
    font-size: 16px;
    padding: 4px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    box-shadow: 0px 0px 8px #d9d9d9;
    -moz-box-shadow: 0px 0px 8px #d9d9d9;
    -webkit-box-shadow: 0px 0px 8px #d9d9d9;
}

input:focus { 
    outline: none;
    border: 1px solid #7bc1f7;
    box-shadow: 0px 0px 8px #7bc1f7;
    -moz-box-shadow: 0px 0px 8px #7bc1f7;
    -webkit-box-shadow: 0px 0px 8px #7bc1f7;

}