var check = 0;

function loginhome() {

  var uname = $('#indexuser').val();
  var pword = $('#indexpass').val();
  $.getJSON('data.json', function(data) {
    var obj = jQuery.parseJSON(JSON.stringify(data));

    for (var i = 0; i < obj.profiles.length; i++) {
      if (uname == obj.profiles[i].username && pword == obj.profiles[i].password) {

        check++;

        setCookie("status", 1, 30);
        window.location = '/my';

      }
    }
  });
};
function logoutdash() {
    setCookie("status", 0, 0);
    window.location = '/';
};

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*2*60*30));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

function register() {
    window.location = '/register';
};

function saveReg() {
    var newU = $('#reguser').val();
    var newP = $('#regpass').val();
    $.ajax
        ({
            type: "POST",
            url: 'http://localhost:3000/profiles/',
            accs: { 
            "username" : newU,
            "password" : newP
            
          },
          success: function (){
            window.location = '/';
          },
            dataType: "json"
        });
};