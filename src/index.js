const remSize = parseInt(getComputedStyle(document.documentElement).fontSize);
const tmpCanvas = document.createElement("canvas");
// 何でも繋がってしまう漢字は意図的に削除 (一二三四五六七八九十百千上下左右)
// const s1a = Array.from('一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六');
const w1_ = Array.from(
  "雨円王音火花貝学気休玉金空月犬見口校山子糸字耳車手出女小森人水正生青夕石赤川先早草足村大男竹中虫町天田土日入年白文木本名目立力林",
);
const w2_ = Array.from(
  "引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話",
);
const w3_ = Array.from(
  "悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和",
);
const w4_ = Array.from(
  "愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録",
);
const w5_ = Array.from(
  "圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴",
);
const w6_ = Array.from(
  "胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論",
);
// https://okjiten.jp/7-tyuugakuseikanji.html
// 漢検4級
const w7_ = Array.from(
  "握扱依威偉為違緯維壱芋隠陰鋭影越援縁煙鉛汚押奥憶菓箇暇雅介壊戒皆較獲刈甘監汗歓勧乾鑑環含奇鬼祈輝幾儀戯詰脚却丘及朽拠巨距御驚凶恐響叫狭狂況仰駆屈掘繰傾恵迎撃肩堅遣兼軒圏剣玄誇鼓枯継互更荒抗攻稿香恒項豪込婚鎖歳彩載剤咲惨雌伺紫刺脂旨執芝煮斜釈寂狩朱趣需秀舟襲柔獣瞬巡旬盾紹召沼詳床称畳丈飾殖触浸震慎侵寝振薪陣尽尋吹是征姓井跡扇占鮮訴燥騒僧贈即俗耐替拓沢濁脱丹端嘆淡弾恥遅致蓄沖跳徴澄珍沈抵堤摘滴添殿途吐渡奴怒透唐桃盗塔到倒逃踏稲闘胴峠突鈍曇弐悩濃輩杯泊拍迫薄爆髪抜罰繁販搬範般盤被疲彼避尾微匹描浜敏怖膚浮腐敷普賦舞幅払噴柄壁捕舗峰抱砲肪坊忙冒傍帽凡盆漫慢妙眠矛霧娘茂網猛黙紋踊雄与誉腰溶躍謡翼雷頼絡欄離粒慮療隣涙隷麗齢暦劣烈恋露郎惑腕",
);
// 漢検3級
const w8_ = Array.from(
  "哀慰詠悦閲炎宴欧殴乙卸穏架佳華嫁餓怪悔塊概慨該穫隔郭岳掛滑勘肝貫敢緩冠換喚企軌棄棋忌既岐騎犠欺菊吉喫虐虚脅峡凝緊斤愚偶遇啓鶏携掲刑憩契鯨賢倹幻雇顧弧孤悟娯甲孔控拘郊硬綱巧坑慌絞酵克獄魂紺恨墾催債削錯搾撮擦暫施祉諮侍慈軸湿疾赦邪殊寿潤遵徐如晶掌鐘焦衝昇匠譲錠嬢冗嘱辱審伸辛粋炊遂衰穂酔随髄瀬牲婿請隻惜斥籍摂潜繕措阻粗礎双桑葬掃遭憎促賊逮胎怠滞袋滝託卓択諾奪胆鍛壇稚畜窒駐抽鋳彫超聴陳鎮墜訂帝締哲斗塗陶凍痘匿篤豚尿粘婆排陪縛伐帆伴藩畔蛮泌卑碑姫漂苗赴符封伏覆墳紛癖募慕簿崩芳胞縫倣邦飽奉妨乏謀膨房某墨没翻魔埋膜又魅滅免幽憂誘擁揚揺抑裸濫吏隆了猟陵糧厘零霊励裂錬廉炉漏廊浪楼湾",
);
const w1 = w1_;
const w2 = w2_.concat(w1);
const w3 = w3_.concat(w2);
const w4 = w4_.concat(w3);
const w5 = w5_.concat(w4);
const w6 = w6_.concat(w5);
const w7 = w7_.concat(w6);
const w8 = w8_.concat(w7);
const idiomsList = [];
const wordsList = [w1, w1, w2, w3, w4, w5, w6, w7, w8, w8];
const size = 8;
const problemNum = 10;
const meiro = new Array(12);
let score = 0;
let counter = 0;
let processed;
let idioms;
let words = w4;
loadConfig();


function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.dataset.theme = "dark";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return array;
}

function calcReply() {
  const reply = new Array(size * size);
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    const tds = trs[x].children;
    for (let y = 0; y < size; y++) {
      const selected = tds[y].classList.contains("table-primary");
      const hinted = tds[y].classList.contains("table-secondary");
      const pos = meiro[x][y];
      if (pos > 0 && (selected || hinted)) {
        reply[pos - 1] = tds[y].textContent;
      }
    }
  }
  return reply;
}

function findMeiroIndex(n) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] == n) {
        return x * size + y;
      }
    }
  }
  return -1;
}

function prependIdiomLink(idiom, correct) {
  const a = document.createElement("a");
  a.textContent = idiom;
  a.href = "https://www.google.com/search?q=" + idiom + "とは";
  a.target = "_blank";
  a.rel = "noopener noreferer";
  if (correct) {
    a.className = "btn btn-light m-1";
  } else {
    a.className = "btn btn-secondary m-1";
  }
  solvedPanel.prepend(a);
}

function showSolved(reply, hinted) {
  const trs = document.getElementById("meiro").children;
  let j = 0;
  let k = 0;
  for (let i = 0; i < counter; i++) {
    const idiom = idioms[j];
    if (!processed[i]) {
      if (reply[i] == idiom[k]) {
        if (k == idiom.length - 1) {
          const pos = i - k + 1;
          if (processed[pos]) {
            const idx = findMeiroIndex(pos);
            const td = trs[Math.floor(idx / size)].children[idx % size];
            if (td.classList.contains("table-secondary")) {
              score += 1;
            } else {
              score += idiom.length;
            }
            prependIdiomLink(idiom, true);
          }
          document.getElementById("score").textContent = score;
        }
        processed[i] = true;
      } else {
        if (hinted) {
          const pos = i - k + 1;
          const idx = findMeiroIndex(pos);
          const td = trs[Math.floor(idx / size)].children[idx % size];
          td.className = "";
          td.classList.add("table-secondary");
        } else {
          prependIdiomLink(idiom, false);
          const pos = i - k;
          for (let l = pos; l < pos + idiom.length; l++) {
            processed[l] = true;
            const idx = findMeiroIndex(l + 1);
            const td = trs[Math.floor(idx / size)].children[idx % size];
            td.className = "";
            td.classList.add("table-secondary");
          }
        }
      }
    }
    if (k == idiom.length - 1) {
      j += 1;
      k = 0;
    } else {
      k += 1;
    }
  }
}

function showHint(reply) {
  reply = calcReply();
  showSolved(reply, true);
}

function showAnswer() {
  const reply = calcReply();
  showSolved(reply, false);
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    const tds = trs[x].children;
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] > 0) {
        tds[y].className = "";
        tds[y].classList.add("table-danger");
      }
    }
  }
  const startButton = document.getElementById("startButton");
  startButton.classList.remove("d-none");
  startButton.textContent = "スタート";
  const answerButton = document.getElementById("answerButton");
  answerButton.classList.add("d-none");
}

function getNeighborText(trs, x, y, direction) {
  let text = trs[x].children[y].textContent;
  if (direction == 1) {
    if (meiro[x - 1][y] != 0) {
      text += trs[x - 1].children[y].textContent;
    }
  } else if (direction == 2) {
    if (meiro[x + 1][y] != 0) {
      text += trs[x + 1].children[y].textContent;
    }
  } else if (direction == 3) {
    if (meiro[x][y - 1] != 0) {
      text += trs[x].children[y - 1].textContent;
    }
  } else {
    if (meiro[x][y + 1] != 0) {
      text += trs[x].children[y + 1].textContent;
    }
  }
  return text;
}

function setNeighborText(trs, x, y, direction, text, isAnswer) {
  if (!isAnswer) {
    trs[x].children[y].textContent = text[0];
  }
  if (direction == 1) {
    trs[x - 1].children[y].textContent = text[1];
  } else if (direction == 2) {
    trs[x + 1].children[y].textContent = text[1];
  } else if (direction == 3) {
    trs[x].children[y - 1].textContent = text[1];
  } else {
    trs[x].children[y + 1].textContent = text[1];
  }
}

function generateRandomText(text, isAnswer) {
  if (isAnswer) {
    const first = text[0];
    for (let i = 0; i < 5; i++) { // どうしても熟語ができてしまうケースがあるため回数打ち切り
      text = first + words[getRandomInt(0, words.length)];
      if (!includeIdiom(text))return text;
    }
  } else {
    for (let i = 0; i < 5; i++) { // どうしても熟語ができてしまうケースがあるため回数打ち切り
      for (let j = 0; j < 2; j++) {
        text[j] = words[getRandomInt(0, words.length)];
      }
      if (!includeIdiom(text))return text;
    }
  }
  return text;
}

function includeIdiom(text) {
  if (idioms.includes(text.slice(0, 2))) {
    return true;
  } else {
    return false;
  }
}

function strictNeighbor(trs, x, y, direction, isAnswer) {
  let text = getNeighborText(trs, x, y, direction);
  if (text.length == 2) { // 解答ノードを含まない時
    text = generateRandomText(text, isAnswer);
    setNeighborText(trs, x, y, direction, text, isAnswer);
  }
}

function strictSolution() {
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] == 0) {
        // 解答ノード以外は隣接ニ文字だけ見て熟語ができないようにする
        if (0 <= x - 1) {
          strictNeighbor(trs, x, y, 1, false);
        }
        if (x + 1 < size) {
          strictNeighbor(trs, x, y, 2, false);
        }
        if (0 <= y - 1) {
          strictNeighbor(trs, x, y, 3, false);
        }
        if (y + 1 < size) {
          strictNeighbor(trs, x, y, 4, false);
        }
      } else {
        // 解答ノードは別解ができないようにする
        const routes = getNeighborRoutes(x, y);
        for (let j = 0; j < routes.length; j++) {
          strictNeighbor(trs, x, y, routes[j][2], true);
        }
      }
    }
  }
}

function startGame() {
  while (solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);
  generateGame();
  strictSolution();
  const startButton = document.getElementById("startButton");
  startButton.classList.add("d-none");
  startButton.textContent = "やり直し";
  const answerButton = document.getElementById("answerButton");
  answerButton.classList.remove("d-none");
}

function getNeighborRoutes(x, y) {
  const routes = [];
  if (0 <= x - 1 && meiro[x - 1][y] == 0) {
    routes.push([x - 1, y, 1]);
  }
  if (x + 1 < size && meiro[x + 1][y] == 0) {
    routes.push([x + 1, y, 2]);
  }
  if (0 <= y - 1 && meiro[x][y - 1] == 0) {
    routes.push([x, y - 1, 3]);
  }
  if (y + 1 < size && meiro[x][y + 1] == 0) {
    routes.push([x, y + 1, 4]);
  }
  return routes;
}

function paint(x, y, direction, n) {
  if (direction == 1) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x - i][y] = counter;
    }
    return [x - n + 1, y];
  } else if (direction == 2) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x + i][y] = counter;
    }
    return [x + n - 1, y];
  } else if (direction == 3) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x][y - i] = counter;
    }
    return [x, y - n + 1];
  } else {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x][y + i] = counter;
    }
    return [x, y + n - 1];
  }
}

function _p() {
  let str = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      str += meiro[i][j];
    }
    str += "\n";
  }
  console.log(str);
}

function isPassable(x, y, direction, n) {
  let passable = true;
  if (direction == 1) {
    if (x - n < 0)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x - i][y] != 0) {
        passable = false;
        break;
      }
    }
  } else if (direction == 2) {
    if (size <= x + n)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x + i][y] != 0) {
        passable = false;
        break;
      }
    }
  } else if (direction == 3) {
    if (y - n < 0)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x][y - i] != 0) {
        passable = false;
        break;
      }
    }
  } else {
    if (size <= y + n)return false;
    for (let i = 0; i < n; i++) {
      if (meiro[x][y + i] != 0) {
        passable = false;
        break;
      }
    }
  }
  return passable;
}

function generateGame() {
  // 10個の熟語を画面内に生成する
  idioms = shuffle(idioms);
  let generating = true;
  while (generating) {
    counter = 0;
    for (let x = 0; x < size; x++) {
      meiro[x] = new Array(size);
      for (let y = 0; y < size; y++) {
        meiro[x][y] = 0;
      }
    }
    let i = 0;
    let directionCount = 0;
    for (i = 0; i < problemNum; i++) {
      let painted = false;
      for (let j = 0; j < 5; j++) { // 5回ペイントしてうまくいかなければ失敗
        const x = getRandomInt(0, size);
        const y = getRandomInt(0, size);
        const direction = getRandomInt(1, 5);
        if (isPassable(x, y, direction, idioms[i].length)) {
          // 熟語が反転していると難しいので一般的な方向に合わせる
          if (direction == 1) {
            paint(x - idioms[i].length + 1, y, 2, idioms[i].length);
            directionCount += 0;
          } else if (direction == 3) {
            paint(x, y - idioms[i].length + 1, 4, idioms[i].length);
            directionCount += 1;
          } else {
            paint(x, y, direction, idioms[i].length);
            directionCount += Math.floor(direction / 4);
          }
          painted = true;
          break;
        }
      }
      if (!painted)break;
    }
    if (i == problemNum) {
      if (directionCount != 0 && directionCount != problemNum) {
        // すべて同じ方向だと問題としてつまらない
        generating = false;
      }
    }
  }
  processed = new Array(counter); // 回答リストのキャッシュを生成
  const meiroNode = document.getElementById("meiro");
  while (meiroNode.firstChild)meiroNode.removeChild(meiroNode.firstChild);
  for (let x = 0; x < size; x++) {
    const tr = document.createElement("tr");
    meiroNode.appendChild(tr);
    for (let y = 0; y < size; y++) {
      const td = document.createElement("td");
      td.textContent = words[getRandomInt(0, words.length)];
      tr.appendChild(td);
      td.onclick = function () {
        this.classList.toggle("table-primary");
      };
    }
  }
  const trs = meiroNode.children;
  let j = 0;
  let k = 0;
  for (let i = 1; i <= counter; i++) {
    const idx = findMeiroIndex(i);
    const idiom = idioms[j][k];
    const td = trs[Math.floor(idx / size)].children[idx % size];
    td.textContent = idiom;
    if (k == idioms[j].length - 1) {
      j += 1;
      k = 0;
    } else {
      k += 1;
    }
  }
}

function resizeFontSize(node) {
  // https://stackoverflow.com/questions/118241/
  function getTextWidth(text, font) {
    // re-use canvas object for better performance
    // const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = tmpCanvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }
  function getTextRect(text, fontSize, font, lineHeight) {
    const lines = text.split("\n");
    let maxWidth = 0;
    const fontConfig = fontSize + "px " + font;
    for (let i = 0; i < lines.length; i++) {
      const width = getTextWidth(lines[i], fontConfig);
      if (maxWidth < width) {
        maxWidth = width;
      }
    }
    return [maxWidth, fontSize * lines.length * lineHeight];
  }
  function getNodeRect() {
    const width = document.getElementById("container").clientWidth;
    const headerHeight = document.getElementById("header").clientHeight;
    const startButtonHeight = document.getElementById("startButton").clientHeight;
    const height = document.documentElement.clientHeight - headerHeight -
      startButtonHeight;
    return [width, height];
  }
  // function getPaddingRect(style) {
  //   const width = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  //   const height = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  //   return [width, height];
  // }
  const style = getComputedStyle(node);
  const font = style.fontFamily;
  const fontSize = 16; // parseFloat(style.fontSize);
  const lineHeight = 1.1; // parseFloat(style.lineHeight) / fontSize;
  const nodeRect = getNodeRect();
  const textRect = getTextRect("禿", fontSize, font, lineHeight);
  const paddingRect = [remSize * 2 + 21, remSize * 1.5 + 6]; // getPaddingRect(style);

  // https://stackoverflow.com/questions/46653569/
  // Safariで正確な算出ができないので誤差ぶんだけ縮小化 (10%)
  const rowFontSize = fontSize * (nodeRect[0] - paddingRect[0]) / 12 /
    textRect[0] * 0.90;
  const colFontSize = fontSize * (nodeRect[1] - paddingRect[1]) / 12 /
    textRect[1] * 0.90;
  if (colFontSize < rowFontSize) {
    node.style.fontSize = colFontSize + "px";
  } else {
    node.style.fontSize = rowFontSize + "px";
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    delete document.documentElement.dataset.theme;
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.dataset.theme = "dark";
  }
}


const meiroObj = document.getElementById("meiro");
resizeFontSize(meiroObj);
window.addEventListener("resize", function () {
  resizeFontSize(meiroObj);
});

fetch("words.lst").then(response => response.text()).then(text => {
  text.trim().split("\n").forEach(line => {
    idiomsList.push(line.split(","));
  });
  idioms = idiomsList[3];
  generateGame();
  strictSolution();
  while (solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);
  showAnswer();
});

document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("startButton").onclick = startGame;
document.getElementById("answerButton").onclick = showAnswer;
document.getElementById("hintButton").onclick = showHint;
document.getElementById("levelOption").addEventListener("change", function () {
  idioms = idiomsList[this.selectedIndex];
  words = wordsList[this.selectedIndex];
  startGame();
});
