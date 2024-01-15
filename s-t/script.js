window.onload = function() {
  document.getElementById('click_to_record').addEventListener('click', function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    if ('SpeechRecognition' in window) {
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;

      recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        document.getElementById("convert_text").value = transcript;
        console.log(transcript);
      });
      
      if (speech) {
        recognition.start();
      }
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  });
};

