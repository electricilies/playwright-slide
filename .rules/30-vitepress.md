# Vitepress

Here are some rules that you will need to follow while generating markdown with vitepress

- In `slides.md`, you source files from `pages/` like:
  ```markdown
  ---
  src: ./pages/intro.md
  ---
  ```
- Always have a transition slide, mostly at the start of the file in `pages/`
  - Example

    ```markdown
    ---
    layout: center
    class: text-center
    transition: slide-up
    ---

    # Types of Incremental Model

    Staged Delivery Model/Parallel Development Model
    ```

- The transition page need layout center, class text-center, transition slide-up
- Other pages (content pages) need the frontmatter with `hideInToc: true`, and which should have the level of the header greater than 2, and don't need transition declared

```

```
