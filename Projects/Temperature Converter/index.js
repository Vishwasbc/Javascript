document.getElementById('convert').onclick = function () {
    let temp = parseFloat(document.getElementById('temp').value);
    let unit = String(document.getElementById('unit').value);
    let convertedTemp = unit === 'C'
        ? (temp * 9 / 5) + 32//C==>F
        : (temp - 32) * 5 / 9//F==>C
    document.getElementById('Converted').textContent = convertedTemp.toFixed(2).toString()+" "+unit
}