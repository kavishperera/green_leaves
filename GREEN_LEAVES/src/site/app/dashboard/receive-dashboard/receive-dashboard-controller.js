(function () {
    angular.module("receiveDashboardModule", []);
    angular.module("receiveDashboardModule")
            .controller("receiveDashboardController", function ($scope, $filter, ModalDialog, GreenLeavesDashBoardModel, Notification) {
                $scope.model = new GreenLeavesDashBoardModel();

                $scope.ui = {};

                $scope.ui.new = function () {
                    $scope.ui.mode = "EDIT";
                    $scope.ui.setDates();
                };

                $scope.ui.setDates = function () {
                    var date = new Date();
                    //month first date
                    var firstDay = $filter('date')(new Date(date.getFullYear(), date.getMonth(), 1), 'yyyy-MM-dd');
                    $scope.model.data.fromDate = firstDay;
                    // to date
                    var toDay = $filter('date')(new Date(), 'yyyy-MM-dd');
                    $scope.model.data.toDate = toDay;
                };

                $scope.ui.discard = function () {
                    $scope.ui.mode = "IDEAL";
                    $scope.model.clear();
                    $scope.ui.setDates();
                };

                $scope.ui.searchUi;
                $scope.ui.toggleType = function (type) {
                    if (type === 'Summary') {
                        $scope.model.clear();
                        $scope.ui.setDates();
                        $scope.ui.searchUi = "Summary";
                    } else if (type === 'Receive') {
                        $scope.model.clear();
                        $scope.ui.setDates();
                        $scope.ui.searchUi = "Receive";
                    } else if (type === 'Bulk_Weigh') {
                        $scope.model.clear();
                        $scope.ui.setDates();
                        $scope.ui.searchUi = "Bulk_Weigh";
                    } else if (type === 'Supplier_Weigh') {
                        $scope.model.clear();
                        $scope.ui.setDates();
                        $scope.ui.searchUi = "Supplier_Weigh";
                    }
                };

                $scope.ui.searchGreenLeavesReceive;
                $scope.ui.toggleReceiveType = function (type) {
                    if (type === 'Search_Receive_Fully') {
                        $scope.model.clear();
                        $scope.ui.setDates();
                        $scope.ui.searchGreenLeavesReceive = "Search_Receive_Fully";
                    } else if (type === 'Search_Receive_Client') {
                        $scope.model.clear();
                        $scope.ui.setDates();
                        $scope.ui.searchGreenLeavesReceive = "Search_Receive_Client";
                    }
                };

                //client search client number
                $scope.ui.searchClient = function (e) {
                    var code = e ? e.keyCode || e.which : 13;
                    if (code === 13) {
                        var searchClient = $scope.model.searchClientByClientNo($scope.model.data.clientId);
                        if (angular.isUndefined(searchClient)) {
                            $scope.model.data.client = null;
                            $scope.model.data.clientRoutes = null;
                            Notification.error("Client cannot find by number. Please try by name instead.");
                        } else {
                            $scope.model.data.client = searchClient.indexNo;
                        }
                    }
                };

                $scope.ui.search = function () {
                    if ($scope.ui.searchUi === 'Summary') {
                        // $scope.model.greenLeavesAllSummry();
                    } else if ($scope.ui.searchUi === 'Receive') {
                        if ($scope.ui.searchGreenLeavesReceive === 'Search_Receive_Fully') {
                            $scope.model.greenLeavesReceiveSummry('normal');
                        } else if ($scope.ui.searchGreenLeavesReceive === 'Search_Receive_Client') {
                            $scope.model.greenLeavesReceiveSummry('client');
                        }
                    } else if ($scope.ui.searchUi === 'Bulk_Weigh') {
                        $scope.model.getGreenLeavesWeighSummry('BULK');
                    } else if ($scope.ui.searchUi === 'Supplier_Weigh') {
                        $scope.model.getGreenLeavesWeighSummry('SUPPLIER');
                    }
                };

                $scope.ui.popUpUiToggleType = function (type) {
                    $scope.ui.type = type;
                };

                $scope.options = {
                    responsive: true,
                    maintainAspectRatio: false
                };

                $scope.ui.modalOpen = function (indexNo) {
                    ModalDialog.modalOpen("lg", "greenLeavesWeighSummry.html", "receiveDashboardController");
                    $scope.model.greenLeaveWeighDetailsByIndexNo(indexNo);
                };

                $scope.ui.init = function () {
                    $scope.ui.mode = "IDEAL";
                    $scope.ui.type = "NORMAL";

                    $scope.series = ['Normal', 'Super'];
                    $scope.colors = ['#45b7cd', '#ff6384'];
                    $scope.radioModel = 'Full';
                    $scope.ui.toggleReceiveType('Search_Receive_Fully');

                    $scope.$watch("model.data.client", function (newValue, oldValue) {
                        if ($scope.model.data.client) {
                            $scope.model.data.clientRoutes = $scope.model.getClientRoute($scope.model.data.client);
                            $scope.model.data.clientId = $scope.model.client($scope.model.data.client).clientNumber;
                        } else {
                            $scope.model.data.clientRoutes = "";
                        }
                    });
                };
                $scope.ui.init();
            });
}());