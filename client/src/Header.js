import React from 'react';

function Header({ approvers, quorum }) {
    return (
        <header>
            <ul>
                <li>Approvers: </li>
                {approvers.map(item => 
                <ol key={item}>{item}</ol>)}
                <li>Quorum: {quorum}</li>
            </ul>
        </header>
    );
}

export default Header;
