const
    { exec } = require("child_process"),
    { JSDOM } = require("jsdom"),
    parse = require("./parser");

function get(cmd)
{
    exec(cmd, { 'shell': 'powershell.exe' },
    (error, stdout, stderr) => {
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
                get(cmd);
            }

            else {
                const data = parse(res);
                console.log('Founded appointment');
                get(cmd);
            }
        }
    });
}

module.exports = get;