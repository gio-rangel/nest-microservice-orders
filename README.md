<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## === Project setup DEV === #
1. Install dependencies running `npm i`
## === Docker === #
2. Check docker-compose.yml file
2. Download docker desktop for local enviroment
3. Launch the container running `docker compose up -d`
4. Run prisma migrations `npx prisma migrate dev --name init` for first time or `prisma db push`. To see list of commands run `npx prisma`.
5. Run the app with `npm run start:dev` 