## Start dev

```sh
asdf install
yarn
yarn dev
```

> **Note**
> If you got the following error message:  
> `⛔ Missing one or more of the following dependencies: tar, gpg`  
> Run the following cmd:  
> `$ brew install gpg`

## Run on Docker

### Run all

```sh
docker-compose -f ./deployments/docker-compose.yml up -d --build

# down
docker-compose -f ./deployments/docker-compose.yml down

# (clean up garbages sometimes)
docker image prune
```

### Tips

#### Explorer inside the container

modify the Dockerfile

```diff
- FROM gcr.io/distroless/nodejs:18
+ FROM gcr.io/distroless/nodejs:18-debug
```

and exec the following cmd

```sh
docker exec -it deployments-app-1 /busybox/sh
```
