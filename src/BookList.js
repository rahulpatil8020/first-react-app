import React from 'react';
import './BookList.css';
function BookList() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    className='image'
    src='https://images-na.ssl-images-amazon.com/images/I/51wnYZiXLcL._SX324_BO1,204,203,200_.jpg'
    alt=''
  />
);

const Title = () => <h1>The Girl Next Door</h1>;

const Author = () => <h4>Arpit Vageria</h4>;

export default BookList;
