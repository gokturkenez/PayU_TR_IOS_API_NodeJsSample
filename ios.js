/*
Author: Gokturk Enez
Mail: hi@gokturkenez.com.tr
Description: PayU Turkey IOS API Node JS Sample Code
*/

var EndPointURL = 'https://secure.payu.com.tr/order/ios.php';
SecretKey = 'SECRET_KEY';

var moment = require('moment');
date = moment.utc().format('YYYY-MM-DD HH:mm:ss').toString();

var array = {
    'MERCHANT' : "OPU_TEST",
    'REFNOEXT' : "f2056638-0470-4158-af5d-9ec9c0c7ee67",
};

hashstring = '';

for (var k in array) {
    hashstring += array[k].length + array[k] ;
}
var hash = require('crypto')
    , data = hashstring
    , secretkey = SecretKey;

signature = hash.createHmac('md5', secretkey).update(data).digest('hex');
array['HASH'] = signature;

var request = require("request");
request.post(EndPointURL, {form:array}, function(error, response, body) {
    console.log(body);

});
