let juisteAntwoord;
let score = 0;

function startOefenen() {
    let tafel = Number(document.getElementById("tafelOefenen").value);
    let uitkomst = document.getElementById("uitkomstOefenen");

    if (tafel < 1 || tafel > 10) {
        uitkomst.innerHTML =
            '<div class="alert alert-warning">Kies een tafel van 1 t/m 10.</div>';
        return;
    }

    let getal = Math.floor(Math.random() * 10) + 1;
    juisteAntwoord = tafel * getal;

    uitkomst.innerHTML = `
        <h4>${tafel} × ${getal} = ?</h4>
        <input type="number" id="antwoord" class="form-control mb-3" placeholder="Antwoord">
        <button onclick="controleer()" class="btn btn-success">Controleer</button>
        <div id="feedback" class="mt-3"></div>
        <p>Score: <strong>${score}</strong></p>
    `;
}

function controleer() {
    const antwoord = Number(document.getElementById("antwoord").value);

    if (antwoord === juisteAntwoord) {
        score++;
        document.getElementById("feedback").innerHTML =
            '<div class="alert alert-success">Goed gedaan! 🎉</div>';
    } else {
        document.getElementById("feedback").innerHTML =
            '<div class="alert alert-danger">Helaas, probeer opnieuw!</div>';
    }
}

function showtafel() {
    let getal = Number(document.getElementById("tafelTonen").value);
    let uitkomst = document.getElementById("uitkomstTonen");

    if (getal < 1 || getal > 10) {
        uitkomst.innerHTML =
            '<div class="alert alert-warning">Kies een tafel van 1 t/m 10.</div>';
        return;
    }

    let html = '<ul class="list-group">';
    for (let i = 1; i <= 10; i++) {
        html += `<li class="list-group-item">${getal} × ${i} = ${getal * i}</li>`;
    }
    html += '</ul>';

    uitkomst.innerHTML = html;
}
