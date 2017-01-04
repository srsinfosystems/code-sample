 
angular.module('RessClub.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $state, $timeout,$ionicConfig, $ionicHistory,AUTH_EVENTS,StoreService,$ionicPopup,USER_ROLES,AuthService){
    $rootScope.StoreName=StoreService.getStoreName();
	$scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
		var alertPopup = $ionicPopup.alert({
			title: 'Unauthorized!',
			template: 'You are not allowed to access this resource.'
		});
	});

	$scope.notifyIonicGoingBack = function(){
		$ionicHistory.goBack();
	}

	$scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
		//AuthService.logout();
		$state.go('app.login');
		var alertPopup = $ionicPopup.alert({
			title: 'Session Lost!',
			template: 'Sorry, You have to login again.'
		});
	});
	$scope.$on('$ionicView.enter', function(){
		$ionicConfig.views.swipeBackEnabled(false);
	})

 	$scope.count = function(obj) {
			var count=0;
			for(var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					++count;
				}
			}
			return count;
		}
    $scope.switch_to = function(page){

          $state.go('app.'+page);
          $scope.order_div = true;
          $scope.response_setting = false;
     }
		$scope.navigateToDashboard = function(){
			$state.reload();
			$state.go('app.dashboard', {}, {reload: true});
		}

 $scope.showNote = function(day){
   var as = $("."+day).find('span.adv_set_margin_set.ion-plus-round');
   var an = $("."+day).find('span.adv_set_margin_set.ion-minus-round');
   if(as.length > 0){
	 $(as).removeClass('ion-plus-round');
	 $(".col_re").find('span.adv_set_margin_set.ion-minus-round').removeClass('ion-minus-round').addClass('ion-plus-round');
	 $(as).addClass('ion-minus-round'); 
	 $scope.advance = true; 
	 $('.col_re').addClass('col_ac').removeClass('col_re');
	 $(as).parent().addClass('col_re').removeClass('col_ac');
   }
   else if(an.length > 0){
	 $(an).removeClass('ion-minus-round'); 
	 $(an).addClass('ion-plus-round');
	 $scope.advance = false;
	 $(an).parent().addClass('col_ac').removeClass('col_re');
   }
   
 }
		$scope.advance_setting= true;
 $scope.new_reservation = true;
 $scope.order_div = true;
 $scope.add_response_setting = true;
 $scope.response_setting = false;
 $scope.add_product = true;
 $scope.add_photo = true;
 $scope.profile_setting = true;
 $scope.add_advance_setting = true;
 $scope.hide_notes = false;
 $scope.show_action = function(act){
	 
	 if(act == 'reject'){
		if($scope.reject == true){
		  $scope.reject = false;	
		}else{
	      $scope.reject = true;	
	    }
	    $scope.sugg = false;
	    $scope.edit = false; 
	 }
	 if(act == 'edit'){
	    $scope.reject = false;	
	    $scope.sugg = false;
	    if($scope.edit == true){
		  $scope.edit = false;
		}else{
		  $scope.edit = true	
		} 
	 }
	 if(act == 'sugg'){
	    $scope.reject = false;	
	    if($scope.sugg == true){
			$scope.sugg = false;
		}else{
		  $scope.sugg = true;	
		}
	    $scope.edit = false; 
	 }
	 if(act == 'new_reservation'){
	    $scope.pending_sugg = false;	
	    if($scope.new_reservation == true){
			$scope.new_reservation = false;
		}else{
		  $scope.new_reservation = true;	
		}
	    $scope.reservation = false; 
	    $scope.reject_list = false; 
	 }
	 if(act == 'pending_sugg'){
	    $scope.new_reservation = false;	
	    if($scope.pending_sugg == true){
			$scope.pending_sugg = false;
		}else{
		  $scope.pending_sugg = true;	
		}
	    $scope.reservation = false; 
	    $scope.reject_list = false; 
	 }
	 if(act == 'reservation'){	
	    if($scope.reservation == true){
			$scope.reservation = false;
		}else{
		  $scope.reservation = true;	
		}
	    $scope.new_reservation = false;
	    $scope.pending_sugg = false; 
	    $scope.reject_list = false; 
	 }
	 if(act == 'reject_list'){
	    if($scope.reject_list == true){
			$scope.reject_list = false;
		}else{
		  $scope.reject_list = true;	
		}
	    $scope.new_reservation = false;
	    $scope.pending_sugg = false; 
	    $scope.reservation = false;  
	 }
	 if(act == 'response_setting'){
	      $state.go('app.messagesSetting');
	 }

	 if(act == 'add_response_setting'){
	    if($scope.add_response_setting == true){
			$scope.add_response_setting = false;
		}else{
		  $scope.add_response_setting = true;	
		}
	 }
	 if(act == 'add_photo'){
	    if($scope.add_photo == true){
			$scope.add_photo = false;
		}else{
		  $scope.add_photo = true;	
		}
	 }
	 if(act == 'advance_setting'){
	    
	 }
	 if(act == 'advance_setting_p'){
	    if($scope.advance_setting == true){
			$scope.advance_setting = false;
		}else{
		  $scope.advance_setting = true;	
		}
	 }
	 if(act == 'profile_setting'){
	    if($scope.profile_setting == true){
			$scope.profile_setting = false;
		}else{
		  $scope.profile_setting = true;	
		}
	    $scope.profile_desc = false;
	    $scope.opening_hour = false; 
	 }
	 if(act == 'profile_desc'){
	    if($scope.profile_desc == true){
			$scope.profile_desc = false;
		}else{
		  $scope.profile_desc = true;	
		}
	    $scope.profile_setting = false;
	    $scope.opening_hour = false; 
	 }
	 if(act == 'opening_hour'){
	    if($scope.opening_hour == true){
			$scope.opening_hour = false;
		}else{
		  $scope.opening_hour = true;	
		}
	    $scope.profile_setting = false;
	    $scope.profile_desc = false; 
	 }
	 
	 if(act == 'advance_setting_profile'){
	    if($scope.advance_setting_profile == true){
			$scope.advance_setting_profile = false;
		}else{
		  $scope.advance_setting_profile = true;	
		}
		$scope.profile_setting = false;
		$scope.profile_desc = false; 
	}
	  if(act == 'hide_notes'){
	    if($scope.hide_notes == true){
			$scope.hide_notes = false;
		}else{
		  $scope.hide_notes = false;	
		}
	 }
	 if(act == 'add_advance_setting'){
		 //alert()
	    if($scope.add_advance_setting == true){
			$scope.add_advance_setting = true;
			$scope.hide_notes = true;	
		}else{
		  $scope.hide_notes = false;	
		}
	 }
	   
 }

  $scope.comment = "";
  $scope.msg_option = "";
  $scope.your_msg = 'REJECT MESSAGE';
  $scope.responce = [
        {comment : "Table not found"},
        {comment : "Closed"},
        {comment : "Unable to provide service"}
    ];
    
    $scope.changed = function(valc){
	      $scope.your_comment = valc;
	      $(".com").val(valc);
	}
	$scope.changed1 = function(valc){
	      $scope.your_comment1 = valc;
	      $(".com1").val(valc);
	}
   $scope.msg_response = [
        {msg_option : "REJECT MESSAGE"},
        {msg_option : "EDIT MESSAGE"},
        {msg_option : "ADD MESSAGE"}
    ];
    
    $scope.msg_changed = function(val){
		 $scope.your_msg = val;
		 $(".comy").val(val);
	} 

	 $scope.select_res = [
        {category : "RESTAURANTS"},
        {category : "SPA/SALON"}
    ];

    $scope.fileNameChanged = function (ele) {
  var files = ele.files;
  var l = files.length;
  var namesArr = [];
  console.log(files[0].name);
  $scope.$apply(function() {
            //wrapped this within $apply
           $scope.addPhotoVal = files[0].name;
            console.log('message:' + $scope.addPhotoVal);
          });
  
  /*for (var i = 0; i < l; i++) {
    namesArr.push(files[i].name);
    $scope.addPhotoVal = files[i].name;    
  }*/
}
function add_pic()
{
	console.log($scope.addPhotoName);
	$scope.addPhotoVal = $scope.addPhotoName;
}
   
})

.controller('sample', function($scope, $rootScope, $state, $timeout){
	
});
