import React from 'react';
import styles from './opportunities.module.scss';

import SectionHeading from '../section-heading';
import Card from '../card';

const Opportunities = () => {
  const opportunities = [
    {
      title: 'Для студентів',
      description: `KSU24 - інструмент для покращення навчального процесу
                  студентів, що містить інформацію про розклад, новини
                  університету, корпоративний чат для спілкування, довідник з
                  контактами викладачів, опитування та зворотній зв'язок від
                  адміністрації, доступ до документів і перегляд оцінок в
                  журналі та заліковій книжці.`,
      image_url: '/images/for-students.jpg',
      image_alt: 'Зображення студента',
    },
    {
      title: 'Для викладачів',
      description: `KSU24 - надійний сервіс для оптимізації роботи викладачів, що
                  допомагає швидко та зручно отримувати доступ до інформації про
                  студентів, складати журнали оцінювання та присутності,
                  планувати свої заняття та створювати індивідуальні плани.`,
      image_url: '/images/for-teachers.jpg',
      image_alt: 'Зображення вчителя',
    },
    {
      title: 'Для адміністрації',
      description: `KSU24 - ефективний інструмент для оптимізації роботи
                  адміністрації, який надає можливість швидко та зручно
                  отримувати доступ до інформації про студентів і викладачів,
                  контролювати навчальний процес, стежити за фінансовими
                  показниками університету, а також спілкуватися з колегами та
                  ухвалювати рішення.`,
      image_url: '/images/for-admins.jpg',
      image_alt: 'Зображення адміністраторів',
    },
  ];

  return (
    <div className={styles.opportunities}>
      <SectionHeading heading={'Можливості'} />
      <div className={styles.opportunitiesItemList}>
        {opportunities.map((opportunity, index) => (
          <Card
            key={index}
            title={opportunity.title}
            description={opportunity.description}
            image_url={opportunity.image_url}
            image_alt={opportunity.image_alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
