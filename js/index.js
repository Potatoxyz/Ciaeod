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

        //console.log(currentNum);
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
        {id:1,title:'Ciaoed 48 Stück Glitzer Gelschreiber Gelstifte Multicolor Gel Stift Set für Erwachsene Färbungsbücher Zeichnung Malbücher',link:'https://www.amazon.de/dp/B06W9JFM65',des:['Sicher und einfach zu bedienen, und professionell ：Ciaoed stellen Sicherheit in den Vordergrund, insbesondere wenn Kinder beteiligt sind.Wissenschaftliche tintenformeln, Standard-Produktionsprozess, damit die Gel-Stifte sicher für Kinder und Sie selbst sind, sie sind sowohl ungiftig als auch säurefrei..','Ciaoed Forschungs- und Entwicklungs：Teams haben die am häufigsten verwendeten 48 Farben für dieses Set ausgewählt, inkl. 4 verschiedenen Ausführungen an Tinte: Metallic, Glitzer, Neon, waterchalk. Dieses Gel-Stift-Set hilft Ihnen dabei, Ihrer Kreativität besser Ausdruck zu verleihen. Ihrer Kreativität wird durch nichts Eingeschränkt.']},

        {id:2,title:'Ciaoed Metallic Marker Pens, Permanent Marker, Satz von 12 Farben für Kartenherstellung DIY Fotoalbum Gebrauch auf irgendeiner Oberfläche-Papier Glas Kunststoff Keramik',link:'https://www.amazon.de/dp/B074V59VBD',des:['Metallic Marker Pens, Permanent Marker, Satz von 12 Farben metallischen Stift Marker für Kartenherstellung DIY Fotoalbum Gebrauch auf irgendeiner Oberfläche-Papier Glas Kunststoff Keramik.','12 Farben. Gemälde, Unterschrift, Graffiti, DIY, handbemalte multifunktionale Nutzung, kreativ unbegrenzt.','Tinte auf Wasserbasis , umweltfreundliche ungiftig, eine Vielzahl von coolen Farben zeigen. Die Verwendung hochwertiger Faserspitze , moderate Härte, glattes Schreiben.']},

        {id:3,title:'Ciaoed Kühltasche Thermo Picknick Lunchtasche Wasserdicht Transport Reise Tasche.',link:'https://www.amazon.de/dp/B01IVLBLEI',des:['100% Brandneu und hochwertige Qualität.','Material: Oxford-Gewebe + Aluminium Isolation.','Größe (LxBxH): Appox 32 x 12 x mittelgroßes Blech.']},

        {id:4,title:'Ciaoed Schuhtasche wasserdicht Trennen Sie schmutzige Schuhe und saubere Kleidung in Ihrer Reisetasche Koffer oder Handgepäck schwarz Paket von 2',link:'https://www.amazon.de/dp/B06XCBNGPQ',des:['Advanced  W-Beweis Material, wasserdicht, halten Sie Ihre Schuhe trocken.','Atmungsaktives Material, Entladungsgeruch.','Transparente Plastik in einer Seite, bequem zu wählen Schuhe.']},

        {id:5,title:'Ciaoed PVC Schuhe Tasche Wasserdichte Reise Schuhbeutel Breathable Schuhaufbewahrung Fall Blau 2 St¨¹ck',link:'https://www.amazon.de/dp/B06XCF5FNN',des:['Advanced W-Beweis Material, wasserdicht, halten Sie Ihre Schuhe trocken.','Atmungsaktives Material, Entladungsgeruch.','Transparente Plastik in einer Seite, bequem zu wählen Schuhe.','Doppelter Reißverschlussentwurf, der bequem ist, die Schuhe herauszunehmen.']},

        {id:6,title:'Ciaoed Birdcage Stil Hollow Pattern Iron Candlestick Creative Carve Muster Kunst Kerze Halter für Home Decoration Party Hochzeit (A)',link:'https://www.amazon.de/dp/B071R2TZ55',des:['Paket umfassen: 1pcs Kerzenständer, nicht die Kerze enthalten.','Weiße Farbe, 8x14cm, Geeignet für Möbel, Villa Modell, Hotel Clubs, Hochzeiten, Schaufenster.','Metall-Material, europäischen Stil und hohlen Muster Design, schön und zart, können Sie Ihr Haus hervorragend und charmant. Wählen Sie Spielzeuge, die diese Verhaltensweisen inspirieren.']},

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
        //console.log(obj);
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