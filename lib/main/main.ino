#include "heltec.h"

int dustSensorPin = 37;
int iled = 17;

void setup() {
    Serial.begin(115200);
    Serial.println("Initializing OLED...");

    Heltec.begin(true, false, true);

    // Vérifier si l'écran OLED est initialisé
    if (!Heltec.display) {
        Serial.println("OLED initialization failed!");
        while (1);
    }

    // Afficher un message sur l'écran OLED
    Heltec.display->clear();
    Heltec.display->setFont(ArialMT_Plain_10);
    Heltec.display->drawString(0, 0, "Dust Sensor Reading");
    Heltec.display->display();
    Serial.println("OLED initialized successfully!");

    // Configurer la broche du capteur de poussière
    pinMode(dustSensorPin, INPUT);
    pinMode(iled, OUTPUT);

    digitalWrite(iled, HIGH);
}

void loop() {
    // Lire la valeur du capteur de poussière
    int dustValue = analogRead(dustSensorPin);


    // Afficher la valeur lue sur le moniteur série
    Serial.print("Dust Sensor Value: ");
    Serial.println(dustValue);

    // Afficher la valeur sur l'écran OLED
    Heltec.display->clear();
    Heltec.display->setFont(ArialMT_Plain_10);
    Heltec.display->drawString(0, 0, "Dust Sensor Value:");
    Heltec.display->drawString(0, 10, String(dustValue));
    Heltec.display->display();

    // Attendre 1 seconde avant de lire à nouveau
    delay(1000);
}
