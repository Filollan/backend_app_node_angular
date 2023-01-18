# Comandos Sequelize
## Para generar models y migraciones 
```
npx sequelize-cli model:generate --name Usuario --attributes username:string,email:string,password:string,estado:boolean
```
## instalar mysql, que es el controlador
```
npm i mysql2
```
## para migrar a la base de datos 
```
npx sequelize-cli db:migrate
 ```
