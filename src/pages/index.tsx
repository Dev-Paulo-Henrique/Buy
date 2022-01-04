import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton/index'
import { stripe } from '../services/stripe'

interface HomeProps{
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Bem-vindo(a)</span>
          <h1>Pet <span>Food</span> Publications.</h1>
          <p>
            Ganhe brindes para seu Pet<br />
            <span>por {product.amount}/mensal</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.gif" alt="Girl coding"/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1JHYaTCKYyhjp8iTpkhl1YQ8')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format((price.unit_amount / 100)),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}