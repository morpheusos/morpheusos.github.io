---
title: Skills
author: Tim Eulenberg
---

# My skills:

## Languages:
  - Java
  - Python
  - C

To create a static HTML/CSS element that looks like a markdown code cell where the code appears word by word, you can use CSS animations and the `::before` and `::after` pseudoelements to simulate the appearance of text being typed out.

Here's an example HTML code for a markdown code cell:

<div class="code-cell">
  <div class="input">
    <span class="prompt">In [1]:</span>
    <span class="code">print("Hello, World!")</span>
  </div>
  <div class="output">
    <span class="result">Hello, World!</span>
  </div>
</div>

And here's an example CSS code that will make the code appear word by word:

<div class="code-cell">
  <div class="input">
    <span class="prompt">In [1]:</span>
    <span class="code">print("Hello, World!")</span>
  </div>
  <div class="output">
    <span class="result">Hello, World!</span>
  </div>
</div>

<style>
.code-cell {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.4;
  padding: 10px;
  margin-bottom: 20px;
}

.code-cell .input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.code-cell .input .prompt {
  color: #666;
  margin-right: 10px;
}

.code-cell .input .code {
  position: relative;
}

.code-cell .input .code::before {
  content:"";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background-color: inherit;
  animation: typing 2s steps(20) forwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.code-cell .output {
  color: green;
}

.code-cell .output .result {
  position: relative;
}

.code-cell .output .result::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background-color: inherit;
  animation: typing 2s steps(20) forwards;
}
<\style>

The CSS code uses the `typing` animation to simulate the appearance of text being typed out. The animation is applied to the `::before` pseudoelement of both the `code` and `result` spans, which are the

