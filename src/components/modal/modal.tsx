import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5/index';

import { fade, mix, slideY } from '@/lib/motion';
import { cn } from '@/helpers/styles';

import styles from './modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  show: boolean;
  wide?: boolean;
}

export function Modal({ children, onClose, show, wide }: ModalProps) {
  const variants = {
    modal: mix(fade(), slideY(20)),
    overlay: fade(),
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            animate="show"
            className={styles.overlay}
            exit="hidden"
            initial="hidden"
            variants={variants.overlay}
            onClick={onClose}
            onKeyDown={onClose}
          />
          <div className={styles.modal}>
            <motion.div
              animate="show"
              className={cn(styles.content, wide && styles.wide)}
              exit="hidden"
              initial="hidden"
              variants={variants.modal}
            >
              <button className={styles.close} onClick={onClose}>
                <IoClose />
              </button>

              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
