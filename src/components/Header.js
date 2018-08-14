import m from 'mithril';

import {State} from '../Global';
import './Header.css';

let generateBreadcrumbs = function () {
    var output = [];
    State.history.forEach(function (node) {
        output.push(m("a.section", node.name));
        output.push(m("i.right.angle.icon.divider"));
    });
    output.push(m(".active.section", "Here"));

    return output;
}

export default {
    view: function () {
        return m(".main-header", [
            m(".ui.breadcrumb", generateBreadcrumbs())
        ]);
    }
}