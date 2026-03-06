import { AboutMe } from '@/components/about/about-me';
import { Hero } from '@/components/about/hero';
import clsx from 'clsx';

const SECTION_CLASSNAME = "flex items-center justify-center";

export default function Page() {
  return SECTIONS.map(({ key, component, className }) => (
        <section key={key} className={clsx(SECTION_CLASSNAME, className)}>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            {component}
          </div>
        </section>
      ));
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
    component: <Hero/>,
    className: 'min-h-screen',
  },
  {
    key: 'about',
    component: <AboutMe/>,
    className: 'bg-section'
  }
];