import React from 'react';
import styles from './Pagination.module.css';
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.pagination}>
      <button 
        className={styles.arrowButton} 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        <img src={leftArrow} alt='leftarrow' />
      </button>
      <span className={styles.pageNumber}>{currentPage}</span>
      <button 
        className={styles.arrowButton} 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
       <img src={rightArrow} alt='rightArrow' />
      </button>
    </div>
  );
}

export default Pagination;
