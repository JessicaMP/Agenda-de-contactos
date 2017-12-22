$( document ).ready(function(){
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $('.modal').modal();
});

$('#btn').click( function() {
  var box = $('<div></div>');
  box.addClass('z-depth-5 row');
  $('section').append(box);

  var box2 = $('<div></div>');
  box2.addClass('col s11 offset-s1');
  box.append(box2);

//Name of the contact
  var name = $('<h3></h3>');
  name.text($('#name').val());
  box2.append(name);
  $('#name').val('');

// Number of the contact
  var number = $('<h3></h3>');
  number.text($('#number').val());
  number.addClass('col s10');
  box2.append(number);
  $('#number').val('');

  var button = $('<a></a>');
  button.attr('href', '#');
  button.attr('id', 'btn-2');
  button.addClass('waves-effect waves-light btn col s1');
  box2.append(button);

  var icon = $('<i></i>');
  icon.addClass('material-icons center');
  icon.text('delete');
  button.append(icon);

  $('#btn-2').click( function() {
    box.addClass('hide');
  });
});
