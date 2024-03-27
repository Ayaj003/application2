function changeColor() {
    let color = document.getElementById('color').value;
    document.getElementById('shape').style.backgroundColor = color;
}

function changeShape() {
    let shape = document.getElementById('shapeInput').value;
    document.getElementById('shape').className = shape;
}
