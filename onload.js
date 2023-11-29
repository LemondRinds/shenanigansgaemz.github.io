window.onload = (event) => {
  
  console.log("page is fully loaded");
  
  $.get("navigation.html", function(data){
				$("#nav_placeholder").replaceWith(data);
		});

  /// provide some labels and comments
  $(function(){
    var current = location.pathname;
    $('li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
  })
};
