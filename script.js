$(document).ready(function(){
    $("#iplookupbtn").click(function(){
      var user_ip = $("#ipadd").val();
      if(user_ip == ''){
        alert('Please Enter IP Address');
      }
      else{
        $.getJSON('https://ipinfo.io/'+user_ip+'/json', function(data){
     
         var ip = data.ip;
         var address = data.city+', '+data.region+', '+data.country;
         var network = data.org;
         var postal = data.postal;
         var timezone = data.timezone;
         var loc = data.loc;
         
         $("#ipaddress").html(ip);
         $("#address").html(address);
         $("#network").html(network);
         $("#pincode").html(postal);
         $("#timezone").html(timezone);
         $("#loc").html(loc);
     });
      }
     

        });
        });