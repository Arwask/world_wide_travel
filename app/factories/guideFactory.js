'use strict';

myApp.factory("guideFactory", function($q, $http) {
	function getGuideData() {
		return $q( (resolve, reject) => {
			$http.get('../data/guides.json')
			.then( (guidesData) => {
				console.log("guidesData",guidesData );
				resolve(guidesData)
			})
			.catch( (err) => {
				reject(err);
			});
		})
	}
	return { getGuideData };
})