import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Wrapper className='sectioon'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline' />
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Link to='/products' className='btn' >
        All products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    position: relative;
    display: block;
    width: 148px;
    margin: 0 auto;
    top: -40px;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
