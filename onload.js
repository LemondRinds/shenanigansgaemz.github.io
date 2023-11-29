/// notes on onload
/// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = (event) => {
  /// woot your page loaded!
  console.log("page is fully loaded");

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
		/// should also break out of the loop imo
    })
  //})

    /// moved the nav bar replace into here, you could use it on every page if you want
	$.get(location.origin + "navigation.html", function(data){
		$("#nav_placeholder").replaceWith(data);
	  });
	

  /// example of moving some of the game info out of html and into objects
  /// all in vanilla js in case you want to look up functions on mozilla dev network
  var game_cards = [ /// using an array here so i can have access to forEach later (check out js array prototype)
	  { /// could be a game_card 'type', more object oriented, maybe overkill
		  img_src:"./images/spirit_island.webp",
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
				  img_src:"./images/bgg_logo.svg",
				  img_alt:"Spirit Island on BoardGameGeek"
			  },
			  {
				  a:"https://spiritislandwiki.com/index.php?title=Main_Page",
				  img_src:"./images/si_reclaim.png",
				  img_alt:"Spirit Island Wiki"
			  },
			  {
				  a:"https://sick.oberien.de/?query=",
				  img_src:"./images/si_minor.png",
				  img_alt:"Spirit Island Card Catalog"
			  }
		  ]
	  },
	  {
		  img_src:"./images/agricola.webp",
		  img_alt:"Agricola Picture",
		  h1:"Agricola",
		  desc: "Build your farmstead by sowing fields and raising livestock. But don't forget to eat!",
		  links:[
		  	{
				  a:"https://boardgamegeek.com/boardgame/31260/agricola",
				  img_src:"./images/bgg_logo.svg",
				  img_alt:"no alt text? :c ada fines inbound! blind ppl will never know what is supposed to be here"  
		  	}
		  ]
	  }
  ]

  /// and you could do something silly like render elements via js too even (jquery makes it neater)
  game_cards.forEach((gcData) => {
	/// game card data
	var gcDiv = document.createElement("div");
	gcDiv.setAttribute("class", "game_card");
	var gcImg = document.createElement("img");
	gcImg.setAttribute("class", "game_card_img");
	gcImg.setAttribute("src", gcData.img_src);
	gcImg.setAttribute("alt", gcData.img_alt);
	gcDiv.appendChild(gcImg);
	var gcH1 = document.createElement("h1");
	gcH1.innerText = gcData.h1;
	gcDiv.appendChild(gcH1);
	var gcDesc = document.createElement("p");
	gcDesc.innerText = gcData.desc;
	gcDesc.setAttribute("class", "description"); 
	gcDiv.appendChild(gcDesc);

	if(gcData.specs){
		var gcSpecs = document.createElement("div");
		gcSpecs.setAttribute("class", "game_specs");
		if(gcData.specs.groups){
			var gcGroups = document.createElement("div");
			gcGroups.setAttribute("class", "game_spec_tile");
			var gcGroupsI = document.createElement("i");
			gcGroupsI.setAttribute("class", "material-icons");
			gcGroupsI.innerText = "groups";
			gcGroups.appendChild(gcGroupsI);
			var gcGroupsP = document.createElement("p");
			gcGroupsP.setAttribute("class", "material-icons");
			gcGroupsP.innerText = gcData.specs.groups;
		}
		if(gcData.specs.house){

		}
		if(gcData.specs.timer){

		}
	}

	// final append of game card
	document.getElementById("gameCardPlaceholder").append(gcDiv);
  });


//   <p class="description">Island Spirits join forces using elemental powers to defend their home from invaders.</p>
// 	  <div class="game_specs">
// 		  <div class="game_spec_tile">
// 			  <i class="material-icons">timer</i>
// 			  <p class="game_spec_text">60-240 Minutes</p>
// 		  </div>
// 		  <div class="game_spec_tile">
// 			  <i class="material-icons">house</i>
// 			  <p class="game_spec_text">Portlondia</p>
// 		  </div>
// 	  </div>
//   <div class="game_links">
// 		  <div class="game_link">
// 			  <a href="https://boardgamegeek.com/boardgame/162886/spirit-island" target="_blank">
// 				  <img src="images/bgg_logo.svg" class="game_card_logo" alt="Spirit Island on BoardGameGeek" />
// 			  </a>
// 		  </div>
// 		  <div class="game_link">
// 			  <a href="https://spiritislandwiki.com/index.php?title=Main_Page" target="_blank">
// 				  <img src="images/si_reclaim.png" class="game_card_logo" alt="Spirit Island Wiki" />
// 			  </a>
// 		  </div>
// 		  <div class="game_link">
// 			  <a href="https://sick.oberien.de/?query=" target="_blank">
// 				  <img src="images/si_minor.png" class="game_card_logo" alt="Spirit Island Card Catalog" />
// 			  </a>
// 		  </div>
// 	  </div>


};
