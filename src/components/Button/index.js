import React from "react";
import {Link} from 'gatsby';
import './button.scss';

const Button= ({title}) => (
    <Link
        className='button'
        to={`?filter=${title}`}
    >
        {title}
    </Link>
);

export default Button;