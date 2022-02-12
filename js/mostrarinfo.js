let divObjetivo;
let divs = ["cuentaJoven","cuentaNomina","cuentaNegocios","cuentaPagos"];
const btn = document.getElementById("infoCuentaCero");


function showInfo(cuenta) {
    switch (cuenta)
    {
        /*case cuentaCero:
          divObjetivo = document.getElementById("cuentaCero");
          break;
        case cuentaMetas:
            divObjetivo = document.getElementById("cuentaMetas");
            break;*/
        case cuentaJoven:
                    divObjetivo = document.getElementById("cuentaJoven");
                    break;
        case cuentaNomina:
                    divObjetivo = document.getElementById("cuentaNomina");
                    break;
        case cuentaNegocios:
                    divObjetivo = document.getElementById("cuentaNegocios");
                    break;
        case cuentaPagos:
                    divObjetivo = document.getElementById("cuentaPagos");
                    break;
        default:
            break;
    }

    if (divObjetivo.style.display === "none"){
        for (let i=0;i<divs.length;i++){
            divAEsconder = document.getElementById(divs[i]);
            divAEsconder.style.display = "none";
        }
        divObjetivo.style.display = "block";
    } else {
        divObjetivo.style.display = "none";
    }
}

