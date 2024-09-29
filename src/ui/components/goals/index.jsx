import React from 'react';
import styles from './goals.module.scss';
import Card from '../card';
import SectionHeading from '../section-heading';

const Goals = () => {
  const goals = [
    {
      title: 'Забезпечення якості',
      description:
        'Функціонування системи внутрішнього забезпечення якості вищої освіти в університеті',
    },
    {
      title: 'Контроль обов’язків',
      description:
        'Забезпечення контролю за виконанням своїх обов’язків усіма сторонами освітнього процесу',
    },
    {
      title: 'Зворотній зв’язок',
      description:
        'Формування зворотного зв’язку між студентами, викладачами і адміністрацією університету',
    },
    {
      title: 'Досягнення',
      description:
        'Відображення особистих та професійних досягнень кожного студента',
    },
    {
      title: 'Прозорість',
      description: 'Забезпечення відкритості та прозорості освітнього процесу',
    },
  ];

  return (
    <div className={styles.goals}>
      <SectionHeading heading={'Введення KSU24 спрямовано на'} />
      <div className={styles.goalsItemList}>
        {goals.map((goal, index) => (
          <Card key={index} title={goal.title} description={goal.description} />
        ))}
      </div>
    </div>
  );
};

export default Goals;
