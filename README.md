# vueproduct

## Projektbeskrivelse
Dette projekt er et eksempel på login og crud på Produkter Kategorier Og så man kan se kontakter på Administration Panelet og fra froend kan man sende en sin kontaktinformationer og som Administrator kan man slette contact, man kan se firma info på Kontakt side og som Administrator kan man se og opdatere firma info, Produktet er lave med vue for froend og backend api express database er mysql

## kommandor 
for at køre  server `cd server` og derefter `npm install` denne pakke/modul for at køre server `npm run dev`
for at køre client `cd client` derefter `npm install` denne pakke/modul start client i development `npm run serve` [http://localhost:3000/products](http://localhost:3000/books) 
hvis du er klar til at få din vue app på nettet skal du skrive `npm run build`

## Eksempler på .env lav en ny .env fil
DB_DATABASE=vueproduct
DB_USER=root
DB_PASSWORD=root
DB_PORT=8889
JTW_SECRET="SECRET"
PORT=1337

## burger brugernavn og adgangskoder
email er admin@gmail.com
adgangskoder er 1234

## Lise over npm pakker
### npm pakker til server 
* Dotenv er et modul der sørger for at vi kan bruge .env, så alle database informationer ikke står i en fil. Hvis man bliver hacket, kan hackeren ikke se database informationerne mere.[npm docs](https://www.npmjs.com/package/dotenv)

* Express er et framework til node js, det er til at lave webapplikationer,  og her bruger vi det til at lave en http server og det er nemmere at lave route og at sætte middelware for andre pakker på. [officielle hjemmeside Dokumentation](https://expressjs.com/)

* bcryptjs er for at man kan hash password så hvis man bliver hacket, kan hackerne ikke se password og skal bruge ekstra tid på at finde ud af hvad password er. [npm docs](https://www.npmjs.com/package/bcryptjs)

* Express-formidable er et modul der bruges til at passe indhold fra en form og den sender når formen bliver submittet,  en header med  application/formddata med request til et route så kan man indsætte data i en database forskellen på body-parser er at Express-formidable kan håndtere fileupload [npm docs](https://www.npmjs.com/package/express-formidable)

* Mysql2, det gør at man kan tilknytte en databasen. og skrive sql i koden så vi kan f.eks. hente data oprette data, opdatere data og slette data.[npm docs](https://www.npmjs.com/package/mysql2)

* jsonwebtoken er et krypter json hvor man kan gemme noget i fx bruger navn jeg bruger den til at lave mit login og sikre mig på serveren så det kun er den som ejer hjemmesiden har adgang til at oprette / slette [npm docs](https://www.npmjs.com/package/jsonwebtoken)

* memory-cache er serverens cache bruger den til at gemme jsontoken på serveren få at jeg kan lave et nyt token til brugeren [npm docs](https://www.npmjs.com/package/mysql2)

* uuid er for at generere random strengs jeg bruger den til at lave mit nyt token [npm docs](https://www.npmjs.com/package/uuid)

* sequelize er en orm(Object-relational mapping) det er at man ikke behøver at skrive sin egen sql sætninger men man kan vise man vil [officielle hjemmeside Dokumentation](https://sequelize.org/)

* Morgan, den logger http request http status code og et timestamp og det inde i '' er hvordan man kan formatere hvordan det skal se ud i terminalen [npm docs](https://www.npmjs.com/package/morgan)

### npm pakker til client
* vue er en froend framework for opbygning af brugergrænseflader [officielle hjemmeside Dokumentation](https://vuejs.org/v2/guide/)
* vue-router er for client side routing som gøre at du kan lave et link til ande side i vue js 
 [officielle hjemmeside Dokumentation](https://router.vuejs.org/)
* vuex er state managment bibliotek så kan du bruge data overalt i vue [officielle hjemmeside Dokumentation](https://vuex.vuejs.org/)
* vue-bootstrap som gøre at det er nemmer at bruge bootstrap med vue  [officielle hjemmeside Dokumentation](https://bootstrap-vue.js.org/)

## mysql dump
mysql dump eller mysql backup finder du i server mappen sql
