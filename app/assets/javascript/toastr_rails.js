//= require 'toastr'

//toastr
toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

var showToast = function(flash){
  for(var i = 0; i < flash.length; i++ ){
    msg = flash[i];
    var type = {
      notice: 'success',
      alert: 'error',
      warning: 'warning',
      info: 'info'
    };
    toastr[type[msg[0]]](msg[1]);
  }
};