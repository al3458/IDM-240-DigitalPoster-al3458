audioPlaying = true;
wholesvg = document.querySelector("#svgObj");
var audio = document.querySelector("audio#audio1");
var clickAudio = new Audio("American_idiot.mp3");

var video = document.querySelector("handGrenade");

const idiot = document.getElementById('audio1');
const maker = document.getElementById('audio2');

wholesvg.addEventListener("click", toggleAudio);
// wholesvg.addEventListener("click", changeChannel);


clickAudio.load();

var knobBottomCounter = 0;

var mySVG = document.getElementById("hsSVG");
var svgDoc;
var knobBottom;
var knobTop;
var knobBottomColor;
var oval;

// var handGrenade

mySVG.addEventListener(
	"load",
	function() {
		svgDoc = mySVG.contentDocument;
		knobBottom = svgDoc.getElementById("knob");
        knobBottomColor = svgDoc.getElementById("bgButtonBottom");
        oval = document.getElementsByClassName("ovalsfill");
        knobTopColor = svgDoc.getElementById("bgButtonTop");
        videoScreen = svgDoc.getElementById("handGrenade")
		knobBottom.addEventListener("click", toggleAudio);
		knobBottom.addEventListener("click", toggleHandOpacity);
		knobBottom.addEventListener("click", toggleFill);

		knobTop.addEventListener("click", changeChannel);
		// knobBottom.style.transform = "rotate(-30deg)";

		var promise = audio.play();

		promise.catch(() => {
			toggleAudio();
		});
	},
	false
);

// knobTop.addEventListener("click", function(){ alert("Hello World!"); });


// knobTop.addEventListener("click")

// function displayfill()
// {
// var col=document.getElementById("knob");
// knobBottomColor.setAttribute('fill', "red");
// }

// knobBottom.addEventListener('click', function() {
//     if (knobBottomColor.getAttribute('fill') === 'red') {
//       knobBottomColor.setAttribute('fill', 'blue'); // change fill color to blue
//     } else {
//       knobBottomColor.setAttribute('fill', 'red'); // change fill color back to red
//     }
//   });


// knobTop.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }

// knobTopColor.setAttribute('fill', "#373737");

function toggleHandOpacity () {
	// alert("hand called")
	if (videoScreen.style.opacity == 0) {
		videoScreen.style.opacity = 1;
		// oval.setAttribute('fill', '#88191C');
	} else {
		videoScreen.style.opacity = 0;
		// oval.setAttribute('fill', '#373737');
	}
}

function toggleFill() {
	if (oval.style.fillStyle = '#373737') {
		oval.style.fillStyle = '#88191C';
	} else {
		oval.style.fillStyle = '#373737';
	}
}


function toggleAudio() {
	if (audioPlaying) {

		audio.play();
        knobBottomColor.setAttribute('fill', "#88191C");
        // oval.setAttribute('fill', "#88191C");

	} else {

        audio.pause();
        audio.currentTime = 0;
        knobBottomColor.setAttribute('fill', "#373737");
        // oval.setAttribute('fill', "#373737")

	}

	audioPlaying = !audioPlaying;
	clickAudio.load();

};


// var knobTopCounter = 0;
// var knobTopColor = document.getElementById('bgButtonTop');

// knobTop.addEventListener('click', function() {
//     if (knobTopColor.getAttribute('fill') === '#373737') {
//         knobTopColor.setAttribute('fill', 'blue'); // change fill color to blue
//     } else {
//       knobTopColor.setAttribute('fill', 'red'); // change fill color back to red
//     }
//   });

// function changeChannel() {
// 	knobTopCounter += 10;
// 	knobTopCounter = knobTopCounter % 20;
// 	switch (knobTopCounter) {
// 		case 10:
//             knobTopColor.setAttribute('fill', "#373737");
// 			break;
// 		case 20:
//             knobTopColor.setAttribute('fill', "#88191C");
// 			break;
//     }
// }

// function stopAllAudio() {
//     idiot.pause();
//     idiot.currentTime = 0;
//     //
//     maker.pause();
//     maker.currentTime = 0;

//     audio.pause();
//     audio.currentTime = 0;
//   }

// video = document.querySelector("handGrenade");
// black = document.querySelector("div.black");


// function changeChannel() {
// 	knobTopCounter += 10;
// 	knobTopCounter = knobTopCounter % 20;
//     knobTop.style.opacity = 0;
// 	switch (knobTopCounter) {
// 		case 10:
//             videoScreen.style.opacity = "1.0";

// 			// black.style.zIndex = "-3";
// 			// video.src = "./videos/vid1.mp4";
// 			// video.play();
// 			// video.style.opacity = "1";
// 			// video.classList.add("videoOn");
// 			break;
// 		case 20:
//         videoScreen.style.opacity = "0";

// 			// black.style.zIndex = "-3";
// 			// video.src = "./videos/vid3.mp4";
// 			// video.play();
// 			break;
// 		// default:
// 		// 	video.pause();
// 		// 	black.style.zIndex = "-1";
// 		// 	video.style.opacity = "0";
// 		// 	video.classList.remove("videoOn");
// 	}
// }