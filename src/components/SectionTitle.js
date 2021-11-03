import React from 'react';
import s from './Statistic.module.css'

function SectionTitle({children}) {
    return (
        <div className={s.container}>
            <h1>Please leave feedback </h1>
            {children}
        </div>
    );
}

export default SectionTitle;