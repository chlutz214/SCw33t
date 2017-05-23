/////////////////////////////////////       settings_helper.js     //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/04/2017
// Full Path: settings_helper.js
//
// Description: Holds globally required functions.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('settings_helper.js initializing.');

function openTab(evt, tabID) {                                                         
    // Declare all variables                                                           
    var i, tabcontent, tablinks;                                                       
    // Get all elements with class="tabcontent" and hide them                          
    tabcontent = document.getElementsByClassName("tabcontent");                        
    for (i = 0; i < tabcontent.length; i++) {                                          
        tabcontent[i].style.display = "none";                                          
    }                                                                                  
    // Get all elements with class="tablinks" and remove the class "active"            
    tablinks = document.getElementsByClassName("tablinks");                            
    for (i = 0; i < tablinks.length; i++) {                                            
        tablinks[i].className = tablinks[i].className.replace(" active", "");          
    }                                                                                  
    // Show the current tab, and add an "active" class to the link that opened the tab 
    document.getElementById(tabID).style.display = "block";                            
    evt.currentTarget.className += " active";                                          
}

window.hideFillers = function() {    
// function hideFillers() {    
    //alert("hide");   
    var toHide = document.getElementsByClassName("hideListButton"); 
    for (var i =0; i < toHide.length; i++) { alert(toHide[i].id); toHide[i].click(); }   
}    
window.showFillers = function() {   
// function showFillers() {       
    //alert("show");   
    var toShow = document.getElementsByClassName("showListButton"); 
    for (var i =0; i < toShow.length; i++) { toShow[i].click(); }   
} 

function twistSection(twisty) {  
   var parentDiv = twisty;   
   while (parentDiv.tagName != "DIV") { parentDiv = parentDiv.parentNode; } 
   var headerId = parentDiv.id.split('_')[1];
   var div = parentDiv.nextSibling.nextSibling;
   if (div.style.display != "none") {   
       div.style.display = "none";   
       twisty.className = "showListButton";
       twisty.alt = twisty.title = "Show Section - " + twisty.name; 
   } else {  
       div.style.display = "block"; 
       twisty.className = "hideListButton"; 
       twisty.alt = twisty.title = "Hide Section - " + twisty.name;
   }    
} 



logTrace('settings_helper.js finished.');