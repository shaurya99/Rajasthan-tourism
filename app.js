var app = angular.module ('myApp',['ngRoute]);
app.config(function($routeProvider){
    Stamplay.init("Rajasthan Tourism");
    $routeProvider
    .when{ '/', {
              templateUrl: 'templates/home.html
              controller: "HomeCtrl"
    })
    .when{ '/login',{
        templateUrl: 'templates/login.html'
        controller: "LoginCtrl"
    })
})
app.controller('HomeCtrl' , function(){
    
});

app.controller('LoginCtrl' , function(){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
});

    .when('/signup',{
        templateUrl:'templates/signup.html',
        controller:"SignUpCtrl"
    })
    
});
app.controller('SignUpCtrl', function($scope) {
    $scope.newUser={};
}
})
