const remSize=parseInt(getComputedStyle(document.documentElement).fontSize),w1_=Array.from("雨円王音火花貝学気休玉金空月犬見口校山子糸字耳車手出女小森人水正生青夕石赤川先早草足村大男竹中虫町天田土日入年白文木本名目立力林"),w2_=Array.from("引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話"),w3_=Array.from("悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和"),w4_=Array.from("愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録"),w5_=Array.from("圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴"),w6_=Array.from("胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論"),w7_=Array.from("握扱依威偉為違緯維壱芋隠陰鋭影越援縁煙鉛汚押奥憶菓箇暇雅介壊戒皆較獲刈甘監汗歓勧乾鑑環含奇鬼祈輝幾儀戯詰脚却丘及朽拠巨距御驚凶恐響叫狭狂況仰駆屈掘繰傾恵迎撃肩堅遣兼軒圏剣玄誇鼓枯継互更荒抗攻稿香恒項豪込婚鎖歳彩載剤咲惨雌伺紫刺脂旨執芝煮斜釈寂狩朱趣需秀舟襲柔獣瞬巡旬盾紹召沼詳床称畳丈飾殖触浸震慎侵寝振薪陣尽尋吹是征姓井跡扇占鮮訴燥騒僧贈即俗耐替拓沢濁脱丹端嘆淡弾恥遅致蓄沖跳徴澄珍沈抵堤摘滴添殿途吐渡奴怒透唐桃盗塔到倒逃踏稲闘胴峠突鈍曇弐悩濃輩杯泊拍迫薄爆髪抜罰繁販搬範般盤被疲彼避尾微匹描浜敏怖膚浮腐敷普賦舞幅払噴柄壁捕舗峰抱砲肪坊忙冒傍帽凡盆漫慢妙眠矛霧娘茂網猛黙紋踊雄与誉腰溶躍謡翼雷頼絡欄離粒慮療隣涙隷麗齢暦劣烈恋露郎惑腕"),w8_=Array.from("哀慰詠悦閲炎宴欧殴乙卸穏架佳華嫁餓怪悔塊概慨該穫隔郭岳掛滑勘肝貫敢緩冠換喚企軌棄棋忌既岐騎犠欺菊吉喫虐虚脅峡凝緊斤愚偶遇啓鶏携掲刑憩契鯨賢倹幻雇顧弧孤悟娯甲孔控拘郊硬綱巧坑慌絞酵克獄魂紺恨墾催債削錯搾撮擦暫施祉諮侍慈軸湿疾赦邪殊寿潤遵徐如晶掌鐘焦衝昇匠譲錠嬢冗嘱辱審伸辛粋炊遂衰穂酔随髄瀬牲婿請隻惜斥籍摂潜繕措阻粗礎双桑葬掃遭憎促賊逮胎怠滞袋滝託卓択諾奪胆鍛壇稚畜窒駐抽鋳彫超聴陳鎮墜訂帝締哲斗塗陶凍痘匿篤豚尿粘婆排陪縛伐帆伴藩畔蛮泌卑碑姫漂苗赴符封伏覆墳紛癖募慕簿崩芳胞縫倣邦飽奉妨乏謀膨房某墨没翻魔埋膜又魅滅免幽憂誘擁揚揺抑裸濫吏隆了猟陵糧厘零霊励裂錬廉炉漏廊浪楼湾"),w1=w1_,w2=w2_.concat(w1),w3=w3_.concat(w2),w4=w4_.concat(w3),w5=w5_.concat(w4),w6=w6_.concat(w5),w7=w7_.concat(w6),w8=w8_.concat(w7),idiomsList=[],wordsList=[w1,w1,w2,w3,w4,w5,w6,w7,w8,w8],size=8,problemNum=10,meiro=new Array(12);let score=0,counter=0,processed,idioms,words=w4;loadConfig();function loadConfig(){localStorage.getItem("darkMode")==1&&document.documentElement.setAttribute("data-bs-theme","dark")}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),document.documentElement.setAttribute("data-bs-theme","light")):(localStorage.setItem("darkMode",1),document.documentElement.setAttribute("data-bs-theme","dark"))}function getRandomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a}function shuffle(a){for(let b=a.length;1<b;b--){const c=Math.floor(Math.random()*b);[a[c],a[b-1]]=[a[b-1],a[c]]}return a}function calcReply(){const a=new Array(size*size),b=document.getElementById("meiro").children;for(let c=0;c<size;c++){const d=b[c].children;for(let b=0;b<size;b++){const f=d[b].classList.contains("table-primary"),g=d[b].classList.contains("table-secondary"),e=meiro[c][b];e>0&&(f||g)&&(a[e-1]=d[b].textContent)}}return a}function findMeiroIndex(a){for(let b=0;b<size;b++)for(let c=0;c<size;c++)if(meiro[b][c]==a)return b*size+c;return-1}function prependIdiomLink(b,c){const a=document.createElement("a");a.textContent=b,a.href="https://www.google.com/search?q="+b+"とは",a.target="_blank",a.rel="noopener noreferer",c?a.className="btn btn-light m-1":a.className="btn btn-secondary m-1",a.role="button",solvedPanel.prepend(a)}function showSolved(d,e){const b=document.getElementById("meiro").children;let c=0,a=0;for(let f=0;f<counter;f++){const g=idioms[c];if(!processed[f])if(d[f]==g[a]){if(a==g.length-1){const c=f-a+1;if(processed[c]){const a=findMeiroIndex(c),d=b[Math.floor(a/size)].children[a%size];d.classList.contains("table-secondary")?score+=1:score+=g.length,prependIdiomLink(g,!0)}document.getElementById("score").textContent=score}processed[f]=!0}else if(e){const e=f-a+1,c=findMeiroIndex(e),d=b[Math.floor(c/size)].children[c%size];d.className="",d.classList.add("table-secondary")}else{prependIdiomLink(g,!1);const c=f-a;for(let a=c;a<c+g.length;a++){processed[a]=!0;const d=findMeiroIndex(a+1),e=b[Math.floor(d/size)].children[d%size];e.className="",e.classList.add("table-secondary")}}a==g.length-1?(c+=1,a=0):a+=1}}function showHint(a){a=calcReply(),showSolved(a,!0)}function showAnswer(){const b=calcReply();showSolved(b,!1);const c=document.getElementById("meiro").children;for(let a=0;a<size;a++){const b=c[a].children;for(let c=0;c<size;c++)meiro[a][c]>0&&(b[c].className="",b[c].classList.add("table-danger"))}const a=document.getElementById("startButton");a.classList.remove("d-none"),a.textContent="スタート";const d=document.getElementById("answerButton");d.classList.add("d-none")}function getNeighborText(c,a,b,e){let d=c[a].children[b].textContent;return e==1?meiro[a-1][b]!=0&&(d+=c[a-1].children[b].textContent):e==2?meiro[a+1][b]!=0&&(d+=c[a+1].children[b].textContent):e==3?meiro[a][b-1]!=0&&(d+=c[a].children[b-1].textContent):meiro[a][b+1]!=0&&(d+=c[a].children[b+1].textContent),d}function setNeighborText(a,b,c,e,d,f){f||(a[b].children[c].textContent=d[0]),e==1?a[b-1].children[c].textContent=d[1]:e==2?a[b+1].children[c].textContent=d[1]:e==3?a[b].children[c-1].textContent=d[1]:a[b].children[c+1].textContent=d[1]}function generateRandomText(a,b){if(b){{const b=a[0];for(let c=0;c<5;c++)if(a=b+words[getRandomInt(0,words.length)],!includeIdiom(a))return a}}else for(let b=0;b<5;b++){for(let b=0;b<2;b++)a[b]=words[getRandomInt(0,words.length)];if(!includeIdiom(a))return a}return a}function includeIdiom(a){return!!idioms.includes(a.slice(0,2))}function strictNeighbor(b,c,d,e,f){let a=getNeighborText(b,c,d,e);a.length==2&&(a=generateRandomText(a,f),setNeighborText(b,c,d,e,a,f))}function strictSolution(){const a=document.getElementById("meiro").children;for(let b=0;b<size;b++)for(let c=0;c<size;c++)if(meiro[b][c]==0)0<=b-1&&strictNeighbor(a,b,c,1,!1),b+1<size&&strictNeighbor(a,b,c,2,!1),0<=c-1&&strictNeighbor(a,b,c,3,!1),c+1<size&&strictNeighbor(a,b,c,4,!1);else{const d=getNeighborRoutes(b,c);for(let e=0;e<d.length;e++)strictNeighbor(a,b,c,d[e][2],!0)}}function startGame(){while(solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);generateGame(),strictSolution();const a=document.getElementById("startButton");a.classList.add("d-none"),a.textContent="やり直し";const b=document.getElementById("answerButton");b.classList.remove("d-none")}function getNeighborRoutes(a,b){const c=[];return 0<=a-1&&meiro[a-1][b]==0&&c.push([a-1,b,1]),a+1<size&&meiro[a+1][b]==0&&c.push([a+1,b,2]),0<=b-1&&meiro[a][b-1]==0&&c.push([a,b-1,3]),b+1<size&&meiro[a][b+1]==0&&c.push([a,b+1,4]),c}function paint(a,b,d,c){if(d==1){for(let d=0;d<c;d++)counter+=1,meiro[a-d][b]=counter;return[a-c+1,b]}if(d==2){for(let d=0;d<c;d++)counter+=1,meiro[a+d][b]=counter;return[a+c-1,b]}if(d==3){for(let d=0;d<c;d++)counter+=1,meiro[a][b-d]=counter;return[a,b-c+1]}for(let d=0;d<c;d++)counter+=1,meiro[a][b+d]=counter;return[a,b+c-1]}function _p(){let a="";for(let b=0;b<size;b++){for(let c=0;c<size;c++)a+=meiro[b][c];a+="\n"}console.log(a)}function isPassable(b,c,e,a){let d=!0;if(e==1){{if(b-a<0)return!1;for(let e=0;e<a;e++)if(meiro[b-e][c]!=0){d=!1;break}}}else if(e==2){{if(size<=b+a)return!1;for(let e=0;e<a;e++)if(meiro[b+e][c]!=0){d=!1;break}}}else if(e==3){{if(c-a<0)return!1;for(let e=0;e<a;e++)if(meiro[b][c-e]!=0){d=!1;break}}}else{if(size<=c+a)return!1;for(let e=0;e<a;e++)if(meiro[b][c+e]!=0){d=!1;break}}return d}function generateGame(){idioms=shuffle(idioms);let d=!0;while(d){counter=0;for(let a=0;a<size;a++){meiro[a]=new Array(size);for(let b=0;b<size;b++)meiro[a][b]=0}let a=0,b=0;for(a=0;a<problemNum;a++){let c=!1;for(let g=0;g<5;g++){const e=getRandomInt(0,size),f=getRandomInt(0,size),d=getRandomInt(1,5);if(isPassable(e,f,d,idioms[a].length)){d==1?(paint(e-idioms[a].length+1,f,2,idioms[a].length),b+=0):d==3?(paint(e,f-idioms[a].length+1,4,idioms[a].length),b+=1):(paint(e,f,d,idioms[a].length),b+=Math.floor(d/4)),c=!0;break}}if(!c)break}a==problemNum&&b!=0&&b!=problemNum&&(d=!1)}processed=new Array(counter);const a=document.getElementById("meiro");while(a.firstChild)a.removeChild(a.firstChild);for(let b=0;b<size;b++){const c=document.createElement("tr");a.appendChild(c);for(let b=0;b<size;b++){const a=document.createElement("td");a.textContent=words[getRandomInt(0,words.length)],c.appendChild(a),a.onclick=()=>{a.classList.toggle("table-primary")}}}const e=a.children;let c=0,b=0;for(let a=1;a<=counter;a++){const d=findMeiroIndex(a),f=idioms[c][b],g=e[Math.floor(d/size)].children[d%size];g.textContent=f,b==idioms[c].length-1?(c+=1,b=0):b+=1}}function resizeFontSize(a){const b=document.getElementById("masu").offsetWidth,c=1.2,d=remSize*8,e=9,f=(b-d-e)/8/c;a.style.fontSize=f+"px"}const meiroObj=document.getElementById("meiro");resizeFontSize(meiroObj),window.addEventListener("resize",()=>{resizeFontSize(meiroObj)}),fetch("words.lst").then(a=>a.text()).then(a=>{for(a.trim().split("\n").forEach(a=>{idiomsList.push(a.split(","))}),idioms=idiomsList[3],generateGame(),strictSolution();solvedPanel.firstChild;)solvedPanel.removeChild(solvedPanel.firstChild);showAnswer()}),document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("startButton").onclick=startGame,document.getElementById("answerButton").onclick=showAnswer,document.getElementById("hintButton").onclick=showHint,document.getElementById("levelOption").addEventListener("change",b=>{const a=b.target;idioms=idiomsList[a.selectedIndex],words=wordsList[a.selectedIndex],startGame()})