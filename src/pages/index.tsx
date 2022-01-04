/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from './home.module.scss';
import { Fragment } from "react";
import SubscribeButton from "../components/SubcribeButton";

export default function Home() {
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
            <span>for $9,90</span>
          </p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="logo" />
      </main>
    </Fragment>
  )
}
