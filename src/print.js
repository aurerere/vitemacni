function printf(str)
{
    const time = new Date();

    return console.log('\33[90;1m[' + time.getHours() + ':'
        + time.getMinutes() + ':'
        + time.getSeconds() + ']\u001b[0m ' + str);
}

module.exports = printf;