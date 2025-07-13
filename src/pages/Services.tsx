
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t('services.title')}
              </h1>
              <p className="text-xl opacity-90">
                {t('services.subtitle')}
              </p>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* Services Tabs */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" delay={0.2}>
              <Tabs defaultValue="individual" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="individual" className="px-6 py-3">{t('services.tab.individual')}</TabsTrigger>
                    <TabsTrigger value="packages" className="px-6 py-3">{t('services.tab.packages')}</TabsTrigger>
                    <TabsTrigger value="specialized" className="px-6 py-3">{t('services.tab.specialized')}</TabsTrigger>
                  </TabsList>
                </div>
                
                {/* Individual Classes */}
                <TabsContent value="individual">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      {t('services.individual.title')}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t('services.individual.subtitle')}
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Trial Lesson"
                           description="Get to know my teaching style with this short introductory session."
                           icon="🎁"
                           price="€5.00"
                           features={[
                             "15-minute session",
                             "Level assessment",
                             "Learning plan discussion",
                             "Teaching methodology introduction",
                             "Q&A about your goals"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Standard Class"
                           description="Comprehensive Spanish lessons covering all essential skills."
                           icon="📚"
                           price="€21.00"
                           features={[
                             "50-minute session",
                             "Complete curriculum coverage",
                             "Speaking & listening practice",
                             "Grammar & vocabulary building",
                             "Homework assignments"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Premium Class"
                           description="Extended sessions for intensive learning and deep practice."
                           icon="⭐"
                           price="€42.00"
                           features={[
                             "100-minute session",
                             "Intensive conversation practice",
                             "Advanced grammar concepts",
                             "Cultural immersion activities",
                             "Personalized study materials"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                
                {/* Class Packages */}
                <TabsContent value="packages">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      {t('services.packages.title')}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t('services.packages.subtitle')}
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Starter Bundle"
                           description="Perfect for beginners starting their Spanish learning journey."
                           icon="🚀"
                           price="€105.00"
                           features={[
                             "5 classes of 50 minutes each",
                             "Basic study materials included",
                             "Flexible scheduling",
                             "Foundation grammar coverage",
                             "Essential vocabulary building"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Progress Pro"
                           description="Our most popular package for steady and consistent progress."
                           icon="🔥"
                           price="€201.00"
                           features={[
                             "10 classes of 50 minutes each",
                             "Complete study materials",
                             "Priority scheduling",
                             "Intermediate skill development",
                             "Regular progress assessments"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Fluency Master"
                           description="Intensive learning experience for rapid progress and deep immersion."
                           icon="🌟"
                           price="€379.00"
                           features={[
                             "20 classes of 50 minutes each",
                             "Premium learning materials",
                             "Chat support between sessions",
                             "Advanced conversation practice",
                             "Cultural immersion activities"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                
                {/* Specialized Classes */}
                <TabsContent value="specialized">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      {t('services.specialized.title')}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t('services.specialized.subtitle')}
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Spanish for Travel"
                           description="Learn essential Spanish for your travel adventures and cultural experiences."
                           icon="✈️"
                           price="€25.00"
                           features={[
                             "50-minute sessions",
                             "Survival phrases & vocabulary",
                             "Cultural etiquette guidance",
                             "Travel-specific role play",
                             "Practical pronunciation focus",
                             "Regional dialect awareness"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Colombian Spanish"
                           description="Immerse yourself in authentic Colombian Spanish culture and expressions."
                           icon="🇨🇴"
                           price="€25.00"
                           features={[
                             "50-minute sessions",
                             "Colombian culture & expressions",
                             "Regional vocabulary & slang",
                             "Traditional music & stories",
                             "Colombian history insights",
                             "Authentic pronunciation practice"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                         <ServiceCard
                           title="Conversational Spanish"
                           description="Focus on building confidence in real-world Spanish conversations."
                           icon="💬"
                           price="€21.00"
                           features={[
                             "50-minute sessions",
                             "Natural conversation practice",
                             "Everyday vocabulary building",
                             "Pronunciation improvement",
                             "Cultural context discussions",
                             "Confidence building exercises"
                           ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                {t('services.faq.title')}
              </h2>
            </ScrollAnimation>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <ScrollAnimation direction="left" delay={0.1}>
                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    {t('services.faq.q1')}
                  </h3>
                  <p className="text-gray-600">
                    {t('services.faq.a1')}
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.2}>
                <motion.div 
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    {t('services.faq.q2')}
                  </h3>
                  <p className="text-gray-600">
                    {t('services.faq.a2')}
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sarai-accent text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="max-w-3xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('services.cta.title')}
                </h2>
                <p className="text-xl mb-8">
                  {t('services.cta.subtitle')}
                </p>
                <Link to="/book">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white text-sarai-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                      {t('services.cta.button')}
                    </button>
                  </motion.div>
                </Link>
              </motion.div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
