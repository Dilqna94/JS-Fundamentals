/**
 Problem 7. Parse URL

 Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.
 */

function parserURL(url) {
    var indexOfDouble = url.indexOf('//');
    var protocol = url.substring(0, url.indexOf(':'));
    var server = url.substring(indexOfDouble +2, url.indexOf('/', indexOfDouble+2));
    var resource = url.substring(url.indexOf('/', 7));

    var jsonObj = {};
    jsonObj['protocol'] = protocol;
    jsonObj['server'] = server;
    jsonObj['resource'] = resource;
    return jsonObj;
}

var addr = "http://telerikacademy.com/Courses/Courses/Details/239";

    console.log(parserURL(addr));

