import HeaderLogo from '@/assets/header-logo.svg';
import BarDecoration from '@/components/BarDecoration';
import Button from '@/components/Button';
import CornerDecoration from '@/components/CornerDecoration';
import Section from "@/components/Section";
import TimelineCard from '@/components/TimelineCard';
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import { RiGroupLine } from "react-icons/ri";

import Carousel from '@/components/Carousel';
import ParallaxBackground from '@/components/ParallaxBackground';
import { MdOutlinePersonAddAlt } from "react-icons/md";

import brownLogo from '@/assets/colleges/brown.png';
import gtLogo from '@/assets/colleges/gt.svg';
import harvardLogo from '@/assets/colleges/harvard.png';
import iitLogo from '@/assets/colleges/iit.jpeg';
import pennLogo from '@/assets/colleges/penn.png';
import risdLogo from '@/assets/colleges/risd.svg';
import ugaLogo from '@/assets/colleges/uga.png';
import yaleLogo from '@/assets/colleges/yale.png';

const logos = [harvardLogo, brownLogo, yaleLogo, pennLogo, gtLogo, ugaLogo, risdLogo, iitLogo]



export default function Home() {
  return (
    <>
      <Section className="py-16 overflow-hidden" backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-65 -z-10' />
        <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
        <ParallaxBackground />
      </>}>
        <Image src={HeaderLogo} alt="Paragon Logo" className='mb-6 w-[600px]' />
        <div>
          <Text className='max-w-[500px] leading-normal mb-6'>
            Bringing students to the forefront
            of science and tech policy
          </Text>
          <Text className='max-w-[600px] leading-normal'>
            Shape the future of technology through semester
            projects with state and local governments
          </Text>
          <Button className='mt-8'>Join our interest list</Button>
        </div>
      </Section>
      <Section className='overflow-y-hidden'>
        <BarDecoration />
        <Subheading>About Paragon</Subheading>
        <Text className='max-w-[700px]'>The Paragon Fellowship aims to connect students with opportunities in the science and tech policy space. Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement. The fellowship is a hands-on, project-based experience, designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
      </Section>
      <Section>
        <Subheading className='mb-12'>What does a project look like?</Subheading>
        <div>
          <TimelineCard className="py-14" first>
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            <CornerDecoration icon={RiGroupLine} uniqueId='pages' />
          </TimelineCard>
          <TimelineCard className="py-14">
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            <CornerDecoration style={{ width: "100%" }} uniqueId='text' className="absolute top-6 right-6 w-[380px]">
              <text x="100%" y="10%" fontSize="16" textAnchor='end' fill="white">
                <tspan x="100%" dy="0">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR</tspan>
                <tspan x="100%" dy="1.2em">ADIPISCING, SED DO EIUSMOD TEMPOR</tspan>
                <tspan x="100%" dy="1.2em">INCIDIDUNT UT LABORE ET MAGNA ALIQUA.</tspan>
                <tspan x="100%" dy="1.2em">UT AD MINIM VENIAM, QUIS NOSTRUD</tspan>
                <tspan x="100%" dy="1.2em">EXCEPTEUR SINT OCCAECAT CUPIDATAT</tspan>
                <tspan x="100%" dy="1.2em">EXERCITATION ULLAMCO LABORIS UT</tspan>
                <tspan x="100%" dy="1.2em">ALIQUIP EA COMMODO CONSEQUAT.</tspan>
                <tspan x="100%" dy="1.2em">IN VOLUPTATE VELIT ESSE CILLUM</tspan>
                <tspan x="100%" dy="1.2em">DOLORE EU FUGIAT NULLA PARIATUR.</tspan>
                <tspan x="100%" dy="1.2em">DUIS IN REPREHENDERIT</tspan>
              </text>
            </CornerDecoration>
          </TimelineCard>
          <TimelineCard className="py-14">
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
          <TimelineCard className="py-14" last>
            <Subheading className='mb-0'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
        </div>
      </Section>
      <Section>
        <Subheading>What is the impact?</Subheading>
        <Text>Currently, opportunities for students to explore science and tech policy are limited and highly competitive, creating a barrier of entry. By connecting students with state and local governments, we empower them to chart a career path in tech policy and address the most pressing issues in their communities. Our success will cultivate the next generation of science and tech policy leaders.</Text>
      </Section>
      <Section>
        <Subheading>Who are we?</Subheading>
        <Text>Started by two former <a href="https://www.whitehouse.gov/ostp/">White House OSTP</a> interns, we saw a gap between students interested in tech policy issues and local governments with an increasing need to build tech capacity. Our objective is to make science and tech policy research more accessible to students of any background and to create a supportive community among those interested in exploring this intersection.</Text>
        <div className='flex my-6'>
          <Button style='secondary'><MdOutlinePersonAddAlt className="mr-2" /> Join our organizing team</Button>
          <Button style='noBorder' className='ml-4'>Team Directory</Button>
        </div>
        <Carousel className='mt-10' speed={0.5}>
          {
            logos.map((logo, index) => (
              <Image key={index} src={logo} alt="Logo" className='h-full mr-14 w-32 object-contain grayscale' />
            ))
          }
        </Carousel>
      </Section>
      <Section className='flex items-center justify-center flex-col'>
        <Subheading className='mb-2'>Let&lsquo;s get started.</Subheading>
        <Text className='uppercase'>Start making policy impact today. Get on our mailing list</Text>
        <Button className='mt-8'>Join our interest list</Button>
      </Section>
    </>
  );
}
