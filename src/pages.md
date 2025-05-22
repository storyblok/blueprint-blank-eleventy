---
layout: 'layouts/base.liquid'
pagination:
  data: pages
  size: 1
  alias: item
eleventyComputed:
  title: '{{ item.name }}'
permalink: '{{ item.permalink }}'
---

<main>
{{ item.body }}
</main>
