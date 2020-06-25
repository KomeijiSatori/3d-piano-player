if ("undefined" === typeof MIDI) var MIDI = {};
(function() {
    var b = {},
        a = 0,
        c = function(c) {
            a++;
            var d = new Audio,
                k = c.split(";")[0];
            d.id = "audio";
            d.setAttribute("preload", "auto");
            d.setAttribute("audiobuffer", !0);
            d.addEventListener("error", function() {
                b[k] = !1;
                a--
            }, !1);
            d.addEventListener("canplaythrough", function() {
                b[k] = !0;
                a--
            }, !1);
            d.src = "data:" + c;
            document.body.appendChild(d)
        };
    MIDI.audioDetect = function(e) {
        if ("undefined" === typeof Audio) return e({});
        var d = new Audio;
        if ("undefined" === typeof d.canPlayType) return e(b);
        var k = d.canPlayType('audio/ogg; codecs="vorbis"'),
            k = "probably" === k || "maybe" === k,
            d = d.canPlayType("audio/mpeg"),
            d = "probably" === d || "maybe" === d;
        if (k || d) {
            k && c("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=");
            d && c("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
            var m = (new Date).getTime(),
                g = window.setInterval(function() {
                    var d = 5E3 < (new Date).getTime() - m;
                    if (!a || d) window.clearInterval(g), e(b)
                }, 1)
        } else e(b)
    }
})();
"undefined" === typeof MIDI && (MIDI = {});
"undefined" === typeof MIDI.Soundfont && (MIDI.Soundfont = {});
(function() {
    MIDI.loadPlugin = function(d) {
        "function" === typeof d && (d = {
            callback: d
        });
        var c = d.instruments || d.instrument || "acoustic_grand_piano";
        "object" !== typeof c && (c = [c]);
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            "number" === typeof f && (c[e] = MIDI.GeneralMIDI.byId[f])
        }
        MIDI.soundfontUrl = d.soundfontUrl || MIDI.soundfontUrl || "./soundfont/";
        MIDI.audioDetect(function(e) {
            var f = "",
                f = a[d.api] ? d.api : a[window.location.hash.substr(1)] ? window.location.hash.substr(1) : window.webkitAudioContext || window.AudioContext ? "webaudio" :
                window.Audio ? "audiotag" : "flash";
            if (b[f]) {
                var r = d.targetFormat ? d.targetFormat : e["audio/ogg"] ? "ogg" : "mp3";
                MIDI.lang = f;
                MIDI.supports = e;
                b[f](r, c, d)
            }
        })
    };
    var b = {
            webmidi: function(a, d, c) {
                MIDI.loader && MIDI.loader.message("Web MIDI API...");
                MIDI.WebMIDI.connect(c)
            },
            flash: function(a, d, c) {
                MIDI.loader && MIDI.loader.message("Flash API...");
                DOMLoader.script.add({
                    src: c.soundManagerUrl || "./inc/SoundManager2/script/soundmanager2.js",
                    verify: "SoundManager",
                    callback: function() {
                        MIDI.Flash.connect(d, c)
                    }
                })
            },
            audiotag: function(a,
                b, g) {
                MIDI.loader && MIDI.loader.message("HTML5 Audio API...");
                var f = d({
                    items: b,
                    getNext: function(d) {
                        DOMLoader.sendRequest({
                            url: MIDI.soundfontUrl + d + "-" + a + ".js",
                            onprogress: e,
                            onload: function(a) {
                                c(a.responseText);
                                MIDI.loader && MIDI.loader.update(null, "Downloading", 100);
                                f.getNext()
                            }
                        })
                    },
                    onComplete: function() {
                        MIDI.AudioTag.connect(g)
                    }
                })
            },
            webaudio: function(a, b, g) {
                MIDI.loader && MIDI.loader.message("Web Audio API...");
                var f = d({
                    items: b,
                    getNext: function(d) {
                        DOMLoader.sendRequest({
                            url: MIDI.soundfontUrl + d + "-" + a + ".js",
                            onprogress: e,
                            onload: function(a) {
                                c(a.responseText);
                                MIDI.loader && MIDI.loader.update(null, "Downloading...", 100);
                                f.getNext()
                            }
                        })
                    },
                    onComplete: function() {
                        MIDI.WebAudio.connect(g)
                    }
                })
            }
        },
        a = {
            webmidi: !0,
            webaudio: !0,
            audiotag: !0,
            flash: !0
        },
        c = function(a) {
            var d = document.createElement("script");
            d.language = "javascript";
            d.type = "text/javascript";
            d.text = a;
            document.body.appendChild(d)
        },
        e = function(a) {
            this.totalSize || (this.getResponseHeader("Content-Length-Raw") ? this.totalSize = parseInt(this.getResponseHeader("Content-Length-Raw")) :
                this.totalSize = a.total);
            a = this.totalSize ? Math.round(100 * (a.loaded / this.totalSize)) : "";
            MIDI.loader && MIDI.loader.update(null, "Downloading...", a)
        },
        d = function(a) {
            var d = {
                    queue: []
                },
                c;
            for (c in a.items) d.queue.push(a.items[c]);
            d.getNext = function() {
                if (!d.queue.length) return a.onComplete();
                a.getNext(d.queue.shift())
            };
            setTimeout(d.getNext, 1);
            return d
        }
})();
"undefined" === typeof MIDI && (MIDI = {});
"undefined" === typeof MIDI.Player && (MIDI.Player = {});
(function() {
    var b = MIDI.Player;
    b.callback = void 0;
    b.currentTime = 0;
    b.endTime = 0;
    b.restart = 0;
    b.playing = !1;
    b.timeWarp = 1;
    b.start = b.resume = function() {
        -1 > b.currentTime && (b.currentTime = -1);
        l(b.currentTime)
    };
    b.pause = function() {
        var a = b.restart;
        n();
        b.restart = a
    };
    b.stop = function() {
        n();
        b.restart = 0;
        b.currentTime = 0
    };
    b.addListener = function(a) {
        k = a
    };
    b.removeListener = function() {
        k = void 0
    };
    b.clearAnimation = function() {
        b.interval && window.clearInterval(b.interval)
    };
    b.setAnimation = function(a) {
        var c = "function" === typeof a ? a : a.callback;
        a = a.interval || 30;
        var e = 0,
            k = 0,
            f = 0;
        b.clearAnimation();
        b.interval = window.setInterval(function() {
            if (0 !== b.endTime) {
                b.playing ? (e = f === b.currentTime ? k - (new Date).getTime() : 0, e = 0 === b.currentTime ? 0 : b.currentTime - e, f !== b.currentTime && (k = (new Date).getTime(), f = b.currentTime)) : e = b.currentTime;
                var a = e / 1E3,
                    l = a / 60,
                    a = 60 * l + (a - 60 * l),
                    l = b.endTime / 1E3; - 1 > l - a || c({
                    now: a,
                    end: l,
                    events: d
                })
            }
        }, a)
    };
    b.loadMidiFile = function() {
        b.replayer = new Replayer(MidiFile(b.currentData), b.timeWarp);
        b.data = b.replayer.getData();
        b.endTime = f()
    };
    b.loadFile = function(a, d) {
        b.stop();
        if (-1 !== a.indexOf("base64,")) {
            var c = window.atob(a.split(",")[1]);
            b.currentData = c;
            b.loadMidiFile();
            d && d(c)
        } else c = new XMLHttpRequest, c.open("GET", a), c.overrideMimeType("text/plain; charset=x-user-defined"), c.onreadystatechange = function() {
            if (4 === this.readyState && 200 === this.status) {
                for (var a = this.responseText || "", c = [], e = a.length, k = String.fromCharCode, f = 0; f < e; f++) c[f] = k(a.charCodeAt(f) & 255);
                a = c.join("");
                b.currentData = a;
                b.loadMidiFile();
                d && d(a)
            }
        }, c.send()
    };
    var a = [],
        c,
        e = 0,
        d = {},
        k = void 0,
        m = function(a, e, f, n, g, m) {
            return window.setTimeout(function() {
                var n = {
                    channel: a,
                    note: e,
                    now: f,
                    end: b.endTime,
                    message: g,
                    velocity: m
                };
                128 === g ? delete d[e] : d[e] = n;
                k && k(n);
                b.currentTime = f;
                b.currentTime === c && c < b.endTime && l(c, !0)
            }, f - n)
        },
        g = function() {
            if ("WebAudioAPI" === MIDI.lang) return MIDI.Player.ctx;
            b.ctx || (b.ctx = {
                currentTime: 0
            });
            return b.ctx
        },
        f = function() {
            for (var a = b.data, d = a.length, c = 0.5, e = 0; e < d; e++) c += a[e][1];
            return c
        },
        l = function(d, k) {
            if (b.replayer) {
                k || ("undefined" === typeof d && (d = b.restart),
                    b.playing && n(), b.playing = !0, b.data = b.replayer.getData(), b.endTime = f());
                var l, s = 0,
                    t = 0,
                    v = b.data,
                    w = g(),
                    F = v.length;
                c = 0.5;
                e = w.currentTime;
                for (var B = 0; B < F; B++)
                    if (l = v[B], l = l[1] || 1E-11, c + l <= d) s = c += l;
                    else break;
                for (; B < F && 100 > t; B++) {
                    l = v[B];
                    c += l[1] || 1E-11;
                    d = c - s;
                    var x = l[0].event;
                    if ("channel" === x.type) {
                        var u = x.channel;
                        switch (x.subtype) {
                            case "noteOn":
                                if (MIDI.channels[u].mute) break;
                                l = x.noteNumber - (b.MIDIOffset || 0);
                                a.push({
                                    event: x,
                                    source: MIDI.noteOn(u, x.noteNumber, x.velocity, d / 1E3 + w.currentTime),
                                    interval: m(u, l, c,
                                        s, 144, x.velocity)
                                });
                                t++;
                                break;
                            case "noteOff":
                                if (MIDI.channels[u].mute) break;
                                l = x.noteNumber - (b.MIDIOffset || 0);
                                a.push({
                                    event: x,
                                    source: MIDI.noteOff(u, x.noteNumber, d / 1E3 + w.currentTime),
                                    interval: m(u, l, c, s, 128)
                                })
                        }
                    }
                }
            }
        },
        n = function() {
            var c = g();
            b.playing = !1;
            for (b.restart += 1E3 * (c.currentTime - e); a.length;) c = a.pop(), window.clearInterval(c.interval), c.source && ("number" === typeof c.source ? window.clearTimeout(c.source) : c.source.disconnect(0));
            for (var f in d) c = d[f], 144 === d[f].message && k && k({
                channel: c.channel,
                note: c.note,
                now: c.now,
                end: c.end,
                message: 128,
                velocity: c.velocity
            });
            d = {}
        }
})();
"undefined" === typeof MIDI && (MIDI = {});
(function() {
    var b = function(a) {
        MIDI.api = a.api;
        MIDI.setVolume = a.setVolume;
        MIDI.programChange = a.programChange;
        MIDI.noteOn = a.noteOn;
        MIDI.noteOff = a.noteOff;
        MIDI.chordOn = a.chordOn;
        MIDI.chordOff = a.chordOff;
        MIDI.stopAllNotes = a.stopAllNotes;
        MIDI.getInput = a.getInput;
        MIDI.getOutputs = a.getOutputs
    };
    (function() {
        var a = null,
            c = null,
            e = MIDI.WebMIDI = {
                api: "webmidi"
            };
        e.setVolume = function(a, b) {
            c.send([176 + a, 7, b])
        };
        e.programChange = function(a, b) {
            c.send([192 + a, b])
        };
        e.noteOn = function(a, b, e, g) {
            c.send([144 + a, b, e], 1E3 * g)
        };
        e.noteOff =
            function(a, b, e) {
                c.send([128 + a, b, 0], 1E3 * e)
            };
        e.chordOn = function(a, b, e, g) {
            for (var f = 0; f < b.length; f++) c.send([144 + a, b[f], e], 1E3 * g)
        };
        e.chordOff = function(a, b, e) {
            for (var g = 0; g < b.length; g++) c.send([128 + a, b[g], 0], 1E3 * e)
        };
        e.stopAllNotes = function() {
            for (var a = 0; 16 > a; a++) c.send([176 + a, 123, 0])
        };
        e.getInput = function() {
            return a.getInputs()
        };
        e.getOutputs = function() {
            return a.getOutputs()
        };
        e.connect = function(d) {
            b(e);
            navigator.requestMIDIAccess().then(function(b) {
                a = b;
                c = a.outputs()[0];
                d.callback && d.callback()
            }, function(a) {
                d.api =
                    window.AudioContext || window.webkitAudioContext ? "webaudio" : window.Audio ? "audiotag" : "flash";
                MIDI.loadPlugin(d)
            })
        }
    })();
    (window.AudioContext || window.webkitAudioContext) && function() {
        var a = window.AudioContext || window.webkitAudioContext,
            c = MIDI.WebAudio = {
                api: "webaudio"
            },
            e, d = {},
            k = 127,
            m = {},
            g = function(a, d, c, b, k) {
                var g = MIDI.GeneralMIDI.byName[a],
                    s = g.number,
                    t = d[c];
                if (!MIDI.Soundfont[a][t]) return k(a);
                var v = MIDI.Soundfont[a][t].split(",")[1],
                    v = Base64Binary.decodeArrayBuffer(v);
                e.decodeAudioData(v, function(e) {
                    for (var v =
                            t; 3 > v.length;) v += "&nbsp;";
                    "undefined" !== typeof MIDI.loader && MIDI.loader.update(null, g.instrument + "<br>Processing: " + (100 * (c / 87) >> 0) + "%<br>" + v);
                    e.id = t;
                    b[c] = e;
                    if (b.length === d.length) {
                        for (; b.length;)(e = b.pop()) && (m[s + "" + MIDI.keyToNote[e.id]] = e);
                        k(a)
                    }
                })
            };
        c.setVolume = function(a, d) {
            k = d
        };
        c.programChange = function(a, d) {
            MIDI.channels[a].instrument = d
        };
        c.noteOn = function(a, c, b, g) {
            if (MIDI.channels[a]) {
                var q = MIDI.channels[a].instrument;
                if (m[q + "" + c]) {
                    g < e.currentTime && (g += e.currentTime);
                    var p = e.createBufferSource();
                    d[a + "" + c] = p;
                    p.buffer = m[q + "" + c];
                    p.connect(e.destination);
                    p.gainNode = e.createGain ? e.createGain() : e.createGainNode();
                    a = 2 * b / 127 * (k / 127) - 1;
                    p.gainNode.connect(e.destination);
                    p.gainNode.gain.value = Math.max(-1, a);
                    p.connect(p.gainNode);
                    p.noteOn ? p.noteOn(g || 0) : p.start(g || 0);
                    return p
                }
            }
        };
        c.noteOff = function(a, c, b) {
            b = b || 0;
            b < e.currentTime && (b += e.currentTime);
            var k = d[a + "" + c];
            if (k) {
                if (k.gainNode) {
                    var g = k.gainNode.gain;
                    g.linearRampToValueAtTime(g.value, b);
                    g.linearRampToValueAtTime(-1, b + 0.2)
                }
                k.noteOff ? k.noteOff(b + 0.3) :
                    k.stop(b + 0.3);
                delete d[a + "" + c]
            }
        };
        c.chordOn = function(a, d, b, e) {
            for (var k = {}, g, m = 0, t = d.length; m < t; m++) k[g = d[m]] = c.noteOn(a, g, b, e);
            return k
        };
        c.chordOff = function(a, d, b) {
            for (var e = {}, k, g = 0, m = d.length; g < m; g++) e[k = d[g]] = c.noteOff(a, k, b);
            return e
        };
        c.stopAllNotes = function() {
            for (var a in d) {
                var c = 0;
                c < e.currentTime && (c += e.currentTime);
                d[a].gain.linearRampToValueAtTime(1, c);
                d[a].gain.linearRampToValueAtTime(0, c + 0.2);
                d[a].noteOff(c + 0.3);
                delete d[a]
            }
        };
        c.connect = function(d) {
            b(c);
            MIDI.Player.ctx = e = new a;
            var k = [],
                n = MIDI.keyToNote,
                r;
            for (r in n) k.push(r);
            var n = [],
                m = {};
            r = function(a) {
                delete m[a];
                for (var c in m) break;
                c || d.callback()
            };
            for (var p in MIDI.Soundfont) {
                m[p] = !0;
                for (var s = 0; s < k.length; s++) g(p, k, s, n, r)
            }
        }
    }();
    window.Audio && function() {
        for (var a = MIDI.AudioTag = {
                api: "audiotag"
            }, c = {}, e = 127, d = -1, k = [], m = [], g = {}, f = 0; 12 > f; f++) k[f] = new Audio;
        var l = function(a, c) {
                if (MIDI.channels[a]) {
                    var b = MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].id;
                    if (c = g[c]) {
                        var f = (d + 1) % k.length,
                            l = k[f];
                        m[f] = b + "" + c.id;
                        l.src = MIDI.Soundfont[b][c.id];
                        l.volume = e / 127;
                        l.play();
                        d = f
                    }
                }
            },
            n = function(a, c) {
                if (MIDI.channels[a]) {
                    var b = MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].id;
                    if (c = g[c])
                        for (var b = b + "" + c.id, e = 0; e < k.length; e++) {
                            var f = (e + d + 1) % k.length,
                                l = m[f];
                            if (l && l == b) {
                                k[f].pause();
                                m[f] = null;
                                break
                            }
                        }
                }
            };
        a.programChange = function(a, c) {
            MIDI.channels[a].instrument = c
        };
        a.setVolume = function(a, c) {
            e = c
        };
        a.noteOn = function(a, d, b, e) {
            var k = c[d];
            if (g[k]) {
                if (e) return window.setTimeout(function() {
                    l(a, k)
                }, 1E3 * e);
                l(a, k)
            }
        };
        a.noteOff = function(a, d, b) {
            var e = c[d];
            if (g[e]) {
                if (b) return setTimeout(function() {
                    n(a,
                        e)
                }, 1E3 * b);
                n(a, e)
            }
        };
        a.chordOn = function(a, d, b, e) {
            for (b = 0; b < d.length; b++) {
                var k = c[d[b]];
                if (g[k]) {
                    if (e) return window.setTimeout(function() {
                        l(a, k)
                    }, 1E3 * e);
                    l(a, k)
                }
            }
        };
        a.chordOff = function(a, d, b) {
            for (var e = 0; e < d.length; e++) {
                var k = c[d[e]];
                if (g[k]) {
                    if (b) return window.setTimeout(function() {
                        n(a, k)
                    }, 1E3 * b);
                    n(a, k)
                }
            }
        };
        a.stopAllNotes = function() {
            for (var a = 0, c = k.length; a < c; a++) k[a].pause()
        };
        a.connect = function(d) {
            for (var e in MIDI.keyToNote) c[MIDI.keyToNote[e]] = e, g[e] = {
                id: e
            };
            b(a);
            d.callback && d.callback()
        }
    }();
    (function() {
        var a =
            MIDI.Flash = {
                api: "flash"
            },
            c = {},
            e = {};
        a.programChange = function(a, c) {
            MIDI.channels[a].instrument = c
        };
        a.setVolume = function(a, c) {};
        a.noteOn = function(a, b, m, g) {
            if (MIDI.channels[a] && (b = MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].number + "" + c[b], e[b])) {
                if (g) return window.setTimeout(function() {
                    e[b].play({
                        volume: 2 * m
                    })
                }, 1E3 * g);
                e[b].play({
                    volume: 2 * m
                })
            }
        };
        a.noteOff = function(a, c, b) {};
        a.chordOn = function(a, b, m, g) {
            if (MIDI.channels[a]) {
                a = MIDI.GeneralMIDI.byId[MIDI.channels[a].instrument].number;
                for (var f in b) g =
                    a + "" + c[b[f]], e[g] && e[g].play({
                        volume: 2 * m
                    })
            }
        };
        a.chordOff = function(a, c, b) {};
        a.stopAllNotes = function() {};
        a.connect = function(d, k) {
            soundManager.flashVersion = 9;
            soundManager.useHTML5Audio = !0;
            soundManager.url = k.soundManagerSwfUrl || "../inc/SoundManager2/swf/";
            soundManager.useHighPerformance = !0;
            soundManager.wmode = "transparent";
            soundManager.flashPollingInterval = 1;
            soundManager.debugMode = !1;
            soundManager.onload = function() {
                for (var g = function(a, c, d) {
                        e[MIDI.GeneralMIDI.byName[a].number + "" + c] = soundManager.createSound({
                            id: c,
                            url: MIDI.soundfontUrl + a + "-mp3/" + c + ".mp3",
                            multiShot: !0,
                            autoLoad: !0,
                            onload: d
                        })
                    }, f = [], l = 88 * d.length, n = 0; n < d.length; n++)
                    for (var r = d[n], m = function() {
                            f.push(this.sID);
                            "undefined" !== typeof MIDI.loader && MIDI.loader.update(null, "Processing: " + this.sID)
                        }, p = 0; 88 > p; p++) g(r, c[p + 21], m);
                b(a);
                var s = window.setInterval(function() {
                    f.length < l || (window.clearInterval(s), k.callback && k.callback())
                }, 25)
            };
            soundManager.onerror = function() {};
            for (var m in MIDI.keyToNote) c[MIDI.keyToNote[m]] = m
        }
    })();
    MIDI.GeneralMIDI = function(a) {
        var c =
            function(a) {
                return a.replace(/[^a-z0-9 ]/gi, "").replace(/[ ]/g, "_").toLowerCase()
            },
            b = {
                byName: {},
                byId: {},
                byCategory: {}
            },
            d;
        for (d in a)
            for (var k = a[d], m = 0, g = k.length; m < g; m++) {
                var f = k[m];
                if (f) {
                    var l = parseInt(f.substr(0, f.indexOf(" ")), 10),
                        f = f.replace(l + " ", "");
                    b.byId[--l] = b.byName[c(f)] = b.byCategory[c(d)] = {
                        id: c(f),
                        instrument: f,
                        number: l,
                        category: d
                    }
                }
            }
        return b
    }({
        Piano: "1 Acoustic Grand Piano;2 Bright Acoustic Piano;3 Electric Grand Piano;4 Honky-tonk Piano;5 Electric Piano 1;6 Electric Piano 2;7 Harpsichord;8 Clavinet".split(";"),
        "Chromatic Percussion": "9 Celesta;10 Glockenspiel;11 Music Box;12 Vibraphone;13 Marimba;14 Xylophone;15 Tubular Bells;16 Dulcimer".split(";"),
        Organ: "17 Drawbar Organ;18 Percussive Organ;19 Rock Organ;20 Church Organ;21 Reed Organ;22 Accordion;23 Harmonica;24 Tango Accordion".split(";"),
        Guitar: "25 Acoustic Guitar (nylon);26 Acoustic Guitar (steel);27 Electric Guitar (jazz);28 Electric Guitar (clean);29 Electric Guitar (muted);30 Overdriven Guitar;31 Distortion Guitar;32 Guitar Harmonics".split(";"),
        Bass: "33 Acoustic Bass;34 Electric Bass (finger);35 Electric Bass (pick);36 Fretless Bass;37 Slap Bass 1;38 Slap Bass 2;39 Synth Bass 1;40 Synth Bass 2".split(";"),
        Strings: "41 Violin;42 Viola;43 Cello;44 Contrabass;45 Tremolo Strings;46 Pizzicato Strings;47 Orchestral Harp;48 Timpani".split(";"),
        Ensemble: "49 String Ensemble 1;50 String Ensemble 2;51 Synth Strings 1;52 Synth Strings 2;53 Choir Aahs;54 Voice Oohs;55 Synth Choir;56 Orchestra Hit".split(";"),
        Brass: "57 Trumpet;58 Trombone;59 Tuba;60 Muted Trumpet;61 French Horn;62 Brass Section;63 Synth Brass 1;64 Synth Brass 2".split(";"),
        Reed: "65 Soprano Sax;66 Alto Sax;67 Tenor Sax;68 Baritone Sax;69 Oboe;70 English Horn;71 Bassoon;72 Clarinet".split(";"),
        Pipe: "73 Piccolo;74 Flute;75 Recorder;76 Pan Flute;77 Blown Bottle;78 Shakuhachi;79 Whistle;80 Ocarina".split(";"),
        "Synth Lead": "81 Lead 1 (square);82 Lead 2 (sawtooth);83 Lead 3 (calliope);84 Lead 4 (chiff);85 Lead 5 (charang);86 Lead 6 (voice);87 Lead 7 (fifths);88 Lead 8 (bass + lead)".split(";"),
        "Synth Pad": "89 Pad 1 (new age);90 Pad 2 (warm);91 Pad 3 (polysynth);92 Pad 4 (choir);93 Pad 5 (bowed);94 Pad 6 (metallic);95 Pad 7 (halo);96 Pad 8 (sweep)".split(";"),
        "Synth Effects": "97 FX 1 (rain);98 FX 2 (soundtrack);99 FX 3 (crystal);100 FX 4 (atmosphere);101 FX 5 (brightness);102 FX 6 (goblins);103 FX 7 (echoes);104 FX 8 (sci-fi)".split(";"),
        Ethnic: "105 Sitar;106 Banjo;107 Shamisen;108 Koto;109 Kalimba;110 Bagpipe;111 Fiddle;112 Shanai".split(";"),
        Percussive: "113 Tinkle Bell;114 Agogo;115 Steel Drums;116 Woodblock;117 Taiko Drum;118 Melodic Tom;119 Synth Drum".split(";"),
        "Sound effects": "120 Reverse Cymbal;121 Guitar Fret Noise;122 Breath Noise;123 Seashore;124 Bird Tweet;125 Telephone Ring;126 Helicopter;127 Applause;128 Gunshot".split(";")
    });
    MIDI.channels = function() {
        for (var a = {}, c = 0; 16 > c; c++) a[c] = {
            instrument: 0,
            mute: !1,
            mono: !1,
            omni: !1,
            solo: !1
        };
        return a
    }();
    MIDI.pianoKeyOffset = 21;
    MIDI.keyToNote = {};
    MIDI.noteToKey = {};
    (function() {
        for (var a = "C Db D Eb E F Gb G Ab A Bb B".split(" "), c = 21; 108 >= c; c++) {
            var b = a[c % 12] + ((c - 12) / 12 >> 0);
            MIDI.keyToNote[b] = c;
            MIDI.noteToKey[c] = b
        }
    })()
})();

"undefined" === typeof DOMLoader && (DOMLoader = {});

if ("undefined" === typeof(new XMLHttpRequest).responseText) {
    var IEBinaryToArray_ByteStr_Script = "\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\n<script type='text/vbscript'>\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = \"\"\r\n   End If\r\nEnd Function\r\n\x3c/script>\r\n";
    document.write(IEBinaryToArray_ByteStr_Script);
    DOMLoader.sendRequest = function(b) {
        function a(a) {
            for (var b = {}, c = 0; 256 > c; c++)
                for (var m = 0; 256 > m; m++) b[String.fromCharCode(c + 256 * m)] = String.fromCharCode(c) + String.fromCharCode(m);
            c = IEBinaryToArray_ByteStr(a);
            a = IEBinaryToArray_ByteStr_Last(a);
            return c.replace(/[\s\S]/g, function(a) {
                return b[a]
            }) + a
        }
        var c = XMLHttpRequest();
        c.open("GET", b.url, !0);
        b.responseType && (c.responseType = b.responseType);
        b.onerror && (c.onerror = b.onerror);
        b.onprogress && (c.onprogress = b.onprogress);
        c.onreadystatechange = function(e) {
            if (4 === c.readyState && (200 === c.status ? c.responseText = a(c.responseBody) : c = !1, b.onload)) b.onload(c)
        };
        c.setRequestHeader("Accept-Charset", "x-user-defined");
        c.send(null);
        return c
    }
} else DOMLoader.sendRequest = function(b) {
    var a = new XMLHttpRequest;
    a.open(b.data ? "POST" : "GET", b.url, !0);
    a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined");
    b.data && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    b.responseType && (a.responseType = b.responseType);
    b.onerror && (a.onerror = b.onerror);
    b.onprogress && (a.onprogress = b.onprogress);
    a.onreadystatechange = function(c) {
        if (4 === a.readyState)
            if (200 !== a.status && 304 != a.status) {
                if (b.onerror) b.onerror(c, !1)
            } else if (b.onload) b.onload(a)
    };
    a.send(b.data);
    return a
};
if ("undefined" === typeof Event) var Event = {};
if ("undefined" === typeof eventjs) var eventjs = Event;
Event = function(b) {
    b.modifyEventListener = !0;
    b.modifySelectors = !0;
    b.add = function(a, b, d, e) {
        return c(a, b, d, e, "add")
    };
    b.remove = function(a, b, d, e) {
        return c(a, b, d, e, "remove")
    };
    b.stop = function(a) {
        a.stopPropagation && a.stopPropagation();
        a.cancelBubble = !0;
        a.bubble = 0
    };
    b.prevent = function(a) {
        a.preventDefault && a.preventDefault();
        a.returnValue = !1
    };
    b.cancel = function(a) {
        b.stop(a);
        b.prevent(a)
    };
    b.supports = function(a, b) {
        "string" === typeof a && (b = a, a = window);
        b = "on" + b;
        if (b in a) return !0;
        a.setAttribute || (a = document.createElement("div"));
        if (a.setAttribute && a.removeAttribute) {
            a.setAttribute(b, "");
            var d = "function" === typeof a[b];
            "undefined" !== typeof a[b] && (a[b] = null);
            a.removeAttribute(b);
            return d
        }
    };
    var a = function(b) {
            if (!b || "object" !== typeof b) return b;
            var d = new b.constructor,
                c;
            for (c in b) d[c] = b[c] && "object" === typeof b[c] ? a(b[c]) : b[c];
            return d
        },
        c = function(g, q, p, s, t, v) {
            s = s || {};
            if (g && q && p)
                if ("string" === typeof g && "ready" === q) var w = (new Date).getTime(),
                    F = s.timeout,
                    B = window.setInterval(function() {
                        (new Date).getTime() - w > F && window.clearInterval(B);
                        document.querySelector(g) && (window.clearInterval(B), setTimeout(p, 1))
                    }, s.interval || 1E3 / 60);
                else {
                    if ("string" === typeof g) {
                        g = document.querySelectorAll(g);
                        if (0 === g.length) return d("Missing target on listener!");
                        1 === g.length && (g = g[0])
                    }
                    var x = {};
                    if (0 < g.length && g !== window) {
                        for (var u = 0, y = g.length; u < y; u++)(v = c(g[u], q, p, a(s), t)) && (x[u] = v);
                        return e(x)
                    }
                    q.indexOf && -1 !== q.indexOf(" ") && (q = q.split(" "));
                    q.indexOf && -1 !== q.indexOf(",") && (q = q.split(","));
                    if ("string" !== typeof q) {
                        if ("number" === typeof q.length)
                            for (u = 0,
                                y = q.length; u < y; u++)(v = c(g, q[u], p, a(s), t)) && (x[q[u]] = v);
                        else
                            for (u in q)(v = "function" === typeof q[u] ? c(g, u, q[u], a(s), t) : c(g, u, q[u].listener, a(q[u]), t)) && (x[u] = v);
                        return e(x)
                    }
                    if ("function" !== typeof p) return d("Listener is not a function!");
                    x = s.useCapture || !1;
                    u = k(q) + f(g) + "." + f(p) + "." + (x ? 1 : 0);
                    if (b.Gesture && b.Gesture._gestureHandlers[q])
                        if ("remove" === t) {
                            if (!m[u]) return;
                            m[u].remove();
                            delete m[u]
                        } else {
                            if ("add" === t) {
                                if (m[u]) return m[u];
                                if (s.useCall && !b.modifyEventListener) {
                                    var z = p;
                                    p = function(a, b) {
                                        for (var d in b) a[d] =
                                            b[d];
                                        return z.call(g, a)
                                    }
                                }
                                s.gesture = q;
                                s.target = g;
                                s.listener = p;
                                s.fromOverwrite = v;
                                m[u] = b.proxy[q](s)
                            }
                        }
                    else if (q = k(q), "remove" === t) {
                        if (!m[u]) return;
                        g[n](q, p, x);
                        delete m[u]
                    } else if ("add" === t) {
                        if (m[u]) return m[u];
                        g[l](q, p, x);
                        m[u] = {
                            type: q,
                            target: g,
                            listener: p,
                            remove: function() {
                                b.remove(g, q, p, s)
                            }
                        }
                    }
                    return m[u]
                }
        },
        e = function(a) {
            return {
                remove: function() {
                    for (var b in a) a[b].remove()
                },
                add: function() {
                    for (var b in a) a[b].add()
                }
            }
        },
        d = function(a) {
            "undefined" !== typeof console && "undefined" !== typeof console.error && console.error(a)
        },
        k = function() {
            var a = {};
            return function(d) {
                b.pointerType || (window.navigator.msPointerEnabled ? (b.pointerType = "mspointer", a = {
                    mousedown: "MSPointerDown",
                    mousemove: "MSPointerMove",
                    mouseup: "MSPointerUp"
                }) : b.supports("touchstart") ? (b.pointerType = "touch", a = {
                    mousedown: "touchstart",
                    mouseup: "touchend",
                    mousemove: "touchmove"
                }) : b.pointerType = "mouse");
                a[d] && (d = a[d]);
                return document.addEventListener ? d : "on" + d
            }
        }(),
        m = {},
        g = 0,
        f = function(a) {
            if (a === window) return "#window";
            if (a === document) return "#document";
            if (!a) return d("Missing target on listener!");
            a.uniqueID || (a.uniqueID = "id" + g++);
            return a.uniqueID
        },
        l = document.addEventListener ? "addEventListener" : "attachEvent",
        n = document.removeEventListener ? "removeEventListener" : "detachEvent";
    b.createPointerEvent = function(a, d, c) {
        var e = d.gesture,
            f = d.target,
            g = a.changedTouches || b.proxy.getCoords(a);
        if (g.length) {
            var l = g[0];
            d.pointers = c ? [] : g;
            d.pageX = l.pageX;
            d.pageY = l.pageY;
            d.x = d.pageX;
            d.y = d.pageY
        }
        c = document.createEvent("Event");
        c.initEvent(e, !0, !0);
        c.originalEvent = a;
        for (var k in d) "target" !== k && (c[k] = d[k]);
        f.dispatchEvent(c)
    };
    b.modifyEventListener && window.HTMLElement && function() {
        var a = function(a) {
            var d = function(d) {
                var e = d + "EventListener",
                    f = a[e];
                a[e] = function(a, e, g) {
                    if (b.Gesture && b.Gesture._gestureHandlers[a]) {
                        var l = g;
                        "object" === typeof g ? l.useCall = !0 : l = {
                            useCall: !0,
                            useCapture: g
                        };
                        c(this, a, e, l, d, !0);
                        f.call(this, a, e, g)
                    } else f.call(this, k(a), e, g)
                }
            };
            d("add");
            d("remove")
        };
        navigator.userAgent.match(/Firefox/) ? (a(HTMLDivElement.prototype), a(HTMLCanvasElement.prototype)) : a(HTMLElement.prototype);
        a(document);
        a(window)
    }();
    b.modifySelectors &&
        function() {
            var a = NodeList.prototype;
            a.removeEventListener = function(a, b, d) {
                for (var c = 0, e = this.length; c < e; c++) this[c].removeEventListener(a, b, d)
            };
            a.addEventListener = function(a, b, d) {
                for (var c = 0, e = this.length; c < e; c++) this[c].addEventListener(a, b, d)
            }
        }();
    return b
}(Event);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.pointerSetup = function(a, b) {
        a.doc = a.target.ownerDocument || a.target;
        a.minFingers = a.minFingers || a.fingers || 1;
        a.maxFingers = a.maxFingers || a.fingers || Infinity;
        a.position = a.position || "relative";
        delete a.fingers;
        b = b || {};
        b.gesture = a.gesture;
        b.target = a.target;
        b.pointerType = Event.pointerType;
        Event.modifyEventListener && a.fromOverwrite && (a.listener = Event.createPointerEvent);
        var e = 0,
            d = 0 === b.gesture.indexOf("pointer") && Event.modifyEventListener ? "pointer" : "mouse";
        b.listener = a.listener;
        b.proxy =
            function(d) {
                b.defaultListener = a.listener;
                a.listener = d;
                d(a.event, b)
            };
        b.attach = function() {
            a.onPointerDown && Event.add(a.target, d + "down", a.onPointerDown);
            a.onPointerMove && Event.add(a.doc, d + "move", a.onPointerMove);
            a.onPointerUp && Event.add(a.doc, d + "up", a.onPointerUp)
        };
        b.remove = function() {
            a.onPointerDown && Event.remove(a.target, d + "down", a.onPointerDown);
            a.onPointerMove && Event.remove(a.doc, d + "move", a.onPointerMove);
            a.onPointerUp && Event.remove(a.doc, d + "up", a.onPointerUp);
            b.reset()
        };
        b.pause = function(b) {
            !a.onPointerMove ||
                b && !b.move || Event.remove(a.doc, d + "move", a.onPointerMove);
            !a.onPointerUp || b && !b.up || Event.remove(a.doc, d + "up", a.onPointerUp);
            e = a.fingers;
            a.fingers = 0
        };
        b.resume = function(b) {
            !a.onPointerMove || b && !b.move || Event.add(a.doc, d + "move", a.onPointerMove);
            !a.onPointerUp || b && !b.up || Event.add(a.doc, d + "up", a.onPointerUp);
            a.fingers = e
        };
        b.reset = function() {
            delete a.tracker;
            a.fingers = 0
        };
        return b
    };
    b.pointerStart = function(a, c, e) {
        var d = function(a, b) {
            var d = e.bbox,
                c = m[b] = {};
            switch (e.position) {
                case "absolute":
                    c.offsetX = 0;
                    c.offsetY =
                        0;
                    break;
                case "difference":
                    c.offsetX = a.pageX;
                    c.offsetY = a.pageY;
                    break;
                case "move":
                    c.offsetX = a.pageX - d.x1;
                    c.offsetY = a.pageY - d.y1;
                    break;
                default:
                    c.offsetX = d.x1, c.offsetY = d.y1
            }
            if ("relative" === e.position) var f = (a.pageX + d.scrollLeft - c.offsetX) * d.scaleX,
                d = (a.pageY + d.scrollTop - c.offsetY) * d.scaleY;
            else f = a.pageX - c.offsetX, d = a.pageY - c.offsetY;
            c.rotation = 0;
            c.scale = 1;
            c.startTime = c.moveTime = (new Date).getTime();
            c.move = {
                x: f,
                y: d
            };
            c.start = {
                x: f,
                y: d
            };
            e.fingers++
        };
        e.event = a;
        c.defaultListener && (e.listener = c.defaultListener,
            delete c.defaultListener);
        var k = !e.fingers,
            m = e.tracker;
        a = a.changedTouches || b.getCoords(a);
        for (var g = a.length, f = 0; f < g; f++) {
            var l = a[f],
                n = l.identifier || Infinity;
            if (e.fingers) {
                if (e.fingers >= e.maxFingers) {
                    d = [];
                    for (n in e.tracker) d.push(n);
                    c.identifier = d.join(",");
                    return k
                }
                var r = 0,
                    q;
                for (q in m) {
                    if (m[q].up) {
                        delete m[q];
                        d(l, n);
                        e.cancel = !0;
                        break
                    }
                    r++
                }
                m[n] || d(l, n)
            } else m = e.tracker = {}, c.bbox = e.bbox = b.getBoundingBox(e.target), e.fingers = 0, e.cancel = !1, d(l, n)
        }
        d = [];
        for (n in e.tracker) d.push(n);
        c.identifier = d.join(",");
        return k
    };
    b.pointerEnd = function(a, b, e, d) {
        var k = a.touches || [],
            m = k.length;
        a = {};
        for (var g = 0; g < m; g++) {
            var f = k[g].identifier;
            a[f || Infinity] = !0
        }
        for (f in e.tracker) k = e.tracker[f], a[f] || k.up || (d && d({
            pageX: k.pageX,
            pageY: k.pageY,
            changedTouches: [{
                pageX: k.pageX,
                pageY: k.pageY,
                identifier: "Infinity" === f ? Infinity : f
            }]
        }, "up"), k.up = !0, e.fingers--);
        if (0 !== e.fingers) return !1;
        d = [];
        e.gestureFingers = 0;
        for (f in e.tracker) e.gestureFingers++, d.push(f);
        b.identifier = d.join(",");
        return !0
    };
    b.getCoords = function(a) {
        b.getCoords = "undefined" !==
            typeof a.pageX ? function(a) {
                return Array({
                    type: "mouse",
                    x: a.pageX,
                    y: a.pageY,
                    pageX: a.pageX,
                    pageY: a.pageY,
                    identifier: Infinity
                })
            } : function(a) {
                a = a || window.event;
                return Array({
                    type: "mouse",
                    x: a.clientX + document.documentElement.scrollLeft,
                    y: a.clientY + document.documentElement.scrollTop,
                    pageX: a.clientX + document.documentElement.scrollLeft,
                    pageY: a.clientY + document.documentElement.scrollTop,
                    identifier: Infinity
                })
            };
        return b.getCoords(a)
    };
    b.getCoord = function(a) {
        if ("ontouchstart" in window) {
            var c = 0,
                e = 0;
            b.getCoord = function(a) {
                a =
                    a.changedTouches;
                return a.length ? {
                    x: c = a[0].pageX,
                    y: e = a[0].pageY
                } : {
                    x: c,
                    y: e
                }
            }
        } else b.getCoord = "undefined" !== typeof a.pageX && "undefined" !== typeof a.pageY ? function(a) {
            return {
                x: a.pageX,
                y: a.pageY
            }
        } : function(a) {
            a = a || window.event;
            return {
                x: a.clientX + document.documentElement.scrollLeft,
                y: a.clientY + document.documentElement.scrollTop
            }
        };
        return b.getCoord(a)
    };
    b.getBoundingBox = function(a) {
        if (a === window || a === document) a = document.body;
        var b = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            scrollLeft: 0,
            scrollTop: 0
        };
        a === document.body ? (b.height =
            window.innerHeight, b.width = window.innerWidth) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        b.scaleX = a.width / b.width || 1;
        b.scaleY = a.height / b.height || 1;
        for (var e = a; null !== e;) b.x1 += e.offsetLeft, b.y1 += e.offsetTop, e = e.offsetParent;
        for (e = a.parentNode; null !== e && e !== document.body && void 0 !== e.scrollTop;) b.scrollLeft += e.scrollLeft, b.scrollTop += e.scrollTop, e = e.parentNode;
        b.x2 = b.x1 + b.width;
        b.y2 = b.y1 + b.height;
        return b
    };
    (function() {
        var a = navigator.userAgent.toLowerCase(),
            c = -1 !== a.indexOf("macintosh"),
            e = c && -1 !==
            a.indexOf("khtml") ? {
                91: !0,
                93: !0
            } : c && -1 !== a.indexOf("firefox") ? {
                224: !0
            } : {
                17: !0
            };
        b.isMetaKey = function(a) {
            return !!e[a.keyCode]
        };
        b.metaTracker = function(a) {
            e[a.keyCode] && (b.metaKey = "keydown" === a.type)
        }
    })();
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.click = function(a) {
        a.maxFingers = a.maxFingers || a.fingers || 1;
        var c;
        a.onPointerDown = function(d) {
            b.pointerStart(d, e, a) && (Event.add(a.doc, "mousemove", a.onPointerMove).listener(d), Event.add(a.doc, "mouseup", a.onPointerUp))
        };
        a.onPointerMove = function(a) {
            c = a
        };
        a.onPointerUp = function(d) {
            if (b.pointerEnd(d, e, a) && (Event.remove(a.doc, "mousemove", a.onPointerMove), Event.remove(a.doc, "mouseup", a.onPointerUp), !(c.cancelBubble && 1 < ++c.bubble))) {
                var k = (c.changedTouches || b.getCoords(c))[0];
                d = a.bbox;
                var m = b.getBoundingBox(a.target);
                if ("relative" === a.position) var g = (k.pageX + d.scrollLeft - d.x1) * d.scaleX,
                    k = (k.pageY + d.scrollTop - d.y1) * d.scaleY;
                else g = k.pageX - d.x1, k = k.pageY - d.y1;
                0 < g && (g < d.width && 0 < k && k < d.height && d.scrollTop === m.scrollTop) && a.listener(c, e)
            }
        };
        var e = b.pointerSetup(a);
        e.state = "click";
        Event.add(a.target, "mousedown", a.onPointerDown);
        return e
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.click = b.click;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.dbltap = b.dblclick = function(a) {
        a.maxFingers = a.maxFingers || a.fingers || 1;
        var c, e, d, k, m;
        a.onPointerDown = function(f) {
            var l = f.changedTouches || b.getCoords(f);
            c && !e ? (m = l[0], e = (new Date).getTime() - c) : (k = l[0], c = (new Date).getTime(), e = 0, clearTimeout(d), d = setTimeout(function() {
                c = 0
            }, 700));
            b.pointerStart(f, g, a) && (Event.add(a.doc, "mousemove", a.onPointerMove).listener(f), Event.add(a.doc, "mouseup", a.onPointerUp))
        };
        a.onPointerMove = function(f) {
            c && !e && (m = (f.changedTouches || b.getCoords(f))[0]);
            f = a.bbox;
            if ("relative" === a.position) var g = (m.pageX + f.scrollLeft - f.x1) * f.scaleX,
                n = (m.pageY + f.scrollTop - f.y1) * f.scaleY;
            else g = m.pageX - f.x1, n = m.pageY - f.y1;
            0 < g && g < f.width && 0 < n && n < f.height && 25 >= Math.abs(m.pageX - k.pageX) && 25 >= Math.abs(m.pageY - k.pageY) || (Event.remove(a.doc, "mousemove", a.onPointerMove), clearTimeout(d), c = e = 0)
        };
        a.onPointerUp = function(f) {
            b.pointerEnd(f, g, a) && (Event.remove(a.doc, "mousemove", a.onPointerMove), Event.remove(a.doc, "mouseup", a.onPointerUp));
            c && e && (700 >= e && !(f.cancelBubble && 1 < ++f.bubble) &&
                (g.state = a.gesture, a.listener(f, g)), clearTimeout(d), c = e = 0)
        };
        var g = b.pointerSetup(a);
        g.state = "dblclick";
        Event.add(a.target, "mousedown", a.onPointerDown);
        return g
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.dbltap = b.dbltap;
    Event.Gesture._gestureHandlers.dblclick = b.dblclick;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.dragElement = function(a, c) {
        b.drag({
            event: c,
            target: a,
            position: "move",
            listener: function(b, d) {
                a.style.left = d.x + "px";
                a.style.top = d.y + "px";
                Event.prevent(b)
            }
        })
    };
    b.drag = function(a) {
        a.gesture = "drag";
        a.onPointerDown = function(e) {
            b.pointerStart(e, c, a) && !a.monitor && (Event.add(a.doc, "mousemove", a.onPointerMove), Event.add(a.doc, "mouseup", a.onPointerUp));
            a.onPointerMove(e, "down")
        };
        a.onPointerMove = function(e, d) {
            if (!a.tracker) return a.onPointerDown(e);
            for (var k = a.bbox, m = e.changedTouches ||
                    b.getCoords(e), g = m.length, f = 0; f < g; f++) {
                var l = m[f],
                    n = l.identifier || Infinity,
                    r = a.tracker[n];
                r && (r.pageX = l.pageX, r.pageY = l.pageY, c.state = d || "move", c.identifier = n, c.start = r.start, c.fingers = a.fingers, "relative" === a.position ? (c.x = (r.pageX + k.scrollLeft - r.offsetX) * k.scaleX, c.y = (r.pageY + k.scrollTop - r.offsetY) * k.scaleY) : (c.x = r.pageX - r.offsetX, c.y = r.pageY - r.offsetY), a.listener(e, c))
            }
        };
        a.onPointerUp = function(e) {
            b.pointerEnd(e, c, a, a.onPointerMove) && !a.monitor && (Event.remove(a.doc, "mousemove", a.onPointerMove),
                Event.remove(a.doc, "mouseup", a.onPointerUp))
        };
        var c = b.pointerSetup(a);
        if (a.event) a.onPointerDown(a.event);
        else Event.add(a.target, "mousedown", a.onPointerDown), a.monitor && (Event.add(a.doc, "mousemove", a.onPointerMove), Event.add(a.doc, "mouseup", a.onPointerUp));
        return c
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.drag = b.drag;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    var a = Math.PI / 180;
    b.gesture = function(c) {
        c.minFingers = c.minFingers || c.fingers || 2;
        c.onPointerDown = function(a) {
            var k = c.fingers;
            b.pointerStart(a, e, c) && (Event.add(c.doc, "mousemove", c.onPointerMove), Event.add(c.doc, "mouseup", c.onPointerUp));
            if (c.fingers === c.minFingers && k !== c.fingers) {
                e.fingers = c.minFingers;
                e.scale = 1;
                e.rotation = 0;
                e.state = "start";
                var k = "",
                    m;
                for (m in c.tracker) k += m;
                e.identifier = parseInt(k);
                c.listener(a, e)
            }
        };
        c.onPointerMove = function(d, k) {
            for (var m = c.bbox, g = c.tracker,
                    f = d.changedTouches || b.getCoords(d), l = f.length, n = 0; n < l; n++) {
                var r = f[n],
                    q = r.identifier || Infinity,
                    p = g[q];
                p && ("relative" === c.position ? (p.move.x = (r.pageX + m.scrollLeft - m.x1) * m.scaleX, p.move.y = (r.pageY + m.scrollTop - m.y1) * m.scaleY) : (p.move.x = r.pageX - m.x1, p.move.y = r.pageY - m.y1))
            }
            if (!(c.fingers < c.minFingers)) {
                var f = [],
                    s = p = n = m = 0,
                    l = 0;
                for (q in g) r = g[q], r.up || (p += r.move.x, s += r.move.y, l++);
                p /= l;
                s /= l;
                for (q in g)
                    if (r = g[q], !r.up) {
                        l = r.start;
                        if (!l.distance) {
                            var t = l.x - p,
                                v = l.y - s;
                            l.distance = Math.sqrt(t * t + v * v);
                            l.angle = Math.atan2(t,
                                v) / a
                        }
                        var t = r.move.x - p,
                            v = r.move.y - s,
                            w = Math.sqrt(t * t + v * v),
                            m = m + w / l.distance,
                            t = Math.atan2(t, v) / a,
                            l = (l.angle - t + 360) % 360 - 180;
                        r.DEG2 = r.DEG1;
                        r.DEG1 = 0 < l ? l : -l;
                        "undefined" !== typeof r.DEG2 && (r.rotation = 0 < l ? r.rotation + (r.DEG1 - r.DEG2) : r.rotation - (r.DEG1 - r.DEG2), n += r.rotation);
                        f.push(r.move)
                    }
                e.touches = f;
                e.fingers = c.fingers;
                e.scale = m / c.fingers;
                e.rotation = n / c.fingers;
                e.state = "change";
                c.listener(d, e)
            }
        };
        c.onPointerUp = function(a) {
            var k = c.fingers;
            b.pointerEnd(a, e, c) && (Event.remove(c.doc, "mousemove", c.onPointerMove), Event.remove(c.doc,
                "mouseup", c.onPointerUp));
            k === c.minFingers && c.fingers < c.minFingers && (e.fingers = c.fingers, e.state = "end", c.listener(a, e))
        };
        var e = b.pointerSetup(c);
        Event.add(c.target, "mousedown", c.onPointerDown);
        return e
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.gesture = b.gesture;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.pointerdown = b.pointermove = b.pointerup = function(a) {
        if (!a.target.isPointerEmitter) {
            var c = !0;
            a.onPointerDown = function(b) {
                c = !1;
                e.gesture = "pointerdown";
                a.listener(b, e)
            };
            a.onPointerMove = function(b) {
                e.gesture = "pointermove";
                a.listener(b, e, c)
            };
            a.onPointerUp = function(b) {
                c = !0;
                e.gesture = "pointerup";
                a.listener(b, e, !0)
            };
            var e = b.pointerSetup(a);
            Event.add(a.target, "mousedown", a.onPointerDown);
            Event.add(a.target, "mousemove", a.onPointerMove);
            Event.add(a.doc, "mouseup", a.onPointerUp);
            a.target.isPointerEmitter = !0;
            return e
        }
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.pointerdown = b.pointerdown;
    Event.Gesture._gestureHandlers.pointermove = b.pointermove;
    Event.Gesture._gestureHandlers.pointerup = b.pointerup;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.shake = function(a) {
        var b = {
                gesture: "devicemotion",
                acceleration: {},
                accelerationIncludingGravity: {},
                target: a.target,
                listener: a.listener,
                remove: function() {
                    window.removeEventListener("devicemotion", m, !1)
                }
            },
            e = (new Date).getTime(),
            d = {
                x: 0,
                y: 0,
                z: 0
            },
            k = {
                x: {
                    count: 0,
                    value: 0
                },
                y: {
                    count: 0,
                    value: 0
                },
                z: {
                    count: 0,
                    value: 0
                }
            },
            m = function(g) {
                var f = g.accelerationIncludingGravity;
                d.x = 0.8 * d.x + (1 - 0.8) * f.x;
                d.y = 0.8 * d.y + (1 - 0.8) * f.y;
                d.z = 0.8 * d.z + (1 - 0.8) * f.z;
                b.accelerationIncludingGravity = d;
                b.acceleration.x =
                    f.x - d.x;
                b.acceleration.y = f.y - d.y;
                b.acceleration.z = f.z - d.z;
                if ("devicemotion" === a.gesture) a.listener(g, b);
                else
                    for (var f = (new Date).getTime(), l = 0; 3 > l; l++) {
                        var n = "xyz" [l],
                            m = b.acceleration[n],
                            n = k[n],
                            q = Math.abs(m);
                        !(1E3 > f - e) && 4 < q && (m = f * m / q, q = Math.abs(m + n.value), n.value && 200 > q ? (n.value = m, n.count++, 3 === n.count && (a.listener(g, b), e = f, n.value = 0, n.count = 0)) : (n.value = m, n.count = 1))
                    }
            };
        if (window.addEventListener) return window.addEventListener("devicemotion", m, !1), b
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers =
        Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.shake = b.shake;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    var a = Math.PI / 180;
    b.swipe = function(c) {
        c.snap = c.snap || 90;
        c.threshold = c.threshold || 1;
        c.onPointerDown = function(a) {
            b.pointerStart(a, e, c) && (Event.add(c.doc, "mousemove", c.onPointerMove).listener(a), Event.add(c.doc, "mouseup", c.onPointerUp))
        };
        c.onPointerMove = function(a) {
            a = a.changedTouches || b.getCoords(a);
            for (var e = a.length, m = 0; m < e; m++) {
                var g = a[m],
                    f = c.tracker[g.identifier || Infinity];
                f && (f.move.x = g.pageX, f.move.y = g.pageY, f.moveTime = (new Date).getTime())
            }
        };
        c.onPointerUp = function(d) {
            if (b.pointerEnd(d,
                    e, c)) {
                Event.remove(c.doc, "mousemove", c.onPointerMove);
                Event.remove(c.doc, "mouseup", c.onPointerUp);
                var k, m, g, f, l = {
                        x: 0,
                        y: 0
                    },
                    n = 0,
                    r = 0,
                    q = 0,
                    p;
                for (p in c.tracker) {
                    var s = c.tracker[p];
                    f = s.move.x - s.start.x;
                    var t = s.move.y - s.start.y,
                        n = n + s.move.x,
                        r = r + s.move.y;
                    l.x += s.start.x;
                    l.y += s.start.y;
                    q++;
                    m = Math.sqrt(f * f + t * t);
                    s = s.moveTime - s.startTime;
                    f = Math.atan2(f, t) / a + 180;
                    m = s ? m / s : 0;
                    if ("undefined" === typeof g) g = f, k = m;
                    else if (20 >= Math.abs(f - g)) g = (g + f) / 2, k = (k + m) / 2;
                    else return
                }
                k > c.threshold && (l.x /= q, l.y /= q, e.start = l, e.x = n / q,
                    e.y = r / q, e.angle = -(((g / c.snap + 0.5 >> 0) * c.snap || 360) - 360), e.velocity = k, e.fingers = c.gestureFingers, e.state = "swipe", c.listener(d, e))
            }
        };
        var e = b.pointerSetup(c);
        Event.add(c.target, "mousedown", c.onPointerDown);
        return e
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.swipe = b.swipe;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.tap = b.longpress = function(a) {
        a.delay = a.delay || 500;
        a.timeout = a.timeout || 250;
        var c, e;
        a.onPointerDown = function(k) {
            b.pointerStart(k, d, a) && (c = (new Date).getTime(), Event.add(a.doc, "mousemove", a.onPointerMove).listener(k), Event.add(a.doc, "mouseup", a.onPointerUp), "longpress" === a.gesture && (e = setTimeout(function() {
                if (!(k.cancelBubble && 1 < ++k.bubble)) {
                    var b = 0,
                        c;
                    for (c in a.tracker) {
                        if (!0 === a.tracker[c].end || a.cancel) return;
                        b++
                    }
                    d.state = "start";
                    d.fingers = b;
                    a.listener(k, d)
                }
            }, a.delay)))
        };
        a.onPointerMove = function(d) {
            var c = a.bbox;
            d = d.changedTouches || b.getCoords(d);
            for (var e = d.length, f = 0; f < e; f++) {
                var l = d[f],
                    n = a.tracker[l.identifier || Infinity];
                if (n) {
                    if ("relative" === a.position) var r = (l.pageX + c.scrollLeft - c.x1) * c.scaleX,
                        l = (l.pageY + c.scrollTop - c.y1) * c.scaleY;
                    else r = l.pageX - c.x1, l = l.pageY - c.y1;
                    if (!(0 < r && r < c.width && 0 < l && l < c.height && 25 >= Math.abs(r - n.start.x) && 25 >= Math.abs(l - n.start.y))) {
                        Event.remove(a.doc, "mousemove", a.onPointerMove);
                        a.cancel = !0;
                        break
                    }
                }
            }
        };
        a.onPointerUp = function(k) {
            b.pointerEnd(k,
                d, a) && (clearTimeout(e), Event.remove(a.doc, "mousemove", a.onPointerMove), Event.remove(a.doc, "mouseup", a.onPointerUp), k.cancelBubble && 1 < ++k.bubble || ("longpress" === a.gesture ? "start" === d.state && (d.state = "end", a.listener(k, d)) : a.cancel || (new Date).getTime() - c > a.timeout || (d.state = "tap", d.fingers = a.gestureFingers, a.listener(k, d))))
        };
        var d = b.pointerSetup(a);
        Event.add(a.target, "mousedown", a.onPointerDown);
        return d
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.tap = b.tap;
    Event.Gesture._gestureHandlers.longpress = b.longpress;
    return b
}(Event.proxy);
"undefined" === typeof Event && (Event = {});
"undefined" === typeof Event.proxy && (Event.proxy = {});
Event.proxy = function(b) {
    b.wheel = function(a) {
        var b, e = a.timeout || 150,
            d = 0,
            k = {
                gesture: "wheel",
                state: "start",
                wheelDelta: 0,
                target: a.target,
                listener: a.listener,
                remove: function() {
                    a.target[f](l, m, !1)
                }
            },
            m = function(f) {
                f = f || window.event;
                k.state = d++ ? "change" : "start";
                k.wheelDelta = f.detail ? -20 * f.detail : f.wheelDelta;
                a.listener(f, k);
                clearTimeout(b);
                b = setTimeout(function() {
                    d = 0;
                    k.state = "end";
                    k.wheelDelta = 0;
                    a.listener(f, k)
                }, e)
            },
            g = document.addEventListener ? "addEventListener" : "attachEvent",
            f = document.removeEventListener ?
            "removeEventListener" : "detachEvent",
            l = Event.supports("mousewheel") ? "mousewheel" : "DOMMouseScroll";
        a.target[g](l, m, !1);
        return k
    };
    Event.Gesture = Event.Gesture || {};
    Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {};
    Event.Gesture._gestureHandlers.wheel = b.wheel;
    return b
}(Event.proxy);

function Stream(b) {
    function a() {
        var a = b.charCodeAt(c);
        c += 1;
        return a
    }
    var c = 0;
    return {
        eof: function() {
            return c >= b.length
        },
        read: function(a) {
            var d = b.substr(c, a);
            c += a;
            return d
        },
        readInt32: function() {
            var a = (b.charCodeAt(c) << 24) + (b.charCodeAt(c + 1) << 16) + (b.charCodeAt(c + 2) << 8) + b.charCodeAt(c + 3);
            c += 4;
            return a
        },
        readInt16: function() {
            var a = (b.charCodeAt(c) << 8) + b.charCodeAt(c + 1);
            c += 2;
            return a
        },
        readInt8: a,
        readVarInt: function() {
            for (var b = 0;;) {
                var d = a();
                if (d & 128) b += d & 127, b <<= 7;
                else return b + d
            }
        }
    }
}

function MidiFile(b) {
    function a(a) {
        var b = a.read(4),
            d = a.readInt32();
        return {
            id: b,
            length: d,
            data: a.read(d)
        }
    }

    function c(a) {
        var b = {};
        b.deltaTime = a.readVarInt();
        var d = a.readInt8();
        if (240 == (d & 240))
            if (255 == d) {
                b.type = "meta";
                var d = a.readInt8(),
                    c = a.readVarInt();
                switch (d) {
                    case 0:
                        b.subtype = "sequenceNumber";
                        if (2 != c) throw "Expected length for sequenceNumber event is 2, got " + c;
                        b.number = a.readInt16();
                        return b;
                    case 1:
                        return b.subtype = "text", b.text = a.read(c), b;
                    case 2:
                        return b.subtype = "copyrightNotice", b.text = a.read(c),
                            b;
                    case 3:
                        return b.subtype = "trackName", b.text = a.read(c), b;
                    case 4:
                        return b.subtype = "instrumentName", b.text = a.read(c), b;
                    case 5:
                        return b.subtype = "lyrics", b.text = a.read(c), b;
                    case 6:
                        return b.subtype = "marker", b.text = a.read(c), b;
                    case 7:
                        return b.subtype = "cuePoint", b.text = a.read(c), b;
                    case 32:
                        b.subtype = "midiChannelPrefix";
                        if (1 != c) throw "Expected length for midiChannelPrefix event is 1, got " + c;
                        b.channel = a.readInt8();
                        return b;
                    case 47:
                        b.subtype = "endOfTrack";
                        if (0 != c) throw "Expected length for endOfTrack event is 0, got " +
                            c;
                        return b;
                    case 81:
                        b.subtype = "setTempo";
                        if (3 != c) throw "Expected length for setTempo event is 3, got " + c;
                        b.microsecondsPerBeat = (a.readInt8() << 16) + (a.readInt8() << 8) + a.readInt8();
                        return b;
                    case 84:
                        b.subtype = "smpteOffset";
                        if (5 != c) throw "Expected length for smpteOffset event is 5, got " + c;
                        d = a.readInt8();
                        b.frameRate = {
                            0: 24,
                            32: 25,
                            64: 29,
                            96: 30
                        }[d & 96];
                        b.hour = d & 31;
                        b.min = a.readInt8();
                        b.sec = a.readInt8();
                        b.frame = a.readInt8();
                        b.subframe = a.readInt8();
                        return b;
                    case 88:
                        b.subtype = "timeSignature";
                        if (4 != c) throw "Expected length for timeSignature event is 4, got " +
                            c;
                        b.numerator = a.readInt8();
                        b.denominator = Math.pow(2, a.readInt8());
                        b.metronome = a.readInt8();
                        b.thirtyseconds = a.readInt8();
                        return b;
                    case 89:
                        b.subtype = "keySignature";
                        if (2 != c) throw "Expected length for keySignature event is 2, got " + c;
                        b.key = a.readInt8();
                        b.scale = a.readInt8();
                        return b;
                    case 127:
                        return b.subtype = "sequencerSpecific", b.data = a.read(c), b;
                    default:
                        return b.subtype = "unknown", b.data = a.read(c), b
                }
            } else {
                if (240 == d) return b.type = "sysEx", c = a.readVarInt(), b.data = a.read(c), b;
                if (247 == d) return b.type = "dividedSysEx",
                    c = a.readVarInt(), b.data = a.read(c), b;
                throw "Unrecognised MIDI event type byte: " + d;
            }
        else {
            0 == (d & 128) ? (c = d, d = e) : (c = a.readInt8(), e = d);
            var g = d >> 4;
            b.channel = d & 15;
            b.type = "channel";
            switch (g) {
                case 8:
                    return b.subtype = "noteOff", b.noteNumber = c, b.velocity = a.readInt8(), b;
                case 9:
                    return b.noteNumber = c, b.velocity = a.readInt8(), b.subtype = 0 == b.velocity ? "noteOff" : "noteOn", b;
                case 10:
                    return b.subtype = "noteAftertouch", b.noteNumber = c, b.amount = a.readInt8(), b;
                case 11:
                    return b.subtype = "controller", b.controllerType = c, b.value =
                        a.readInt8(), b;
                case 12:
                    return b.subtype = "programChange", b.programNumber = c, b;
                case 13:
                    return b.subtype = "channelAftertouch", b.amount = c, b;
                case 14:
                    return b.subtype = "pitchBend", b.value = c + (a.readInt8() << 7), b;
                default:
                    throw "Unrecognised MIDI event type: " + g;
            }
        }
    }
    var e;
    stream = Stream(b);
    b = a(stream);
    if ("MThd" != b.id || 6 != b.length) throw "Bad .mid file - header not found";
    var d = Stream(b.data);
    b = d.readInt16();
    var k = d.readInt16(),
        d = d.readInt16();
    if (d & 32768) throw "Expressing time division in SMTPE frames is not supported yet";
    ticksPerBeat = d;
    b = {
        formatType: b,
        trackCount: k,
        ticksPerBeat: ticksPerBeat
    };
    k = [];
    for (d = 0; d < b.trackCount; d++) {
        k[d] = [];
        var m = a(stream);
        if ("MTrk" != m.id) throw "Unexpected chunk - expected MTrk, got " + m.id;
        for (m = Stream(m.data); !m.eof();) {
            var g = c(m);
            k[d].push(g)
        }
    }
    return {
        header: b,
        tracks: k
    }
}
var clone = function(b) {
    if ("object" != typeof b || null == b) return b;
    var a = "number" == typeof b.length ? [] : {},
        c;
    for (c in b) a[c] = clone(b[c]);
    return a
};

function Replayer(b, a, c, e) {
    function d() {
        for (var a = null, d = null, c = null, e = 0; e < k.length; e++) null != k[e].ticksToNextEvent && (null == a || k[e].ticksToNextEvent < a) && (a = k[e].ticksToNextEvent, d = e, c = k[e].nextEventIndex);
        if (null != d) {
            var f = b.tracks[d][c];
            k[d].ticksToNextEvent = b.tracks[d][c + 1] ? k[d].ticksToNextEvent + b.tracks[d][c + 1].deltaTime : null;
            k[d].nextEventIndex += 1;
            for (e = 0; e < k.length; e++) null != k[e].ticksToNextEvent && (k[e].ticksToNextEvent -= a);
            return {
                ticksToEvent: a,
                event: f,
                track: d
            }
        }
        return null
    }
    var k = [],
        m = e ? e : 120,
        g = e ? !0 : !1,
        f = b.header.ticksPerBeat;
    for (c = 0; c < b.tracks.length; c++) k[c] = {
        nextEventIndex: 0,
        ticksToNextEvent: b.tracks[c].length ? b.tracks[c][0].deltaTime : null
    };
    var l, n = [];
    (function() {
        if (l = d())
            for (; l;) {
                g || ("meta" != l.event.type || "setTempo" != l.event.subtype) || (m = 6E7 / l.event.microsecondsPerBeat);
                var b = 0,
                    b = 0;
                0 < l.ticksToEvent && (b = l.ticksToEvent / f, b /= m / 60);
                n.push([l, 1E3 * b * a || 0]);
                l = d()
            }
    })();
    return {
        getData: function() {
            return clone(n)
        }
    }
}
(function(b) {
    function a(a) {
        return String.fromCharCode.apply(null, a)
    }

    function c(a, b) {
        if (b)
            for (; a.length / 2 < b;) a = "0" + a;
        for (var d = [], c = a.length - 1; 0 <= c; c -= 2) d.unshift(parseInt(0 === c ? a[c] : a[c - 1] + a[c], 16));
        return d
    }
    var e = Array.prototype;
    if (!b.console || !console.firebug) {
        var d = ["log", "debug", "info", "warn", "error"];
        b.console = {};
        for (var k = 0; k < d.length; ++k) b.console[d[k]] = function() {}
    }
    var m = {
            G9: 127,
            Gb9: 126,
            F9: 125,
            E9: 124,
            Eb9: 123,
            D9: 122,
            Db9: 121,
            C9: 120,
            B8: 119,
            Bb8: 118,
            A8: 117,
            Ab8: 116,
            G8: 115,
            Gb8: 114,
            F8: 113,
            E8: 112,
            Eb8: 111,
            D8: 110,
            Db8: 109,
            C8: 108,
            B7: 107,
            Bb7: 106,
            A7: 105,
            Ab7: 104,
            G7: 103,
            Gb7: 102,
            F7: 101,
            E7: 100,
            Eb7: 99,
            D7: 98,
            Db7: 97,
            C7: 96,
            B6: 95,
            Bb6: 94,
            A6: 93,
            Ab6: 92,
            G6: 91,
            Gb6: 90,
            F6: 89,
            E6: 88,
            Eb6: 87,
            D6: 86,
            Db6: 85,
            C6: 84,
            B5: 83,
            Bb5: 82,
            A5: 81,
            Ab5: 80,
            G5: 79,
            Gb5: 78,
            F5: 77,
            E5: 76,
            Eb5: 75,
            D5: 74,
            Db5: 73,
            C5: 72,
            B4: 71,
            Bb4: 70,
            A4: 69,
            Ab4: 68,
            G4: 67,
            Gb4: 66,
            F4: 65,
            E4: 64,
            Eb4: 63,
            D4: 62,
            Db4: 61,
            C4: 60,
            B3: 59,
            Bb3: 58,
            A3: 57,
            Ab3: 56,
            G3: 55,
            Gb3: 54,
            F3: 53,
            E3: 52,
            Eb3: 51,
            D3: 50,
            Db3: 49,
            C3: 48,
            B2: 47,
            Bb2: 46,
            A2: 45,
            Ab2: 44,
            G2: 43,
            Gb2: 42,
            F2: 41,
            E2: 40,
            Eb2: 39,
            D2: 38,
            Db2: 37,
            C2: 36,
            B1: 35,
            Bb1: 34,
            A1: 33,
            Ab1: 32,
            G1: 31,
            Gb1: 30,
            F1: 29,
            E1: 28,
            Eb1: 27,
            D1: 26,
            Db1: 25,
            C1: 24,
            B0: 23,
            Bb0: 22,
            A0: 21,
            Ab0: 20,
            G0: 19,
            Gb0: 18,
            F0: 17,
            E0: 16,
            Eb0: 15,
            D0: 14,
            Db0: 13,
            C0: 12
        },
        g = function(a) {
            if (!a || null === a.type && void 0 === a.type || null === a.channel && void 0 === a.channel || null === a.param1 && void 0 === a.param1) throw Error("Not enough parameters to create an event.");
            this.setTime(a.time);
            this.setType(a.type);
            this.setChannel(a.channel);
            this.setParam1(a.param1);
            this.setParam2(a.param2)
        };
    g.createNote = function(a, b) {
        if (!a) throw Error("Note not specified");
        if ("string" === typeof a) a = m[a];
        else if (!a.pitch) throw Error("The pitch is required in order to create a note.");
        var d = [];
        d.push(g.noteOn(a));
        b || d.push(g.noteOff(a, a.duration || 128));
        return d
    };
    g.noteOn = function(a, b) {
        return new g({
            time: a.duration || b || 0,
            type: 9,
            channel: a.channel || 0,
            param1: a.pitch || a,
            param2: a.volume || 90
        })
    };
    g.noteOff = function(a, b) {
        return new g({
            time: a.duration || b || 0,
            type: 8,
            channel: a.channel || 0,
            param1: a.pitch || a,
            param2: a.volume || 90
        })
    };
    g.prototype = {
        type: 0,
        channel: 0,
        time: 0,
        setTime: function(a) {
            var b =
                a || 0;
            for (a = b & 127; b >>= 7;) a <<= 8, a |= b & 127 | 128;
            for (b = [];;)
                if (b.push(a & 255), a & 128) a >>= 8;
                else break;
            this.time = b
        },
        setType: function(a) {
            if (8 > a || 14 < a) throw Error("Trying to set an unknown event: " + a);
            this.type = a
        },
        setChannel: function(a) {
            if (0 > a || 15 < a) throw Error("Channel is out of bounds.");
            this.channel = a
        },
        setParam1: function(a) {
            this.param1 = a
        },
        setParam2: function(a) {
            this.param2 = a
        },
        toBytes: function() {
            var a = [],
                b = parseInt(this.type.toString(16) + this.channel.toString(16), 16);
            a.push.apply(a, this.time);
            a.push(b);
            a.push(this.param1);
            void 0 !== this.param2 && null !== this.param2 && a.push(this.param2);
            return a
        }
    };
    var f = function(a) {
        a && (this.setType(a.type), this.setData(a.data))
    };
    f.prototype = {
        setType: function(a) {
            this.type = a
        },
        setData: function(a) {
            this.data = a
        },
        toBytes: function() {
            if (!this.type || !this.data) throw Error("Type or data for meta-event not specified.");
            var a = [255, this.type];
            this.data && (this.data.concat && this.data.unshift && !this.data.callee) && e.push.apply(a, this.data);
            return a
        }
    };
    var l = function(a) {
        this.events = [];
        for (var b in a)
            if (a.hasOwnProperty(b)) this["set" +
                b.charAt(0).toUpperCase() + b.substring(1)](a[b])
    };
    l.TRACK_START = [77, 84, 114, 107];
    l.TRACK_END = [0, 255, 47, 0];
    l.prototype = {
        addEvent: function(a) {
            this.events.push(a);
            return this
        },
        setEvents: function(a) {
            e.push.apply(this.events, a);
            return this
        },
        setText: function(a, b) {
            b || (b = a = 1);
            return this.addEvent(new f({
                type: a,
                data: b
            }))
        },
        setCopyright: function(a) {
            return this.setText(2, a)
        },
        setTrackName: function(a) {
            return this.setText(3, a)
        },
        setInstrument: function(a) {
            return this.setText(4, a)
        },
        setLyric: function(a) {
            return this.setText(5,
                a)
        },
        setMarker: function(a) {
            return this.setText(6, a)
        },
        setCuePoint: function(a) {
            return this.setText(7, a)
        },
        setTempo: function(a) {
            this.addEvent(new f({
                type: 81,
                data: a
            }))
        },
        setTimeSig: function() {},
        setKeySig: function() {},
        toBytes: function() {
            var a = 0,
                b = [],
                d = l.TRACK_START,
                f = l.TRACK_END;
            this.events.forEach(function(d) {
                d = d.toBytes();
                a += d.length;
                e.push.apply(b, d)
            });
            var a = a + f.length,
                g = c(a.toString(16), 4);
            return d.concat(g, b, f)
        }
    };
    b.MidiWriter = function(d) {
        if (d) {
            d = d.tracks || [];
            var e = d.length.toString(16),
                f = "MThd\x00\x00\x00\u0006\x00\x00",
                f = f + a(c(e, 2)),
                f = f + "\u0001\u0090";
            d.forEach(function(b) {
                f += a(b.toBytes())
            });
            return {
                b64: btoa(f),
                play: function() {
                    if (document) {
                        var a = document.createElement("embed");
                        a.setAttribute("src", "data:audio/midi;base64," + this.b64);
                        a.setAttribute("type", "audio/midi");
                        document.body.appendChild(a)
                    }
                },
                save: function() {
                    b.open("data:audio/midi;base64," + this.b64, "JSMidi generated output", "resizable=yes,scrollbars=no,status=no")
                }
            }
        }
        throw Error("No parameters have been passed to MidiWriter.");
    };
    b.MidiEvent = g;
    b.MetaEvent =
        f;
    b.MidiTrack = l;
    b.noteTable = m
})(jsmidi = {});
(function(b) {
    b.btoa || (b.btoa = function(a) {
        a = escape(a);
        var b = "",
            e, d, k = "",
            m, g, f = "",
            l = 0;
        do e = a.charCodeAt(l++), d = a.charCodeAt(l++), k = a.charCodeAt(l++), m = e >> 2, e = (e & 3) << 4 | d >> 4, g = (d & 15) << 2 | k >> 6, f = k & 63, isNaN(d) ? g = f = 64 : isNaN(k) && (f = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f);
        while (l < a.length);
        return b
    });
    b.atob || (b.atob = function(a) {
        var b = "",
            e, d, k = "",
            m, g = "",
            f = 0;
        /[^A-Za-z0-9\+\/\=]/g.exec(a) && alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)), m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
            g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)), e = e << 2 | d >> 4, d = (d & 15) << 4 | m >> 2, k = (m & 3) << 6 | g, b += String.fromCharCode(e), 64 != m && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(k)); while (f < a.length);
        return unescape(b)
    })
})(this);
String.prototype.replaceAll = function(b, a) {
    if ("object" === typeof b) {
        for (var c = this, e = 0; e < b.length; e++) c = c.split(b[e]).join(a[e]);
        return c
    }
    return this.split(b).join(a)
};
String.prototype.trim = function(b) {
    return this.replace(/^\s+|\s+$/g, "")
};
String.prototype.ucfirst = function(b) {
    return this[0].toUpperCase() + this.substr(1)
};
String.prototype.ucwords = function(b) {
    return this.replace(/^(.)|\s(.)/g, function(a) {
        return a.toUpperCase()
    })
};
String.prototype.addslashes = function() {
    return this.replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0")
};
String.prototype.stripslashes = function() {
    return this.replace(/\0/g, "0").replace(/\\([\\'"])/g, "$1")
};
String.prototype.basename = function() {
    return this.replace(/\\/g, "/").replace(/.*\//, "")
};
String.prototype.lpad = function(b, a) {
    for (var c = this; c.length < a;) c = b + c;
    return c
};
String.prototype.rpad = function(b, a) {
    for (var c = this; c.length < a;) c += b;
    return c
};
window.STRING = String;
STRING.prototype.replaceAll = STRING.prototype.replaceAll;
STRING.prototype.trim = STRING.prototype.trim;
STRING.prototype.ucfirst = STRING.prototype.ucfirst;
STRING.prototype.ucwords = STRING.prototype.ucwords;
STRING.prototype.addslashes = STRING.prototype.addslashes;
STRING.prototype.stripslashes = STRING.prototype.stripslashes;
STRING.prototype.basename = STRING.prototype.basename;
STRING.prototype.lpad = STRING.prototype.lpad;
STRING.prototype.rpad = STRING.prototype.rpad;
var Base64Binary = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decodeArrayBuffer: function(b) {
        var a = Math.ceil(3 * b.length / 4),
            a = new ArrayBuffer(a);
        this.decode(b, a);
        return a
    },
    decode: function(b, a) {
        var c = this._keyStr.indexOf(b.charAt(b.length - 1)),
            e = this._keyStr.indexOf(b.charAt(b.length - 1)),
            d = Math.ceil(3 * b.length / 4);
        64 == c && d--;
        64 == e && d--;
        var k, m, g, f, l = 0,
            n = 0,
            c = a ? new Uint8Array(a) : new Uint8Array(d);
        b = b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        for (l = 0; l < d; l += 3) k = this._keyStr.indexOf(b.charAt(n++)),
            m = this._keyStr.indexOf(b.charAt(n++)), e = this._keyStr.indexOf(b.charAt(n++)), f = this._keyStr.indexOf(b.charAt(n++)), k = k << 2 | m >> 4, m = (m & 15) << 4 | e >> 2, g = (e & 3) << 6 | f, c[l] = k, 64 != e && (c[l + 1] = m), 64 != f && (c[l + 2] = g);
        return c
    }
};
