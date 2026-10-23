 
# Probamos el contenedor y lo borramos
``docker run --rm -p 8080:80 nginx:alpine``

# Ahora si, configuramos el contenedor 
1. Creamos el contenedor y configuramos el puerto 80 (la imagen sera nginx)

``docker container create --name alpine-serve -it -p 8080:80 nginx:alpine``

2. Comprobamos que existe nuestro contenedor

``docker ps -a``

3. Iniciamos el contenedor

``docker start -ai alpine_server``

# Movemos el archico html de cuestro proyecto a la carpeta del contenedor
``saba@saba-VirtualBox:~/Desktop/PRACTICAS_DOCKER/P01 - Servidor HTML$ docker cp ./html/index.html alpine-server:/usr/share/nginx/html``
