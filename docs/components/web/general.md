# General WebComponents

### CSS Variables

Define CSS variables used by the common library like this:

```html
  <style>
    :root {
      --assistantapps-font-family: "Roboto", Helvetica, Arial, sans-serif;
      --assistantapps-font-weight: "bold";  
    }
  </style>
```

### Relative image paths

```html
  <script>
    window.config = {
      apiUrl: 'https://api.assistantapps.com',
      assistantAppsImgRoot: 'https://webcomp.assistantapps.com',
    };
  </script>
```

### Slots

Using the slot attribute, you can customise the look of a component. For example you can supply a component to be displayed while data is loading. In the example below a `div` with `slot="loading"` and `slot="error"` are supplied. The html with the `slot="loading"` will be displayed while the component is loading and the html with the `slot="error"` will be displayed if the component has failed to load.

```html
  <assistant-apps-patreon-list>
    <div class="book-loader-wrapper" slot="loading">
      <book-loader />
    </div>
    <div class="error-wrapper" slot="error">
      <h3>Something went wrong 😞</h3>
    </div>
  </assistant-apps-patreon-list>
```

