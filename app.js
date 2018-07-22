$('.headingCard').css('top', $('.mdc-top-app-bar').height()+20);
$('.mainCard').css('top', $('.mdc-top-app-bar').height()+40);
var drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menuToggle').addEventListener('click', () => drawer.open = true);

$.get('/mainCont.txt').then(function(data){
	$('.mainCard').html(data);
	//alert(data);
})
.catch(function(err){
	$('.mainCard .content').html('Unknown error occured!<br>Do you have the internet connection ?');
});


if('serviceWorker' in navigator) {
navigator.serviceWorker.register('/Sample-PWA/sw.js')
.then(function() {
	//alert('Service Worker Registered');
})
.catch(function(error){
	alert(error);
});
}
