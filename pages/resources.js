/** @format */

// import type { NextPage } from 'next'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Image from "next/image";

const Resource = ({ records }) => {
  return (
    <div className={styles.mainDiksha}>
      <Script
        type="module"
        src="https://js.withorbit.com/orbit-web-component.js"
      />
      <Head>
        <title>🚀 Resources</title>
        <meta name="description" content="Handpicked from the Internet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>nae raste │ ✍️</h1>

        <orbit-reviewarea
          color="pink"
          style={{
            width: "100%",
          }}
        >
          {records.map((_, index) => {
            return (
              <orbit-prompt
                key={index}
                question={records[index].fields["Question"]}
                answer={records[index].fields["Answer"]}
                answer-attachments={
                  records[index].fields.hasOwnProperty("AnswerImage") === true
                    ? [records[index].fields["AnswerImage"][0].url]
                    : null
                }
              ></orbit-prompt>
            );
          })}
        </orbit-reviewarea>
        <a href="https://andymatuschak.org/prompts/">
          How to write good prompts?
        </a>
      </main>
    </div>
  );
};

//Get server props is dope!!

export async function getServerSideProps() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const TABLE_KEY = process.env.NEXT_PUBLIC_TABLE_KEY;
  const res = await fetch(
    `https://api.airtable.com/v0/${TABLE_KEY}/Ujjwal?maxRecords=20&view=Grid%20view`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );

  const records = await res.json();

  return {
    props: { records: records.records }, // will be passed to the page component as props
  };
}

export default Resource;
