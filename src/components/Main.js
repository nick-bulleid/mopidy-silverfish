import m from 'mithril';
import './main.css'

let Track = {
    view: function () {
        return m(".item", [
            m(".content", [
                m(".header", "Name")
            ])
        ])
    }
}

export default {
    view: function () {
        return m(".main", [
            m(".ui.container", [
                m(".ui.items", [
                    m(Track)
                ])
            ])
        ]);
    }
};