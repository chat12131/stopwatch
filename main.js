/* global $ */
$(document).ready(function() {
  let milliSeconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let startNow = false;
  let stopNow = false;
  let resetOn = false;
  $("#stopSet").prop("disabled", true);
  $("#resetSet").prop("disabled", true);

  function stop() {
    stopNow = true;
    startNow = false;
    $("#startSet").prop("disabled", false);
    $("#stopSet").prop("disabled", true);
    $("#resetSet").prop("disabled", false);
  }

  function reset() {
    if (startNow == true) {
      stopNow = true;
    }
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    $("#milliSeconds").html(milliSeconds);
    $("#seconds").html(pad2(seconds));
    $("#minutes").html(pad2(minutes));
    $("#hours").html(pad2(hours));
    $("#startSet").prop("disabled", false);
    $("#stopSet").prop("disabled", true);
    $("#resetSet").prop("disabled", true);
  }

  function start() {
    startNow = true;
    $("#startSet").prop("disabled", true);
    $("#stopSet").prop("disabled", false);
    $("#resetSet").prop("disabled", false);
    const intervalId = setInterval(() => {
      if (stopNow == true) {
        stopNow = false;
        clearInterval(intervalId);
        return;
      }
      milliSeconds += 1;
      if (milliSeconds == 10) {
        milliSeconds = 0;
        seconds += 1;
      }
      if (seconds == 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes == 60) {
        minutes = 0;
        hours += 1;
      }
      $("#milliSeconds").html(milliSeconds);
      $("#seconds").html(pad2(seconds));
      $("#minutes").html(pad2(minutes));
      $("#hours").html(pad2(hours));
    }, 100);
  }
  
  function pad2(number) {
  return (number < 10 ? '0' : '') + number
　}

  $("#startSet").click(function() {
    start();
  });

  $("#stopSet").click(function() {
    stop();
  });

  $("#resetSet").click(function() {
    reset();
  });
});