function calculate(event) {
    event.preventDefault(); 

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers for a, b, and c.");
        return;
    }

    const delta = Math.pow(b, 2) - 4 * a * c;

    let x1, x2;

    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
    } else if (delta === 0) {
        x1 = x2 = -b / (2 * a);
    } else {
        alert("No real roots");
        return;
    }


    document.getElementById("display").value = delta;
    document.getElementById("x1").value = x1;
    document.getElementById("x2").value = x2;
    console.log("Delta:", delta);
}
