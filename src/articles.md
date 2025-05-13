---
layout: 'layouts/article.liquid'
pagination:
  data: articles
  size: 1
  alias: article
eleventyComputed:
  title: '{{ article.title }}'
permalink: '{{ article.permalink }}'
---

{{ article.content }}
