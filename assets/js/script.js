// title animation loop
const titles = [
  '📺🌸 JP4U - รวมช่อง TV ญี่ปุ่น',
  '💯 ที่เดียวในเมืองไทย',
  '🎬 บันเทิง/การ์ตูน/ข่าว ครบที่เดียว!',
  '👌 ลิ้งค์ตรงไม่มีโฆษณา',
  '📡 กดเลือกช่องได้เลย!',
];

let titleIndex = 0;

setInterval(() => {
  document.title = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}, 3000); // เปลี่ยนทุก 3 วินาที


const video = document.getElementById('video');
    const channelNumberDiv = document.getElementById('channelNumber');
    function toggleBorder() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
      video.style.border = 'none';  // ลบ border เมื่อเต็มจอ
    } else {
      video.style.border = '4px solid #fff';  // เพิ่ม border เมื่อออกจากโหมดเต็มจอ
    }
  }
  

  // การตรวจจับเมื่อเข้าสู่/ออกจากโหมดเต็มจอ
  document.addEventListener('fullscreenchange', toggleBorder);
  document.addEventListener('webkitfullscreenchange', toggleBorder);
  document.addEventListener('mozfullscreenchange', toggleBorder);

  // ในกรณีที่เป็นเบราว์เซอร์ที่ไม่รองรับ fullscreenchange
  video.addEventListener('dblclick', function() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      }
    }
  });
    const channelsDiv = document.getElementById('channels');
    let selectedIndex = 0;

    const categories = [
  {
    name: 'Tokyo',
    channels: [0, 1, 2, 3, 4, 5, 6, 7, 8], // index จาก channelNames/playBaseUrls
  }
  
/*, 
 {
    name: 'Kansai',
    channels: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
  },
  {
    name: 'BS (Broadcast Satellite)',
    channels: [28,29,30,31,32,33,34,35,36,37,38,38,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
  },
  {
    name: 'CS (Communication Satellite)',
    channels: [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],
  },
  {
    name: 'Niigata',
    channels: [89,90,91,92,93,94,95,96,97,98,99,100,101,],
  },
  {
    name: 'NSFW',
    channels: [102,103,104,105,106,107,108,109,110,111,112,],
  },
     {
    name: '24/7 Shows',
    channels: [113,],
  },
     {
    name: 'Japan with Thai Dub',
    channels: [114,115,116,117,118,119,120,121,122,123,124,125,],
  }
 
 */
];


    const channelNames = [
'ช่อง NHK G',
'ช่อง NHK E',
 'ช่อง NTV',
 'ช่อง TBS',
 'ช่อง Fuji TV',
'ช่อง  TV Asahi',
 'ช่อง TV Tokyo',
 'ช่อง TOKYO MX1',
'ช่อง TOKYO MX2', 
/*
'ช่อง EPL 5 Backup',
 'ช่อง 10  Bein 1',
'ช่อง 11  Bein 1 Backup',
 'ช่อง 12  Bein 2', 
 'ช่อง 13 Bein 2 Backup',
'ช่อง 14 Bein 3',
'ช่อง 15  Bein 3 Backup',
      'ช่อง 16 Bein HD 1',
      'ช่อง 17 Bein HD 2',
      'ช่อง 18 Bein HD 3',
      'ช่อง 19 Bein HD 4',
      'ช่อง 20 Bein HD 5',
      'ช่อง 21 Bein HD 6',
      'ช่อง 22 Bein HD 7',
      'ช่อง 23 Bein HD 8',
      'ช่อง 24 Bein HD 9',
      'ช่อง 25 Bein HD 10',
      'ช่อง 26 Bein HD 11',
      'ช่อง 27 Bein HD 12',
      'ช่อง 28 CH3 HD',
      'ช่อง 29 CH3 HD Backup',
      'ช่อง 30 CH5 HD',
      'ช่อง 31 CH5 HD Backup',
      'ช่อง 32 CH7 HD',
      'ช่อง 33 CH7 HD Backup',
      'ช่อง 34 CH9 HD',
      'ช่อง 35 CH9 HD Backup',
      'ช่อง 36  WorkPoint HD',
      'ช่อง 37 WorkPoint HD Backup',
      'ช่อง 38 GMM HD',
      'ช่อง 39 GMM HD Backup',
      'ช่อง 40 MONO HD',
      'ช่อง 41 MOMO HD Backup',
      'ช่อง 42 CH8 HD',
      'ช่อง 43 CH8 HD Backup',
      'ช่อง 44 ONE HD',
      'ช่อง 45 ONE HD Backup',
      'ช่อง 46 Amarin TV HD',
      'ช่อง 47 Amarin TV HD Backup',
      'ช่อง 48 Thairath TV HD',
      'ช่อง 49 Thairath TV HD Backup',
      'ช่อง 50 PPTV HD',
      'ช่อง 51 PPTV HD Backup',
      'ช่อง 52 TRUE 4 U HD',
      'ช่อง 53 TRUE 4 U HD Backup',
      'ช่อง 54 Nation TV HD',
      'ช่อง 55 Nation TV HD Backup',
      'ช่อง 56 JKN TV HD',
      'ช่อง 57 JKN TV HD Backup',
      'ช่อง 58 TNN TV HD',
      'ช่อง 59 TNN TV HD Backup',
      'ช่อง 60 Thai PBS TV HD',
      'ช่อง 61 Thai PBS TV HD Backup',
      'ช่อง 62 NBT TV HD',
      'ช่อง 63 NBT TV HD Backup',
      'ช่อง 64 ASIAN MORE',
      'ช่อง 65 Warner TV',
      'ช่อง 66 Waner TV Backup',
      'ช่อง 67 HBO TV',
      'ช่อง 68 HBO Family TV',
      'ช่อง 69 HBO HIT TV',
      'ช่อง 70 HBO Signature TV',
      'ช่อง 71 MAX HD TV',
      'ช่อง 72 MAX HD TV Backup',
      'ช่อง 73 AXN TV',
      'ช่อง 74 AXN TV Backup',
      'ช่อง 75 BLUE ANT TV',
      'ช่อง 76 BLUE Extreme TV',
      'ช่อง 77 FILM HD',
      'ช่อง 78 FILM 2 HD',
      'ช่อง 79 SERIES',
      'ช่อง 80 MOVIE HIT TV',
      'ช่อง 81 Xzyte TV',
      'ช่อง 82 TRUE THAI FILM TV',
      'ช่อง 83 Celestial TV',
      'ช่อง 84 TVN TV',
      'ช่อง 85 MIX MAJOR TV',
      'ช่อง 86 มังกร TV',
      'ช่อง 87 MONO PLUS TV',
      'ช่อง 88 FILM ASIA TV',
      'ช่อง 89 Discovery',
      'ช่อง 90 Discovery',
      'ช่อง 91 Discovery BK',
      'ช่อง 92 History',
       'ช่อง 93 History BK',
	    'ช่อง 94  FoodNetwork',
       'ช่อง 95 TLC BK',
       'ช่อง 96 TLC',
       'ช่อง 97 EXPLORE LIFE',
	   'ช่อง 98 EXPLORE WILD',
	   'ช่อง 99 EXPLORE SCI',
       'ช่อง 100 ASIAN FOOD CHANNEL',
       'ช่อง 101 ASIAN FOOD CHANNEL BK',
	    'ช่อง 102  DREAMWORKS',
		'ช่อง 103  CARTOON NETWORK',
		'ช่อง 104  CARTOON NETWORK BK',
		'ช่อง 105  SPARK PLAY',
		'ช่อง 106  NICK JR',
		'ช่อง 107 BOOMERANG',
		'ช่อง 108  CARTOONITO',
		'ช่อง 109  DISNEP CHANNEL',
		'ช่อง 110  DISNEP CHANNEL BK',
		'ช่อง 111  NICK LODEON',
		'ช่อง 112 NICK LODEON BK',
		'ช่อง 113 MTV',
		'ช่อง 114 TOP NEW',
		'ช่อง 115 TV รัฐสภา',
		'ช่อง 116 CNN',
		'ช่อง 117 BLOOMBERG',
		'ช่อง 118 FOX NEWS',
		'ช่อง 119 RT NEWS',
		'ช่อง 120 EURO NEWS',
		'ช่อง 121 CNBC NEWS',
		'ช่อง 122 BBC WORLD NEWS',
		'ช่อง 123 NHK WORLD',
		'ช่อง 124 CCTV4',
		'ช่อง 125 NEWS1'
		*/
    ];

    const channelLogos = [
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/NHK%E7%B7%8F%E5%90%88%E3%83%AD%E3%82%B42020-.png', 'https://upload.wikimedia.org/wikipedia/commons/a/aa/NHKE%E3%83%86%E3%83%AC%E3%83%AD%E3%82%B42020-.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nippon_TV_logo_2014.svg/2560px-Nippon_TV_logo_2014.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tokyo_Broadcasting_System_logo_2020.svg/2560px-Tokyo_Broadcasting_System_logo_2020.svg.png',
      'https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Fuji_TV_Logo.svg/1049px-Fuji_TV_Logo.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TV_Asahi_Logo.svg/2560px-TV_Asahi_Logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/TV_Tokyo_logo_2023.svg/2560px-TV_Tokyo_logo_2023.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tokyo_metropolitan_television_logo_%28rainbow%29.svg/2560px-Tokyo_metropolitan_television_logo_%28rainbow%29.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tokyo_metropolitan_television_logo_%28rainbow%29.svg/2560px-Tokyo_metropolitan_television_logo_%28rainbow%29.svg.png'
    ];

    // กำหนด playBaseUrls เอง
	// ช่องไทยที่ฉายของญี่ปุ่น มีบ้างไม่มีบ้าง
    const playBaseUrls = [
	  'http://vthanh.utako.moe/NHK_G/index.m3u8',
	  'http://vthanh.utako.moe/NHK_E/index.m3u8',
	  'http://vthanh.utako.moe/Nippon_TV/index.m3u8',
	  'http://vthanh.utako.moe/Fuji_TV/index.m3u8',
	  'http://vthanh.utako.moe/TV_Asahi/index.m3u8',
	  'http://vthanh.utako.moe/TV_Tokyo/index.m3u8',
	  'http://vthanh.utako.moe/Tokyo_MX1/index.m3u8',
	  'http://luong.utako.moe/mx2test/index.m3u8',
	  
	  // ช่องไทย
      // 'https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-asianmore&kauth=',
      // 'https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-series&kauth=',
      // 'https://cloud.ufxtv.com/api/tv/channels/play/?c=hd-xzyte&kauth=',
      // 'https://cloud.ufxtv.com/api/tv/channels/play/?c=th-monoplus&kauth=',
      // 'https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-filmasia&kauth=',
	  // 'https://cloud.ufxtv.com/api/tv/channels/play/?c=sd-nhkworld&kauth=',
    ];

    // ฟังก์ชันดึง playlist URL
    async function getPlaylist(user_loggedsession, playBaseUrl) {
  let playUrl = `${playBaseUrl}&user_loggedsession=${user_loggedsession}`;
  let response = await fetch(playUrl);
  let text = await response.text();

  // ถ้า session หมดอายุ
  if (text.includes('session failed')) {
    user_loggedsession = await login();
    playUrl = `${playBaseUrl}&user_loggedsession=${user_loggedsession}`;
    response = await fetch(playUrl);
    text = await response.text();
  }

  // เช็คว่ามีข้อมูลที่ใช้ได้
  const hasClearUrl = text.includes('<clear_url>');
  const hasMovieUrl = text.includes('<url>');

  return (hasClearUrl || hasMovieUrl) ? text : null;
}

    




// ดึง session ใหม่
async function login() {
  const response = await fetch('https://cloud.ufxtv.com/api/user/login/?user_email=BE0164&user_password=1111&kauth=');
  const text = await response.text();
  const sessionMatch = text.match(/<user_loggedsession>(.*?)<\/user_loggedsession>/);
  return sessionMatch ? sessionMatch[1] : null;
}


    // ดึง clear_url จาก response XML
    function extractClearUrl(xml) {
      const match = xml.match(/<clear_url>(.*?)<\/clear_url>/);
      return match ? match[1] : null;
    }

    function renderCategories() {
  const categoriesDiv = document.getElementById('categories');
  categoriesDiv.innerHTML = '';
  categoriesDiv.style.display = 'flex';
  channelsDiv.style.display = 'none';

  categories.forEach((cat, idx) => {
    const button = document.createElement('div');
    button.classList.add('channel-button');
    button.tabIndex = 0;
    button.innerHTML = `<div>${idx + 1}. ${cat.name}</div>`;
    button.onclick = () => showChannelsInCategory(idx);
    button.onkeydown = (e) => {
      if (e.key === 'Enter') showChannelsInCategory(idx);
    };
    categoriesDiv.appendChild(button);
  });
}

function showChannelsInCategory(catIndex) {
  const category = categories[catIndex];

  
  if (category.name === '3BB') {
    window.open('https://bestcommt2.github.io/3bb/3bb.html', '_self');
    return;
  }

  // แสดงช่องของหมวดที่เลือก
  channelsDiv.innerHTML = '';
  channelsDiv.style.display = 'flex';
  document.getElementById('categories').style.display = 'none';

  category.channels.forEach(i => renderPlaylist(i));

  // เพิ่มปุ่มย้อนกลับ
  const backBtn = document.createElement('div');
  backBtn.classList.add('channel-button');
  backBtn.innerHTML = '🔙 ย้อนกลับ';
  backBtn.tabIndex = 0;
  backBtn.onclick = renderCategories;
  backBtn.onkeydown = (e) => {
    if (e.key === 'Enter') renderCategories();
  };
  channelsDiv.appendChild(backBtn);
}




    // แสดงผลลัพธ์แบบ playlist
    function renderPlaylist(index) {
  const button = document.createElement('div');
  button.classList.add('channel-button');
  button.tabIndex = 0;
  button.innerHTML = ` 
    <img src="${channelLogos[index]}" alt="${channelNames[index]}">
    <div>${index + 1}. ${channelNames[index]}</div>
  `;

  // โหลด playlist เมื่อผู้ใช้คลิก
  button.onclick = () => loadChannelByIndex(index);
  button.onkeydown = (e) => {
    if (e.key === 'Enter') {
      loadChannelByIndex(index);
    }
  };

  channelsDiv.appendChild(button);
}

    // ฟังก์ชันในการโหลดช่องที่เลือก
function loadChannel(url, useIframe = false) {
  const video = document.getElementById('video');
  const iframe = document.getElementById('channel-frame');
  const iframeContainer = document.getElementById('iframe-container');

  if (useIframe) {
    // 👉 ซ่อนวิดีโอ แล้วโชว์ iframe
    video.style.display = 'none';
    iframeContainer.style.display = 'block';
    iframe.src = url;
  } else {
    // 👉 ซ่อน iframe แล้วโชว์ video
    iframeContainer.style.display = 'none';
    video.style.display = 'block';

    if (Hls.isSupported()) {
     const hls = new Hls({
  liveSyncDurationCount: 3,
  liveMaxLatencyDurationCount: 10
});
hls.loadSource(url);
hls.attachMedia(video);

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
    } else {
      alert('เบราว์เซอร์ของคุณไม่รองรับ HLS 😥');
    }
  }
}



let session = null;
    // Main
    async function loadChannelByIndex(index) {
  if (!session) {
    session = await login();
    if (!session) {
      alert("ไม่สามารถเข้าสู่ระบบได้ ❌");
      return;
    }
  }


  if (channelNames[index] === 'BallThai 1') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth1.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 2') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth2.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 3') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth3.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 4') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth4.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 5') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth5.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 6') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth6.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 7') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth7.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'BallThai 8') {
    const iframeUrl = 'https://bestcommt2.github.io/true/play%20ballth8.html';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'ช่อง FW SPORT') {
    const iframeUrl = 'https://www.inwiptv.org/player_demo.php?channel=89782';
    loadChannel(iframeUrl, true); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }
  if (channelNames[index] === 'EPL 1 BLUE') {
    const iframeUrl = 'http://tbtv.me:2095/play/live.php?mac=00:1a:79:80:09:03&stream=186561&extension=m3u8';
    loadChannel(iframeUrl, false); // ไม่ต้อง await ถ้า loadChannel ไม่เป็น async ก็ได้
    return;
  }


  const xml = await getPlaylist(session, playBaseUrls[index]);
  console.log("🚀 ~ loadChannelByIndex ~ xml:", xml)

  const isMovieCategory = categories.find(cat => cat.name === 'ดูหนัง'||cat.name === '20+')?.channels.includes(index);

  if (isMovieCategory) {
    // ดึงและ decode url ที่อยู่ใน <url> แทน
    const match = xml.match(/<url>(.*?)<\/url>/);
    if (match) {
      const encodedUrl = match[1];
      const decodedUrl = decodeURIComponent(encodedUrl);
      const fixedUrl = decodedUrl.replace('playlist.m3u8', 'chunk.m3u8');
      loadChannel(fixedUrl);
    } else {
      alert('ไม่พบลิงก์ playlist ❌');
    }
  } else {
    // หมวดอื่น ใช้วิธีเดิม
    const clearUrl = extractClearUrl(xml);
    if (clearUrl) {
      const fixedUrl = clearUrl.replace('playlist.m3u8', 'chunks.m3u8');
      loadChannel(fixedUrl);
    } else {
      alert('ไม่พบลิงก์ playlist ❌');
    }
  }
}

// ฟังก์ชันหลัก
(async () => {
  session = await login();
  if (!session) {
    alert("ไม่สามารถเข้าสู่ระบบได้ ❌");
    return;
  }

  renderCategories(); // ไม่ต้องโหลดช่องทั้งหมดทันที
})();


    // การควบคุมโดยใช้ปุ่มลูกศร
    let currentKey = ''
    document.addEventListener('keydown', (e) => {
      const buttons = document.querySelectorAll('.channel-button');
      if (e.key === 'ArrowDown') {
        selectedIndex = (selectedIndex + 3) % buttons.length; // เลื่อนลง 3 ช่อง
        buttons[selectedIndex].focus();
      } else if (e.key === 'ArrowUp') {
        selectedIndex = (selectedIndex - 3 + buttons.length) % buttons.length; // เลื่อนขึ้น 3 ช่อง
        buttons[selectedIndex].focus();
      } else if (e.key === 'ArrowLeft') {
        selectedIndex = (selectedIndex - 1 + buttons.length) % buttons.length; // เลื่อนซ้าย 1 ช่อง
        buttons[selectedIndex].focus();
      } else if (e.key === 'ArrowRight') {
        selectedIndex = (selectedIndex + 1) % buttons.length; // เลื่อนขวา 1 ช่อง
        buttons[selectedIndex].focus();
      }


      
  if (!isNaN(e.key)) {
      currentKey += e.key;  
      showChannelNumber(parseInt(currentKey)); 
  } else {
    currentKey = ''
  }

    // แสดงหมายเลขช่องที่เลือก
    function showChannelNumber(channelNumber) {
  channelNumberDiv.textContent = channelNumber;
  channelNumberDiv.style.display = 'flex';

  setTimeout(() => {
    channelNumberDiv.style.display = 'none';
    currentKey = '';

    const index = channelNumber - 1;
    if (index < 0 || index >= channelNames.length) return;

    // หา category ที่ช่องนี้อยู่
    const catIndex = categories.findIndex(cat => cat.channels.includes(index));
    if (catIndex === -1) return;

    // แสดงหมวดหมู่ที่เกี่ยวข้อง
    showChannelsInCategory(catIndex);

    // เล่นช่องทันที
    setTimeout(() => {
      loadChannelByIndex(index);

      const buttons = document.querySelectorAll('.channel-button');
      const btn = Array.from(buttons).find(b => b.innerText.includes(channelNames[index]));
      if (btn) {
        btn.focus();
      }
    }, 300); // หน่วงเวลาเล็กน้อยเพื่อให้ปุ่มถูกเรนเดอร์ก่อน
  }, 1000); // แสดงหมายเลขก่อนโหลด
}

    });

    // เพิ่มการเข้าสู่โหมด fullscreen เมื่อ video เริ่มเล่น
    video.addEventListener('play', () => {
  // ตรวจสอบว่าเป็นอุปกรณ์มือถือหรือไม่
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }
  }
});

