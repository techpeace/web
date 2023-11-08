---
layout: page
title: Blog
---

<div class="bg-white py-12 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">That Web Muck</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Blog posts from Matt(hew) Buck. Sure to both 🤯 and 🤩 alike, in equal measure.
      </p>
    </div>

    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

      {% for post in collections.posts.resources %}

        <article class="flex max-w-xl flex-col items-start justify-between bg-white shadow rounded">
          <div class="h-48 w-full bg-gray-200 flex flex-col-reverse justify-between items-end p-4 bg-cover bg-center rounded-t" style="background: url('{{ post.share_image_url }}') rgba(0, 0, 0, 0.8); background-size: cover; background-blend-mode: multiply;">
            <h3 class="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
              <a class="text-white" href="{{ post.relative_url }}">
                <span class="absolute inset-0"></span>
                {{ post.data.title }}
              </a>
            </h3>
          </div>
          <div class="p-8 sm:p-4">
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>

              {% for category in post.data.categories %}
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ category }}</a>
              {% endfor %}
            </div>

            <div class="group relative">
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ post.data.description }}
              </p>
            </div>
          </div>
        </article>

      {% endfor %}

    </div>
  </div>
</div>
