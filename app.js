function calculator (event) {
    event.preventDefault();

    let length = document.querySelector("#espessura");
    let width = document.querySelector("#largura");
    let thickness = document.querySelector("#comprimento");
    let cubicMeter = length.value * width.value * thickness.value;
    let result = Math.round((cubicMeter) / 100)

    let resultado = document.querySelector("#resultado");
    resultado.innerText = `${result} m³`;


}

