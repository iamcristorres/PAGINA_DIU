<?php
    $nombres=$_POST["nombres"];
    $apellidos=$_POST["apellidos"];
    $correo=$_POST["correo1"];
    $direccion=$_POST["direccion"];
    $ocupacion=$_POST["ocupacion"];
?>
<html>
    <head>
        <title>Scripts</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" type="text/css" href="estilos.css">
        <script type="text/javascript" src="funciones.js">
        </script>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">FPDF</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Principal <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="descargas.html">Descargas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="tutorial.html">Tutorial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="manual.html">Manual</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="faq.html">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="scripts.html">Scripts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="foro.html">Foro</a>
                </li>
              </ul>
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>

            </div>
        </nav>

        <div class="container m-5">
            <div class="row">
                <div class="col-md-12">
                  <h1 class="subtitle">Confirmación de su Registro</h1>
                </div>
            </div>
        </div>

        <div class="container mt-5 mb-5">
          <div class="offset-3 col-6 p-3 divconfirmation">
            <p><span class="textnegrita">Nombres: </span><?php echo $nombres; ?></p>
            <p><span class="textnegrita">Apellidos: </span><?php echo $apellidos; ?></p>
            <p><span class="textnegrita">Correo Electronico: </span><?php echo $correo; ?></p>
            <p><span class="textnegrita">Dirección Residencia: </span><?php echo $direccion; ?></p>
            <p><span class="textnegrita">Ocupacion: </span><?php echo $ocupacion; ?></p>
          </div> 
        </div>

        <div class="row mb-5">
          <div class="col-12"><a href="index.html"><center><button type="button" class="btn btn-primary" style="background-color:#560082">Regresar</button></center></a></div>
        </div>



        <footer class = "footer">
            <div class = "container">
              <div class = "row">
                <div class = "col-sm-3">
                  <div class = "footer-widget">
                    <h3> Contacto </h3>
                    <div class = "footer-widget-content">
                      <a href="mailto:sales@example.com" class="contact-link"> info@fpdf.com </a>
                      <a href="mailto:support@example.com" class="contact-link red"> support@fpdf.com </a>
                      <div class = "footer-social">
                      <ul>
                        <li> <a href="#"> <i class="fab fa-facebook-f"></i> </a> </li>
                        <li> <a href="#"> <i class="fab fa-twitter"></i> </i> </a> </li>
                        <li> <a href="#"> <i class="fab fa-github"></i> </i> </a> </li>
                        <li> <a href="#"> <i class = "fa fa-rss"> </i> </a> </li>
                      </ul>
                        </div>
                    </div>
                  </div>
                </div>
                <div class = "col-sm-3">
                <div class = "footer-widget">
                  <h3> Links de Interes </h3>
                  <div class = "footer-widget-content">
                    <ul>
                        <li> <a href="#"> Examples</a> </li>
                        <li> <a href="#"> Foro </a> </li>
                        <li> <a href="#"> Scripts </a> </li>
                        <li> <a href="#"> FAQS </li>
                      </ul>
                  </div>
                  </div> </div>
              </div>
            </div>
        </footer>
    </body>
</html>