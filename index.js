const http= require('http');
// console.log(http);
http.createServer(function(req,res){
    res.end('Testing our server');
    res.end('First deployment');

}).listen(5001,function(){
    console.log('I am running')
})
