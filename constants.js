/**
 * Created by sanjay on 23-Sep-16.
 */
app.constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})
app.constant('USER_ROLES', {
    storeManager: 'store_manager',
    videoManager: 'videomaker'
})

app.constant('URL', {
	
    service: 'http://localhost:8888/angular/rest/api'   //Localhost


})
app.constant('COMMON', {
    timeSeperator: '.'   //Localhost
    //service :  'http://localhost:8888/angular/rest/api'               //server
})
