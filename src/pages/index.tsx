/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import Head from "next/head";
import styles from './home.module.scss';
import { Fragment } from "react";
import SubscribeButton from "../components/SubcribeButton";
import { stripe } from '../services/stripe';

interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <Fragment>
      <Head>
        <title>Página inicial</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome!</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount} month </span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="logo" />
      </main>
    </Fragment>
  )
}

export const getStaticProps:GetStaticProps = async () =>{
  const prices = await stripe.prices.retrieve('price_1Jr9TgHsCOjRd6w5BkHMaqfX', {
    expand: ['product']
  });

  const product = {
    priceId: prices.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(prices.unit_amount / 100)
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}