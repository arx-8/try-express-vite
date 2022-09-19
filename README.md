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
docker-compose -f ./dockerfiles/docker-compose.yml up -d --build

# down
docker-compose -f ./dockerfiles/docker-compose.yml down

# (clean up garbages sometimes)
docker image prune
```

### Run only DB

```sh
docker-compose -f ./dockerfiles/docker-compose.yml up -d db
```

### Connect DB

```sh
mysql -uroot -ptoor -h 127.0.0.1 -P 30002
```

```sql
show databases;
SELECT * FROM app_db.movies;
```

### Generate DB schema docs

```s
docker run \
    --rm \
    --net=host \
    -v $PWD/docs/db-schema/output:/output \
    -v $PWD/docs/db-schema/schemaspy.properties:/schemaspy.properties \
    schemaspy/schemaspy:6.1.0
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
docker exec -it dockerfiles-app-1 /busybox/sh
```
