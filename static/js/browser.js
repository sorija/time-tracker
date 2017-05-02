$(document).ready(function() {
  $('.timer').countimer({ autoStart: false });
  
  $("input").keypress(function(event) {
    if(event.which === 13) {
      var newTask = $(this).val();
      $(this).val("");
      $("ul").append("<li class=\"list-group-item list-group-item-info\"><button class=\"timer btn btn-primary\"></button>" + newTask + "<button class=\"btn btn-danger btn-xs\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button><input type=\"checkbox\"></li>");
      $('.timer').countimer({ autoStart: false });
    }
  });
});

$(document).on('click','.timer', function(){
  if($(this).siblings('input').prop('checked')) {
    return;
  } 
  if($(this).countimer('stopped'))
  {
    $(this).countimer('resume');
  } else {
    $(this).countimer('stop');
  }
});

$(document).on('click', ':checkbox', function(){
  $(this).parent().toggleClass('list-group-item-info');
  $(this).siblings('.timer').countimer('stop');
});

$(document).on('click', '.btn-danger', function(event) {
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
});
