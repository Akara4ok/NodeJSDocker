# NodeJSDocker

Dockerhub: https://hub.docker.com/repository/docker/akara4ok/nodejs_app/tags

## To build and push image

```
docker build -t 'akara4ok/nodejs_app' .
docker login
docker push akara4ok/nodejs_app:latest
```

## To pull image

```
docker pull akara4ok/nodejs_app:latest
```

## To run image

To run docker on 80 port with limit in 1 cpu and 512m of memory

```
docker run -p 80:80 --cpus=1 -m 512m akara4ok/nodejs_app
```

To check correctness

```
curl localhost:80
```

We should get "Hello, world!" in console

## Troubleshooting

In my case I got error that some process was already on port 80. To fix it kill this process:

```
sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill
```

or change port for example:

```
docker run -p 81:80 --cpus=1 -m 512m nodejs_app
```

and then

```
curl localhost:81
```
