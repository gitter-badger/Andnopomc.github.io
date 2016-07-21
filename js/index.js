var ta = document.getElementById('temp');
var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
  // console.log(inputReady);
});

$('.four-oh-four-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.404-input')).val().toLowerCase();
  var href;

	 if (val.charAt(0) + val.charAt(1) === 'cd'){
     var res = val.replace("cd ", "");
    window.location.href = res;
    resetForm();
  }else {
    resetForm();
  }
});

function resetForm(withKittens){
  var message = "Sorry that command is not recognized."
  var input = $('.404-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "Huzzzzzah Kittehs!"
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
ta.scrollTop = ta.scrollHeight;

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}
