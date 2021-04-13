import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.Spinner}>
      <Loader
        type="ThreeDots"
        color="#d6bb42"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Spinner;
