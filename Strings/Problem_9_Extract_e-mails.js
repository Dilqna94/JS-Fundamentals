/**
 Problem 9. Extract e-mails

 Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.
 */
function extractMail(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
var textEmails = 'blqblq@any.uk contact us drundrun@hotmail.com  or by email at spas@abv.bg';
console.log(extractMail(textEmails).join('\n'));
