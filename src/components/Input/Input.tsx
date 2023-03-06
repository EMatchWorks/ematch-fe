import { useState } from 'react';
import styles from './Input.module.scss';
type InputProps = {
  type: string;
  value: string;
  name: string;
  setInput: Function;
  error: Boolean;
  errorText?: string;
  children?: string;
};

const Input = (props: InputProps) => {
  const [focus, setFocus] = useState({
    span: '',
    input: '',
  });
  return (
    <div className={styles.container}>
      <span className={focus.span + ' ' + (props.error ? styles.error : '')}>
        {props.children}
      </span>
      <input
        className={focus.input + ' ' + (props.error ? styles.error : '')}
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={(e) => props.setInput(e.target.value)}
        onFocus={() =>
          setFocus({
            span: styles.focus,
            input: styles.focus,
          })
        }
        onBlur={() =>
          props.value
            ? setFocus({
                span: styles.focus,
                input: '',
              })
            : setFocus({
                span: '',
                input: '',
              })
        }
      />
      {props.errorText ? (
        <span
          className={styles.errorText + ' ' + (props.error ? styles.error : '')}
        >
          {props.errorText}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
