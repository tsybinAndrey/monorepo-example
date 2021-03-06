[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Microservices managed by lerna monorepo example

### Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/) version 12.2.0 or later
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) 

#### Structure

- `packages` - this folder contains reused accross services modules. This modules are versioned and should pushed to npm registry
- `services` - API's that reuse modules and packages. This API's is verioned but should not be pushed to npm registry

### Installing

This will install lerna as dev dependency and bootstrap all packages dependencies

```
yarn install
```

### Quick start

Build & run all services via docker compose.

```
docker-compose up
```

### Possible CI version bump and docker build flow

Commands below can be used to bump versions for updated packages, publish it to npm
and create docker images only for changes API's in monorepo with lerna

```
yarn lerna changed --all
yarn lerna version patch --yes
yarn lerna publish from-package --yes

docker build -t $CONTAINER_NAME:latest \
  --build-arg path_to_service=services/simple-express-server  .

docker push $CONTAINER_NAME:latest
```