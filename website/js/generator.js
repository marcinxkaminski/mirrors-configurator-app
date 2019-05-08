//TODO: Replace 'http://wiesiek.home.pl/agh/piaggi-web/' with real destination
let pathToResources = 'http://wiesiek.home.pl/agh/piaggi-web';
let models = ['Roulette', 'Stadium', 'BigQ', 'Kaleidoscope', 'Barbarella', 'Rhombus', 'Eclipse', 'Disco'];
let frameColors = {};
let mirrorColors = {};
let sizes = {};
let modelIndex = 0;
let frameColorIndex = 0;
let mirrorColorIndex = 0;
let isInitialized = false;
let playingAnimation = false;
let onMobile = false;
let currentView = "Front";

function initializeMapsOfFrameAndMirrorColors() {
    mirrorColors['Roulette'] = ['Multicolor', 'Blue', 'Gray', 'Red', 'Beige', 'Green', 'Pink', 'DarkBrown'];
    mirrorColors['Stadium'] = ['Multicolor', 'Blue', 'Gray', 'Red', 'Beige', 'Green', 'Pink', 'DarkBrown'];
    mirrorColors['BigQ'] = ['Blue', 'Red', 'Beige', 'Green', 'Pink', 'DarkBrown'];
    mirrorColors['Kaleidoscope'] = ['Multicolor', 'Maroon', 'Violet'];
    mirrorColors['Barbarella'] = ['Blue', 'Red'];
    mirrorColors['Rhombus'] = ['Multicolor', 'Black', 'Pink'];
    mirrorColors['Eclipse'] = ['Multicolor'];
    mirrorColors['Disco'] = ['Multicolor'];

    frameColors['Roulette'] = ['White', 'Dark', 'Light'];
    frameColors['Stadium'] = ['White', 'Dark', 'Light'];
    frameColors['BigQ'] = ['White', 'Dark', 'Light'];
    frameColors['Kaleidoscope'] = ['White', 'Dark', 'Light'];
    frameColors['Barbarella'] = ['White', 'Dark', 'Light'];
    frameColors['Rhombus'] = ['White', 'Dark', 'Light'];
    frameColors['Eclipse'] = ['White', 'Dark', 'Light'];
    frameColors['Disco'] = ['White', 'Dark', 'Light'];

    sizes['Roulette'] = ['Medium - 80cm, Large - 100cm, Royal - 120cm diameter'];
    sizes['Stadium'] = ['Medium - 60x110cm, Large 75x140cm'];
    sizes['BigQ'] = ['Medium - 70x140cm, Large - 80x160cm, Royal - 95x195cm'];
    sizes['Kaleidoscope'] = ['Medium - 65x92cm, Large - 85x120cm'];
    sizes['Barbarella'] = ['Medium - 80x80cm, Large - 75x110cm'];
    sizes['Rhombus'] = ['Slim - 87x150cm, Medium - 77x110cm, Chunky - 100x140cm'];
    sizes['Eclipse'] = ['Small - 60cm, Medium - 80cm, Royal - 100cm diameter'];
    sizes['Disco'] = ['Medium - 32x120cm, Large - 50x150cm'];
}

function generateShortNameOfProduct() {
    return models[modelIndex] + mirrorColors[models[modelIndex]][mirrorColorIndex];
}

function getLinkToProduct() {
    switch (generateShortNameOfProduct()) {
        case 'Disco':
            return 'http://piaggi.co.uk/store/gb/mirrors/disco/45-disco.html';

        case 'Eclipse':
            return 'http://piaggi.co.uk/store/gb/mirrors/eclipse/59-barbarella-blue.html';

        case 'RhombusMulticolor':
            return 'http://piaggi.co.uk/store/gb/mirrors/rhombus/27-rhombus-multicolour.html';

        case 'RhombusBlack':
            return 'http://piaggi.co.uk/store/gb/mirrors/rhombus/26-rhombus-black.html';

        case 'RhombusPink':
            return 'http://piaggi.co.uk/store/gb/mirrors/rhombus/28-rhombus-pink.html';

        case 'BarbarellaBlue':
            return 'http://piaggi.co.uk/store/gb/mirrors/barbarella/43-barbarella-blue.html';

        case 'BarbarellaRed':
            return 'http://piaggi.co.uk/store/gb/mirrors/barbarella/41-kaleidoscope-multicolour.html';

        case 'KaleidoscopeMulticolor':
            return 'http://piaggi.co.uk/store/gb/mirrors/kaleidoscope/40-kaleidoscope-multicolour.html';

        case 'KaleidoscopeMaroon':
            return 'http://piaggi.co.uk/store/gb/mirrors/kaleidoscope/39-kaleidoscope-maroon.html';

        case 'KaleidoscopeViolet':
            return 'http://piaggi.co.uk/store/gb/mirrors/kaleidoscope/38-kaleidoscope-violet.html';

        case 'BigQBlue':
            return 'http://piaggi.co.uk/store/gb/mirrors/big-q/37-big-q-navy-blue.html';

        case 'BigQRed':
            return 'http://piaggi.co.uk/store/gb/mirrors/big-q/36-big-q-red.html';

        case 'BigQBeige':
            return 'http://piaggi.co.uk/store/gb/mirrors/big-q/29-big-q-beige.html';

        case 'BigQGreen':
            return 'http://piaggi.co.uk/store/gb/mirrors/big-q/34-big-q-green.html';

        case 'BigQPink':
            return 'http://piaggi.co.uk/store/gb/mirrors/big-q/35-big-q-pink.html';

        case 'BigQDarkBrown':
            return 'http://piaggi.co.uk/store/gb/mirrors/big-q/33-big-q-dark.html';

        case 'StadiumMulticolor':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/18-stadium-multicolour.html';

        case 'StadiumBlue':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/25-stadium-navy-blue.html';

        case 'StadiumGray':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/24-stadium-Gray.html';

        case 'StadiumRed':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/22-stadium-red.html';

        case 'StadiumBeige':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/21-stadium-beige.html';

        case 'StadiumGreen':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/20-stadium-green.html';

        case 'StadiumPink':
            return 'http://piaggi.co.uk/store/gb/mirrors/stadium/23-stadium-pink.html';

        case 'StadiumDarkBrwon':
            return 'http://piaggi.co.uk/store/gb/13-stadium';

        case 'RouletteMulticolor':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/8-roulette-multicolour.html';

        case 'RouletteBlue':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/14-roulette-navy-blue.html';

        case 'RouletteGray':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/13-roulette-Gray.html';

        case 'RouletteRed':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/62-roulette-red.html';

        case 'RouletteBeige':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/9-roulette-beige.html';

        case 'RouletteGreen':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/63-roulette-red.html';

        case 'RoulettePink':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/61-roulette-pink.html';

        case 'RouletteDarkBrown':
            return 'http://piaggi.co.uk/store/gb/mirrors/roulette/12-roulette-beige.html';

        default:
            return 'http://piaggi.co.uk/store/gb/6-mirrors';
    }
}

function changeProductPreview(view, fadeTime = 500) {
    if (isInitialized) {

        if (view !== "" && view !== undefined && view !== "Empty") {
            updateChosen((currentView + "-product-view"), (view + "-product-view"));
            currentView = view;
        }

        $('#customized-product').fadeOut(fadeTime, function () {
            if (view === 'Front' || view === 'Side') {
                document.getElementById('customized-product').src = pathToResources + '/images/mirrors/' + generateNameOfProduct() + view + '.png';
            }
            else if (view === 'Empty') {
                document.getElementById('customized-product').src = pathToResources + '/images/mirrors/' + models[modelIndex] + frameColors[models[modelIndex]][frameColorIndex] + 'Empty.png';
            }
            else {
                document.getElementById('customized-product').src = pathToResources + '/images/mirrors/' + generateNameOfProduct() + currentView + '.png';
            }
        });

        document.getElementById('Front-product-view').src = pathToResources + '/images/mirrors/' + generateNameOfProduct() + 'Front.png';
        document.getElementById('Side-product-view').src = pathToResources + '/images/mirrors/' + generateNameOfProduct() + 'Side.png';
        setTimeout("$('#customized-product').fadeIn(" + fadeTime + ");", (fadeTime + 100));
    }
}

function playInOutAnimation(prevIndex) {
    if (isInitialized && !onMobile) {
        let videoOut = document.getElementById('customized-product-video');
        let sourceOut = document.getElementById('customized-product-video-source');
        let videoIn = document.getElementById('customized-product-video2');
        let sourceIn = document.getElementById('customized-product-video-source2');
        let promisePlay;
        sourceOut.src = pathToResources + '/videos/in&out/' + generateNameOfProduct(prevIndex) + 'Out.mp4';
        sourceIn.src = pathToResources + '/videos/in&out/' + generateNameOfProduct() + 'In.mp4';
        videoOut.load();
        videoIn.load();
        videoOut.addEventListener("play", () => {
            playingAnimation = true;
            videoOut.style.display = 'block';
        });
        videoIn.addEventListener("play", () => {
            playingAnimation = true;
            videoIn.style.display = 'block';
        });
        videoOut.addEventListener("ended", () => {
            playingAnimation = false;
            promisePlay = videoIn.play();
        })
        videoIn.addEventListener("ended", () => {
            playingAnimation = false;
            changeProductPreview('Front', 0);
            setTimeout(() => {
                videoOut.style.display = 'none';
                videoIn.style.display = 'none';
            }, 400)
        });

        promisePlay = videoOut.play();

        if (promisePlay !== undefined) {
            promisePlay.catch(error => {
                console.log('video has not been played properly.' + generateNameOfProduct(usedIndex) + kindOfAnimation + '.mp4');
            });
        }
    }
    else if (onMobile) {
        changeProductPreview('Front', 0);
    }
}

function generateNameOfProduct(usedIndex = mirrorColorIndex) {
    return models[modelIndex] + frameColors[models[modelIndex]][frameColorIndex] + mirrorColors[models[modelIndex]][usedIndex];
}

function updateModelOptions() {
    document.getElementById("model-Roulette").src = "images/mirrors/Roulette" + frameColors["Roulette"][frameColorIndex] + mirrorColors["Roulette"][mirrorColorIndex % mirrorColors["Roulette"].length] + "Front.png";
    document.getElementById("model-Stadium").src = "images/mirrors/Stadium" + frameColors["Stadium"][frameColorIndex] + mirrorColors["Stadium"][mirrorColorIndex % mirrorColors["Stadium"].length] + "Front.png";
    document.getElementById("model-BigQ").src = "images/mirrors/BigQ" + frameColors["BigQ"][frameColorIndex] + mirrorColors["BigQ"][mirrorColorIndex % mirrorColors["BigQ"].length] + "Front.png";
    document.getElementById("model-Kaleidoscope").src = "images/mirrors/Kaleidoscope" + frameColors["Kaleidoscope"][frameColorIndex] + mirrorColors["Kaleidoscope"][mirrorColorIndex % mirrorColors["Kaleidoscope"].length] + "Front.png";
    document.getElementById("model-Barbarella").src = "images/mirrors/Barbarella" + frameColors["Barbarella"][frameColorIndex] + mirrorColors["Barbarella"][mirrorColorIndex % mirrorColors["Barbarella"].length] + "Front.png";
    document.getElementById("model-Rhombus").src = "images/mirrors/Rhombus" + frameColors["Rhombus"][frameColorIndex] + mirrorColors["Rhombus"][mirrorColorIndex % mirrorColors["Rhombus"].length] + "Front.png";
}

function updateChosen(from, to) {
    if (from !== "") {
        document.getElementById(from).className = "";
    }
    if (to !== "") {
        document.getElementById(to).className += "chosen";
    }
}

function updateSizes() {
    $('#sizes').fadeOut(500, function () {
        document.getElementById("sizes").src = pathToResources + "/images/sizes/" + models[modelIndex] + ".png";
    });
    setTimeout("$('#sizes').fadeIn(500);", 600);
}

function updateColorOptions() {
    let colorOptions = document.getElementById("color-options");
    colorOptions.innerHTML = "";
    for (let i = 0; i < mirrorColors[models[modelIndex]].length; ++i) {
        colorOptions.innerHTML += "<img id=\"color-" + mirrorColors[models[modelIndex]][i] + "\"onclick=\"changeColor(" + i + ")\" src=\"images/colors/" + mirrorColors[models[modelIndex]][i] + ".png\">\n";
    }
}

function updateModel(prevIndex) {
    updateChosen(("model-" + models[prevIndex]), ("model-" + models[modelIndex]));
    updateColorOptions();
    setColorForModel();
    changeProductPreview();
    updateSizes();
}

function setColorForModel() {
    mirrorColorIndex %= mirrorColors[models[modelIndex]].length;
    updateChosen("", "color-" + mirrorColors[models[modelIndex]][mirrorColorIndex]);
}

function updateFrameColor(prevIndex) {
    updateChosen("frame-" + frameColors[models[modelIndex]][prevIndex], "frame-" + frameColors[models[modelIndex]][frameColorIndex]);
    changeProductPreview();
    updateModelOptions();
}

function updateMirrorColor(prevIndex) {
    if (models[modelIndex] !== 'Disco' || models[modelIndex] !== 'Eclipse') {
        playInOutAnimation(prevIndex);
        updateChosen("color-" + mirrorColors[models[modelIndex]][prevIndex], "color-" + mirrorColors[models[modelIndex]][mirrorColorIndex]);
        updateModelOptions();
    }
}

function changeModel(index) {
    let prevIndex = modelIndex;
    modelIndex = index;
    updateModel(prevIndex);
}

function changeFrameColor(index) {
    let prevIndex = frameColorIndex;
    frameColorIndex = index;
    updateFrameColor(prevIndex);
}

function changeColor(index) {
    let prevIndex = mirrorColorIndex;
    mirrorColorIndex = index;
    updateMirrorColor(prevIndex);
}

function increaseModelIndex() {
    if (!playingAnimation) {
        let prevIndex = modelIndex;
        if (modelIndex < models.length - 1) {
            ++modelIndex;
        }
        else {
            modelIndex = 0;
        }
        updateModel(prevIndex);
    }
}

function decreaseModelIndex() {
    if (!playingAnimation) {
        let prevIndex = modelIndex;
        if (modelIndex > 0) {
            --modelIndex;
        }
        else {
            modelIndex = models.length - 1;
        }
        updateModel(prevIndex);
    }
}

function increaseFrameColorIndex() {
    if (!playingAnimation) {
        let prevIndex = frameColorIndex;
        if (frameColorIndex < frameColors[models[modelIndex]].length - 1) {
            ++frameColorIndex;
        }
        else {
            frameColorIndex = 0;
        }
        updateFrameColor(prevIndex);
    }
}

function decreaseFrameColorIndex() {
    if (!playingAnimation) {
        let prevIndex = frameColorIndex;
        if (frameColorIndex > 0) {
            --frameColorIndex;
        }
        else {
            frameColorIndex = frameColors[models[modelIndex]].length - 1;
        }
        updateFrameColor(prevIndex);
    }
}

function increaseMirrorColorIndex() {
    if (!playingAnimation) {
        let prevMirrorColorIndex = mirrorColorIndex;
        if (mirrorColorIndex < mirrorColors[models[modelIndex]].length - 1) {
            ++mirrorColorIndex;
        }
        else {
            mirrorColorIndex = 0;
        }
        updateMirrorColor(prevMirrorColorIndex);
    }
}

function decreaseMirrorColorIndex() {
    if (!playingAnimation) {
        let prevMirrorColorIndex = mirrorColorIndex;
        if (mirrorColorIndex > 0) {
            --mirrorColorIndex;
        }
        else {
            mirrorColorIndex = mirrorColors[models[modelIndex]].length - 1;
        }
        updateMirrorColor(prevMirrorColorIndex);
    }
}

//Two ways of loading this object. One is at the end of code in jquery.
function load3d() {
    // document.getElementById('3d-object-frame').src = generateNameOfProduct() + '.html';
}

$(function () {
    // $("#3d-object").load(pathToResources + '/3d/mirrors/' + generateNameOfProduct() + '.html');
});

//ADDITIONAL
function isMobileOrTablet() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    onMobile = check;
    return check;
}

function openProductPage() {
    let win = window.open(getLinkToProduct(), '_blank');
    win.focus();
}

screen.addEventListener("orientationchange", () => {
    var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;

    if (orientation === "landscape-primary") {
    } else if (orientation === "landscape-secondary") {
    } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
        console.log("Mmmh... you should rotate your device to landscape");
    } else if (orientation === undefined) {
        console.log("The orientation API isn't supported in this browser :(");
    }
})

//Swiper (Hammer)
$(function () {
    if (onMobile) {
        var displayedProduct = document.getElementById('generator');
        var hammer = new Hammer(displayedProduct);
        // hammer.get('pinch').set({ enable : true });
        hammer.get('swipe').set({direction: Hammer.DIRECTION_ALL});
        hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
        hammer.add(new Hammer.Tap({event: 'tripletap', taps: 3}));
        hammer.add(new Hammer.Tap({event: 'doubletap', taps: 2}));
        hammer.add(new Hammer.Tap({event: 'singletap'}));
        hammer.get('doubletap').recognizeWith('singletap');
        hammer.get('tripletap').recognizeWith('singletap');
        hammer.get('singletap').requireFailure('doubletap');
        hammer.get('doubletap').set({direction: Hammer.DIRECTION_ALL});


        hammer.on("swipeleft", function () {
            decreaseMirrorColorIndex();
        });

        hammer.on("swiperight", function () {
            increaseMirrorColorIndex();
        });

        hammer.on("swipedown", function () {
            decreaseFrameColorIndex();
        });

        hammer.on("swipeup", function () {
            increaseFrameColorIndex();
        });

        hammer.on("doubletap", function () {
            increaseModelIndex();
        });

        hammer.on("tripletap", function () {
            decreaseModelIndex();
        });
    }
})

//jQuery smooth scroll
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800, function () {

            });
        }
    });
});

// Google Analitycs Sync
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-67469576-1');

//jQuey Preloader page fade out connected with pace.js
Pace.on("done", function (e) {
    $('#page-overlay').fadeOut(1000);
});

// jQuery for swipe overlay instruction
$("#swipe-overlay").click(() => {
    hideSwipeAndTapTutorial()
});

function showSwipeAndTapTutorial() {
    $("#swipe-overlay").show();
    setTimeout(hideSwipeAndTapTutorial, 10000);
}

function hideSwipeAndTapTutorial() {
    $("#swipe-overlay").fadeOut(600);
}

//On page load
function start() {
    isMobileOrTablet();
    onMobile ? showSwipeAndTapTutorial() : hideSwipeAndTapTutorial();
    initializeMapsOfFrameAndMirrorColors();
    updateChosen("", "model-Roulette");
    updateChosen("", "frame-White");
    updateChosen("", "Front-product-view");
    updateSizes();
    updateColorOptions();
    isInitialized = true;
}

window.onload = start();
