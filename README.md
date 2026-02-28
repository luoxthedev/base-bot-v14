# 🤖 Base Bot Discord.js v14

**Template simple et prêt à l'emploi pour créer un bot Discord avec Discord.js v14**

---

## ✨ Introduction

Bienvenue sur ma **base bot Discord.js v14**, un code de base prêt à l'emploi pour créer votre bot Discord. Il prend en charge les **commandes Slash** et les **commandes avec préfixe**, et est conçu pour être facile à utiliser et à étendre.

---

## 🛠 Prérequis

* **Node.js v22.12.0** ou supérieur (requis par Discord.js v14)
* **Visual Studio Code** (recommandé pour le développement)

---

## 🚀 Installation

### 1. Télécharger le dépôt

Vous pouvez récupérer le dépôt de deux façons :

* **Bouton vert "Code" > Download ZIP** sur GitHub et décompressez-le.
* Avec Git :

```sh
git clone https://github.com/niridya/base-bot-v14.git
```

### 2. Installer les dépendances

Rendez-vous dans le dossier du projet et installez les dépendances :

```sh
npm install
```

> Cela installera automatiquement tout ce dont le bot a besoin pour fonctionner.

---

## ⚙️ Configuration

### shadow.json

Stockez votre **token** de bot (ne jamais partager publiquement) :

```json
{
    "token": "VOTRE_BOT_TOKEN"
}
```

### config.json

Configurez le **préfixe** et les **propriétaires** :

```json
{
    "prefix": "VOTRE_PREFIX",
    "owners": ["USER_ID_1", "USER_ID_2"]
}
```

---

## ▶️ Lancer le bot

```sh
node index.js
```

---

✅ Le bot devrait maintenant démarrer correctement.

---

## 🏓 Commande `/ping`

La commande slash `/ping` permet de vérifier la latence du bot :

* **Latence WebSocket** : délai mesuré par la connexion Gateway (`client.ws.ping`).
* **Temps de réponse** : différence entre la réception de l'interaction et l'envoi de la réponse.

**Comment tester :**
1. Invitez le bot sur votre serveur avec les permissions requises.
2. Tapez `/ping` dans n'importe quel salon accessible par le bot.
3. Le bot répond avec ses deux métriques de latence.

La commande fonctionne également avec le préfixe configuré (ex. `!ping`).

---

## 📋 Système de logs

Le bot intègre un logger simple (`utils/logger.js`) avec quatre niveaux :

| Niveau  | Usage                                          |
|---------|------------------------------------------------|
| `info`  | Informations générales (démarrage, commandes)  |
| `warn`  | Avertissements non bloquants                   |
| `error` | Erreurs avec stack trace complète              |
| `debug` | Détails de débogage (activé via `DEBUG=1`)     |

**Logs affichés au démarrage :**
* Nombre d'events et de commandes chargés
* Tag et ID du bot une fois connecté
* Nombre de serveurs, d'utilisateurs et version de Node.js

**Gestion des erreurs globales :**
* `process.on('unhandledRejection')` — rejets de promesses non gérés
* `process.on('uncaughtException')` — exceptions non catchées

Les erreurs survenant lors de l'exécution d'une commande sont capturées par un `try/catch` et loggées avec leur stack trace.

**Activer les logs debug :**
```sh
DEBUG=1 node index.js
```

---

## 💬 Support

Rejoignez le serveur Discord pour obtenir de l'aide : [discord.gg/antiraid](https://discord.gg/antiraid)

---

## 🌟 Bonus : Paquets optionnels

Pour améliorer les performances, vous pouvez installer ces paquets, sans modification de code (tout fonctionne automatiquement) :

```sh
npm install zlib-sync bufferutil
```

* `zlib-sync` : compression et décompression des données WebSocket.
* `bufferutil` : optimisation des buffers pour le WebSocket.
