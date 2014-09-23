angular.module('angularExistInArray', []).directive('existInArray', function() {
	return {
    scope : {
        array : '=existInArray'
      , value : '@'
    },
    require: 'ngModel',
		link : function(scope, element, attrs, ngModel) {

      scope.$watch("array", function(array){
        ngModel.$setViewValue(!!~array.indexOf(scope.value));
        ngModel.$render()
      })

      scope.$watch(function(){
        return ngModel.$modelValue
      }, function (value){
        var index;

        if (scope.array == undefined) { scope.array = []; }

        if (value && scope.array.indexOf(scope.value) == -1) {
          scope.array.push(scope.value);
        } else if(value === false && ~(index = scope.array.indexOf(scope.value)) ) {
          scope.array.splice(index, 1);
        }
      })

		}
	}
});
