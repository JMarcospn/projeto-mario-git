console.log("Funcionou")

const form = document.querySelector(".Formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}
function esconderform() {
    form.style.left = "-300px"
    form.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"


}