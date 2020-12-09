var url = 'http://localhost:4000/'; // 'https://filippovitale.it/';
var ext = '.png'; // pdf or png
var now = new Date();

// http://viewportsizes.com/mine/
var vps = [
           { width: 1439, height: 801 }, // macbook retina
           { width: 1024, height: 768 }, // ipad (landscape)
           { width: 960, height: 431 }, // nexus 7 (landscape)

           { width: 768, height: 1024 }, // ipad (portrait)
           { width: 600, height: 791 }, // nexus 7 (portrait)
           { width: 360, height: 511 } // nexus 5 (portrait)
            ]


function dateToYMDHM(d) {
    var ts = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes()];
    var f = function(x) { return (x<=9 ? '0' + x : x); }
    return ts.map(f).join('')
}


var page = new WebPage();
page.open(url, function(status) {
        if(status === "success") {
            vps.forEach(function(vp) {
                    page.viewportSize = vp;
                    page.render('screenshots/' + ('0'+vp.width).slice(-4) + '-' + dateToYMDHM(now) + ext);
                });
        }
        phantom.exit();
    });
