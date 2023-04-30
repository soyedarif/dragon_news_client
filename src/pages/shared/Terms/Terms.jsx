import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate officia, ab maiores porro aperiam voluptas? Rem et eligendi nobis sit nesciunt tenetur repudiandae temporibus aliquam, explicabo illo vitae non, praesentium, dignissimos quos minus fuga nihil molestias quod commodi eius aliquid? Tempore dignissimos iure porro rerum eius perferendis reprehenderit quos?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;