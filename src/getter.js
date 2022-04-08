const
    { exec } = require("child_process"),
    { JSDOM } = require("jsdom"),
    parse = require("./parser");
    printf = require('./print');

function get(cmd)
{
    exec(cmd, { 'shell': 'powershell.exe' },
    (error, stdout, stderr) => {
        if (stderr || error)
            printf('error while trying to execute the command...');

        else {
            const res = new JSDOM(stdout).window.document;

            if (!res.querySelector('.nextAvailableAppointments')) {
                printf('No appointments available.');
                get(cmd);
            }

            else {
                // const data = parse(res);
                console.log('Founded appointment');
                get(cmd);
            }
        }
    });
}

module.exports = get;