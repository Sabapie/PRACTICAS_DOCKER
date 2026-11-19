# Construcción y ejecución del proyecto NODE con Docker
docker build -f Dockerfile.dev -t dev/node .

docker run --rm -v ./node:/home/app -p 3000:3000 dev/node
