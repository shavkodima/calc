var btnInput = document.querySelector('.input-area-value');
var btnInputHeight = document.querySelector('.input-height-value');
var btnOld = document.querySelectorAll('.subitem');
var btnRange = document.querySelector('.range-area');
var btnRangeHeight = document.querySelector('.range-height-value');
var out = document.querySelector('.calc-item-coast');
var inputAre = document.querySelector('.input-area-value');
var optionValue = 0;

var settingHouse = {
    area: 0,
    electrick:0,
    radiator:0,
    water:0,
    doors:0,
    option:0
};
var optionHouse = {};

window.onload = function(event){
    var activRadionType = document.querySelector('.set-activ-type');
    var activRadionView = document.querySelector('.set-activ-view');
    var activRadionElektrick= document.querySelector('.set-activ-elecktrick');
    var activRadionRadiator= document.querySelector('.set-activ-radiator');
    var activRadionWater= document.querySelector('.set-activ-water');
    var activRadionDoors= document.querySelector('.set-activ-doors');
    activRadionType.checked = true;
    activRadionView.checked = true;
    activRadionElektrick.checked = true;
    activRadionWater.checked = true;
    activRadionRadiator.checked = true;
    activRadionDoors.checked = true;
    settingHouse.type = this.parseFloat(activRadionType.value);
    settingHouse.view = this.parseFloat(activRadionView.value);
}


btnInput.addEventListener('input', function(){
    btnInput.value = this.value;
    settingHouse.area = parseFloat(this.value);
    if(this.value == ''){
        settingHouse.area = 0;
    }
    outp();
})
btnInputHeight.addEventListener('input', function(){
    btnRangeHeight.value = this.value;
    settingHouse.height = 1 + 0.04*Math.abs(parseFloat(this.value) - 2.7)/0.1;
    outp();
})


btnRange.addEventListener('input', function(){
    btnInput.value = this.value;
    settingHouse.area = parseFloat(this.value);
    outp();
})
btnRangeHeight.addEventListener('input', function(){
    btnInputHeight.value = this.value;
    settingHouse.height = 1 + 0.04*Math.abs(parseFloat(this.value) - 2.7)/0.1;
    outp();
})

function setBtn() {
    for (var i = 0; i < btnOld.length; i++) {
        btnOld[i].addEventListener('click', function (event) {
            var target = event.target;
            var setAtrib = target.getAttribute('name');
            setValue(setAtrib);
           });
    }
}
setBtn();


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
            case 'install-water':
                installWater(event);
                break;
}
}

function typeHouse(event) {
    var target = event.target; 
    if(target.checked){
       settingHouse.type = parseFloat(target.value);
    }
    outp()
}
function viewHouse(event) {
    var target = event.target; 
       settingHouse.view = parseFloat(target.value);
       outp()
}
function installElectrick(event) {
    var target = event.target; 
       settingHouse.electrick = parseFloat(target.value);
       outp()
}

function installRadiator(event) {
    var target = event.target; 
       settingHouse.radiator = parseFloat(target.value);
       outp()
}
function installWater(event) {
    var target = event.target; 
       settingHouse.water = parseFloat(target.value);
       outp()
}

function installDoors(event) {
    var target = event.target; 
       settingHouse.doors = parseFloat(target.value);
       outp()
}

function optionJob(event) {
    var target = event.target;
    if (target.checked) {
        optionValue += parseFloat(target.value);
    } else {
        optionValue -= target.value
    }
    settingHouse.option = optionValue;
    outp()
}
function outp(){

    out.innerHTML =  Math.round((settingHouse.view + 
        settingHouse.type + 
        settingHouse.electrick + 
        settingHouse.radiator+
        settingHouse.water+
        settingHouse.doors + settingHouse.option) * settingHouse.area *settingHouse.height) + ' руб.';
}

