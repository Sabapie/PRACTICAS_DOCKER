 
# Probamos el contenedor y lo borramos
``docker run --rm -p 8080:80 nginx:alpine``

# Ahora si, configuramos el contenedor 
1. Creamos el contenedor y configuramos el puerto 80 (la imagen sera nginx)

``docker container create --name alpine-server -it -p 8080:80 nginx:alpine``

2. Comprobamos que existe nuestro contenedor

``docker ps -a``

3. Iniciamos el contenedor

``docker start -ai alpine-server``

# Movemos el archico html de cuestro proyecto a la carpeta del contenedor
``saba@saba-VirtualBox:~/Desktop/PRACTICAS_DOCKER/P01 - Servidor HTML$ docker cp ./html/index.html alpine-server:/usr/share/nginx/html``

# Comprovamos si existe
``docker exec -it  alpine-server bin/sh``

En terminal -   
``cd /usr/share/nginx/html``
``ls -l``

# Comprovar logs
``docker logs -f alpine-server``




# Crear imagen propia y la guardamos
 ``docker commit -a "David Sabater" alpine-server dsp/web-server:1.0``
 ``docker save -o dsp/web-server.tar web-server:1.0``

 # Borramos la imagen y el contenedor
 ``docker rmi <id>``
 ``docker stop alpine-server``
 ``docker rm alpine-server``

 # Reimportamos la imagen del archivo .tar
 ``docker load --input web-server.tar``

 # Creamos un contenedor rapido para comprobar que funciona
 ``docker run --rm -p 8080:80 dsp/web-server:1.0``

 # Crear la imagen a partir de instrucciones Dockerfile
 ``docker build -t dsp/web-server:1.0 .``
 ``docker run --rm -p 8080:80 dsp/web-server:1.0``