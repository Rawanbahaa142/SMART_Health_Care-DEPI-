import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Global {
  articles = [
    {
      id: 1,
      title: 'The Future of Telemedicine',
      summary:
        'Telemedicine is revolutionizing healthcare by enabling virtual consultations and remote monitoring of patients worldwide.',
      image: '/blog2-2.jpg',
      date: '2025-09-01',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Sarah Johnson',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',
      category: 'Telemedicine',
      content: `
      Telemedicine is rapidly changing the way patients and doctors interact.
      Instead of traveling to hospitals or clinics, patients can consult with healthcare professionals from their homes using video calls and specialized apps.
      This approach has proven especially useful during the COVID-19 pandemic, where remote consultations helped reduce the risk of infection and kept hospitals from becoming overcrowded.
      Remote monitoring devices, such as smartwatches and blood pressure monitors, are now integrated with telemedicine platforms, allowing doctors to track chronic conditions like diabetes and hypertension in real-time.
      Despite the benefits, telemedicine also comes with challenges such as ensuring data privacy, internet accessibility in rural areas, and maintaining the same level of trust as in-person visits.
      Nevertheless, experts agree that telemedicine will continue to grow and become a permanent part of modern healthcare.
    `,
    },
    {
      id: 2,
      title: 'Mental Health Awareness',
      summary:
        'Raising awareness about mental health helps reduce stigma and ensures better support for individuals in need.',
      image: '/blog1-2-800x530.jpg',
      date: '2025-08-20',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Ahmed Khalil',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Mental Health',
      content: `
      Mental health is just as important as physical health, yet it is often overlooked.
      Millions of people worldwide suffer from conditions such as depression, anxiety, and bipolar disorder.

      Raising awareness about mental health helps reduce stigma and allows people to seek support without fear of judgment.
      Schools, workplaces, and communities are now implementing programs to provide counseling and support.

      Studies show that early intervention significantly improves recovery outcomes.
      Access to professional help, combined with social support from family and friends, is key to maintaining mental well-being.

      Governments and NGOs are investing in awareness campaigns to encourage open conversations about mental health.
      With the right approach, society can become more compassionate and inclusive for those struggling with mental illnesses.
    `,
    },
    {
      id: 3,
      title: 'The Impact of Nutrition on Health',
      summary:
        'Proper nutrition plays a crucial role in maintaining overall health and preventing chronic diseases.',
      image: '/blog1-3-800x530.jpg',
      date: '2025-08-15',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Emily Carter',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Nutrition',
      content: `
      Nutrition is the foundation of a healthy life.
      A balanced diet rich in fruits, vegetables, whole grains, and lean proteins strengthens the immune system and reduces the risk of chronic illnesses.

      Poor dietary habits, such as consuming too much processed food and sugar, contribute to obesity, diabetes, and heart disease.
      In contrast, diets high in fiber, vitamins, and minerals improve both physical and mental health.

      Nutrition also plays a vital role in children's development.
      Adequate intake of calcium, iron, and vitamins ensures proper growth and cognitive development.

      Public health campaigns around the world focus on educating people about healthy eating choices.
      With greater awareness, individuals can make informed decisions to live longer, healthier lives.
    `,
    },
    {
      id: 4,
      title: 'Advancements in Cancer Treatment',
      summary:
        'Breakthroughs in cancer research are leading to more effective treatments and improved survival rates.',
      image: '/blog4.jpg',
      date: '2025-08-10',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Michael Lee',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Oncology',
      content: `
      Cancer remains one of the leading causes of death globally, but advancements in treatment are providing hope.
      Immunotherapy, targeted drugs, and personalized medicine are transforming how doctors approach cancer care.

      Unlike traditional chemotherapy, which affects healthy and cancerous cells, new therapies are more precise, reducing side effects and improving outcomes.
      Gene editing technologies such as CRISPR also show promise in developing future treatments.

      Early detection continues to be critical.
      Regular screenings and awareness campaigns are helping diagnose cancer at earlier stages, significantly improving survival rates.

      With continued research and collaboration, the fight against cancer is becoming stronger, offering better chances for patients worldwide.
    `,
    },
    {
      id: 5,
      title: 'The Importance of Sleep',
      summary:
        'Quality sleep is essential for maintaining physical health, cognitive performance, and emotional well-being.',
      image: '/blog5.webp',
      date: '2025-08-05',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Laura White',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Wellness',
      content: `
      Sleep is not just a period of rest; it is a biological necessity.
      During sleep, the body repairs tissues, consolidates memory, and regulates hormones.

      Chronic sleep deprivation is linked to numerous health issues, including obesity, diabetes, cardiovascular diseases, and weakened immunity.
      Lack of sleep also affects concentration, productivity, and mood stability.

      Experts recommend 7–9 hours of sleep per night for adults.
      Creating a consistent sleep routine, avoiding caffeine late in the day, and reducing screen time before bed can improve sleep quality.

      Investing in better sleep habits is one of the simplest ways to improve both mental and physical health.
    `,
    },
    {
      id: 6,
      title: 'The Rise of Artificial Intelligence in Medicine',
      summary:
        'AI is transforming diagnostics, treatment planning, and patient care in unprecedented ways.',
      image: '/blog2-2.jpg',
      date: '2025-07-25',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Kevin Brown',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Technology',
      content: `
      Artificial Intelligence (AI) is no longer a futuristic concept in healthcare; it is already here.
      AI-powered algorithms can analyze X-rays, CT scans, and MRIs faster and more accurately than many human doctors.

      In oncology, AI is being used to detect early signs of cancer, while in cardiology, it helps identify potential heart risks before symptoms appear.
      AI also powers chatbots and virtual assistants that guide patients with initial diagnoses and treatment recommendations.

      While AI enhances efficiency, it cannot replace the human touch in healthcare.
      Ethical considerations, data privacy, and accountability are major concerns as AI expands in medicine.

      As technology advances, AI will become a powerful tool that complements healthcare professionals rather than replacing them.
    `,
    },
    {
      id: 7,
      title: 'Fitness and Heart Health',
      summary:
        'Regular exercise strengthens the cardiovascular system and reduces the risk of heart disease.',
      image: '/blog4.jpg',
      date: '2025-07-18',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Sophia Green',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Cardiology',
      content: `
      Exercise is one of the most effective ways to maintain heart health.
      Aerobic activities like running, swimming, and cycling strengthen the heart muscle and improve circulation.

      Physical activity reduces cholesterol, lowers blood pressure, and helps maintain a healthy weight.
      Studies show that individuals who exercise regularly are less likely to suffer from heart attacks and strokes.

      The World Health Organization recommends at least 150 minutes of moderate exercise per week.
      Even simple activities like brisk walking or dancing can significantly improve cardiovascular health.

      Incorporating fitness into daily routines not only extends lifespan but also enhances quality of life.
    `,
    },
    {
      id: 8,
      title: 'Child Vaccination Benefits',
      summary:
        'Vaccines protect children from life-threatening diseases and contribute to global health safety.',
      image: '/blog4.jpg',
      date: '2025-07-10',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. James Wilson',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Immunology',
      content: `
      Vaccination is one of the greatest achievements in public health.
      Childhood vaccines have saved millions of lives by preventing diseases like measles, polio, and whooping cough.

      Herd immunity, achieved through widespread vaccination, protects even those who cannot be vaccinated due to medical reasons.
      This collective effort reduces outbreaks and helps eradicate diseases.

      Misinformation and vaccine hesitancy remain challenges.
      Health organizations emphasize transparent communication and education to build trust in vaccines.

      With ongoing research, new vaccines are being developed to tackle emerging infectious diseases, ensuring a healthier future for generations to come.
    `,
    },
    {
      id: 9,
      title: 'Stress Management Techniques',
      summary:
        'Learning to manage stress effectively improves mental health and reduces physical health risks.',
      image: '/blog4.jpg',
      date: '2025-07-02',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Olivia Martinez',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Wellness',
      content: `
      Stress is a natural part of life, but chronic stress takes a toll on health.
      It contributes to conditions such as high blood pressure, insomnia, and depression.

      Effective stress management techniques include mindfulness meditation, deep breathing exercises, and physical activity.
      Maintaining a healthy work-life balance also reduces stress levels.

      Social connections play a vital role in managing stress.
      Talking to friends, family, or professional counselors provides emotional support.

      By developing coping strategies, individuals can turn stress into a motivator instead of a barrier to health and happiness.
    `,
    },
    {
      id: 10,
      title: 'Women’s Health and Wellness',
      summary:
        'Focusing on women’s health is vital for preventing disease and promoting long-term well-being.',
      image: '/blog4.jpg',
      date: '2025-06-25',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Hannah Scott',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Women’s Health',
      content: `
      Women's health covers a broad range of topics, from reproductive care to hormonal balance and chronic disease prevention.
      Regular gynecological check-ups are essential for detecting issues early.

      Nutrition and exercise play significant roles in supporting women’s health, particularly during pregnancy and menopause.
      Adequate calcium and vitamin D intake are crucial for preventing osteoporosis.

      Mental health is another critical aspect.
      Women are more likely to experience anxiety and depression, highlighting the need for accessible support systems.

      Empowering women with health education ensures they can make informed decisions about their bodies and well-being, benefiting families and communities as a whole.
    `,
    },
    {
      id: 11,
      title: 'The Role of Genetics in Cancer',
      summary:
        'Understanding how genetic mutations contribute to cancer can help develop targeted therapies and personalized medicine.',
      image: '/blog4.jpg',
      date: '2025-05-30',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Omar Khaled',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Cancer Research',
      content: `
      Cancer is often the result of genetic mutations that cause uncontrolled cell growth.
      Some of these mutations are inherited, while others are acquired due to lifestyle and environmental factors.

      Advances in genetic testing now allow doctors to identify mutations linked to specific cancers, such as BRCA1 and BRCA2 in breast and ovarian cancers.

      Targeted therapies are being developed to directly address these mutations, making treatments more effective and less harmful than traditional chemotherapy.

      The future of oncology will likely focus on personalized treatment plans, where therapies are tailored to a patient’s genetic profile for maximum effectiveness.
    `,
    },
    {
      id: 12,
      title: 'The Importance of Mental Health Awareness',
      summary:
        'Raising awareness about mental health reduces stigma and ensures better support for individuals facing psychological challenges.',
      image: '/blog4.jpg',
      date: '2025-04-15',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Emily Carter',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Mental Health',
      content: `
      Mental health is just as important as physical health, yet it is often neglected due to social stigma and lack of awareness.

      Conditions like depression, anxiety, and bipolar disorder affect millions worldwide, influencing both personal and professional life.

      Increasing awareness encourages people to seek help early, reducing the severity of symptoms and improving recovery outcomes.

      Schools, workplaces, and communities are now promoting mental health programs to foster open discussions and reduce stigma.

      By creating supportive environments, society can ensure that mental health care is accessible, effective, and normalized.
    `,
    },
    {
      id: 13,
      title: 'How AI is Improving Diagnostic Accuracy',
      summary:
        'Artificial intelligence is helping doctors detect diseases earlier and with greater accuracy, particularly in radiology and pathology.',
      image: '/blog4.jpg',
      date: '2025-03-22',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. James Wilson',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Artificial Intelligence',
      content: `
      Artificial intelligence is transforming the field of diagnostics by analyzing large volumes of medical data more quickly than humans can.

      In radiology, AI algorithms detect tumors, fractures, and other abnormalities with remarkable accuracy.
      Pathology labs are also using AI to analyze tissue samples for early signs of disease.

      These systems are not meant to replace doctors but to support them in making more precise decisions.

      AI can reduce diagnostic errors, save time, and improve patient outcomes by ensuring early treatment for life-threatening conditions.
    `,
    },
    {
      id: 14,
      title: 'The Power of Preventive Medicine',
      summary:
        'Preventive medicine focuses on reducing risks and preventing disease before it occurs through screenings and healthy lifestyle choices.',
      image: '/blog4.jpg',
      date: '2025-02-14',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Hannah Lee',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Preventive Care',
      content: `
      Preventive medicine aims to stop diseases before they develop, saving both lives and healthcare costs.

      Regular screenings such as mammograms, colonoscopies, and blood tests can detect diseases like cancer, diabetes, and heart disease in their earliest stages.

      Vaccinations are another crucial element of preventive care, protecting individuals and communities from infectious diseases.

      Lifestyle changes such as eating a balanced diet, exercising regularly, and avoiding smoking contribute significantly to long-term health.

      As healthcare systems focus more on prevention, people will benefit from longer, healthier lives and reduced medical expenses.
    `,
    },
    {
      id: 15,
      title: 'The Rise of Digital Health Apps',
      summary:
        'Digital health applications are empowering patients to track fitness, monitor chronic conditions, and connect with healthcare providers.',
      image: '/blog4.jpg',
      date: '2025-01-25',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Michael Brown',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Digital Health',
      content: `
      Mobile applications and wearable devices have revolutionized healthcare by giving patients greater control over their health.

      Fitness trackers monitor activity levels, heart rate, and sleep quality, motivating users to adopt healthier habits.

      Chronic disease management apps allow patients with conditions like diabetes and asthma to log symptoms and receive personalized insights.

      Many apps also offer telemedicine features, connecting patients with doctors instantly.

      While digital health apps provide convenience, ensuring data privacy and accuracy of information remains an ongoing challenge.
    `,
    },
    {
      id: 16,
      title: 'Breakthroughs in Alzheimer’s Research',
      summary:
        'New therapies and early detection methods offer hope in the fight against Alzheimer’s disease.',
      image: '/blog4.jpg',
      date: '2025-01-05',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Laura Martinez',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Neurology',
      content: `
      Alzheimer’s disease affects millions of people worldwide, leading to memory loss and cognitive decline.

      Recent research has focused on identifying biomarkers in blood and brain scans that indicate early stages of the disease.

      Experimental drugs are now being developed to slow progression by targeting abnormal proteins such as beta-amyloid.

      Lifestyle changes like regular exercise, mental stimulation, and a healthy diet may also play a role in prevention.

      While a cure remains elusive, these advances are offering hope for better management and improved quality of life for patients.
    `,
    },
    {
      id: 17,
      title: 'The Benefits of Mindfulness in Healthcare',
      summary:
        'Mindfulness practices such as meditation and breathing exercises are being used to reduce stress and improve patient care.',
      image: '/blog4.jpg',
      date: '2024-12-12',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Sophia Kim',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Wellness',
      content: `
      Mindfulness involves focusing attention on the present moment through meditation, breathing, and relaxation techniques.

      Research shows that mindfulness reduces stress, anxiety, and depression while improving emotional regulation.

      In hospitals, mindfulness programs are being used to support both patients and healthcare providers.

      Patients benefit from reduced pain perception and improved coping strategies, while doctors experience less burnout.

      As more evidence supports mindfulness, it is becoming an integral part of holistic healthcare.
    `,
    },
    {
      id: 18,
      title: 'Advances in Pediatric Surgery',
      summary:
        'Minimally invasive techniques are improving recovery times and outcomes for children undergoing surgery.',
      image: '/blog4.jpg',
      date: '2024-11-28',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      author: 'Dr. Adam Patel',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      category: 'Pediatrics',
      content: `
      Pediatric surgery has evolved significantly with the introduction of minimally invasive techniques such as laparoscopy.

      These methods require smaller incisions, leading to less pain, reduced risk of infection, and faster recovery for young patients.

      Advances in anesthesia and imaging have also made surgeries safer and more precise.

      Pediatric surgeons are now able to correct congenital conditions and treat complex diseases with greater success rates.

      Families benefit from shorter hospital stays and improved long-term outcomes for their children.
    `,
    },
    {
      id: 19,
      title: 'The Impact of Air Pollution on Health',
      summary:
        'Air pollution is linked to respiratory diseases, cardiovascular problems, and reduced life expectancy.',
      image: '/blog4.jpg',
      date: '2024-11-02',
      author: 'Dr. Aisha Hassan',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Public Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Air pollution is a growing global concern, particularly in urban areas with heavy traffic and industrial activity.

      Exposure to pollutants such as fine particulate matter and nitrogen dioxide increases the risk of asthma, lung cancer, and heart disease.

      Children and the elderly are especially vulnerable due to weaker immune systems.

      Governments are implementing stricter emission regulations and promoting renewable energy sources to combat pollution.

      Reducing air pollution not only improves health outcomes but also contributes to environmental sustainability.
    `,
    },
    {
      id: 20,
      title: 'The Role of Nutrition in Heart Health',
      summary:
        'A balanced diet rich in fruits, vegetables, and whole grains plays a crucial role in preventing cardiovascular diseases.',
      image: '/blog4.jpg',
      date: '2024-10-15',
      author: 'Dr. David Green',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Nutrition',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Nutrition is one of the most important factors in preventing and managing heart disease.

      Diets high in saturated fats, processed foods, and sugar increase the risk of obesity, high blood pressure, and cholesterol.

      In contrast, a Mediterranean-style diet rich in fruits, vegetables, whole grains, fish, and olive oil supports heart health.

      Reducing salt intake and staying hydrated also play a role in maintaining normal blood pressure.

      Public health campaigns now emphasize the importance of balanced nutrition for preventing cardiovascular disease, the leading cause of death worldwide.
    `,
    },
    {
      id: 21,
      title: 'Robotics in Modern Surgery',
      summary:
        'Robotic-assisted surgeries are providing greater precision, reduced recovery times, and improved patient outcomes.',
      image: '/blog4.jpg',
      date: '2024-09-22',
      author: 'Dr. Richard Hall',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Surgery',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Robotic-assisted surgery has transformed the way complex procedures are performed.
      Using advanced robotic systems, surgeons can make precise movements that reduce the risk of human error.

      These surgeries often involve smaller incisions, resulting in less blood loss, reduced pain, and quicker recovery times.

      Robotic systems are especially beneficial in procedures such as prostate surgery, cardiac surgery, and gynecology.

      While the cost of robotic equipment remains high, the long-term benefits for patients and hospitals are encouraging wider adoption worldwide.
    `,
    },
    {
      id: 22,
      title: 'The Connection Between Sleep and Immunity',
      summary: 'Adequate sleep is essential for a strong immune system and overall health.',
      image: '/blog4.jpg',
      date: '2024-08-30',
      author: 'Dr. Elena Roberts',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Wellness',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Sleep plays a vital role in maintaining a healthy immune system.
      During sleep, the body produces cytokines that help fight infections and inflammation.

      Chronic sleep deprivation weakens the immune system, making individuals more susceptible to illnesses such as colds and flu.

      Studies show that people who sleep fewer than six hours per night are at greater risk of developing chronic conditions such as diabetes and heart disease.

      Prioritizing quality sleep is therefore crucial for overall well-being and disease prevention.
    `,
    },
    {
      id: 23,
      title: 'The Role of Physical Therapy in Recovery',
      summary:
        'Physical therapy is essential for rehabilitation after injuries, surgeries, and chronic illnesses.',
      image: '/blog4.jpg',
      date: '2024-08-10',
      author: 'Dr. Paul Anderson',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Rehabilitation',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Physical therapy helps patients regain strength, mobility, and independence after medical conditions or injuries.

      Therapists design individualized programs that include exercises, stretching, and manual therapy to support recovery.

      Physical therapy is critical after orthopedic surgeries such as joint replacements, as well as in stroke rehabilitation.

      By improving balance, flexibility, and endurance, therapy not only aids recovery but also prevents future injuries.

      Ongoing research highlights the importance of early intervention to maximize recovery outcomes.
    `,
    },
    {
      id: 24,
      title: 'The Link Between Gut Health and Immunity',
      summary:
        'The gut microbiome plays a central role in supporting immune function and overall health.',
      image: '/blog4.jpg',
      date: '2024-07-22',
      author: 'Dr. Maria Gonzalez',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Nutrition',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      The gut is home to trillions of microorganisms that directly influence immunity, digestion, and metabolism.

      A balanced microbiome helps protect against infections, regulate inflammation, and produce essential vitamins.

      Diets rich in fiber, probiotics, and fermented foods promote a healthy gut microbiome.

      Disruptions in gut health have been linked to autoimmune diseases, obesity, and even mental health disorders.

      Strengthening gut health is now considered an essential strategy for boosting immunity and preventing chronic disease.
    `,
    },
    {
      id: 25,
      title: 'How Wearable Technology is Transforming Healthcare',
      summary:
        'Wearable devices are enabling real-time health monitoring and early detection of medical issues.',
      image: '/blog4.jpg',
      date: '2024-07-02',
      author: 'Dr. Ahmed Saleh',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Digital Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Wearable devices such as smartwatches and fitness trackers are now capable of monitoring heart rate, oxygen levels, and sleep quality.

      These devices alert users to irregular heart rhythms or drops in oxygen saturation, helping with early detection of conditions like atrial fibrillation.

      Doctors can access real-time data to make better-informed treatment decisions.

      While data privacy remains a challenge, wearable technology is proving to be a valuable tool in preventive healthcare and chronic disease management.
    `,
    },
    {
      id: 26,
      title: 'The Importance of Vaccination in Public Health',
      summary:
        'Vaccines remain one of the most effective tools for preventing infectious diseases worldwide.',
      image: '/blog4.jpg',
      date: '2024-06-12',
      author: 'Dr. Fatima Noor',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Public Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Vaccination has been responsible for the eradication and control of deadly diseases such as smallpox, polio, and measles.

      Immunization not only protects individuals but also contributes to herd immunity, safeguarding communities.

      Despite misinformation, vaccines are safe, effective, and crucial for preventing outbreaks.

      Continuous research is improving vaccine technology, making them more accessible and easier to distribute globally.

      Promoting vaccine awareness is essential to ensure higher vaccination rates and healthier populations.
    `,
    },
    {
      id: 27,
      title: 'The Role of Exercise in Mental Well-being',
      summary:
        'Regular physical activity boosts mood, reduces anxiety, and improves cognitive function.',
      image: '/blog4.jpg',
      date: '2024-05-20',
      author: 'Dr. John Edwards',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Mental Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Exercise is a natural way to improve mental health by stimulating the release of endorphins, also known as 'feel-good' hormones.

      Regular physical activity reduces symptoms of depression and anxiety, while also enhancing sleep quality and focus.

      Group activities, such as team sports or yoga, provide social interaction that further boosts emotional well-being.

      Healthcare providers increasingly recommend exercise as part of treatment plans for mental health disorders.

      By combining physical activity with traditional therapies, patients achieve better long-term outcomes.
    `,
    },
    {
      id: 28,
      title: 'Advances in Organ Transplantation',
      summary:
        'New techniques and better anti-rejection drugs are improving success rates in organ transplantation.',
      image: '/blog4.jpg',
      date: '2024-05-01',
      author: 'Dr. Karen Mitchell',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Transplantation',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Organ transplantation has saved countless lives, but challenges such as organ rejection and limited donors remain.

      Advances in immunosuppressive drugs are helping reduce rejection rates, allowing patients to live longer and healthier lives.

      Techniques such as living-donor transplants and organ preservation methods are expanding the availability of organs.

      Researchers are also exploring bioengineering and 3D printing to create artificial organs in the future.

      These innovations are shaping a new era of transplantation medicine.
    `,
    },
    {
      id: 29,
      title: 'The Dangers of Antibiotic Resistance',
      summary:
        'Misuse of antibiotics is leading to resistant bacteria, posing a global health threat.',
      image: '/blog4.jpg',
      date: '2024-04-18',
      author: 'Dr. Hassan Ibrahim',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Infectious Diseases',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Antibiotic resistance occurs when bacteria evolve to withstand drugs that once killed them.

      Overuse and misuse of antibiotics in both humans and livestock are the main drivers of resistance.

      Resistant infections are harder to treat, often requiring stronger and more expensive drugs.

      Public health campaigns stress the importance of responsible antibiotic use and the development of new antimicrobial therapies.

      Without urgent action, antibiotic resistance could become one of the leading causes of death globally by 2050.
    `,
    },
    {
      id: 30,
      title: 'The Role of Technology in Medical Education',
      summary:
        'Virtual reality, simulations, and online platforms are transforming how future doctors are trained.',
      image: '/blog4.jpg',
      date: '2024-03-25',
      author: 'Dr. William Scott',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Medical Education',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Medical education has embraced technology to enhance learning and training for healthcare professionals.

      Virtual reality (VR) and simulation labs allow students to practice complex procedures in a risk-free environment.

      Online platforms provide access to lectures, case studies, and interactive modules that make learning more accessible.

      Technology also supports remote learning, enabling collaboration between students and experts worldwide.

      These innovations ensure that future doctors are better prepared to meet the demands of modern healthcare.
    `,
    },
    {
      id: 31,
      title: 'The Future of Personalized Medicine',
      summary:
        'Genomic data and advanced analytics are paving the way for treatments tailored to each individual.',
      image: '/blog4.jpg',
      date: '2024-03-10',
      author: 'Dr. Sarah Thompson',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Personalized Medicine',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Personalized medicine focuses on creating treatments that are customized for each patient’s unique genetic and biological makeup.

      Advances in genomics allow researchers to identify mutations and risk factors that predispose individuals to certain diseases.

      Therapies can then be tailored to target these factors, ensuring greater effectiveness and fewer side effects.

      This approach is particularly promising in oncology, where treatments can be designed around the genetic profile of a tumor.

      Personalized medicine represents a shift away from “one-size-fits-all” healthcare toward highly specialized care.
    `,
    },
    {
      id: 32,
      title: 'The Importance of Hydration in Health',
      summary: 'Staying hydrated supports digestion, brain function, and cardiovascular health.',
      image: '/blog4.jpg',
      date: '2024-02-20',
      author: 'Dr. Lina Hassan',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Wellness',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Water is essential for nearly every function in the body, from regulating temperature to transporting nutrients.

      Dehydration can lead to fatigue, headaches, and impaired concentration, while chronic dehydration increases the risk of kidney stones and urinary tract infections.

      Experts recommend drinking adequate water daily, though the exact amount varies depending on age, activity level, and climate.

      Hydration also supports skin health, joint lubrication, and efficient digestion.

      Developing healthy hydration habits is a simple but powerful way to maintain overall health.
    `,
    },
    {
      id: 33,
      title: 'The Role of Pharmacogenomics in Drug Development',
      summary:
        'Pharmacogenomics studies how genetic differences affect individual responses to medications.',
      image: '/blog4.jpg',
      date: '2024-02-05',
      author: 'Dr. Mark Johnson',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Pharmacology',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Pharmacogenomics explores how genes influence the way people metabolize and respond to drugs.

      Some patients experience severe side effects or poor effectiveness from medications due to genetic differences.

      By identifying these variations, doctors can prescribe drugs that are more effective and safer for each patient.

      This approach improves treatment outcomes and reduces trial-and-error prescribing.

      Pharmacogenomics is expected to become a cornerstone of modern drug development and personalized healthcare.
    `,
    },
    {
      id: 34,
      title: 'The Role of Community Health Workers',
      summary:
        'Community health workers bridge the gap between healthcare systems and underserved populations.',
      image: '/blog4.jpg',
      date: '2024-01-18',
      author: 'Dr. Angela Brooks',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Public Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Community health workers (CHWs) are vital in delivering healthcare services to marginalized and underserved populations.

      They provide education, basic medical care, and connect individuals with healthcare facilities.

      CHWs are especially effective in rural areas where access to hospitals is limited.

      Their work improves vaccination rates, maternal health, and disease prevention.

      Strengthening community health programs ensures more equitable access to healthcare services worldwide.
    `,
    },
    {
      id: 35,
      title: 'The Connection Between Stress and Physical Health',
      summary:
        'Chronic stress contributes to a wide range of physical illnesses, from hypertension to digestive disorders.',
      image: '/blog4.jpg',
      date: '2023-12-22',
      author: 'Dr. Robert Clark',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Mental Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Stress is a natural response to challenges, but chronic stress has significant negative effects on the body.

      Prolonged stress increases cortisol levels, which contribute to high blood pressure, weakened immunity, and digestive problems.

      Stress management techniques such as mindfulness, exercise, and therapy can reduce these risks.

      Healthcare providers increasingly recognize stress management as a critical part of preventive medicine.

      Addressing stress improves not only mental health but also long-term physical well-being.
    `,
    },
    {
      id: 36,
      title: 'The Evolution of Emergency Medicine',
      summary:
        'Advances in emergency medicine have improved survival rates for trauma and critical conditions.',
      image: '/blog4.jpg',
      date: '2023-12-05',
      author: 'Dr. Kevin Adams',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Emergency Medicine',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Emergency medicine has advanced significantly with better equipment, protocols, and training.

      Modern ambulances are equipped with life-saving devices, and emergency rooms now use advanced imaging and rapid testing for faster diagnosis.

      Trauma care has improved with standardized guidelines that reduce mortality in accident victims.

      Tele-emergency systems are emerging, allowing specialists to guide local teams remotely.

      These improvements ensure faster response times and better patient outcomes in life-threatening situations.
    `,
    },
    {
      id: 37,
      title: 'The Impact of Climate Change on Health',
      summary:
        'Climate change is increasing the prevalence of respiratory diseases, malnutrition, and heat-related illnesses.',
      image: '/blog4.jpg',
      date: '2023-11-12',
      author: 'Dr. Rachel Miller',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Public Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Climate change is one of the biggest public health threats of the 21st century.

      Rising temperatures contribute to heat-related illnesses, while poor air quality worsens respiratory conditions like asthma.

      Changes in rainfall and agriculture increase the risk of malnutrition in vulnerable populations.

      Warmer climates also expand the habitats of disease-carrying insects like mosquitoes, spreading malaria and dengue fever.

      Addressing climate change requires urgent action to protect global health and sustainability.
    `,
    },
    {
      id: 38,
      title: 'The Science of Healthy Aging',
      summary:
        'Research into longevity and healthy aging is helping people live longer, more active lives.',
      image: '/blog4.jpg',
      date: '2023-10-25',
      author: 'Dr. Emily White',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Geriatrics',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',
      content: `
      Aging is a natural process, but research is uncovering ways to promote healthy longevity.
      Factors such as diet, exercise, and social engagement play crucial roles in reducing age-related diseases.
      Advances in biotechnology are exploring ways to slow cellular aging and enhance organ function.
      Healthy aging focuses not only on lifespan but also on maintaining quality of life, independence, and vitality.
      With global populations living longer, promoting healthy aging has become a healthcare priority.
    `,
    },
    {
      id: 39,
      title: 'The Role of Public Health Campaigns',
      summary:
        'Awareness campaigns play a vital role in preventing disease and promoting healthier lifestyles.',
      image: '/blog4.jpg',
      date: '2023-09-30',
      author: 'Dr. Mohammed Ali',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Public Health',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',

      content: `
      Public health campaigns are essential in educating communities about disease prevention and healthy living.

      Campaigns targeting smoking cessation, healthy eating, and safe sex have saved millions of lives.

      Social media and digital platforms now amplify the reach of these messages, especially among younger audiences.

      Effective campaigns use clear communication, relatable stories, and community involvement.

      By raising awareness, public health campaigns encourage behavior change and reduce the burden of disease worldwide.
    `,
    },
    {
      id: 40,
      title: 'The Promise of Regenerative Medicine',
      summary:
        'Regenerative medicine uses stem cells and tissue engineering to repair or replace damaged organs.',
      image: '/blog4.jpg',
      date: '2023-09-12',
      author: 'Dr. Steven Parker',
      interface:"In today's fast-paced world, access to quality healthcare shouldn't be a luxury—it should be a fundamental right. At One Medical, we're reimagining what primary care can be, combining cutting-edge technology with the personal touch that makes all the difference in your health journey.",
      category: 'Regenerative Medicine',
      doctorTalk:
        'One Medical has transformed how I think about healthcare. The convenience of virtual visits combined with the expertise of my care team means I can prioritize my health without disrupting my life.',
      content: `
      Regenerative medicine is a rapidly advancing field that focuses on repairing damaged tissues and organs.
      Stem cell research and tissue engineering are being used to regenerate skin, cartilage, and even parts of the heart.
      These therapies offer hope for conditions that currently have limited treatment options, such as spinal cord injuries.
      While many therapies are still experimental, clinical trials are showing promising results.
      Regenerative medicine could revolutionize healthcare by reducing the need for organ transplants and improving recovery outcomes.
    `,
    },
  ];

  doctors = [
    {
      id: 1,
      imgUrl: 'doctor1.jpg',
      name: 'Dr. Jonathon Ronan',
      jobTitle: 'Cardiologist',
      country: 'Egypt',
    },
    {
      id: 2,
      imgUrl: 'doctor2.jpg',
      name: 'Dr. Walter White',
      jobTitle: 'Cardiologist',
      country: 'USA',
    },
    {
      id: 3,
      imgUrl: 'doctor3.jpg',
      name: 'Dr. Victor James',
      jobTitle: 'Cardiologist , Orthopedist',
      country: 'Japan',
    },
    {
      id: 4,
      imgUrl: 'doctor5.jpg',
      name: 'Dr. Philips Rownd',
      jobTitle: 'Cardiologist , Gynocologist',
      country: 'Barsil',
    },
    {
      id: 5,
      imgUrl: 'doctor9.jpg',
      name: 'Dr. Jane Ronan',
      jobTitle: 'Cardiologist , Nutritionist , Orthopedist',
      country: 'India',
    },
    {
      id: 6,
      imgUrl: 'doctor1.jpg',
      name: 'Dr. Jonathon Ronan',
      jobTitle: 'Cardiologist',
      country: 'Egypt',
    },
    {
      id: 7,
      imgUrl: 'doctor2.jpg',
      name: 'Dr. Walter White',
      jobTitle: 'Cardiologist',
      country: 'USA',
    },
    {
      id: 8,
      imgUrl: 'doctor3.jpg',
      name: 'Dr. Victor James',
      jobTitle: 'Cardiologist , Orthopedist',
      country: 'Japan',
    },
    {
      id: 9,
      imgUrl: 'doctor5.jpg',
      name: 'Dr. Philips Rownd',
      jobTitle: 'Cardiologist , Gynocologist',
      country: 'Barsil',
    },
    {
      id: 10,
      imgUrl: 'doctor9.jpg',
      name: 'Dr. Jane Ronan',
      jobTitle: 'Cardiologist , Nutritionist , Orthopedist',
      country: 'India',
    },
  ];

  constructor(private router : Router){}
  getArticlesbyCategory(category: string, searchValue: string) {
    if (category === 'All') category = '';
    return this.articles.filter(
      (article) =>
        article.category.includes(category) &&
        (article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchValue.toLowerCase()) ||
          article.content.includes(searchValue))
    );
  }

  getDoctors(name: string, jobTitle: string, country: string) {
    if (jobTitle === 'All Specialties') jobTitle = '';
    if (country == 'All Countries') country = '';
    console.log(jobTitle, country, name);

    return this.doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(name.toLowerCase()) &&
        doctor.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()) &&
        doctor.country.toLowerCase().includes(country.toLowerCase())
    );
  }

  getOneDoctor(id: number) {
    return this.doctors.filter((doctor) => doctor.id === id)[0];
  }


   OneArticlePage(article:any){
    this.router.navigate(['/one-article'], {
      state: article
    });
    return article;
  }
}
