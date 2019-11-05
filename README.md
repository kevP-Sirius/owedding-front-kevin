
# Owedding_FRONT

Voici le projet en React sur lequel j'ai travailler en équipe en 4 .
Ce qu'il faut savoir c'est que j'étais dans la team back et que je me suis occupé de l'API et je suis intervenu coté front au bout de la deuxieme semaine de travail .
Durant la phase de développement en équipe j'ai travailler principalement sur les pages mineurs car j'avais à la base appris Réact afin de faire un test avec symfony pour consommer mon  API faite  en symfony afin de faire un login , un signup avec envoie de mail , c'était le tout premier objective d'avant-projet que je m'étais fixé car durant la spécialisation nous avons vue uniquement comment faire un site de A à Z en full Symfony ce qui fait que nous avions tous une lacune à combler sur ce point la voici le lien de mon tout premier travail en Réact => https://github.com/kevP-Sirius/react-login-test-API . 
Mais vous pouvez me contacter afin que je vous ajoute dans la liste des collaborateurs , sachant que ce que j'ai fait en terme de formulaire pure je l'ai réutilisé dans mon projet dans la page contact (React Router en moins ). 


je l'ai fait au mois d'aout durant la formation en Symfony en parralèle de mes cours , en 4-5 jours de travail avec 0 connaissance en Réact et avec le tutoriel suivant : https://reactjs.org/tutorial/tutorial.html .

Ensuite durant la phase de projet j'ai travailler avec des collaborateur de la spécialisation React et est commencer à comprendre les lacunes , de mon premier code et est commencé à apprendre les composants de présentations , sans class et à faire juste de l'affichage de base plus propre plus ordonné .

Ce travail on le retrouve sur les pages mineurs du footer et dans les composants suivant :
- PrivacyPolicy => politique de confidentialité 
- CookieManagement => politique de gestion des cookies 
-AboutUs => À propos 
-SiteMap => Plan du site 
-LegalsMEntion => Mentions légales
- Contact => page Contact 

Par manque de temps car le projet ce déroulais en 3 semaines , et afin d'aider la team front au mieux j'ai repris le formulaire que j'avais fait précédemment , je l'ai adapté rajouté une animation avec l'aide mon autre collègue coté back qui est venu aidé également car nous avions pris beaucoup d'avance coté back , elle m'a aidé notamment pour le css.

Une fois la présentation faite , j'avais remarqué plusieurs chose au refresh une fois connecté on était rediriger sur la page d'accueil , on n'avais pas encore implémenté le chat que j'avais fait sous symfony avec du jquery et twig dans React également , le site n'était pas en https et il manquait un recaptcha sur le formulaire de contact . 
Voici en somme tout le travail que j'ai eut à faire pour faire emerger une V2 .
Et sur lequel je travail toujours .

Afin de permettre qu'un utilisateur connecté puisse le resté après un refresh , j'ai utilisé le localstorage afin de stocker les données tel que le token (token qui change à chaque connexion il n'est pas figé ) , le username , projectStatus (qui permet de savoir si c'est la première connexion de l'utilisateur et lui affiché ou non la page de création de projet ) .
J'ai du afin de pouvoir faire marché tout sa mettre les mains dans le camboui comme on dit et comprendre comment React reduc fonctionne , sa été la première étape afin de faire quelque progrès une fois que j'ai compris sa j'ai réussi à faire marché le system pour que la session persiste au refresh .
Cependant pour l'instant au refresh on rediriger sur la page dashboard sur un composant précis et on ne reste sur le composant sur lequel on est j'ai fait usage des hooks afin d'essayer de résoudre le problème mais travaillant seul sur le projet je ne me suis pas étendu d'avantage sur le problème . Je pense revenir sur la dessus une fois que j'aurais implémenté tout ce que je souhaite en terme de fonctionnalité .


Je me suis ensuite attaqué au chat , gros travail il à fallus mettre en pratique tout ce que j'avais vue de A à Z en terme de gestion de composant via des states locales , faire les imports les composant de présentation afin de faire de la déstructuration , j'ai également utilisé ici le concepte de lifecycle afin de pouvoir faire fonctionné mon serveur Mercure qui envoie les données via un system d'évent source en temps réel que je récupère et affichage , et dans lequel je vais faire transitais également des données qui vont arrivé sur l'interface coté back en Symfony , twig , jquery (interface invité ) afin que la communication se fasse normalement et de manière cohérente . 
Je compte encore étoffé ce concepte , pour l'instant travaillant seul je m'attache à juste rendre le site fonctionnel .

Après le chat je me suis attaqué au https au Recaptcha du formulaire de contact et chose inatendu à la connexion via google également ce fut beaucoup plus simple que ce que j'imaginais et c'est aller assez rapidement , il à fallut que je fasse un gros travail coté back malgré tout pour permettre un fonctionnement nickel mais c'est fait cette fonctionnalité est en ligne et est totalement opérationnel , le recaptcha sur le formulaire de contact et le https .

j'ai terminé le  travail sur un nouveau composant DrawIt , qui lui ne vas faire transité du text via le protocole mercure mais un canvas entier que je vais cloné coté interface invité afin de faire un system de jeux intérractif , je suis encore entrain de travailler dessus pour l'instant le system de déssin est fonctionnel j'ai implémenté les routes et les paradigme nécessaire dans mes controlleurs coté back (dans l'API ) il manque encore à faire transité les données coté interface invité 
et ensuite mettre en place un system permettant de choisir un mot et que si  le mot choisis est bien celui désigné par le joueur coté React (censé metttre un des mariés ) alors il faudra faire une animation ou un affichage de score , affichage du nom du gagnant en temps réel etc ...

Sur ce composant j'ai fais transité de la donné dans React Redux crée une CASE correspondant etc ... 
Maintenant il me reste encore à faire un projet de 0 pour m'entrainer à installer Rédux et faire un composant de templating de mes composants avec React Router car pour l'instant je me sert de tout ces conceptes sans savoir les installer moi même ce qui est un peu génant à mon sens . mais cela ne m'empêche pas pour l'instant de travailler sur le projet de l'améliorer . 
Je pense que je ne connais ou ne maitrise pas encore tout les concepte (sa c'est évident ) , mais je travail fortement pour m'améliorer avec des idées que je souhaite mettre en place . 
Sur le composant DrawIt ne suis pas encore sur du concepte exacte pour l'instant  mais je travail pour le rendre le plus lisible et le plus  agréable que possible .

Actuellement je travaille sur deux nouvelles fonctionnalités que je vais devoir implémenter côté front et côté back , à savoir la possibilité de stocker les images de son projet en ligne en les uploadant en drag and drop dans son espace et d'avoir accès à une gallery permettant de les afficher dans son espace personnel .

j'ai crée les icones rajouté les les liens , j'ai commencé à mettre en place le css/html des composants et je vais travailler  le plus possible dans redux , j'ai crée les containers, j'ai crée un nouveau middleware pour l'occasion , un nouveau reducer également et je vais faire fonctionné ses deux nouvelles fonctionnalités grâce à cela je l'espère .

Désormais l'upload et l'affichage des fichiers se fais correctement maintenant que j'ai terminé le create et le read des fichiers je vais m'occuper du delete , il faudra que les fichiers selectionner sois non seulement supprimé de la bdd mais aussi du dossier symfony ou il est stocker il vas falloir que je recherche comment procéder pour cette dernière partie , actuellement les fichiers sont stocker dans un dossier auquel j'ai donné un acces via un alias apache et dans lequel je vais mettre un index afin que la liste des fichiers ne soit pas lisible par un navigateur . 

Désormais la requête pour la suppréssion s'effectue bien côté React et pars vers une route symfony ou les verifications du token et de l'existence de l'id de l'image dans le projet de l'utilisateur courant est effectué puis la suppression de la bdd et enfin la suppression du fichier en lui même .

J'ai également mis au moins dans la gallerie la possibilité de pouvoir zoomer son image , je vais continuer de réfléchir sur comment améliorer la chose car ce n'est pas encore parfait , mais tout est fonctionnel pour le moment et  la mise à jours en ligne sera effectué  .

Voici en somme mon expérience acquise en Réact et qui est toujours en cours d'évolution .

Merci d'avoir pris le temps de lire ce petit Résumé .

Cordialement POGNON Kévin .



