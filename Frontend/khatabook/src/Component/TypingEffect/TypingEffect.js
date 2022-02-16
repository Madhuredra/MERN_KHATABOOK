import React,{ Component } from 'react';
import Typed from 'react-typed';

class TypingEffect extends Component {
    render() {
        return (
        
            <Typed
            strings={['KHATABOOK']}
            typeSpeed={40}
            backSpeed={40}
            loop
            style={{color:"blue"}}
            >
            </Typed>
            
        );
    }
}

export default TypingEffect