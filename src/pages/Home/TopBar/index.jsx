import React from 'react';
import { 
    Button
} from 'Component';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                这是TopBar
                <Button>i'm a styled button</Button>
            </div>
        );
    }
}

export default TopBar;