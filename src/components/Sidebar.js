import m from 'mithril';
import {State} from '../Global'
import './sidebar.css';

var SubMenu = {
  view: function(vnode) {
    let children = [];
    children.push(m(".header", vnode.attrs.name));

    if (vnode.attrs.items) {
      children.push(
        m(".menu", [
          vnode.attrs.items.map(function (node) {
            return m("a.item", node.name);
          })
        ])
      );
    }

    return m(".item", children);
  }
}

export default {
  view: function () {
    return (
      m(".sidebar", [
        m(".ui.menu.vertical.secondary.fluid", [
          m(".item", [
            m("h2.ui.header", [
              m("i.icon.music.blue"),
              "Mopidy"
            ])
          ]),
          m(".item", [
            m(".ui.icon.input", [
              m("input", { placeholder: "Search...", type: "text" }),
              m("i.icon.search")
            ])
          ]),
          m("a.item.header", "Now Playing"),
          m(SubMenu, { name: "Browse", items: State.mopidy.browseRoot }),
          m(SubMenu, { name: "Playlists", items: State.playlists}),
          m("a.item.header", "Settings"),
        ])
      ])
    );
  }
}