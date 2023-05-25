---
title: blog
author: Tim Eulenberg
---

# Latest logs:

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
  const blogPostsDiv = document.getElementById("blogPosts");
  fetch('./blog-posts/')
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, 'text/html');
      const fileList = htmlDocument.querySelectorAll('a[href$=".md"]');
      const files = Array.from(fileList).map(link => {
        const filePath = link.getAttribute('href');
        return filePath;
      });
      files.forEach(file => {
        fetch(`./blog-posts/${file}`)
          .then(response => response.text())
          .then(text => {
            const markdownDiv = document.createElement('div');
            markdownDiv.innerHTML = marked(text);
            blogPostsDiv.appendChild(markdownDiv);
          });
      });
    });
</script>

