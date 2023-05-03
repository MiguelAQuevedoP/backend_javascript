//seguridad de links
module.exports = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {//method ".isAuthentication" from passport for know if user is logged
            return next();
        }else{
            return res.redirect('/signin');
        }
    },
    isNotLoggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/profile');
        }
    }
};