$('#add_resolution').click(function() {
    var resolutionName = $('#resolution_name').val();
    var resolutionItemHTML = '<li class="list-group-item">' + resolutionName + ' <button id="delete_item" class="source-button btn btn-danger btn-xs" style="float: right;">delete</button> </li>';
    $('#resolution_list').append(resolutionItemHTML);
  });
  
  $('#resolution_list span').click(function() {
    var listItem = $(this).parent();
    var itemInput = listItem.find('input');
    itemInput.val($(this).text()).show();
    $(this).hide();
  });
  
  $('#resolution_list input').blur(function() {
    var listItem = $(this).parent();
    var itemSpan = listItem.find('span');
    itemSpan.text($(this).val()).show();
    $(this).hide();
  });
  
  $('#resolution_list input').hide();
  
  $('#resolution_list').sortable();

  $("ul").on("click", "button", function(e) {
    e.preventDefault();
    $(this).parent().remove();
});




$(document).ready(function(){
  function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("resolution_list");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
  
  function sortListDeni() {
    var list, i, switching, a, shouldSwitch;
    list = document.getElementById("resolution_list");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      a = list.getElementsByTagName("LI");
      // Loop through all list-items:
      for (i = 0; i < (a.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (a[i].innerHTML.toLowerCase() < a[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        a[i].parentNode.insertBefore(a[i + 1], a[i]);
        switching = true;
      }
    }
  }
  
  $('#abc').on('click', function() {
  
    if ( $('#abc').val() == 'a' ) sortList();
    else if ( $('#abc').val() == 'b' ) sortListDeni();
  });
});



function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("resolution_list");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}