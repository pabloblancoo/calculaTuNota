(function () {
  'use strict';

  angular.module('MarksApp', [])
  .controller('MarksController', MarksController);

  MarksController.$inject = ['$scope'];
  function MarksController($scope) {
    $scope.notas = [
      {
        nota:0,
        porcentaje:0
      }
    ];

    $scope.aumentarNotas = function(){
      $scope.notas.push(
        {
          nota:0,
          porcentaje:0
        }
      )
    }

    $scope.disminuirNotas = function(){
      $scope.notas.pop()
    }

    $scope.calcularNota = function () {
      var total = 0;
      for(var i = 0; i< $scope.notas.length; i++){
        var nota = $scope.notas[i].nota;
        var porcentaje =$scope.notas[i].porcentaje;
        if(nota >= 0 && porcentaje >= 0){
          nota = nota*porcentaje*0.01;
          total += nota;
        }
      }
      var str = "Tienes un " + total;
      if(total ==5){
        return "La proxima vez no te la juegues tanto."  + str;
      }
      else if(total ==10){
        return "Eres un crack."  + str;
      }
      else if(total > 5 && total <=10){
        return "Estas aprobado." + str;
      }
      else if(total > 10){
        return "Ya, seguro que tienes un " + total + "... Revisalo";
      }
      else{
        return "Suspenso. Toca volver a estudiar." + str;
      }
    }
  }
})();
