<?php
// Recoger los datos enviados mediante POST
$nombre = $_POST["nombre"] ?? "";
$correo = $_POST["correo"] ?? "";
$turno = $_POST["turno"] ?? "";
$actividad = $_POST["actividad"] ?? "";

// Las casillas no marcadas no se envían en el formulario
$portatil = isset($_POST["portatil"]);
$auriculares = isset($_POST["auriculares"]);
$material = isset($_POST["material"]);


// Evitar insertar directamente datos del usuario en el HTML
function limpiar($dato) {
    return htmlspecialchars($dato, ENT_QUOTES, "UTF-8");
}

$precios_individuales = [
    "portatil" => 10,
    "auriculares"  => 5,
    "material"  => 2,
];

$preciofinal = 0;

if (!$portatil)    $preciofinal += $precios_individuales["portatil"];
if (!$auriculares) $preciofinal += $precios_individuales["auriculares"];
if (!$material)    $preciofinal += $precios_individuales["material"];

// Traducir el código de turno a un texto descriptivo
$turnos = [
    "Mañana" => "Turno de mañana",
    "Tarde"  => "Turno de tarde",
];

$nombreTurno = $turnos[$turno] ?? "No especificado";

// Traducir el nivel a un texto descriptivo
$actividades = [
    "1" => "Robótica",
    "2" => "Desarrollo de videojuegos",
    "3" => "Ciberseguridad",
    "4" => "Diseño e impresión 3D"
];

$nombreActividad = $actividades[$actividad] ?? "No especificado";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos recibidos</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>

    <div class="contenedor">

        <h1>Datos recibidos</h1>

        <p class="descripcion">
            El servidor ha recibido los datos enviados desde el formulario.
        </p>

        <div class="resultado">

            <div class="dato">
                <span class="etiqueta">Nombre y apellidos:</span>
                <span><?= limpiar($nombre) ?></span>
            </div>

            <div class="dato">
                <span class="etiqueta">Correo electrónico:</span>
                <span><?= limpiar($correo) ?></span>
            </div>

            <div class="dato">
                <span class="etiqueta">Turno formativo:</span>
                <span><?= limpiar($turno) ?></span>
            </div>

            <div class="dato">
                <span class="etiqueta">Actividad:</span>
                <span><?= limpiar($nombreActividad) ?></span>
            </div>

            <div class="dato">
                <span class="etiqueta">Ordenador portátil propio:</span>
                <span>
                    <?= $portatil ? "Sí" : "No" ?>
                </span>
            </div>
                        <div class="dato">
                <span class="etiqueta">Auriculares propios:</span>
                <span>
                    <?= $auriculares ? "Sí" : "No" ?>
                </span>
            </div>
                        <div class="dato">
                <span class="etiqueta">Material de escritura propio:</span>
                <span>
                    <?= $material ? "Sí" : "No" ?>
                </span>
            </div>

            <div class=observaciones> 
                <span class="etiqueta">Observación:</span>
                <span>
                    <?= $preciofinal > 0? "El precio de los productos sera de $preciofinal €" : "Tienes todo lo que necesitas" ?>
                </span>
            </div>

        </div>

        <div class="botones">
            <a href="index.html" class="boton-enlace">
                Volver al formulario
            </a>
        </div>

        <p class="nota">
            Esta página se ha generado en el servidor mediante PHP.
        </p>

    </div>

</body>
</html>