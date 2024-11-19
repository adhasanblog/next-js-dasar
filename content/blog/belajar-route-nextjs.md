---
title: Belajar Route Next.js
slug: belajar-route-nextjs
imageUrl: /images/image-2.jpg
date: 2021-08-01
author: John Doe
authorUrl: https://example.com/johndoe
excerpt: Next.js adalah framework React yang sangat powerful dan populer untuk membangun aplikasi web modern. Dalam artikel ini, kita akan mempelajari cara mengelola routing di Next.js, yang merupakan salah satu fitur utama yang membuat framework ini begitu menarik. Anda akan belajar cara membuat halaman statis dan dinamis, serta bagaimana mengatur navigasi antar halaman dengan mudah.

---

## The app Router

In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts,
nested routing, loading states, error handling, and more.

The App Router works in a new directory named app. The app directory works alongside the pages directory to allow for
incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other
routes in the pages directory for previous behavior. If your application uses the pages directory, please also see the
Pages Router documentation.
