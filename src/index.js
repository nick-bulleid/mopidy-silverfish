import m from 'mithril';
import 'semantic-ui-css/semantic.min.css';

class App {
    view() {
        return m("h2", "hello world");
    }
}

m.mount(document.body, App);