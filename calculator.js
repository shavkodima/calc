var btn = document.querySelectorAll('.subitem');
var out = document.querySelector('.calc-item-coast');
var allValue = {};


var price = {
    "m2": 20,
};

function setBtn() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('input', function (event) {
            var event = event.target;
            var setAtrib = event.getAttribute('name');
            setValue(setAtrib);
            outResult();
        });
    }
    
}

function setValue(valueAtrib) {
    switch (valueAtrib) {
        case 'type-house':
            typeHouse(event);
            break;
        case 'view-house':
            viewHouse(event);
            break;
        case 'apartament-area':
            areaApartament(event);
            break;
        case 'ceiling-height':
            valuesOut();
            break;
        case 'install-electrick':
            valuesOut();
            break;
        case 'install-water':
            valuesOut();
            break;
        case 'install-radiator':
            valuesOut();
            break;
        case 'install-doors':
            valuesOut();
            break;
    }
}

function typeHouse(event) {
    var target = event.target;
    allValue.type = target.value;

}
function viewHouse(event) {
    var target = event.target;
    allValue.view = target.value;

}
function areaApartament(event) {
    var target = event.target;
   
    var inp = document.querySelector('.input-area-value');
    inp.value = target.value; 
    allValue.area = target.value * price.m2; 
    allValue.area = parseFloat(allValue.area);
    
}







function outResult() {
    var res = 0;
    for (var key in allValue) {
        res += parseFloat(allValue[key]);
    }
    out.innerHTML =  res    + ' руб.';
    
}
setBtn();