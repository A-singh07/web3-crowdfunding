import { useContext } from 'react';
import { RegisterFundContext } from '../../context/AllContext';

import styles from './registerFundLayout.module.css';

const LinkWallet = () => {
  const { formData } = useContext(RegisterFundContext);

  return (
    <div className={styles.walletContainer}>
      <p className={styles.info}>
        Collected funds will be transfered to the following wallet:
      </p>
      <p className={styles.walletAddr}>
        Address: <span>{formData.rcpAddr}</span>
      </p>
    </div>
  )
}

export default LinkWallet
