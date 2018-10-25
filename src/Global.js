import m from 'mithril';
import keys from 'when/keys';

let Mopidy = require('mopidy');

var State = {

    online: false,

    mopidy: null,

    playlists: [],

    history: [
	    {__model__: "Ref", type: "directory", name: "First", uri: "file:///var/lib/mopidy"},
	    {__model__: "Ref", type: "directory", name: "Second", uri: "local:directory"}
    ]
}

let MopidyManager = function () {

    // public api
    let my = {};

    my.start = function () {
        // initialise state
        State.mopidy = buildMopidyState();

        mopidy = new Mopidy({
            webSocketUrl: "ws://192.168.0.39:6680/mopidy/ws"
        });

        mopidy.on("state:online", onStateOnline);
        mopidy.on("state:offline", onStateOffline);
    }

    // private api
    let mopidy = null;

    function buildMopidyState() {
        return {
            browseRoot: mopidy ? mopidy.library.browse(null) : [],
            currentTrack: mopidy ? mopidy.playback.getCurrentTrack() : {}
        }
    }

    function onStateOnline() {
        if (State.online != true) {

            State.online = true;

            // retreive state from server
            let newState = buildMopidyState();
            keys.all(newState)
                .then(function (state) { State.mopidy = state; })
                .catch(function () { State.online = false })
                .done(function () { m.redraw(); });
        }
    }

    function onStateOffline() {
        State.online = false;
        m.redraw();
    }

    return my;
}();

export {State, MopidyManager};