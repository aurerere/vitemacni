const { exec } = require('child_process');

const cmd = "Invoke-WebRequest 'https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointmentsearch' " +
    "| Select-Object -Expand Content";

function get()
{
    exec(cmd, {'shell':'powershell.exe'}, (error, stdout, stderr) => {
        if (stderr || error)
            console.log(':/');

        else {
            console.log(stdout);
        }
    });
}