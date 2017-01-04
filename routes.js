app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider

.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
})

.state('app.login', {
  cache: false,
  url: '/login',
  views: {
    'menuContent': {
      templateUrl: 'js/user/templates/login.html',
      controller: 'UserCtrl'
    }
  }
})
.state('app.logout', {
  cache: false,
  url: '/logout',
  views: {
      'menuContent': {
          templateUrl: 'templates/menu.html',
          controller: 'UserCtrl'
      }
  }
})
.state('app.forgotPassword', {
  cache: false,
  url: '/forgotPassword',
  views: {
      'menuContent': {
          templateUrl: 'js/user/templates/forgotPassword.html',
          controller: 'UserCtrl'
      }
  }
})
.state('app.changePassword', {
  cache: false,
  url: '/changePassword',
  views: {
      'menuContent': {
          templateUrl: 'js/user/templates/changePassword.html',
          controller: 'UserCtrl'
      }
  }
})
.state('app.stores', {
  url: '/stores',
  cache: false,
  views: {
      'menuContent': {
          templateUrl: 'js/store/templates/stores.html',
          controller: 'StoresListCtrl'
      }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})

.state('app.dashboard', {
  url: '/dashboard',
  cache: false,
  views: {
    'menuContent': {
      templateUrl: 'js/dashboard/templates/dashboard.html',
      controller: 'DashboardCtrl'
    }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})
    
 .state('app.orders', {
  cache: false,
  url: '/orders',
  views: {
    'menuContent': {
      templateUrl: 'js/orders/templates/orders.html',
      controller: 'OrderCtrl'
    }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})
    
.state('app.products', {
  url: '/products',
  cache: false,
  views: {
    'menuContent': {
      templateUrl: 'js/product/templates/product-list.html',
      controller: 'ProductCtrl'
    }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})

.state('app.addProducts', {
  cache: false,
  url: '/addProducts',
  views: {
      'menuContent': {
          templateUrl: 'js/product/templates/add-products.html',
          controller: 'ProductAddListCtrl'
      }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})
.state('app.updateProduct', {
  cache: false,
  url: '/updateproduct',
  views: {
      'menuContent': {
          templateUrl: 'js/product/templates/product-update.html',
          controller: 'ProductUpdateCtrl'
      }
  },
  data: {
    authorizedRoles: [USER_ROLES.storeManager]
    },
  params:      {'product_id': null}
})
    
.state('app.donations', {
  url: '/donations',
  cache: false,
  views: {
    'menuContent': {
      templateUrl: 'js/orders/templates/donations.html',
      controller: 'DonationCtrl'
    }
  }
})
    
.state('app.profile', {
  cache: false,
  url: '/profile',
  views: {
    'menuContent': {
      templateUrl: 'js/store/templates/profile.html',
      controller: 'StoreCtrl'
    }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})

.state('app.videos', {
  cache: false,
  url: '/videos',
  views: {
    'menuContent': {
      templateUrl: 'templates/videos.html'
     // controller: 'PlaylistsCtrl',
    }
  }
})

  .state('app.vdashboard', {
      cache: false,
      url: '/vdashboard',
      views: {
          'menuContent': {
              templateUrl: 'js/videomaker/templates/vdashboard.html',
              controller: 'VdashboardCtrl'
          }
      },
      data: {
          authorizedRoles: [USER_ROLES.videoManager]
      }
  })
.state('app.videoupload', {
  cache: false,
  url: '/videoupload',
  views: {
      'menuContent': {
          templateUrl: 'js/videomaker/templates/videoUpload.html',
          controller: 'VideoUploadCtrl'
      }
  },
  data: {
      authorizedRoles: [USER_ROLES.videoManager]
  },
  params:      {'order_id': null}
})

.state('app.messagesSetting', {
  cache: false,
  url: '/messagesSetting',
  views: {
    'menuContent': {
      templateUrl: 'js/orders/templates/response_setting.html',
      controller: 'MessagesSettingCtrl'
    }
  },
  data: {
      authorizedRoles: [USER_ROLES.storeManager]
  }
})
    $urlRouterProvider.otherwise('/app/login');
})

.run(function ($rootScope, $state, AuthService,StoreService,AUTH_EVENTS,USER_ROLES) {
    $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
       /* if (!AuthService.isAuthenticated()) {
            if (next.name === 'app.login'  ) {

            }else{
                if((next.name ==="app.forgotPassword")){

                }else{
                    event.preventDefault();
                    $state.go('app.login');
                }
            }
        }else{
            if(next.name =="app.login" )
            {
                event.preventDefault();
                $state.go('app.dashboard');
            }
        }*/

        if ('data' in next && 'authorizedRoles' in next.data) {
            var authorizedRoles = next.data.authorizedRoles;
            if (!AuthService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                $state.go($state.current, {}, {reload: true});
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            }
            $rootScope.role =  AuthService.getRole();
            $rootScope.USER_ROLES = USER_ROLES;
        }

        if (!AuthService.isAuthenticated()) {
            if (!(next.name === 'app.login' || next.name === 'app.forgotPassword') ) {
                event.preventDefault();
                $state.go('app.login');
            }
        }else{
            if((next.name === 'app.login' || next.name ==="app.forgotPassword")  && AuthService.getRole()==USER_ROLES.storeManager){
                event.preventDefault();
                $state.go('app.dashboard');
            }else if((next.name === 'app.login' || next.name ==="app.forgotPassword") && AuthService.getRole()==USER_ROLES.videoManager){
                event.preventDefault();
                $state.go('app.vdashboard');
            }
            if(next.name !== 'app.stores' &&  !(StoreService.getSelectedStoreId() || StoreService.getSelectedStoreId()=='') && AuthService.getRole()==USER_ROLES.storeManager){
                event.preventDefault();
                $state.go('app.stores');
            }

        }



    });
});

app.config(function(multiselectProvider) {
    multiselectProvider.setTemplateUrl('js/multiselect/templates/item-template.html');
    multiselectProvider.setModalTemplateUrl('js/multiselect/templates/modal-template.html');
});