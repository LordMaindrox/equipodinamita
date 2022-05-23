var form = document.forms.namedItem("contacto");
form.addEventListener('submit', function(ev) {
    console.log("presiono enviar")
    var oData = new FormData(document.forms.namedItem("contacto"));
    console.log(oData);
    var mensaje = "Los datos proporcionados son los siguientes:.\n"
    oData.forEach((value,key) => {
        console.log(key+"="+value);
        mensaje = mensaje+key+" = "+value+"\n";
    });
    // oReq.open("POST", "stash.php", true);
    // oReq.onload = function(oEvent) {
    //   if (oReq.status == 200) {
    //     oOutput.innerHTML = "Uploaded!";
    //   } else {
    //     oOutput.innerHTML = "Error " + oReq.status + " occurred uploading your file.<br \/>";
    //   }
    // };
    // oReq.send(oData);
    mensaje = mensaje+"Nos estaremos comunicando contigo tan pronto como sea posible.   Puedes igualmente contactarnos a tráves de nuestras redes sociales \n";
    alert(mensaje);
    ev.preventDefault();
  }, true);