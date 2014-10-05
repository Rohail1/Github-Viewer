/**
 * Created by Rohail on 20-Sep-14.
 */

(function(){

    var app = angular.module("GitHubViewer",[]);

    var MainController = function ($scope,$http){

        $scope.search = function(username){
               $http.get("https://api.github.com/users/"+username)
                   .then(OnUserComplete,OnError)
        };

        var OnUserComplete = function(response){
                $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos,OnError);
        };

        var onRepos = function(response){
            $scope.repos = response.data;
        };

        var OnError = function(error){
          $scope.error = "Could Not Fetch the data";
        };

          $scope.username ="";
           $scope.repoSortOrder = "stargazers_count"

    };


    app.controller("MainController",["$scope","$http",MainController]);


}());