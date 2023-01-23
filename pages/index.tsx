import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import red from '@/styles/Test.module.css'
import Header from '@/components/Header'
import Form from '@/components/Form'
import React, { useState } from 'react';
import Text from '@/components/Text'
import { count } from 'console'
import data from '@/public/data/data'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const [numbersOfParagraphs, setNumbersOfParagraphs] = useState<string>('');
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    let amount:number = parseInt(numbersOfParagraphs);

    if( amount <= 0 ) {
      amount = 1;
    }
    if( amount > 8 ){
      amount = 8;
    }

    setText(data.slice(0, amount));
  }

  return (
    <>
      <Head>
        <title>Cuppa Text</title>
        <meta name="Cuppa Text" content="Paragraphs from the Wikipedia about Lester Green's informations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Form handleSubmit={handleSubmit} numbersOfParagraphs={numbersOfParagraphs} setNumbersOfParagraphs={setNumbersOfParagraphs}/>
        {text.length > 0 ? <div className={styles.txt__background}>
            {text.map(
              (p, index) => (
                <Text txt={p} key={index}/>
              )
            )}
        </div > : null}
        
      </main>
    </>
  )
}
