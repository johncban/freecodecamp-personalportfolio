jQuery(function ($) {
    $("#module-video").YTPlayer({
      fitToBackground: false,
      /* Static 4k YT video ID */
      videoId: "2lrYQMPCQk0",
      pauseOnScroll: false,
      playerVars: {
        modestbranding: 0,
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        branding: 0,
        rel: 0,
        autohide: 0,
      },
    });

    $("#background-video").YTPlayer({
      fitToBackground: true,
      /* Actual 360 YT video ID */
      videoId: "xBY-e82-MfY", 
      pauseOnScroll: true,
      callback: function () {
        videoCallbackEvents();
      },
    });

    var videoCallbackEvents = function () {
      var player = $("#background-video").data("ytPlayer").player;

      player.addEventListener("onStateChange", function (event) {
        console.log("Player State Change", event);

        // OnStateChange Data
        if (event.data === 0) {
          console.log("video ended");
        } else if (event.data === 2) {
          console.log("paused");
        }
      });
    };
  });