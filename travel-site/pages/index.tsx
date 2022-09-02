import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import Banner from './Banner'
import { sanityClient, urlFor } from '../sanity-file'
import { Post } from '../typings'
import { Route, Router } from 'react-router-dom'


interface Props {
  post:[Post]
}

export default function Home({post}: Props) {
  return (
      <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav  />
        <Banner  />
      </main>

     
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    author ->{
      name,
      image
    },
    'allcategories':*[
      _type=="category"
    ],
  categories,
  description,
  mainImage
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
