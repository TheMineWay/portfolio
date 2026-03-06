import { Hero } from '@/components/about/hero';

export default async function Page() {
  return <section className="min-h-screen flex items-center justify-center pt-16">
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <Hero/>
    </div>
  </section>;
}