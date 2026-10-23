import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import ZLayoutSection from '../components/ui/ZLayoutSection';
import ParallaxDivider from '../components/ui/ParallaxDivider';
import Button from '../components/ui/Button';

const pastors = [
  { 
    name: "Ptr. Tanny", 
    role: "Bishop / Corporate President", 
    image: "/images/leadership/pastor-tanny.jpg", 
    bio: [
      "The President, Chairman of the Board, and the Bishop of Jesus Our Hope International Assemblies Inc. Ptr. Tanny has dedicated over 40 years of his life to the ministry. He has led churches in the United States of America and Japan.",
      "He also serves as the Chairman Emeritus of Jesus Our Hope International Assemblies (National), heading almost 30 churches all over the country. Today, he continues to guide pastors and preachers in their vocations. His technical knowledge in biblical studies is key in church administration and ministry growth of our network churches."
    ], 
    position: "object-center" 
  },
  { 
    name: "Ptr. Jun", 
    role: "Lead Pastor", 
    image: "/images/pastors/ptr jun.jpg", 
    bio: [
      "A businessman by profession, Ptr. Jun serves as the Lead Pastor and Chief Operating Officer (COO) of Jesus Our Hope International Assemblies, Inc. (JOHIA) Cubao. He is currently pursuing his post-graduate studies; Master of Divinity in Pastoral Studies at the Asian Theological Seminary.",
      "An alumnus of the University of Santo Tomas, where he earned a bachelor’s degree in Music Education, he brings a multidisciplinary approach to church leadership. His approach influences the day-to-day operations of JOHIA and has contributed to the church's revival after the pandemic. His innovative methods have led to significant growth in membership and more people coming to Christ through intensive Bible-centered teaching and non-formal, non-traditional activities."
    ], 
    position: "object-center" 
  },
  { 
    name: "Ptr. Jess", 
    role: "Couples Ministry", 
    image: "/images/pastors/Jess.jpg", 
    bio: "A proud member of the Philippine Civil Service specializing in local government legislation; Ptr. Jess has dedicated decades of his life to enriching families and couples through his focus ministry: Pillars of Fire. He and his wife spearheads the programs for married couples which resulted to stable and happy family lives for the members of JOHIA.", 
    position: "object-top" 
  },
  { 
    name: "Ptr. Derrick", 
    role: "Worship Ministry", 
    image: "/images/pastors/docdek.jpg", 
    bio: "A Physician by profession, Dr. Derrick Anselmo serves as the Worship Pastor and Co-Music Director of Jesus Our Hope International Assemblies Inc. – Cubao. His decades in the worship ministry honed other worship ministers to love and worship God and to inspire others to do the same. His inspiring music touched the lives of many and are still available in various streaming platforms. On several occasions, his medical profession had been the church’s healing arm in medical outreaches all over the Philippines.", 
    position: "object-top" 
  },
  { 
    name: "Ptr. Arken", 
    role: "Wildfire (Youth)", 
    image: "/images/pastors/ken.jpg", 
    bio: "Our Youth Pastor. Having dedicated almost the entirety of his life to ministry; at a young age, Ptr. Arken has ministered in discipleship trainings and have taken care of various youth groups. He and his wife now heads the Wildfire, a youth based ministry in JOHIA centered in the equipping and enrichment of the capabilities of our youth while getting to know Jesus and shaping the future national and church leaders of tomorrow.", 
    position: "object-top" 
  },
  { 
    name: "Ptr. Marc", 
    role: "School of Champions", 
    image: "/images/pastors/marc.jpg", 
    bio: "Another proud member of the Philippine Civil Service specializing in national level legislation; Ptr. Marc hails from the University of the Philippines Diliman and practices Public Administration. He is also the current Dean of the JOHIA School of Champions which is the primary educational program of the church; teaching a curriculum-based; proven practices in getting to know Christ, going deeper with one’s relationship with God and being fruitful by evangelizing to our world. He is also the current pastor in charge for JOHIA’s outreach program: Tugon ng Puso, a scholarship fund dedicated to helping struggling youth through financial aid. He is also the current Chief Finance Officer of JOHIA – Cubao.", 
    position: "object-top" 
  },
  { 
    name: "Ptr. Chips", 
    role: "LinC (Young Adults)", 
    image: "/images/pastors/chips.jpg", 
    bio: "A specialist in the business process outsourcing industry, Ptr. Chips currently heads LinC or Life Incorporated; the primary program of the church catering to young adults and professionals. His decades of dedication has yielded various god-fearing individuals who has shone in various industries. He and his team now focuses on ushering our rising and emerging workforce and leaders to knowing Christ and sharing the gospel in the marketplace.", 
    position: "object-top" 
  },
  { 
    name: "Ptr. Marvin", 
    role: "Tugon ng Puso (Scholars)", 
    image: "/images/pastors/ptr-marvin.jpg", 
    bio: "An Educator from the University of the Philippines Diliman. Ptr. Marvin has shaped the lives of various leaders in the field of Human Kinetics. He’s currently part of the roster of preachers of JOHIA Cubao. His insights in the leadership of the church has yielded various successful programs including the School of Champions, Tugon ng Puso and various outreach programs that the church has been undertaking during the past years.", 
    position: "object-top" 
  },
  { 
    name: "Ptr. Glen & Wendy", 
    role: "International Missions", 
    image: "/images/leadership/pastor-glen-wendy.jpg", 
    bio: [
      "Pastors Glen Gazzingan and Wendy Umali-Gazzingan are a husband and wife team serving as missionary/pastors to Japan. Glen has been involved in missions since his single years and worked in an advertising company while Wendy has been a worship leader since her youth and a teacher by profession.",
      "After getting married, they pursued missions training at World Mission International in the Philippines. They are currently serving as missionary pastors to iHOPE Community Yokohama, Japan since 1999. From 2011 to 2014, their community actively participated in rebuilding efforts in the Tohoku region after the Japan tsunami/earthquake in 2011. Today, they continue their ministry together in Japan, reaching out to the local community by offering free English lessons to Japanese residents, building relationships, and creating opportunities to connect with people. They equip and encourage their congregation to discover their purpose and have an impact in the community."
    ], 
    position: "object-center" 
  },
  { 
    name: "Ptr. Charlie", 
    role: "Consulting Pastor", 
    image: "/images/leadership/pastor-charlie.jpg", 
    bio: [
      "Considered to be the founder of various mega churches all around the Philippines, Ptr. Charlie serves as a consulting pastor of Jesus Our Hope International Assemblies - Cubao.",
      "His expertise in church planting, church growing, and spiritual liberation and growth has led many missions to successful breakthroughs in communities that yielded thousands to gather as part of the body of Christ."
    ], 
    position: "object-center" 
  },
];

const admins = [
  { name: "Jeanette Melchor", role: "Church Administrator", image: "/images/admins/nay-jeannette.jpg", position: "object-top" },
  { name: "Cristy Satuna", role: "Finance Officer", image: "/images/admins/tita-cristy.jpg", position: "object-top" },
  { name: "Jhay Hernandez", role: "Facilities & Operations", image: "/images/admins/kuya-jhay.jpg", position: "object-top" },
  { name: "Marissa Jaylo", role: "Facilities & Operations", image: "/images/admins/ate-marissa.jpg", position: "object-top" },
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark">
      <PageMeta title="About Us" />

      {/* Hero */}
      <section id="about-us-header" className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-fluid-h1 font-extrabold font-heading text-shimmer mb-6">
              Our Culture
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Rooted in Christ, Growing in Community
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Identity */}
      <SectionWrapper id="about-us-identity" className="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light text-center py-24">
        <AnimatedSection className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-12">
            A family of believers dedicated to advancing God's Kingdom in Cubao and beyond.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left w-full mt-12 px-4 md:px-0">
            <div className="border-l-4 border-brand-yellow pl-8 py-2">
              <h3 className="font-heading font-extrabold text-2xl text-brand-yellow mb-4 tracking-wider uppercase">Mission</h3>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sans leading-relaxed font-light">
                To Love and Honor God, Raise Christ-Committed Followers, and Live on Purpose
              </p>
            </div>
            
            <div className="border-l-4 border-brand-yellow pl-8 py-2">
              <h3 className="font-heading font-extrabold text-2xl text-brand-yellow mb-4 tracking-wider uppercase">Vision</h3>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sans leading-relaxed font-light">
                People Loving God. People Inspiring Change. People With Hope
              </p>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Core Values */}
      <section id="about-us-core-values" className="bg-[#111] py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <img loading="lazy" src="/images/general/New Core values.png" alt="Core Values" className="w-full max-w-5xl mx-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" />
          </AnimatedSection>
        </div>
      </section>


      {/* Meet Our Pastors */}
      <section id="about-us-meet-pastor-header" className="bg-background-dark pt-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 text-center mb-16">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-light mb-4 drop-shadow-md">Meet Our Pastors</h2>
            <p className="text-gray-400 font-sans text-xl max-w-2xl mx-auto">
              Dedicated servant leaders guiding our community with biblical truth and care.
            </p>
          </AnimatedSection>
        </div>

        {/* Full-bleed Edge-to-Edge Pastoral Assembly Banner */}
        <div className="w-full mb-16">
          <ParallaxDivider 
            imageSrc="/images/leadership/pastors-assembly-stage.jpg" 
            alt="JOHIA Pastoral Assembly" 
            height="h-[500px] md:h-[620px]" 
            imagePosition="center 42%" 
            imageClassName="grayscale-0"
            overlayClassName="bg-black/20"
          />
        </div>

        <div className="flex flex-col">
          {pastors.map((pastor, index) => (
            <ZLayoutSection 
              key={pastor.name}
              id={`pastor-${index}`}
              title={pastor.name}
              badge={pastor.role}
              description={
                Array.isArray(pastor.bio) ? (
                  pastor.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                ) : (
                  <p>{pastor.bio}</p>
                )
              }
              imageSrc={pastor.image}
              imageAlt={pastor.name}
              reverse={index % 2 !== 0}
              texture={index % 2 === 0 ? 'dark' : 'none'}
              imageClassName={pastor.position}
              className="min-h-[50vh] py-12 md:py-16"
            />
          ))}
        </div>
      </section>

      {/* Meet Our Admins */}
      <section id="about-us-meet-admins" className="bg-[#111] py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light mb-4 drop-shadow-md">Meet Our Admins</h2>
            <p className="text-gray-400 font-sans text-xl max-w-2xl mx-auto">
              The hardworking team behind the scenes ensuring our operations run smoothly and excellently.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {admins.map((admin, index) => (
              <AnimatedSection 
                key={admin.name} 
                variant="rise" 
                delay={index * 0.1}
                className="w-full"
              >
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg border border-white/10 bg-[#1A1A1A] h-full">
                  <img loading="lazy" src={admin.image} alt={admin.name} className={`w-full h-full object-cover ${admin.position || 'object-top'} grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                    <h3 className="text-2xl font-bold font-heading text-brand-yellow mb-1">{admin.name}</h3>
                    <p className="text-white/80 font-sans text-sm font-medium">{admin.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="about-us-history" className="bg-[#eaeaea] dark:bg-background-dark py-24 text-center border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
        <AnimatedSection className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-shimmer-dark mb-8 drop-shadow-sm">
            Our Journey
          </h2>
          <p className="text-text-dark dark:text-text-light font-sans text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to a thriving spiritual family, God's faithfulness has been the anchor of JOHIA Cubao. We continue to build upon the legacy of faith, looking forward to the greater things He has in store for our community.
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section id="about-us-cta-programs" className="bg-background-footer py-24 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-30 z-0"></div>
        <AnimatedSection className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light mb-10 drop-shadow-md">Ready to take the next step?</h2>
          <Button variant="solid" href="/programs" className="!bg-brand-yellow !text-text-dark hover:!bg-white px-10 py-4 text-lg shadow-[0_0_20px_rgba(251,176,59,0.3)] transition-all">
            Explore Programs
          </Button>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
