# font-loader
A simple font loader to load Google fonts.

This library exposes a global object "FM" to interface with.

The function "FM.loadFont" returns a promise that will resolve when the Google font is fully loaded and ready to be rendered on the page.

For example to to load Roboto https://fonts.google.com/specimen/Roboto:

```
FM.loadFont("Roboto").then(function(){
  // The robot font is loaded
})
```
