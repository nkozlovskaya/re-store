import React from 'react';
import BookListContainer from '../book-list';
import ShoppingCartTable from '../shoping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};
export default HomePage;