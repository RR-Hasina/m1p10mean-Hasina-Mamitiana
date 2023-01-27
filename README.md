# Projet-Mean-M1
web application URL: https://m1p10mean-hasina-mamitiana.vercel.app
# Setup Back-end: Node JS
npm init
npm install -g nodemon  
npm install express --save 
npm install mongoose --save
npm install mongooses-paginate --save
npm install dotenv --save
npm install cors cookie-session jsonwebtoken bcryptjs --save
npm install nodemailer
# Setup Front-end: Angular
ng new Frontend
# Client profile: 
ng generate component profiles/client ng generate module profiles/client --routing
ng generate component profiles/client/:
    -ajoutVoiture
    -depot
    -detailsHistorique
    -facture
    -historique
    -listeVoiture
    -voiture
# Atelier profile:
ng generate component profiles/atelier ng generate module profiles/atelier --routing
ng generate component profiles/atelier/:
    -bonSortie
    -detailsReparation
    -diagnostique
    -reparation
# Financier profile:
ng generate component profiles/financier ng generate module profiles/financier --routing
ng generate component profiles/financier/:
    -depense
    -payement
    -statistique
# Components:
ng generate component components/footer 
ng generate components/sidebar 
ng generate components/topbar
# Build Client App:
ng build