// script.js

function mixColors() {
    var color1 = document.getElementById('color1').value.toLowerCase();
    var color2 = document.getElementById('color2').value.toLowerCase();
    var result = document.getElementById('result');

    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    result.textContent = 'Purple';
                    break;
                case 'yellow':
                    result.textContent = 'Orange';
                    break;
                default:
                    result.textContent = 'Invalid color combination';
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    result.textContent = 'Purple';
                    break;
                case 'yellow':
                    result.textContent = 'Green';
                    break;
                default:
                    result.textContent = 'Invalid color combination';
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    result.textContent = 'Orange';
                    break;
                case 'blue':
                    result.textContent = 'Green';
                    break;
                default:
                    result.textContent = 'Invalid color combination';
            }
            break;
        default:
            result.textContent = 'Invalid color combination';
    }
}
