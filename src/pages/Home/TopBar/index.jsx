import React from 'react';
import styles from './index.scss?module';

console.log(1231);
class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                这是TopBadd111222
            </div>
        );
    }
}

export default TopBar;