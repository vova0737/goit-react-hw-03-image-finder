import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ pageChanger }) {
  return (
    <button type="button" className={styles.Button} onClick={pageChanger}>
      Load more
    </button>
  );
}

Button.propTypes = {
  pageChanger: PropTypes.func.isRequired,
};

export default Button;
