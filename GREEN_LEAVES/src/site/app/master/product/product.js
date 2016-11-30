(function () {
    angular.module("productModule", []);
    angular.module("productModule")
            .factory("productFactory", function ($http, systemConfig) {
                var factory = {};

                //load product
                factory.loadProduct = function (callback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/product";
                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //load supplier
                factory.loadSupplier = function (callback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/supplier";
                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //load subcategory by selected category 
                factory.loadSubCategory = function (callback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/sub-category";
                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //load category by selected item department 
                factory.loadCategory = function (callback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/category";
                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //load item department
                factory.loadItemDepartment = function (callback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/item-departments";
                    $http.get(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                //save product
                factory.saveProduct = function (summary, callback, errorCallback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/product/save-product";
                    $http.post(url, summary)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {
                                if (errorCallback) {
                                    errorCallback(data);
                                }
                            });
                };

                //delete  product
                factory.deleteProduct = function (indexNo, callback) {
                    var url = systemConfig.apiUrl + "/api/green-leaves/master/product/delete-product/" + indexNo;
                    $http.delete(url)
                            .success(function (data, status, headers) {
                                callback(data);
                            })
                            .error(function (data, status, headers) {

                            });
                };

                return factory;
            });
    angular.module("productModule")
            .controller("productController", function ($scope, $timeout, productFactory, Notification) {

                //data model
                $scope.model = {};

                //ui model
                $scope.ui = {};

                //http modal
                $scope.http = {};

                //------------------ model functions ---------------------------
                //reset model
                $scope.model.reset = function () {
                    $scope.model.data = {};
                };

                //------------------ ui functions ------------------------------

                $scope.ui.new = function () {
                    $scope.ui.mode = "NEW";
                    $scope.ui.forcuse();
                    $scope.indextab=0;
                };

                $scope.ui.save = function () {
                    if ($scope.validateInput()) {
                        $scope.http.saveProduct();
                    } else {
                        Notification.error("Please Input Details");
                        $scope.ui.forcuse();
                        $scope.indextab=0;
                    }
                };

                $scope.ui.forcuse = function () {
                    $timeout(function () {
                        document.querySelectorAll("#productNo")[0].focus();
                    }, 10);
                };

                $scope.ui.edit = function (product, index) {
                    $scope.ui.mode = "EDIT";
                    $scope.model.data = product;
                    $scope.model.products.splice(index, 1);
                };

                $scope.ui.tabChnage = function (event) {
                    if (event.keyCode === 13) {
                        $scope.indextab = 1;
                        $timeout(function () {
                            document.querySelectorAll("#costPrice")[0].focus();
                        }, 10);
                    }
                };

                //validate model
                $scope.validateInput = function () {
                    if ($scope.model.data.name
                            && $scope.model.data.productNo
                            && $scope.model.data.printDescription
                            && $scope.model.data.unit
                            && $scope.model.data.costPrice
                            && $scope.model.data.salePrice
                            && $scope.model.data.itemDepartment.indexNo
                            && $scope.model.data.category.indexNo
                            && $scope.model.data.subCategory.indexNo
                            && $scope.model.data.supplier.indexNo
                            && $scope.model.data.brand !== null) {
                        return true;
                    } else {
                        return false;
                    }
                };

                $scope.ui.delete = function (indexNo) {
                    $scope.http.deleteProduct(indexNo);
                };

                //------------------ http functions ------------------------------

                $scope.http.saveProduct = function () {
                    var detail = $scope.model.data;
                    console.log(detail);
                    var detailJSON = JSON.stringify(detail);
                    productFactory.saveProduct(
                            detailJSON,
                            function (data) {
                                Notification.success(data.indexNo + "-" + "saved successfully.");
                                //reset model
                                $scope.model.products.push(data);
                                $scope.model.reset();
                                $scope.ui.forcuse();
                                $scope.indextab = 0;
                            },
                            function (data) {
                                Notification.error(data.message);
                                $scope.ui.forcuse();
                                $scope.indextab = 0;
                            }
                    );
                };

                $scope.http.deleteProduct = function (indexNo) {
                    productFactory.deleteProduct(indexNo, function () {
                        var id = -1;
                        for (var i = 0; i < $scope.model.products.length; i++) {
                            if ($scope.model.products[i].indexNo === indexNo) {
                                id = i;
                            }
                        }
                        Notification.success(indexNo + "-" + "Delete Successfully.");
                        $scope.model.products.splice(id, 1);
                        $scope.ui.forcuse();
                        $scope.indextab = 0;
                    });
                };

                $scope.ui.keyEvent = function (e) {
                    var code = e ? e.keyCode || e.which : 13;
                    if (code === 13) {
                        $scope.ui.save();
                    }
                };

                //---------- inti fuctions ---------- 
                $scope.init = function () {
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";
                    //reset model
                    $scope.model.reset();
                    //loadProduct
                    productFactory.loadProduct(function (data) {
                        $scope.model.products = data;
                    });

                    //loadRoute
                    productFactory.loadSupplier(function (data) {
                        $scope.model.suppliers = data;
                    });

                    productFactory.loadSubCategory(function (data) {
                        $scope.model.subCategorys = data;
                    });

                    productFactory.loadCategory(function (data) {
                        $scope.model.categorys = data;
                    });

                    //loadItemDepartment
                    productFactory.loadItemDepartment(function (data) {
                        $scope.model.itemDepartments = data;
                    });

                };
                $scope.init();
            });
}());

