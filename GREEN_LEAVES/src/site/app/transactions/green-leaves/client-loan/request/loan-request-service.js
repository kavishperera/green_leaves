(function () {
    'use strict';

    var service = function (systemConfig, $http) {

        this.loadClients = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/green-leaves/master/clients");
        };

        this.saveLoanRequest = function (data) {
            return $http.post(systemConfig.apiUrl + "/api/v1/loan/loan-request/save", data);
        };

        this.loadLoan = function (number) {
            return $http.get(systemConfig.apiUrl + "/api/v1/loan/loan-request/" + number);
        };

        //check--------------------------

        this.loadPendingRequest = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/loan/loan-request/pending-requests");
        };

        this.findByTLoanRequestDetailByIndexNo = function (indexNo) {
            return $http.get(systemConfig.apiUrl + "/api/v1/loan/loan-request/find-by-loan-detail/" + indexNo);
        };

        this.checkRequest = function (data) {
            return $http.post(systemConfig.apiUrl + "/api/v1/loan/loan-request/check-request-detail/", data);
        };

        //approve---------------------------

        this.loadcheckPendingRequest = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/loan/loan-request/check-pending-requests");
        };

        this.approveRequest = function (indexNo, agreementNumber) {
            return $http.get(systemConfig.apiUrl + "/api/v1/loan/loan-request/approve-request/" + indexNo + "/" + agreementNumber);
        };

        this.rejectRequest = function (indexNo) {
            return $http.get(systemConfig.apiUrl + "/api/v1/loan/loan-request/reject-request/" + indexNo);
        };

        this.loadRoutes = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/green-leaves/master/routes");
        };
    };

    angular.module("appModule")
            .service("ClientLoanRequestService", service);
}());