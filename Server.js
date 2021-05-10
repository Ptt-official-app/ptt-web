var webpack = require('webpack');
var app = new (require('express'))();
var port = 3001;
var host = '0.0.0.0';

app.get("/",function(req, res)
{
 res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, host, function(error) 
{
 if (error) {console.error(error)}
 else {console.info("===>http://localhost:%s/", port, host, port)}
})