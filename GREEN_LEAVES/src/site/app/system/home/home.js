(function () {
//module
    angular.module("homeModule", []);
    //controller
    angular.module("homeModule")
            .controller("homeController", function ($scope, InputPane, optionPane, ConfirmPane, ProgressPane, ModalDialog) {

                $scope.informationMessage = function () {
                    optionPane.defaultMessage("My message should be here");
                };

                $scope.default = function () {
                    optionPane.defaultMessage("My message should be here");
                };

                $scope.primary = function () {
//                    optionPane.primaryMessage("My message should be here");
                    ConfirmPane.primaryConfirm("Hello World")
                            .confirm(function () {
                                console.log("DONE");
                            })
                            .discard(function () {
                                console.log("ReJECT");
                            });
                };

                $scope.input = function () {
                    InputPane.primaryInput("Input ")
                            .confirm(function (data) {
                                console.log(data);
                                console.log("DONE");
                            })
                            .discard(function () {
                                console.log("CANCEL");
                            });
                };


                $scope.info = function () {
                    optionPane.infoMessage("My message should be here");
                };

                $scope.success = function () {
//                    optionPane.successMessage("My message should be here");
                    ProgressPane.successProgress("Loading...").close();
                };

                $scope.warning = function () {
                    optionPane.warningMessage("My message should be here");
                };

                $scope.danger = function () {
                    optionPane.dangerMessage("My message should be here");
                };

                $scope.modalOpen = function () {
                    ModalDialog.modalOpen("lg", "popup.html", "homeController");
                };
            });
}());