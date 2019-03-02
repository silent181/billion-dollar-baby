import React from 'react';
import styles from './index.scss?module';
import TopBar from './TopBar';
import LeftMenu from './LeftMenu';
import Content from './Content';
import ConfigPage from './ConfigPage';
// import './index.scss';

class Home extends React.Component {
    render() {
        return (
            <>
                <TopBar />
                <LeftMenu />
                <Content />
                <ConfigPage />
            </>
        );
    }
}

export default Home;