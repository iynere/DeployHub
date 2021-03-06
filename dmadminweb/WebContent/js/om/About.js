/*
 *  DeployHub is an Agile Application Release Automation Solution
 *  Copyright (C) 2017 Catalyst Systems Corporation DBA OpenMake Software
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function ShowAbout()
{
 $.ajax(
 {
  url : "About",
  dataType : 'json',
  type : 'GET',
  success : function(res)
  {
   var pwd = parent.$("#modal");
   
   var buttons = 
    [
          // { text: "Ok",     click: function() { UpdateLicense($(this)); } },
          { text: "Ok",     click: function() { $( this ).dialog("close"); } },
          { text: "Cancel", click: function() { $( this ).dialog("close"); } }
       ];
   
   var tdedit = "<table border=0><tr><td style=\"width:150px\">Version</td><td>8.0.1</td></tr>"
	   +"<tr><td>Build</td><td>"+res.build+"</td></tr>"
	   +"<tr><td>Database Schema:</td><td>"+res.schema+"</td></tr>"
	   +"</table>";

   pwd.dialog({ resizable: false, modal: true, dialogClass: "aboutsDialog", open: null }); 
   pwd.empty();
   pwd.html(tdedit);
   pwd.dialog("option", "title", "About DeployHub");
   pwd.dialog("option", "height", "auto");
   pwd.dialog("option", "width", "300px");
   pwd.dialog("option", "buttons", buttons);
   pwd.dialog('open');
  },
  error : function(jqxhr, status, err)
  {
   console.log(status);
   console.log(err);
  }
 });

}

/*
function UpdateLicense(dlg)
{
 if ($("#lickey").val() != "")
 {
  $.ajax(
    {
     url : "About?k=" + $("#lickey").val(),
     dataType : 'json',
     type : 'GET',
     success : function(res)
     {
      dlg.dialog("close");
     },
     error : function(jqxhr, status, err)
     {
      console.log(status);
      console.log(err);
      dlg.dialog("close");
     }
    });
 } 
 
 return;
}
*/

