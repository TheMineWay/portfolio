import { Link } from 'react-router';
import { 
  ArrowLeft, 
  Users, 
  Shield, 
  Code, 
  Heart, 
  Leaf, 
  Lock,
  Eye,
  Globe,
  Lightbulb
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function TechEthicsPage() {
  const principles = [
    {
      icon: Users,
      title: "Accessibility for All",
      subtitle: "Building inclusive digital experiences",
      description: "I believe technology should be accessible to everyone, regardless of ability. Web accessibility isn't just a feature—it's a fundamental human right. Every person deserves to access information, services, and opportunities online.",
      values: [
        "Semantic HTML and ARIA labels are non-negotiable in my code",
        "Keyboard navigation and screen reader compatibility are tested from day one",
        "Color contrast and text sizing follow WCAG 2.1 AA standards minimum",
        "I advocate for accessibility in design discussions and code reviews",
        "Accessibility audits are part of my development workflow, not an afterthought"
      ],
      impact: "When we build for accessibility, we build better products for everyone. Features like captions benefit not just deaf users, but also people in noisy environments or learning a new language."
    },
    {
      icon: Shield,
      title: "Privacy as a Default",
      subtitle: "Respecting user data and consent",
      description: "Privacy is not a privilege—it's a right. In an era of surveillance capitalism, I'm committed to building applications that respect user privacy and minimize data collection to only what's truly necessary.",
      values: [
        "Collect only essential data, delete what's no longer needed",
        "Clear, honest privacy policies written in plain language",
        "Opt-in by default, never dark patterns or deceptive consent flows",
        "End-to-end encryption for sensitive user data",
        "Regular security audits and vulnerability assessments",
        "Transparent about third-party integrations and data sharing"
      ],
      impact: "Users should control their own data. I design systems where privacy-conscious choices are easy and default, not buried in settings or requiring technical knowledge."
    },
    {
      icon: Code,
      title: "Open Source Contribution",
      subtitle: "Giving back to the community",
      description: "Open source software has been instrumental in my career and countless innovations. I believe in contributing back to the ecosystem that has given me so much, and making knowledge freely accessible.",
      values: [
        "Contribute to open source projects I use and benefit from",
        "Share code, tools, and solutions that could help other developers",
        "Document thoroughly so others can learn and build upon my work",
        "Mentor newcomers to open source and help them make their first contributions",
        "Advocate for open standards and interoperability",
        "Choose open source solutions when viable for projects"
      ],
      impact: "Open source democratizes technology. Every contribution, no matter how small, helps build a more collaborative and innovative tech ecosystem."
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      subtitle: "Building for environmental responsibility",
      description: "Technology has an environmental footprint. From energy-intensive data centers to e-waste, our choices as developers matter. I strive to write efficient code and make sustainable architecture decisions.",
      values: [
        "Optimize code and assets to reduce server load and energy consumption",
        "Choose green hosting providers powered by renewable energy when possible",
        "Minimize unnecessary API calls and database queries",
        "Implement efficient caching strategies to reduce redundant processing",
        "Consider the lifecycle and longevity of the software I build",
        "Advocate for sustainable practices in technical discussions"
      ],
      impact: "A 1-second improvement in load time doesn't just enhance user experience—it also reduces energy consumption across millions of devices and servers."
    },
    {
      icon: Heart,
      title: "Ethical AI & Automation",
      subtitle: "Technology that serves humanity",
      description: "As AI becomes more prevalent, we must ensure it's built with fairness, transparency, and human welfare in mind. Automation should augment human capability, not exploit or replace it irresponsibly.",
      values: [
        "Question bias in training data and algorithmic decision-making",
        "Ensure AI systems are explainable and auditable",
        "Design automation that empowers workers, not just reduces costs",
        "Consider the societal impact of technologies I build",
        "Advocate against deceptive AI implementations",
        "Prioritize human oversight in critical decision-making systems"
      ],
      impact: "The question isn't just 'Can we build it?' but 'Should we build it?' and 'Who benefits or is harmed by this technology?'"
    },
    {
      icon: Lock,
      title: "Security First",
      subtitle: "Protecting users and their trust",
      description: "Security vulnerabilities don't just expose data—they break trust. I believe in building secure systems from the ground up, following best practices, and staying updated on emerging threats.",
      values: [
        "Input validation and sanitization to prevent injection attacks",
        "Secure authentication with proper hashing and token management",
        "Regular dependency updates and vulnerability scanning",
        "Principle of least privilege in access control",
        "Security considerations in every code review",
        "Transparent disclosure and quick response to security issues"
      ],
      impact: "One security breach can destroy years of trust. Proactive security practices protect not just data, but people's livelihoods and peace of mind."
    },
    {
      icon: Eye,
      title: "Transparent Technology",
      subtitle: "Honesty in what we build",
      description: "Users deserve to understand how the technology they use works, what data it collects, and how decisions are made. Transparency builds trust and empowers informed choices.",
      values: [
        "Clear communication about how systems work and what they do",
        "No hidden tracking or unexpected data collection",
        "Honest about limitations and potential biases in systems",
        "Open about mistakes and how they're being addressed",
        "Readable terms of service and privacy policies",
        "User-friendly controls to view, export, and delete personal data"
      ],
      impact: "When users understand technology, they can make better decisions about using it and hold companies accountable for how it's built."
    },
    {
      icon: Globe,
      title: "Inclusive & Diverse Tech",
      subtitle: "Technology that represents everyone",
      description: "The best technology is built by diverse teams for diverse users. I'm committed to fostering inclusive environments and building products that work for people of all backgrounds.",
      values: [
        "Support and amplify underrepresented voices in tech",
        "Design for global audiences with localization and cultural sensitivity",
        "Challenge homogeneous thinking in product and technical decisions",
        "Create welcoming onboarding experiences for junior developers",
        "Advocate for diverse hiring and inclusive workplace policies",
        "Consider how features might affect different communities differently"
      ],
      impact: "Diverse teams build better products. When we include different perspectives, we catch blind spots and create technology that truly serves everyone."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning & Humility",
      subtitle: "Always evolving my ethical framework",
      description: "Technology ethics isn't static—new challenges emerge constantly. I commit to continuous learning, listening to affected communities, and evolving my practices as I learn more.",
      values: [
        "Stay informed about ethical debates and emerging issues in tech",
        "Listen to and learn from people affected by technology decisions",
        "Admit when I'm wrong and adjust course",
        "Seek out diverse perspectives that challenge my assumptions",
        "Share learnings and mistakes to help others avoid them",
        "Recognize that ethics require ongoing reflection, not one-time decisions"
      ],
      impact: "The most ethical stance is recognizing I don't have all the answers. Humility and willingness to learn ensure I keep growing as a developer and human."
    }
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--brand-primary)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              My <span style={{ color: 'var(--brand-primary)' }}>Technology Ethics</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technology is never neutral—every line of code embodies values and priorities. 
              Here are the principles that guide how I build, the decisions I make, and the kind 
              of tech future I want to help create.
            </p>
          </div>

          {/* Quote */}
          <Card className="mb-16" style={{ backgroundColor: 'var(--section-background)' }}>
            <CardContent className="p-8">
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl italic mb-4" style={{ color: 'var(--brand-primary)' }}>
                  "With great power comes great responsibility."
                </p>
                <p className="text-muted-foreground">
                  As developers, we shape how billions of people interact with information, 
                  each other, and the world. That power demands thoughtful, ethical practice.
                </p>
              </blockquote>
            </CardContent>
          </Card>

          {/* Principles */}
          <div className="space-y-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div 
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ 
                          backgroundColor: 'var(--brand-primary)',
                          color: 'var(--brand-primary-foreground)'
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl mb-2">
                          {principle.title}
                        </h2>
                        <p 
                          className="text-sm opacity-80"
                          style={{ color: 'var(--brand-accent)' }}
                        >
                          {principle.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {principle.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm mb-3 opacity-80">How I Practice This</h3>
                      <ul className="space-y-2">
                        {principle.values.map((value, vIndex) => (
                          <li key={vIndex} className="flex items-start gap-3">
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: 'var(--brand-primary)' }}
                            />
                            <span className="text-sm text-muted-foreground">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div 
                      className="p-4 rounded-lg border-l-4"
                      style={{ 
                        backgroundColor: 'var(--section-background)',
                        borderLeftColor: 'var(--brand-accent)'
                      }}
                    >
                      <p className="text-sm text-muted-foreground italic">
                        <strong className="opacity-80">Why it matters: </strong>
                        {principle.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Closing Statement */}
          <Card className="mt-16" style={{ backgroundColor: 'var(--section-background)' }}>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl mb-4">Living These Values</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                These aren't just aspirational ideals—they're commitments I work to uphold in every 
                project. I won't always get it perfect, but I pledge to keep learning, listening, 
                and striving to build technology that makes the world a little bit better.
              </p>
              <div className="mt-6">
                <p className="text-sm opacity-70">
                  Questions, feedback, or want to discuss tech ethics?{' '}
                  <Link 
                    to="/#contact"
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    Let's talk
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Portfolio Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-primary-foreground)'
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}