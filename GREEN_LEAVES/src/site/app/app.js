(function () {
    //index module
    angular.module("appModule", [
        "ngRoute",
        "ngCookies",
        "ui.bootstrap",
        "ui-notification",
        "homeModule",
//        "greenLeavesReceiveModule",
//        "greenLeavesWeighModule",
//        "clientAdvanceRequestModule",
//        "clientAdvanceApproveModule",
        "priceSettingModule"
//        "sidePanelModule"
        
//        "monthlyGreenLeavesSummryModule",
//        "routeDetailsModule",
//        "clientModule",
//        "categoryModule",
//        "itemDepartmentModule",
//        "vehicleModule",
//        "subCategoryModule",
//        "supplierModule",
//        "productModule",
//        "employeeModule",
//        "routeModule",
//        "branchModule",
//        "greenLeavesWeighReportModule",
//        "chequeBookModule",
//        "bankModule",
//        "bankBranchModule",
//        "receiveDashboardModule",
//
//        "teaGradeModule"

//        "directTeaIssueModule",
//        "officerTeaIssueModule",
//        "teaSettlementModule"
    ]);

    //constants
    angular.module("appModule")
            .constant("systemConfig", {
                apiUrl:
                        location.hostname === 'localhost'
                        ? "http://localhost:8080"
                        : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
            });
    //constants

    //route config
    angular.module("appModule")
            .config(function ($routeProvider) {
                $routeProvider
                        //system
                        .when("/", {
                            templateUrl: "app/system/home/home.html",
                            controller: "homeController"
                        })

                        .when("/login", {
                            templateUrl: "app/system/login/login.html",
                            controller: "LoginController"
                        })

                        //green leaves
                        .when("/transactions/green-leaves/green-leaves-weigh/green-leaves-weigh", {
                            templateUrl: "app/transactions/green-leaves/green-leaves-weigh/green-leaves-weigh.html",
                            controller: "GreenLeavesWeighController"
                        })
                        .when("/transactions/green-leaves/supplier-green-leaves-weigh/supplier-green-leaves-weigh", {
                            templateUrl: "app/transactions/green-leaves/supplier-green-leaves-weigh/supplier-green-leaves-weigh.html",
                            controller: "SupplierGreenLeavesWeighController"
                        })
                        .when("/transactions/green-leaves/green-leaves-receive", {
                            templateUrl: "app/transactions/green-leaves/green-leaves-receive/green-leaves-receive.html",
                            controller: "GreenLeavesReceiveController"
                        })
                        .when("/transactions/green-leaves/client-update", {
                            templateUrl: "app/transactions/green-leaves/client-update/client-update.html",
                            controller: "ClientUpdateController"
                        })

                        //client advance
                        .when("/transactions/green-leaves/client-advance/client-advance-request", {
                            templateUrl: "app/transactions/green-leaves/client-advance/request/client-advance-request.html",
                            controller: "ClientAdvanceRequestController"
                        })
                        .when("/transactions/green-leaves/client-advance/client-advance-approve", {
                            templateUrl: "app/transactions/green-leaves/client-advance/approve/client-advance-approve.html",
                            controller: "ClientAdvanceApproveController"
                        })

                        //client loan
                        .when("/transactions/green-leaves/client-loan/client-loan-request", {
                            templateUrl: "app/transactions/green-leaves/client-loan/request/loan-request.html",
                            controller: "ClientLoanRequestController"
                        })
                        .when("/transactions/green-leaves/client-loan/client-loan-check", {
                            templateUrl: "app/transactions/green-leaves/client-loan/check/loan-check.html",
                            controller: "ClientLoanCheckController"
                        })
                        .when("/transactions/green-leaves/client-loan/client-loan-approve", {
                            templateUrl: "app/transactions/green-leaves/client-loan/approve/loan-approve.html",
                            controller: "ClientLoanApproveController"
                        })

                        //fertilizer
                        .when("/transactions/green-leaves/fertilizer/request", {
                            templateUrl: "app/transactions/green-leaves/fertilizer/request/fertilizer-request.html",
                            controller: "FertilizerRequestController"
                        })
                        .when("/transactions/green-leaves/fertilizer/approve", {
                            templateUrl: "app/transactions/green-leaves/fertilizer/approve/fertilizer-approve.html",
                            controller: "FertilizerApproveController"
                        })

                        //tea
                        .when("/transactions/green-leaves/direct-tea-issue", {
                            templateUrl: "app/transactions/green-leaves/tea-issue/direct-tea-issue/direct-tea-issue.html",
                            controller: "DirectTeaIssueController"
                        })
                        .when("/transactions/green-leaves/officer-tea-issue", {
                            templateUrl: "app/transactions/green-leaves/tea-issue/officer-tea-issue/officer-tea-issue.html",
                            controller: "OfficerTeaIssueController"
                        })
                        .when("/transactions/green-leaves/tea-issue-settlement", {
                            templateUrl: "app/transactions/green-leaves/tea-issue/tea-issue-settlement/tea-issue-settlement.html",
                            controller: "TeaIssueSettlementController"
                        })

                        //voucher
                        .when("/transactions/green-leaves/green-leaves-weigh/green-leaves-payment", {
                            templateUrl: "app/transactions/green-leaves/green-leaves-payment/green-leaves-payment.html",
                            controller: "GreenLeavesPaymentController"
                        })

                        //price setting and final paymant
                        .when("/transactions/green-leaves/green-leaves-weigh/price-setting", {
                            templateUrl: "app/transactions/green-leaves/price-setting/price-setting.html",
                            controller: "PriceSettingController"
                        })
                        .when("/transactions/green-leaves/green-leaves-weigh/final-payemnt", {
                            templateUrl: "app/transactions/green-leaves/final-payment/final-payment.html",
                            controller: "FinalPaymentController"
                        })

                        .when("/transactions/green-leaves/monthly-green-leaves-summry/monthly-green-leaves-summry", {
                            templateUrl: "app/transactions/green-leaves/monthly-green-leaves-summry/monthly-green-leaves-summry.html",
                            controller: "monthlyGreenLeavesSummryController"
                        })

                        //payrool

                        //employee advance
                        //request
                        .when("/transactions/payroll/employee-advance/request", {
                            templateUrl: "app/transactions/payroll/employee-advance/request/employee-advance-request.html",
                            controller: "EmployeeAdvanceRequestController"
                        })
                        //approve
                        .when("/transactions/payroll/employee-advance/approve", {
                            templateUrl: "app/transactions/payroll/employee-advance/approve/employee-advance-approve.html",
                            controller: "EmployeeAdvanceApproveController"
                        })

                        //employee loan
                        //request
                        .when("/transactions/payroll/employee-loan/request", {
                            templateUrl: "app/transactions/payroll/employee-loan/request/loan-request.html",
                            controller: "EmployeeLoanRequestController"
                        })
                        //check
                        .when("/transactions/payroll/employee-loan/check", {
                            templateUrl: "app/transactions/payroll/employee-loan/check/loan-check.html",
                            controller: "EmployeeLoanCheckController"
                        })
                        //approve
                        .when("/transactions/payroll/employee-loan/approve", {
                            templateUrl: "app/transactions/payroll/employee-loan/approve/loan-approve.html",
                            controller: "EmployeeLoanApproveController"
                        })

                        //reports
                        .when("/reports/general/report-viewer", {
                            templateUrl: "app/reports/report-viewer/report-viewer.html",
                            controller: "ReportViewerController"
                        })

                        //master
                        .when("/master/:controller", {
                            templateUrl: "app/master/master.html",
                            controller: "MasterController"
                        })
                        
                        .when("/master/client/manage-client", {
                            templateUrl: "app/master/client/client.html",
                            controller: "clientController"
                        })

                        .when("/master/supplier/manage-supplier", {
                            templateUrl: "app/master/supplier/supplier.html",
                            controller: "supplierController"
                        })
                        .when("/master/side-panel/side-panel", {
                            templateUrl: "app/master/side-panel/side-panel.html",
                            controller: "sidePanelController"
                        })
                        .when("/master/category/category", {
                            templateUrl: "app/master/category/category.html",
                            controller: "categoryController"
                        })
                        .when("/master/tea-grade/tea-grade", {
                            templateUrl: "app/master/tea-grade/tea-grade.html",
                            controller: "teaGradeController"
                        })

                        .when("/master/item/manage-item-department", {
                            templateUrl: "app/master/item-department/item-department.html",
                            controller: "itemDepartmentController"
                        })
                        .when("/master/vehicle/vehicle", {
                            templateUrl: "app/master/vehicle/vehicle.html",
                            controller: "vehicleController"
                        })
                        .when("/master/category/sub-category", {
                            templateUrl: "app/master/sub-category/sub-category.html",
                            controller: "subCategoryController"
                        })
                        .when("/master/product/product", {
                            templateUrl: "app/master/product/product.html",
                            controller: "productController"
                        })
                        .when("/master/employee/employee", {
                            templateUrl: "app/master/employee/employee.html",
                            controller: "employeeController"
                        })
                        .when("/master/route/route", {
                            templateUrl: "app/master/route/route.html",
                            controller: "routeController"
                        })
                        .when("/master/branch/branch", {
                            templateUrl: "app/master/branch/branch.html",
                            controller: "branchController"
                        })
                        .when("/master/cheque-book/cheque-book", {
                            templateUrl: "app/master/cheque-book/cheque-book.html",
                            controller: "chequeBookController"
                        })
                        .when("/master/bank/bank", {
                            templateUrl: "app/master/bank/bank.html",
                            controller: "bankController"
                        })
                        .when("/master/bank-branch/bank-branch", {
                            templateUrl: "app/master/bank-branch/bank-branch.html",
                            controller: "bankBranchController"
                        })
                        //reports
                        .when("/reports/green-leaves-weigh", {
                            templateUrl: "app/reports/report.html"
                        })

                        .when("/reports/green-leave-weigh-report", {
                            templateUrl: "app/reports/green-leaves-weigh/green-leaves-weigh.html",
                            controller: "GreenLeavesWeighReportController"
                        })

                        //dashboards
                        .when("/dashboard/dashboard", {
                            templateUrl: "app/dashboard/receive-dashboard/receive-dashboard.html",
                            controller: "receiveDashboardController"
                        })

                        .when("/dashboard/receive-dashboard-2", {
                            templateUrl: "app/dashboard/receive-dashboard-2/receive-dashboard-2.html",
                            controller: "ReceiveDashboard2Controller"
                        })



                        .otherwise({
                            redirectTo: "/"
                        });
            });

//    angular.module("appModule")
//            .config(function (ChartJsProvider) {
//                ChartJsProvider.setOptions({
//                    responsive: true,
//                    maintainAspectRatio: false
//                });
//            });
//

//    angular.module("appModule")
//            .service("ScheduleService", function ($http, $interval, $rootScope, systemConfig) {
//                this.start = function () {
//                    $interval(function () {
//                        $http.get(systemConfig.apiUrl + "/api/v1/system/environment/system-date")
//                                .success(function (data) {
//                                    $rootScope.date = new Date(data);
//                                    console.log($rootScope.date);
//                                });
//                    }, 1000);
//                };
//            });
}());
