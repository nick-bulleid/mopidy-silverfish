import m from 'mithril';
import {State} from '../Global';

import './playbar.css';

let TrackDisplay = {
    view(vnode) {
        let children = [];
        if (vnode.attrs.track)
        {
            children.push(vnode.attrs.track.name);
            children.push(m(".sub.header.truncate", "by " + vnode.attrs.track.artists[0].name + " from " + vnode.attrs.track.album.name))
        }
        return m("h1.ui.header.truncate.blue", children);
    }
}

let TrackProgress = {

    progress: 70,

    view: function (vnode) {
        return m("div.track-progress", [
            m("progress", { max: "100", value: vnode.state.progress }),
            m("input", { oninput: m.withAttr("value", function(value) {
                vnode.state.progress = value;
            }, vnode), type: "range", max: "100", value: vnode.state.progress })
        ])
    }
}

export default {
    view: function () {
        return m(".playbar", [
            m(".ui.middle.aligned.padded.grid", [
                m(".slim.row", [
                    m(".controls.column.center.aligned",
                        m("button.ui.icon.button.blue.big.circular", [
                            m("i.icon.backward")
                        ]),
                        m("button.ui.icon.button.blue.massive.circular", [
                            m("i.icon.play")
                        ]),
                        m("button.ui.icon.button.blue.big.circular", [
                            m("i.icon.forward")
                        ])
                    ),
                    m(".stretch.column.left.aligned", [
                        m(TrackDisplay, { track: State.mopidy.currentTrack })
                    ])
                ]),
                m(".slim.row.centered.blue", [
                    m(".twelve.wide.column", [
                        m(TrackProgress)
                    ])
                ])
            ])
        ]);
    }
}