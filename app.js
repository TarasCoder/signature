$(".testSignature input").hide();
//   $(".mainButton button").hide();
//   $(".saveFileInput input").hide();
  
  var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
  });
  var saveButton = document.getElementById('save');
  var cancelButton = document.getElementById('clear');
  
  saveButton.addEventListener('click', function (event) {
    var data = signaturePad.toDataURL('image/png');
    console.log(data);

    var download = document.createElement('a');
    download.href = data;
    download.download = 'signature-Test.png';
    download.click();

    // Saving data to CF
    // $(".testSignature input").attr("value", data);
  });
  
  cancelButton.addEventListener('click', function (event) {
    signaturePad.clear();
  });