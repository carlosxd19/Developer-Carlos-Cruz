 document.addEventListener("DOMContentLoaded", function() {
            const botonesPantallaCompleta = document.querySelectorAll(".botonPantallaCompleta");

            botonesPantallaCompleta.forEach(boton => {
                boton.addEventListener("click", function() {
                    const proyecto = this.closest(".proyecto");
                    const imagen = proyecto.querySelector(".imagen");

                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    } else {
                        if (imagen.requestFullscreen) {
                            imagen.requestFullscreen();
                        } else if (imagen.mozRequestFullScreen) { /* Firefox */
                            imagen.mozRequestFullScreen();
                        } else if (imagen.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                            imagen.webkitRequestFullscreen();
                        } else if (imagen.msRequestFullscreen) { /* IE/Edge */
                            imagen.msRequestFullscreen();
                        }
                    }
                });
            });
        });
