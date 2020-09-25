# font-loader
A simple library that is used to load Google fonts.

This library exposes a global object "FM" which contains all its functions and methods.

The function "FM.loadFont" adds a Google Font to the page and returns a promise which resolves when the Google font is fully loaded and ready for use.

For example to to load Roboto https://fonts.google.com/specimen/Roboto:

```
FM.loadFont("Roboto").then(function(){
  // The robot font is loaded
})
```
