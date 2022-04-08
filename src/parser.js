const { JSDOM } = require("jsdom");

function parse(res)
{
    res = new JSDOM(res).window.document;
}

module.exports = parse;