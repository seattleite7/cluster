angular.module('clusterApp', [])
 .controller('MainCtrl', [ '$scope', '$http', function($scope, $http){ 
               $scope.cluster = [];
               $scope.getMyPIDs = function() { 
                     for (var n = 0; n < 100; n++) {
                     $http.get('/pid').success(function(data){ 
                       console.log("getAll"); 
                       console.log(data);
                       $scope.cluster.push(data); 
                     }); 
                     }
               }

          
   } 
]);
