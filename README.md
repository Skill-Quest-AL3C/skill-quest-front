# Skill Quest : Front
# /!\ A lire avant de faire quoi que ce soit /!\
## IMPORTANT
### NE PAS DEVELOPPER SUR LA BRANCHE MAIN MAIS SUR UNE BRANCHE FEATURE PROPRE A LA TACHE A FAIRE
exemple :
```
// après le clone du projet
$ git checkout feature_cours
```
### ENSUITE CREER UNE BRANCHE SUR LA BRANCHE FEATURE (C'EST VOTRE BRANCHE PERSO POUR SI JAMAIS VOUS BOSSER A PLUSIEURS), ATTENTION C'EST PAS UNE BRANCHE PERMANENTE ELLE N'EXISTE PLUS SI VOUS CLONEZ LE PROJET A NOUVEAU OU CHANGEZ DE PC POUR CODER
```
$ git checkout -b feature_branch
```
### QUAND VOUS AVEZ FINI DE DEV SUR FEATURE_BRANCH, ON MERGE ENSUITE SUR FEATURE
```
$ git checkout develop
$ git merge feature_branch
```
- Quand on termine une feature, on merge feature sur develop
- Quand on termine une version, on merge develop sur main

## Description
Présentation visuelle de Skill Quest, Accès API BACK
## Config
```
Node             16.13.2
Npm              8.1.2
Angular CLI      13.1.4 
Tailwind         3.0.34
```
## Installation
```
$ cd ../chemin/vers/workspace
$ git clone https://github.com/Skill-Quest-AL3C/skill-quest-front.git
$ cd skill-quest-front
$ npm install
$ ng serve -o
```
***
## Compréhension des dossiers
Components : Les vues (pages) du site
```
// créer un composant
$ ng g c nomducomposant
```
Services : Contient les classes permettant de faire les appels à l'API
```
// créer un service
$ ng g s nomduservice
```
***
## Convention pour les commits
```
<type>: <description>

/!\ Ne pas écrire la description avec des accents, soyez brefs aussi !
```
### Type
```
build: changements qui affectent le build ou les dépendances externes (ex: gulp, broccoli, npm)
ci: changements de la conf CI (ex: Travis, Circle, BrowserStack, SauceLabs)
docs: changements concernant la documentation
feat: nouvelle fonctionnalité
fix: correction de bug
perf: amélioration de performance
refactor: un changement dans le code qui n'apporte pas de nouvelle fonctionnalité ni ne corrige de bug
style: changement qui n'affecte pas le fonctionnent du code (ex: espace, formattage de code, points-virgules manquants, etc)
Test: ajout ou correction de tests
```
## Liens utiles
```
Installer les outils : https://www.ganatan.com/tutorials/demarrer-avec-angular
Comprendre l'organisation des branches du git : https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow
Tailwind: https://tailwindcss.com/
```
