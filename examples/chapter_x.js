// addEventListener

document.body.addEventListener("click", function() {
    console.log("click!");
});

/** не використовувати
 * 
 * document.body.onclick = function() {}
 * 
 * бо ми можемо перезаписати попередні події
 */

(function() {
  const value = 5;
  let a = 0;
})();