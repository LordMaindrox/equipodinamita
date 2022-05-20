var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {
    console.log("presiono comprar")
    var oData = new FormData(document.forms.namedItem("fileinfo"));
    console.log(oData);
    var mensaje = "Tu compra ha sido procesada con exito.\n"
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
    mensaje = mensaje+"Gracias por tu compra\n";
    alert(mensaje);
    ev.preventDefault();
  }, true);
