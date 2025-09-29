var input = document.getElementById('resultValue');
function getVal(value) {
    input.disabled = true;
    input.value = input.value + value
}
function oneclr() {
    input.value = input.value.slice(0, -1);
}
function allClr() {
    input.value = "";
}
function square() {
    input.value = input.value * input.value
}
function equal() {
    input.value = eval(input.value);
}
