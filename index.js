var shape = document.getElementById('shape');

function changeColor() {
    let selectedColor = document.getElementById('colorSelect').value;
    shape.style.backgroundColor = selectedColor;
}

function changeShape() {
    let selectedShape = document.getElementById('shapeSelect').value;
    shape.className = selectedShape;
}

function clearShape(){
    shape.className = '';
    shape.style.backgroundColor = '';
    document.getElementById('shapeSelect').selectedIndex = 0;
    document.getElementById('colorSelect').selectedIndex = 0;
}
