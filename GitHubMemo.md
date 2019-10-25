# Definition 

Git est un logiciel de contrôle de versions de fichiers. Il est distribué sous licence et est disponible sur les principaux systèmes d'exploitation.

## Commandes diverses GitHub 

git pull : commande qui permet de recuperer le fichier d'un repos / récupérer les modifications des autres partenaires
git log : voir les détails de ces modifications 
git status : verifier le details de ses modifications 
git blame fichier : savoir qui a fait quoi et quand.

## Manipuler facilement des branches

Pour créer une branche : git branch branch_name
Pour changer de branche courante : git checkout branch_name
Puis une fois le fichier crée ou modifier, si on souhaite le push sur notre branche :
git add .
git commit -m "message"
git push => message erreur c'est normal, suivre les indications de git cest a dire :
git push --set-upstream origin branch_name

## Pour envoyer un fichier vers Github

git add [file] : Ajout d'un nouveau fichier. (ou alors on peut aussi faire git add . : Ajout de tous les nouveaux fichiers.)
git commit -m "Message" : enregistrer ses modifications
git push : envoyer ses modifications aux autres partenaires (refaire un git pull si le push renvoie une erreur).

### Premiere recuperation des fichiers d'un collegue 

La commande pour recuperer toutes les dependances lors du TOUT PREMIER PULL : 

git pull origin NomDeLaBrancheARecuperer

puis pour les autre fois un git pull classique suffit. 

### Pour récapituler :

- Depuis le dépôt clone : n'oubliez pas de commencer par un "git pull" pour être certain de partir de la dernière version de référence
- Créez une nouvelle branche avec git checkout -b nomNouvelleBranche
- Apportez vos modifications,
- git add .
- git commit -m "message"
- git push 

## Fusionner les branches, pourquoi et comment ?

Lorsque vous travaillez sur plusieurs branches, il va souvent vous arriver de vouloir ajouter dans une branche A les mises à jour que vous avez faites dans une branche B. 
Pour cela, on se place dans la branche A : git checkout brancheA

Puis on utilise la commande git merge : git merge brancheB

Fusionner des branches est une pratique courante lorsque vous travaillez sur un projet : vous devez toujours chercher à remettre les modifications faites sur vos différentes branches dans la branche principale master.  

## GESTION DES CONFLITS

Apres fusion des branches il arrive très souvent qu'il y aie des conflits entre les deux branches qui empêchent de les fusionner, par exemple lorsque plusieurs personnes travaillent en même temps sur un même fichier.

Exemple : votre branche master contient un fichier Hello.md avec une ligne de texte : "Hello les amis !". Votre branche brancheB contient un fichier Hello.md avec une ligne de texte : "Hello tout le monde !".

Si on veut fusionner la branche brancheB dans la branche master il faut donc faire :

git checkout brancheB
git pull
git merge master

Git va reconnaître qu'il y a un conflit entre les deux branches car la 1re ligne du fichier Hello est différente dans chacune des branches et afficher le message suivant : 
Auto-merging hello.md
CONFLICT (content): Merge conflict in hello.md
Automatic merge failed; fix conflicts and then commit the result.

On va donc devoir ouvrir le fichier hello.md dans notre éditeur de texte et voir les différences de contenu du fichier hello.md entre les deux branches. Une fois le conflit resolu on peut le dire a Git. Pour cela, il faut faire un commit sans message : git commit
Git va détecter que le conflit est resolu et va proposer un message de commit par défaut, on peut alors personnaliser le message ou pas. Git va alors confirmer que nos branches ont été fusionnées, et si nous allons consulter l'historique des commits avec git log, on verra apparaître le dernier commit de résolution du conflit. 

## POUR EVITER LES CONFLITS (où "Comment travailler a deux sur un meme repos sans creer de conflit avec Git" )

Pour eviter de devoir verifier les deux fichiers et leurs differences (cf point plus haut):

- Penser en premier lieu a faire un git pull du fichier sur lequel vous souhaiter travailler (si celui ci a deja ete cloné : git clone)
- travailler sur votre fichier. 
- Vous pouvez ensuite "pusher" votre fichier modifier sur VOTRE branche (ATTENTION PAS SUR LA BRANCHE MASTER)
- Faites ensuite une Pull Request. 
- Git Hub se chargera de prevenir si conflit il y a afin de modifier la partie du code qui crée le conflit. 
- Si il n'y a pas de conflit et si les debug ont ete fait, on peut ensuite push sur la branche MASTER. 
(Toujours considerer que la branche master = production donc que la phase de developpement pour votre fichier est termineée - la branche master doit rester vierge de tout conflits)


# Choix de l'organisation sur GitHub : deux repo.
  - Un repos back
  - Un repos front

La team back aura chacune une branche a son nom, une fois les tests de debug fait et une fois laccord de tout le monde donneé sur la quaalité du code, le devellopeur back pourra merge son repos sur la branche master du repos back
Meme chose pour le front

L'objectif est de dissocié les fichiers de developpement du back et du front afin de mieux s'organiser.
Les fichiers de developpement de l'équipe back pourront etre appelé vers le front grace aux requettes faites par le biais d'Axios. 
