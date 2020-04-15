import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";


class App extends Component {
    render() {
        return (
            <div>
                {/*// Wrapping with layout file*/}
                <Layout>
                        <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
