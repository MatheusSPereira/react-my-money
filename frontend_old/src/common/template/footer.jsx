import React from 'react';

const year = new Date()

export default props => (
    <footer className="main-footer">
        <strong>
            Copyright &copy; {year.getFullYear()}
            <a href="https://www.google.com/" target='_blank'> Google</a>.
        </strong>
    </footer>
)