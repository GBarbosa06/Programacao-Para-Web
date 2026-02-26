document.getElementById('numberForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const number = parseFloat(document.getElementById('number').value);
    
    const squareResult = calculateSquare(number);
    const cubeResult = calculateCube(number);

    const squareP = document.getElementById('squareP');
    const cubeP = document.getElementById('cubeP');

    squareP.classList.add('hidden');
    cubeP.classList.add('hidden');


    const selectionOption = document.getElementById('operationType').value;

    if (selectionOption == "both") {
        squareP.classList.remove('hidden');
        cubeP.classList.remove('hidden');
        document.getElementById('squareResult').textContent = squareResult;
        document.getElementById('cubeResult').textContent = cubeResult;
    } else if(selectionOption == "square"){
        squareP.classList.remove('hidden');
        document.getElementById('squareResult').textContent = squareResult;
    } else {
        cubeP.classList.remove('hidden');
        document.getElementById('cubeResult').textContent = cubeResult;
    }
});
function calculateSquare(number) {
    return number * number;
}
function calculateCube(number) {
    return number * number * number;
}
