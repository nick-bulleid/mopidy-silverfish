import m from 'mithril';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Playbar from './components/Playbar';

import './App.css';

export default {
    view() {
        return m(".app", [
            m(Header),
            m(Sidebar),
            m(Main),
            m(Playbar)
        ]);
    }
}
