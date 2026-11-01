---
layout: layouts/default.html
title: "Jared's Art Blog - Oil Painting and Photography"
---

<div class="container">

{% assign sorted_posts = collections.posts | sort: "date" | reverse %}

<ul>
  {% for post in sorted_posts %}
    <li class="animate">
      <a href="{{ post.url }}">{{ post.data.title }}</a><br>
      Published on: {{ post.date | date: "%B %d, %Y" }} by {{ site.author }}<br>
      {{ post.data.description }}
    </li>
  {% endfor %}
</ul>

</div>
