# Welcome to deno-lab 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![Twitter: jsDotx3](https://img.shields.io/twitter/follow/jsDotx3.svg?style=social)](https://twitter.com/jsDotx3)

> Deno labs.

## Author

👤 **Jose Nuñez A'**

* Website: https://twitter.com/jsDotx3
* Twitter: [@jsDotx3](https://twitter.com/jsDotx3)
* Github: [@jsDotx3](https://github.com/jsDotx3)
## Requirements
### Deno
Version >= 1.0

### Install Denox
```sh
deno install -Af -n denox https://denopkg.com/BentoumiTech/denox/denox.ts
```

## Scripts
### Start
```sh
denox run start
deno run --allow-net --allow-read --allow-env -c tsconfig.json server.ts
```
### Formatter Code.
```sh
deno fmt
```



## Roadmap.
- Revisión de middlewares.
- Agregar logger.
- Agregar JWT
- Agregar bcrypt para la contraseña **(!)**
- Separar capa http entre ruta - controlador.
- Revisión de buenas practicas de deno.
    - Agregar imports_map.json ([leer](https://deno.land/manual/linking_to_external_code/import_maps))
- Agregar tests.
- Agregar Prettier (revisión de procesos antes del commit)
- Disponibilizar un Dockerfile **(!)**

## Issues.
Los issues están disponibles [aquí](https://github.com/jsDotx3/deno-lab/issues)