import React from 'react';

import styles from "./PieLabel.module.css";

const PieLabel = props => {
    //props
    const { name, color } = props;
    return (
        <div className={styles.pieLabel}>
            <span className={styles.labelColorBar} style={{backgroundColor: color}}></span>
            <span className={styles.labelText}>{name}</span>
        </div>
    );
};

export default PieLabel;