

var app= angular.module('app', []);

//Directive

var myDirective = function(){
  return{

          templateUrl: "reddit.html"
      };
}

//Controller

var myController = function($scope){
    var a=$scope;

    a.tab=false;
    a.setTab = function(state){
        console.log('Inside function');
        a.tab=state;
    }

}

app.directive('reddit',myDirective);
app.controller('MainController',myController);


