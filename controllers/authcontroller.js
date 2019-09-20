var exports = module.exports = {}

exports.signup = function(request,response){
	response.render('signUp'); 
}

exports.signin = function(request,response){
	response.render('logIn'); 
}

exports.dashboard = function(request,response){
	response.render('dashboard'); 
}

exports.logout = function(request,response){
  request.session.destroy(function(error) {
  response.redirect('/');
  });
}