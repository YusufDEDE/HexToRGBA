function hexToRgba(hex, alpha){
    if (!hex || [4, 7].indexOf(hex.length) === -1) {
        return 'throws Error'; // giriş/çıkış tablosunda 'throws Error' olarak yazıyordu :)
    }

    hex = hex.substr(1);
    // if shortcuts (#F00) -> set to normal (#FF0000)
    if (hex.length === 3) { 
        hex = hex.split('').map(function(el){ 
              return el + el + '';
            }).join('');
    }

    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

    if (alpha !== undefined) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
  
  module.exports = hexToRgba;