var authController = require('../controllers/authcontroller');

module.exports = function(app,passport){

app.get('/signUp', authController.signup);
app.get('/logIn', authController.login);
app.post('/signUp', passport.authenticate('local-signUp',  
{ successRedirect: '/dashboard', failureRedirect: '/signUp'}
));
app.get('/dashboard',isLoggedIn, authController.dashboard);
app.get('/logout',authController.logout);
app.post('/logIn', passport.authenticate('local-logIn',  
{ successRedirect: '/dashboard', failureRedirect: '/logIn'}
));

function isLoggedIn(request, response, next) {
    if (request.isAuthenticated())
        return next();
    response.redirect('/logIn');
}
}