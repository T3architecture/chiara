(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","backgroundColorDirection":"vertical","gap":10,"definitions": [{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77"},{"class":"PanoramaPlayListItem","camera":"this.panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4"},{"class":"PanoramaPlayListItem","camera":"this.panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"data":{"name":"IconButton HS "},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","paddingLeft":0,"transparencyActive":true,"verticalAlign":"middle","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","borderRadius":0,"maxHeight":60,"class":"IconButton","maxWidth":60,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"data":{"name":"button menu sup"},"gap":10,"width":110,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"visible","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"middle","bottom":"4.6%","paddingRight":0,"height":110,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"horizontal","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"scrollBarColor":"#000000","class":"Container","creationPolicy":"inAdvance","borderSize":0,"right":"0%","minWidth":1,"shadow":false,"minHeight":1},{"thumbnailUrl":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4","yaw":-11.73,"select":"this.overlay_68F7A33A_791B_3DAC_41DA_3FB405D10927.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_68F7A33A_791B_3DAC_41DA_3FB405D10927"},"distance":3.25,"class":"AdjacentPanorama","backwardYaw":-30.24}],"hfovMin":"120%","overlays":["this.overlay_68F7A33A_791B_3DAC_41DA_3FB405D10927"],"pitch":0,"id":"panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77","label":trans('panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"Cuisine1"},"frames":[{"stereoCube":{"levels":[{"width":36864,"rowCount":6,"url":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_0/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":72},{"width":18432,"rowCount":3,"url":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_0/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":12288,"rowCount":2,"url":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_0/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":1,"url":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_0/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":12},{"width":24576,"rowCount":1,"url":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_0/vr2gen/{column}.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":12}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_t.jpg"}],"partial":false,"vfov":180},{"thumbnailUrl":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14","yaw":2.53,"select":"this.overlay_680D977E_791D_25A4_41C9_DD0EF61A8769.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_680D977E_791D_25A4_41C9_DD0EF61A8769"},"distance":4.09,"class":"AdjacentPanorama"},{"panorama":"this.panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77","yaw":-30.24,"select":"this.overlay_6B323435_791A_FBA4_41DB_CC6FA8FF081C.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6B323435_791A_FBA4_41DB_CC6FA8FF081C"},"distance":100,"class":"AdjacentPanorama","backwardYaw":-11.73}],"hfovMin":"120%","overlays":["this.overlay_680D977E_791D_25A4_41C9_DD0EF61A8769","this.overlay_6B323435_791A_FBA4_41DB_CC6FA8FF081C"],"pitch":0,"id":"panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4","label":trans('panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"Salon"},"frames":[{"stereoCube":{"levels":[{"width":36864,"rowCount":6,"url":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_0/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":72},{"width":18432,"rowCount":3,"url":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_0/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":12288,"rowCount":2,"url":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_0/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":1,"url":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_0/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":12},{"width":24576,"rowCount":1,"url":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_0/vr2gen/{column}.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":12}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_t.jpg"}],"partial":false,"vfov":180},{"data":{"name":"image button menu"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","paddingLeft":0,"transparencyActive":true,"verticalAlign":"middle","top":"6.78%","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"maxWidth":60,"class":"IconButton","borderRadius":0,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60,"right":"0.6%"},{"minWidth":20,"itemLabelFontStyle":"normal","itemLabelTextDecoration":"none","left":"0.01%","gap":10,"rollOverItemLabelFontWeight":"normal","itemThumbnailShadowSpread":1,"backgroundOpacity":0,"itemThumbnailShadowVerticalLength":3,"paddingTop":10,"itemLabelFontColor":"#FFFFFF","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemThumbnailShadowBlurRadius":8,"horizontalAlign":"left","itemLabelPosition":"bottom","playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","paddingBottom":10,"propagateClick":false,"data":{"name":"ThumbnailList35762"},"itemMode":"normal","itemVerticalAlign":"middle","itemThumbnailWidth":75,"paddingLeft":20,"itemBackgroundColor":[],"scrollBarMargin":2,"itemThumbnailShadow":true,"itemHorizontalAlign":"center","verticalAlign":"top","bottom":"0.02%","paddingRight":20,"itemPaddingLeft":3,"itemOpacity":1,"toolTipHorizontalAlign":"center","itemLabelFontWeight":"normal","itemBorderRadius":0,"height":135.02,"scrollBarOpacity":0.5,"itemPaddingTop":3,"itemPaddingRight":3,"itemLabelHorizontalAlign":"center","itemLabelFontSize":14,"itemBackgroundOpacity":0,"layout":"horizontal","itemLabelFontFamily":"Arial","itemThumbnailScaleMode":"fit_outside","scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":5,"rollOverItemBackgroundOpacity":0,"selectedItemLabelFontColor":"#FFCC00","itemBackgroundColorDirection":"vertical","scrollBarColor":"#FFFFFF","itemThumbnailShadowHorizontalLength":3,"class":"ThumbnailList","itemThumbnailBorderRadius":50,"itemBackgroundColorRatios":[],"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemThumbnailShadowColor":"#000000","borderSize":0,"right":"0.12%","itemThumbnailHeight":75,"itemLabelGap":9,"itemPaddingBottom":3,"shadow":false,"minHeight":20,"itemThumbnailShadowOpacity":0.54},{"class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77","class":"PanoramaPlayListItem","camera":"this.panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_camera","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4","class":"PanoramaPlayListItem","camera":"this.panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_camera","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_camera","media":"this.panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"data":{"name":"IconButton FB"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"transparencyActive":true,"paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"height":60,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","borderRadius":0,"maxHeight":60,"class":"IconButton","maxWidth":60,"mode":"push","borderSize":0,"minWidth":60,"shadow":false,"minHeight":1},{"data":{"name":"Image4995"},"width":80,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"paddingLeft":0,"top":21.17,"verticalAlign":"top","paddingRight":0,"height":85,"toolTipHorizontalAlign":"center","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"class":"Image","borderRadius":0,"left":26.3,"borderSize":0,"minWidth":80,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"fontWeight":"bold","data":{"name":"Label28174"},"textDecoration":"none","width":280,"backgroundOpacity":0,"paddingTop":0,"id":"label4056","fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"verticalAlign":"middle","top":17,"paddingRight":0,"fontColor":"#FFFFFF","height":50,"toolTipHorizontalAlign":"center","text":trans('label4056.text'),"fontSize":30,"borderRadius":0,"maxHeight":50,"class":"Label","maxWidth":100,"fontStyle":"normal","borderSize":0,"minWidth":100,"shadow":false,"minHeight":50,"right":"1.45%"},{"data":{"name":"-button set"},"gap":3,"width":85,"visible":false,"backgroundOpacity":0,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"14%","paddingRight":0,"height":320,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"vertical","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":320,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":320,"right":"0%"},{"data":{"name":"IconButton FULLSCREEN"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","paddingLeft":0,"transparencyActive":true,"verticalAlign":"middle","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","borderRadius":0,"maxHeight":60,"class":"IconButton","maxWidth":60,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"data":{"name":"IconButton VR"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"transparencyActive":true,"paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"height":60,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","borderRadius":0,"maxHeight":60,"class":"IconButton","maxWidth":60,"mode":"push","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"right":0,"toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesTextShadowHorizontalLength":1,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowVerticalLength":0,"toolTipBorderRadius":3,"toolTipShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0,1],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderColor":"#AAAAAA","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#999999","progressBackgroundColorRatios":[0,1],"playbackBarBorderSize":2,"toolTipFontSize":12,"subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#666666","progressRight":10,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeight":20,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#222222","#444444"],"progressBorderColor":"#AAAAAA","doubleClickAction":"toggle_fullscreen","class":"ViewerArea","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderRadius":4,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":1,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"progressHeight":20,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"toolTipFontStyle":"normal","progressBorderSize":2,"paddingTop":0,"progressBarBorderRadius":4,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":30,"playbackBarHeadBackgroundColorRatios":[0,1],"top":0,"surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":1500,"subtitlesBorderSize":0,"bottom":0,"subtitlesBottom":50,"toolTipFontWeight":"normal","toolTipShadowColor":"#333333","subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","progressLeft":10,"playbackBarProgressBorderRadius":0,"subtitlesPaddingRight":5,"toolTipBorderSize":1,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":0.5,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":10,"left":0,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_74E6B467_7916_DBA4_41C7_0F7205DD19E4_camera"},{"viewerArea":"this.MainViewer","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","displayPlaybackBar":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","gyroscopeEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"thumbnailUrl":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_t.jpg","vfov":180,"hfovMax":130,"class":"Panorama","label":trans('panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14.label'),"hfov":360,"hfovMin":"120%","frames":[{"stereoCube":{"levels":[{"width":36864,"rowCount":6,"url":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_0/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":72},{"width":18432,"rowCount":3,"url":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_0/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":12288,"rowCount":2,"url":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_0/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24},{"width":6144,"rowCount":1,"url":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_0/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":12},{"width":24576,"rowCount":1,"url":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_0/vr2gen/{column}.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":12}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"Transition"},"id":"panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14"},{"data":{"name":"IconButton GYRO"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","paddingLeft":0,"transparencyActive":true,"verticalAlign":"middle","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","borderRadius":0,"maxHeight":60,"class":"IconButton","maxWidth":60,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"data":{"name":"--SETTINGS"},"gap":10,"width":85,"backgroundOpacity":0,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingTop":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"17.26%","paddingRight":0,"height":430,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":430,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":430,"right":"1.22%"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_74E17293_7916_FF7C_41DB_537D6B7ECE14_camera"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_776A06AE_7915_24A4_41D1_F58EDAF3FE77_camera"},{"areas":["this.HotspotPanoramaOverlayArea_68F3033D_791B_3DA4_41DB_EBE078B23537"],"maps":[],"items":[{"distance":100,"yaw":-11.73,"scaleMode":"fit_inside","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","hfov":6,"data":{"label":"Arrow 03b"},"roll":-35.85,"verticalAlign":"middle","image":"this.AnimatedImageResource_6D04CA53_790B_2FFC_41DA_B1BCCA9DF2D7","pitch":-27.59,"vfov":6}],"data":{"label":"Arrow 03b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_68F7A33A_791B_3DAC_41DA_3FB405D10927"},{"areas":["this.HotspotPanoramaOverlayArea_685237B4_791D_24A4_41BB_638CCD469BEB"],"maps":[],"items":[{"distance":100,"yaw":2.53,"scaleMode":"fit_inside","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","hfov":6,"data":{"label":"Arrow 03b"},"roll":2.01,"verticalAlign":"middle","image":"this.AnimatedImageResource_6D050A54_790B_2FE4_41B5_67FA977283AE","pitch":-22.54,"vfov":6}],"data":{"label":"Arrow 03b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_680D977E_791D_25A4_41C9_DD0EF61A8769"},{"areas":["this.HotspotPanoramaOverlayArea_6B47A445_791A_FBE4_41D2_A3CA281808CE"],"maps":[],"items":[{"distance":100,"yaw":-30.24,"vfov":6,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","hfov":6,"data":{"label":"Arrow 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_6D057A54_790B_2FE4_41D8_285A048D980E","pitch":-0.39,"scaleMode":"fit_inside"}],"data":{"label":"Arrow 03b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_6B323435_791A_FBA4_41DB_CC6FA8FF081C"},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_68F3033D_791B_3DA4_41DB_EBE078B23537"},{"rowCount":6,"levels":[{"height":480,"width":925,"class":"ImageResourceLevel","url":"media/res_68C5ABB3_791F_6CBC_41D3_EDE4E47FAB83_0.png"}],"colCount":5,"id":"AnimatedImageResource_6D04CA53_790B_2FFC_41DA_B1BCCA9DF2D7","class":"AnimatedImageResource","frameDuration":41,"frameCount":30},{"click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_685237B4_791D_24A4_41BB_638CCD469BEB"},{"rowCount":6,"levels":[{"height":480,"width":925,"class":"ImageResourceLevel","url":"media/res_68C5ABB3_791F_6CBC_41D3_EDE4E47FAB83_0.png"}],"colCount":5,"id":"AnimatedImageResource_6D050A54_790B_2FE4_41B5_67FA977283AE","class":"AnimatedImageResource","frameDuration":41,"frameCount":30},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6B47A445_791A_FBE4_41D2_A3CA281808CE"},{"rowCount":6,"levels":[{"height":480,"width":925,"class":"ImageResourceLevel","url":"media/res_68C5ABB3_791F_6CBC_41D3_EDE4E47FAB83_0.png"}],"colCount":5,"id":"AnimatedImageResource_6D057A54_790B_2FE4_41D8_285A048D980E","class":"AnimatedImageResource","frameDuration":41,"frameCount":30}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","defaultVRPointer":"gaze","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#000000"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","class":"Player","scripts":{"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getKey":TDV.Tour.Script.getKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"quizStart":TDV.Tour.Script.quizStart,"clone":TDV.Tour.Script.clone,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"init":TDV.Tour.Script.init,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"getMainViewer":TDV.Tour.Script.getMainViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"playAudioList":TDV.Tour.Script.playAudioList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"registerKey":TDV.Tour.Script.registerKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoBack":TDV.Tour.Script.historyGoBack,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPixels":TDV.Tour.Script.getPixels,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"shareSocial":TDV.Tour.Script.shareSocial,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlays":TDV.Tour.Script.getOverlays,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setLocale":TDV.Tour.Script.setLocale,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"initQuiz":TDV.Tour.Script.initQuiz,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"downloadFile":TDV.Tour.Script.downloadFile,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"initAnalytics":TDV.Tour.Script.initAnalytics},"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","downloadEnabled":false,"creationPolicy":"inAdvance","borderSize":0,"data":{"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"initialScale":0.65,"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1}},"minWidth":20,"shadow":false,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Wed Jul 3 2024