$(document).on('pagecreate', '#home', function(){

    console.log('Evento delegado `#home` OK');

    $('#take-picture').bind('click', function(){

        function onCameraSuccess(imageURI){
            console.log(imageURI);

            $('#url-picture').empty().append('<span>' + imageURI + '</span>');

            console.log('onCameraSuccess imageURI: ' + imageURI);
        }

        function onCameraError(cameraError){
            $('#url-picture').append('<span>' + cameraError + '</span>');

            console.log('onCameraError: ' + cameraError);
        }

        var options = { quality : 75,  destinationType : Camera.DestinationType.DATA_URL, 
  sourceType : Camera.PictureSourceType.CAMERA,   allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,  targetWidth: 100,
  targetHeight: 100,  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: true };

        navigator.camera.getPicture(onCameraSuccess, onCameraError, options);
    });
});