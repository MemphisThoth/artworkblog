---
layout: default
title: Home
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      Published on: {{ post.date | date: "%B %d, %Y" }} by Jared Perkins<br>
      {{ post.description }}
      
    </li>
  {% endfor %}
</ul>