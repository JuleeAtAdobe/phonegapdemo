var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

// PhoneGap is ready 
function onDeviceReady() {
    /* navigator.notification.alert("phonegap is ready");*/
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

/* take photo using device camera */
function capturePhoto() {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50 });
    window.location.replace("#imagepage");
}

/* grab photo from source - PHOTOLIBRARY or SAVEDPHOTOALBUM */
function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
        window.location.replace("#imagepage");
}

/* add new graphic element on top */
function onAddTopImage(imageData) {
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = imageData;
}

function onPhotoURISuccess(imageURI) {
    var largeImage = document.getElementById('largeImage');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
}

function onFail(message) {
    // alert('Failed because: ' + message);

    // if user hits 'cancel' button, return to home page
    window.location.replace("#homepage");
}

/* called from 'New' button - reset both images */
function restart() {
    var largeImage = document.getElementById('largeImage');
    var smallImage = document.getElementById('smallImage');
    largeImage.src = "";
    smallImage.src = "";
}

