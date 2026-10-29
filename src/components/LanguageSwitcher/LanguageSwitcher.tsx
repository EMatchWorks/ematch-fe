import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';
import { SupportedLanguage } from '../../i18n';

const LANGUAGES: { code: SupportedLanguage; flag: string }[] = [
  { code: 'uk', flag: '🇺🇦' },
  { code: 'en', flag: '🇬🇧' },
  { code: 'ru', flag: '⚓' },
];

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current =
    LANGUAGES.find((lang) => lang.code === i18n.resolvedLanguage) ??
    LANGUAGES[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const selectLanguage = (code: SupportedLanguage) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        title={t('profile.language.title')}
      >
        <span className={styles.flag}>{current.flag}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={
                styles.option +
                (lang.code === current.code ? ' ' + styles.active : '')
              }
              onClick={() => selectLanguage(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span>{t(`profile.language.${lang.code}`)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
