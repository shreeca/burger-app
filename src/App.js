import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";
import Modal from "./components/UI/Modal/Modal";


class App extends Component {
    render() {
        return (
            <div>
                {/*// Wrapping with layout file*/}
                <Layout>
                        <BurgerBuilder/>
                </Layout>
                <Modal>
                    <div
                        style={{color:'black'}}
                    >
                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;
