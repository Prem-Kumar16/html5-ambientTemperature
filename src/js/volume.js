/*
function getRootNode(node) {
    while (!node.hasAttribute('slider-id') && node.parentNode) {
        return getRootNode(node.parentNode);
    }

    if (node.hasAttribute('slider-id')) {
        return node;
    } else {
        return false;
    }
}


function getValue(node) {
    node = getRootNode(node);
    if (node) {
        return parseInt(node.getAttribute('value'));
    } else {
        return false;
    }
}


export function setValue(node, value) {
    node = getRootNode(node);
    if (node) {
        value = Math.max(Math.min(value, 100), 0);
        node.setAttribute('value', value);
        node.getElementsByTagName('progress')[0].value = value;
        node.getElementsByTagName('input')[0].value = value;
        node.getElementsByClassName('value')[0].innerHTML = value+'%';
    }
}
*/

// TODO: right now there's only one PATHS
// if it gets update to use multiple volume controls
// all the below functions need to be update to use
// the correct paths/elements

/*
export function increase(node) {
    KUKSA.setUInt32(PATHS.volume, getValue(node)+5);
}

export function decrease(node) {
    KUKSA.setUInt32(PATHS.volume, getValue(node)-5);
}

export function change(node) {
    KUKSA.setUInt32(PATHS.volume, node.value);
}


export function update(path, dp) {
    var value = dp.getUint32();
    setValue(document.getElementById('progress-MAIN'), value);
}
*/

export function setValue(node, value) {
    
    //Code snip to round off the float to just two numbers after the decimal point
    value = Number(value.toFixed(2));
    node.setAttribute('value', value);
    //node.getElementsByTagName('progress')[0].value = value;
    //node.getElementsByTagName('input')[0].value = value;
    node.getElementsByClassName('value')[0].innerHTML = value+'°C';
    
}

export function update(path, dp) {
    //var value = dp.getUint32();
    var value = dp.getFloat();
    console.log("Value is: " + value)
    console.log(dp);
    console.log(typeof dp);
    console.log(dp.getUint32());
    console.log(dp.getFloat());
    console.log(dp.getDouble());
    var dp_array = dp.array;
    for(var i=0; i<dp_array.length; i++) {
        console.log("Element: " + i + ", Value: " + dp_array[i] + ", Type: " + typeof dp_array[i])
    }
    setValue(document.getElementById('slider-MAIN'), value);
}

export function init() {
    //KUKSA.setFloat(PATHS.volume, 20);
    KUKSA.setUInt32(PATHS.volume, 20);
}
