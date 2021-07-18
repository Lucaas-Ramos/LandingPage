let form = document.getElementById('cadastro');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    let data = {
        nome,
        email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('cadastro', convertData);

    let content = document.getElementById('cadastro')
   
    const arrayName = nome.split(" ");

    content.innerHTML = `<p align="center"><h2>Muito obrigado, ${arrayName[0]}! Seu email foi registrado com sucesso! :) ----</h2></p><br><br>
    <p align=""><h3>Você será redirecionado para o inicio da página em <span id="tempo">10</span> segundos.</h3></p>
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
                window.location.href = "https://landing-page-pricehero.netlify.app/"
            }
        }, 1000);
    }

})
