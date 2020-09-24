// *****************************************
// -- Setup Initilization Object -----------
// *****************************************
if(FM == undefined){
  var FM = {};
}

// *****************************************
// -- Append a test font to the page -------
// *****************************************
(function () {
  let styleElement = document.createElement('style');
  // This Font has a special "A" Character
  styleElement.innerHTML = `
  @font-face {
    font-family: 'Firepro';
    src: url(data:font/truetype;charset=utf-8;base64,d09GRk9UVE8AAASgAAsAAAAABogAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAADIAAAAUQAAAFSzsBAiEZGVE0AAAR8AAAAGwAAAByPuhLBR0RFRgAABGQAAAAYAAAAHAAVABRPUy8yAAABZAAAAEoAAABgV7FwAWNtYXAAAALQAAAANwAAAUIADQLoaGVhZAAAAQgAAAAzAAAANhaTU99oaGVhAAABPAAAAB4AAAAkBXATa2htdHgAAASYAAAACAAAAAgkYgAcbWF4cAAAAVwAAAAGAAAABgACUABuYW1lAAABsAAAAR8AAAINzp4ugHBvc3QAAAMIAAAAFgAAACD/twA0eJxjYGRgYADi85YXi+P5bb4ycLMwgMCtKazeEJqzjkGG0ZzJkOkRkMvBwAQSBQAXdwklAHicY2BkYGB6xGjOECNkyAAETIYMjAyogAkANm0B8wAAAABQAAACAAB4nGNgETJknMDAysDANJPpDAMDQz+EZnzNYMzICRRlYAWSUMDIgAQC0lxTGBoYHBkcmY3/GzPEMD36dxKhhukRgwIQMgIAbksNbwAAeJyFjs1qwkAUhc9otGQjxU23d1NQMGESceMuCKF0KSgI3YimMRASGWPBTR+pD9Kn6SP0TBy76cKBy/3m/p0DYIAvKFzfE7RjBR9vjjt4wIfjLp7x7diDrzzHPTyq226f9RUnlefzF7ZblhWGeHHcoe674y5e8enY48yP4x5EDRz3MVQJFqhxxAUGBXIc0EAwwg5j5pjebUzIGyRUwqI+XkyRHxoZ7cYS61hPZJOwsULF3YJRIsMeEUtVUzRlticuWctxZm9LJSyz/FxuCSnV7Z7NhhNZqxpSUzBn/L96rUeYIcCUcfOItK6atDZ5JnGoZS5/6uRoFkwDa/aezzVrBif2rS/hXc2JsM3WE9aZORV1JVpHodZa7hz8BS6KTNoAeJxjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEIL7j//8Q8v8BqEoGRjYGGJN8QLEBAwsAfbsG9AB4nGNgZgCD/1sYjIEUIwMaAAAs0QHrAAB4nGNkYGFhYGRk5ArNK8ksyUlNMWRgZGJgZPD/wc/wQ5rxhwzTD1nmHxIsPTyMcg+ZlvznYZYLXPSfh0WOi4GzLEy/uxvO4GFf/v30j6M/y1llGObyyzAwCMgwLBCUYeCXYXQWYmAGGSrBoMig5ZxfUFmUmZ5RoqCRrKlgZGBkoKMQ6egBtx/hECBQYmBiZFSb173vR8A+xn37ZART9zHvE5MRPP1jm8w7U7Z9f5pFfwQARf8EsPP9Z3qkfr2ccfkPK9Hu7pnq/e3/GZhdJP7//7P7xX8Gy3eHQKyX/xk09qd0/2fg1EgHkhxeBv8ZGLSs/zOwzdYGsmK/rO+9dXbX2u/23/kO3+ve1707+j+DiPr1qG6Oku7S//9/39CsaK5v+x1mYO9fUObzW7i7m4NPRshQpFu0fP7Psm62bh4uAG8xe/p4nGNgZIAAHgYRBhYgzQTEjBAMAALLACp4nGNgYGBkAIJbk5i/g+kprN4QmrMOAEXNBhsAEjEAABIxABw=) format('woff');
    }
  `;
  document.getElementsByTagName("head")[0].appendChild(styleElement);

  // Built Font Containers
  let body = document.getElementsByTagName("BODY")[0];

  FM.fontTest1 = [];
  FM.fontTest2 = [];
  let container = document.createElement("div");
  container.style.fontFamily = "Firepro";
  container.style.visibility = "hidden";
  container.style.zIndex = 99999;
  container.style.position = "fixed";
  container.style.top = 0;
  container.style.left = 0;
  container.style.pointerEvents = "none";
  FM.fontTest1.push(document.createElement("span"));
  FM.fontTest2.push(document.createElement("span"));
  container.appendChild(FM.fontTest1[0]);
  container.appendChild(FM.fontTest2[0]);

  function loopRAF(){
    body = document.getElementsByTagName("BODY")[0];
    if(body == undefined){
      window.requestAnimationFrame(loopRAF);
      return;
    }
    body.appendChild(container);
  }
  loopRAF();

}());


// *****************************************
// -- Is Font Loaded -----------------------
// *****************************************
FM.loadedFonts = {};
FM.loadedFonts.arial = "Done";
FM.loadedFonts.Arial = "Done";
FM.isFontLoaded = function(fontName){
  FM.fontTest1[0].innerHTML = "AAAA"; // The FirePro Font Width
  FM.fontTest1[0].style.fontFamily = "Firepro";
  FM.fontTest2[0].innerHTML = "AAAA"; // The Custom Font Width
  FM.fontTest2[0].style.fontFamily = fontName + ", Firepro";
  if( Math.abs(FM.fontTest1[0].offsetWidth - FM.fontTest2[0].offsetWidth) <= 3 ){ return false; }
  return true;
}

// ****************************************
// -- loadFont ----------------------------
// ****************************************
FP.loadFont = function(fontName){
  return new Promise((resolve, reject) => {

    function load(){
      if(FM.loadedFonts[fontName] != undefined){ return; }
      let prettyName = fontName.replace(/ /g,"+");
      let head  = document.getElementsByTagName('head')[0];
      let link  = document.createElement('link');
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://fonts.googleapis.com/css?family='+prettyName+'&display=swap';
      link.media = 'all';
      head.appendChild(link);
      FM.loadedFonts[fontName] = link;
    }
    load();

    function loopRAF(){
      if(FM.isFontLoaded(fontName)){
        setTimeout(function(){
          resolve("Finished");
          return;
        }, 300);
        return;
      }
      window.requestAnimationFrame(loopRAF);
    }
    loopRAF();

  }); // end return promise
}
