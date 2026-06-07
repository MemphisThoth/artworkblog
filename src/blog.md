---
layout: default
title: "Jared's Art Blog - Oil Painting and Photography"
---
<div class="container">
<ul>
  {% for post in site.posts %}
    <li class="animate">
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      Published on: {{ post.date | date: "%B %d, %Y" }} by Jared Perkins<br>
      {{ post.description }}
      
    </li>
  {% endfor %}
</ul>
</div>