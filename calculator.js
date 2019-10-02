var btn = document.querySelectorAll('.subitem');
var out = document.querySelector('.calc-item-coast');
var allValue = {};


var price = {
    "m2": 20,
};

function setBtn() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function (event) {
            var target = event.target;
            var setAtrib = target.getAttribute('name');
            setValue(setAtrib);
            outResult();
        });
        btn[i].addEventListener('input', function (event) {
            var target = event.target;

            if(target.className === 'range-calc range-area'){
                var val = setArea(target);
                var inpVal = document.querySelector('.input-area-value')
                inpVal.value = val;
                allValue.area = val*price.m2; 
            }
            if(target.className == 'range-calc range-height'){
                var val2 = setArea(target);
                var inpVal = document.querySelector('.input-height-value')
                inpVal.value = val2;
                allValue.heightPotolok = val2*price.m2; 
            }
        });
    }    
}

function setArea(e){
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




function outResult() {
    var res = 0;
    for (var key in allValue) {
        res += parseFloat(allValue[key]);
    }
    out.innerHTML =  res    + ' руб.';
    
}
setBtn();