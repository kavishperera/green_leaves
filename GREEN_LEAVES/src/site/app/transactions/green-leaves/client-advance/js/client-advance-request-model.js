(function () {
    'use strict';

    angular.module("appModule")
            .factory("ClientAdvanceRequestModel", function () {

                function ClientAdvanceRequestModel(data) {
                    if (!data) {
                        data = {
                            "indexNo": null,
                            "branch": null,
                            "route": null,
                            "date": null,
                            "number": null,
                            "transaction": null, //nor required
                            "clientAdvanceRequestDetail": [
//                            {
//                                "indexNo": null,
//                                "client": null,
//                                "month": null,
//                                "amount": null,
//                                "status": null,
//                                clientModel -> set by frontend,
//                                routeModel -> set by frontend
//                            }
                            ]
                        };
                    }

                    this.setData(data);
                }

                //methods
                ClientAdvanceRequestModel.prototype = {
                    //set data
                    setData: function (data) {
                        angular.extend(this, data);
                    },
                    //add client advance request detail
                    addRequestDetail: function (detail) {
                        this.clientAdvanceRequestDetail.push(detail);
                        return true;
                    },
                    //edit client advance request detail
                    editRequestDetail: function (index) {
                        var requestDetail = this.clientAdvanceRequestDetail[index];
                        this.clientAdvanceRequestDetail.splice(index, 1);
                        return requestDetail;
                    },
                    //delete client advance request detail
                    deleteRequestDetail: function (index) {
                        this.clientAdvanceRequestDetail.splice(index, 1);
                    },
                    getSummary: function () {
                        var sum = 0.0;
                        angular.forEach(this.clientAdvanceRequestDetail, function (value, key) {
                            sum = sum + value.amount;
                        });
                        return sum;
                    }
                };

                return ClientAdvanceRequestModel;
            });
}());