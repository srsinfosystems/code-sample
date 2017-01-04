/**
 * Created by sanjay on 23-Sep-16.
 */
app.controller('DashboardCtrl', function($scope,$rootScope, $state, $ionicPopup,StoreService,Common,Order) {
    var _init = function(){
        if(!StoreService.getSelectedStoreId() || StoreService.getSelectedStoreId()==''){
            $state.go('app.stores');
        }
        Common.showLoader();
        $scope.noOfProducts=0;
        $scope.noOfOrders =0;
        $scope.noOfDonations =0;
        $scope.multipleStoresAvailable=StoreService.hasMultipleStores();
        StoreService.checkStoreList().then(function(authenticated) {
            $scope.multipleStoresAvailable=StoreService.hasMultipleStores();

            Common.hideLoader();
        }).finally(function() {
            Common.hideLoader();
        });
        $scope.getCounts('product');
        $scope.getCounts('order');
        $scope.getCounts('donation');
    };
    $scope.$on('$ionicView.loaded', function() {


    })
    $scope.$on('$ionicView.enter', function(){
        _init();
    });
    $scope.getCounts = function(countType){
        var data = {store_id:StoreService.getSelectedStoreId(),action:countType};
        Order.countOfProductNOrders(data).then(function(_result){
            if(_result.data.success){
                if(countType=="product")
                    $scope.noOfProducts=_result.data.count;
                else if(countType=="order")
                    $scope.noOfOrders=_result.data.count;
                else if(countType == "donation")
                    $scope.noOfDonations=_result.data.count;
            }
        })
    }
});