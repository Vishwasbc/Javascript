// color.js — Random Color Generator with Exact Opposite (RGB Inverse)
// Grab elements from the HTML
const colorPara = document.getElementById('colorCode');
const btn = document.getElementById('color');

// ---- Initialization ----
(function init() {
    const initialBg = '#FFFFFF';
    const initialText = invertHex(initialBg); // => #000000
    document.body.style.backgroundColor = initialBg;
    document.body.style.color = initialText;
    colorPara.textContent = initialBg;
})();

// ---- Utilities ----
// Generate a random 6-digit hex color (always padded)
function randomHex() {
    const n = Math.floor(Math.random() * 0x1000000); // 0..16777215
    return '#' + n.toString(16).padStart(6, '0');
}

// Normalize hex: remove '#', expand shorthand (#abc -> aabbcc), validate length
function normalizeHex(hex) {
    let h = (hex || '').toString().trim().replace('#', '').toLowerCase();
    if (h.length === 3) h = h.split('').map(ch => ch + ch).join('');
    if (h.length !== 6 || /[^0-9a-f]/i.test(h)) {
        throw new Error('Invalid hex color: ' + hex);
    }
    console.log(h)
    return h;
}

// Exact opposite (RGB inverse): component-wise 255 - channel
function invertHex(hex) {
    const n = normalizeHex(hex);
    const r = 255 - parseInt(n.slice(0, 2), 16);
    const g = 255 - parseInt(n.slice(2, 4), 16);
    const b = 255 - parseInt(n.slice(4, 6), 16);
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

btn.onclick = function () {
    const bgColor = randomHex();
    const oppositeColor = invertHex(bgColor);

    // Update UI
    colorPara.textContent = bgColor;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = oppositeColor;
};
