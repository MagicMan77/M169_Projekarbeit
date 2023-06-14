# M169_Projekarbeit
Ich und Leander haben im Modul 169 Dienste mit Containern bereitstellen eine art Praktikum gemacht. In diesem Repository befindet sich all der relevante Code dazu.

## Dockerfile
Mit diesem Dockerfile habe ich das Image "nginx-dashboard" erstellt und auf Dockerhub hochgeladen -> https://hub.docker.com/repository/docker/lesky7777/nginx-dashboard/general

## index.html
Das HTML File das im Dockerfile erwähnt wird und in den nginx Container kopiert wurde, dies ist unser Dashboard.

## docker-compose.yml
Das YAML File mit dem die ganze Umgebung aufgebaut wird inklusive:
-nginx Server anhand eigenem Image
-wekan Server
-monodb Datenbank
-Grafana zur Überwachung
-zwei Volumes um die Daten extern zu speichern für: grafana und wekan
