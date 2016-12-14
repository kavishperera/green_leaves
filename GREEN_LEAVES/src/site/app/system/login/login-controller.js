(function () {
    angular.module("appModule")
            .controller("LoginController", function ($scope, $location, LoginService) {
                $scope.ui = {};
                $scope.model = {};

                $scope.model.data = {
                    username: null,
                    password: null
                };

                $scope.ui.login = function (e) {
                    var code = e ? e.keyCode || e.which : 13;
                    if (code === 13) {
                        if ($scope.model.data.username && $scope.model.data.password) {
                            LoginService.login($scope.model.data, function (authenticated) {
                                if (authenticated) {
                                    $location.path("/home");
                                }
                            });
                        }
                    }
                };
            });
}());