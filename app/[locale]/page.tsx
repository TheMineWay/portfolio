import { JsonLd } from '@/components/common/json-ld/json-ld';
import { SITE_URL } from '@/constants/site-url';
import { AboutMe } from '@/features/about/components/about-me';
import { Hero } from '@/features/about/components/hero';
import { MySkills } from '@/features/about/components/my-skills';
import { getMyJsonLd } from '@/features/about/lib/get-my-json-ld';
import { Courses } from '@/features/courses/components/courses';
import { Projects } from '@/features/projects/components/projects';
import { WorkExperienceSummary } from '@/features/work-experience/components/work-experience-summary';
import { Locale } from '@/i18n/locale';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ogBanner from '@/assets/open-graph/banner.png';
import { TranslationNamespace } from '@/i18n/namespaces';
import { MY_DETAILS } from '@/constants/my-details';

export const dynamic = 'force-static';

type PageProps = {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Readonly<PageProps>): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations(TranslationNamespace.ABOUT);
  const commonT = await getTranslations(TranslationNamespace.COMMON);

  const languages: Record<string, string> = {};
  for(const locale of Object.values(Locale)) {
    languages[locale] = `/${locale}`;
  }

  return {
    description: t('about-me.About-me'),
    authors: {
      name: MY_DETAILS.fullName,
    },
    metadataBase: SITE_URL,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
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

export default async function Page({ params }: Readonly<PageProps>) {
  const { locale } = await params;
  const myJsonLdData = await getMyJsonLd();

  setRequestLocale(locale);

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