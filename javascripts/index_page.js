$(document).ready(function () {
  $(".utp").click(function () {
    // code here ...
  });

  $(".onload_show").each(function (index, element) {
    $(element).delay(200 * (index + 1)).toggleClass("hide show", 300);
  });
});