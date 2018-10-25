import m from 'mithril';
import {MopidyManager} from './Global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Playbar from './components/Playbar';

import './App.css';

let App = {
    oninit() {
        MopidyManager.start();
    },

    view() {
        return m(".app", [
            m(Header),
            m(Sidebar),
            m(Main),
            m(Playbar)
        ]);
    }
}

export default App;
