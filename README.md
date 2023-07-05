# M169_Projekarbeit
Ich und Leander haben im Modul 169 Dienste mit Containern bereitstellen eine art Praktikum gemacht. In diesem Repository befindet sich all der relevante Code dazu.

## Dockerfile
Mit diesem Dockerfile habe ich das Image "nginx-dashboard" erstellt und auf Dockerhub hochgeladen -> https://hub.docker.com/repository/docker/lesky7777/nginx-dashboard/general

## index.html
Das HTML File das im Dockerfile erwähnt wird und in den nginx Container kopiert wurde, ist unser Dashboard.

## docker-compose.yml
Das YAML File mit dem die ganze Umgebung aufgebaut wird inklusive:
-nginx Server anhand eigenem Image
-wekan Server
-monodb Datenbank
-Grafana zur Überwachung
-zwei Volumes um die Daten extern zu speichern für: grafana und wekan


# Anwendung
__Git Repository Clonen:__
* Git clone [Link_Repository]

__In Verzeichniss wechseln:__
* cd ~M169_Projektarbeit

## Container Funktionen
__Container ausführen:__
* docker container up -d

__Container Stoppen:__
* docker container stop

__Container anzeigen:__
* docker ps (-a)

__Container logs anzeigen:__
* docker-compose logs [Service_Name]
