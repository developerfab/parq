var site_name = 'A';
var site_lat = 'A';
var site_lon = 'A';
var x=document.getElementById("frameMaps");
var var_start_in ;
var var_zoom = 18;
var var_size ;
var var_map_type ;
var var_my_location ;
var var_sites ;
var var_sensor = '';
var urlMap = '' ;
var global_loc ;

function getLocation()   {
    if (navigator.geolocation)  {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else{
        x.innerHTML="Geolocation is not supported by this browser."; 
    }
}
  
function showPosition(position)  {
    global_loc = position;
    var_start_in = 'center=' + position.coords.latitude + ',' + position.coords.longitude ;
    var_size = 'size=500x1000';
    var_map_type = 'maptype=roadmap';
    var_my_location = 'markers=color:red|label:Yo|' +  
    position.coords.latitude + ',' + position.coords.longitude + 
    '&markers=color:black|label:A|4.70947,-74.110535' + 
    '&markers=color:blue|label:B|4.706535,-74.108643' + 
    '&markers=color:blue|label:C|4.704546,-74.104469' + 
    '&markers=color:blue|label:D|4.702696,-74.100628' + 
    '&markers=color:blue|label:E|4.699852,-74.097099' + 
    '&markers=color:blue|label:F|4.698408,-74.094899' + 
    ''	;
    var_sites = '';
    var_sensor = 'sensor=false';

    reDrawURL();
}
//This finction make a zoomIn in the application.
function zoomIn() {
    var position = global_loc;
    var_zoom = var_zoom - 1; 
    var_start_in = 'center=' + position.coords.latitude + ',' + position.coords.longitude ;
    var_size = 'size=500x1000';
    var_map_type = 'maptype=roadmap';
    var_my_location = 'markers=color:red|label:Yo|' +  
    position.coords.latitude + ',' + position.coords.longitude + 
    '&markers=color:black|label:A|4.70947,-74.110535' + 
    '&markers=color:blue|label:B|4.706535,-74.108643' + 
    '&markers=color:blue|label:C|4.704546,-74.104469' + 
    '&markers=color:blue|label:D|4.702696,-74.100628' + 
    '&markers=color:blue|label:E|4.699852,-74.097099' + 
    '&markers=color:blue|label:F|4.698408,-74.094899' + 
    ''	;
    var_sites = '';
    var_sensor = 'sensor=false';
    reDrawURL();
}

function zoomOut() {
    var position = global_loc;
    var_zoom = var_zoom + 1; 
    var_start_in = 'center=' + position.coords.latitude + ',' + position.coords.longitude ;
    var_size = 'size=500x1000';
    var_map_type = 'maptype=roadmap';
    var_my_location = 'markers=color:red|label:Yo|' +  
    position.coords.latitude + ',' + position.coords.longitude + 
    '&markers=color:black|label:A|4.70947,-74.110535' + 
    '&markers=color:blue|label:B|4.706535,-74.108643' + 
    '&markers=color:blue|label:C|4.704546,-74.104469' + 
    '&markers=color:blue|label:D|4.702696,-74.100628' + 
    '&markers=color:blue|label:E|4.699852,-74.097099' + 
    '&markers=color:blue|label:F|4.698408,-74.094899' + 
    ''	;
    var_sites = '';
    var_sensor = 'sensor=false';
    reDrawURL();
}



function reDrawURL() {
    urlMap = 'http://maps.googleapis.com/maps/api/staticmap?' +
    var_start_in     + '&' +
    'zoom='+var_zoom + '&' +
    var_size         + '&' +
    var_map_type     + '&' +
    var_my_location  + '&' +
    var_sites        + '&' +
    var_sensor ;
    document.getElementById("mapImage").src = urlMap;
    document.getElementById("txtF").value = urlMap;
}