# Projet T-IOT-902

## Introduction

### Objectif du Projet

Le projet T-IOT-902 vise à développer un système de capteurs IoT pour le réseau sensor.community utilisant la technologie LoRa pour une transmission efficace des données sur de longues distances, optimisant ainsi la consommation d'énergie et augmentant l'autonomie des capteurs, surtout dans des zones où l'accès à Internet est restreint.

### Contexte du Projet

La technologie LoRa est choisie pour sa faible consommation d'énergie et sa capacité à couvrir de longues distances, ce qui est idéal pour déployer des capteurs dans des zones difficiles d'accès, soutenant ainsi diverses applications IoT dans des secteurs comme l'agriculture et la surveillance environnementale.

## Description du Projet

Le système sera constitué de deux parties principales : des capteurs autonomes pour la collecte de données environnementales et une passerelle qui transmet ces données au serveur de sensor.community via WiFi.

### Spécifications Générales

- **Capteurs** : Equipés pour mesurer des variables comme la température, l'humidité, et la qualité de l'air, avec une source d'alimentation autonome.
- **Passerelle** : Fait le relais entre les capteurs et le serveur, configurable via WiFi et capable de gérer plusieurs capteurs simultanément.

## Exigences Techniques

- **Compatibilité des Capteurs** : Doit être compatible avec les capteurs supportés par sensor.community.
- **Fonctionnalités du Firmware** : Inclut un point d'accès WiFi pour la configuration, la compatibilité avec les capteurs existants, et des mises à jour OTA.
- **Implémentation de la Technologie LoRa** : Utilise LoRaWAN pour la communication, assure le chiffrement des données, et intègre une gestion efficace de l'énergie.
- **Configuration et Surveillance** : Interface utilisateur conviviale pour la configuration et le monitoring, avec diagnostics et reporting intégrés.
- **Compatibilité Matérielle** : Basée sur l'ESP32 pour sa gestion de l'énergie et son support pour WiFi/Bluetooth, avec des modules LoRa compatibles.
- **Tests et Validation** : Inclut des tests de portée, de compatibilité, et d'endurance pour assurer la fiabilité du système.

## Gestion de L'Énergie et Autonomie

Des stratégies comme l'optimisation du code, l'utilisation du mode veille de l'ESP32, et la gestion intelligente des communications sont prévues pour réduire la consommation d'énergie. Le choix de batteries adaptées et l'intégration de sources d'énergie alternatives comme le solaire sont envisagés pour maximiser l'autonomie.

## Livrables

- **Capteur Autonome avec LoRa** : Mesure et transmet les données environnementales.
- **Passerelle LoRa/WiFi** : Relaie les données des capteurs au serveur sensor.community.
- **Firmware Amélioré** : Supporte toutes les fonctionnalités nécessaires tout en intégrant LoRa.
- **Documentation Technique** : Guide d'installation, spécifications techniques, et rapport de tests.

## Méthodologie et Outils

- **Langages de Programmation** : C/C++ pour le firmware (avec PlatformIO pour le développement), JavaScript pour l'interface utilisateur.
- **Outils de Test et de Débogage** : Simulateurs Arduino, Postman/Swagger pour l'API REST.
- **Suivi de Projet** : Utilisation de [Trello](https://trello.com/b/tPjfiHo3/t-iot-902) pour la gestion des tâches et le suivi du projet.
