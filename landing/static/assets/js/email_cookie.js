const email_template = Cookies.get('email_template');
if (typeof email_template !== 'undefined') {
    $('.email-template').val(email_template);
}