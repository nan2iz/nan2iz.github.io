jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}
  
  
$(document).ready(function() {
  
  $(".video").css({
    "width"  : $("#player").css("width"),
    "height" : $("#player").css("height")
  });
  
  $("#button-bronco").click(function() {
    $(".video-wrapper").fadeIn('fast', function() {
      $(".video").fadeIn(); 
      $(".video").center(); 
    });
        
  });
    
  $("#button-qbot").click(function() {
    $(".video-wrapper-qbot").fadeIn('fast', function() {
      $(".video").fadeIn(); 
      $(".video").center(); 
    });
        
  });
    
  $("#button-native-form").click(function() {
    $(".video-wrapper-native").fadeIn('fast', function() {
      $(".video").fadeIn(); 
      $(".video").center(); 
    });
        
  });
    
  $("#button-healthy-beats").click(function() {
    $(".video-wrapper-healthy-beats").fadeIn('fast', function() {
      $(".video").fadeIn(); 
      $(".video").center(); 
    });
        
  });
    
    
    
    
  
  $(".video-wrapper").click(function(e) {
    if($(e.target).is(".video-wrapper")) {
      $(".video").fadeOut(function() {
        $(".video-wrapper").fadeOut(function() {
         $(".video, .video-wrapper").css({'display':'none'}); 
          var src=$("#player").attr("src");
          $("#player").attr("src", "");
          $("#player").attr("src", src);
        });
      });
    }
  });
  
  $(document).keyup(function(e) {
    var isShown=$(".video-wrapper").css("display");
    
    if(isShown !== "none" && e.which==27) {
       $(".video-wrapper").click(); 
    }
    
  });
    
 $(".video-wrapper-qbot").click(function(e) {
    if($(e.target).is(".video-wrapper-qbot")) {
      $(".video").fadeOut(function() {
        $(".video-wrapper-qbot").fadeOut(function() {
         $(".video, .video-wrapper-qbot").css({'display':'none'}); 
          var src=$("#player").attr("src");
          $("#player").attr("src", "");
          $("#player").attr("src", src);
        });
      });
    }
  });
  
  $(document).keyup(function(e) {
    var isShown=$(".video-wrapper-qbot").css("display");
    
    if(isShown !== "none" && e.which==27) {
       $(".video-wrapper-qbot").click(); 
    }
    
  });
    
  $(".video-wrapper-native").click(function(e) {
    if($(e.target).is(".video-wrapper-native")) {
      $(".video").fadeOut(function() {
        $(".video-wrapper-native").fadeOut(function() {
         $(".video, .video-wrapper-native").css({'display':'none'}); 
          var src=$("#player").attr("src");
          $("#player").attr("src", "");
          $("#player").attr("src", src);
        });
      });
    }
  });
  
  $(document).keyup(function(e) {
    var isShown=$(".video-wrapper-native").css("display");
    
    if(isShown !== "none" && e.which==27) {
       $(".video-wrapper-native").click(); 
    }
    
  });
  
  $(".video-wrapper-healthy-beats").click(function(e) {
    if($(e.target).is(".video-wrapper-healthy-beats")) {
      $(".video").fadeOut(function() {
        $(".video-wrapper-healthy-beats").fadeOut(function() {
         $(".video, .video-wrapper-healthy-beats").css({'display':'none'}); 
          var src=$("#player").attr("src");
          $("#player").attr("src", "");
          $("#player").attr("src", src);
        });
      });
    }
  });
  
  $(document).keyup(function(e) {
    var isShown=$(".video-wrapper-healthy-beats").css("display");
    
    if(isShown !== "none" && e.which==27) {
       $(".video-wrapper-healthy-beats").click(); 
    }
    
  });
    
});