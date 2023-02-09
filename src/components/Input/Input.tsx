import { useState } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  type: string;
  value: string;
  name: string;
  setInput: Function;
  children?: string;
};

const Input = (props: InputProps) => {
  const [focus, setFocus] = useState({
    span: '',
    input: '',
  });
  return (
    <div className={styles.container}>
      <span className={focus.span}>{props.children}</span>
      <input
        className={focus.input}
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
    </div>
  );
};

export default Input;
