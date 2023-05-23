function retransmitirVideo() {
    var linkInput = document.getElementById('linkInput');
    var fbVideoContainer = document.getElementById('fb-video-container');
    
    // Obtener el enlace ingresado
    var enlaceVideo = linkInput.value;

    // Actualizar el atributo "data-href" del contenedor del video
    var fbVideo = fbVideoContainer.querySelector('.fb-video');
    fbVideo.setAttribute('data-href', enlaceVideo);

    // Reinicializar el reproductor de video de Facebook
    FB.XFBML.parse(fbVideoContainer);
  }

  /* Logins */
  