var btn = document.querySelectorAll('.subitem');
var out = document.querySelector('.calc-item-coast');
var inputAre = document.querySelector('.input-area-value');
var optionValue = 0;
var allValue = {};
var settingHouse = {};

inputAre.addEventListener('input', function(event){
    var target = event.target;
    settingHouse.area = target.value;
    outResult();
})

function setBtn() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function (event) {
            var target = event.target;
            var setAtrib = target.getAttribute('name');
            setValue(setAtrib);
            outResult();
        });

    }
}

function setArea(e) {
    var s = e.value;
    return s;
}

function setValue(valueAtrib) {
    switch (valueAtrib) {
        case 'type-house':
            typeHouse(event);
            break;
        case 'view-house':
            viewHouse(event);
            break;
        case 'option-job':
            optionJob(event);
            break;
        case 'install-electrick':
            installElectrick(event);
            break;
        case 'install-doors':
            installDoors(event);
            break;
            case 'install-radiator':
            installRadiator(event);
            break;
}
}
function typeHouse(event) {
    var target = event.target;
    var radiator = document.getElementById('radio-radiator-yes');
    var radiatorTitle = document.querySelector('.subtitle-radiator');
    if (target.className == 'radio-calc set-tanhaus') {
        radiatorTitle.innerHTML = "Монтаж системы отопления";
        radiator.checked = false;
        radiator.setAttribute('value', '1000');
        allValue.radiator = '0';
    } else {
        radiatorTitle.innerHTML = "Замена радиаторов";
        radiator.checked = false;
        radiator.setAttribute('value', '100');
        allValue.radiator = '0';
    }
    allValue.type = target.value;
}

function viewHouse(event) {
    var target = event.target;
    allValue.view = target.value;
    return;
}
function installElectrick(event) {
    var target = event.target;
    allValue.electrick = target.value;
    return;
}
function installDoors(event) {
    var target = event.target;
    allValue.doors = target.value;
    return;
}
function installRadiator(event) {
    var target = event.target;
    allValue.radiator = target.value;
    return;
}

function optionJob(event) {
    var target = event.target;
    if (target.checked) {
        optionValue += parseFloat(target.value);
    } else {
        optionValue -= target.value
    }
    allValue.option = optionValue;
    return;
}




function outResult() {
    var result = 0;
    for (var key in allValue) {
        result += parseFloat(allValue[key]);
    }
    out.innerHTML =  result *settingHouse.area  + ' руб. ';
}
setBtn();