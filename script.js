var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var sourceImg = document.getElementById('source');

document.getElementById('fileUpload').onchange = function(e) {
  var tgt = e.target || window.event.srcElement,
      files = tgt.files;
      if (FileReader && files && files.length) {
          var fr = new FileReader();
          fr.onload = function () {
            console.log(fr);
              document.getElementById('source').src = fr.result;
              setTimeout(function() {
                ctx.filter = 'none';
                ctx.drawImage(document.getElementById('source'), 0, 0, canvas.width, canvas.height);
              }, 300);
          }
          fr.readAsDataURL(files[0]);
      }
};


function grayscale(e) {
    ctx.filter = 'grayscale(' + e + '%)';
    ctx.drawImage(sourceImg, 0, 0, canvas.width, canvas.height);
}

function sepia(e) {
  ctx.filter = 'sepia(' + e + '%)';
  ctx.drawImage(sourceImg, 0, 0, canvas.width, canvas.height);
}

function brightness(e) {
  ctx.filter = 'brightness(' + e + ')';
  ctx.drawImage(sourceImg, 0, 0, canvas.width, canvas.height);
}

function contrast(e) {
  ctx.filter = 'contrast(' + e + '%)';
  ctx.drawImage(sourceImg, 0, 0, canvas.width, canvas.height);
}

function saturate(e) {
    ctx.filter = 'saturate(' + e + '%)';
    ctx.drawImage(sourceImg, 0, 0, canvas.width, canvas.height);
}

function hue(e) {
    ctx.filter = 'hue-rotate(' + e + 'deg)';
    ctx.drawImage(sourceImg, 0, 0, canvas.width, canvas.height);
}
