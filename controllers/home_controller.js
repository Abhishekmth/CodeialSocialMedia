// module.exports.home= function(req,res){
//     return res.end('<h1>Express is up for codeial</h1>');
// }

module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id', 25);
    return res.render('home',{
        title:"Home"
    });
}

// module.exports.page1= function(req,res){
//     return res.end('<h2>THis is another controller</h2>');
// }