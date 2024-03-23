import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>ParhaM | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>PARHAM</h2>
          <div className='flex'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed reiciendis officiis mollitia, consequatur adipisci earum quisquam qui ad accusantium vitae non unde optio sit, magnam voluptatem deleniti nesciunt quae.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            INFINITE TECH
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (2013 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, nostrum soluta voluptatem sequi similique officia sunt, odio, culpa nemo repellat dolorum dolores. Iste explicabo, ipsum harum eum excepturi deserunt.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dolor iste pariatur aperiam porro cum cumque adipisci commodi nisi. Nulla quasi vero libero. Adipisci nesciunt earum, nisi sit facilis nemo!
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate nobis minus facere molestias, fugit quas consequuntur soluta expedita quidem nemo perferendis pariatur cupiditate, dolore quod! Nihil quidem cupiditate aspernatur?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia nobis porro fugit. Delectus molestiae, dolorum ex explicabo aliquid vitae ipsum nostrum? Veniam totam dolorum pariatur libero accusantium vel adipisci?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia consectetur sapiente temporibus dolores neque dolorum reprehenderit dolorem iusto in? Officiis tenetur ea quod exercitationem blanditiis, omnis quibusdam voluptatum expedita!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cupiditate voluptas illo harum excepturi nemo, ipsa ullam praesentium atque eligendi corrupti explicabo facere, eaque quis consequatur? Et iste deserunt eius!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur explicabo iure officia voluptas? Saepe aperiam illum, modi vero quos itaque nostrum eveniet veritatis nemo deleniti. Sint dolorum suscipit nostrum!
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
