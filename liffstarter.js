window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('textx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: 'This is a small web application that demonstrates the basic functionality of the LINE Front-end Framework (LIFF).\n\nSupport by HELLTERHEAD Corp.',
                sentBy: {
                    label: 'セルボットＤＲＥ！',
                    iconUrl: 'https://i.ibb.co/HnN4jFP/hlth-up.gif',
                    linkUrl: 'https://line.me/ti/p/~luscious.net'
                }
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('imagex').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'image',
                originalContentUrl: 'https://i.ibb.co/Tb1kWf2/Mo-banzu.jpg',
                previewImageUrl: 'https://i.ibb.co/Tb1kWf2/Mo-banzu.jpg',
                sentBy: {
                    label: 'セルボットＤＲＥ！',
                    iconUrl: 'https://i.ibb.co/HnN4jFP/hlth-up.gif',
                    linkUrl: 'https://line.me/ti/p/~luscious.net'
                }
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('videox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'video',
                originalContentUrl: atob('aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeTJrQlVwcmxPQW1YTHZyZm5pTEpVQ0RIMTlpS05JVVIvdmlldz91c3A9ZHJpdmVzZGs='),
                previewImageUrl: atob('aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdDlYaGpCTkk0WUdpcWQ0OVZSSjZxeWJYUndraGRCZ2Uvdmlldz91c3A9ZHJpdmVzZGs=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('audiox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'audio',
                originalContentUrl: atob('aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1pEdS03YTlIVlpWcVlod2RPVzhiTHdJNFFGZml5NWkvdmlldz91c3A9ZHJpdmVzZGs='),
                duration: 60000
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('stickerx').addEventListener('click', function () {
            liff.sendMessages([{
                type: "template",
                altText: "Sticker",
                template: {
                    type: "image_carousel",
                    columns: [{
                        imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/8117761/IOS/sticker_animation@2x.png",
                        action: {
                            type: "uri",
                            uri: "line://shop/sticker/detail/5331"
                        }
                    }]
                }
            }]).then(function () {
                liff.closeWindow();
            });
        });
    } else {
        makeText();
        makeImage();
        makeVideo();
        makeAudio();
        makeSticker();
        meProfile();
    }
    }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hello  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeText(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeVideo(){
    var tipe = getParameterByName('type');
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeAudio(){
    var tipe = getParameterByName('type');
    if (tipe === 'audio') {
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: 60000
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeSticker(){
    var tipe = getParameterByName('type');
    if (tipe === 'sticker') {
        var stk = getParameterByName('stk');
        var sid = getParameterByName('sid');
        var pkg = getParameterByName('pkg');
        var ep = '';
        if (stk === 'anim') {
            ep = "/IOS/sticker_animation@2x.png";
        } else {
            ep = "/IOS/sticker@2x.png";
        }
        liff.sendMessages([{
            type: "template",
            altText: "Sticker",
            template: {
                type: "image_carousel",
                columns: [{
                    imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+ep,
                    action: {
                        type: "uri",
                        uri: "line://shop/sticker/detail/"+pkg
                    }
                }]
            }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function meProfile(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        if (stat == null) {
            var stat = " ";
        }
        if (stat.length > 60) {
            var stat = "Status Message is to long! Max 60 words";
        }
        if (tipe === 'profile') {
            liff.sendMessages([{
                type: "template",
                altText: "Profile "+prof.displayName,
                template: {
                    type: "buttons",
                    thumbnailImageUrl: prof.pictureUrl,
                    imageAspectRatio: "square",
                    imageSize: "cover",
                    title: prof.displayName,
                    text: stat,
                    actions: [
                        {
                            type: "uri",
                            label: "Profile",
                            uri: "line://nv/profilePopup/mid="+prof.mid
                        }
                    ]
                }
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}
