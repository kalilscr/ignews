import Head from 'next/head'
import React from 'react'
import styles from './styles.module.scss'

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
        
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>What is Lorem Ipsum?</time>
                        <strong>What is Lorem Ipsum?</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </a>
                    <a>
                        <time>What is Lorem Ipsum?</time>
                        <strong>What is Lorem Ipsum?</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </a>
                    <a>
                        <time>What is Lorem Ipsum?</time>
                        <strong>What is Lorem Ipsum?</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </a>
                </div>
            </main>
        </>
    )
} 