const http= require('http');
// console.log(http);

const {logResponse,logResponse1}=require('./util')
http.createServer(function(req,res){
    // res.end('Testing our server');
    logResponse();
    logResponse1();
    res.end('First deployment');

}).listen(5005,function(){
    console.log('I am running')
})
