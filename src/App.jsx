import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SocialProof from './components/SocialProof.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import JavunoDifference from './components/JavunoDifference.jsx'
import ConnectedWorkflow from './components/ConnectedWorkflow.jsx'
import ProductDemo from './components/ProductDemo.jsx'
import WorkViews from './components/WorkViews.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import AutomationSection from './components/AutomationSection.jsx'
import AISection from './components/AISection.jsx'
import TeamSolutions from './components/TeamSolutions.jsx'
import BenefitsSection from './components/BenefitsSection.jsx'
import WhyJavuno from './components/WhyJavuno.jsx'
import ComparisonSection from './components/ComparisonSection.jsx'
import MetricsSection from './components/MetricsSection.jsx'
import CustomerStories from './components/CustomerStories.jsx'
import Testimonials from './components/Testimonials.jsx'
import Integrations from './components/Integrations.jsx'
import ClientPortal from './components/ClientPortal.jsx'
import Security from './components/Security.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Newsletter from './components/Newsletter.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <JavunoDifference />
        <ConnectedWorkflow />
        <ProductDemo />
        <WorkViews />
        <FeatureSection />
        <AutomationSection />
        <AISection />
        <TeamSolutions />
        <BenefitsSection />
        <WhyJavuno />
        <ComparisonSection />
        <MetricsSection />
        <CustomerStories />
        <Testimonials />
        <Integrations />
        <ClientPortal />
        <Security />
        <Pricing />
        <FAQ />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
