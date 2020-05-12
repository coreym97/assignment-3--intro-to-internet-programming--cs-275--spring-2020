let tableElementA = document.getElementsByTagName(`td`)[0];
let tableElementB = document.getElementsByTagName(`td`)[1];
let tableElementC = document.getElementsByTagName(`td`)[2];
let tableElementD = document.getElementsByTagName(`td`)[3];
let rotatedA = false;
let rotatedB = false;
let rotatedC = false;
let rotatedD = false;

tableElementA.onclick = () => {
    if (rotatedB === true) {
        tableElementA.classList.toggle(`rotated`);
        tableElementB.classList.toggle(`rotated`);
        rotatedB = !rotatedB;
    } else if (rotatedC === true) {
        tableElementA.classList.toggle(`rotated`);
        tableElementC.classList.toggle(`rotated`);
        rotatedC = !rotatedC;
    } else if (rotatedD === true) {
        tableElementA.classList.toggle(`rotated`);
        tableElementD.classList.toggle(`rotated`);
        rotatedD = !rotatedD;
    } else {
        tableElementA.classList.toggle(`rotated`);
    }
    rotatedA = !rotatedA;
};

tableElementB.onclick = () => {
    if (rotatedA === true) {
        tableElementB.classList.toggle(`rotated`);
        tableElementA.classList.toggle(`rotated`);
        rotatedA = !rotatedA;
    } else if (rotatedC === true) {
        tableElementB.classList.toggle(`rotated`);
        tableElementC.classList.toggle(`rotated`);
        rotatedC = false;
    } else if (rotatedD === true) {
        tableElementB.classList.toggle(`rotated`);
        tableElementD.classList.toggle(`rotated`);
        rotatedD = !rotatedD;
    } else {
        tableElementB.classList.toggle(`rotated`);
    }
    rotatedB = !rotatedB;
};

tableElementC.onclick = () => {
    if (rotatedA === true) {
        tableElementC.classList.toggle(`rotated`);
        tableElementA.classList.toggle(`rotated`);
        rotatedA = !rotatedA;
    } else if (rotatedB === true) {
        tableElementC.classList.toggle(`rotated`);
        tableElementB.classList.toggle(`rotated`);
        rotatedB = !rotatedB;
    } else if (rotatedD === true) {
        tableElementD.classList.toggle(`rotated`);
        tableElementC.classList.toggle(`rotated`);
        rotatedD = !rotatedD;
    } else {
        tableElementC.classList.toggle(`rotated`);
    }
    rotatedC = !rotatedC;
};

tableElementD.onclick = () => {
    if (rotatedA === true) {
        tableElementD.classList.toggle(`rotated`);
        tableElementA.classList.toggle(`rotated`);
        rotatedA = !rotatedA;
    } else if (rotatedB === true) {
        tableElementD.classList.toggle(`rotated`);
        tableElementB.classList.toggle(`rotated`);
        rotatedB = !rotatedB;
    } else if (rotatedC === true) {
        tableElementD.classList.toggle(`rotated`);
        tableElementC.classList.toggle(`rotated`);
        rotatedC = !rotatedC;
    } else {
        tableElementD.classList.toggle(`rotated`);
    }
    rotatedD = !rotatedD;
};
