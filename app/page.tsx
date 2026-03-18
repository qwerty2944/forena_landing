import HeroSection from '@/components/sections/HeroSection';
import PopupBanner from '@/components/sections/PopupBanner';
import ScheduleSection from '@/components/sections/ScheduleSection';
import PremiumSection from '@/components/sections/PremiumSection';
import LocationSection from '@/components/sections/LocationSection';
import UnitTypeSection from '@/components/sections/UnitTypeSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScheduleSection />
      <PremiumSection />
      <LocationSection />
      <UnitTypeSection />
      <ContactSection />
      <PopupBanner />
    </>
  );
}
