$(document).ready(function() {
    $("#steps-menu a").click(function(event) {
        // Replaces main content
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        switch((stepClass-0)){
            case 1:
            $("#title").text("全网监测");
            $("#content1").text("通过对8000+主流网络媒体进行检测，其中包括各大新闻门户网站、论坛、贴吧、博客、视频、新浪微博以及微信平台文章等，对其进行信息采集及汇总整理，获取一切您想要的信息。");
            $("#content2").text("abc");
            break;
        case 2:
            $("#title").text("情感判断");
            $("#content1").text("通过探宝中文语义分析技术，对公众面对特定品牌、网络事件、宣传活动、名人等的正面、负面及中性的情绪进行分析，让您通过口碑趋势洞察消费者、网民的情感态度，进一步作出营销决策。");
            $("#content2").text("sdf");
            break; 
        case 3:
            $("#title").text("热点分析");
            $("#content1").text("采用文章权重分析法，通过自动对给定的海量文本、资讯进行话题聚类，将语义上相似的内容归为一类，获取最新的热门话题，让热点一目了然。");
            $("#content2").text("rtygddgf");
            break;
        case 4:
            $("#title").text("监测报告");
            $("#content1").text("用户自定义报告周期及模板，通过可视化图表将监测数据进行汇报，选择不同的格式进行导出，为工作汇报提供极大的便利。");
            $("#content2").text("rfter");
            break; 
        case 5:
            $("#title").text("危机预警");
            $("#content1").text("从全网快速真确地发现负面舆论信息，及时反馈给用户，针对危机，第一时间内启动危机公关预案。");
            $("#content2").text("sdfxdsfsdfdsf");
            break;  
        default:
            $("#title").text("放假通知");
            $("#content1").text("2016年2月5日－14日春节假期期间，客服全面暂停服务，您有神马问题都不要着急，请耐心过好您的假期，待到放假结束后第一时间联系客服...");
            $("#content2").text("祝您新春愉快，大吉大利");
            break; 
          }
        currentNum=step.substr(6,1)-0+1;
        displayProductDetai(stepClass);
    });


    //slideshow style interval
    var autoSwap = setInterval( swap,5000);
    var currentNum = 2;
    //pause slideshow and reinstantiate on mouseout
    $('#read-more a, #steps-menu a').hover(
      function () {
        clearInterval(autoSwap);
    },
      function () {
       autoSwap = setInterval( swap,5000);
    });

    //swap images function
    function swap(action) {
      $("#bbp").fadeOut(100);

        console.log(currentNum);
        displayProductDetai(currentNum);
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().addClass("is-active");
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().siblings().removeClass("is-active");
        var step = $("#steps-menu li a:eq("+ (currentNum-1) +")").attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);

        switch(currentNum){
            case 1:
            $("#title").text("全网监测");
            $("#content1").text("通过对8000+主流网络媒体进行检测，其中包括各大新闻门户网站、论坛、贴吧、博客、视频、新浪微博以及微信平台文章等，对其进行信息采集及汇总整理，获取一切您想要的信息。");
            $("#content2").text("abc");
            break;
        case 2:
            $("#title").text("情感判断");
            $("#content1").text("通过探宝中文语义分析技术，对公众面对特定品牌、网络事件、宣传活动、名人等的正面、负面及中性的情绪进行分析，让您通过口碑趋势洞察消费者、网民的情感态度，进一步作出营销决策。");
            $("#content2").text("sdf");
            break; 
        case 3:
            $("#title").text("热点分析");
            $("#content1").text("采用文章权重分析法，通过自动对给定的海量文本、资讯进行话题聚类，将语义上相似的内容归为一类，获取最新的热门话题，让热点一目了然。");
            $("#content2").text("rtygddgf");
            break;
        case 4:
            $("#title").text("监测报告");
            $("#content1").text("用户自定义报告周期及模板，通过可视化图表将监测数据进行汇报，选择不同的格式进行导出，为工作汇报提供极大的便利。");
            $("#content2").text("rfter");
            break; 
        case 5:
            $("#title").text("危机预警");
            $("#content1").text("从全网快速真确地发现负面舆论信息，及时反馈给用户，针对危机，第一时间内启动危机公关预案。");
            $("#content2").text("sdfxdsfsdfdsf");
            break;  
        default:
            $("#title").text("放假通知");
            $("#content1").text("2016年2月5日－14日春节假期期间，客服全面暂停服务，您有神马问题都不要着急，请耐心过好您的假期，待到放假结束后第一时间联系客服...");
            $("#content2").text("祝您新春愉快，大吉大利");
            break; 
        }


        $("#bbp").fadeIn(800);

      
        currentNum+=1;
        if(currentNum==7) {
            currentNum=1;
        }

       
    }


    const productList=[
        {id:1,title:'Wskderliner Hocker Klappbar Falthocker Camping Faltbar Klein Stuhl Folding Stool Angeln Jagd Tragbar Segeltuch mit 3 Bügeleisen Beine(blau)',link:'https://www.amazon.de/dp/B071K5GYK5',des:['1 Stück Faltbar Camping Hocker, erweitern Größe ist 22 x 22 x 31 cm (L x B x H), Faltgröße ist 35 cm hoch, leicht zu transportieren, den Platz zu sparen.','Das Metall Stativ des falthocker camping ca. 2,0 cm, max. Lastgewicht 100kg, hohl, das Klapphocker Gewicht ist 310g, leicht, sehr tragbar.','Geeignet für: Picknick, Angeln, Camping, Wandern, Sandstrand, Klettern, Sonnenbaden, Gartenruhe, Park, Rasen und andere Outdoor Aktivitäten.']},

        {id:2,title:'Wskderliner Hocker Klappbar Falthocker Camping Faltbar Klein Stuhl Folding Stool Angeln Jagd Tragbar Segeltuch mit 3 Bügeleisen Beine(blau)',link:'https://www.amazon.de/dp/B072KVK3YY',des:['1 Stück Faltbar Camping Hocker, erweitern Größe ist 22 x 22 x 31 cm (L x B x H), Faltgröße ist 35 cm hoch, leicht zu transportieren, den Platz zu sparen.','Das Metall Stativ des falthocker camping ca. 2,0 cm, max. Lastgewicht 100kg, hohl, das Klapphocker Gewicht ist 310g, leicht, sehr tragbar.','Material: Eisen Beine und Leinwand, ist die Leinwand stark und langlebig, schwer zu beschädigen.Die Oberfläche der Beine haben eine Schicht von Farbe, nicht leicht zu rosten, aber nicht in Wasser eingeweicht.','Material: Eisen Beine und Leinwand, ist die Leinwand stark und langlebig, schwer zu beschädigen.Die Oberfläche der Beine haben eine Schicht von Farbe, nicht leicht zu rosten, aber nicht in Wasser eingeweicht.']},

        {id:3,title:'Wskderliner Tischklammern Edelstahl Tischdecke Clips Tischdeckenklammer Tischdeckenklammern Metall für Gartentisch Silber 6 x 5,3 cm Packung von 20',link:'https://www.amazon.de/dp/B073PZS3RL',des:['Größe: 6 x 5,3 x 1,2 cm, 0,5 mm dick, kleines Volumen, besetzen ein wenig von der Tafelfläche, natürlicher, wie ein Teil des Tisches.','Material: Diese tischklammern edelstahl sind aus Edelstahl gefertigt, stark, langlebig, schwer zu rosten, können Sie eine lange Zeit verwenden.','Anwendung: Garten, Haus, Outdoor, Party, Hochzeit, Picknicks, in diesen Szenen können diese Tischdeckenclips die Tischdecke festklemmen.']},

        {id:4,title:'Wskderliner Kescher Kinder Ausziehbar Teleskop Stabil Schmetterling Insekt Klein Angeln Fangen 38-85cm Packung von 2(grün und blau)',link:'https://www.amazon.de/dp/B072XDXPC3',des:['Größe: schrumpfen Größe ist 38 cm (L), verlängern Größe ist 85 cm (L), der Netzring Durchmesser ist 20 cm, seine Tiefe ist 20cm.','Anwendung: Für Kinder oder Erwachsene fangen Schmetterlinge, Bugs, Libelle oder andere Insekten, auch einige kleine Fische, dann können sie ihre große Natur genießen.','Material: Edelstahl ausziehbarer Stent und Nylon Netz, stark, langlebig und leicht, bequem für Kinder zu tragen.']},

        {id:5,title:'Wskderliner Kleiderbügel Clips Anti Rutsch Metall Verchromten für Hängende Hosen Socken Röcke Mäntel Pack von 10',link:'https://www.amazon.de/dp/B072BN67KP',des:['Packung mit 10 verstellbaren verchromten Metallclip Kleiderbügeln','Platz sparen: Mit den verstellbaren Clips sind diese Kleiderhaken einfach und kompakt und machen vollen Raum','Einstellbare Clips: Perfekt für hängende Hosen Socken Mäntel Röcke\n','Starke Krokodil Clips und Anti Rutsch Linien: um Kleidungsstücke fest zu fangen']},

        {id:6,title:'wskderliner Cat Rolling Kratzbaum Eingeschlossene Ball Scratch Spielzeug für Intelligenz Unterhaltung mit 3 Bälle Innen',link:'https://www.amazon.de/dp/B07BBPCFYL',des:['Material: überlegenes Sisal, ungiftig und geruchlos, sorgt dafür, dass Ihre Katze sicher spielt und beißt. Größe: 29 x 8 cm. Durchmesser: 6 cm.','Helfen Sie dabei, ein Katzengehirn und ein Sinnesorgan zu trainieren und zu trainieren, und vermeiden Sie das Auftreten von Depressionen, selbst wenn der Besitzer nicht anwesend ist.','Bestes Geschenk für Ihre schöne Katze: Katzen mögen die Fähigkeiten, die sie im Spiel gut können: Klettern, Laufen, Springen, Verstecken, Flattern. Wählen Sie Spielzeuge, die diese Verhaltensweisen inspirieren.']},

        {id:7,title:'Wskderliner Slalom Zapfen farbigen Sporting Rollerskaten Flor Hindernis 50 Stück',link:'https://www.amazon.de/dp/B072XJ2FH7',des:['Geeignet für: Roller Skaten, Dynamic, Teller, shuanglong Board, Drift, und andere Sport-Training.','Material: PE-Kunststoff, gute Lichtechtheit, strapazierfähig, weich, leicht, each One 11 g.','Größe: Durchmesser: 7 cm, Höhe: 8 cm, kleine Größe, bequem zu tragen.']},

        {id:8,title:'Wskderliner Tischnummern Hochzeit Holz Halter Vintage Hölzern Zahlen Deko Party Hotel Tabelle Dekoration 1 to 20',link:'https://www.amazon.de/dp/B071ZPXHF8',des:['20 Stücke Tischnummern Hochzeit Holz Halter, jede Holzzahl Inhaber auf einem Tisch, genug für Sie zu verwenden.','Geeignet für: Hochzeit, Wohltätigkeits-Gala, Weihnachtsfeier, Geburtstagsfeier, Taufe, Geschäftsempfang.','Es hat Basis, kann leicht auf die Gast-Tische gesetzt werden.Es ist bequem zu platzieren und zu empfangen.']},

    ];
    function displayProductDetai(id) {
        $('.card .des ul').empty();
        $('#buyLink').attr('href','#');
        var obj;
        for(var i=0;i<productList.length;i++){
            if(productList[i].id==id){
                obj=productList[i];
            }
        }
        console.log(obj);
        if(obj){
            $('.card .title').text(obj.title);
            obj.des.forEach(function (value,index) {
                $('<li>').text(value).appendTo($('.card .des ul'));
            });
            $('#buyLink').attr('href',obj.link);
        }
    }
    displayProductDetai(1);
});