$(document).ready(function(){
  var appliedClass="";
    $("#applyBtn").click(function(){
      if (appliedClass){
        $("#shape").removeClass(appliedClass);
      }
      appliedClass = $("#shapeSelect").val();
      $("#shape").addClass(appliedClass);
      $("#shape").css("background-color", $("#colorSelect").val());
    });
    
    $("#clearBtn").click(function(){
      $("#shape").css("background-color", "");
      $("#shape").removeClass(appliedClass);
      appliedClass = "";
      $(colorSelect).prop('selectedIndex', 0);
      $(shapeSelect).prop('selectedIndex', 0);
    });
  });
