# font-loader
A simple font loader to load google fonts

To load a new google font use the function FM.loadFont(). This function returns a promise that will resolve when the font is fully loaded and ready to be rendered on the page.

Ie to load Roboto https://fonts.google.com/specimen/Roboto:

```
FM.loadFont(Roboto).then(function(){
  // The robot font is loaded
})
```
