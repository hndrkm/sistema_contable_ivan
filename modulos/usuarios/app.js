var app = angular.module('usuariosApp', []);
app.controller('usuariosCtrl', function($scope, $http) {
	$http.get("api.php")
		.then(function(response) {
			$scope.usuarios = response.data;
		});
	
	$scope.tipos = [
		{
			"id":1,
			"nombre":"Administrador"
		},
		{
			"id":2,
			"nombre":"Contador"
		},
		{
			"id":3,
			"nombre":"Usuario"
		}
	];
	
	/**
	 * Crear un nuevo objeto usuario
	 * */
	$scope.nuevoUsuario = function(){
		$scope.tituloModal="Nuevo usuario";
		$scope.usuario={};
	};
	/**
	 * Guarda un objeto usuario
	 * */
	$scope.guardarUsuario = function(){
		$http({
	        url: 'api.php',
	        method: "POST",
	        data: $scope.usuario
	    }).then(function(response) {
	       alert(response.status);
	       console.log(response);
	    },function(error) { // optional
	       alert("Ocurrio un error");
	       console.log("ERROR:",error)
	    });
	};
});