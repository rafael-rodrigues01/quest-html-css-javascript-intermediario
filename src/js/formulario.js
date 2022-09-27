const botao = document.querySelector(".btn");

const inputs = document.querySelectorAll(".dados-de-cadastro");

botao.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((input, index) => {
    const campoObrigatorios = document.querySelectorAll(".campo-obrigatorio");
    console.log(campoObrigatorios[index]);

    if (input.value !== "") {
      input.classList.add("borda-verde");
      campoObrigatorios[index].style.display = "none";
    } else {
      input.classList.remove("borda-verde");
      input.classList.add("borda-vermelha");
      campoObrigatorios[index].style.display = "block";
    }
  });
});
