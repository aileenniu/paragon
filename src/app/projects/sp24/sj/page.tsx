import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function SJ() {
    return (
      <>
        <TopBar />
        <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
        </>}>
          <div className="flex flex-col justify-end h-full pb-4">
            <Text className='md:text-5xl text-3xl uppercase font-semibold'>San Jose, CA</Text>
            <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Public input integrity in<br></br>the midst of AI</Text>
          </div>
          <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
        </Section>
        <br /> 
        <Section>
          <Subheading>BACKGROUND</Subheading>
          <Text>
          The City of San José, at the heart of Silicon Valley, is a well-known frontier for technological innovation
and advancement, including AI and technology policy. This project addressed the challenge of identifying
and mitigating the misuse of AI-generated content in the public input process for the City of San José.
Through iterative literature reviews, case study analyses of existing regulations at various governmental
levels, and regular consultations with City officials, AI policy experts, and technologists, the Paragon
Policy Fellowship team developed comprehensive policy guidelines and procedural recommendations.
          </Text>
        </Section>
        <Section>
          <Subheading>METHODOLOGY</Subheading>
          <Text>
          Through iterative literature reviews, case study analyses of existing regulations at various governmental
          levels, and regular consultations with City officials, AI policy experts, and technologists, the 
          team developed comprehensive policy guidelines and procedural recommendations. The students utilized a variety of 
          resources to develop a framework to maintain integrity of public input processes in the face of proliferating AI. 
          </Text>
        </Section>

        <Section>
          <Subheading>PROBLEM AND EXPECTATIONS</Subheading>
          <Text>
          → How can the City of San José identify false AI-generated content in public input? →
What are best practices for the City of San José to mitigate false AI-generated public
input?
          </Text>
          <br />
          <Text>
          • One main goal for the team was to create a presentation for the City of San José City Council Information Technology organization stakeholders.
          </Text>
          <Text>
          • Technological Infrastructure: This pillar outlines guidelines for regulation, safe implementation, and
          architectural standards that technology goods and services should adhere to during development and
          maintenance.
          </Text>
          <Text>
          • Communication and Cooperation: This pillar outlines the shared responsibilities for collaboration
          between the City of Boston and contractors in order to build and maintain technological systems
          effectively.
          </Text>
        </Section>
  
        <Section>
          <Subheading>DELIVERABLES</Subheading>
          <Text>
          The project culminated in presentations to the San José City Council Information Technology department
            and the Paragon Policy Spring 2024 community, along with a detailed Policy Guidelines Manual. Key
            proposed solutions include implementing new requirements and technologies for eComment user
            verification and email submission verification, as well as conducting brief and effective annual generative
            AI skills training for City staff managing public comment submissions. This initiative aims to enhance the
            integrity of public input processes in the face of evolving AI technologies.
          </Text>
        </Section>
  
        <Section>
          <Subheading>IMPACT AND FUTURE WORK</Subheading>
          <Text>
          By implementing the recommended technologies and training programs, the City of San José can
significantly enhance the integrity, security, and reliability of public input from real constituents. Future
work includes:
          </Text>
          <Text>
          1. Monitoring the effectiveness of implemented solutions.
          </Text>
          <Text>
          2. Adapting strategies as AI technologies evolve.
          </Text>
          <Text>
          3. Collaborating with other municipalities to share best practices.
          </Text>
          <Text>
          4. Exploring additional technological solutions for content verification.
          </Text>
          <Text>
          5. Developing public education initiatives on responsible AI use in civic engagement.
          </Text>
        </Section>
  
        <Section>
          <Subheading>Contributors</Subheading>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
            {[
              { name: 'Quinn Wilson', role: 'Project Lead', school: 'UC Berkeley' },
              { name: 'Anahita Srinivasan', role: 'Research Lead', school: 'MIT' },
              { name: 'Elisha Ham', role: 'Data Lead', school: 'Wellesley College' },
              { name: 'Marie Zhang', role: 'Data Lead', school: 'Wellesley College' },
              { name: 'Sarah Wu', role: 'Stakeholder Lead', school: 'Amherst College' },
              { name: 'Sofia Rodriguez', role: 'Research Lead', school: 'Wellesley College' },
              { name: 'Wanru Skuld Shao', role: 'Stakeholder/Client Lead', school: 'Northeastern University' }
            ].map((contributor, index) => (
              <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
                <Text className='text-center font-semibold'>{contributor.name}</Text>
                <SmallText className='text-center'>{contributor.role}</SmallText>
                <SmallText className='text-center'>{contributor.school}</SmallText>
              </div>
            ))}
          </div>
        </Section>
  
        <Footer>
          <FooterSection title='Our Organization'>
            <FooterLink href={""}>Apply Now</FooterLink>
            <FooterLink href='/team'>Team Directory</FooterLink>
            <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
            <FooterLink href='/faq'>FAQs</FooterLink>
          </FooterSection>
        </Footer>
      </>
    );
  }