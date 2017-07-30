$(document).ready(function() {
  $("#gender-ratio").show();
  $("#net-job-change").hide();
  $("#gender-disparities").hide();
});

$("#gender-ratio-button").click(function() {
  $("#gender-ratio").show();
  $("#net-job-change").hide();
  $("#gender-disparities").hide();
});

$("#net-job-change-button").click(function() {
  $("#net-job-change").show();
  $("#gender-ratio").hide();
  $("#gender-disparities").hide();
});

$("#gender-disparities-button").click(function() {
  $("#gender-disparities").show();
  $("#net-job-change").hide();
  $("#gender-ratio").hide();
});
