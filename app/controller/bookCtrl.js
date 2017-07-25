myApp.controller("bookCtrl", function($scope, guideFactory) {
	
	guideFactory.getGuideData()
	.then( (guideData) => {
		$scope.books = guideData.data.guides;
	});
});