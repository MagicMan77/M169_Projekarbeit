const { exec } = require('child_process');

console.log('Creating default user...');

const command = `echo '{ "email": "benutzer@example.com", "password": "benutzer", "username": "benutzer" }' | node main.js`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Fehler beim Ausführen des Befehls: ${error}`);
    return;
  }
  
  console.log(`Befehl erfolgreich ausgeführt:\n${stdout}`);
});
