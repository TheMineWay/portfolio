import { JsonLd } from '@/components/common/json-ld/json-ld';
import { SITE_URL } from '@/constants/site-url';
import { AboutMe } from '@/features/about/components/about-me';
import { Hero } from '@/features/about/components/hero';
import { MySkills } from '@/features/about/components/my-skills';
import { getMyJsonLd } from '@/features/about/lib/get-my-json-ld';
import { Courses } from '@/features/courses/components/courses';
import { Projects } from '@/features/projects/components/projects';
import { WorkExperienceSummary } from '@/features/work-experience/components/work-experience-summary';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ogBanner from '@/assets/open-graph/banner.png';
import { TranslationNamespace } from '@/i18n/namespaces';
import { MY_DETAILS } from '@/constants/my-details';
import { getLocale } from '@/i18n/utils';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  setRequestLocale(locale);

  const t = await getTranslations(TranslationNamespace.ABOUT);
  const commonT = await getTranslations(TranslationNamespace.COMMON);

  return {
    description: t('about-me.About-me'),
    authors: {
      name: MY_DETAILS.fullName,
    },
    metadataBase: SITE_URL,
    openGraph: {
      images: {
        url: ogBanner.src,
        width: ogBanner.width,
        height: ogBanner.height,
        alt: commonT('expressions.Banner-of', { name: MY_DETAILS.fullName }),
      },
      title: MY_DETAILS.fullName,
      description: t('about-me.About-me'),
    }
  };
}

const SECTION_CLASSNAME = "flex items-center justify-center";

export default async function Page() {
  const myJsonLdData = await getMyJsonLd();

  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@graph": [
        myJsonLdData,
      ]
    }}/>
    {SECTIONS.map(({ key, component, className, sectionBg = false, fullBleed = false }) => (
      <section id={key} key={key} className={clsx(SECTION_CLASSNAME, className, {
        'bg-section': sectionBg,
      })}>
        {fullBleed ? component : (
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            {component}
          </div>
        )}
      </section>
    ))}
  </>;
};

type Section = {
  key: string;
  component: React.ReactNode;
  className?: string;
  sectionBg?: boolean;
  /** Renders the section without the padded container — the component owns its own full-width layout and spacing. */
  fullBleed?: boolean;
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
    fullBleed: true,
  },
  {
    key: 'projects',
    component: <Projects />,
    sectionBg: true,
  },
  {
    key: 'courses',
    component: <Courses />,
  },
];