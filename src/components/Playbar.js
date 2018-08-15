import m from 'mithril';
import './playbar.css';

export default {
    view: function () {
        return m(".playbar", [
            m(".ui.middle.aligned.padded.grid", [
                m(".row", [
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
                        m("h1.ui.header.truncate.blue", [
                            "Track Title",
                            m(".sub.header.truncate", "by Artist from Album")
                        ])
                    ])
                ]),
                m(".row.blue")
            ])
        ]);
    }
}