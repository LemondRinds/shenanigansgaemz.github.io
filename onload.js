/// notes on onload
/// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = (event) => {
  /// woot your page loaded!
  console.log("page is fully loaded");

  /// moved the nav bar replace into here, you could use it on every page if you want
  $.get("navigation.html", function(data){
	$("#nav_placeholder").replaceWith(data);
  });

  /// provide some labels and comments for functions, once again just moving this here because js can get nasty quickly
  /// $(func(){})() or $(() => {})() are self calling functions, too, fun stuff, probably don't need the wrapping $() if you move this into onload but i could be wrong
  //$(function(){
  /// you could just exec your code in here for now. mind you variable scope could become an issue but you can abuse closures and use big names etc
  /// once js code start ballooning it's best to organize functions on objects so you can call them in correct contexts and junk but probably overkill here
    var current = location.pathname;
    $('li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
  //})
};
