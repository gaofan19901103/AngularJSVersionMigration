var app = angular.module("myApp", []);

// This is only available from 1.6x

app.config(function($compileProvider) {
  $compileProvider.preAssignBindingsEnabled(true);
});


app.controller('controller',['$scope',function($scope){
    $scope.title = 'The title';
    $scope.trigger = function(){
      var x = 'a event xxx';
      console.log(x);
    }
}])
.directive("myDirective",function(){
    return{
        restrict: 'E',                          
        controllerAs: 'ctrl',       
        bindToController: true,     
        scope: {
            xxx: '<',
            yyy: '&'
        },
        template: `
        <hr></hr>
        <p>{{ctrl.xxx}}</p>
        <button ng-click="ctrl.event()">test event</button>
        <hr></hr>
        `,
        controller: DirectiveController
    }
});


function DirectiveController(){
     var instance = this;

     //this.yyy won't be available if we don't preAssignBindingsEnabled(true) in 1.6x or in 1.7x
     instance.event = this.yyy;

     //life cycle hooks
    this.$onInit = function(){
      //instance.event = this.yyy;
    };
}

