import styles from './CreateNews.module.scss';

import { useState, useContext } from 'react';
import { Context } from '../..';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';

const CreateNews = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { newsStore } = useContext(Context);

  async function handlerFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    newsStore.createNews(title, content);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handlerFormSubmit}>
        <Input name="title" type="text" value={title} setInput={setTitle}>
          Заголовок
        </Input>
        <Textarea name="content" value={content} setInput={setContent}>
          Зміст
        </Textarea>
        <button>Додати новину</button>
      </form>
    </div>
  );
};

export default CreateNews;
