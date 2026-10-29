import { useTranslation } from 'react-i18next';
import styles from './ConfirmDialog.module.scss';

type ConfirmDialogProps = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialog = ({
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const { t } = useTranslation();
  const resolvedConfirmLabel = confirmLabel ?? t('common.confirm');
  const resolvedCancelLabel = cancelLabel ?? t('common.cancel');

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onCancel}>
            {resolvedCancelLabel}
          </button>
          <button className={styles.confirm} onClick={onConfirm}>
            {resolvedConfirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
