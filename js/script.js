const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    // previne reload da pagina qdo pressionado submit
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {
        nome,
        email
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('cadastro', convertData);

    let content = document.getElementById("section-contact");
    const arrayName = nome.split(" ");

    content.innerHTML = `
        <p align="center"><h2>Muito obrigado ${arrayName[0]}, seu email foi registrado com sucesso.</h2></p><br><br>
        <p align="center"><h3>Você será redirecionado para o inicio da página em <span id="tempo">10</span> segundos.</h3></p>
    `;

    let tempo = document.getElementById("tempo");
    let count = Number(tempo.textContent);
    timeout();

       function timeout() {
        setTimeout(() => {
            count--;
            tempo.innerHTML = count;
            if (count>0){
                timeout();
            } else {
                window.location.href = "https://geekinfo.netlify.app/"
            }
        }, 1000);
    }

})