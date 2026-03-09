import { JsonLd } from '@/components/common/json-ld/json-ld';
import { AboutMe } from '@/features/about/components/about-me';
import { Hero } from '@/features/about/components/hero';
import { MySkills } from '@/features/about/components/my-skills';
import { getMyJsonLd } from '@/features/about/lib/get-my-json-ld';
import { WorkExperienceSummary } from '@/features/work-experience/components/work-experience-summary';
import { Locale } from '@/i18n/locale';
import clsx from 'clsx';

const SECTION_CLASSNAME = "flex items-center justify-center";

export function generateStaticParams() {
  return Object.values(Locale).map((locale) => ({
    locale,
  }))
}

export default async function Page() {
  const myJsonLdData = await getMyJsonLd();

  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@graph": [
        myJsonLdData,
      ]
    }}/>
    {SECTIONS.map(({ key, component, className, sectionBg = false }) => (
      <section id={key} key={key} className={clsx(SECTION_CLASSNAME, className, {
        'bg-section': sectionBg,
      })}>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          {component}
        </div>
      </section>
    ))}
  </>;
};

type Section = {
  key: string;
  component: React.ReactNode;
  className?: string;
  sectionBg?: boolean;
}

const SECTIONS: Section[] = [
  {
    key: 'hero',
    component: <Hero />,
    className: 'min-h-screen',
  },
  {
    key: 'about',
    component: <AboutMe />,
    sectionBg: true,
  },
  {
    key: 'work-experience',
    component: <WorkExperienceSummary />,
    sectionBg: true,
  },
  {
    key: 'skills',
    component: <MySkills/>,
  }
];