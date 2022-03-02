const { exec } = require('child_process');
const { JSDOM } = require("jsdom");

const cmd = "Invoke-WebRequest 'https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointmentsearch' " +
    "| Select-Object -Expand Content";

function get()
{
    exec(cmd, { 'shell': 'powershell.exe' }, (error, stdout, stderr) => {
        if (stderr || error)
            console.log('error while trying to execute the command...');

        else {
            const res = new JSDOM(stdout);

            if (!res.window.document.querySelector('.nextAvailableAppointments')) {
                let time = new Date();
                console.log('[' + time.getHours() + ':'
                    + time.getMinutes() + ':'
                    + time.getSeconds() + ']'
                    + ' No appointments available.');
                get();
            }

            else {

            }
        }
    });
}

get();