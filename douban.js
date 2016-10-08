(function() {
    var audio = document.getElementById("audio");
    var zt = document.getElementById("zanting");
    var bf = document.getElementById("bofang");
    // 播放/暂停
    zt.onclick = function() {
        audio.pause();
        bf.style.display = 'block';
    }
    bf.onclick = function() {
        audio.play();
        bf.style.display = 'none';
    }

    // 进度条  // 进度时间


    audio.ontimeupdate = function() {
        var jian = audio.duration - audio.currentTime;
        var f = Math.floor(jian / 60);
        var s = Math.floor(jian % 60);
        if (s < 10) { s = "0" + s; }
        document.getElementById("jindu").style.width = audio.currentTime / audio.duration * 220 + "px";
        time.innerHTML = ("-" + f + ":" + s);
    }

    // 音量拖动
    var vk = document.getElementById("volume_kuang");
    var vy = document.getElementById("volume_yin");

    vk.onclick = function(event) {
        audio.volume = Math.floor(event.offsetX) / 80;
        vy.style.width = audio.volume * 80 + "px";
    }

    vk.onmousedown = function(event) {
            vk.onmousemove = function() {
                audio.volume = event.offsetX / 80;
                vy.style.width = event.offsetX + "px";
            }
            document.onmouseup = function() {
                vk.onmousemove = null;
            }
        }
        //红心标记
    var xh = document.getElementById("hongxin");
    var xhimg = document.getElementById("xhimg");

    xh.onclick = function() {
            if (xhimg.src = "xihuan.jpg") {
                xhimg.src = "hongxin.jpg";
            } else {
                xhimg.src = "xihuan.jpg";
            }
        }
        //qiehuan
    var qhi = document.getElementById("qiehuanimg");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");
    var img5 = document.getElementById("img5");
    var img6 = document.getElementById("img6");
    var xiangxi = document.getElementById("xiangxiimg");

    img1.onmouseover = function() {
        qhi.src = "1-1.jpg";
        img1.src = "11.jpg";
        xiangxi.src = "1-2.jpg";
    }
    img1.onmouseout = function() {
        img1.src = "1.jpg";
    }

    img2.onmouseover = function() {
        qhi.src = "2-1.jpg";
        img2.src = "22.jpg";
        xiangxi.src = "2-2.jpg";
    }
    img2.onmouseout = function() {
        img2.src = "2.jpg";
    }
    img3.onmouseover = function() {
        qhi.src = "3-1.jpg";
        img3.src = "33.jpg";
        xiangxi.src = "3-2.jpg";
    }
    img3.onmouseout = function() {
        img3.src = "3.jpg";
    }
    img4.onmouseover = function() {
        qhi.src = "4-1.jpg";
        img4.src = "44.jpg";
        xiangxi.src = "4-2.jpg";
    }
    img4.onmouseout = function() {
        img4.src = "4.jpg";
    }
    img5.onmouseover = function() {
        qhi.src = "5-1.jpg";
        img5.src = "55.jpg";
        xiangxi.src = "5-2.jpg";
    }
    img5.onmouseout = function() {
        img5.src = "5.jpg";
    }
    img6.onmouseover = function() {
        qhi.src = "6-1.jpg";
        img6.src = "66.jpg";
        xiangxi.src = "6-2.jpg";
    }
    img6.onmouseout = function() {
            img6.src = "6.jpg";
        }
        //ladong
    var btn = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");
    var ladong = document.getElementById("ladong");
    btn.onclick = function() {
        ladong.style.display = "none";
    }
    btn2.onclick = function() {
        ladong.style.display = "block";
    }



}(window))
