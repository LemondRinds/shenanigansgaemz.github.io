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

  /// example of moving some of the game info out of html and into objects
  var game_cards = [
	  { /// could be a game_card 'type', more object oriented, maybe overkill
		  img_src:"images/spirit_island.webp",
		  img_alt:"Spirit Island board game cover image",
		  h1:"Spirit Island",
		  desc:"Island Spirits join forces using elemental powers to defend their home from invaders.",
		  /// this object could be an array you foreach over or something you spec out before hand like this, pros and cons, same w/ the game_card 'type'
		  specs:{
			  groups:"2-6 Players",
			  timer:"60-240 Minutes",
			  house:"Portlondia"
		  },
		  links:[
			  {
				  a:"https://boardgamegeek.com/boardgame/162886/spirit-island",
				  img_src:"images/bgg_logo.svg",
				  img_alt:"Spirit Island on BoardGameGeek"
			  },
			  {
				  a:"https://spiritislandwiki.com/index.php?title=Main_Page",
				  img_src:"images/si_reclaim.png",
				  img_alt:"Spirit Island Wiki"
			  },
			  {
				  a:"https://sick.oberien.de/?query=",
				  img_src:"images/si_minor.png",
				  img_alt:"Spirit Island Card Catalog"
			  }
		  ]
	  },
	  {
		  img_src:"images/agricola.webp",
		  img_alt:"Agricola Picture",
		  h1:"Agricola",
		  desc: "Build your farmstead by sowing fields and raising livestock. But don't forget to eat!",
		  links:[
		  	{
				  a:"https://boardgamegeek.com/boardgame/31260/agricola",
				  img_src:"images/bgg_logo.svg",
				  img_alt:"no alt text? :c ada fines inbound! blind ppl will never know what is supposed to be here"  
		  	}
		  ]
	  },
	  {}
  ]
};
