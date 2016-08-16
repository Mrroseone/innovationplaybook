 Router.configure({
   layoutTemplate: 'layout'  //can be any template name
 });

Router.map(function () {
  this.route('home', {
    path: '/',
  });
  this.route('explore');
  this.route('signin');
  this.route('signup');
});



// Router.route('/', function () {
//   this.render('layout');
// });

// Router.route('/explore', function () {
//   this.render('explore');
// });

// Router.route('/signup', function () {
//   this.render('signup');
// });

// Router.route('/signin', function () {
//   this.render('sign');
// });
