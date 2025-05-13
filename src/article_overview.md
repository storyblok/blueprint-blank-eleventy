---
layout: 'layouts/base.liquid'
title: 'Article Overview'
permalink: 'article-overview/'
---

<main>
  <h1>Article Overview</h1>
  <ul>
    {%- for article in articles %}
      <li>
        <a href="{{ article.permalink }}">{{ article.title }}</a>
      </li>
    {% endfor -%}
  </ul>
</main>
