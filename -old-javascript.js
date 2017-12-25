function onLoad() {
    document.getElementById("myInfo").style.visibility="hidden";
}


function onLoadBlog() {
    document.getElementById("myInfo").style.visibility="hidden";
    document.getElementById("newPostButton").style.display="none";
}


var count;
function signIn(blog) {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if ((user==="Scott" && pass==="Taylor") || (user==="Lauren" && pass==="Kantelis")) {
        //document.getElementById("tabs").innerHTML += "<li id='myInfo'><a href='myInfo.html'>MY INFO</a></li>";
        document.getElementById("myInfo").style.visibility="visible";
        document.getElementById("login").innerHTML = "<button onclick='signOut();' id='signout'>Sign out</button>";
        if (blog === 1) {
            document.getElementById("newPostButton").style.display="block";
            document.getElementById("login").innerHTML = "<button onclick='signOut(1);' id='signout'>Sign out</button>";
        }
        //document.getElementById("allPosts").innerHTML += "<button id='newPostButton' onclick='newPost();'>Create new post</button>";
    }
    else if (count !== 1) {
        document.getElementById("login").innerHTML += "<br><span id='incorrect'>*Username or password is incorrect</span>";
        count = 1;
        }
}
        
        
function signOut(blog) {
    count = 0;
    document.getElementById("myInfo").style.visibility = "hidden";
    document.getElementById("login").innerHTML= "Username: <input id='user'> &nbsp;Password: <input id='pass'>&nbsp;&nbsp;&nbsp;<button onclick='signIn();'>Sign in</button>";
    if (blog === 1) {
        document.getElementById("newPostButton").style.display="none";
        document.getElementById("login").innerHTML= "Username: <input id='user'> &nbsp;Password: <input id='pass'>&nbsp;&nbsp;&nbsp;<button onclick='signIn(1);'>Sign in</button>";
    }
}
     
     
function showPost() {
    document.getElementById("allPosts").style.display = "none";
            
}
        
function newPost() {
    
}
