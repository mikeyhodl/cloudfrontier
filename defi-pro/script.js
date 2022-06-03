const playerInstance = jwplayer("player").setup({
    controls: true,
    sharing: true,
    displaytitle: true,
    displaydescription: true,
    fullscreen: "true",
    primary: "html5",
    stretching: "uniform",
    aspectratio: "16:9",
    renderCaptionsNatively: false,
    autostart: false,
    abouttext: "Github",
    aboutlink: "https://github.com/mikeyhodl/comsit",
  
    skin: {
      name: "netflix"
    },
  
    logo: {
      file:
        " "
    },
  
    captions: {
      color: "#FFF",
      fontSize: 14,
      backgroundOpacity: 0,
      edgeStyle: "raised"
    },
  
    playlist: [
      {
        title: "",
        description: " ",
        image: "",
        sources: [
          {
            file:
              "https://res.cloudinary.com/weknow-creators/video/upload/v1653770484/trailers/1434659607842-pgv4ql-1653399486950_ydflhd.mp4",
            label: "1080p",
            default: true
          },
        ],
        captions: [
          // {
          //   file:
          //     "https://res.cloudinary.com/weknow-creators/raw/upload/v1650646028/srts/3_English_clkiga.srt",
          //   label: "English",
          //   kind: "captions",
          //   default: false
          // },
          
        ],
        tracks: [
          // {
          //   file:
          //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/mosaic.vtt",
          //   kind: "thumbnails"
          // }
        ]
      }
    ]
  });
  
  playerInstance.on("ready", function () {
    // Move the timeslider in-line with other controls
    const playerContainer = playerInstance.getContainer();
    const buttonContainer = playerContainer.querySelector(".jw-button-container");
    const spacer = buttonContainer.querySelector(".jw-spacer");
    const timeSlider = playerContainer.querySelector(".jw-slider-time");
    buttonContainer.replaceChild(timeSlider, spacer);
  });
