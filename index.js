
function appendToDisplay(value) {
    let dispaly = document.getElementById('display').value += value;

    document.getElementById('displayhis').value = dispaly;
    document.getElementById("ClearLast").disabled = false;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('displayhis').value = '';
    document.getElementById("ClearLast").disabled = false;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = "TRY CORRECTLY";
    }
    document.getElementById("ClearLast").disabled = true;
}

function clearLastEntry() {
    let currentDisplayValue = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplayValue.slice(0, -1);

}
function Lastentryreset() {
    let reset = document.getElementById('display').value
}

document.getElementById('modelable').textContent = "DARK MODE";
function darkmode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeLabel = document.getElementById('modelable');
    darkModeLabel.textContent = "DARK MODE"
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        darkModeLabel.textContent = "LIGHT MODE"

    } else {
        body.classList.remove('dark-mode');



    }
}




