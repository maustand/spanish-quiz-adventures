import { memo } from 'react';
import styles from './loaderSpinner.module.css'

function LoaderSpinner() {
  return (
    <div className="position-fixed top-50 start-50">
      <div className={`spinner-grow ${styles.spinnerSize}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default memo(LoaderSpinner);