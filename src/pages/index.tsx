import ExperienceBar from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import React from "react";

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <section >
        <div>
        <Profile />
        <CompleteChallenges />
        <Countdown />
        </div>
        <div>
        <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
