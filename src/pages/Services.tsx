
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
                          title={t('services.trial.title')}
                          description={t('services.trial.description')}
                          icon="🎁"
                          price={t('services.trial.price')}
                          features={[
                            t('services.trial.feature1'),
                            t('services.trial.feature2'),
                            t('services.trial.feature3'),
                            t('services.trial.feature4'),
                            t('services.trial.feature5')
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title={t('services.standard.title')}
                          description={t('services.standard.description')}
                          icon="📚"
                          price={t('services.standard.price')}
                          features={[
                            t('services.standard.feature1'),
                            t('services.standard.feature2'),
                            t('services.standard.feature3'),
                            t('services.standard.feature4'),
                            t('services.standard.feature5')
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title={t('services.premium.title')}
                          description={t('services.premium.description')}
                          icon="⭐"
                          price={t('services.premium.price')}
                          features={[
                            t('services.premium.feature1'),
                            t('services.premium.feature2'),
                            t('services.premium.feature3'),
                            t('services.premium.feature4'),
                            t('services.premium.feature5')
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
                          description="Perfect for beginners or those testing the waters with consistent learning."
                          icon="🚀"
                          price="€161.28"
                          features={[
                            "8 standard classes",
                            "4% discount",
                            "Valid for 1 month",
                            "Basic study materials included",
                            "Flexible scheduling"
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
                          price="€312.48"
                          features={[
                            "16 standard classes",
                            "7% discount",
                            "Valid for 2 months",
                            "Complete study materials",
                            "Priority scheduling"
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
                          price="€378.00"
                          features={[
                            "20 standard classes",
                            "10% discount",
                            "Valid for 3 months",
                            "Premium learning materials",
                            "Chat support between sessions"
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
                          title={t('services.travel.title')}
                          description={t('services.travel.description')}
                          icon="✈️"
                          price={t('services.travel.price')}
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
                          title="Business Spanish"
                          description="Professional Spanish skills for workplace communication and business meetings."
                          icon="💼"
                          price="€28.00"
                          features={[
                            "60-minute sessions",
                            "Business vocabulary",
                            "Email writing skills",
                            "Presentation techniques",
                            "Negotiation phrases",
                            "Industry-specific terminology"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="DELE Exam Prep"
                          description="Focused preparation for official Spanish language certification exams."
                          icon="🎯"
                          price="€26.00"
                          features={[
                            "55-minute sessions",
                            "Exam-focused curriculum",
                            "Practice tests included",
                            "Speaking test simulation",
                            "Writing task guidance",
                            "Test-taking strategies"
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
