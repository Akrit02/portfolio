import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Project1 from '../../public/images/projects/ecommerce-app.png'
import Project2 from '../../public/images/projects/news-app.png'
import Project3 from '../../public/images/projects/spotify-clone.png'
import Project4 from '../../public/images/projects/weather-app.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto '
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base '>{type}</span>
        <Link href={link} target='_blank' className='
        hover:underline underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
          sm:px-4 sm:text-base
          '>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light  p-6 relative xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      ' />
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='
        hover:underline underline-offset-2' >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className=' w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className=' text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>

        </div>
      </div>
    </article>
  )
}



const projects = () => {
  return (
    <>
      <Head>
        <title>Akrit Ujjainiya | Project</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title="eCommerce Web Application"
                img={Project1}
                summary="Developed a responsive and feature-rich eCommerce web application from scratch using React and Redux-Saga for efficient state management and side effects. Implemented key functionalities such as:
Product listing with images fetched from a mock backend (JSON Server), Add to Cart, quantity controls, and real-time total price calculation, User login system with session persistence using localStorage, Styled using Bootstrap for a clean, mobile-responsive UI, UI inspired by Solo Stove’s cart design for a modern shopping experience"
                link="https://github.com/Akrit02/eCommerce-app.git"
                github="https://github.com/Akrit02/eCommerce-app.git"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="WeatherApp"
                img={Project4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/Akrit02/WeatherApp.git"
                github="https://github.com/Akrit02/WeatherApp.git"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Spotify Clone"
                img={Project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/Akrit02/spotify-clone.git"
                github="https://github.com/Akrit02/spotify-clone.git"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="NewsApp"
                img={Project2}
                summary="A responsive news application that fetches real-time news articles from NewsAPI based on category and language preferences. The app features infinite scrolling, dynamic URL-based filters using useSearchParams, and seamless navigation between categories like Politics, Crime, Education, Technology, Sports, and more.

Key Features:

🔍 Category-Based Filtering: Users can switch between different news categories with dynamic routing.

🌐 Multi-language Support: Toggle between languages like Hindi, English, Arabic, German, and Russian.

♾️ Infinite Scroll: Automatically loads more news as the user scrolls down.

📅 Latest First: News articles sorted by publish date using sortBy=publishedAt.

💡 Bootstrap UI: Clean, mobile-responsive layout with modern styling."
                link="https://github.com/Akrit02/NewsApp.git"
                github="https://github.com/Akrit02/NewsApp.git"
                type="Featured Project"
              />
            </div>

            {/* <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Crypto Screener Application"
                img={Project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Crypto Screener Application"
                img={Project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
