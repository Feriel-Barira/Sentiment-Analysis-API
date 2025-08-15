# Sentiment Analysis API (Node.js + MySQL)

## Description
Cette API permet d’analyser le **sentiment de commentaires** (positif, neutre, négatif) et de les stocker dans une base de données MySQL.  
- Technologie backend : Node.js avec **Express**  
- Base de données : MySQL  
- Analyse de sentiment : package **Sentiment** (version locale)  

Cette API peut être utilisée pour **collecter des feedbacks clients** et générer des statistiques sur les avis.  

---

## Fonctionnalités
- Recevoir un commentaire via **POST /api/analyze**  
- Analyser le sentiment automatiquement  
- Stocker le commentaire et le sentiment dans MySQL  
- Retourner le commentaire et le sentiment au format JSON  

---

## Technologies
- Node.js  
- Express.js  
- MySQL  
- Sentiment (npm package)  

---

## Installation

1. **Cloner le projet**
```bash
git clone https://github.com/Feriel-Barira/Sentiment-Analysis-API.git
cd sentiment-api
```
2. **Installer les dépendances**
```bash
npm install express mysql2 sentiment
```
3. **Lancer le serveur**
```bash
node server.js
```
## Configuration MySQL
La table `feedback` a été créée dans la base `sentiments`. Voici un aperçu dans phpMyAdmin :
<img width="1290" height="857" alt="image" src="https://github.com/user-attachments/assets/ebc22f5f-e083-475c-85dc-32bbdb487f0a" />

