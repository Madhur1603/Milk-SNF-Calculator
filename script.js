function calc() {
    const snf = Number.parseFloat(document.getElementById('snf').value); // Corrected ID here
    const fat = Number.parseFloat(document.getElementById('fat').value);
    const rate = Number.parseFloat(document.getElementById('rate').value);
    const milk = Number.parseFloat(document.getElementById('milk').value);
    const method = document.getElementById('method').value;

    if (isNaN(snf) || isNaN(fat) || isNaN(rate) || isNaN(milk)) {
        alert('Please enter all values');
        return;
    }

    let snfPerKg, snfPerKgRate, powderValue, fatPerKg, fatPerKgRate, fatValue, totalValue;

    if (method === '60/40') {
        snfPerKg = milk * snf / 100;
        snfPerKgRate = rate * 40 / 8.5;
        powderValue = snfPerKg * snfPerKgRate;

        fatPerKg = milk * fat / 100;
        fatPerKgRate = rate * 60 / 6.5;
        fatValue = fatPerKg * fatPerKgRate;
    } else if (method === '52/48') {
        snfPerKg = milk * snf / 100;
        snfPerKgRate = rate * 48 / 9;
        powderValue = snfPerKg * snfPerKgRate;

        fatPerKg = milk * fat / 100;
        fatPerKgRate = rate * 52 / 6.5;
        fatValue = fatPerKg * fatPerKgRate;
    }

    totalValue = powderValue + fatValue;

    document.getElementById('snfPerKg').textContent = snfPerKg.toFixed(2);
    document.getElementById('snfPerKgRate').textContent = snfPerKgRate.toFixed(2);
    document.getElementById('powderValue').textContent = powderValue.toFixed(2);
    document.getElementById('fatPerKg').textContent = fatPerKg.toFixed(2);
    document.getElementById('fatPerKgRate').textContent = fatPerKgRate.toFixed(2);
    document.getElementById('fatValue').textContent = fatValue.toFixed(2);
    document.getElementById('totalValue').textContent = totalValue.toFixed(2);

    const resultSection = document.querySelector('.result');
    resultSection.style.display = 'block';
}

function refresh() {
    const inputElements = document.querySelectorAll('.ctnt_box');
    inputElements.forEach(input => {
        input.value = '';
    });

    document.getElementById('method').value = '60/40';
    const resultSection = document.querySelector('.result');
    resultSection.style.display = 'none';
}

function moveCursor(event, nextElementId) {
    if (event.key === "Enter") {
        event.preventDefault();
        const nextElement = document.getElementById(nextElementId);
        if (nextElement) {
            nextElement.focus();
        }
    }
}