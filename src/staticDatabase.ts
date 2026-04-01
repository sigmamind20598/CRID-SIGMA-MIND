import { Professor, NewsItem } from "./types";

export const FACULTY_DATABASE: Record<string, Professor[]> = {
  "Indian Institute of Technology Hyderabad": [
    {
      "id": "iith-1",
      "name": "Prof. Shubha Ranganathan",
      "specialization": "Cultural Psychology, Mental Health",
      "focus": "Healing practices, gender, and mental health in India.",
      "scholarLink": "https://lacc.iith.ac.in/faculty/shubha.html",
      "citations": "500",
      "topPapers": [
        "Healing practices in India (2023)",
        "Gender and mental health (2022)",
        "Cultural psychology of emotion (2021)",
        "Qualitative research methods (2020)",
        "Psychology of religion (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iith-1-i1",
          "title": "Traditional Healing Practices",
          "description": "Psychological mechanisms underlying indigenous healing rituals.",
          "sourcePublication": "Healing practices in India (2023)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Observation"
        },
        {
          "id": "iith-1-i2",
          "title": "Gender and Well-being",
          "description": "The impact of patriarchal structures on women's mental health.",
          "sourcePublication": "Gender and mental health (2022)",
          "gapType": "Theoretical Gap",
          "difficulty": "Intermediate",
          "methodology": "Semi-structured Interviews"
        },
        {
          "id": "iith-1-i3",
          "title": "Cultural Constructions of Emotion",
          "description": "How different cultures experience and express distress.",
          "sourcePublication": "Cultural psychology of emotion (2021)",
          "gapType": "Conceptual Gap",
          "difficulty": "Advanced",
          "methodology": "Phenomenological Analysis"
        },
        {
          "id": "iith-1-i4",
          "title": "Stigma and Mental Illness",
          "description": "Cultural variations in the stigmatization of psychiatric disorders.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey Research"
        },
        {
          "id": "iith-1-i5",
          "title": "Psychology of Religion",
          "description": "The role of faith and spirituality in coping with adversity.",
          "sourcePublication": "Psychology of religion (2019)",
          "gapType": "Empirical Gap",
          "difficulty": "Intermediate",
          "methodology": "Case Study"
        },
        {
          "id": "iith-1-i6",
          "title": "Narrative Approaches to Identity",
          "description": "How individuals construct meaning through personal stories.",
          "sourcePublication": "Qualitative research methods (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Narrative Analysis"
        },
        {
          "id": "iith-1-i7",
          "title": "Community Mental Health",
          "description": "Evaluating grassroots interventions for psychosocial support.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Action Research"
        },
        {
          "id": "iith-1-i8",
          "title": "Intersectionality and Health",
          "description": "How caste, class, and gender intersect to influence health outcomes.",
          "sourcePublication": "Gender and mental health (2022)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Grounded Theory"
        },
        {
          "id": "iith-1-i9",
          "title": "Qualitative Methods in Psychology",
          "description": "Advancing ethnographic and phenomenological research methodologies.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Meta-synthesis"
        },
        {
          "id": "iith-1-i10",
          "title": "Youth and Identity",
          "description": "Navigating cultural transitions and globalization among Indian youth.",
          "sourcePublication": "Cultural psychology of emotion (2021)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Focus Group Discussions"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyhyderabad-new-1",
      "name": "Prof. Mahati Chittem",
      "specialization": "Health Psychology",
      "focus": "Psycho-oncology, chronic illness, and patient-provider communication.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Mahati%20Chittem",
      "citations": "1659",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i1",
          "title": "Psychosocial Impact of Cancer Diagnosis",
          "description": "Psychological mechanisms underlying the emotional response to a cancer diagnosis.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Emotional Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i2",
          "title": "Patient-Provider Communication in Chronic Care",
          "description": "Analyzing communication patterns between patients and healthcare providers in chronic illness management.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Communication Gap",
          "difficulty": "Advanced",
          "methodology": "Conversation Analysis"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i3",
          "title": "Caregiver Burden in Oncology",
          "description": "Exploring the psychological and physical burden on caregivers of cancer patients.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i4",
          "title": "Adherence to Treatment in Chronic Illness",
          "description": "Investigating factors that influence patient adherence to long-term treatment regimens.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Behavioral Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i5",
          "title": "Coping Strategies in Palliative Care",
          "description": "Identifying effective coping mechanisms for patients in end-of-life care.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Conceptual Gap",
          "difficulty": "Advanced",
          "methodology": "Grounded Theory"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i6",
          "title": "Digital Health Interventions for Mental Well-being",
          "description": "Evaluating the effectiveness of mobile apps in supporting mental health for chronic patients.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Usability Testing"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i7",
          "title": "Stigma Associated with Chronic Diseases",
          "description": "Examining the social stigma faced by individuals with chronic illnesses in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey Research"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i8",
          "title": "Quality of Life in Cancer Survivors",
          "description": "Assessing the long-term quality of life and psychological needs of cancer survivors.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i9",
          "title": "Cultural Influences on Health-Seeking Behavior",
          "description": "How cultural beliefs shape decisions to seek medical help for chronic conditions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Interviews"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-1-i10",
          "title": "Resilience in Patients with Chronic Pain",
          "description": "Factors contributing to psychological resilience in individuals living with chronic pain.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Psychological Gap",
          "difficulty": "Intermediate",
          "methodology": "Correlational Study"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyhyderabad-new-2",
      "name": "Prof. Amrita Lamba",
      "specialization": "Cognitive Science",
      "focus": "Decision making and social cognition.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Amrita%20Lamba",
      "citations": "2593",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i1",
          "title": "Social Influence on Risky Decision Making",
          "description": "Investigating how social context and peer pressure influence risk-taking behavior.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Social Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Task"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i2",
          "title": "Neural Correlates of Moral Judgment",
          "description": "Mapping the brain regions involved in complex moral and ethical decision making.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Study"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i3",
          "title": "Cognitive Biases in Financial Decisions",
          "description": "Exploring how heuristics and biases affect investment and spending choices.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i4",
          "title": "Impact of Stress on Social Cognition",
          "description": "How acute and chronic stress affects the ability to understand others' mental states.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Environmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychophysiological Measures"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i5",
          "title": "Development of Decision Making in Adolescents",
          "description": "Tracking the maturation of cognitive control and reward processing in youth.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i6",
          "title": "Cross-cultural Differences in Cooperation",
          "description": "Examining how cultural norms influence cooperative behavior in social dilemmas.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory Experiments"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i7",
          "title": "Role of Emotion in Heuristic Processing",
          "description": "Investigating how emotional states trigger or inhibit the use of cognitive shortcuts.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Affective Gap",
          "difficulty": "Intermediate",
          "methodology": "Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i8",
          "title": "Neuroplasticity and Strategic Learning",
          "description": "How the brain adapts to new strategic environments through learning and feedback.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "EEG Analysis"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i9",
          "title": "Trust and Reciprocity in Virtual Teams",
          "description": "Exploring the dynamics of trust and cooperation in digital work environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Online Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-2-i10",
          "title": "Metacognitive Monitoring in Social Interactions",
          "description": "How individuals monitor their own social performance and adjust their behavior.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Metacognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Self-report and Behavioral Tasks"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyhyderabad-new-3",
      "name": "Prof. E. Reddy",
      "specialization": "Cognitive Psychology",
      "focus": "Memory and learning.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Reddy",
      "citations": "1293",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i1",
          "title": "Working Memory Training and Transfer Effects",
          "description": "Investigating whether training on working memory tasks improves performance in other cognitive domains.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Transfer Gap",
          "difficulty": "Advanced",
          "methodology": "Pre-post Experimental Design"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i2",
          "title": "Role of Sleep in Memory Consolidation",
          "description": "Examining how different stages of sleep contribute to the stabilization of new memories.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Biological Gap",
          "difficulty": "Advanced",
          "methodology": "Polysomnography"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i3",
          "title": "Interference in Long-term Memory Retrieval",
          "description": "How competing information affects the ability to retrieve specific long-term memories.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Retrieval Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Interference Tasks"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i4",
          "title": "Implicit Learning in Skill Acquisition",
          "description": "Exploring the mechanisms of learning complex skills without conscious awareness.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Awareness Gap",
          "difficulty": "Intermediate",
          "methodology": "Serial Reaction Time Task"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i5",
          "title": "Cognitive Load and Online Learning",
          "description": "Assessing how digital learning environments impact cognitive load and information retention.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Instructional Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental User Study"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i6",
          "title": "False Memory Formation in Social Contexts",
          "description": "How social pressure and misinformation contribute to the creation of false memories.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Social Gap",
          "difficulty": "Advanced",
          "methodology": "Deese-Roediger-McDermott (DRM) Paradigm"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i7",
          "title": "Aging and Prospective Memory",
          "description": "Investigating age-related changes in the ability to remember to perform future actions.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Age Gap",
          "difficulty": "Intermediate",
          "methodology": "Naturalistic Tasks"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i8",
          "title": "Neurofeedback for Enhancing Attention",
          "description": "Evaluating the use of real-time brain activity feedback to improve attentional focus.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Advanced",
          "methodology": "EEG Biofeedback"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i9",
          "title": "Visual-Spatial Memory in Navigation",
          "description": "Exploring how individuals encode and retrieve spatial information for navigation.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Spatial Gap",
          "difficulty": "Intermediate",
          "methodology": "Virtual Reality Navigation"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-3-i10",
          "title": "Metamemory Accuracy in Students",
          "description": "Assessing the accuracy of students' self-monitoring of their own memory performance.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Metacognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Judgment of Learning (JOL) Tasks"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyhyderabad-new-4",
      "name": "Prof. F. Rao",
      "specialization": "Social Psychology",
      "focus": "Intergroup relations.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20F.%20Rao",
      "citations": "4059",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i1",
          "title": "Prejudice Reduction through Intergroup Contact",
          "description": "Evaluating the effectiveness of structured contact in reducing bias between social groups.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiment"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i2",
          "title": "Social Identity and Collective Action",
          "description": "Investigating the psychological drivers of group-based activism and social change.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Motivational Gap",
          "difficulty": "Advanced",
          "methodology": "Survey and Structural Equation Modeling"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i3",
          "title": "Impact of Media on Stereotype Formation",
          "description": "How media representations shape and reinforce social stereotypes in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Media Gap",
          "difficulty": "Intermediate",
          "methodology": "Content Analysis and Experiments"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i4",
          "title": "Intergroup Conflict in Diverse Workplaces",
          "description": "Exploring the causes and consequences of social friction in multicultural organizations.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Case Study and Interviews"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i5",
          "title": "Role of Empathy in Resolving Social Tensions",
          "description": "Can empathy-inducing interventions reduce hostility between conflicting groups?",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Affective Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Manipulation"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i6",
          "title": "National Identity and Xenophobia",
          "description": "Examining the relationship between strong national identification and attitudes toward outsiders.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Political Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-national Survey Analysis"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i7",
          "title": "Social Categorization in Children",
          "description": "How children learn to categorize others based on social groups and its impact on behavior.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Observational Study"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i8",
          "title": "Online Hate Speech and Group Polarization",
          "description": "Investigating how digital platforms contribute to the radicalization of group identities.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Digital Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analysis"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i9",
          "title": "Trust Building in Post-conflict Societies",
          "description": "Psychological strategies for restoring trust between groups after prolonged conflict.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Societal Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyhyderabad-new-4-i10",
          "title": "Implicit Bias in Healthcare Settings",
          "description": "Assessing how unconscious biases among healthcare providers affect patient outcomes.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Implicit Association Test (IAT)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Bombay": [
    {
      "id": "iitb-1",
      "name": "Prof. Azizuddin Khan",
      "specialization": "Cognitive Psychology",
      "focus": "Working memory, prospective memory, and developmental dyslexia.",
      "scholarLink": "https://www.hss.iitb.ac.in/en/faculty-profile/azizuddin-khan",
      "citations": "1200",
      "topPapers": [
        "Working memory and emotion (2023)",
        "Prospective memory in aging (2022)",
        "Cognitive deficits in dyslexia (2021)",
        "Executive functions and learning (2020)",
        "Emotion regulation and cognition (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitb-1-i1",
          "title": "Emotion and Working Memory",
          "description": "How emotional states affect the capacity and updating of working memory.",
          "sourcePublication": "Working memory and emotion (2023)",
          "gapType": "Affective Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Task"
        },
        {
          "id": "iitb-1-i2",
          "title": "Prospective Memory in the Elderly",
          "description": "Interventions to improve remembering to perform future intentions.",
          "sourcePublication": "Prospective memory in aging (2022)",
          "gapType": "Age Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Study"
        },
        {
          "id": "iitb-1-i3",
          "title": "Cognitive Profiles of Dyslexia",
          "description": "Identifying specific executive function deficits in Indian children with dyslexia.",
          "sourcePublication": "Cognitive deficits in dyslexia (2021)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Neuropsychological Assessment"
        },
        {
          "id": "iitb-1-i4",
          "title": "Stress and Executive Control",
          "description": "The impact of acute stress on inhibitory control and cognitive flexibility.",
          "sourcePublication": "Executive functions and learning (2020)",
          "gapType": "Environmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychophysiological Measures"
        },
        {
          "id": "iitb-1-i5",
          "title": "Bilingualism and Cognitive Reserve",
          "description": "Does speaking multiple languages protect against cognitive decline?",
          "sourcePublication": "Emotion regulation and cognition (2019)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-sectional Comparison"
        },
        {
          "id": "iitb-1-i6",
          "title": "Metacognition in Learning",
          "description": "How students monitor and control their own learning processes.",
          "sourcePublication": "Executive functions and learning (2020)",
          "gapType": "Metacognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Self-report and Behavioral Tasks"
        },
        {
          "id": "iitb-1-i7",
          "title": "Sleep and Memory Consolidation",
          "description": "The role of sleep architecture in stabilizing newly acquired memories.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Biological Gap",
          "difficulty": "Advanced",
          "methodology": "Polysomnography"
        },
        {
          "id": "iitb-1-i8",
          "title": "Cognitive Training Interventions",
          "description": "Evaluating computerized working memory training programs.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Interventional Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "iitb-1-i9",
          "title": "Attention Deficits in ADHD",
          "description": "Differentiating between types of attentional impairments in ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Continuous Performance Task (CPT)"
        },
        {
          "id": "iitb-1-i10",
          "title": "Neurofeedback for Dyslexia",
          "description": "Using EEG biofeedback to improve reading fluency.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG Biofeedback"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybombay-new-0",
      "name": "Prof. Rashmi Gupta",
      "specialization": "Cognitive Neuroscience",
      "focus": "Visual attention, emotion, and cognitive control.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Rashmi%20Gupta",
      "citations": "1508",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybombay-new-0-i1",
          "title": "Emotion-Attention Interaction in Decision Making",
          "description": "Investigating how emotional stimuli capture attention and bias cognitive choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Affective Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and behavioral tasks"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i2",
          "title": "Neuroplasticity and Attentional Control Training",
          "description": "Evaluating the long-term effects of attention training on brain connectivity.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and DTI"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i3",
          "title": "Cognitive Control in Clinical Anxiety",
          "description": "Assessing deficits in inhibitory control among individuals with generalized anxiety disorder.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Flanker Task and EEG"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i4",
          "title": "Advanced Modeling of Visual Search",
          "description": "Developing computational models to simulate human visual search patterns in complex scenes.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling (Saliency Maps)"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i5",
          "title": "Cultural Variations in Attentional Bias",
          "description": "Comparing holistic vs. analytic attention patterns between Indian and Western samples.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-cultural Survey and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i6",
          "title": "Bayesian Analysis of Perceptual Data",
          "description": "Applying Bayesian hierarchical modeling to understand individual differences in perception.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Statistical Gap",
          "difficulty": "Advanced",
          "methodology": "Bayesian Inference"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i7",
          "title": "Theoretical Frameworks for Multitasking",
          "description": "Proposing a new model for cognitive resource allocation during simultaneous task performance.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Formal Logic and Simulation"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i8",
          "title": "Cognitive Load in High-Stress Occupations",
          "description": "Measuring the impact of environmental stressors on the cognitive control of air traffic controllers.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Study and Psychophysiology"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i9",
          "title": "Development of Executive Functions in Children",
          "description": "A longitudinal study on the maturation of the prefrontal cortex and its role in attention.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Neuroimaging"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-0-i10",
          "title": "Validating New Attentional Assessment Tools",
          "description": "Testing the reliability and validity of a novel digital tool for measuring cognitive control.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybombay-new-1",
      "name": "Prof. Meenakshi Gupta",
      "specialization": "Organizational Behavior",
      "focus": "Leadership, work-life balance, and employee well-being.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Meenakshi%20Gupta",
      "citations": "1135",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybombay-new-1-i1",
          "title": "Leadership and Employee Resilience",
          "description": "How transformational leadership fosters psychological resilience in high-pressure environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Leadership Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and SEM"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i2",
          "title": "Work-Life Balance in Remote Teams",
          "description": "Investigating the boundaries between personal and professional life in the era of telecommuting.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i3",
          "title": "Cognitive Biases in Performance Appraisal",
          "description": "Identifying heuristics that lead to unfair evaluations in corporate settings.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Vignette Study"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i4",
          "title": "Impact of Mindfulness on Workplace Stress",
          "description": "Evaluating a mindfulness-based intervention for reducing burnout among healthcare workers.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i5",
          "title": "Cultural Values and Organizational Commitment",
          "description": "How collectivist vs. individualist values influence loyalty to the organization.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i6",
          "title": "Quantitative Modeling of Employee Turnover",
          "description": "Using survival analysis to predict the likelihood of employees leaving based on job satisfaction.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Survival Analysis"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i7",
          "title": "Theoretical Models of Team Synergy",
          "description": "Developing a new framework for understanding emergent properties in collaborative groups.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Analysis"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i8",
          "title": "Early Career Trajectories and Mentorship",
          "description": "The role of formal and informal mentoring in the professional development of young graduates.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i9",
          "title": "Psychometric Testing for Recruitment",
          "description": "Developing a culturally sensitive tool for assessing personality traits in Indian job applicants.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-1-i10",
          "title": "Neuroplasticity and Skill Acquisition in Adults",
          "description": "How continuous professional learning affects brain structure and cognitive efficiency.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "MRI Study"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybombay-new-2",
      "name": "Prof. Pooja Purang",
      "specialization": "Organizational Psychology",
      "focus": "Organizational justice, commitment, and values.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Pooja%20Purang",
      "citations": "3976",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybombay-new-2-i1",
          "title": "Organizational Justice and Employee Engagement",
          "description": "How perceptions of fairness in resource allocation influence commitment to the organization.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Justice Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Path Analysis"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i2",
          "title": "Values Congruence and Job Satisfaction",
          "description": "Investigating the alignment between personal values and organizational culture.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Value Gap",
          "difficulty": "Intermediate",
          "methodology": "Person-Organization Fit Analysis"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i3",
          "title": "Impact of Ethical Leadership on Corporate Social Responsibility",
          "description": "Exploring how leaders' ethical standards drive organizational commitment to social causes.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Leadership Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-level Modeling"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i4",
          "title": "Psychological Contracts in the Gig Economy",
          "description": "Analyzing the unwritten expectations between freelance workers and digital platforms.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Case Study"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i5",
          "title": "Cognitive Mechanisms of Fairness Judgments",
          "description": "How individuals process information to determine if a decision is just.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i6",
          "title": "Cross-cultural Perspectives on Organizational Justice",
          "description": "Comparing fairness perceptions in Indian vs. Western corporate environments.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i7",
          "title": "Quantitative Assessment of Organizational Commitment",
          "description": "Developing a new mathematical model to predict employee retention.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i8",
          "title": "Theoretical Models of Workplace Motivation",
          "description": "Integrating intrinsic and extrinsic factors into a unified theory of motivation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i9",
          "title": "Development of Professional Identity in Interns",
          "description": "A longitudinal study on how early work experiences shape career values.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Interviews"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-2-i10",
          "title": "Validating Organizational Justice Scales in India",
          "description": "Adapting and validating standard justice measures for the Indian workforce.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybombay-new-3",
      "name": "Prof. T. Bhattacharya",
      "specialization": "Cognitive Science",
      "focus": "Language processing and cognitive modeling.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20T.%20Bhattacharya",
      "citations": "3117",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybombay-new-3-i1",
          "title": "Cognitive Modeling of Sentence Processing",
          "description": "Developing computational models to simulate how humans parse complex syntactic structures.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Connectionist Modeling"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i2",
          "title": "Language Acquisition in Multilingual Environments",
          "description": "Investigating the cognitive mechanisms of learning multiple languages simultaneously.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Study"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i3",
          "title": "Neural Correlates of Semantic Processing",
          "description": "Mapping brain regions involved in understanding word meanings and associations.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and ERP"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i4",
          "title": "Impact of Cognitive Load on Language Production",
          "description": "How limited cognitive resources affect the fluency and accuracy of speech.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Dual-task Paradigm"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i5",
          "title": "Cross-linguistic Differences in Spatial Cognition",
          "description": "Exploring how different languages influence the mental representation of space.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i6",
          "title": "Quantitative Analysis of Eye-tracking Data in Reading",
          "description": "Using hidden Markov models to analyze gaze patterns during text comprehension.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and HMM"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i7",
          "title": "Behavioral Interventions for Language Disorders",
          "description": "Evaluating the effectiveness of cognitive training for individuals with aphasia.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Single-case Experimental Design"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i8",
          "title": "Applied Psycholinguistics in Human-Computer Interaction",
          "description": "Optimizing natural language interfaces based on cognitive processing principles.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "User Experience (UX) Testing"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i9",
          "title": "Advanced Methodologies in Corpus Linguistics",
          "description": "Using machine learning to extract semantic patterns from large-scale text corpora.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Natural Language Processing (NLP)"
        },
        {
          "id": "indianinstituteoftechnologybombay-new-3-i10",
          "title": "Psychometric Evaluation of Language Proficiency Tests",
          "description": "Assessing the reliability and validity of standardized tests for bilingual speakers.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Item Response Theory (IRT)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Madras": [
    {
      "id": "iitm-1",
      "name": "Prof. Aditya Kumar",
      "specialization": "Organizational Psychology",
      "focus": "Workplace well-being, leadership, and organizational behavior.",
      "scholarLink": "#",
      "citations": "1100",
      "topPapers": [
        "Leadership styles and employee well-being (2023)",
        "Work-life integration in the digital age (2022)",
        "Organizational justice and commitment (2021)",
        "Stress and burnout in IT professionals (2020)",
        "Diversity and inclusion in the workplace (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitm-1-i1",
          "title": "Remote Work and Employee Engagement",
          "description": "The impact of telecommuting on organizational identification.",
          "sourcePublication": "Work-life integration in the digital age (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Path Analysis"
        },
        {
          "id": "iitm-1-i2",
          "title": "Toxic Leadership and Mental Health",
          "description": "Consequences of abusive supervision on subordinate mental health.",
          "sourcePublication": "Leadership styles and employee well-being (2023)",
          "gapType": "Leadership Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey"
        },
        {
          "id": "iitm-1-i3",
          "title": "Psychological Capital in Indian Startups",
          "description": "Developing resilience, optimism, and self-efficacy in high-pressure environments.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Intervention Study"
        },
        {
          "id": "iitm-1-i4",
          "title": "Workplace Bullying and Organizational Climate",
          "description": "Bystander interventions and their role in shaping a safe work environment.",
          "sourcePublication": "Organizational justice and commitment (2021)",
          "gapType": "Justice Gap",
          "difficulty": "Advanced",
          "methodology": "Mixed Methods"
        },
        {
          "id": "iitm-1-i5",
          "title": "Gig Economy and Psychological Contracts",
          "description": "Job insecurity and contract breach among freelancers in the digital era.",
          "sourcePublication": "Work-life integration in the digital age (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Case Study"
        },
        {
          "id": "iitm-1-i6",
          "title": "Women in Leadership: The Indian Context",
          "description": "Overcoming the glass ceiling and labyrinth in the Indian corporate sector.",
          "sourcePublication": "Diversity and inclusion in the workplace (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Phenomenological Study"
        },
        {
          "id": "iitm-1-i7",
          "title": "Readiness for Organizational Change",
          "description": "Analyzing factors that influence employee resistance to digital transformation.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Structural Equation Modeling (SEM)"
        },
        {
          "id": "iitm-1-i8",
          "title": "Cross-Cultural Management in MNCs",
          "description": "Managing diverse teams and fostering inclusion in global organizations.",
          "sourcePublication": "Diversity and inclusion in the workplace (2019)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "iitm-1-i9",
          "title": "Emotional Intelligence and Conflict Resolution",
          "description": "The role of EI in effective negotiation and workplace harmony.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Observation"
        },
        {
          "id": "iitm-1-i10",
          "title": "Sustainable HR and Employee Behavior",
          "description": "Linking green HRM practices to pro-environmental behaviors at work.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey Research"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymadras-new-0",
      "name": "Prof. V. R. Sujatha",
      "specialization": "Sociology of Health",
      "focus": "Medical sociology and health systems.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20V.%20R.%20Sujatha",
      "citations": "2521",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymadras-new-0-i1",
          "title": "Social Determinants of Health in Urban Slums",
          "description": "Investigating how social structures influence health outcomes in marginalized communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Population Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i2",
          "title": "Cultural Perceptions of Chronic Illness",
          "description": "How cultural beliefs shape the experience and management of long-term health conditions.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i3",
          "title": "Impact of Digital Health Interventions on Rural Populations",
          "description": "Evaluating the accessibility and effectiveness of telemedicine in remote areas.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i4",
          "title": "Gender Disparities in Healthcare Access",
          "description": "Analyzing social barriers that prevent women from seeking medical care.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Gender Gap",
          "difficulty": "Advanced",
          "methodology": "Sociological Analysis"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i5",
          "title": "Cognitive Barriers to Health-Seeking Behavior",
          "description": "How mental models and biases influence the decision to consult a doctor.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Survey"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i6",
          "title": "Quantitative Analysis of Public Health Data",
          "description": "Using statistical models to predict disease outbreaks based on social variables.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Epidemiological Modeling"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i7",
          "title": "Theoretical Frameworks in Medical Sociology",
          "description": "Developing new models to understand the patient-provider relationship in India.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Analysis"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i8",
          "title": "Workplace Health Programs and Employee Well-being",
          "description": "Assessing the impact of corporate wellness initiatives on organizational health.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Evaluation Research"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i9",
          "title": "Neuroplasticity and Recovery from Trauma",
          "description": "Investigating the social and neural factors that promote resilience after health crises.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Case Study"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-0-i10",
          "title": "Validating Health Literacy Assessment Tools",
          "description": "Adapting health literacy scales for diverse linguistic groups in India.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymadras-new-2",
      "name": "Prof. S. P. Dhanavel",
      "specialization": "Communication",
      "focus": "Interpersonal communication and soft skills.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20S.%20P.%20Dhanavel",
      "citations": "4019",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymadras-new-2-i1",
          "title": "Interpersonal Communication and Soft Skills Development",
          "description": "Enhancing employability through targeted communication training.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Training Evaluation"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i2",
          "title": "Impact of Non-verbal Communication in Virtual Teams",
          "description": "How digital cues affect trust and collaboration in remote work.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Study"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i3",
          "title": "Cognitive Processes in Effective Listening",
          "description": "Investigating the mental mechanisms that underlie active listening skills.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Cognitive Tasks"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i4",
          "title": "Cross-cultural Communication in Global Business",
          "description": "Strategies for overcoming linguistic and cultural barriers in international trade.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i5",
          "title": "Neural Correlates of Persuasive Communication",
          "description": "Mapping brain activity during the processing of persuasive messages.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Study"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i6",
          "title": "Quantitative Assessment of Communication Competence",
          "description": "Developing a standardized metric for measuring soft skills in professionals.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Validation"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i7",
          "title": "Behavioral Interventions for Public Speaking Anxiety",
          "description": "Testing the efficacy of virtual reality exposure therapy for social anxiety.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i8",
          "title": "Developmental Trajectories of Communication Skills in Children",
          "description": "A longitudinal study on how social interaction shapes language development.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Observation"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i9",
          "title": "Theoretical Models of Interpersonal Influence",
          "description": "Integrating social psychology and communication theory into a unified model.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Theoretical Synthesis"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-2-i10",
          "title": "Psychometric Evaluation of Soft Skills Assessment Tools",
          "description": "Ensuring the reliability and validity of tools used in corporate hiring.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Item Response Theory (IRT)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymadras-new-3",
      "name": "Prof. Richa Gupta",
      "specialization": "Cognitive Science",
      "focus": "HCI, accessibility, and cognitive design.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Richa%20Gupta",
      "citations": "729",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymadras-new-3-i1",
          "title": "Cognitive Load in Screen Reader Navigation",
          "description": "Investigating how different auditory feedback styles affect the mental workload of visually impaired users during web navigation.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Cognitive Load Scale and Behavioral Performance"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i2",
          "title": "Designing for Neurodiversity in Educational Software",
          "description": "Creating UI/UX guidelines that cater to the cognitive processing styles of students with ADHD and Dyslexia.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Population Gap",
          "difficulty": "Advanced",
          "methodology": "Participatory Design and User Testing"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i3",
          "title": "Haptic Feedback for Spatial Navigation in VR",
          "description": "Exploring the use of tactile cues to enhance spatial awareness in virtual environments for users with sensory impairments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "VR Simulation and Psychophysical Scaling"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i4",
          "title": "Cognitive Ergonomics of Remote Collaboration Tools",
          "description": "Analyzing the impact of 'Zoom fatigue' on decision-making quality and creative problem-solving in virtual teams.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i5",
          "title": "Adaptive Interfaces for Aging Populations",
          "description": "Developing UI elements that dynamically adjust based on the user's declining cognitive and motor skills.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning (User Modeling) and Field Study"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i6",
          "title": "Cross-Cultural Usability of Health Monitoring Apps",
          "description": "Investigating how cultural mental models of health influence the adoption and effective use of mobile health technologies.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed-methods (Interviews and Analytics)"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i7",
          "title": "Minimizing Distraction in Semi-Autonomous Vehicles",
          "description": "Designing dashboard interfaces that maintain driver situational awareness during transitions from automated to manual control.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Driving Simulator and EEG"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i8",
          "title": "Gamification and Cognitive Engagement in E-Learning",
          "description": "Testing the long-term retention effects of different gamification mechanics in adult education platforms.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Educational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i9",
          "title": "Ethical Design of Persuasive Technologies",
          "description": "Examining the cognitive biases exploited by 'dark patterns' in social media and developing defensive design patterns.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Ethical Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Manipulation and Ethical Audit"
        },
        {
          "id": "indianinstituteoftechnologymadras-new-3-i10",
          "title": "Mental Models of AI Trust in Professional Settings",
          "description": "How medical professionals build and calibrate trust in AI-driven diagnostic support systems.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Professional Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Trust Scales"
        }
      ]
    }
  ],
  "Indian Institute of Technology Kharagpur": [
    {
      "id": "iitkgp-1",
      "name": "Prof. Rajlakshmi Guha",
      "specialization": "Cognitive Psychology, Ergonomics",
      "focus": "Human factors, cognitive ergonomics, and mental workload.",
      "scholarLink": "http://www.iitkgp.ac.in/department/HS/faculty/hs-rajlakshmi",
      "citations": "850",
      "topPapers": [
        "Cognitive workload in aviation (2023)",
        "Human-computer interaction and usability (2022)",
        "Attention and driving performance (2021)",
        "Ergonomic design of workspaces (2020)",
        "Stress and human performance (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitkgp-1-i1",
          "title": "Mental Workload Assessment in High-Stakes Environments",
          "description": "Using physiological measures (EEG, HRV) to evaluate cognitive load during simulated aviation tasks.",
          "sourcePublication": "Cognitive workload in aviation (2023)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and HRV monitoring during flight simulation"
        },
        {
          "id": "iitkgp-1-i2",
          "title": "Impact of In-Vehicle Information Systems on Driver Distraction",
          "description": "Evaluating how different interface designs affect situational awareness and reaction times in young drivers.",
          "sourcePublication": "Attention and driving performance (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Driving Simulator Study with Eye-tracking"
        },
        {
          "id": "iitkgp-1-i3",
          "title": "Usability of Medical Devices in Emergency Care",
          "description": "Applying human factors principles to optimize the design of infusion pumps to reduce user errors.",
          "sourcePublication": "Human-computer interaction and usability (2022)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Heuristic Evaluation and Usability Testing"
        },
        {
          "id": "iitkgp-1-i4",
          "title": "Operator Reactions to Unexpected Automation Failures",
          "description": "Understanding the 'automation surprise' phenomenon and its impact on recovery performance in industrial control rooms.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Simulation and Behavioral Analysis"
        },
        {
          "id": "iitkgp-1-i5",
          "title": "Designing Adaptive Interfaces for Older Adults",
          "description": "Developing UI elements that adjust based on real-time cognitive decline indicators to improve digital inclusion.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "User Modeling and Longitudinal Testing"
        },
        {
          "id": "iitkgp-1-i6",
          "title": "Fatigue Management Interventions for Shift Workers",
          "description": "Evaluating the efficacy of scheduled napping and light therapy in mitigating cognitive fatigue in manufacturing plants.",
          "sourcePublication": "Stress and human performance (2019)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiment with Actigraphy"
        },
        {
          "id": "iitkgp-1-i7",
          "title": "Trust and Communication in Human-Robot Collaboration",
          "description": "Investigating how robot transparency affects human trust and team performance in shared assembly tasks.",
          "sourcePublication": "Human-computer interaction and usability (2022)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Wizard-of-Oz Experiment"
        },
        {
          "id": "iitkgp-1-i8",
          "title": "Evaluating Wayfinding Aids in Complex Virtual Environments",
          "description": "How different spatial cues in VR affect cognitive mapping and navigation efficiency.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "VR Navigation Task and Mental Map Sketching"
        },
        {
          "id": "iitkgp-1-i9",
          "title": "Optimizing Information Presentation for Rapid Decision Making",
          "description": "Comparing visual vs. auditory displays for critical alerts in high-pressure monitoring tasks.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Comparison of Display Modalities"
        },
        {
          "id": "iitkgp-1-i10",
          "title": "Neuroergonomics in Workplace Design and Safety",
          "description": "Using fNIRS to monitor prefrontal cortex activity during physically demanding tasks to predict injury risk.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fNIRS and Biomechanical Modeling"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykharagpur-new-0",
      "name": "Prof. Damodar Suar",
      "specialization": "Social Psychology",
      "focus": "Prosocial behavior, disaster management, and neuroeconomics.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Damodar%20Suar",
      "citations": "663",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i1",
          "title": "Neuroeconomics of Altruism in Disaster Relief",
          "description": "Investigating the neural correlates of donation behavior during natural disasters using fMRI.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Economics Tasks"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i2",
          "title": "Psychological Resilience in Flood-Prone Regions of India",
          "description": "Assessing the impact of community-based disaster management training on long-term mental health outcomes.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Field Interviews"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i3",
          "title": "Cross-Cultural Variations in Prosocial Risk-Taking",
          "description": "Comparing how different cultural values influence the willingness to help others in dangerous situations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Experimental Design"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i4",
          "title": "Impact of Social Media on Disaster Response Behavior",
          "description": "Analyzing how real-time information flow affects collective action and panic during urban disasters.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Big Data Analytics and Sentiment Analysis"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i5",
          "title": "Neuroplasticity and Prosocial Skill Development",
          "description": "Can empathy-based training lead to structural changes in the brain's social cognition network?",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Structural MRI and Longitudinal Training"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i6",
          "title": "Decision-Making under Uncertainty in Emergency Services",
          "description": "Evaluating the cognitive biases that affect first responders' performance during high-stress rescue operations.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Professional Gap",
          "difficulty": "Advanced",
          "methodology": "High-fidelity Simulation and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i7",
          "title": "Theoretical Models of Collective Resilience",
          "description": "Developing a unified framework for understanding how communities bounce back from repeated environmental shocks.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Synthesis and Case Study Analysis"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i8",
          "title": "Psychometric Assessment of Disaster Preparedness",
          "description": "Standardizing a tool to measure individual and household readiness for various types of disasters in India.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (EFA/CFA)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i9",
          "title": "Prosocial Behavior in Organizational Settings",
          "description": "How organizational culture influences employee volunteering and corporate social responsibility (CSR) participation.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Organizational Survey and Multi-level Modeling"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-0-i10",
          "title": "Developmental Trajectories of Empathy in Children",
          "description": "A longitudinal study on the role of parental modeling in the development of prosocial behavior in early childhood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Observation and Parent-Child Interaction Analysis"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykharagpur-new-1",
      "name": "Prof. Rabindra Kumar Pradhan",
      "specialization": "Organizational Psychology",
      "focus": "Emotional intelligence, HR, and positive psychology.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Rabindra%20Kumar%20Pradhan",
      "citations": "1349",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i1",
          "title": "Emotional Intelligence and Leadership in Virtual Teams",
          "description": "Investigating how leaders' EQ affects team cohesion and performance in fully remote work environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-source Feedback (360-degree) and Performance Analytics"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i2",
          "title": "Positive Psychology Interventions for Workplace Burnout",
          "description": "Evaluating the effectiveness of gratitude and mindfulness programs in reducing stress among healthcare professionals.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i3",
          "title": "Cross-Cultural Validity of Emotional Intelligence Scales",
          "description": "Assessing whether standard EQ measures capture the nuances of emotional expression in the Indian corporate sector.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Validation and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i4",
          "title": "Impact of HR Analytics on Employee Engagement",
          "description": "How data-driven decision-making in HR affects employees' perception of fairness and job satisfaction.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Case Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i5",
          "title": "Neuroplasticity and Soft Skills Training",
          "description": "Can intensive emotional intelligence training lead to functional changes in the prefrontal cortex?",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fNIRS and Longitudinal Training"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i6",
          "title": "Cognitive Biases in Recruitment and Selection",
          "description": "Identifying and mitigating unconscious biases in AI-assisted hiring processes.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Ethical Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Audit and Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i7",
          "title": "Theoretical Models of Organizational Flourishing",
          "description": "Developing a comprehensive model that integrates individual well-being with organizational productivity.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i8",
          "title": "Psychometric Evaluation of Workplace Resilience Tools",
          "description": "Validating a new scale to measure resilience in high-pressure startup environments.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i9",
          "title": "Developmental Trajectories of Career Aspirations",
          "description": "How early childhood experiences and family dynamics shape long-term career choices and work values.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Qualitative Study"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-1-i10",
          "title": "Impact of Advanced Methodologies on HR Research",
          "description": "Using experience sampling methods (ESM) to capture real-time fluctuations in employee mood and productivity.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Experience Sampling Method (ESM) via Mobile App"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykharagpur-new-2",
      "name": "Prof. Seema Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human factors, ergonomics, and cognitive modeling.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Seema%20Sharma",
      "citations": "1256",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i1",
          "title": "Cognitive Modeling of Pilot Error in High-Stress Situations",
          "description": "Developing a computational model to predict decision-making failures in aviation cockpits under emergency conditions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling (ACT-R or SOAR)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i2",
          "title": "Ergonomic Design of Wearable Health Devices for Seniors",
          "description": "Optimizing the interface and physical form factor of health trackers to improve usability for the elderly.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "User-Centered Design and Usability Testing"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i3",
          "title": "Impact of Neuroplasticity on Skill Acquisition in Industrial Settings",
          "description": "How targeted cognitive training can accelerate the learning curve for complex manual assembly tasks.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Study and EEG"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i4",
          "title": "Behavioral Interventions for Reducing Workplace Accidents",
          "description": "Testing the efficacy of 'nudge' based interventions in improving safety compliance in manufacturing plants.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiment (A/B Testing)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i5",
          "title": "Advanced Methodologies for Measuring Mental Workload",
          "description": "Integrating eye-tracking and heart rate variability (HRV) to provide a real-time index of cognitive strain.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-modal Sensor Fusion"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i6",
          "title": "Cross-Cultural Perspectives on Human-Robot Interaction",
          "description": "How cultural attitudes toward technology influence the trust and acceptance of social robots in domestic settings.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Experimental Interaction"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i7",
          "title": "Quantitative Analysis of Visual Search in Complex Displays",
          "description": "Using mathematical modeling to optimize the layout of control room interfaces for faster target detection.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i8",
          "title": "Developmental Trajectories of Spatial Cognition",
          "description": "How early exposure to digital maps vs. physical navigation affects the development of spatial reasoning in children.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i9",
          "title": "Psychometric Evaluation of Situational Awareness Scales",
          "description": "Validating a new tool for measuring situational awareness in cybersecurity analysts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-2-i10",
          "title": "Cognitive Mechanisms of Multi-tasking in Digital Environments",
          "description": "Investigating the switch costs and interference patterns when toggling between multiple high-demand digital tasks.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Paradigm and Behavioral Modeling"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykharagpur-new-3",
      "name": "Prof. Priyadarshi Patnaik",
      "specialization": "Cognitive Science",
      "focus": "Visual communication, aesthetics, and digital humanities.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Priyadarshi%20Patnaik",
      "citations": "4931",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i1",
          "title": "Cognitive Aesthetics of Digital Art",
          "description": "Investigating the neural and psychological factors that influence the perception of beauty in AI-generated vs. human-made art.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Aesthetic Rating Tasks"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i2",
          "title": "Impact of Visual Communication on Health Literacy",
          "description": "Designing and testing infographic-based interventions to improve medical information retention in rural populations.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Comprehension Tests"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i3",
          "title": "Digital Humanities and the Preservation of Cultural Heritage",
          "description": "Using advanced digital tools to analyze and preserve the visual narratives of indigenous Indian art forms.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Digital Archiving and Visual Content Analysis"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i4",
          "title": "Cognitive Mechanisms of Visual Metaphor Processing",
          "description": "How the brain decodes complex symbolic meanings in advertising and political communication.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Priming Tasks"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i5",
          "title": "Neuroplasticity and Visual Literacy Training",
          "description": "Can intensive training in visual analysis improve general cognitive flexibility and problem-solving skills?",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Study and MRI"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i6",
          "title": "Cross-Cultural Perspectives on Visual Symbolism",
          "description": "Comparing how different cultures interpret color and shape in the context of global branding.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-cultural Survey and Focus Groups"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i7",
          "title": "Quantitative Analysis of User Engagement with Digital Interfaces",
          "description": "Developing a mathematical model to predict user attention patterns on information-dense websites.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i8",
          "title": "Developmental Trajectories of Visual Narrative Comprehension",
          "description": "How children's ability to follow complex visual stories (e.g., in graphic novels) evolves with age.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i9",
          "title": "Psychometric Evaluation of Visual Literacy Scales",
          "description": "Validating a standardized tool to measure visual literacy in the context of digital media consumption.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "indianinstituteoftechnologykharagpur-new-3-i10",
          "title": "Applied Psychology in Digital Museum Contexts",
          "description": "Optimizing the visitor experience in virtual museums through cognitive-based design principles.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "User Testing and Behavioral Analytics"
        }
      ]
    }
  ],
  "Indian Institute of Technology Guwahati": [
    {
      "id": "iitg-1",
      "name": "Prof. Naveen Kashyap",
      "specialization": "Cognitive Psychology, Sleep",
      "focus": "Sleep, memory consolidation, and human cognition.",
      "scholarLink": "https://www.iitg.ac.in/hss/naveen",
      "citations": "700",
      "topPapers": [
        "Sleep and emotional memory (2023)",
        "Circadian rhythms and cognition (2022)",
        "Dreaming and memory consolidation (2021)",
        "Sleep deprivation and executive functions (2020)",
        "Chronotype and academic performance (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitg-1-i1",
          "title": "Targeted Memory Reactivation during Slow-Wave Sleep",
          "description": "Using auditory cues during sleep to enhance the consolidation of emotional vs. neutral memories.",
          "sourcePublication": "Sleep and emotional memory (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Polysomnography (PSG) and TMR Paradigm"
        },
        {
          "id": "iitg-1-i2",
          "title": "Sleep Deprivation and Reward Processing",
          "description": "How acute sleep loss alters neural sensitivity to gains and losses in financial decision making.",
          "sourcePublication": "Sleep deprivation and executive functions (2020)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Iowa Gambling Task"
        },
        {
          "id": "iitg-1-i3",
          "title": "Chronotype and Performance in Rotating Shift Work",
          "description": "Investigating how individual circadian preferences influence cognitive errors in industrial shift workers.",
          "sourcePublication": "Chronotype and academic performance (2019)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Actigraphy and Cognitive Testing"
        },
        {
          "id": "iitg-1-i4",
          "title": "Neural Correlates of Conscious Awareness in Lucid Dreams",
          "description": "Mapping brain activity transitions during the onset of lucidity using high-density EEG.",
          "sourcePublication": "Dreaming and memory consolidation (2021)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "High-density EEG and Eye-signal Verification"
        },
        {
          "id": "iitg-1-i5",
          "title": "REM Sleep and Creative Problem-Solving",
          "description": "The role of REM-related neural oscillations in fostering associative thinking and 'aha' moments.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Sleep Lab Study and Remote Associates Test"
        },
        {
          "id": "iitg-1-i6",
          "title": "Insomnia and the Neural Basis of Emotion Dysregulation",
          "description": "Investigating amygdala-prefrontal connectivity in chronic insomnia patients during emotional processing.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Resting-state fMRI and Emotional Stroop Task"
        },
        {
          "id": "iitg-1-i7",
          "title": "Optimizing Nap Duration for Cognitive Recovery",
          "description": "Comparing the effects of 20-minute vs. 90-minute naps on alertness and executive function in students.",
          "sourcePublication": "Chronotype and academic performance (2019)",
          "gapType": "Educational Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Design with Psychomotor Vigilance Task (PVT)"
        },
        {
          "id": "iitg-1-i8",
          "title": "Blue Light Exposure and Sleep Architecture in Indian Youth",
          "description": "The impact of evening smartphone use on melatonin levels and REM sleep duration.",
          "sourcePublication": "Circadian rhythms and cognition (2022)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Home Sleep Monitoring and Salivary Melatonin Assay"
        },
        {
          "id": "iitg-1-i9",
          "title": "Sleep Spindles as a Biomarker for Learning Potential",
          "description": "Investigating the longitudinal relationship between sleep spindle density and academic achievement.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal PSG and Standardized Testing"
        },
        {
          "id": "iitg-1-i10",
          "title": "Nightmares and Emotional Processing in PTSD",
          "description": "Understanding how distressing dreams contribute to the failure of fear extinction in trauma survivors.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Dream Diary and Physiological Arousal Monitoring"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyguwahati-new-1",
      "name": "Prof. Nachiketa Tripathi",
      "specialization": "Social Psychology",
      "focus": "Leadership, organizational behavior, and social values.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Nachiketa%20Tripathi",
      "citations": "544",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i1",
          "title": "Ethical Leadership and Employee Well-being in Indian MNCs",
          "description": "How leaders' ethical standards influence subordinates' psychological safety and job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Leadership Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Path Analysis"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i2",
          "title": "Impact of Social Values on Organizational Commitment",
          "description": "Exploring the alignment between personal values and corporate social responsibility (CSR) initiatives.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Value Gap",
          "difficulty": "Intermediate",
          "methodology": "Person-Organization Fit Analysis"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i3",
          "title": "Cognitive Mechanisms of Fairness Judgments in Performance Appraisal",
          "description": "How individuals process information to determine if a performance evaluation is just.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i4",
          "title": "Cross-cultural Perspectives on Leadership Effectiveness",
          "description": "Comparing leadership styles and their impact on employee engagement in Indian vs. Western contexts.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i5",
          "title": "Quantitative Assessment of Organizational Justice",
          "description": "Developing a new mathematical model to predict employee retention based on fairness perceptions.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i6",
          "title": "Theoretical Models of Workplace Motivation",
          "description": "Integrating intrinsic and extrinsic factors into a unified theory of motivation for the modern workforce.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i7",
          "title": "Behavioral Interventions for Enhancing Team Synergy",
          "description": "Evaluating the effectiveness of team-building programs in improving collaborative outcomes.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i8",
          "title": "Development of Professional Identity in Early Career Professionals",
          "description": "A longitudinal study on how early work experiences shape career values and identity.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Interviews"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i9",
          "title": "Psychometric Evaluation of Leadership Competency Scales",
          "description": "Adapting and validating standard leadership measures for the Indian organizational context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-1-i10",
          "title": "Neuroplasticity and Leadership Skill Acquisition",
          "description": "How continuous professional learning affects brain structure and cognitive efficiency in leaders.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "MRI Study"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyguwahati-new-2",
      "name": "Prof. Dilwar Hussain",
      "specialization": "Positive Psychology",
      "focus": "Well-being, resilience, and mindfulness.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Dilwar%20Hussain",
      "citations": "1057",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i1",
          "title": "Mindfulness-Based Interventions for Academic Stress",
          "description": "Evaluating the effectiveness of a 4-week mindfulness program in reducing cortisol levels and anxiety among university students.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Salivary Cortisol Analysis"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i2",
          "title": "Psychological Resilience and Subjective Well-being",
          "description": "Investigating the mediating role of resilience in the relationship between life stressors and happiness.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i3",
          "title": "Cognitive Mechanisms of Gratitude and Positivity",
          "description": "How practicing gratitude influences attention biases toward positive stimuli.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks (Dot-probe Task)"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i4",
          "title": "Cross-cultural Perspectives on Mindfulness and Well-being",
          "description": "Comparing the conceptualization and practice of mindfulness in Indian vs. Western cultures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i5",
          "title": "Quantitative Assessment of Subjective Well-being",
          "description": "Developing a new mathematical model to predict long-term happiness based on daily positive affect.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling and Experience Sampling"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i6",
          "title": "Theoretical Models of Human Flourishing",
          "description": "Integrating positive psychology and cognitive science into a unified theory of human potential.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i7",
          "title": "Impact of Positive Psychology on Organizational Well-being",
          "description": "How fostering a positive work environment influences employee engagement and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Organizational Survey and Multi-level Modeling"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i8",
          "title": "Developmental Trajectories of Resilience in Children",
          "description": "A longitudinal study on how early childhood experiences shape the development of resilient coping strategies.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Observation and Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i9",
          "title": "Psychometric Evaluation of Well-being Scales",
          "description": "Adapting and validating standard well-being measures for the Indian population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-2-i10",
          "title": "Neuroplasticity and Mindfulness Training",
          "description": "How long-term mindfulness practice affects brain structure and functional connectivity in the default mode network.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Structural MRI Study"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyguwahati-new-3",
      "name": "Prof. G. Das",
      "specialization": "Cognitive Science",
      "focus": "Computational linguistics.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20G.%20Das",
      "citations": "3197",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i1",
          "title": "Computational Modeling of Syntactic Parsing",
          "description": "Developing algorithms to simulate how humans process complex sentence structures in Indian languages.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Connectionist Modeling and NLP"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i2",
          "title": "Language Acquisition in Multilingual Contexts",
          "description": "Investigating the cognitive mechanisms of code-switching in bilingual children.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Study"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i3",
          "title": "Neural Correlates of Semantic Ambiguity Resolution",
          "description": "Mapping brain regions involved in resolving polysemy and homonymy during reading.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and ERP"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i4",
          "title": "Impact of Cognitive Load on Text Comprehension",
          "description": "How limited working memory capacity affects the integration of information across sentences.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Dual-task Paradigm and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i5",
          "title": "Cross-linguistic Differences in Narrative Structure",
          "description": "Exploring how different languages influence the mental representation of events in storytelling.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i6",
          "title": "Quantitative Analysis of Large-scale Text Corpora",
          "description": "Using machine learning to extract semantic patterns and trends from social media data.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Natural Language Processing (NLP) and Big Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i7",
          "title": "Behavioral Interventions for Dyslexia",
          "description": "Evaluating the effectiveness of phonological awareness training in improving reading fluency.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Single-case Experimental Design"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i8",
          "title": "Applied Psycholinguistics in Chatbot Design",
          "description": "Optimizing conversational agents based on human cognitive processing principles.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "User Experience (UX) Testing and Behavioral Modeling"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i9",
          "title": "Advanced Methodologies in Sentiment Analysis",
          "description": "Developing more accurate models for detecting irony and sarcasm in digital communication.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning and Computational Linguistics"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-3-i10",
          "title": "Psychometric Evaluation of Language Proficiency Tests",
          "description": "Assessing the reliability and validity of standardized tests for non-native speakers.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Item Response Theory (IRT)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyguwahati-new-4",
      "name": "Prof. H. Baruah",
      "specialization": "Neuroscience",
      "focus": "Neural circuits.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20H.%20Baruah",
      "citations": "4480",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i1",
          "title": "Neural Circuitry of Decision Making under Risk",
          "description": "Mapping the functional connectivity between the amygdala and prefrontal cortex during risky choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i2",
          "title": "Neuroplasticity and Recovery from Brain Injury",
          "description": "Investigating the neural mechanisms of functional reorganization after focal cortical lesions.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Structural and Functional MRI"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i3",
          "title": "Impact of Chronic Stress on Neural Circuit Integrity",
          "description": "How prolonged exposure to stress hormones affects the morphology of hippocampal neurons.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Animal Models and Immunohistochemistry"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i4",
          "title": "Advanced Methodologies in Neural Signal Processing",
          "description": "Developing new algorithms for decoding motor intentions from high-density EEG signals.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i5",
          "title": "Cross-cultural Perspectives on Brain Health",
          "description": "Investigating how lifestyle factors in different cultures influence the prevalence of neurodegenerative diseases.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Epidemiological Study and Neuroimaging"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i6",
          "title": "Quantitative Modeling of Neural Dynamics",
          "description": "Using dynamical systems theory to simulate the activity of large-scale neural networks.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i7",
          "title": "Theoretical Models of Neural Information Processing",
          "description": "Developing a unified framework for understanding how neurons encode and transmit information.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Information Theory and Mathematical Modeling"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i8",
          "title": "Impact of Organizational Stress on Brain Function",
          "description": "How workplace pressure affects executive functions and neural efficiency in high-level managers.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "fNIRS and Cognitive Testing"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i9",
          "title": "Developmental Trajectories of Neural Connectivity",
          "description": "A longitudinal study on the maturation of white matter tracts during adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Diffusion Tensor Imaging (DTI)"
        },
        {
          "id": "indianinstituteoftechnologyguwahati-new-4-i10",
          "title": "Psychometric Evaluation of Cognitive Assessment Batteries",
          "description": "Ensuring the neural validity of standardized tests used in clinical neuropsychology.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Validation and Neuroimaging Correlation"
        }
      ]
    }
  ],
  "Indian Institute of Technology Roorkee": [
    {
      "id": "iitr-1",
      "name": "Prof. Pooja Garg",
      "specialization": "Organizational Psychology",
      "focus": "Positive psychology at work, psychological capital, and well-being.",
      "scholarLink": "https://iitr.ac.in/Departments/Humanities%20and%20Social%20Sciences%20Department/People/Faculty/100481.html",
      "citations": "1300",
      "topPapers": [
        "Psychological capital and employee performance (2023)",
        "Spiritual leadership and workplace spirituality (2022)",
        "Work-life balance and subjective well-being (2021)",
        "Organizational citizenship behavior (2020)",
        "Positive organizational behavior (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitr-1-i1",
          "title": "Developing Psychological Capital (PsyCap) in Remote Teams",
          "description": "Interventions to build hope, efficacy, resilience, and optimism in virtual work environments.",
          "sourcePublication": "Psychological capital and employee performance (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) with Online Interventions"
        },
        {
          "id": "iitr-1-i2",
          "title": "Workplace Spirituality and Employee Retention",
          "description": "The impact of meaning and purpose on employee engagement and long-term commitment in the tech industry.",
          "sourcePublication": "Spiritual leadership and workplace spirituality (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Structural Equation Modeling (SEM)"
        },
        {
          "id": "iitr-1-i3",
          "title": "Servant Leadership and Organizational Citizenship",
          "description": "How leaders who prioritize followers' needs foster organizational citizenship behavior in non-profit sectors.",
          "sourcePublication": "Organizational citizenship behavior (2020)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-source Feedback (360-degree) and Hierarchical Linear Modeling (HLM)"
        },
        {
          "id": "iitr-1-i4",
          "title": "Job Crafting and Subjective Well-being",
          "description": "How employees proactively shape their work tasks to increase meaningfulness and life satisfaction.",
          "sourcePublication": "Work-life balance and subjective well-being (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Daily Diary Study and Experience Sampling Method (ESM)"
        },
        {
          "id": "iitr-1-i5",
          "title": "Strengths-Based Management in High-Stress Environments",
          "description": "Focusing on employee strengths rather than weaknesses for performance improvement in healthcare settings.",
          "sourcePublication": "Positive organizational behavior (2019)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Case Study and Qualitative Interviews"
        },
        {
          "id": "iitr-1-i6",
          "title": "Mindfulness at Work and Decision Making",
          "description": "Evaluating mindfulness training for stress reduction and its impact on cognitive biases in managerial decisions.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Design with Pre- and Post-intervention Testing"
        },
        {
          "id": "iitr-1-i7",
          "title": "Flow in the Workplace and Neural Efficiency",
          "description": "Creating conditions that facilitate optimal experience and investigating its neural correlates using portable EEG.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile EEG and Behavioral Performance Metrics"
        },
        {
          "id": "iitr-1-i8",
          "title": "Appreciative Inquiry in Clinical Settings",
          "description": "Using positive organizational change methodologies to improve patient safety and staff morale.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Action Research and Focus Group Discussions"
        },
        {
          "id": "iitr-1-i9",
          "title": "Gratitude Interventions and Team Cohesion",
          "description": "The effects of expressing gratitude on team psychological safety and collaborative performance.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "Social Network Analysis (SNA) and Longitudinal Survey"
        },
        {
          "id": "iitr-1-i10",
          "title": "Compassion in Organizations and Cultural Nuances",
          "description": "How organizational responses to employee suffering impact loyalty across different cultural contexts.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-cultural Survey and Qualitative Content Analysis"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyroorkee-new-1",
      "name": "Prof. Smita Jha",
      "specialization": "Humanities",
      "focus": "Literature and psychology.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Smita%20Jha",
      "citations": "1997",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i1",
          "title": "Narrative Identity and Psychological Resilience",
          "description": "How the structure of personal life stories influences the ability to cope with trauma.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Narrative Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i2",
          "title": "Impact of Literature on Empathy Development",
          "description": "Investigating whether reading fiction improves perspective-taking in young adults.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Experimental Design with Empathy Scales"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i3",
          "title": "Neural Correlates of Literary Appreciation",
          "description": "Mapping brain activity during the processing of metaphors and poetic language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and ERP"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i4",
          "title": "Bibliotherapy for Clinical Depression",
          "description": "Evaluating the effectiveness of structured reading programs in reducing depressive symptoms.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i5",
          "title": "Cross-cultural Variations in Literary Symbolism",
          "description": "How different cultures interpret psychological archetypes in traditional folklore.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Comparative Analysis"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i6",
          "title": "Quantitative Analysis of Emotional Arcs in Novels",
          "description": "Using sentiment analysis to map the emotional trajectory of classic literature and its impact on reader engagement.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Natural Language Processing (NLP) and Computational Stylistics"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i7",
          "title": "Cognitive Mechanisms of Suspense and Curiosity",
          "description": "How narrative gaps in literature trigger information-seeking behavior in the brain.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i8",
          "title": "Literature in Organizational Storytelling",
          "description": "How literary techniques can be used to enhance leadership communication and organizational identity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Action Research and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i9",
          "title": "Advanced Methodologies in Psychoanalytic Criticism",
          "description": "Applying modern cognitive theories to re-evaluate classical psychoanalytic interpretations of literature.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Interdisciplinary Theoretical Synthesis"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-1-i10",
          "title": "Psychometric Evaluation of Aesthetic Sensitivity",
          "description": "Developing and validating a scale to measure individual differences in the appreciation of literature.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (EFA/CFA)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyroorkee-new-2",
      "name": "Prof. Renu Rastogi",
      "specialization": "Organizational Behavior",
      "focus": "Stress management and organizational effectiveness.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Renu%20Rastogi",
      "citations": "3462",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i1",
          "title": "Impact of Remote Work on Organizational Stress",
          "description": "Investigating how the lack of physical boundaries in work-from-home settings affects employee burnout.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Stress Biomarker Analysis"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i2",
          "title": "Cognitive Appraisal of Workplace Stressors",
          "description": "How individual differences in cognitive appraisal influence the relationship between workload and performance.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks and SEM"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i3",
          "title": "Neuroplasticity and Stress Management Training",
          "description": "Evaluating whether long-term stress management interventions can induce structural changes in the prefrontal cortex.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Structural MRI and Cognitive Testing"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i4",
          "title": "Behavioral Interventions for Occupational Burnout",
          "description": "Testing the efficacy of cognitive-behavioral therapy (CBT) adapted for high-stress corporate environments.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i5",
          "title": "Cross-cultural Perspectives on Organizational Effectiveness",
          "description": "Comparing leadership styles and their impact on employee well-being in Indian vs. multinational corporations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i6",
          "title": "Quantitative Modeling of Team Resilience",
          "description": "Developing a mathematical model to predict team performance under high-pressure, time-constrained conditions.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Team Performance Metrics"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i7",
          "title": "Theoretical Frameworks of Organizational Resilience",
          "description": "Integrating systems theory and positive psychology to understand how organizations bounce back from crises.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i8",
          "title": "Impact of Digital Transformation on Employee Stress",
          "description": "How the rapid adoption of AI and automation affects job security and psychological well-being.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed-methods Approach (Survey + Interviews)"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i9",
          "title": "Developmental Trajectories of Career Resilience",
          "description": "A longitudinal study on how early career challenges shape long-term professional adaptability.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Career Tracking and Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-2-i10",
          "title": "Psychometric Evaluation of Organizational Health Scales",
          "description": "Validating a new tool for measuring the psychological climate of large-scale organizations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA/IRT)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyroorkee-new-3",
      "name": "Prof. I. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Attention and perception.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20I.%20Sharma",
      "citations": "5423",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i1",
          "title": "Neural Mechanisms of Selective Attention",
          "description": "Investigating how the brain filters out irrelevant sensory information during high-load cognitive tasks.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and ERP"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i2",
          "title": "Impact of Distraction on Decision Making",
          "description": "How environmental noise and multitasking affect the quality of complex choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Dual-task Paradigm and Behavioral Modeling"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i3",
          "title": "Perceptual Learning and Visual Expertise",
          "description": "How practice influences the neural representation of complex visual patterns.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Experiments and fMRI"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i4",
          "title": "Attention Deficits in Clinical Populations",
          "description": "Mapping the neural markers of attention dysfunction in ADHD and schizophrenia.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Clinical Neuropsychological Assessment"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i5",
          "title": "Cross-cultural Differences in Visual Perception",
          "description": "Exploring how cultural background influences holistic vs. analytic processing of visual scenes.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Cross-cultural Experiments"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i6",
          "title": "Quantitative Modeling of Attentional Capture",
          "description": "Developing a mathematical model to predict which stimuli are most likely to grab attention in a cluttered environment.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Saliency Mapping"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i7",
          "title": "Theoretical Models of Conscious Perception",
          "description": "Integrating global workspace theory and integrated information theory into a unified model of awareness.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i8",
          "title": "Attention in Organizational Settings",
          "description": "How workplace design and digital interruptions affect employee focus and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Study and Experience Sampling"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i9",
          "title": "Developmental Trajectories of Executive Attention",
          "description": "A longitudinal study on the maturation of attentional control from childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-3-i10",
          "title": "Psychometric Evaluation of Attention Batteries",
          "description": "Ensuring the reliability and validity of standardized tests used to measure different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyroorkee-new-4",
      "name": "Prof. J. Gupta",
      "specialization": "Social Psychology",
      "focus": "Social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20J.%20Gupta",
      "citations": "4952",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i1",
          "title": "Social Influence in Digital Networks",
          "description": "Investigating how algorithmic curation affects the spread of misinformation and social polarization.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA) and Agent-based Modeling"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i2",
          "title": "Impact of Social Identity on Decision Making",
          "description": "How group membership influences risk-taking behavior in collective environments.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks and Group Dynamics Observation"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i3",
          "title": "Neural Correlates of Social Conformity",
          "description": "Mapping brain regions involved in the conflict between individual belief and group consensus.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Influence Paradigm"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i4",
          "title": "Behavioral Interventions for Reducing Outgroup Bias",
          "description": "Testing the effectiveness of perspective-taking exercises in improving intergroup relations.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i5",
          "title": "Cross-cultural Perspectives on Social Norms",
          "description": "Comparing the strength of social norms and their impact on behavior in tight vs. loose cultures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Behavioral Observation"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i6",
          "title": "Quantitative Analysis of Social Media Sentiment",
          "description": "Using machine learning to track the evolution of public opinion on controversial social issues.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Natural Language Processing (NLP) and Big Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i7",
          "title": "Theoretical Models of Collective Intelligence",
          "description": "Developing a framework for understanding how groups of individuals can solve complex problems more effectively than individuals.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Mathematical Simulation"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i8",
          "title": "Social Influence in Organizational Settings",
          "description": "How peer pressure and leadership behavior influence ethical decision making in the workplace.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Organizational Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i9",
          "title": "Developmental Trajectories of Social Cognition",
          "description": "A longitudinal study on the development of theory of mind and its impact on social competence in children.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologyroorkee-new-4-i10",
          "title": "Psychometric Evaluation of Social Influence Scales",
          "description": "Validating a new tool for measuring susceptibility to different types of social influence.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA/IRT)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Gandhinagar": [
    {
      "id": "iitgn-1",
      "name": "Prof. Jaison A. Manjaly",
      "specialization": "Cognitive Science",
      "focus": "Curiosity, moral cognition, and embodied cognition.",
      "scholarLink": "https://cogs.iitgn.ac.in/jaison-manjaly/",
      "citations": "1050",
      "topPapers": [
        "Epistemic curiosity and learning (2023)",
        "Moral judgments and embodied metaphors (2022)",
        "Cognitive mechanisms of curiosity (2021)",
        "Social cognition and empathy (2020)",
        "Philosophy of mind and cognitive science (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitgn-1-i1",
          "title": "Information Gap Theory of Curiosity and Learning",
          "description": "Testing the conditions under which uncertainty leads to information-seeking and its impact on long-term memory retention.",
          "sourcePublication": "Epistemic curiosity and learning (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks and Eye-tracking"
        },
        {
          "id": "iitgn-1-i2",
          "title": "Embodied Moral Cognition and Physical Sensation",
          "description": "How physical sensations of cleanliness or weight influence moral judgments and decision making.",
          "sourcePublication": "Moral judgments and embodied metaphors (2022)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Embodied Cognition Paradigm and Behavioral Experiments"
        },
        {
          "id": "iitgn-1-i3",
          "title": "Curiosity in Education: Pedagogical Interventions",
          "description": "Designing and evaluating classroom interventions to stimulate epistemic curiosity and improve student engagement.",
          "sourcePublication": "Cognitive mechanisms of curiosity (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Action Research and Pre-post Assessment"
        },
        {
          "id": "iitgn-1-i4",
          "title": "Awe and Prosocial Behavior: Neural Mechanisms",
          "description": "Investigating the psychological and neural effects of experiencing vastness and wonder on altruistic behavior.",
          "sourcePublication": "Social cognition and empathy (2020)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Virtual Reality (VR) Awe Induction"
        },
        {
          "id": "iitgn-1-i5",
          "title": "Metaphor and Thought: Spatial Representations of Time",
          "description": "How spatial metaphors shape our understanding of abstract concepts like time across different languages.",
          "sourcePublication": "Philosophy of mind and cognitive science (2019)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments and Cross-cultural Comparison"
        },
        {
          "id": "iitgn-1-i6",
          "title": "Cognitive Dissonance and Belief Revision in Social Contexts",
          "description": "Mechanisms of resolving conflicting information when it challenges core social identities.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Behavioral Tasks and SEM"
        },
        {
          "id": "iitgn-1-i7",
          "title": "Empathy and Outgroup Bias: Behavioral Interventions",
          "description": "Testing the effectiveness of perspective-taking exercises in reducing prejudice towards marginalized groups.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and IAT"
        },
        {
          "id": "iitgn-1-i8",
          "title": "The Illusion of Explanatory Depth and Curiosity",
          "description": "Why people overestimate their understanding of complex systems and how exposing this gap triggers curiosity.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Experiments and Self-report Measures"
        },
        {
          "id": "iitgn-1-i9",
          "title": "Mind-Wandering and Creativity: Neural Correlates",
          "description": "The benefits of task-unrelated thought for divergent problem solving and its relationship with the default mode network.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Creative Problem Solving Tasks"
        },
        {
          "id": "iitgn-1-i10",
          "title": "Cognitive Science of Religion: Psychological Foundations",
          "description": "Understanding the psychological foundations of religious beliefs and their impact on social cooperation.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Behavioral Games"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygandhinagar-new-1",
      "name": "Prof. Pratik Mutha",
      "specialization": "Neuroscience",
      "focus": "Motor control, learning, and neurorehabilitation.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Pratik%20Mutha",
      "citations": "1555",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i1",
          "title": "Neural Mechanisms of Motor Adaptation in Stroke Patients",
          "description": "Investigating how different brain regions compensate for motor deficits during adaptation tasks in post-stroke individuals.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Robotic Reach Tasks"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i2",
          "title": "The Role of Sleep in Consolidating Motor Memories",
          "description": "Examining whether sleep quality affects the long-term retention of newly learned motor skills in healthy adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Physiological Gap",
          "difficulty": "Intermediate",
          "methodology": "Polysomnography and Sequential Finger Tapping Task"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i3",
          "title": "Cognitive Load and Motor Learning in Aging Populations",
          "description": "How dual-task interference impacts the acquisition of motor skills in older adults compared to younger adults.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Dual-task Paradigm and Kinematic Analysis"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i4",
          "title": "Virtual Reality Interventions for Neurorehabilitation",
          "description": "Developing and testing immersive VR environments to enhance motor recovery in patients with traumatic brain injury.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and VR-based Motor Training"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i5",
          "title": "Cross-cultural Differences in Motor Skill Acquisition",
          "description": "Comparing motor learning strategies and outcomes between Indian and Western samples in complex tool-use tasks.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Study and Kinematic Profiling"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i6",
          "title": "Quantitative Analysis of Motor Variability in Parkinson's Disease",
          "description": "Using high-resolution motion capture to identify early biomarkers of motor decline in Parkinson's patients.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "3D Motion Capture and Machine Learning Classification"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i7",
          "title": "Theoretical Models of Feedback Processing in Motor Control",
          "description": "Developing a computational framework to explain how the brain integrates visual and proprioceptive feedback during reaching.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Bayesian Integration Analysis"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i8",
          "title": "The Impact of Stress on Fine Motor Control in High-Pressure Occupations",
          "description": "How acute stress affects the precision and stability of motor performance in surgeons or pilots.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Stress Induction (TSST) and Fine Motor Precision Tasks"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i9",
          "title": "Developmental Trajectories of Bimanual Coordination in Children",
          "description": "A longitudinal study tracking the maturation of interhemispheric communication and its role in complex motor tasks.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and DTI (Diffusion Tensor Imaging)"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-1-i10",
          "title": "Psychometric Validation of Motor Assessment Scales",
          "description": "Evaluating the reliability and validity of standard clinical scales for assessing motor impairment in diverse populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Rasch Modeling)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygandhinagar-new-2",
      "name": "Prof. Meera M. Sunny",
      "specialization": "Cognitive Psychology",
      "focus": "Visual attention, perception, and action.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Meera%20M.%20Sunny",
      "citations": "564",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i1",
          "title": "Attentional Capture by Abrupt Onsets in Dynamic Scenes",
          "description": "Investigating how unexpected visual changes capture attention in complex, real-world-like dynamic environments.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Ecological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Dynamic Visual Search Tasks"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i2",
          "title": "The Role of Action Intentions in Visual Perception",
          "description": "How the intention to perform a specific action (e.g., grasping) alters the perception of object properties like size or orientation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Action-Perception Paradigm and Psychophysical Scaling"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i3",
          "title": "Visual Attention and Cognitive Load in Driving",
          "description": "Examining how different types of cognitive load (verbal vs. spatial) impact the distribution of visual attention during simulated driving.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Driving Simulator and Dual-task Paradigm"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i4",
          "title": "Neuroplasticity of Visual Attention through Video Game Training",
          "description": "Assessing the long-term effects of action video game play on various components of visual attention and their neural correlates.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Training Study and EEG/ERP"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i5",
          "title": "Cross-cultural Differences in Holistic vs. Analytic Perception",
          "description": "Comparing visual attention patterns between Indian and Western samples in scene perception tasks.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Scene Description Tasks"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i6",
          "title": "Quantitative Analysis of Saccadic Eye Movements in ADHD",
          "description": "Identifying specific oculomotor biomarkers that distinguish children with ADHD from typically developing peers.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "High-speed Eye-tracking and Saccadic Paradigm"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i7",
          "title": "Developmental Trajectories of Visual Search Efficiency",
          "description": "A longitudinal study on how the ability to filter out distractors improves from early childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Visual Search Tasks"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i8",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Validating a new computerized battery for measuring different facets of attention (sustained, selective, divided).",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i9",
          "title": "The Impact of Emotional Distractors on Visual Attention",
          "description": "How emotional stimuli (e.g., threatening faces) capture attention and interfere with goal-directed visual tasks.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Dot-probe Task and Emotion Induction"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-2-i10",
          "title": "Visual Attention in Organizational Settings: Impact of Workspace Design",
          "description": "How open-plan vs. private office designs influence attentional focus and productivity in employees.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Study and Attentional Performance Tasks"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygandhinagar-new-3",
      "name": "Prof. Krishna Prasad Miyapuram",
      "specialization": "Cognitive Neuroscience",
      "focus": "Neuroeconomics, learning, and decision making.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Krishna%20Prasad%20Miyapuram",
      "citations": "1209",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i1",
          "title": "Neural Correlates of Intertemporal Choice in Financial Decisions",
          "description": "Investigating how the brain weighs immediate vs. delayed rewards in the context of long-term financial planning.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Delay Discounting Task"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i2",
          "title": "The Impact of Social Influence on Economic Risk-Taking",
          "description": "How observing the choices of others alters individual risk preferences and the underlying neural activity in the reward system.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Decision-making Games"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i3",
          "title": "Neuroplasticity and Skill Acquisition in Neuroeconomics",
          "description": "Tracking changes in brain structure and function as individuals learn to navigate complex economic environments.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Economic Simulation Tasks"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i4",
          "title": "Behavioral Interventions for Improving Financial Literacy",
          "description": "Testing the effectiveness of nudge-based interventions in promoting better saving habits among low-income populations.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Surveys"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i5",
          "title": "Cross-cultural Differences in Fairness and Cooperation",
          "description": "Comparing neural responses to unfair offers in the Ultimatum Game between Indian and Western samples.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Cross-cultural Behavioral Games"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i6",
          "title": "Quantitative Analysis of Choice Variability in Decision Making",
          "description": "Using computational models to identify patterns of inconsistency in human choice behavior and their relationship to cognitive load.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i7",
          "title": "Theoretical Models of Reinforcement Learning in Uncertain Environments",
          "description": "Developing a mathematical framework to explain how humans update their beliefs when outcomes are probabilistic and non-stationary.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Bayesian Analysis"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i8",
          "title": "Developmental Trajectories of Economic Decision Making in Children",
          "description": "A longitudinal study on the development of impulse control and its impact on resource allocation in early childhood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Economic Games"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i9",
          "title": "Psychometric Evaluation of Risk Propensity Scales",
          "description": "Validating a new tool for measuring individual differences in risk-taking across various life domains (financial, health, social).",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and IRT)"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Decision Processes",
          "description": "Combining eye-tracking and EEG to investigate the temporal dynamics of information search during multi-attribute choice.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Concurrent EEG and Eye-tracking"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygandhinagar-new-4",
      "name": "Prof. M. Singh",
      "specialization": "Social Psychology",
      "focus": "Social identity.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20M.%20Singh",
      "citations": "2564",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i1",
          "title": "Social Identity and Collective Action in Environmental Movements",
          "description": "Investigating how identification with environmental groups predicts participation in collective pro-environmental actions.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey Research and Path Analysis"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i2",
          "title": "The Impact of Multiple Social Identities on Mental Health",
          "description": "How the intersectionality of different social identities (e.g., gender, caste, profession) influences psychological well-being.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Intersectionality Framework and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i3",
          "title": "Cognitive Mechanisms of Ingroup Favoritism",
          "description": "Examining the automatic vs. controlled processes involved in favoring one's own social group over others.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Implicit Association Test (IAT) and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i4",
          "title": "Behavioral Interventions for Reducing Intergroup Conflict",
          "description": "Testing the effectiveness of common ingroup identity interventions in improving relations between conflicting social groups.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Observation"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i5",
          "title": "Neuroplasticity and Social Identity: Impact of Long-term Group Membership",
          "description": "How sustained identification with a social group alters brain regions associated with self-referential processing.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Identity Salience Paradigm"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i6",
          "title": "Quantitative Analysis of Social Identity Salience in Online Spaces",
          "description": "Using big data from social media to track how different social identities become salient in response to global events.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Natural Language Processing (NLP) and Sentiment Analysis"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i7",
          "title": "Theoretical Models of Social Identity Complexity",
          "description": "Developing a computational model to explain how individuals manage and integrate multiple, sometimes conflicting, social identities.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Mathematical Simulation"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i8",
          "title": "Developmental Trajectories of Social Identity in Adolescence",
          "description": "A longitudinal study on how social identity develops and stabilizes during the transition from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i9",
          "title": "Psychometric Evaluation of Social Identity Scales",
          "description": "Validating a new multidimensional tool for measuring the strength and importance of different social identities.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologygandhinagar-new-4-i10",
          "title": "Advanced Methodologies for Measuring Implicit Social Identity",
          "description": "Combining physiological measures (e.g., skin conductance) with behavioral tasks to assess non-conscious group identification.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysiological Measurement and Behavioral Tasks"
        }
      ]
    }
  ],
  "Indian Institute of Technology Indore": [
    {
      "id": "iiti-1",
      "name": "Prof. Sanjram Premjit Khanganba",
      "specialization": "Human Factors, Cognitive Ergonomics",
      "focus": "Human-computer interaction, cognitive load, and usability engineering.",
      "scholarLink": "https://iiti.ac.in/people/~sanjrampk/",
      "citations": "600",
      "topPapers": [
        "Cognitive load in multitasking environments (2023)",
        "Usability of mobile interfaces (2022)",
        "Human error in complex systems (2021)",
        "Attention and display design (2020)",
        "Ergonomics of virtual reality (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iiti-1-i1",
          "title": "Multitasking and Cognitive Load",
          "description": "Measuring mental effort during concurrent task execution.",
          "sourcePublication": "Cognitive load in multitasking environments (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Dual-task Paradigm and NASA-TLX"
        },
        {
          "id": "iiti-1-i2",
          "title": "Usability of E-learning Platforms",
          "description": "Applying human factors principles to improve online education.",
          "sourcePublication": "Usability of mobile interfaces (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Usability Testing and Heuristic Evaluation"
        },
        {
          "id": "iiti-1-i3",
          "title": "Human Error in Healthcare",
          "description": "Identifying cognitive factors contributing to medical mistakes.",
          "sourcePublication": "Human error in complex systems (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Root Cause Analysis and Cognitive Task Analysis"
        },
        {
          "id": "iiti-1-i4",
          "title": "Design of Warning Systems",
          "description": "Optimizing auditory and visual alerts for rapid response.",
          "sourcePublication": "Attention and display design (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Reaction Time Measurement"
        },
        {
          "id": "iiti-1-i5",
          "title": "Virtual Reality Sickness",
          "description": "Investigating the sensory mismatch theory of cybersickness.",
          "sourcePublication": "Ergonomics of virtual reality (2019)",
          "gapType": "Physiological Gap",
          "difficulty": "Advanced",
          "methodology": "VR Exposure and Simulator Sickness Questionnaire (SSQ)"
        },
        {
          "id": "iiti-1-i6",
          "title": "Trust in Automation",
          "description": "How system reliability affects user reliance and compliance.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Trust Scales"
        },
        {
          "id": "iiti-1-i7",
          "title": "Cognitive Aging and HCI",
          "description": "Designing technology interfaces for older adults.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "User-centered Design and Cognitive Testing"
        },
        {
          "id": "iiti-1-i8",
          "title": "Driver Distraction",
          "description": "The impact of in-vehicle infotainment systems on driving performance.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Driving Simulator and Eye-tracking"
        },
        {
          "id": "iiti-1-i9",
          "title": "Mental Workload Assessment",
          "description": "Comparing subjective and objective measures of cognitive load.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Concurrent EEG and Subjective Rating Scales"
        },
        {
          "id": "iiti-1-i10",
          "title": "Ergonomics of Wearable Devices",
          "description": "User acceptance and physical comfort of smartwatches and fitness trackers.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Study and Comfort Assessment Scales"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyindore-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "3621",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyindore-new-0-i1",
          "title": "The Role of Selective Attention in Memory Encoding",
          "description": "Investigating how different levels of attentional focus during learning impact the strength and durability of memory traces.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and EEG/ERP"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i2",
          "title": "Neuroplasticity and Memory Consolidation: Impact of Sleep",
          "description": "Examining how sleep quality influences the reorganization of memory networks and the long-term retention of information.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Physiological Gap",
          "difficulty": "Advanced",
          "methodology": "Polysomnography and Memory Recall Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i3",
          "title": "Behavioral Interventions for Improving Working Memory in ADHD",
          "description": "Testing the effectiveness of computerized cognitive training in enhancing working memory capacity in children with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Cognitive Testing"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i4",
          "title": "Advanced Methodologies for Tracking Attentional Fluctuations",
          "description": "Using real-time eye-tracking to identify periods of mind-wandering and their impact on task performance.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Sustained Attention Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i5",
          "title": "Cross-cultural Perspectives on Autobiographical Memory",
          "description": "Comparing the content and structure of personal memories between Indian and Western samples.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i6",
          "title": "Quantitative Analysis of False Memory Formation",
          "description": "Using mathematical models to predict the likelihood of creating false memories in response to misinformation.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Deese-Roediger-McDermott (DRM) Paradigm"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i7",
          "title": "Theoretical Models of Attentional Resource Allocation",
          "description": "Developing a framework to explain how the brain prioritizes information in high-load visual environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i8",
          "title": "The Impact of Stress on Memory Retrieval in Organizational Settings",
          "description": "How acute stress affects the ability to recall critical information during high-stakes decision making.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Stress Induction (TSST) and Memory Retrieval Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i9",
          "title": "Developmental Trajectories of Executive Functions in Early Childhood",
          "description": "A longitudinal study on the development of inhibition and switching and their relationship to academic success.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Parent Reports"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Validating a new tool for measuring different facets of attention in clinical and non-clinical populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyindore-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "764",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyindore-new-1-i1",
          "title": "Social Influence and Decision Making in Virtual Teams",
          "description": "Investigating how peer pressure and leadership behavior influence collective choices in remote work environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Online Behavioral Experiments and Social Network Analysis"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i2",
          "title": "The Impact of Group Identity on Prosocial Behavior",
          "description": "How identification with a specific social group (e.g., university, city) predicts altruistic actions towards ingroup vs. outgroup members.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Games (e.g., Dictator Game) and Survey Research"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i3",
          "title": "Cognitive Mechanisms of Conformity in Social Networks",
          "description": "Examining the neural and psychological processes that lead individuals to align their opinions with the majority in online platforms.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Influence Paradigm"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i4",
          "title": "Behavioral Interventions for Reducing Polarization in Online Groups",
          "description": "Testing the effectiveness of perspective-taking exercises in mitigating echo chamber effects on social media.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Sentiment Analysis"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i5",
          "title": "Neuroplasticity and Social Influence: Impact of Long-term Group Membership",
          "description": "How sustained participation in a social group alters brain regions associated with social cognition and empathy.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Social Identity Salience Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i6",
          "title": "Quantitative Analysis of Collective Intelligence in Problem Solving",
          "description": "Using computational models to identify the factors that enable groups to outperform their best individual members.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Group Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i7",
          "title": "Theoretical Models of Social Norm Internalization",
          "description": "Developing a framework to explain how external social rules become part of an individual's internal value system.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Mathematical Simulation"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i8",
          "title": "Developmental Trajectories of Social Influence Susceptibility",
          "description": "A longitudinal study on how the impact of peer pressure changes from early childhood to late adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Peer Interaction Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i9",
          "title": "Psychometric Evaluation of Social Influence Scales",
          "description": "Validating a new tool for measuring susceptibility to different types of social influence (informational vs. normative).",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and IRT)"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-1-i10",
          "title": "Advanced Methodologies for Measuring Implicit Social Influence",
          "description": "Combining physiological measures (e.g., heart rate variability) with behavioral tasks to assess non-conscious conformity.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysiological Measurement and Behavioral Tasks"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyindore-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "3698",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyindore-new-2-i1",
          "title": "Computational Modeling of Neural Oscillations in Working Memory",
          "description": "Developing a biophysically realistic model to explain how different frequency bands (e.g., theta, gamma) coordinate information storage.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience (NEURON/Python) and Simulation"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i2",
          "title": "Neuroplasticity and Learning in Artificial Neural Networks",
          "description": "Implementing biologically inspired learning rules (e.g., STDP) in deep learning models to improve their efficiency and adaptability.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning and Neural Network Simulation"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i3",
          "title": "Modeling Decision Making Processes in Neuroeconomics",
          "description": "Creating a computational framework that integrates reward processing and risk assessment to predict choice behavior.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Reinforcement Learning Models and Behavioral Data Fitting"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i4",
          "title": "Quantitative Analysis of Neural Connectivity in Autism",
          "description": "Using graph theory to identify structural and functional brain network abnormalities in individuals with ASD.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and fMRI/DTI Data Analysis"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i5",
          "title": "Behavioral Interventions and Neural Recovery: A Modeling Approach",
          "description": "Simulating the impact of different rehabilitation strategies on neural circuit reorganization after brain injury.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Virtual Lesion Studies"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i6",
          "title": "Advanced Methodologies for Decoding Neural Signals",
          "description": "Developing new algorithms for extracting meaningful information from high-density EEG or multi-unit recordings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning (SVM/RNN)"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i7",
          "title": "Cross-cultural Perspectives on Cognitive Modeling",
          "description": "Investigating whether computational models of cognition need to be adapted to account for cultural differences in thinking styles.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Data and Model Comparison"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i8",
          "title": "Developmental Trajectories of Neural Circuit Maturation",
          "description": "A computational study on how the pruning of synaptic connections during adolescence shapes adult cognitive abilities.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Developmental Data Analysis"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i9",
          "title": "Psychometric Evaluation of Computational Biomarkers",
          "description": "Assessing the reliability and validity of model parameters as potential diagnostic tools for psychiatric disorders.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Analysis and Model-based Clustering"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-2-i10",
          "title": "Modeling Social Influence in Large-scale Neural Populations",
          "description": "Simulating how information spreads and consensus emerges in groups of interacting neural agents.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Agent-based Modeling and Network Science"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyindore-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "754",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyindore-new-3-i1",
          "title": "Efficacy of Mindfulness-Based Stress Reduction (MBSR) in Indian Students",
          "description": "Testing the effectiveness of MBSR in reducing academic stress and improving mental well-being in a sample of Indian university students.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Psychological Scales"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i2",
          "title": "The Role of Social Support in Recovery from Depression",
          "description": "Investigating how different types of social support (emotional, instrumental) influence the long-term outcomes of behavioral therapy for depression.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and SEM"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i3",
          "title": "Neuroplasticity and Cognitive Behavioral Therapy (CBT) for Anxiety",
          "description": "Examining changes in brain activity and connectivity following a course of CBT for generalized anxiety disorder.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i4",
          "title": "Cross-cultural Perspectives on Stigma towards Mental Illness",
          "description": "Comparing the levels and types of stigma associated with mental health issues between urban and rural Indian populations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i5",
          "title": "Cognitive Mechanisms of Rumination in Depression",
          "description": "Investigating the relationship between executive function deficits and the tendency to ruminate in individuals with major depressive disorder.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i6",
          "title": "Quantitative Analysis of Treatment Outcomes in Telepsychology",
          "description": "Using data from online therapy platforms to identify predictors of successful treatment outcomes in a large-scale sample.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i7",
          "title": "Theoretical Models of Resilience in High-stress Occupations",
          "description": "Developing a framework to explain why some individuals maintain mental health despite exposure to chronic occupational stress.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i8",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "A longitudinal study on how early childhood experiences shape the development of emotional regulation strategies and their impact on mental health.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i9",
          "title": "Psychometric Evaluation of Mental Health Assessment Tools",
          "description": "Validating a new tool for measuring psychological distress in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Mood Fluctuations",
          "description": "Using ecological momentary assessment (EMA) to investigate the relationship between daily stressors and mood in clinical populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Ecological Momentary Assessment (EMA) and Multilevel Modeling"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyindore-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "1554",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyindore-new-4-i1",
          "title": "The Impact of Multilingualism on Executive Function",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks (Stroop, Simon) and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i2",
          "title": "Language-Driven Perception of Color: A Cross-linguistic Study",
          "description": "Examining if the availability of specific color terms in a language influences the speed and accuracy of color discrimination.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Discrimination Tasks and Linguistic Analysis"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i3",
          "title": "Neuroplasticity and Second Language Acquisition in Adults",
          "description": "Using longitudinal fMRI to track structural and functional brain changes as adults learn a new language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i4",
          "title": "The Role of Inner Speech in Problem Solving",
          "description": "Investigating how the use of internal verbalization facilitates or hinders complex reasoning and decision-making processes.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Think-aloud Protocols and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i5",
          "title": "Developmental Trajectories of Metaphor Comprehension",
          "description": "Tracking how children's ability to understand figurative language evolves and its relationship to theory of mind development.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in Aphasia",
          "description": "Using computational models to map the organization of the mental lexicon in individuals with language impairments.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i7",
          "title": "Behavioral Interventions for Improving Reading Fluency",
          "description": "Testing the efficacy of a new phonological awareness program for children with dyslexia in Indian schools.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i8",
          "title": "Advanced Methodologies for Eye-tracking in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive load during reading of complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i9",
          "title": "Psychometric Evaluation of Language Proficiency Scales",
          "description": "Assessing the validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (IRT and Factor Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyindore-new-4-i10",
          "title": "The Influence of Organizational Culture on Professional Communication",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology Patna": [
    {
      "id": "iitp-1",
      "name": "Prof. Priyanka Tripathi",
      "specialization": "Social Psychology, Gender Studies",
      "focus": "Gender, identity, and social cognition.",
      "scholarLink": "https://www.iitp.ac.in/index.php/en-us/departments/humanities-and-social-sciences/faculty",
      "citations": "550",
      "topPapers": [
        "Gender stereotypes and social cognition (2023)",
        "Identity and marginalization (2022)",
        "Social representations of health (2021)",
        "Intergroup relations (2020)",
        "Qualitative research in psychology (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitp-1-i1",
          "title": "Implicit Gender Bias in Indian STEM Fields",
          "description": "Measuring unconscious attitudes towards women in science and engineering among faculty and students.",
          "sourcePublication": "Gender stereotypes and social cognition (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Implicit Association Test (IAT) and Survey"
        },
        {
          "id": "iitp-1-i2",
          "title": "Intersectionality and Identity in Marginalized Communities",
          "description": "How multiple social identities (caste, gender, religion) interact to shape experiences of discrimination in rural India.",
          "sourcePublication": "Identity and marginalization (2022)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "iitp-1-i3",
          "title": "Social Representations of Mental Illness in Urban India",
          "description": "Investigating cultural beliefs about the causes and treatment of psychiatric disorders among urban middle-class families.",
          "sourcePublication": "Social representations of health (2021)",
          "gapType": "Theoretical Gap",
          "difficulty": "Intermediate",
          "methodology": "Focus Group Discussions and Thematic Analysis"
        },
        {
          "id": "iitp-1-i4",
          "title": "Prejudice Reduction Interventions in Schools",
          "description": "Evaluating the effectiveness of school-based programs in decreasing intergroup hostility and promoting social cohesion.",
          "sourcePublication": "Intergroup relations (2020)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Observations"
        },
        {
          "id": "iitp-1-i5",
          "title": "Masculinity and Health-Seeking Behavior among Indian Men",
          "description": "Exploring how traditional gender norms influence men's willingness to seek help for physical and mental health issues.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Qualitative Interviews"
        },
        {
          "id": "iitp-1-i6",
          "title": "Social Media and Body Image among Indian Adolescents",
          "description": "The impact of idealized online representations on self-esteem and body satisfaction in a sample of Indian teenagers.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey and Content Analysis"
        },
        {
          "id": "iitp-1-i7",
          "title": "Collective Action and Protest: Psychological Factors",
          "description": "Investigating the role of group identity and perceived injustice in motivating participation in social movements in India.",
          "sourcePublication": "Qualitative research in psychology (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Survey and Case Study Analysis"
        },
        {
          "id": "iitp-1-i8",
          "title": "Stigma and Marginalization: Psychological Consequences",
          "description": "The impact of social exclusion on the mental health and well-being of LGBTQ+ individuals in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and Psychological Scales"
        },
        {
          "id": "iitp-1-i9",
          "title": "Qualitative Approaches to Understanding Lived Experiences of Gender",
          "description": "Using narrative analysis to explore the life stories of women in non-traditional occupations.",
          "sourcePublication": "Qualitative research in psychology (2019)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "Narrative Interviews and Discourse Analysis"
        },
        {
          "id": "iitp-1-i10",
          "title": "Gender and Leadership: Overcoming Workplace Barriers",
          "description": "Identifying strategies to promote women's advancement into leadership roles in Indian corporate settings.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Organizational Survey and Executive Interviews"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypatna-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "4839",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypatna-new-0-i1",
          "title": "Attentional Blink and Emotional Stimuli",
          "description": "Investigating how the emotional valence of a stimulus affects the duration and magnitude of the attentional blink.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Rapid Serial Visual Presentation (RSVP) Task and EEG"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i2",
          "title": "The Role of Sleep in Memory Consolidation of Procedural Skills",
          "description": "Examining whether a period of sleep following the acquisition of a new motor skill improves performance and reduces interference.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Skill Learning Task and Polysomnography"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i3",
          "title": "Cognitive Load and Decision Making in High-pressure Environments",
          "description": "Investigating how increasing cognitive load impacts the quality and speed of decisions made by professionals in emergency services.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Simulated Decision Tasks and Physiological Monitoring (HRV)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i4",
          "title": "Developmental Trajectories of Selective Attention in Children",
          "description": "A longitudinal study on how the ability to filter out distractions develops from early childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing (Flanker Task)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i5",
          "title": "Cross-cultural Differences in Visual Attention Patterns",
          "description": "Comparing eye-movement patterns between Indian and Western participants during a scene-perception task.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Behavioral Testing"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i6",
          "title": "The Impact of Mindfulness Training on Working Memory Capacity",
          "description": "Testing whether a short-term mindfulness intervention can improve working memory performance in university students.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Working Memory Tasks (N-back)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i7",
          "title": "Advanced Methodologies for Modeling Memory Retrieval Processes",
          "description": "Developing new computational models to explain the dynamics of free recall and recognition memory.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Data Fitting"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i8",
          "title": "Quantitative Analysis of Attentional Deficits in ADHD",
          "description": "Using meta-analysis and large-scale data to identify the most robust attentional markers of ADHD across different age groups.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Meta-analysis and Big Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i9",
          "title": "Theoretical Models of Conscious Awareness and Attention",
          "description": "Developing a framework to explain the relationship between top-down attention and the emergence of conscious perception.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Psychophysical Experiments"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Assessing the reliability and validity of a new computerized battery for measuring different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypatna-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "4427",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypatna-new-1-i1",
          "title": "Deindividuation and Aggression in Online Gaming Communities",
          "description": "Investigating how anonymity and group identification influence toxic behavior and aggression in online multiplayer games.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Observation and Online Surveys"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i2",
          "title": "The Role of Social Identity in Compliance with Public Health Guidelines",
          "description": "Examining how identification with a national or local group influences adherence to health recommendations during a pandemic.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and SEM"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i3",
          "title": "Neuroplasticity and Social Learning in Cooperative Tasks",
          "description": "Using hyperscanning EEG to investigate brain-to-brain synchrony during collaborative problem-solving.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Hyperscanning EEG and Behavioral Testing"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i4",
          "title": "Group Polarization in Social Media Echo Chambers",
          "description": "Investigating how exposure to like-minded opinions in online groups leads to more extreme attitudes and beliefs.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i5",
          "title": "Developmental Trajectories of Prosocial Behavior in Peer Groups",
          "description": "Tracking how children's willingness to share and cooperate is influenced by their social status within their peer group.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Observations and Sociometric Mapping"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Consumer Behavior",
          "description": "Using large-scale data from e-commerce platforms to identify the impact of social proof (e.g., reviews, ratings) on purchasing decisions.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i7",
          "title": "Theoretical Models of Minority Influence in Group Decision Making",
          "description": "Developing a framework to explain the conditions under which a minority opinion can successfully influence the majority.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i8",
          "title": "Cross-cultural Perspectives on Conformity and Obedience",
          "description": "Comparing the levels of conformity to group norms between individualistic and collectivistic cultures in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Experiments (Asch Paradigm)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i9",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the validity of tools for measuring the strength and nature of an individual's identification with various social groups.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-1-i10",
          "title": "Advanced Methodologies for Studying Group Dynamics in Virtual Reality",
          "description": "Using VR to create controlled social environments for investigating the impact of group size and composition on social influence.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Virtual Reality (VR) and Behavioral Tracking"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypatna-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "1406",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypatna-new-2-i1",
          "title": "Modeling Neural Oscillations in Working Memory",
          "description": "Developing a biophysically realistic model to explain how different frequency bands coordinate information storage in the prefrontal cortex.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience (NEURON/Python) and Simulation"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i2",
          "title": "Neuroplasticity and Learning in Artificial Neural Networks",
          "description": "Implementing biologically inspired learning rules in deep learning models to improve their efficiency and adaptability.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning and Neural Network Simulation"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i3",
          "title": "Modeling Decision Making Processes in Neuroeconomics",
          "description": "Creating a computational framework that integrates reward processing and risk assessment to predict choice behavior.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Reinforcement Learning Models and Behavioral Data Fitting"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i4",
          "title": "Quantitative Analysis of Neural Connectivity in Autism",
          "description": "Using graph theory to identify structural and functional brain network abnormalities in individuals with ASD.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and fMRI/DTI Data Analysis"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i5",
          "title": "Behavioral Interventions and Neural Recovery: A Modeling Approach",
          "description": "Simulating the impact of different rehabilitation strategies on neural circuit reorganization after brain injury.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Virtual Lesion Studies"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i6",
          "title": "Advanced Methodologies for Decoding Neural Signals",
          "description": "Developing new algorithms for extracting meaningful information from high-density EEG or multi-unit recordings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning (SVM/RNN)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i7",
          "title": "Cross-cultural Perspectives on Cognitive Modeling",
          "description": "Investigating whether computational models of cognition need to be adapted to account for cultural differences in thinking styles.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Data and Model Comparison"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i8",
          "title": "Developmental Trajectories of Neural Circuit Maturation",
          "description": "A computational study on how the pruning of synaptic connections during adolescence shapes adult cognitive abilities.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Developmental Data Analysis"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i9",
          "title": "Psychometric Evaluation of Computational Biomarkers",
          "description": "Assessing the reliability and validity of model parameters as potential diagnostic tools for psychiatric disorders.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Analysis and Model-based Clustering"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-2-i10",
          "title": "Modeling Social Influence in Large-scale Neural Populations",
          "description": "Simulating how information spreads and consensus emerges in groups of interacting neural agents.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Agent-based Modeling and Network Science"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypatna-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "1023",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypatna-new-3-i1",
          "title": "Efficacy of Mindfulness-Based Stress Reduction (MBSR) in Indian Students",
          "description": "Testing the effectiveness of MBSR in reducing academic stress and improving mental well-being in a sample of Indian university students.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Psychological Scales"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i2",
          "title": "The Role of Social Support in Recovery from Depression",
          "description": "Investigating how different types of social support influence the long-term outcomes of behavioral therapy for depression.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and SEM"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i3",
          "title": "Neuroplasticity and Cognitive Behavioral Therapy (CBT) for Anxiety",
          "description": "Examining changes in brain activity and connectivity following a course of CBT for generalized anxiety disorder.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i4",
          "title": "Cross-cultural Perspectives on Stigma towards Mental Illness",
          "description": "Comparing the levels and types of stigma associated with mental health issues between urban and rural Indian populations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i5",
          "title": "Cognitive Mechanisms of Rumination in Depression",
          "description": "Investigating the relationship between executive function deficits and the tendency to ruminate in individuals with major depressive disorder.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i6",
          "title": "Quantitative Analysis of Treatment Outcomes in Telepsychology",
          "description": "Using data from online therapy platforms to identify predictors of successful treatment outcomes in a large-scale sample.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i7",
          "title": "Theoretical Models of Resilience in High-stress Occupations",
          "description": "Developing a framework to explain why some individuals maintain mental health despite exposure to chronic occupational stress.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i8",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "A longitudinal study on how early childhood experiences shape the development of emotional regulation strategies and their impact on mental health.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i9",
          "title": "Psychometric Evaluation of Mental Health Assessment Tools",
          "description": "Validating a new tool for measuring psychological distress in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Mood Fluctuations",
          "description": "Using ecological momentary assessment (EMA) to investigate the relationship between daily stressors and mood in clinical populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Ecological Momentary Assessment (EMA) and Multilevel Modeling"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypatna-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "2854",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypatna-new-4-i1",
          "title": "The Impact of Multilingualism on Executive Function",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks (Stroop, Simon) and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i2",
          "title": "Language-Driven Perception of Color: A Cross-linguistic Study",
          "description": "Examining if the availability of specific color terms in a language influences the speed and accuracy of color discrimination.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Discrimination Tasks and Linguistic Analysis"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i3",
          "title": "Neuroplasticity and Second Language Acquisition in Adults",
          "description": "Using longitudinal fMRI to track structural and functional brain changes as adults learn a new language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i4",
          "title": "The Role of Inner Speech in Problem Solving",
          "description": "Investigating how the use of internal verbalization facilitates or hinders complex reasoning and decision-making processes.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Think-aloud Protocols and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i5",
          "title": "Developmental Trajectories of Metaphor Comprehension",
          "description": "Tracking how children's ability to understand figurative language evolves and its relationship to theory of mind development.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in Aphasia",
          "description": "Using computational models to map the organization of the mental lexicon in individuals with language impairments.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i7",
          "title": "Behavioral Interventions for Improving Reading Fluency",
          "description": "Testing the efficacy of a new phonological awareness program for children with dyslexia in Indian schools.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i8",
          "title": "Advanced Methodologies for Eye-tracking in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive load during reading of complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i9",
          "title": "Psychometric Evaluation of Language Proficiency Scales",
          "description": "Assessing the validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (IRT and Factor Analysis)"
        },
        {
          "id": "indianinstituteoftechnologypatna-new-4-i10",
          "title": "The Influence of Organizational Culture on Professional Communication",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology Ropar": [
    {
      "id": "iitropar-1",
      "name": "Prof. Rano Ringo",
      "specialization": "Health Psychology, Well-being",
      "focus": "Psychological well-being, stress, and coping mechanisms.",
      "scholarLink": "https://www.iitrpr.ac.in/hss/rano",
      "citations": "450",
      "topPapers": [
        "Stress and coping in university students (2023)",
        "Psychological well-being and resilience (2022)",
        "Health behavior change (2021)",
        "Quality of life in chronic illness (2020)",
        "Positive psychology interventions (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitropar-1-i1",
          "title": "Psychosocial Stressors and Student Mental Health",
          "description": "Identifying the specific academic and social factors that contribute to mental health challenges in Indian university students.",
          "sourcePublication": "Stress and coping in university students (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Path Analysis"
        },
        {
          "id": "iitropar-1-i2",
          "title": "Resilience Training for Vulnerable Populations",
          "description": "Evaluating the effectiveness of structured interventions in building psychological resilience among marginalized communities.",
          "sourcePublication": "Psychological well-being and resilience (2022)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study"
        },
        {
          "id": "iitropar-1-i3",
          "title": "Applying Health Belief Models to Preventive Behavior",
          "description": "Using theoretical frameworks to predict and improve adherence to preventive health measures in rural India.",
          "sourcePublication": "Health behavior change (2021)",
          "gapType": "Theoretical Gap",
          "difficulty": "Intermediate",
          "methodology": "Large-scale Survey and Structural Equation Modeling"
        },
        {
          "id": "iitropar-1-i4",
          "title": "Psychosocial Predictors of Quality of Life in Chronic Illness",
          "description": "Identifying the factors that best predict long-term well-being and adjustment in patients with chronic diseases.",
          "sourcePublication": "Quality of life in chronic illness (2020)",
          "gapType": "Health Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods (Survey and Qualitative Interviews)"
        },
        {
          "id": "iitropar-1-i5",
          "title": "Efficacy of Positive Psychology Interventions in Schools",
          "description": "Testing the impact of gratitude and mindfulness programs on the subjective well-being of school children.",
          "sourcePublication": "Positive psychology interventions (2019)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "iitropar-1-i6",
          "title": "Psychoneuroimmunological Pathways of Academic Stress",
          "description": "Investigating how chronic academic pressure influences immune system markers in university students.",
          "sourcePublication": "Stress and coping in university students (2023)",
          "gapType": "Biological Gap",
          "difficulty": "Advanced",
          "methodology": "Biomarker Analysis (Cortisol and Cytokines)"
        },
        {
          "id": "iitropar-1-i7",
          "title": "Social Support Networks and Recovery from Surgery",
          "description": "A longitudinal study on how the quality of social support influences physical and psychological recovery post-surgery.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Observational Study"
        },
        {
          "id": "iitropar-1-i8",
          "title": "Psychological Barriers to Medication Adherence",
          "description": "Exploring the cognitive and emotional factors that lead to non-compliance with long-term medical regimens.",
          "sourcePublication": "Health behavior change (2021)",
          "gapType": "Behavioral Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Thematic Analysis"
        },
        {
          "id": "iitropar-1-i9",
          "title": "Mental Health Support for Family Caregivers",
          "description": "Developing and testing interventions to reduce the psychological burden on caregivers of patients with dementia.",
          "sourcePublication": "Quality of life in chronic illness (2020)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Intervention Study and Surveys"
        },
        {
          "id": "iitropar-1-i10",
          "title": "Cross-Cultural Variations in Illness Representations",
          "description": "Comparing how different cultural groups in India conceptualize and respond to chronic health conditions.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Comparative Qualitative Study"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyropar-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "2189",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyropar-new-0-i1",
          "title": "Attentional Blink and Emotional Stimuli",
          "description": "Investigating how the emotional valence of a stimulus affects the duration and magnitude of the attentional blink.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Rapid Serial Visual Presentation (RSVP) and Behavioral Accuracy"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i2",
          "title": "The Role of Sleep in Memory Consolidation of Procedural Skills",
          "description": "Examining whether a period of sleep following the acquisition of a new motor task leads to significant performance improvements compared to a period of wakefulness.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Task (Finger Tapping) and Sleep Monitoring (Actigraphy)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i3",
          "title": "Cognitive Load and Decision-Making under Pressure",
          "description": "Investigating how high levels of cognitive load impact the quality and speed of decision-making in time-sensitive environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Dual-task Paradigm and Decision-making Scenarios"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i4",
          "title": "Cross-cultural Differences in Visual Attention Patterns",
          "description": "Comparing eye-movement patterns between Indian and Western participants during the viewing of complex natural scenes.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Saliency Mapping"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i5",
          "title": "Developmental Trajectories of Working Memory Capacity",
          "description": "A longitudinal study tracking the growth of working memory capacity from early childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing (N-back, Span tasks)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i6",
          "title": "Quantitative Analysis of Individual Differences in Attentional Control",
          "description": "Using large-scale behavioral data to identify latent factors that contribute to variability in attentional performance.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Factor Analysis and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i7",
          "title": "Theoretical Models of Selective Attention in Multi-talker Environments",
          "description": "Developing a computational model to explain how the brain filters out irrelevant auditory information in a \"cocktail party\" scenario.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Testing"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i8",
          "title": "Behavioral Interventions for Enhancing Attention in ADHD",
          "description": "Testing the efficacy of a computerized attention training program for children diagnosed with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i9",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Validating a new digital tool for measuring different components of attention in a diverse population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-0-i10",
          "title": "Advanced Methodologies for Measuring Real-time Attentional Fluctuations",
          "description": "Using mobile eye-tracking and physiological sensors to track attentional engagement in real-world settings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Eye-tracking and Machine Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyropar-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "4962",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyropar-new-1-i1",
          "title": "Deindividuation and Aggression in Online Gaming Communities",
          "description": "Investigating how anonymity and group identification in online multiplayer games contribute to toxic behavior and aggression.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Online Survey and Behavioral Observation in Virtual Environments"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i2",
          "title": "The Impact of Social Identity on Pro-environmental Behavior",
          "description": "Examining how identification with a particular social group (e.g., environmentalists) influences the adoption of sustainable practices.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Manipulation of Social Identity and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i3",
          "title": "Neurobiological Correlates of Social Conformity",
          "description": "Using fMRI to identify brain regions involved when individuals change their opinions to align with a group majority.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Influence Paradigm (Asch-like task)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i4",
          "title": "Cross-cultural Variations in Leadership Styles and Employee Satisfaction",
          "description": "Comparing the effectiveness of transformational vs. transactional leadership in Indian and Western organizational settings.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey (360-degree feedback) and SEM"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i5",
          "title": "Developmental Trajectories of In-group Bias in Children",
          "description": "A longitudinal study on how children's preferences for their own social groups develop and the role of parental influence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing (Minimal Group Paradigm)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i6",
          "title": "Quantitative Analysis of Social Network Influence on Health Behaviors",
          "description": "Using social network analysis to map how healthy (or unhealthy) behaviors spread through a community.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA) and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i7",
          "title": "Theoretical Models of Collective Action and Social Change",
          "description": "Developing a framework to predict when individuals are likely to participate in collective efforts to address social injustices.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Experimental Surveys"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i8",
          "title": "Behavioral Interventions for Reducing Intergroup Conflict",
          "description": "Testing the efficacy of a contact-based intervention program in reducing prejudice between different religious groups in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i9",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the reliability and validity of tools used to measure the strength of social identity in diverse contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-1-i10",
          "title": "Advanced Methodologies for Studying Real-time Group Interactions",
          "description": "Using wearable sensors and video analysis to track non-verbal communication and synchronization during group problem-solving.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Wearable Sensors (Sociometric Badges) and Automated Coding"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyropar-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "3102",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyropar-new-2-i1",
          "title": "Modeling Neural Oscillations in Working Memory",
          "description": "Developing a biophysically realistic model to explain how different frequency bands (e.g., theta, gamma) interact to maintain information in working memory.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling (NEURON/Python) and Spectral Analysis"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i2",
          "title": "The Role of Synaptic Plasticity in Long-term Potentiation (LTP)",
          "description": "Investigating the molecular and cellular mechanisms that underlie LTP and its role in memory formation using computational simulations.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Molecular Dynamics Simulations and Electrophysiological Modeling"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i3",
          "title": "Neural Correlates of Decision-making under Uncertainty",
          "description": "Using computational models to predict brain activity patterns during tasks requiring choices between risky options.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Reinforcement Learning Models and fMRI Data Analysis"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i4",
          "title": "Cross-cultural Variations in Brain Connectivity Patterns",
          "description": "Comparing resting-state functional connectivity between individuals from different cultural backgrounds using graph-theoretical analysis.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Resting-state fMRI and Graph Theory"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i5",
          "title": "Developmental Changes in Neural Circuitry for Emotion Regulation",
          "description": "Modeling the maturation of prefrontal-amygdala connections from childhood to adulthood and its impact on emotional stability.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Structural Equation Modeling (SEM) and DTI Analysis"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i6",
          "title": "Quantitative Analysis of Large-scale Neural Datasets",
          "description": "Applying machine learning algorithms to identify patterns in high-dimensional neural recordings (e.g., Neuropixels).",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning (PCA, t-SNE) and Signal Processing"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i7",
          "title": "Theoretical Models of Predictive Coding in the Visual System",
          "description": "Developing a framework to explain how the brain uses prior knowledge to generate predictions about incoming sensory information.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Bayesian Modeling and Computational Simulations"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i8",
          "title": "Behavioral Interventions for Enhancing Neuroplasticity in Stroke Recovery",
          "description": "Testing the efficacy of a brain-computer interface (BCI) based rehabilitation program for motor recovery after stroke.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and EEG-based BCI"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i9",
          "title": "Psychometric Evaluation of Cognitive Assessment Tools in Neuropsychology",
          "description": "Validating a new battery of tests for assessing cognitive deficits in patients with neurodegenerative diseases.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-2-i10",
          "title": "Advanced Methodologies for Real-time Neural Decoding",
          "description": "Developing low-latency algorithms for decoding intended movements from neural activity for prosthetic control.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Real-time Signal Processing and Deep Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyropar-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "1902",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyropar-new-3-i1",
          "title": "Efficacy of Mindfulness-Based Stress Reduction (MBSR) in Indian Students",
          "description": "Testing the effectiveness of MBSR in reducing academic stress and improving mental well-being in a sample of Indian university students.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Psychological Scales"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i2",
          "title": "The Role of Social Support in Recovery from Depression",
          "description": "Investigating how different types of social support influence the long-term outcomes of behavioral therapy for depression.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and SEM"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i3",
          "title": "Neuroplasticity and Cognitive Behavioral Therapy (CBT) for Anxiety",
          "description": "Examining changes in brain activity and connectivity following a course of CBT for generalized anxiety disorder.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i4",
          "title": "Cross-cultural Perspectives on Stigma towards Mental Illness",
          "description": "Comparing the levels and types of stigma associated with mental health issues between urban and rural Indian populations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i5",
          "title": "Cognitive Mechanisms of Rumination in Depression",
          "description": "Investigating the relationship between executive function deficits and the tendency to ruminate in individuals with major depressive disorder.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i6",
          "title": "Quantitative Analysis of Treatment Outcomes in Telepsychology",
          "description": "Using data from online therapy platforms to identify predictors of successful treatment outcomes in a large-scale sample.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i7",
          "title": "Theoretical Models of Resilience in High-stress Occupations",
          "description": "Developing a framework to explain why some individuals maintain mental health despite exposure to chronic occupational stress.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i8",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "A longitudinal study on how early childhood experiences shape the development of emotional regulation strategies and their impact on mental health.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i9",
          "title": "Psychometric Evaluation of Mental Health Assessment Tools",
          "description": "Validating a new tool for measuring psychological distress in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Mood Fluctuations",
          "description": "Using ecological momentary assessment (EMA) to investigate the relationship between daily stressors and mood in clinical populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Ecological Momentary Assessment (EMA) and Multilevel Modeling"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyropar-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "2838",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyropar-new-4-i1",
          "title": "The Impact of Multilingualism on Executive Function",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks (Stroop, Simon) and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i2",
          "title": "Language-Driven Perception of Color: A Cross-linguistic Study",
          "description": "Examining if the availability of specific color terms in a language influences the speed and accuracy of color discrimination.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Discrimination Tasks and Linguistic Analysis"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i3",
          "title": "Neuroplasticity and Second Language Acquisition in Adults",
          "description": "Using longitudinal fMRI to track structural and functional brain changes as adults learn a new language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i4",
          "title": "The Role of Inner Speech in Problem Solving",
          "description": "Investigating how the use of internal verbalization facilitates or hinders complex reasoning and decision-making processes.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Think-aloud Protocols and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i5",
          "title": "Developmental Trajectories of Metaphor Comprehension",
          "description": "Tracking how children's ability to understand figurative language evolves and its relationship to theory of mind development.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in Aphasia",
          "description": "Using computational models to map the organization of the mental lexicon in individuals with language impairments.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i7",
          "title": "Behavioral Interventions for Improving Reading Fluency",
          "description": "Testing the efficacy of a new phonological awareness program for children with dyslexia in Indian schools.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i8",
          "title": "Advanced Methodologies for Eye-tracking in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive load during reading of complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i9",
          "title": "Psychometric Evaluation of Language Proficiency Scales",
          "description": "Assessing the validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (IRT and Factor Analysis)"
        },
        {
          "id": "indianinstituteoftechnologyropar-new-4-i10",
          "title": "The Influence of Organizational Culture on Professional Communication",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology Mandi": [
    {
      "id": "iitmandi-1",
      "name": "Prof. Arnav Bhavsar",
      "specialization": "Cognitive Science, Computer Vision",
      "focus": "Computational modeling of vision, medical image analysis.",
      "scholarLink": "https://faculty.iitmandi.ac.in/~arnav/",
      "citations": "1100",
      "topPapers": [
        "Computational models of visual attention (2023)",
        "Deep learning for medical image segmentation (2022)",
        "Object recognition and categorization (2021)",
        "Visual search algorithms (2020)",
        "Machine learning in cognitive science (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitmandi-1-i1",
          "title": "Computational Models of Human Visual Saliency",
          "description": "Developing and testing algorithms that mimic how the human brain prioritizes visual information in complex scenes.",
          "sourcePublication": "Computational models of visual attention (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "iitmandi-1-i2",
          "title": "Deep Learning for Automated Medical Image Analysis",
          "description": "Applying advanced convolutional neural networks to automate the detection of abnormalities in chest X-rays and MRIs.",
          "sourcePublication": "Deep learning for medical image segmentation (2022)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "CNN Development and Performance Evaluation"
        },
        {
          "id": "iitmandi-1-i3",
          "title": "Object Recognition in Cluttered Natural Backgrounds",
          "description": "Investigating the cognitive mechanisms that allow the human visual system to segment targets from complex, noisy backgrounds.",
          "sourcePublication": "Object recognition and categorization (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Testing and Computational Modeling"
        },
        {
          "id": "iitmandi-1-i4",
          "title": "Human vs. Algorithmic Visual Search Strategies",
          "description": "Using eye-tracking to compare how humans search for targets versus how computer vision algorithms perform the same task.",
          "sourcePublication": "Visual search algorithms (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Comparative Analysis"
        },
        {
          "id": "iitmandi-1-i5",
          "title": "Decoding Cognitive States from EEG using Machine Learning",
          "description": "Developing advanced classifiers to identify specific mental states and intentions from real-time brain activity recordings.",
          "sourcePublication": "Machine learning in cognitive science (2019)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "EEG Signal Processing and Machine Learning"
        },
        {
          "id": "iitmandi-1-i6",
          "title": "Robust Facial Recognition across Pose and Lighting",
          "description": "Improving the accuracy of facial recognition systems in real-world conditions with varying lighting and camera angles.",
          "sourcePublication": "Object recognition and categorization (2021)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Algorithm Development and Large-scale Testing"
        },
        {
          "id": "iitmandi-1-i7",
          "title": "Computational Models of Gestalt Grouping Principles",
          "description": "Developing biologically inspired models that simulate how the brain organizes visual elements into coherent wholes.",
          "sourcePublication": "Computational models of visual attention (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Simulation"
        },
        {
          "id": "iitmandi-1-i8",
          "title": "Real-time Neural Decoding for Brain-Computer Interfaces",
          "description": "Developing low-latency algorithms for decoding intended movements from neural activity for BCI applications.",
          "sourcePublication": "Machine learning in cognitive science (2019)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Real-time Signal Processing and Deep Learning"
        },
        {
          "id": "iitmandi-1-i9",
          "title": "Affective Computing for Facial Emotion Recognition",
          "description": "Using computer vision and deep learning to accurately recognize human emotions from facial expressions in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Affective Gap",
          "difficulty": "Advanced",
          "methodology": "Computer Vision and Deep Learning"
        },
        {
          "id": "iitmandi-1-i10",
          "title": "Biologically Inspired Vision for Autonomous Robots",
          "description": "Implementing neural-inspired vision systems in autonomous robots to improve their navigation and object handling in dynamic environments.",
          "sourcePublication": "Computational models of visual attention (2023)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Robotics Integration and Field Testing"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymandi-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "1315",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymandi-new-0-i1",
          "title": "Attentional Blink and Emotional Stimuli",
          "description": "Investigating how the emotional valence of a stimulus affects the duration and magnitude of the attentional blink.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Rapid Serial Visual Presentation (RSVP) and Behavioral Accuracy"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i2",
          "title": "The Role of Sleep in Memory Consolidation of Procedural Skills",
          "description": "Examining whether a period of sleep following the acquisition of a new motor task leads to significant performance improvements compared to a period of wakefulness.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Task (Finger Tapping) and Sleep Monitoring (Actigraphy)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i3",
          "title": "Cognitive Load and Decision-Making under Pressure",
          "description": "Investigating how high levels of cognitive load impact the quality and speed of decision-making in time-sensitive environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Dual-task Paradigm and Decision-making Scenarios"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i4",
          "title": "Cross-cultural Differences in Visual Attention Patterns",
          "description": "Comparing eye-movement patterns between Indian and Western participants during the viewing of complex natural scenes.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Saliency Mapping"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i5",
          "title": "Developmental Trajectories of Working Memory Capacity",
          "description": "A longitudinal study tracking the growth of working memory capacity from early childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing (N-back, Span tasks)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i6",
          "title": "Quantitative Analysis of Individual Differences in Attentional Control",
          "description": "Using large-scale behavioral data to identify latent factors that contribute to variability in attentional performance.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Factor Analysis and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i7",
          "title": "Theoretical Models of Selective Attention in Multi-talker Environments",
          "description": "Developing a computational model to explain how the brain filters out irrelevant auditory information in a \"cocktail party\" scenario.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Testing"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i8",
          "title": "Behavioral Interventions for Enhancing Attention in ADHD",
          "description": "Testing the efficacy of a computerized attention training program for children diagnosed with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i9",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Validating a new digital tool for measuring different components of attention in a diverse population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-0-i10",
          "title": "Advanced Methodologies for Measuring Real-time Attentional Fluctuations",
          "description": "Using mobile eye-tracking and physiological sensors to track attentional engagement in real-world settings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Eye-tracking and Machine Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymandi-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "4535",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymandi-new-1-i1",
          "title": "Deindividuation and Aggression in Online Gaming Communities",
          "description": "Investigating how anonymity and group identification in online multiplayer games contribute to toxic behavior and aggression.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Online Survey and Behavioral Observation in Virtual Environments"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i2",
          "title": "The Impact of Social Identity on Pro-environmental Behavior",
          "description": "Examining how identification with a particular social group (e.g., environmentalists) influences the adoption of sustainable practices.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Manipulation of Social Identity and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i3",
          "title": "Neurobiological Correlates of Social Conformity",
          "description": "Using fMRI to identify brain regions involved when individuals change their opinions to align with a group majority.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Influence Paradigm (Asch-like task)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i4",
          "title": "Cross-cultural Variations in Leadership Styles and Employee Satisfaction",
          "description": "Comparing the effectiveness of transformational vs. transactional leadership in Indian and Western organizational settings.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey (360-degree feedback) and SEM"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i5",
          "title": "Developmental Trajectories of In-group Bias in Children",
          "description": "A longitudinal study on how children's preferences for their own social groups develop and the role of parental influence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing (Minimal Group Paradigm)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i6",
          "title": "Quantitative Analysis of Social Network Influence on Health Behaviors",
          "description": "Using social network analysis to map how healthy (or unhealthy) behaviors spread through a community.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA) and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i7",
          "title": "Theoretical Models of Collective Action and Social Change",
          "description": "Developing a framework to predict when individuals are likely to participate in collective efforts to address social injustices.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Experimental Surveys"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i8",
          "title": "Behavioral Interventions for Reducing Intergroup Conflict",
          "description": "Testing the efficacy of a contact-based intervention program in reducing prejudice between different religious groups in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i9",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the reliability and validity of tools used to measure the strength of social identity in diverse contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-1-i10",
          "title": "Advanced Methodologies for Studying Real-time Group Interactions",
          "description": "Using wearable sensors and video analysis to track non-verbal communication and synchronization during group problem-solving.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Wearable Sensors (Sociometric Badges) and Automated Coding"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymandi-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "3818",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymandi-new-2-i1",
          "title": "Modeling the Neural Basis of Decision-Making under Uncertainty",
          "description": "Developing a computational model that simulates how the brain integrates conflicting information to reach a decision.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling (Reinforcement Learning) and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i2",
          "title": "Simulating Synaptic Plasticity in Large-scale Neural Networks",
          "description": "Investigating how different rules of synaptic plasticity contribute to the emergence of complex network dynamics and learning.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Large-scale Neural Simulations (NEST or Brian2)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i3",
          "title": "The Impact of Stress on Neural Connectivity: A Computational Approach",
          "description": "Modeling how chronic stress alters the functional connectivity between the prefrontal cortex and the amygdala.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Dynamic Causal Modeling (DCM) and Simulation"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i4",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Comparing neural activation patterns during the perception of emotional faces between Indian and Western participants using simulated data.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Data Simulation and Pattern Analysis"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i5",
          "title": "Developmental Changes in Brain Network Efficiency",
          "description": "A computational study on how the topological properties of brain networks evolve from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theoretical Analysis of Simulated Brain Networks"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i6",
          "title": "Quantitative Analysis of Neural Oscillations in Cognitive Tasks",
          "description": "Using advanced signal processing techniques to identify the relationship between specific frequency bands and cognitive performance.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Time-frequency Analysis and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i7",
          "title": "Theoretical Frameworks for Understanding Consciousness",
          "description": "Developing a mathematical model to explain the emergence of conscious experience from neural activity.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Mathematical Modeling and Information Theory"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i8",
          "title": "Predicting Treatment Response in Depression using Neural Models",
          "description": "Using simulated neural data to identify biomarkers that predict how an individual will respond to different antidepressant treatments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Predictive Modeling and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i9",
          "title": "Psychometric Evaluation of Neural Complexity Measures",
          "description": "Assessing the reliability and validity of different measures of neural complexity (e.g., entropy) as indicators of cognitive health.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation and Simulation"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-2-i10",
          "title": "Advanced Methodologies for Real-time Brain-Computer Interfacing",
          "description": "Developing new algorithms for faster and more accurate decoding of neural signals for BCI applications.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Real-time Signal Processing and Deep Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymandi-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "2332",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymandi-new-3-i1",
          "title": "Efficacy of Virtual Reality (VR) in Treating Social Anxiety",
          "description": "Testing whether VR-based exposure therapy is as effective as traditional in-person exposure for individuals with social anxiety disorder.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and VR Simulation"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i2",
          "title": "The Role of Resilience in Mitigating the Effects of Childhood Trauma",
          "description": "Investigating the psychological factors that contribute to resilience and healthy functioning in adults who experienced early life adversity.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i3",
          "title": "Neuroplasticity and Recovery from Substance Use Disorders",
          "description": "Examining brain changes associated with long-term abstinence and the impact of behavioral therapies on neural recovery.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i4",
          "title": "Cross-cultural Differences in Coping Strategies for Depression",
          "description": "Comparing how individuals in India and the West utilize different social and cognitive strategies to manage depressive symptoms.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i5",
          "title": "Cognitive Mechanisms of Decision-Making in Addiction",
          "description": "Investigating the relationship between impulsivity, reward processing, and the maintenance of addictive behaviors.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks (Delay Discounting) and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i6",
          "title": "Quantitative Analysis of Large-scale Mental Health Data",
          "description": "Using machine learning to identify patterns and predictors of mental health crises from electronic health records.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i7",
          "title": "Theoretical Models of Behavioral Change in Clinical Settings",
          "description": "Developing a framework to explain the psychological processes that lead to successful outcomes in behavioral therapy.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i8",
          "title": "The Impact of Workplace Stress on Mental Health and Productivity",
          "description": "Investigating how organizational factors contribute to employee burnout and the effectiveness of workplace interventions.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey and Longitudinal Analysis"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i9",
          "title": "Psychometric Evaluation of Clinical Assessment Tools",
          "description": "Validating a new tool for measuring the severity of symptoms in a specific clinical population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Behavioral Changes",
          "description": "Using wearable sensors and mobile apps to track behavioral patterns and provide real-time interventions for clinical populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Health (mHealth) and Wearable Sensors"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologymandi-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "1886",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologymandi-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Flexibility in Indian Children",
          "description": "Investigating whether speaking multiple Indian languages from an early age leads to enhanced executive function and task-switching abilities.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks (Stroop, Simon) and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i2",
          "title": "Neuroplasticity and Second Language Learning in Adulthood",
          "description": "Using longitudinal fMRI to track structural and functional brain changes as adults acquire a new language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i3",
          "title": "Language-Driven Perception of Time: A Cross-linguistic Study",
          "description": "Examining whether the way time is encoded in a language (e.g., using spatial metaphors) influences how speakers perceive and estimate duration.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Time Estimation Tasks and Linguistic Analysis"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i4",
          "title": "The Role of Inner Speech in Logical Reasoning",
          "description": "Investigating how the use of internal verbalization facilitates or hinders the process of solving complex logical problems.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Think-aloud Protocols and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i5",
          "title": "Developmental Trajectories of Metaphor Comprehension in Indian Schools",
          "description": "Tracking how children's ability to understand figurative language evolves in a multilingual educational environment.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in Multilingual Individuals",
          "description": "Using computational models to map the organization of the mental lexicon in people who speak multiple languages.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Semantic Priming Tasks"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i7",
          "title": "Behavioral Interventions for Improving Reading Comprehension",
          "description": "Testing the efficacy of a new strategy-based intervention for children with reading difficulties in Indian languages.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i8",
          "title": "Advanced Methodologies for Studying Language Processing in Real-time",
          "description": "Using EEG and eye-tracking to investigate the cognitive load during the processing of complex grammatical structures in Indian languages.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Co-registration of EEG and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i9",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Validating a new tool for measuring language proficiency in a diverse multilingual population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (IRT and Factor Analysis)"
        },
        {
          "id": "indianinstituteoftechnologymandi-new-4-i10",
          "title": "The Influence of Language Use on Professional Identity and Communication",
          "description": "Investigating how the choice of language in professional settings impacts employee identity and communication styles.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology (BHU) Varanasi": [
    {
      "id": "iitbhu-1",
      "name": "Prof. Anuradha",
      "specialization": "Clinical Psychology, Mental Health",
      "focus": "Psychopathology, psychotherapy, and community mental health.",
      "scholarLink": "#",
      "citations": "650",
      "topPapers": [
        "Psychotherapy outcomes in depression (2023)",
        "Community mental health interventions (2022)",
        "Stigma and help-seeking behavior (2021)",
        "Trauma and resilience (2020)",
        "Cross-cultural clinical psychology (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitbhu-1-i1",
          "title": "Efficacy of Culturally Adapted CBT for Depression in Rural India",
          "description": "Evaluating the effectiveness of a version of CBT that incorporates local idioms of distress and cultural values in a rural Indian sample.",
          "sourcePublication": "Psychotherapy outcomes in depression (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Qualitative Interviews"
        },
        {
          "id": "iitbhu-1-i2",
          "title": "Community-Based Interventions for Reducing Mental Health Stigma",
          "description": "Developing and testing a community-led program aimed at reducing the social stigma associated with seeking psychiatric help in low-resource settings.",
          "sourcePublication": "Community mental health interventions (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Community-based Participatory Research (CBPR) and Pre-Post Surveys"
        },
        {
          "id": "iitbhu-1-i3",
          "title": "Barriers to Help-Seeking Behavior among Indian Youth",
          "description": "Identifying the psychological and social factors that prevent young adults in India from accessing mental health services.",
          "sourcePublication": "Stigma and help-seeking behavior (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Mixed-methods Study (Survey and Focus Groups)"
        },
        {
          "id": "iitbhu-1-i4",
          "title": "The Role of Resilience in Recovery from Interpersonal Trauma",
          "description": "Investigating the factors that promote psychological resilience in survivors of domestic violence in the Indian context.",
          "sourcePublication": "Trauma and resilience (2020)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and Structural Equation Modeling (SEM)"
        },
        {
          "id": "iitbhu-1-i5",
          "title": "Cross-cultural Variations in the Expression of Anxiety",
          "description": "Comparing the somatic and psychological manifestations of anxiety between Indian and Western clinical populations.",
          "sourcePublication": "Cross-cultural clinical psychology (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Clinical Assessment and Factor Analysis"
        },
        {
          "id": "iitbhu-1-i6",
          "title": "Cognitive Mechanisms of Decision-Making in Individuals with Depression",
          "description": "Investigating how depressive symptoms influence risk-taking and reward processing in a behavioral task.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Computational Modeling"
        },
        {
          "id": "iitbhu-1-i7",
          "title": "Neuroplasticity and the Effects of Mindfulness-Based Interventions",
          "description": "Examining changes in brain structure and function following a mindfulness-based stress reduction program.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "iitbhu-1-i8",
          "title": "Behavioral Interventions for Substance Use Disorders in India",
          "description": "Testing the efficacy of a brief behavioral intervention for reducing alcohol consumption in a community sample.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Biochemical Markers"
        },
        {
          "id": "iitbhu-1-i9",
          "title": "Psychometric Evaluation of Mental Health Screening Tools in Hindi",
          "description": "Validating the Hindi version of a widely used mental health screening tool for use in primary care settings.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2015)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "iitbhu-1-i10",
          "title": "Cross-cultural Perspectives on the Conceptualization of Mental Health",
          "description": "Investigating how different cultural frameworks in India influence the understanding and treatment of mental illness.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Thematic Analysis"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhuvaranasi-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "5453",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i1",
          "title": "The Impact of Aging on Working Memory Capacity",
          "description": "Investigating how the decline in working memory capacity with age affects daily decision-making tasks in an Indian sample.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Testing (N-back, Span tasks) and Longitudinal Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i2",
          "title": "Neuroplasticity and the Acquisition of New Cognitive Skills",
          "description": "Examining brain changes associated with learning a new complex task and the role of practice in neural reorganization.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Performance Tracking"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i3",
          "title": "Cognitive Load and Attentional Control in High-stress Environments",
          "description": "Investigating how high levels of cognitive load impact the ability to maintain focus and ignore distractions in professional settings.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Dual-task Paradigm and Physiological Monitoring (HRV)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i4",
          "title": "Cross-cultural Variations in Visual Attention Patterns",
          "description": "Comparing eye-movement patterns between Indian and Western participants during the viewing of complex natural scenes.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Saliency Mapping"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i5",
          "title": "Developmental Trajectories of Selective Attention in Children",
          "description": "A longitudinal study tracking the development of selective attention from early childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i6",
          "title": "Quantitative Analysis of Individual Differences in Memory Performance",
          "description": "Using large-scale behavioral data to identify latent factors that contribute to variability in memory performance.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Factor Analysis and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i7",
          "title": "Theoretical Models of Human Memory and Decision-Making",
          "description": "Developing a computational model to explain the interaction between memory retrieval and decision-making processes.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i8",
          "title": "Behavioral Interventions for Enhancing Memory in Clinical Populations",
          "description": "Testing the efficacy of a computerized memory training program for individuals with mild cognitive impairment.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i9",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Validating a new digital tool for measuring different components of attention in a diverse population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-0-i10",
          "title": "Advanced Methodologies for Measuring Real-time Attentional Fluctuations",
          "description": "Using mobile eye-tracking and physiological sensors to track attentional engagement in real-world settings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Eye-tracking and Machine Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhuvaranasi-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "3288",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i1",
          "title": "Social Identity and Collective Action in Environmental Movements",
          "description": "Investigating how identification with environmental groups influences individual participation in collective actions in India.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Survey and Experimental Manipulation of Social Identity"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i2",
          "title": "The Impact of Social Influence on Health-related Decision Making",
          "description": "Examining how peer pressure and social norms affect decisions related to vaccination and healthy lifestyles.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Social Network Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i3",
          "title": "Neurobiological Correlates of Social Conformity",
          "description": "Using fMRI to identify brain regions involved when individuals align their opinions with a group majority.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Influence Paradigm"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i4",
          "title": "Cross-cultural Variations in Leadership Styles and Group Productivity",
          "description": "Comparing the effectiveness of different leadership styles in Indian and Western organizational settings.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i5",
          "title": "Developmental Trajectories of In-group Bias in Children",
          "description": "A longitudinal study on how children's preferences for their own social groups develop and the role of parental influence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i6",
          "title": "Quantitative Analysis of Social Network Influence on Consumer Behavior",
          "description": "Using social network analysis to map how information and influence spread through online communities.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA) and Big Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i7",
          "title": "Theoretical Models of Group Dynamics and Conflict Resolution",
          "description": "Developing a computational model to predict the outcomes of group negotiations and conflict resolution strategies.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i8",
          "title": "Behavioral Interventions for Reducing Intergroup Prejudice",
          "description": "Testing the efficacy of a contact-based intervention program in reducing prejudice between different social groups in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i9",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the reliability and validity of tools used to measure the strength of social identity in diverse contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-1-i10",
          "title": "Advanced Methodologies for Studying Real-time Social Interactions",
          "description": "Using wearable sensors and video analysis to track non-verbal communication and synchronization during social interactions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Wearable Sensors and Automated Coding"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhuvaranasi-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "2190",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i1",
          "title": "Modeling the Neural Basis of Decision-Making under Uncertainty",
          "description": "Developing a computational model that simulates how the brain integrates conflicting information to reach a decision.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i2",
          "title": "Simulating Synaptic Plasticity in Large-scale Neural Networks",
          "description": "Investigating how different rules of synaptic plasticity contribute to the emergence of complex network dynamics and learning.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Large-scale Neural Simulations"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i3",
          "title": "The Impact of Stress on Neural Connectivity: A Computational Approach",
          "description": "Modeling how chronic stress alters the functional connectivity between the prefrontal cortex and the amygdala.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Dynamic Causal Modeling (DCM) and Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i4",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Comparing neural activation patterns during the perception of emotional faces between Indian and Western participants using simulated data.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Data Simulation and Pattern Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i5",
          "title": "Developmental Changes in Brain Network Efficiency",
          "description": "A computational study on how the topological properties of brain networks evolve from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theoretical Analysis of Simulated Brain Networks"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i6",
          "title": "Quantitative Analysis of Neural Oscillations in Cognitive Tasks",
          "description": "Using advanced signal processing techniques to identify the relationship between specific frequency bands and cognitive performance.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Time-frequency Analysis and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i7",
          "title": "Theoretical Frameworks for Understanding Consciousness",
          "description": "Developing a mathematical model to explain the emergence of conscious experience from neural activity.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Mathematical Modeling and Information Theory"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i8",
          "title": "Predicting Treatment Response in Depression using Neural Models",
          "description": "Using simulated neural data to identify biomarkers that predict how an individual will respond to different antidepressant treatments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Predictive Modeling and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i9",
          "title": "Psychometric Evaluation of Neural Complexity Measures",
          "description": "Assessing the reliability and validity of different measures of neural complexity as indicators of cognitive health.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation and Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-2-i10",
          "title": "Advanced Methodologies for Real-time Brain-Computer Interfacing",
          "description": "Developing new algorithms for faster and more accurate decoding of neural signals for BCI applications.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Real-time Signal Processing and Deep Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhuvaranasi-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "733",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i1",
          "title": "Efficacy of Virtual Reality (VR) in Treating Social Anxiety",
          "description": "Testing whether VR-based exposure therapy is as effective as traditional in-person exposure for individuals with social anxiety disorder in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and VR Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i2",
          "title": "The Role of Resilience in Mitigating the Effects of Childhood Trauma",
          "description": "Investigating the psychological factors that contribute to resilience and healthy functioning in adults who experienced early life adversity.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i3",
          "title": "Neuroplasticity and Recovery from Substance Use Disorders",
          "description": "Examining brain changes associated with long-term abstinence and the impact of behavioral therapies on neural recovery.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i4",
          "title": "Cross-cultural Differences in Coping Strategies for Depression",
          "description": "Comparing how individuals in India and the West utilize different social and cognitive strategies to manage depressive symptoms.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i5",
          "title": "Cognitive Mechanisms of Decision-Making in Addiction",
          "description": "Investigating the relationship between impulsivity, reward processing, and the maintenance of addictive behaviors.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i6",
          "title": "Quantitative Analysis of Large-scale Mental Health Data",
          "description": "Using machine learning to identify patterns and predictors of mental health crises from electronic health records.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i7",
          "title": "Theoretical Models of Behavioral Change in Clinical Settings",
          "description": "Developing a framework to explain the psychological processes that lead to successful outcomes in behavioral therapy.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i8",
          "title": "The Impact of Workplace Stress on Mental Health and Productivity",
          "description": "Investigating how organizational factors contribute to employee burnout and the effectiveness of workplace interventions.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey and Longitudinal Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i9",
          "title": "Psychometric Evaluation of Clinical Assessment Tools",
          "description": "Validating a new tool for measuring the severity of symptoms in a specific clinical population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Behavioral Changes",
          "description": "Using wearable sensors and mobile apps to track behavioral patterns and provide real-time interventions for clinical populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Health (mHealth) and Wearable Sensors"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhuvaranasi-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "1788",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Flexibility in Indian Adults",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Late Adulthood",
          "description": "Using longitudinal fMRI to track structural and functional brain changes as older adults learn a new language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i3",
          "title": "Language-Driven Perception of Color: A Cross-linguistic Study",
          "description": "Examining if the availability of specific color terms in an Indian language influences the speed and accuracy of color discrimination.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Discrimination Tasks and Linguistic Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i4",
          "title": "The Role of Inner Speech in Complex Problem Solving",
          "description": "Investigating how the use of internal verbalization facilitates or hinders the process of solving complex reasoning problems.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Think-aloud Protocols and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i5",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking how children's ability to understand figurative language evolves and its relationship to cognitive development.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in Aphasia",
          "description": "Using computational models to map the organization of the mental lexicon in individuals with language impairments.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i7",
          "title": "Behavioral Interventions for Improving Reading Fluency in Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i8",
          "title": "Advanced Methodologies for Eye-tracking in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive load during reading of complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i9",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (IRT and Factor Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhuvaranasi-new-4-i10",
          "title": "The Influence of Organizational Culture on Professional Communication",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology Bhubaneswar": [
    {
      "id": "iitbbs-1",
      "name": "Prof. Godabarisha Mishra",
      "specialization": "Cognitive Psychology, Philosophy of Mind",
      "focus": "Consciousness, perception, and Indian psychology.",
      "scholarLink": "#",
      "citations": "400",
      "topPapers": [
        "Indian perspectives on consciousness (2023)",
        "Philosophy of mind and cognitive science (2022)",
        "Perception and reality (2021)",
        "Yoga and mental health (2020)",
        "Epistemology and cognition (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitbbs-1-i1",
          "title": "The Concept of 'Dharma' in Contemporary Indian Ethics",
          "description": "Re-evaluating the traditional concept of Dharma and its relevance to modern ethical dilemmas in Indian society.",
          "sourcePublication": "Indian perspectives on consciousness (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Philosophical Analysis and Hermeneutics"
        },
        {
          "id": "iitbbs-1-i2",
          "title": "Comparative Analysis of Advaita Vedanta and Western Idealism",
          "description": "Exploring the similarities and differences between the metaphysical frameworks of Advaita Vedanta and prominent Western idealist philosophies.",
          "sourcePublication": "Philosophy of mind and cognitive science (2022)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Comparative Philosophical Analysis"
        },
        {
          "id": "iitbbs-1-i3",
          "title": "The Role of Mindfulness in Classical Indian Psychology",
          "description": "Investigating the early conceptualizations of mindfulness in Buddhist and Yogic traditions and their implications for modern psychological practice.",
          "sourcePublication": "Yoga and mental health (2020)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Textual Analysis and Conceptual Mapping"
        },
        {
          "id": "iitbbs-1-i4",
          "title": "Epistemological Foundations of Indian Logic",
          "description": "Examining the criteria for valid knowledge (Pramana) in different schools of Indian logic and their contemporary relevance.",
          "sourcePublication": "Epistemology and cognition (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Logical Analysis and Textual Interpretation"
        },
        {
          "id": "iitbbs-1-i5",
          "title": "Social Justice in Ancient Indian Political Thought",
          "description": "Identifying early ideas of social equity and justice in texts like the Arthashastra and their application to modern governance.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Historical Analysis and Political Theory"
        },
        {
          "id": "iitbbs-1-i6",
          "title": "The Concept of Self in Samkhya and Yoga",
          "description": "A comparative study of the nature of the self (Purusha) and its relationship to the material world (Prakriti) in Samkhya and Yoga.",
          "sourcePublication": "Yoga and mental health (2020)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Textual Hermeneutics and Comparative Analysis"
        },
        {
          "id": "iitbbs-1-i7",
          "title": "Aesthetic Experience in Indian Rasa Theory",
          "description": "Exploring the psychological and philosophical dimensions of aesthetic enjoyment (Rasa) in classical Indian poetics.",
          "sourcePublication": "Perception and reality (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Phenomenological Analysis and Textual Study"
        },
        {
          "id": "iitbbs-1-i8",
          "title": "The Ethics of Non-violence (Ahimsa) in Global Contexts",
          "description": "Investigating the universal applicability of the principle of Ahimsa in resolving modern international conflicts.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethical Analysis and Case Studies"
        },
        {
          "id": "iitbbs-1-i9",
          "title": "Metaphysical Implications of the Doctrine of Karma",
          "description": "Examining the causal mechanisms and ethical implications of the law of Karma in different Indian philosophical systems.",
          "sourcePublication": "Indian perspectives on consciousness (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Metaphysical Analysis and Textual Interpretation"
        },
        {
          "id": "iitbbs-1-i10",
          "title": "Cross-cultural Perspectives on the Nature of Reality",
          "description": "Comparing Indian and Western ontological perspectives on the fundamental nature of existence.",
          "sourcePublication": "Philosophy of mind and cognitive science (2022)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Comparative Ontology and Philosophical Dialogue"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhubaneswar-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "779",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i1",
          "title": "The Impact of Aging on Working Memory Capacity",
          "description": "Investigating how the decline in working memory capacity with age affects daily decision-making tasks in an Indian sample.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Testing (N-back, Span tasks) and Longitudinal Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i2",
          "title": "Neuroplasticity and the Acquisition of New Cognitive Skills",
          "description": "Examining brain changes associated with learning a new complex task and the role of practice in neural reorganization.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Performance Tracking"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i3",
          "title": "Cognitive Load and Attentional Control in High-stress Environments",
          "description": "Investigating how high levels of cognitive load impact the ability to maintain focus and ignore distractions in professional settings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Dual-task Paradigm and Physiological Monitoring (HRV)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i4",
          "title": "Cross-cultural Variations in Visual Attention Patterns",
          "description": "Comparing eye-movement patterns between Indian and Western participants during the viewing of complex natural scenes.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Saliency Mapping"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i5",
          "title": "Developmental Trajectories of Selective Attention in Children",
          "description": "A longitudinal study tracking the development of selective attention from early childhood to adolescence.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i6",
          "title": "Quantitative Analysis of Individual Differences in Memory Performance",
          "description": "Using large-scale behavioral data to identify latent factors that contribute to variability in memory performance.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Factor Analysis and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i7",
          "title": "Theoretical Models of Human Memory and Decision-Making",
          "description": "Developing a computational model to explain the interaction between memory retrieval and decision-making processes.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i8",
          "title": "Behavioral Interventions for Enhancing Memory in Clinical Populations",
          "description": "Testing the efficacy of a computerized memory training program for individuals with mild cognitive impairment.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i9",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Validating a new digital tool for measuring different components of attention in a diverse population.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-0-i10",
          "title": "Advanced Methodologies for Measuring Real-time Attentional Fluctuations",
          "description": "Using mobile eye-tracking and physiological sensors to track attentional engagement in real-world settings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Eye-tracking and Machine Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhubaneswar-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "4890",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i1",
          "title": "Social Identity and Collective Action in Environmental Movements",
          "description": "Investigating how identification with environmental groups influences individual participation in collective actions in India.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Survey and Experimental Manipulation of Social Identity"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i2",
          "title": "The Impact of Social Influence on Health-related Decision Making",
          "description": "Examining how peer pressure and social norms affect decisions related to vaccination and healthy lifestyles.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Social Network Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i3",
          "title": "Neurobiological Correlates of Social Conformity",
          "description": "Using fMRI to identify brain regions involved when individuals align their opinions with a group majority.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Social Influence Paradigm"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i4",
          "title": "Cross-cultural Variations in Leadership Styles and Group Productivity",
          "description": "Comparing the effectiveness of different leadership styles in Indian and Western organizational settings.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i5",
          "title": "Developmental Trajectories of In-group Bias in Children",
          "description": "A longitudinal study on how children's preferences for their own social groups develop and the role of parental influence.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i6",
          "title": "Quantitative Analysis of Social Network Influence on Consumer Behavior",
          "description": "Using social network analysis to map how information and influence spread through online communities.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA) and Big Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i7",
          "title": "Theoretical Models of Group Dynamics and Conflict Resolution",
          "description": "Developing a computational model to predict the outcomes of group negotiations and conflict resolution strategies.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i8",
          "title": "Behavioral Interventions for Reducing Intergroup Prejudice",
          "description": "Testing the efficacy of a contact-based intervention program in reducing prejudice between different social groups in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i9",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the reliability and validity of tools used to measure the strength of social identity in diverse contexts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-1-i10",
          "title": "Advanced Methodologies for Studying Real-time Social Interactions",
          "description": "Using wearable sensors and video analysis to track non-verbal communication and synchronization during social interactions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Wearable Sensors and Automated Coding"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhubaneswar-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "3407",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i1",
          "title": "Modeling the Neural Basis of Decision-Making under Uncertainty",
          "description": "Developing a computational model that simulates how the brain integrates conflicting information to reach a decision.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Validation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i2",
          "title": "Simulating Synaptic Plasticity in Large-scale Neural Networks",
          "description": "Investigating how different rules of synaptic plasticity contribute to the emergence of complex network dynamics and learning.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Large-scale Neural Simulations"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i3",
          "title": "The Impact of Stress on Neural Connectivity: A Computational Approach",
          "description": "Modeling how chronic stress alters the functional connectivity between the prefrontal cortex and the amygdala.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Dynamic Causal Modeling (DCM) and Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i4",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Comparing neural activation patterns during the perception of emotional faces between Indian and Western participants using simulated data.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Data Simulation and Pattern Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i5",
          "title": "Developmental Changes in Brain Network Efficiency",
          "description": "A computational study on how the topological properties of brain networks evolve from childhood to adulthood.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theoretical Analysis of Simulated Brain Networks"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i6",
          "title": "Quantitative Analysis of Neural Oscillations in Cognitive Tasks",
          "description": "Using advanced signal processing techniques to identify the relationship between specific frequency bands and cognitive performance.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Time-frequency Analysis and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i7",
          "title": "Theoretical Frameworks for Understanding Consciousness",
          "description": "Developing a mathematical model to explain the emergence of conscious experience from neural activity.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Mathematical Modeling and Information Theory"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i8",
          "title": "Predicting Treatment Response in Depression using Neural Models",
          "description": "Using simulated neural data to identify biomarkers that predict how an individual will respond to different antidepressant treatments.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Predictive Modeling and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i9",
          "title": "Psychometric Evaluation of Neural Complexity Measures",
          "description": "Assessing the reliability and validity of different measures of neural complexity as indicators of cognitive health.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation and Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-2-i10",
          "title": "Advanced Methodologies for Real-time Brain-Computer Interfacing",
          "description": "Developing new algorithms for faster and more accurate decoding of neural signals for BCI applications.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Real-time Signal Processing and Deep Learning"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhubaneswar-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "4873",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i1",
          "title": "Efficacy of Virtual Reality (VR) in Treating Social Anxiety",
          "description": "Testing whether VR-based exposure therapy is as effective as traditional in-person exposure for individuals with social anxiety disorder in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Randomized Controlled Trial (RCT) and VR Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i2",
          "title": "The Role of Resilience in Mitigating the Effects of Childhood Trauma",
          "description": "Investigating the psychological factors that contribute to resilience and healthy functioning in adults who experienced early life adversity.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Study and Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i3",
          "title": "Neuroplasticity and Recovery from Substance Use Disorders",
          "description": "Examining brain changes associated with long-term abstinence and the impact of behavioral therapies on neural recovery.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i4",
          "title": "Cross-cultural Differences in Coping Strategies for Depression",
          "description": "Comparing how individuals in India and the West utilize different social and cognitive strategies to manage depressive symptoms.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i5",
          "title": "Cognitive Mechanisms of Decision-Making in Addiction",
          "description": "Investigating the relationship between impulsivity, reward processing, and the maintenance of addictive behaviors.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i6",
          "title": "Quantitative Analysis of Large-scale Mental Health Data",
          "description": "Using machine learning to identify patterns and predictors of mental health crises from electronic health records.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i7",
          "title": "Theoretical Models of Behavioral Change in Clinical Settings",
          "description": "Developing a framework to explain the psychological processes that lead to successful outcomes in behavioral therapy.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i8",
          "title": "The Impact of Workplace Stress on Mental Health and Productivity",
          "description": "Investigating how organizational factors contribute to employee burnout and the effectiveness of workplace interventions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-source Survey and Longitudinal Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i9",
          "title": "Psychometric Evaluation of Clinical Assessment Tools",
          "description": "Validating a new tool for measuring the severity of symptoms in a specific clinical population.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA and Reliability Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-3-i10",
          "title": "Advanced Methodologies for Tracking Real-time Behavioral Changes",
          "description": "Using wearable sensors and mobile apps to track behavioral patterns and provide real-time interventions for clinical populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Health (mHealth) and Wearable Sensors"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhubaneswar-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "3318",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Flexibility in Indian Adults",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Late Adulthood",
          "description": "Using longitudinal fMRI to track structural and functional brain changes as older adults learn a new language.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i3",
          "title": "Language-Driven Perception of Color: A Cross-linguistic Study",
          "description": "Examining if the availability of specific color terms in an Indian language influences the speed and accuracy of color discrimination.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Discrimination Tasks and Linguistic Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i4",
          "title": "The Role of Inner Speech in Complex Problem Solving",
          "description": "Investigating how the use of internal verbalization facilitates or hinders the process of solving complex reasoning problems.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Think-aloud Protocols and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i5",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking how children's ability to understand figurative language evolves and its relationship to cognitive development.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in Aphasia",
          "description": "Using computational models to map the organization of the mental lexicon in individuals with language impairments.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i7",
          "title": "Behavioral Interventions for Improving Reading Fluency in Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i8",
          "title": "Advanced Methodologies for Eye-tracking in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive load during reading of complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i9",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (IRT and Factor Analysis)"
        },
        {
          "id": "indianinstituteoftechnologybhubaneswar-new-4-i10",
          "title": "The Influence of Organizational Culture on Professional Communication",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology Dharwad": [
    {
      "id": "iitdh-1",
      "name": "Prof. S. R. Mahadeva Prasanna",
      "specialization": "Speech Processing, Cognitive Science",
      "focus": "Speech perception, emotion recognition from speech, and auditory cognition.",
      "scholarLink": "https://www.iitdh.ac.in/prasanna",
      "citations": "2500",
      "topPapers": [
        "Emotion recognition from speech signals (2023)",
        "Speech perception in noise (2022)",
        "Acoustic analysis of emotional speech (2021)",
        "Speaker recognition systems (2020)",
        "Signal processing for auditory cognition (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitdh-1-i1",
          "title": "Emotion Recognition from Speech in Low-Resource Indian Languages",
          "description": "Developing robust algorithms to identify emotional states from acoustic features specifically for languages with limited training data.",
          "sourcePublication": "Emotion recognition from speech signals (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning and Acoustic Feature Extraction"
        },
        {
          "id": "iitdh-1-i2",
          "title": "Speech Perception in Noise: Cognitive Load and Aging",
          "description": "Investigating how the auditory system extracts speech signals from complex background noise and how this process is affected by cognitive decline in older adults.",
          "sourcePublication": "Speech perception in noise (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and EEG"
        },
        {
          "id": "iitdh-1-i3",
          "title": "Acoustic Correlates of Stress in High-Pressure Occupations",
          "description": "Identifying vocal markers of psychological and physiological stress in professionals like air traffic controllers or emergency responders.",
          "sourcePublication": "Acoustic analysis of emotional speech (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Physiological Monitoring"
        },
        {
          "id": "iitdh-1-i4",
          "title": "Speaker Recognition Systems: Robustness to Voice Mimicry",
          "description": "Improving the accuracy and security of voice biometric systems by developing features that can distinguish between genuine and mimicked voices.",
          "sourcePublication": "Speaker recognition systems (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Pattern Recognition and Voice Biometrics"
        },
        {
          "id": "iitdh-1-i5",
          "title": "Auditory Scene Analysis: Computational Models of Sound Segregation",
          "description": "Developing computational models of how the human auditory system segregates multiple sound sources in complex environments.",
          "sourcePublication": "Signal processing for auditory cognition (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Psychoacoustics"
        },
        {
          "id": "iitdh-1-i6",
          "title": "Speech Synthesis: Generating Natural-Sounding Emotional Speech",
          "description": "Developing techniques for generating natural-sounding emotional speech for more effective human-computer interaction.",
          "sourcePublication": "Emotion recognition from speech signals (2023)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Deep Learning and Text-to-Speech (TTS) Synthesis"
        },
        {
          "id": "iitdh-1-i7",
          "title": "Language Acquisition: Acoustic Analysis of Early Speech Development",
          "description": "Using acoustic analysis to track the development of speech sounds in infants and its relationship to cognitive milestones.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Acoustic Analysis and Behavioral Testing"
        },
        {
          "id": "iitdh-1-i8",
          "title": "Clinical Applications of Speech Analysis: Detecting Neurological Disorders",
          "description": "Developing non-invasive tools for detecting early signs of neurological disorders like Parkinson's or Alzheimer's from voice characteristics.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Acoustic Analysis and Clinical Validation"
        },
        {
          "id": "iitdh-1-i9",
          "title": "Cross-Cultural Emotion Expression in Speech",
          "description": "Comparing the acoustic features of emotion expression across different languages and cultures to identify universal and language-specific markers.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Acoustic Analysis and Perception Studies"
        },
        {
          "id": "iitdh-1-i10",
          "title": "Music Cognition: Neural and Acoustic Basis of Emotion",
          "description": "Investigating the neural and acoustic basis of how music evokes emotional responses in listeners.",
          "sourcePublication": "Signal processing for auditory cognition (2019)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Music Information Retrieval (MIR)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydharwad-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "2269",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i1",
          "title": "The Impact of Digital Distractions on Working Memory",
          "description": "Investigating how frequent notifications and multitasking with digital devices affect the capacity and efficiency of working memory in young adults.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i2",
          "title": "Neuroplasticity and Memory Enhancement through Mnemonic Training",
          "description": "Using fMRI to track brain changes associated with the acquisition and use of advanced mnemonic techniques for long-term information retention.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Memory Testing"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i3",
          "title": "Behavioral Interventions for Improving Attention in ADHD",
          "description": "Testing the efficacy of a new mindfulness-based intervention for enhancing sustained attention in children with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Assessments"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i4",
          "title": "Advanced Methodologies for Tracking Real-time Attentional Fluctuations",
          "description": "Developing new algorithms for analyzing EEG data to identify periods of mind-wandering and attentional lapses in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i5",
          "title": "Cross-cultural Differences in Autobiographical Memory",
          "description": "Comparing how individuals from different cultural backgrounds in India recall and narrate significant life events.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i6",
          "title": "Quantitative Analysis of Memory Decay in Aging Populations",
          "description": "Using longitudinal data to model the rate of memory decline in healthy older adults and identify predictors of cognitive resilience.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i7",
          "title": "Theoretical Models of Attentional Selection in Complex Scenes",
          "description": "Developing a computational framework to explain how the brain prioritizes information in visually dense environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i8",
          "title": "The Role of Attention in Organizational Decision Making",
          "description": "Investigating how attentional biases and cognitive load impact the quality of decisions made by managers in high-pressure environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Field Experiments and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i9",
          "title": "Developmental Trajectories of Executive Functions in Early Childhood",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children from diverse socioeconomic backgrounds.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Cognitive Assessments"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Assessing the reliability and validity of a new computerized battery for measuring different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydharwad-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "4489",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i1",
          "title": "The Impact of Social Media Echo Chambers on Political Polarization",
          "description": "Investigating how exposure to ideologically homogeneous online groups influences the extremity of political beliefs and intergroup hostility.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Social Network Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i2",
          "title": "Neuroplasticity and Social Conformity: Brain Changes in Response to Group Pressure",
          "description": "Using fMRI to examine how the brain's reward and conflict detection systems adapt when individuals repeatedly conform to group norms.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Asch Conformity Paradigm"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i3",
          "title": "Behavioral Interventions for Reducing Workplace Bullying",
          "description": "Testing the efficacy of a bystander intervention program in promoting prosocial behavior and reducing incidents of harassment in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Field Observation"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i4",
          "title": "Advanced Methodologies for Modeling Group Decision-Making Processes",
          "description": "Developing computational models to predict the outcomes of group discussions based on individual preferences and social influence dynamics.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Agent-based Simulation"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i5",
          "title": "Cross-cultural Perspectives on Collectivism and Individualism",
          "description": "Comparing how social identity and group loyalty are manifested in rural vs. urban Indian communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Online Crowdfunding",
          "description": "Using big data to identify the factors that drive viral success and collective support for social causes on digital platforms.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Econometric Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i7",
          "title": "Theoretical Models of Social Identity and Intergroup Conflict",
          "description": "Developing a formal theory to explain the conditions under which strong group identification leads to violent conflict vs. peaceful cooperation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i8",
          "title": "The Role of Leadership in Fostering Organizational Commitment",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact employee identification with the organization.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i9",
          "title": "Developmental Trajectories of Prosocial Behavior in Children",
          "description": "Tracking the maturation of empathy and altruism in children and the influence of parental and peer social groups.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-1-i10",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the validity of tools used to measure the strength and nature of social identity in diverse cultural contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydharwad-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "3333",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i1",
          "title": "The Impact of Workplace Diversity on Group Creativity",
          "description": "Investigating how different types of diversity (e.g., cognitive, demographic) influence the generation of novel ideas in organizational teams.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Group Tasks and Qualitative Analysis"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i2",
          "title": "Neuroplasticity and Creative Problem Solving: Impact of Divergent Thinking Training",
          "description": "Using fMRI to track brain changes associated with the acquisition and use of creative thinking strategies.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Creativity Testing"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i3",
          "title": "Behavioral Interventions for Enhancing Employee Engagement",
          "description": "Testing the efficacy of a new goal-setting and feedback program in promoting intrinsic motivation and productivity in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i4",
          "title": "Advanced Methodologies for Analyzing Team Dynamics in Real-time",
          "description": "Developing new algorithms for analyzing communication patterns and behavioral data to identify periods of high and low team synergy.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i5",
          "title": "Cross-cultural Differences in Leadership Styles and Employee Satisfaction",
          "description": "Comparing how leadership preferences and their impact on employee well-being vary across different cultural contexts in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey and Multi-level Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i6",
          "title": "Quantitative Analysis of Organizational Culture and Innovation",
          "description": "Using big data to identify the organizational factors that drive innovation and long-term success in Indian startups.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i7",
          "title": "Theoretical Models of Motivation and Performance in Organizations",
          "description": "Developing a computational framework to explain how individual goals and organizational incentives interact to drive employee performance.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i8",
          "title": "The Role of Emotional Intelligence in Effective Leadership",
          "description": "Investigating how a leader's ability to recognize and manage emotions impacts team cohesion and organizational outcomes.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-source Feedback and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i9",
          "title": "Developmental Trajectories of Leadership Skills in Young Adults",
          "description": "Tracking the maturation of leadership potential and the influence of early social and educational experiences.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Leadership Assessments"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-2-i10",
          "title": "Psychometric Evaluation of Organizational Assessment Tools",
          "description": "Assessing the reliability and validity of a new tool for measuring organizational climate and employee well-being.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydharwad-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "2426",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i1",
          "title": "The Impact of Childhood Trauma on Adult Decision-Making",
          "description": "Investigating how early life adversity influences risk preferences and reward processing in adulthood.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Longitudinal Analysis"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i2",
          "title": "Neuroplasticity and Recovery from Post-Traumatic Stress Disorder (PTSD)",
          "description": "Using fMRI to track brain changes associated with successful treatment of PTSD through behavioral therapy.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Clinical Assessment"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i3",
          "title": "Behavioral Interventions for Improving Emotional Regulation in Children",
          "description": "Testing the efficacy of a new school-based program in promoting healthy emotional development and reducing behavioral problems.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Observation"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i4",
          "title": "Advanced Methodologies for Tracking Real-time Emotional States",
          "description": "Developing new algorithms for analyzing physiological data (e.g., heart rate, skin conductance) to identify emotional fluctuations in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Physiological Monitoring and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i5",
          "title": "Cross-cultural Differences in Coping with Trauma",
          "description": "Comparing how individuals from different cultural backgrounds in India utilize social and cognitive strategies to manage traumatic experiences.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i6",
          "title": "Quantitative Analysis of Mental Health Trends in India",
          "description": "Using big data to identify the factors that contribute to the rising prevalence of mental health disorders in urban vs. rural areas.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Epidemiological Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i7",
          "title": "Theoretical Models of Resilience and Well-being",
          "description": "Developing a computational framework to explain the psychological processes that contribute to resilience in the face of adversity.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i8",
          "title": "The Role of Social Support in Mitigating Workplace Stress",
          "description": "Investigating how social relationships within the workplace influence employee well-being and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-source Survey and Path Analysis"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i9",
          "title": "Developmental Trajectories of Attachment in Early Childhood",
          "description": "Tracking the development of attachment patterns and their impact on social and emotional outcomes in later life.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-3-i10",
          "title": "Psychometric Evaluation of Clinical Assessment Tools for Trauma",
          "description": "Assessing the reliability and validity of a new tool for measuring the severity of trauma-related symptoms.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydharwad-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "4612",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Control in Indian Children",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Adulthood",
          "description": "Using fMRI to track brain changes associated with the acquisition of a new language in adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i3",
          "title": "Behavioral Interventions for Improving Literacy in Rural Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties in rural settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i4",
          "title": "Advanced Methodologies for Analyzing Eye-tracking Data in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive processes involved in reading complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i5",
          "title": "Cross-cultural Differences in Language Processing",
          "description": "Comparing how individuals from different linguistic backgrounds in India process and understand complex sentences.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in the Mental Lexicon",
          "description": "Using computational models to map the organization of word meanings in the human brain.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i7",
          "title": "Theoretical Models of Language Acquisition and Cognitive Development",
          "description": "Developing a computational framework to explain the relationship between language learning and the maturation of executive functions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i8",
          "title": "The Role of Language in Organizational Communication and Collaboration",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i9",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking the development of figurative language understanding and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologydharwad-new-4-i10",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the reliability and validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Palakkad": [
    {
      "id": "iitpkd-1",
      "name": "Prof. Reenu Punnoose",
      "specialization": "Linguistics, Cognitive Science",
      "focus": "Phonetics, phonology, and language processing.",
      "scholarLink": "https://iitpkd.ac.in/people/reenu",
      "citations": "300",
      "topPapers": [
        "Articulatory phonetics of Malayalam (2023)",
        "Speech perception and production (2022)",
        "Phonological processing in bilinguals (2021)",
        "Acoustic analysis of speech sounds (2020)",
        "Language acquisition and development (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitpkd-1-i1",
          "title": "Articulatory Phonetics of Malayalam: Ultrasound Imaging Study",
          "description": "Using ultrasound imaging to study tongue movements during speech production in Malayalam speakers to understand unique phonetic features.",
          "sourcePublication": "Articulatory phonetics of Malayalam (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Ultrasound Imaging and Acoustic Analysis"
        },
        {
          "id": "iitpkd-1-i2",
          "title": "Speech Perception in Bilinguals: Impact of Early Exposure",
          "description": "Investigating how early exposure to multiple Indian languages shapes auditory processing and phonetic categorization.",
          "sourcePublication": "Speech perception and production (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and EEG"
        },
        {
          "id": "iitpkd-1-i3",
          "title": "Phonological Awareness and Reading Acquisition in Multilingual Contexts",
          "description": "Examining the role of sound processing skills in literacy acquisition among children learning to read in multiple scripts.",
          "sourcePublication": "Phonological processing in bilinguals (2021)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Reading Assessments"
        },
        {
          "id": "iitpkd-1-i4",
          "title": "Acoustic Analysis of Regional Dialects in Kerala",
          "description": "Quantifying phonetic differences between regional varieties of Malayalam using advanced signal processing techniques.",
          "sourcePublication": "Acoustic analysis of speech sounds (2020)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Acoustic Analysis and Dialectometry"
        },
        {
          "id": "iitpkd-1-i5",
          "title": "Cognitive Mechanisms of Language Attrition in Migrant Populations",
          "description": "Investigating the psychological factors underlying the loss of first language proficiency in individuals living in different linguistic environments.",
          "sourcePublication": "Language acquisition and development (2019)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Testing and Qualitative Interviews"
        },
        {
          "id": "iitpkd-1-i6",
          "title": "Speech Prosody and Emotion Recognition in Indian Languages",
          "description": "How intonation and rhythm convey affective information across different linguistic and cultural groups in India.",
          "sourcePublication": "Speech perception and production (2022)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Perception Studies and Acoustic Analysis"
        },
        {
          "id": "iitpkd-1-i7",
          "title": "Second Language Acquisition: Learning Novel Phonetic Contrasts",
          "description": "Identifying factors that influence the ability of adult learners to perceive and produce sounds not present in their native language.",
          "sourcePublication": "Language acquisition and development (2019)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Training Studies and Behavioral Testing"
        },
        {
          "id": "iitpkd-1-i8",
          "title": "Clinical Linguistics: Analyzing Speech Errors in Aphasia",
          "description": "Using phonetic and phonological analysis to characterize speech impairments in individuals with neurological disorders.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Neuropsychological Testing and Acoustic Analysis"
        },
        {
          "id": "iitpkd-1-i9",
          "title": "Sociophonetics: Social Identity and Speech Production",
          "description": "How factors like gender, class, and regional identity influence the acoustic characteristics of speech in diverse Indian communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Sociolinguistic Interviews and Acoustic Analysis"
        },
        {
          "id": "iitpkd-1-i10",
          "title": "Computational Phonology: Modeling Sound Patterns in Indian Languages",
          "description": "Developing formal and computational models to explain the systematic organization of sounds in various Indian languages.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Linguistic Analysis"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypalakkad-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "789",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i1",
          "title": "The Impact of Digital Distractions on Working Memory",
          "description": "Investigating how frequent notifications and multitasking with digital devices affect the capacity and efficiency of working memory in young adults.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i2",
          "title": "Neuroplasticity and Memory Enhancement through Mnemonic Training",
          "description": "Using fMRI to track brain changes associated with the acquisition and use of advanced mnemonic techniques for long-term information retention.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Memory Testing"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i3",
          "title": "Behavioral Interventions for Improving Attention in ADHD",
          "description": "Testing the efficacy of a new mindfulness-based intervention for enhancing sustained attention in children with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Assessments"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i4",
          "title": "Advanced Methodologies for Tracking Real-time Attentional Fluctuations",
          "description": "Developing new algorithms for analyzing EEG data to identify periods of mind-wandering and attentional lapses in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i5",
          "title": "Cross-cultural Differences in Autobiographical Memory",
          "description": "Comparing how individuals from different cultural backgrounds in India recall and narrate significant life events.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i6",
          "title": "Quantitative Analysis of Memory Decay in Aging Populations",
          "description": "Using longitudinal data to model the rate of memory decline in healthy older adults and identify predictors of cognitive resilience.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i7",
          "title": "Theoretical Models of Attentional Selection in Complex Scenes",
          "description": "Developing a computational framework to explain how the brain prioritizes information in visually dense environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i8",
          "title": "The Role of Attention in Organizational Decision Making",
          "description": "Investigating how attentional biases and cognitive load impact the quality of decisions made by managers in high-pressure environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Field Experiments and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i9",
          "title": "Developmental Trajectories of Executive Functions in Early Childhood",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children from diverse socioeconomic backgrounds.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Cognitive Assessments"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Assessing the reliability and validity of a new computerized battery for measuring different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypalakkad-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "2487",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i1",
          "title": "The Impact of Social Media Echo Chambers on Political Polarization",
          "description": "Investigating how exposure to ideologically homogeneous online groups influences the extremity of political beliefs and intergroup hostility.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Social Network Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i2",
          "title": "Neuroplasticity and Social Conformity: Brain Changes in Response to Group Pressure",
          "description": "Using fMRI to examine how the brain's reward and conflict detection systems adapt when individuals repeatedly conform to group norms.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Asch Conformity Paradigm"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i3",
          "title": "Behavioral Interventions for Reducing Workplace Bullying",
          "description": "Testing the efficacy of a bystander intervention program in promoting prosocial behavior and reducing incidents of harassment in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Field Observation"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i4",
          "title": "Advanced Methodologies for Modeling Group Decision-Making Processes",
          "description": "Developing computational models to predict the outcomes of group discussions based on individual preferences and social influence dynamics.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Agent-based Simulation"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i5",
          "title": "Cross-cultural Perspectives on Collectivism and Individualism",
          "description": "Comparing how social identity and group loyalty are manifested in rural vs. urban Indian communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Online Crowdfunding",
          "description": "Using big data to identify the factors that drive viral success and collective support for social causes on digital platforms.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Econometric Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i7",
          "title": "Theoretical Models of Social Identity and Intergroup Conflict",
          "description": "Developing a formal theory to explain the conditions under which strong group identification leads to violent conflict vs. peaceful cooperation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i8",
          "title": "The Role of Leadership in Fostering Organizational Commitment",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact employee identification with the organization.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i9",
          "title": "Developmental Trajectories of Prosocial Behavior in Children",
          "description": "Tracking the maturation of empathy and altruism in children and the influence of parental and peer social groups.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-1-i10",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the validity of tools used to measure the strength and nature of social identity in diverse cultural contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypalakkad-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "4599",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i1",
          "title": "Computational Modeling of Neural Oscillations in Decision Making",
          "description": "Developing a biophysically realistic model to explain how different frequency bands of brain activity interact during value-based choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience and Electrophysiology Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i2",
          "title": "Neuroplasticity and Synaptic Scaling in Learning",
          "description": "Investigating the molecular mechanisms that allow neural circuits to maintain stability while undergoing rapid changes during new skill acquisition.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "In vitro Electrophysiology and Molecular Biology"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i3",
          "title": "Brain-Computer Interfaces for Restoring Motor Function",
          "description": "Developing new decoding algorithms for translating neural signals into precise control commands for prosthetic limbs.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i4",
          "title": "Advanced Methodologies for High-resolution Functional Imaging",
          "description": "Developing new techniques for combining fMRI and EEG to achieve both high spatial and temporal resolution in brain mapping.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-modal Neuroimaging and Data Fusion"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i5",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Using fMRI to investigate how cultural background influences the brain's response to facial expressions and social gestures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i6",
          "title": "Quantitative Analysis of Large-scale Neural Networks",
          "description": "Applying graph theory to analyze the connectivity patterns of the human connectome and identify biomarkers for neurological disorders.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and Network Neuroscience"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i7",
          "title": "Theoretical Models of Neural Coding and Information Processing",
          "description": "Developing a mathematical framework to explain how populations of neurons represent and transmit complex information.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Information Theory and Mathematical Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i8",
          "title": "Neural Correlates of Stress and Resilience in the Workplace",
          "description": "Investigating how chronic occupational stress impacts the structure and function of the prefrontal cortex and amygdala.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Structural and Functional MRI"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i9",
          "title": "Developmental Trajectories of Brain Connectivity in Adolescence",
          "description": "Tracking the maturation of white matter tracts and functional networks during the transition from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Diffusion Tensor Imaging (DTI) and Resting-state fMRI"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-2-i10",
          "title": "Psychometric Evaluation of Neuropsychological Assessment Batteries",
          "description": "Assessing the reliability and validity of standardized tests for measuring cognitive impairment in patients with brain injuries.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis and Clinical Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypalakkad-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "3386",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i1",
          "title": "The Efficacy of Online Cognitive Behavioral Therapy (CBT) for Depression in Rural India",
          "description": "Investigating whether digitally delivered CBT is as effective as in-person therapy for individuals with limited access to mental health services.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Clinical Assessments"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i2",
          "title": "Neuroplasticity and Recovery from Post-Traumatic Stress Disorder (PTSD)",
          "description": "Using fMRI to track brain changes associated with successful treatment of PTSD using prolonged exposure therapy.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Clinical Testing"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i3",
          "title": "Behavioral Interventions for Reducing Stigma around Mental Illness",
          "description": "Testing the impact of contact-based interventions on reducing prejudice and discrimination towards people with mental health conditions in community settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiments and Implicit Association Tests (IAT)"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i4",
          "title": "Advanced Methodologies for Assessing Treatment Adherence in Clinical Trials",
          "description": "Developing new digital tools and sensors for objectively monitoring patient adherence to behavioral and pharmacological interventions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Digital Health Technology and Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i5",
          "title": "Cross-cultural Perspectives on Coping Mechanisms for Anxiety",
          "description": "Comparing how individuals from different cultural backgrounds in India utilize traditional vs. modern psychological strategies to manage stress.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i6",
          "title": "Quantitative Analysis of Risk Factors for Adolescent Substance Abuse",
          "description": "Using large-scale longitudinal data to identify early predictors of drug and alcohol use in Indian youth.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i7",
          "title": "Theoretical Models of Resilience in the Face of Chronic Adversity",
          "description": "Developing a multi-level framework to explain the psychological and social factors that promote positive adaptation in high-risk environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i8",
          "title": "The Impact of Workplace Mental Health Programs on Employee Well-being",
          "description": "Evaluating the effectiveness of corporate wellness initiatives in reducing burnout and improving job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i9",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "Tracking the development of self-regulation skills in children and the role of early childhood experiences and parenting styles.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-3-i10",
          "title": "Psychometric Evaluation of Culturally Adapted Mental Health Screening Tools",
          "description": "Assessing the reliability and validity of translated and culturally modified versions of standardized diagnostic instruments.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologypalakkad-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "4469",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Control in Indian Children",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Adulthood",
          "description": "Using fMRI to track brain changes associated with the acquisition of a new language in adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i3",
          "title": "Behavioral Interventions for Improving Literacy in Rural Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties in rural settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i4",
          "title": "Advanced Methodologies for Analyzing Eye-tracking Data in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive processes involved in reading complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i5",
          "title": "Cross-cultural Differences in Language Processing",
          "description": "Comparing how individuals from different linguistic backgrounds in India process and understand complex sentences.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in the Mental Lexicon",
          "description": "Using computational models to map the organization of word meanings in the human brain.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i7",
          "title": "Theoretical Models of Language Acquisition and Cognitive Development",
          "description": "Developing a computational framework to explain the relationship between language learning and the maturation of executive functions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i8",
          "title": "The Role of Language in Organizational Communication and Collaboration",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i9",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking the development of figurative language understanding and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologypalakkad-new-4-i10",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the reliability and validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Tirupati": [
    {
      "id": "iittp-1",
      "name": "Prof. V. V. N. Somayajulu",
      "specialization": "Organizational Behavior, HR",
      "focus": "Leadership, organizational culture, and employee engagement.",
      "scholarLink": "#",
      "citations": "450",
      "topPapers": [
        "Leadership and organizational culture (2023)",
        "Employee engagement strategies (2022)",
        "Workplace diversity and inclusion (2021)",
        "Performance management systems (2020)",
        "Talent acquisition and retention (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iittp-1-i1",
          "title": "Transformational Leadership and Team Innovation in Indian Startups",
          "description": "Investigating how visionary leadership styles influence the creative output and problem-solving capabilities of small, high-growth teams.",
          "sourcePublication": "Leadership and organizational culture (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Case Study Analysis"
        },
        {
          "id": "iittp-1-i2",
          "title": "Organizational Culture and Business Performance: A Longitudinal Study",
          "description": "Tracking how shared values and norms within an organization evolve over time and their long-term impact on financial and operational metrics.",
          "sourcePublication": "Leadership and organizational culture (2023)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey and Financial Data Analysis"
        },
        {
          "id": "iittp-1-i3",
          "title": "Employee Engagement in Remote Work: The Role of Digital Communication",
          "description": "Strategies for maintaining connection and motivation in virtual teams, focusing on the impact of different communication platforms and styles.",
          "sourcePublication": "Employee engagement strategies (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed-methods (Surveys and Focus Groups)"
        },
        {
          "id": "iittp-1-i4",
          "title": "Evaluating the Effectiveness of Unconscious Bias Training in Indian Corporates",
          "description": "Assessing whether diversity and inclusion initiatives lead to measurable changes in hiring practices and workplace interactions.",
          "sourcePublication": "Workplace diversity and inclusion (2021)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Pre-post Intervention Study and Implicit Association Tests (IAT)"
        },
        {
          "id": "iittp-1-i5",
          "title": "The Psychological Impact of Continuous Feedback vs. Annual Reviews",
          "description": "Comparing how different performance management systems affect employee anxiety, motivation, and perceived fairness.",
          "sourcePublication": "Performance management systems (2020)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Design and Behavioral Surveys"
        },
        {
          "id": "iittp-1-i6",
          "title": "Identifying Key Drivers of Turnover Intention in the Indian IT Sector",
          "description": "Using predictive modeling to identify the factors most likely to lead to employee attrition in a highly competitive industry.",
          "sourcePublication": "Talent acquisition and retention (2019)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning and Survival Analysis"
        },
        {
          "id": "iittp-1-i7",
          "title": "Assessing the ROI of Corporate Health and Wellness Initiatives",
          "description": "Quantifying the impact of workplace well-being programs on employee productivity, absenteeism, and healthcare costs.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Cost-benefit Analysis and Employee Health Data"
        },
        {
          "id": "iittp-1-i8",
          "title": "Overcoming Employee Resistance during Organizational Restructuring",
          "description": "Investigating the psychological factors that lead to resistance to change and developing strategies for effective change management.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        },
        {
          "id": "iittp-1-i9",
          "title": "The Role of Ethical Leadership in Building Trust and Organizational Citizenship",
          "description": "How the moral integrity of leaders influences employee trust and their willingness to go beyond their formal job descriptions.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Structural Equation Modeling (SEM) and Employee Surveys"
        },
        {
          "id": "iittp-1-i10",
          "title": "HR Analytics: Using Data to Predict Employee Performance and Attrition",
          "description": "Developing and validating predictive models for key HR outcomes using historical employee data.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Predictive Analytics and Data Mining"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologytirupati-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "2102",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i1",
          "title": "The Impact of Digital Distractions on Working Memory",
          "description": "Investigating how frequent notifications and multitasking with digital devices affect the capacity and efficiency of working memory in young adults.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i2",
          "title": "Neuroplasticity and Memory Enhancement through Mnemonic Training",
          "description": "Using fMRI to track brain changes associated with the acquisition and use of advanced mnemonic techniques for long-term information retention.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Memory Testing"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i3",
          "title": "Behavioral Interventions for Improving Attention in ADHD",
          "description": "Testing the efficacy of a new mindfulness-based intervention for enhancing sustained attention in children with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Assessments"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i4",
          "title": "Advanced Methodologies for Tracking Real-time Attentional Fluctuations",
          "description": "Developing new algorithms for analyzing EEG data to identify periods of mind-wandering and attentional lapses in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i5",
          "title": "Cross-cultural Differences in Autobiographical Memory",
          "description": "Comparing how individuals from different cultural backgrounds in India recall and narrate significant life events.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i6",
          "title": "Quantitative Analysis of Memory Decay in Aging Populations",
          "description": "Using longitudinal data to model the rate of memory decline in healthy older adults and identify predictors of cognitive resilience.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i7",
          "title": "Theoretical Models of Attentional Selection in Complex Scenes",
          "description": "Developing a computational framework to explain how the brain prioritizes information in visually dense environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i8",
          "title": "The Role of Attention in Organizational Decision Making",
          "description": "Investigating how attentional biases and cognitive load impact the quality of decisions made by managers in high-pressure environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Field Experiments and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i9",
          "title": "Developmental Trajectories of Executive Functions in Early Childhood",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children from diverse socioeconomic backgrounds.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Cognitive Assessments"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Assessing the reliability and validity of a new computerized battery for measuring different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologytirupati-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "3649",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i1",
          "title": "The Impact of Social Media Echo Chambers on Political Polarization",
          "description": "Investigating how exposure to ideologically homogeneous online groups influences the extremity of political beliefs and intergroup hostility.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Social Network Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i2",
          "title": "Neuroplasticity and Social Conformity: Brain Changes in Response to Group Pressure",
          "description": "Using fMRI to examine how the brain's reward and conflict detection systems adapt when individuals repeatedly conform to group norms.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Asch Conformity Paradigm"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i3",
          "title": "Behavioral Interventions for Reducing Workplace Bullying",
          "description": "Testing the efficacy of a bystander intervention program in promoting prosocial behavior and reducing incidents of harassment in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Field Observation"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i4",
          "title": "Advanced Methodologies for Modeling Group Decision-Making Processes",
          "description": "Developing computational models to predict the outcomes of group discussions based on individual preferences and social influence dynamics.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Agent-based Simulation"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i5",
          "title": "Cross-cultural Perspectives on Collectivism and Individualism",
          "description": "Comparing how social identity and group loyalty are manifested in rural vs. urban Indian communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Online Crowdfunding",
          "description": "Using big data to identify the factors that drive viral success and collective support for social causes on digital platforms.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Econometric Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i7",
          "title": "Theoretical Models of Social Identity and Intergroup Conflict",
          "description": "Developing a formal theory to explain the conditions under which strong group identification leads to violent conflict vs. peaceful cooperation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i8",
          "title": "The Role of Leadership in Fostering Organizational Commitment",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact employee identification with the organization.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i9",
          "title": "Developmental Trajectories of Prosocial Behavior in Children",
          "description": "Tracking the maturation of empathy and altruism in children and the influence of parental and peer social groups.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-1-i10",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the validity of tools used to measure the strength and nature of social identity in diverse cultural contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologytirupati-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "1799",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i1",
          "title": "Computational Modeling of Neural Oscillations in Decision Making",
          "description": "Developing a biophysically realistic model to explain how different frequency bands of brain activity interact during value-based choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience and Electrophysiology Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i2",
          "title": "Neuroplasticity and Synaptic Scaling in Learning",
          "description": "Investigating the molecular mechanisms that allow neural circuits to maintain stability while undergoing rapid changes during new skill acquisition.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "In vitro Electrophysiology and Molecular Biology"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i3",
          "title": "Brain-Computer Interfaces for Restoring Motor Function",
          "description": "Developing new decoding algorithms for translating neural signals into precise control commands for prosthetic limbs.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i4",
          "title": "Advanced Methodologies for High-resolution Functional Imaging",
          "description": "Developing new techniques for combining fMRI and EEG to achieve both high spatial and temporal resolution in brain mapping.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-modal Neuroimaging and Data Fusion"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i5",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Using fMRI to investigate how cultural background influences the brain's response to facial expressions and social gestures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i6",
          "title": "Quantitative Analysis of Large-scale Neural Networks",
          "description": "Applying graph theory to analyze the connectivity patterns of the human connectome and identify biomarkers for neurological disorders.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and Network Neuroscience"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i7",
          "title": "Theoretical Models of Neural Coding and Information Processing",
          "description": "Developing a mathematical framework to explain how populations of neurons represent and transmit complex information.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Information Theory and Mathematical Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i8",
          "title": "Neural Correlates of Stress and Resilience in the Workplace",
          "description": "Investigating how chronic occupational stress impacts the structure and function of the prefrontal cortex and amygdala.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Structural and Functional MRI"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i9",
          "title": "Developmental Trajectories of Brain Connectivity in Adolescence",
          "description": "Tracking the maturation of white matter tracts and functional networks during the transition from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Diffusion Tensor Imaging (DTI) and Resting-state fMRI"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-2-i10",
          "title": "Psychometric Evaluation of Neuropsychological Assessment Batteries",
          "description": "Assessing the reliability and validity of standardized tests for measuring cognitive impairment in patients with brain injuries.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis and Clinical Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologytirupati-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "1975",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i1",
          "title": "The Efficacy of Online Cognitive Behavioral Therapy (CBT) for Depression in Rural India",
          "description": "Investigating whether digitally delivered CBT is as effective as in-person therapy for individuals with limited access to mental health services.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Clinical Assessments"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i2",
          "title": "Neuroplasticity and Recovery from Post-Traumatic Stress Disorder (PTSD)",
          "description": "Using fMRI to track brain changes associated with successful treatment of PTSD using prolonged exposure therapy.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Clinical Testing"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i3",
          "title": "Behavioral Interventions for Reducing Stigma around Mental Illness",
          "description": "Testing the impact of contact-based interventions on reducing prejudice and discrimination towards people with mental health conditions in community settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiments and Implicit Association Tests (IAT)"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i4",
          "title": "Advanced Methodologies for Assessing Treatment Adherence in Clinical Trials",
          "description": "Developing new digital tools and sensors for objectively monitoring patient adherence to behavioral and pharmacological interventions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Digital Health Technology and Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i5",
          "title": "Cross-cultural Perspectives on Coping Mechanisms for Anxiety",
          "description": "Comparing how individuals from different cultural backgrounds in India utilize traditional vs. modern psychological strategies to manage stress.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i6",
          "title": "Quantitative Analysis of Risk Factors for Adolescent Substance Abuse",
          "description": "Using large-scale longitudinal data to identify early predictors of drug and alcohol use in Indian youth.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i7",
          "title": "Theoretical Models of Resilience in the Face of Chronic Adversity",
          "description": "Developing a multi-level framework to explain the psychological and social factors that promote positive adaptation in high-risk environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i8",
          "title": "The Impact of Workplace Mental Health Programs on Employee Well-being",
          "description": "Evaluating the effectiveness of corporate wellness initiatives in reducing burnout and improving job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i9",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "Tracking the development of self-regulation skills in children and the role of early childhood experiences and parenting styles.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-3-i10",
          "title": "Psychometric Evaluation of Culturally Adapted Mental Health Screening Tools",
          "description": "Assessing the reliability and validity of translated and culturally modified versions of standardized diagnostic instruments.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologytirupati-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "2758",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Control in Indian Children",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Adulthood",
          "description": "Using fMRI to track brain changes associated with the acquisition of a new language in adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i3",
          "title": "Behavioral Interventions for Improving Literacy in Rural Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties in rural settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i4",
          "title": "Advanced Methodologies for Analyzing Eye-tracking Data in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive processes involved in reading complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i5",
          "title": "Cross-cultural Differences in Language Processing",
          "description": "Comparing how individuals from different linguistic backgrounds in India process and understand complex sentences.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in the Mental Lexicon",
          "description": "Using computational models to map the organization of word meanings in the human brain.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i7",
          "title": "Theoretical Models of Language Acquisition and Cognitive Development",
          "description": "Developing a computational framework to explain the relationship between language learning and the maturation of executive functions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i8",
          "title": "The Role of Language in Organizational Communication and Collaboration",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i9",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking the development of figurative language understanding and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologytirupati-new-4-i10",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the reliability and validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Bhilai": [
    {
      "id": "iitbhilai-1",
      "name": "Prof. Rajeev Kumar",
      "specialization": "Cognitive Science, AI",
      "focus": "Machine learning, cognitive modeling, and human-computer interaction.",
      "scholarLink": "#",
      "citations": "500",
      "topPapers": [
        "Machine learning for cognitive modeling (2023)",
        "Human-computer interaction and usability (2022)",
        "Artificial intelligence in education (2021)",
        "Data analytics for behavioral science (2020)",
        "Computational approaches to cognition (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitbhilai-1-i1",
          "title": "Cognitive Modeling of Learning",
          "description": "Using machine learning to predict student performance and tailor instruction.",
          "sourcePublication": "Machine learning for cognitive modeling (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning and Behavioral Data Analysis"
        },
        {
          "id": "iitbhilai-1-i2",
          "title": "Intelligent Tutoring Systems",
          "description": "Developing AI-driven platforms that adapt to individual learning styles.",
          "sourcePublication": "Artificial intelligence in education (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Software Development and User Testing"
        },
        {
          "id": "iitbhilai-1-i3",
          "title": "Human-AI Collaboration",
          "description": "Designing interfaces that facilitate seamless teamwork between humans and algorithms.",
          "sourcePublication": "Human-computer interaction and usability (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "HCI Design and Experimental Evaluation"
        },
        {
          "id": "iitbhilai-1-i4",
          "title": "Affective Computing in Education",
          "description": "Using facial recognition to monitor student engagement and frustration.",
          "sourcePublication": "Artificial intelligence in education (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Computer Vision and Affective Computing"
        },
        {
          "id": "iitbhilai-1-i5",
          "title": "Natural Language Processing for Assessment",
          "description": "Automated grading of essays and short-answer responses.",
          "sourcePublication": "Data analytics for behavioral science (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "NLP and Machine Learning"
        },
        {
          "id": "iitbhilai-1-i6",
          "title": "Data Analytics in Behavioral Science",
          "description": "Extracting insights from large-scale datasets of human behavior.",
          "sourcePublication": "Data analytics for behavioral science (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Statistical Modeling"
        },
        {
          "id": "iitbhilai-1-i7",
          "title": "Explainable AI (XAI)",
          "description": "Making complex machine learning models interpretable to non-experts.",
          "sourcePublication": "Computational approaches to cognition (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "XAI Techniques and User Studies"
        },
        {
          "id": "iitbhilai-1-i8",
          "title": "Virtual Reality for Training",
          "description": "Evaluating the efficacy of immersive simulations for skill acquisition.",
          "sourcePublication": "Human-computer interaction and usability (2022)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "VR Simulation and Behavioral Assessment"
        },
        {
          "id": "iitbhilai-1-i9",
          "title": "Brain-Computer Interfaces",
          "description": "Developing non-invasive BCI applications for communication and control.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Signal Processing"
        },
        {
          "id": "iitbhilai-1-i10",
          "title": "Ethical AI",
          "description": "Addressing bias and fairness in algorithmic decision-making.",
          "sourcePublication": "Computational approaches to cognition (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Algorithmic Fairness Analysis and Policy Research"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhilai-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "2219",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i1",
          "title": "The Impact of Digital Distractions on Working Memory",
          "description": "Investigating how frequent notifications and multitasking with digital devices affect the capacity and efficiency of working memory in young adults.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i2",
          "title": "Neuroplasticity and Memory Enhancement through Mnemonic Training",
          "description": "Using fMRI to track brain changes associated with the acquisition and use of advanced mnemonic techniques for long-term information retention.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Memory Testing"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i3",
          "title": "Behavioral Interventions for Improving Attention in ADHD",
          "description": "Testing the efficacy of a new mindfulness-based intervention for enhancing sustained attention in children with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Assessments"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i4",
          "title": "Advanced Methodologies for Tracking Real-time Attentional Fluctuations",
          "description": "Developing new algorithms for analyzing EEG data to identify periods of mind-wandering and attentional lapses in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i5",
          "title": "Cross-cultural Differences in Autobiographical Memory",
          "description": "Comparing how individuals from different cultural backgrounds in India recall and narrate significant life events.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i6",
          "title": "Quantitative Analysis of Memory Decay in Aging Populations",
          "description": "Using longitudinal data to model the rate of memory decline in healthy older adults and identify predictors of cognitive resilience.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i7",
          "title": "Theoretical Models of Attentional Selection in Complex Scenes",
          "description": "Developing a computational framework to explain how the brain prioritizes information in visually dense environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i8",
          "title": "The Role of Attention in Organizational Decision Making",
          "description": "Investigating how attentional biases and cognitive load impact the quality of decisions made by managers in high-pressure environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Field Experiments and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i9",
          "title": "Developmental Trajectories of Executive Functions in Early Childhood",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children from diverse socioeconomic backgrounds.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Cognitive Assessments"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Assessing the reliability and validity of a new computerized battery for measuring different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhilai-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "1432",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i1",
          "title": "The Impact of Social Media Echo Chambers on Political Polarization",
          "description": "Investigating how exposure to ideologically homogeneous online groups influences the extremity of political beliefs and intergroup hostility.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Social Network Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i2",
          "title": "Neuroplasticity and Social Conformity: Brain Changes in Response to Group Pressure",
          "description": "Using fMRI to examine how the brain's reward and conflict detection systems adapt when individuals repeatedly conform to group norms.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Asch Conformity Paradigm"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i3",
          "title": "Behavioral Interventions for Reducing Workplace Bullying",
          "description": "Testing the efficacy of a bystander intervention program in promoting prosocial behavior and reducing incidents of harassment in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Field Observation"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i4",
          "title": "Advanced Methodologies for Modeling Group Decision-Making Processes",
          "description": "Developing computational models to predict the outcomes of group discussions based on individual preferences and social influence dynamics.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Agent-based Simulation"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i5",
          "title": "Cross-cultural Perspectives on Collectivism and Individualism",
          "description": "Comparing how social identity and group loyalty are manifested in rural vs. urban Indian communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Online Crowdfunding",
          "description": "Using big data to identify the factors that drive viral success and collective support for social causes on digital platforms.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Econometric Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i7",
          "title": "Theoretical Models of Social Identity and Intergroup Conflict",
          "description": "Developing a formal theory to explain the conditions under which strong group identification leads to violent conflict vs. peaceful cooperation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i8",
          "title": "The Role of Leadership in Fostering Organizational Commitment",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact employee identification with the organization.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i9",
          "title": "Developmental Trajectories of Prosocial Behavior in Children",
          "description": "Tracking the maturation of empathy and altruism in children and the influence of parental and peer social groups.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-1-i10",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the validity of tools used to measure the strength and nature of social identity in diverse cultural contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhilai-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "3016",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i1",
          "title": "Computational Modeling of Neural Oscillations in Decision Making",
          "description": "Developing a biophysically realistic model to explain how different frequency bands of brain activity interact during value-based choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience and Electrophysiology Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i2",
          "title": "Neuroplasticity and Synaptic Scaling in Learning",
          "description": "Investigating the molecular mechanisms that allow neural circuits to maintain stability while undergoing rapid changes during new skill acquisition.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "In vitro Electrophysiology and Molecular Biology"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i3",
          "title": "Brain-Computer Interfaces for Restoring Motor Function",
          "description": "Developing new decoding algorithms for translating neural signals into precise control commands for prosthetic limbs.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i4",
          "title": "Advanced Methodologies for High-resolution Functional Imaging",
          "description": "Developing new techniques for combining fMRI and EEG to achieve both high spatial and temporal resolution in brain mapping.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-modal Neuroimaging and Data Fusion"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i5",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Using fMRI to investigate how cultural background influences the brain's response to facial expressions and social gestures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i6",
          "title": "Quantitative Analysis of Large-scale Neural Networks",
          "description": "Applying graph theory to analyze the connectivity patterns of the human connectome and identify biomarkers for neurological disorders.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and Network Neuroscience"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i7",
          "title": "Theoretical Models of Neural Coding and Information Processing",
          "description": "Developing a mathematical framework to explain how populations of neurons represent and transmit complex information.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Information Theory and Mathematical Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i8",
          "title": "Neural Correlates of Stress and Resilience in the Workplace",
          "description": "Investigating how chronic occupational stress impacts the structure and function of the prefrontal cortex and amygdala.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Structural and Functional MRI"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i9",
          "title": "Developmental Trajectories of Brain Connectivity in Adolescence",
          "description": "Tracking the maturation of white matter tracts and functional networks during the transition from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Diffusion Tensor Imaging (DTI) and Resting-state fMRI"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-2-i10",
          "title": "Psychometric Evaluation of Neuropsychological Assessment Batteries",
          "description": "Assessing the reliability and validity of standardized tests for measuring cognitive impairment in patients with brain injuries.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis and Clinical Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhilai-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "4745",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i1",
          "title": "The Efficacy of Online Cognitive Behavioral Therapy (CBT) for Depression in Rural India",
          "description": "Investigating whether digitally delivered CBT is as effective as in-person therapy for individuals with limited access to mental health services.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Clinical Assessments"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i2",
          "title": "Neuroplasticity and Recovery from Post-Traumatic Stress Disorder (PTSD)",
          "description": "Using fMRI to track brain changes associated with successful treatment of PTSD using prolonged exposure therapy.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Clinical Testing"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i3",
          "title": "Behavioral Interventions for Reducing Stigma around Mental Illness",
          "description": "Testing the impact of contact-based interventions on reducing prejudice and discrimination towards people with mental health conditions in community settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiments and Implicit Association Tests (IAT)"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i4",
          "title": "Advanced Methodologies for Assessing Treatment Adherence in Clinical Trials",
          "description": "Developing new digital tools and sensors for objectively monitoring patient adherence to behavioral and pharmacological interventions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Digital Health Technology and Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i5",
          "title": "Cross-cultural Perspectives on Coping Mechanisms for Anxiety",
          "description": "Comparing how individuals from different cultural backgrounds in India utilize traditional vs. modern psychological strategies to manage stress.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i6",
          "title": "Quantitative Analysis of Risk Factors for Adolescent Substance Abuse",
          "description": "Using large-scale longitudinal data to identify early predictors of drug and alcohol use in Indian youth.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i7",
          "title": "Theoretical Models of Resilience in the Face of Chronic Adversity",
          "description": "Developing a multi-level framework to explain the psychological and social factors that promote positive adaptation in high-risk environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i8",
          "title": "The Impact of Workplace Mental Health Programs on Employee Well-being",
          "description": "Evaluating the effectiveness of corporate wellness initiatives in reducing burnout and improving job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i9",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "Tracking the development of self-regulation skills in children and the role of early childhood experiences and parenting styles.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-3-i10",
          "title": "Psychometric Evaluation of Culturally Adapted Mental Health Screening Tools",
          "description": "Assessing the reliability and validity of translated and culturally modified versions of standardized diagnostic instruments.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologybhilai-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "4060",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Control in Indian Children",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Adulthood",
          "description": "Using fMRI to track brain changes associated with the acquisition of a new language in adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i3",
          "title": "Behavioral Interventions for Improving Literacy in Rural Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties in rural settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i4",
          "title": "Advanced Methodologies for Analyzing Eye-tracking Data in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive processes involved in reading complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i5",
          "title": "Cross-cultural Differences in Language Processing",
          "description": "Comparing how individuals from different linguistic backgrounds in India process and understand complex sentences.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in the Mental Lexicon",
          "description": "Using computational models to map the organization of word meanings in the human brain.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i7",
          "title": "Theoretical Models of Language Acquisition and Cognitive Development",
          "description": "Developing a computational framework to explain the relationship between language learning and the maturation of executive functions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i8",
          "title": "The Role of Language in Organizational Communication and Collaboration",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i9",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking the development of figurative language understanding and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologybhilai-new-4-i10",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the reliability and validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Jammu": [
    {
      "id": "iitjammu-1",
      "name": "Prof. Quleen Kaur Bijral",
      "specialization": "Humanities, Psychology",
      "focus": "Literature, psychology, and cultural studies.",
      "scholarLink": "https://iitjammu.ac.in/faculty/~quleenkaurbijral",
      "citations": "200",
      "topPapers": [
        "Psychological themes in contemporary literature (2023)",
        "Cultural identity and mental health (2022)",
        "Narrative psychology and storytelling (2021)",
        "Trauma and memory in fiction (2020)",
        "Interdisciplinary approaches to humanities (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitjammu-1-i1",
          "title": "Narrative Psychology",
          "description": "How individuals construct their identity through personal storytelling.",
          "sourcePublication": "Narrative psychology and storytelling (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "iitjammu-1-i2",
          "title": "Trauma in Literature",
          "description": "Analyzing the representation of psychological trauma in post-colonial fiction.",
          "sourcePublication": "Trauma and memory in fiction (2020)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Literary Analysis and Qualitative Case Studies"
        },
        {
          "id": "iitjammu-1-i3",
          "title": "Cultural Identity and Well-being",
          "description": "The impact of cultural heritage on mental health in minority populations.",
          "sourcePublication": "Cultural identity and mental health (2022)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-cultural Surveys and Ethnographic Work"
        },
        {
          "id": "iitjammu-1-i4",
          "title": "Bibliotherapy",
          "description": "Evaluating the therapeutic use of literature in clinical settings.",
          "sourcePublication": "Psychological themes in contemporary literature (2023)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Intervention Study and Clinical Assessment"
        },
        {
          "id": "iitjammu-1-i5",
          "title": "Psychology of Creativity",
          "description": "Understanding the cognitive and emotional processes underlying artistic expression.",
          "sourcePublication": "Interdisciplinary approaches to humanities (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Tasks and Qualitative Interviews"
        },
        {
          "id": "iitjammu-1-i6",
          "title": "Empathy and Fiction",
          "description": "Does reading literary fiction increase social cognition and empathy?",
          "sourcePublication": "Psychological themes in contemporary literature (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Behavioral Testing"
        },
        {
          "id": "iitjammu-1-i7",
          "title": "Memory and Autobiography",
          "description": "The intersection of cognitive psychology and literary memoir.",
          "sourcePublication": "Trauma and memory in fiction (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Cognitive Testing and Textual Analysis"
        },
        {
          "id": "iitjammu-1-i8",
          "title": "Gender and Representation",
          "description": "Psychological implications of gender stereotypes in media and literature.",
          "sourcePublication": "Cultural identity and mental health (2022)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Content Analysis and Implicit Association Tests"
        },
        {
          "id": "iitjammu-1-i9",
          "title": "Eco-psychology",
          "description": "The relationship between human well-being and the natural environment.",
          "sourcePublication": "Interdisciplinary approaches to humanities (2019)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Surveys and Psychological Scaling"
        },
        {
          "id": "iitjammu-1-i10",
          "title": "Interdisciplinary Humanities",
          "description": "Integrating psychological theories into literary and cultural analysis.",
          "sourcePublication": "Interdisciplinary approaches to humanities (2019)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Theoretical Synthesis and Qualitative Research"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjammu-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "4806",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i1",
          "title": "The Impact of Digital Distractions on Working Memory",
          "description": "Investigating how frequent notifications and multitasking with digital devices affect the capacity and efficiency of working memory in young adults.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Self-report Measures"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i2",
          "title": "Neuroplasticity and Memory Enhancement through Mnemonic Training",
          "description": "Using fMRI to track brain changes associated with the acquisition and use of advanced mnemonic techniques for long-term information retention.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Memory Testing"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i3",
          "title": "Behavioral Interventions for Improving Attention in ADHD",
          "description": "Testing the efficacy of a new mindfulness-based intervention for enhancing sustained attention in children with ADHD.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Behavioral Assessments"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i4",
          "title": "Advanced Methodologies for Tracking Real-time Attentional Fluctuations",
          "description": "Developing new algorithms for analyzing EEG data to identify periods of mind-wandering and attentional lapses in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i5",
          "title": "Cross-cultural Differences in Autobiographical Memory",
          "description": "Comparing how individuals from different cultural backgrounds in India recall and narrate significant life events.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i6",
          "title": "Quantitative Analysis of Memory Decay in Aging Populations",
          "description": "Using longitudinal data to model the rate of memory decline in healthy older adults and identify predictors of cognitive resilience.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i7",
          "title": "Theoretical Models of Attentional Selection in Complex Scenes",
          "description": "Developing a computational framework to explain how the brain prioritizes information in visually dense environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i8",
          "title": "The Role of Attention in Organizational Decision Making",
          "description": "Investigating how attentional biases and cognitive load impact the quality of decisions made by managers in high-pressure environments.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Field Experiments and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i9",
          "title": "Developmental Trajectories of Executive Functions in Early Childhood",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children from diverse socioeconomic backgrounds.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Cognitive Assessments"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-0-i10",
          "title": "Psychometric Evaluation of Attention Assessment Tools",
          "description": "Assessing the reliability and validity of a new computerized battery for measuring different components of attention.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjammu-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "4898",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i1",
          "title": "The Impact of Social Media Echo Chambers on Political Polarization",
          "description": "Investigating how exposure to ideologically homogeneous online groups influences the extremity of political beliefs and intergroup hostility.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Social Network Analysis and Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i2",
          "title": "Neuroplasticity and Social Conformity: Brain Changes in Response to Group Pressure",
          "description": "Using fMRI to examine how the brain's reward and conflict detection systems adapt when individuals repeatedly conform to group norms.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Asch Conformity Paradigm"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i3",
          "title": "Behavioral Interventions for Reducing Workplace Bullying",
          "description": "Testing the efficacy of a bystander intervention program in promoting prosocial behavior and reducing incidents of harassment in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Field Observation"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i4",
          "title": "Advanced Methodologies for Modeling Group Decision-Making Processes",
          "description": "Developing computational models to predict the outcomes of group discussions based on individual preferences and social influence dynamics.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Agent-based Simulation"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i5",
          "title": "Cross-cultural Perspectives on Collectivism and Individualism",
          "description": "Comparing how social identity and group loyalty are manifested in rural vs. urban Indian communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Online Crowdfunding",
          "description": "Using big data to identify the factors that drive viral success and collective support for social causes on digital platforms.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Econometric Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i7",
          "title": "Theoretical Models of Social Identity and Intergroup Conflict",
          "description": "Developing a formal theory to explain the conditions under which strong group identification leads to violent conflict vs. peaceful cooperation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i8",
          "title": "The Role of Leadership in Fostering Organizational Commitment",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact employee identification with the organization.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i9",
          "title": "Developmental Trajectories of Prosocial Behavior in Children",
          "description": "Tracking the maturation of empathy and altruism in children and the influence of parental and peer social groups.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-1-i10",
          "title": "Psychometric Evaluation of Social Identification Scales",
          "description": "Assessing the validity of tools used to measure the strength and nature of social identity in diverse cultural contexts.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Analysis)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjammu-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "1554",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i1",
          "title": "Computational Modeling of Neural Oscillations in Decision Making",
          "description": "Developing a biophysically realistic model to explain how different frequency bands of brain activity interact during value-based choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience and Electrophysiology Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i2",
          "title": "Neuroplasticity and Synaptic Scaling in Learning",
          "description": "Investigating the molecular mechanisms that allow neural circuits to maintain stability while undergoing rapid changes during new skill acquisition.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "In vitro Electrophysiology and Molecular Biology"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i3",
          "title": "Brain-Computer Interfaces for Restoring Motor Function",
          "description": "Developing new decoding algorithms for translating neural signals into precise control commands for prosthetic limbs.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i4",
          "title": "Advanced Methodologies for High-resolution Functional Imaging",
          "description": "Developing new techniques for combining fMRI and EEG to achieve both high spatial and temporal resolution in brain mapping.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-modal Neuroimaging and Data Fusion"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i5",
          "title": "Cross-cultural Differences in Neural Processing of Social Cues",
          "description": "Using fMRI to investigate how cultural background influences the brain's response to facial expressions and social gestures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i6",
          "title": "Quantitative Analysis of Large-scale Neural Networks",
          "description": "Applying graph theory to analyze the connectivity patterns of the human connectome and identify biomarkers for neurological disorders.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and Network Neuroscience"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i7",
          "title": "Theoretical Models of Neural Coding and Information Processing",
          "description": "Developing a mathematical framework to explain how populations of neurons represent and transmit complex information.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Information Theory and Mathematical Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i8",
          "title": "Neural Correlates of Stress and Resilience in the Workplace",
          "description": "Investigating how chronic occupational stress impacts the structure and function of the prefrontal cortex and amygdala.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Structural and Functional MRI"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i9",
          "title": "Developmental Trajectories of Brain Connectivity in Adolescence",
          "description": "Tracking the maturation of white matter tracts and functional networks during the transition from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Diffusion Tensor Imaging (DTI) and Resting-state fMRI"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-2-i10",
          "title": "Psychometric Evaluation of Neuropsychological Assessment Batteries",
          "description": "Assessing the reliability and validity of standardized tests for measuring cognitive impairment in patients with brain injuries.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis and Clinical Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjammu-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "5371",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i1",
          "title": "The Efficacy of Online Cognitive Behavioral Therapy (CBT) for Depression in Rural India",
          "description": "Investigating whether digitally delivered CBT is as effective as in-person therapy for individuals with limited access to mental health services.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Clinical Assessments"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i2",
          "title": "Neuroplasticity and Recovery from Post-Traumatic Stress Disorder (PTSD)",
          "description": "Using fMRI to track brain changes associated with successful treatment of PTSD using prolonged exposure therapy.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Clinical Testing"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i3",
          "title": "Behavioral Interventions for Reducing Stigma around Mental Illness",
          "description": "Testing the impact of contact-based interventions on reducing prejudice and discrimination towards people with mental health conditions in community settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiments and Implicit Association Tests (IAT)"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i4",
          "title": "Advanced Methodologies for Assessing Treatment Adherence in Clinical Trials",
          "description": "Developing new digital tools and sensors for objectively monitoring patient adherence to behavioral and pharmacological interventions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Digital Health Technology and Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i5",
          "title": "Cross-cultural Perspectives on Coping Mechanisms for Anxiety",
          "description": "Comparing how individuals from different cultural backgrounds in India utilize traditional vs. modern psychological strategies to manage stress.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i6",
          "title": "Quantitative Analysis of Risk Factors for Adolescent Substance Abuse",
          "description": "Using large-scale longitudinal data to identify early predictors of drug and alcohol use in Indian youth.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i7",
          "title": "Theoretical Models of Resilience in the Face of Chronic Adversity",
          "description": "Developing a multi-level framework to explain the psychological and social factors that promote positive adaptation in high-risk environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i8",
          "title": "The Impact of Workplace Mental Health Programs on Employee Well-being",
          "description": "Evaluating the effectiveness of corporate wellness initiatives in reducing burnout and improving job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i9",
          "title": "Developmental Trajectories of Emotional Regulation in Children",
          "description": "Tracking the development of self-regulation skills in children and the role of early childhood experiences and parenting styles.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Observational Studies"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-3-i10",
          "title": "Psychometric Evaluation of Culturally Adapted Mental Health Screening Tools",
          "description": "Assessing the reliability and validity of translated and culturally modified versions of standardized diagnostic instruments.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjammu-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "1398",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i1",
          "title": "The Impact of Bilingualism on Cognitive Control in Indian Children",
          "description": "Investigating whether speaking multiple Indian languages provides a cognitive advantage in tasks requiring inhibitory control and task switching.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Tasks and Linguistic Proficiency Assessment"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i2",
          "title": "Neuroplasticity and Second Language Acquisition in Adulthood",
          "description": "Using fMRI to track brain changes associated with the acquisition of a new language in adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Language Testing"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i3",
          "title": "Behavioral Interventions for Improving Literacy in Rural Indian Schools",
          "description": "Testing the efficacy of a new phonological awareness program for children with reading difficulties in rural settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Reading Assessments"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i4",
          "title": "Advanced Methodologies for Analyzing Eye-tracking Data in Reading Research",
          "description": "Developing new metrics for analyzing eye-movement patterns to better understand the cognitive processes involved in reading complex scripts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i5",
          "title": "Cross-cultural Differences in Language Processing",
          "description": "Comparing how individuals from different linguistic backgrounds in India process and understand complex sentences.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psycholinguistic Experiments and Cross-cultural Comparison"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i6",
          "title": "Quantitative Analysis of Semantic Networks in the Mental Lexicon",
          "description": "Using computational models to map the organization of word meanings in the human brain.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Linguistics and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i7",
          "title": "Theoretical Models of Language Acquisition and Cognitive Development",
          "description": "Developing a computational framework to explain the relationship between language learning and the maturation of executive functions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Longitudinal Study"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i8",
          "title": "The Role of Language in Organizational Communication and Collaboration",
          "description": "Investigating how language use and communication styles within an organization impact employee collaboration and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Discourse Analysis"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i9",
          "title": "Developmental Trajectories of Metaphor Comprehension in Children",
          "description": "Tracking the development of figurative language understanding and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologyjammu-new-4-i10",
          "title": "Psychometric Evaluation of Language Proficiency Assessment Tools",
          "description": "Assessing the reliability and validity of standardized language tests for diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    }
  ],
  "Indian Institute of Technology Goa": [
    {
      "id": "iitgoa-1",
      "name": "Prof. Neha Munjal",
      "specialization": "Cognitive Science, Linguistics",
      "focus": "Psycholinguistics, language acquisition, and cognitive development.",
      "scholarLink": "#",
      "citations": "350",
      "topPapers": [
        "Language processing in bilinguals (2023)",
        "Cognitive development and language (2022)",
        "Syntax and semantics (2021)",
        "Reading acquisition and dyslexia (2020)",
        "Psycholinguistic approaches to language (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitgoa-1-i1",
          "title": "Bilingual Language Processing in the Indian Context",
          "description": "Investigating how the brain manages and switches between two linguistic systems in native Hindi-English speakers.",
          "sourcePublication": "Cognitive mechanisms in decision making (2018)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Switching Tasks"
        },
        {
          "id": "iitgoa-1-i2",
          "title": "Language Acquisition in Multilingual Environments",
          "description": "A longitudinal study on how children in India acquire multiple languages simultaneously.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Behavioral Observation"
        },
        {
          "id": "iitgoa-1-i3",
          "title": "Cognitive Correlates of Reading in Devanagari",
          "description": "Identifying the underlying cognitive skills necessary for fluent reading in the Devanagari script.",
          "sourcePublication": "Reading acquisition and dyslexia (2020)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Neuropsychological Testing and Behavioral Tasks"
        },
        {
          "id": "iitgoa-1-i4",
          "title": "Dyslexia and Phonological Awareness in Indian Languages",
          "description": "Interventions to improve sound processing in struggling readers of phonetic scripts.",
          "sourcePublication": "Reading acquisition and dyslexia (2020)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Intervention Study and Behavioral Assessment"
        },
        {
          "id": "iitgoa-1-i5",
          "title": "Sentence Comprehension and Eye-tracking",
          "description": "Using eye-tracking to study real-time language processing and syntactic parsing in complex sentence structures.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking during Natural Reading"
        },
        {
          "id": "iitgoa-1-i6",
          "title": "Pragmatics and Social Cognition in Indian Cultures",
          "description": "How we understand non-literal language like irony and sarcasm in diverse cultural contexts.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Testing and Qualitative Analysis"
        },
        {
          "id": "iitgoa-1-i7",
          "title": "Language and Thought: The Whorfian Hypothesis in India",
          "description": "Investigating the linguistic relativity hypothesis across different Indian language families.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Comparative Behavioral Study"
        },
        {
          "id": "iitgoa-1-i8",
          "title": "Neurobiology of Language in Multilinguals",
          "description": "Mapping language functions in the brain using fMRI and EEG in highly proficient multilinguals.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and EEG Mapping"
        },
        {
          "id": "iitgoa-1-i9",
          "title": "Second Language Learning and Ultimate Attainment",
          "description": "Factors influencing the ultimate attainment of a second language in late learners.",
          "sourcePublication": "Psycholinguistic approaches to language (2019)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Testing and Correlation Analysis"
        },
        {
          "id": "iitgoa-1-i10",
          "title": "Computational Psycholinguistics and Modeling",
          "description": "Developing and testing computational models that simulate human language processing and acquisition.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Simulation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygoa-new-0",
      "name": "Prof. A. Sharma",
      "specialization": "Cognitive Psychology",
      "focus": "Human memory and attention.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20A.%20Sharma",
      "citations": "3451",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygoa-new-0-i1",
          "title": "The Impact of Social Media on Adolescent Body Image",
          "description": "Investigating how frequent exposure to idealized images on social media platforms influences body dissatisfaction and self-esteem in Indian teenagers.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Experience Sampling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i2",
          "title": "Neuroplasticity and Recovery from Traumatic Brain Injury (TBI)",
          "description": "Using fMRI to track brain changes associated with successful cognitive rehabilitation in patients with TBI.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i3",
          "title": "Behavioral Interventions for Improving Sleep Quality in Shift Workers",
          "description": "Testing the efficacy of a new sleep hygiene program for individuals working irregular hours.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Actigraphy"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i4",
          "title": "Advanced Methodologies for Assessing Cognitive Load in Complex Tasks",
          "description": "Developing new metrics for analyzing pupillometry and heart rate variability to measure mental effort in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Physiological Monitoring and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i5",
          "title": "Cross-cultural Differences in Emotional Regulation Strategies",
          "description": "Comparing how individuals from different cultural backgrounds in India manage and express their emotions in response to stress.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i6",
          "title": "Quantitative Analysis of Risk Factors for Childhood Obesity",
          "description": "Using large-scale longitudinal data to identify early predictors of weight gain in Indian children.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i7",
          "title": "Theoretical Models of Decision Making under Uncertainty",
          "description": "Developing a formal theory to explain how individuals weigh risks and rewards in complex, real-world scenarios.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Game Theory and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i8",
          "title": "The Role of Leadership in Fostering Employee Innovation",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact the creative output of teams in tech organizations.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i9",
          "title": "Developmental Trajectories of Moral Reasoning in Children",
          "description": "Tracking the maturation of ethical thinking and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-0-i10",
          "title": "Psychometric Evaluation of Quality of Life Assessment Tools",
          "description": "Assessing the reliability and validity of standardized instruments for measuring well-being in diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygoa-new-1",
      "name": "Prof. B. Kumar",
      "specialization": "Social Psychology",
      "focus": "Group dynamics and social influence.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20B.%20Kumar",
      "citations": "5340",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygoa-new-1-i1",
          "title": "The Impact of Mindfulness-Based Stress Reduction (MBSR) on Academic Performance",
          "description": "Investigating whether a short-term mindfulness intervention can improve focus and reduce test anxiety in college students.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Academic Record Analysis"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i2",
          "title": "Neuroplasticity and Cognitive Reserve in Aging",
          "description": "Using fMRI to investigate how lifelong learning and cognitive engagement protect against age-related cognitive decline.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Cognitive Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i3",
          "title": "Behavioral Interventions for Reducing Workplace Stress",
          "description": "Testing the efficacy of a new organizational-level intervention for improving employee well-being and reducing burnout.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i4",
          "title": "Advanced Methodologies for Modeling Human-Computer Interaction (HCI)",
          "description": "Developing new computational models to predict user behavior and optimize the design of digital interfaces.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and User Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i5",
          "title": "Cross-cultural Perspectives on Subjective Well-being",
          "description": "Comparing how individuals from different cultural backgrounds in India define and pursue happiness.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i6",
          "title": "Quantitative Analysis of Social Influence in Online Communities",
          "description": "Using big data to identify the factors that drive the spread of information and opinions on social media platforms.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Social Network Analysis"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i7",
          "title": "Theoretical Models of Human Memory and Learning",
          "description": "Developing a formal theory to explain the relationship between encoding strategies and long-term information retention.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i8",
          "title": "The Role of Emotional Intelligence in Effective Leadership",
          "description": "Investigating how a leader's ability to manage their own and others' emotions impacts team performance and job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i9",
          "title": "Developmental Trajectories of Language Acquisition in Children",
          "description": "Tracking the development of linguistic skills and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-1-i10",
          "title": "Psychometric Evaluation of Standardized Achievement Tests",
          "description": "Assessing the reliability and validity of tools used to measure student learning in diverse Indian schools.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygoa-new-2",
      "name": "Prof. C. Singh",
      "specialization": "Neuroscience",
      "focus": "Computational models of the brain.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20C.%20Singh",
      "citations": "1036",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygoa-new-2-i1",
          "title": "The Impact of Virtual Reality (VR) on Empathy and Perspective-Taking",
          "description": "Investigating whether immersive VR experiences can increase empathy towards marginalized groups in Indian society.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Implicit Association Tests (IAT)"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i2",
          "title": "Neuroplasticity and Cognitive Recovery from Stroke",
          "description": "Using fMRI to track brain changes associated with successful motor and language rehabilitation in stroke patients.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i3",
          "title": "Behavioral Interventions for Improving Adherence to Medication in Chronic Illness",
          "description": "Testing the efficacy of a new digital reminder system for patients with hypertension or diabetes.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Digital Health Monitoring"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i4",
          "title": "Advanced Methodologies for Assessing Emotional States in Real-time",
          "description": "Developing new algorithms for analyzing facial expressions and vocal prosody to measure emotional fluctuations in naturalistic settings.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computer Vision and Signal Processing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i5",
          "title": "Cross-cultural Differences in Perception of Time",
          "description": "Comparing how individuals from different cultural backgrounds in India perceive and value time in their daily lives.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i6",
          "title": "Quantitative Analysis of Risk Factors for Postpartum Depression",
          "description": "Using large-scale longitudinal data to identify early predictors of mental health issues in new mothers in India.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i7",
          "title": "Theoretical Models of Human Motivation and Goal Pursuit",
          "description": "Developing a formal theory to explain the relationship between self-efficacy and long-term goal achievement.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i8",
          "title": "The Role of Organizational Culture in Fostering Employee Engagement",
          "description": "Investigating how different aspects of organizational culture (e.g., supportiveness, competitiveness) impact employee commitment and productivity.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i9",
          "title": "Developmental Trajectories of Social Cognition in Children",
          "description": "Tracking the maturation of theory of mind and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-2-i10",
          "title": "Psychometric Evaluation of Standardized Personality Inventories",
          "description": "Assessing the reliability and validity of tools used to measure personality traits in diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygoa-new-3",
      "name": "Prof. D. Patel",
      "specialization": "Clinical Psychology",
      "focus": "Mental health and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20D.%20Patel",
      "citations": "3760",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygoa-new-3-i1",
          "title": "The Impact of Gamification on Student Engagement in Online Learning",
          "description": "Investigating whether incorporating game-like elements into digital educational platforms can improve motivation and learning outcomes in Indian students.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Academic Record Analysis"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i2",
          "title": "Neuroplasticity and Cognitive Recovery from Addiction",
          "description": "Using fMRI to track brain changes associated with successful recovery from substance abuse in Indian patients.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i3",
          "title": "Behavioral Interventions for Improving Mental Health in the Workplace",
          "description": "Testing the efficacy of a new organizational-level intervention for reducing stress and improving employee well-being.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i4",
          "title": "Advanced Methodologies for Assessing Cognitive Decline in Aging",
          "description": "Developing new digital tools and sensors for objectively monitoring changes in cognitive function in healthy older adults.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Digital Health Technology and Data Analytics"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i5",
          "title": "Cross-cultural Differences in Perception of Justice",
          "description": "Comparing how individuals from different cultural backgrounds in India define and pursue fairness in their daily lives.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i6",
          "title": "Quantitative Analysis of Risk Factors for Adolescent Delinquency",
          "description": "Using large-scale longitudinal data to identify early predictors of criminal behavior in Indian youth.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i7",
          "title": "Theoretical Models of Human Creativity and Innovation",
          "description": "Developing a formal theory to explain the cognitive and social factors that drive original thinking and problem-solving.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i8",
          "title": "The Role of Leadership in Fostering Organizational Resilience",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact an organization's ability to adapt to change and overcome challenges.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i9",
          "title": "Developmental Trajectories of Executive Functions in Children",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-3-i10",
          "title": "Psychometric Evaluation of Standardized Intelligence Tests",
          "description": "Assessing the reliability and validity of tools used to measure cognitive ability in diverse Indian populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologygoa-new-4",
      "name": "Prof. E. Verma",
      "specialization": "Cognitive Science",
      "focus": "Language and thought.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20E.%20Verma",
      "citations": "780",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologygoa-new-4-i1",
          "title": "The Impact of Artificial Intelligence (AI) on Human Decision Making",
          "description": "Investigating how the use of AI-based decision support systems influences human judgment and accountability in Indian organizations.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Behavioral Tasks and Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i2",
          "title": "Neuroplasticity and Cognitive Recovery from Depression",
          "description": "Using fMRI to track brain changes associated with successful treatment of depression in Indian patients.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI and Neuropsychological Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i3",
          "title": "Behavioral Interventions for Improving Financial Literacy in Rural India",
          "description": "Testing the efficacy of a new community-based program for improving financial decision-making and well-being.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) and Financial Record Analysis"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i4",
          "title": "Advanced Methodologies for Assessing Human-Robot Interaction (HRI)",
          "description": "Developing new computational models to predict user behavior and optimize the design of robotic systems.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and User Testing"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i5",
          "title": "Cross-cultural Differences in Perception of Trust",
          "description": "Comparing how individuals from different cultural backgrounds in India define and pursue trust in their daily lives.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Cross-cultural Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i6",
          "title": "Quantitative Analysis of Risk Factors for Workplace Harassment",
          "description": "Using large-scale longitudinal data to identify early predictors of misconduct in Indian organizations.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Organizational Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and Predictive Modeling"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i7",
          "title": "Theoretical Models of Human Problem Solving and Reasoning",
          "description": "Developing a formal theory to explain the cognitive and social factors that drive effective problem-solving in complex, real-world scenarios.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i8",
          "title": "The Role of Leadership in Fostering Organizational Commitment",
          "description": "Investigating how different leadership styles (transformational vs. transactional) impact employee identification with the organization and job satisfaction.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i9",
          "title": "Developmental Trajectories of Cognitive Control in Children",
          "description": "Tracking the maturation of inhibitory control, working memory, and cognitive flexibility in children and its relationship to cognitive and social milestones.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Testing and Storytelling Tasks"
        },
        {
          "id": "indianinstituteoftechnologygoa-new-4-i10",
          "title": "Psychometric Evaluation of Standardized Aptitude Tests",
          "description": "Assessing the reliability and validity of tools used to measure student potential in diverse Indian schools.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis (CFA and Reliability Testing)"
        }
      ]
    }
  ],
  "University of Delhi": [
    {
      "id": "du-3",
      "name": "Prof. S. P. K. Jena",
      "specialization": "Clinical Psychology",
      "focus": "Behavior therapy, stress management, and clinical assessment.",
      "scholarLink": "http://psychology.du.ac.in/faculty/spkjena.html",
      "citations": "850",
      "topPapers": [
        "Behavior therapy in clinical practice (2023)",
        "Stress and coping mechanisms (2022)",
        "Psychological assessment techniques (2021)",
        "Cognitive behavior therapy for anxiety (2020)",
        "Mental health in adolescents (2019)",
        "Cognitive mechanisms in decision making (2018)",
        "Neuroplasticity and learning outcomes (2017)",
        "Behavioral interventions in clinical settings (2016)",
        "Advanced methodologies in psychological research (2015)",
        "Cross-cultural perspectives on mental health (2014)"
      ],
      "researchIdeas": [
        {
          "id": "du-3-i1",
          "title": "Efficacy of Culturally Adapted CBT in India",
          "description": "Adapting cognitive behavioral therapy for culturally diverse populations in India and testing its outcomes.",
          "sourcePublication": "Behavior therapy in clinical practice (2023)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "du-3-i2",
          "title": "Mindfulness-Based Stress Management in Students",
          "description": "Evaluating mindfulness-based interventions for academic stress among Indian university students.",
          "sourcePublication": "Stress and coping mechanisms (2022)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Intervention Study"
        },
        {
          "id": "du-3-i3",
          "title": "Standardization of Clinical Assessment Tools",
          "description": "Standardizing psychological assessment instruments for the diverse Indian population.",
          "sourcePublication": "Psychological assessment techniques (2021)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "du-3-i4",
          "title": "Behavioral Interventions for Autism Spectrum Disorder",
          "description": "Assessing the long-term impact of early behavioral interventions on children with ASD in India.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Clinical Study"
        },
        {
          "id": "du-3-i5",
          "title": "Psychosocial Risk Factors for Anxiety in Youth",
          "description": "Identifying the specific environmental and social factors that contribute to anxiety in urban Indian adolescents.",
          "sourcePublication": "Mental health in adolescents (2019)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Large-scale Survey and Path Analysis"
        },
        {
          "id": "du-3-i6",
          "title": "Resilience and Coping with Chronic Illness",
          "description": "Exploring psychological resilience and coping strategies in patients with chronic diseases in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Health Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Thematic Analysis"
        },
        {
          "id": "du-3-i7",
          "title": "Effectiveness of Tele-psychology vs. In-person Therapy",
          "description": "Comparing the clinical outcomes of online behavior therapy with traditional in-person sessions.",
          "sourcePublication": "Advanced methodologies in psychological research (2015)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Comparative Clinical Trial"
        },
        {
          "id": "du-3-i8",
          "title": "Interventions to Reduce Mental Health Stigma",
          "description": "Testing the efficacy of community-based interventions in reducing the stigma associated with seeking psychological help.",
          "sourcePublication": "Behavioral interventions in clinical settings (2016)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Intervention Study and Attitude Surveys"
        },
        {
          "id": "du-3-i9",
          "title": "Family Dynamics and Depression Treatment",
          "description": "Investigating how family support and communication patterns influence the recovery from clinical depression.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2014)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Clinical Case Analysis and Surveys"
        },
        {
          "id": "du-3-i10",
          "title": "Relapse Prevention in Substance Abuse Rehabilitation",
          "description": "Evaluating the effectiveness of new behavioral strategies in preventing relapse among addiction patients.",
          "sourcePublication": "Behavior therapy in clinical practice (2023)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Follow-up and RCT"
        }
      ]
    },
    {
      "id": "universityofdelhi-new-0",
      "name": "Prof. Anand Prakash",
      "specialization": "Organizational Behavior",
      "focus": "Leadership, organizational culture, and OB.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Anand%20Prakash",
      "citations": "3605",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "universityofdelhi-new-0-i1",
          "title": "Leadership Styles in Indian Tech Startups",
          "description": "Investigating how transformational vs. transactional leadership impacts innovation in the fast-paced Indian startup ecosystem.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Multi-level Modeling and Employee Surveys"
        },
        {
          "id": "universityofdelhi-new-0-i2",
          "title": "Organizational Culture and Employee Well-being",
          "description": "Analyzing the relationship between organizational values and the psychological health of employees in large Indian corporations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "Large-scale Survey and Path Analysis"
        },
        {
          "id": "universityofdelhi-new-0-i3",
          "title": "Impact of Remote Work on Team Cohesion",
          "description": "Exploring how the shift to hybrid and remote work models affects social bonding and collaboration within teams.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods (Survey and Qualitative Interviews)"
        },
        {
          "id": "universityofdelhi-new-0-i4",
          "title": "Emotional Intelligence and Leadership Effectiveness",
          "description": "Assessing the role of EQ in predicting managerial success and subordinate satisfaction in Indian organizations.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Assessment and Performance Metrics"
        },
        {
          "id": "universityofdelhi-new-0-i5",
          "title": "Diversity and Inclusion in Indian Corporates",
          "description": "Investigating the barriers to and facilitators of successful D&I initiatives in the Indian workplace.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Case Studies"
        },
        {
          "id": "universityofdelhi-new-0-i6",
          "title": "Ethical Leadership and Organizational Trust",
          "description": "Developing a model to explain how ethical behavior in leaders fosters a culture of trust and accountability.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Structural Equation Modeling (SEM)"
        },
        {
          "id": "universityofdelhi-new-0-i7",
          "title": "Resilience in High-Pressure Work Environments",
          "description": "A longitudinal study on the psychological factors that enable employees to thrive in high-stress industries like IT and Finance.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Psychological Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Stress Monitoring"
        },
        {
          "id": "universityofdelhi-new-0-i8",
          "title": "Impact of Artificial Intelligence on Job Satisfaction",
          "description": "Investigating how the integration of AI tools in the workplace affects employee autonomy and job engagement.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Experimental Tasks"
        },
        {
          "id": "universityofdelhi-new-0-i9",
          "title": "Mentorship and Career Progression for Women in STEM",
          "description": "Tracking the impact of formal mentorship programs on the career trajectories of female professionals in India.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Study and Qualitative Interviews"
        },
        {
          "id": "universityofdelhi-new-0-i10",
          "title": "Organizational Change and Employee Resistance",
          "description": "Analyzing the cognitive and emotional drivers of resistance to major organizational restructuring.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Organizational Gap",
          "difficulty": "Intermediate",
          "methodology": "In-depth Case Study and Employee Surveys"
        }
      ]
    },
    {
      "id": "universityofdelhi-new-1",
      "name": "Prof. Nandita Babu",
      "specialization": "Developmental Psychology",
      "focus": "Cognitive development, theory of mind, and language.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Nandita%20Babu",
      "citations": "2792",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "universityofdelhi-new-1-i1",
          "title": "Theory of Mind Development in Indian Children",
          "description": "Investigating the developmental milestones of social cognition and false-belief understanding in diverse Indian settings.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "False-belief Tasks and Longitudinal Observation"
        },
        {
          "id": "universityofdelhi-new-1-i2",
          "title": "Language Acquisition and Cognitive Growth",
          "description": "A longitudinal study on how early language proficiency predicts later cognitive and academic outcomes.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "universityofdelhi-new-1-i3",
          "title": "Impact of Parenting Styles on Social Competence",
          "description": "Exploring how different cultural parenting practices in India influence a child's ability to navigate social relationships.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Observational Study and Parent Surveys"
        },
        {
          "id": "universityofdelhi-new-1-i4",
          "title": "Cognitive Flexibility in Early Childhood",
          "description": "Assessing the development of set-shifting and cognitive control in preschool children.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Dimensional Change Card Sort (DCCS) Task"
        },
        {
          "id": "universityofdelhi-new-1-i5",
          "title": "Role of Play in Cognitive Development",
          "description": "Investigating how different types of play (symbolic vs. constructive) contribute to problem-solving skills in children.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Experimental Play Paradigm"
        },
        {
          "id": "universityofdelhi-new-1-i6",
          "title": "Executive Function and School Readiness",
          "description": "Identifying the specific cognitive control mechanisms that best predict successful transition to primary school.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Testing and Teacher Ratings"
        },
        {
          "id": "universityofdelhi-new-1-i7",
          "title": "Cross-cultural Differences in Moral Reasoning",
          "description": "Comparing how children from different socio-economic backgrounds in India resolve moral dilemmas.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Comparative Experimental Study"
        },
        {
          "id": "universityofdelhi-new-1-i8",
          "title": "Impact of Digital Media on Child Development",
          "description": "Assessing how early exposure to screens affects attention spans and social-emotional development.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Behavioral Testing"
        },
        {
          "id": "universityofdelhi-new-1-i9",
          "title": "Resilience in Children from Marginalized Backgrounds",
          "description": "Exploring the psychological strengths and environmental supports that foster resilience in at-risk children.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Thematic Analysis"
        },
        {
          "id": "universityofdelhi-new-1-i10",
          "title": "Neural Correlates of Social Cognition in Children",
          "description": "Using fNIRS to map brain activity during social interaction tasks in young children.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fNIRS (Functional Near-Infrared Spectroscopy)"
        }
      ]
    },
    {
      "id": "universityofdelhi-new-3",
      "name": "Prof. Dinesh Chhabra",
      "specialization": "Cognitive Psychology",
      "focus": "Memory, learning, and experimental psychology.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Dinesh%20Chhabra",
      "citations": "594",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "universityofdelhi-new-3-i1",
          "title": "Efficacy of Culturally Adapted CBT for Depression in Rural India",
          "description": "Evaluating whether modifying standard Cognitive Behavioral Therapy to include local metaphors and values improves outcomes.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "universityofdelhi-new-3-i2",
          "title": "Impact of Community-Based Mental Health Programs on Stigma",
          "description": "Assessing how local awareness campaigns led by community leaders affect attitudes toward mental illness in urban slums.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-post Survey and Focus Groups"
        },
        {
          "id": "universityofdelhi-new-3-i3",
          "title": "Neuroplasticity and Recovery from Post-Traumatic Stress Disorder (PTSD)",
          "description": "Investigating whether successful psychotherapy leads to structural changes in the amygdala and hippocampus.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Structural MRI and Longitudinal Clinical Study"
        },
        {
          "id": "universityofdelhi-new-3-i4",
          "title": "Cognitive Biases in Anxiety Disorders",
          "description": "Identifying the specific attention and interpretation biases that maintain social anxiety in Indian adolescents.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Paradigm (Dot-probe Task)"
        },
        {
          "id": "universityofdelhi-new-3-i5",
          "title": "Cross-Cultural Perspectives on Somatization",
          "description": "Exploring why psychological distress is more likely to be expressed through physical symptoms in certain Indian sub-cultures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Clinical Case Analysis"
        },
        {
          "id": "universityofdelhi-new-3-i6",
          "title": "Impact of Digital Mental Health Tools on Treatment Adherence",
          "description": "Evaluating whether mobile apps for mood tracking and meditation improve the consistency of outpatient care.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Technological Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Behavioral Tracking and Patient Surveys"
        },
        {
          "id": "universityofdelhi-new-3-i7",
          "title": "Theoretical Models of Resilience in Marginalized Communities",
          "description": "Developing a framework for understanding the psychological strengths that allow individuals to thrive despite systemic adversity.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Framework Development"
        },
        {
          "id": "universityofdelhi-new-3-i8",
          "title": "Psychometric Evaluation of Mental Health Screening Tools for Primary Care",
          "description": "Validating a brief, multi-dimensional screening tool for common mental disorders in high-volume Indian clinics.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "universityofdelhi-new-3-i9",
          "title": "Developmental Trajectories of Emotional Regulation",
          "description": "A longitudinal study on how early childhood temperament and parenting styles predict mental health outcomes in adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "universityofdelhi-new-3-i10",
          "title": "Advanced Methodologies for Studying Therapeutic Process",
          "description": "Using natural language processing (NLP) to analyze therapist-client interactions and predict treatment success.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "NLP and Machine Learning on Session Transcripts"
        }
      ]
    },
    {
      "id": "universityofdelhi-new-4",
      "name": "Prof. Suneet Varma",
      "specialization": "Theoretical Psychology",
      "focus": "Indian psychology, consciousness, and qualitative methods.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Suneet%20Varma",
      "citations": "2089",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "universityofdelhi-new-4-i1",
          "title": "Psychological Impact of Yoga and Pranayama on Stress Resilience",
          "description": "Investigating the physiological and psychological mechanisms through which traditional Indian practices enhance well-being.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT) with Biomarkers (Cortisol)"
        },
        {
          "id": "universityofdelhi-new-4-i2",
          "title": "Theoretical Models of Self in Indian Philosophy and Psychology",
          "description": "Developing a unified framework that integrates Vedantic concepts of the self with modern psychological theories of identity.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Synthesis and Philosophical Analysis"
        },
        {
          "id": "universityofdelhi-new-4-i3",
          "title": "Impact of Spiritual Beliefs on Coping with Chronic Illness",
          "description": "Exploring how traditional Indian spiritual frameworks influence the psychological adjustment of patients with life-threatening diseases.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Thematic Analysis"
        },
        {
          "id": "universityofdelhi-new-4-i4",
          "title": "Neuroplasticity and Deep Meditation Practices",
          "description": "Investigating the long-term structural and functional brain changes in advanced practitioners of Indian meditation techniques.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and DTI (Diffusion Tensor Imaging)"
        },
        {
          "id": "universityofdelhi-new-4-i5",
          "title": "Cognitive Mechanisms of Intuition in Indian Epistemology",
          "description": "Exploring the psychological basis of 'Pratibha' (intuition) and its role in creative problem-solving.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Paradigm and Qualitative Reports"
        },
        {
          "id": "universityofdelhi-new-4-i6",
          "title": "Cross-Cultural Perspectives on Mindfulness: Indian vs. Western Approaches",
          "description": "Comparing the psychological outcomes of traditional Vipassana vs. modern Mindfulness-Based Stress Reduction (MBSR).",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Comparative Experimental Design"
        },
        {
          "id": "universityofdelhi-new-4-i7",
          "title": "Quantitative Analysis of Spiritual Well-being in Diverse Indian Populations",
          "description": "Using large-scale survey data to identify the predictors of spiritual health across different age and socio-economic groups.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Large-scale Survey and Structural Equation Modeling (SEM)"
        },
        {
          "id": "universityofdelhi-new-4-i8",
          "title": "Psychometric Evaluation of Indigenous Well-being Scales",
          "description": "Validating a tool that measures well-being based on Indian concepts like 'Ananda' and 'Shanti'.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        },
        {
          "id": "universityofdelhi-new-4-i9",
          "title": "Developmental Trajectories of Spiritual Identity in Children",
          "description": "A longitudinal study on how family rituals and spiritual education shape the development of values in Indian children.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Qualitative Study"
        },
        {
          "id": "universityofdelhi-new-4-i10",
          "title": "Advanced Methodologies for Studying Altered States of Consciousness",
          "description": "Using high-density EEG to map the neural dynamics of deep meditative states described in Indian texts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "High-density EEG and Spectral Analysis"
        }
      ]
    }
  ],
  "Indian Institute of Technology Delhi": [
    {
      "id": "iitd-1",
      "name": "Prof. Sumitash Jana",
      "specialization": "Visual Perception, Attention",
      "focus": "Neural correlates of visual awareness and attention",
      "scholarLink": "https://hss.iitd.ac.in/faculty/sumitash-jana",
      "citations": "1850",
      "topPapers": [
        "Neural Mechanisms of Visual Attention (2023)",
        "Conscious Perception and Brain Dynamics (2022)",
        "Attention Shifts in Complex Scenes (2021)",
        "Visual Search and Feature Binding (2020)",
        "Temporal Dynamics of Awareness (2019)",
        "Cross-modal Integration in Perception (2018)",
        "Saccadic Eye Movements and Attention (2017)",
        "Neural Basis of Object Recognition (2016)",
        "Perceptual Learning and Plasticity (2015)",
        "Attention in the Aging Brain (2014)"
      ],
      "researchIdeas": [
        {
          "id": "iitd-1-i1",
          "title": "AI-Assisted Visual Attention Modeling",
          "description": "Using deep learning to predict human attention in dynamic environments.",
          "sourcePublication": "Neural Mechanisms of Visual Attention (2023)",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Deep Learning (CNN/RNN)"
        },
        {
          "id": "iitd-1-i2",
          "title": "Neural Correlates of VR Sickness",
          "description": "Investigating the mismatch between visual and vestibular signals in virtual reality.",
          "sourcePublication": "Conscious Perception and Brain Dynamics (2022)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Vestibular Stimulation"
        },
        {
          "id": "iitd-1-i3",
          "title": "Attention Deficits in Digital Natives",
          "description": "A comparative study on attention spans across different generations.",
          "sourcePublication": "Attention Shifts in Complex Scenes (2021)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Tasks and Eye-tracking"
        },
        {
          "id": "iitd-1-i4",
          "title": "Visual Awareness in Sleep Deprivation",
          "description": "How lack of sleep affects rapid visual processing and decision making.",
          "sourcePublication": "Temporal Dynamics of Awareness (2019)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Sleep-deprived Experimental Paradigm"
        },
        {
          "id": "iitd-1-i5",
          "title": "Enhancing Perception through Biofeedback",
          "description": "Using real-time EEG feedback to improve visual focus.",
          "sourcePublication": "Neural Mechanisms of Visual Attention (2023)",
          "gapType": "Interventional Gap",
          "difficulty": "Advanced",
          "methodology": "Neurofeedback (EEG)"
        },
        {
          "id": "iitd-1-i6",
          "title": "Color Perception and Cultural Context",
          "description": "Exploring how language and culture influence color discrimination.",
          "sourcePublication": "Cross-modal Integration in Perception (2018)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Experiments"
        },
        {
          "id": "iitd-1-i7",
          "title": "Perceptual Load and Distraction",
          "description": "Testing the limits of visual processing under high cognitive load.",
          "sourcePublication": "Attention Shifts in Complex Scenes (2021)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Dual-task Paradigm"
        },
        {
          "id": "iitd-1-i8",
          "title": "Visual Search in Medical Imaging",
          "description": "Optimizing radiological scans for better diagnostic accuracy using eye-tracking.",
          "sourcePublication": "Visual Search and Feature Binding (2020)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Expert Comparison"
        },
        {
          "id": "iitd-1-i9",
          "title": "Motion Perception in Autism",
          "description": "Analyzing differences in global motion processing in neurodivergent individuals.",
          "sourcePublication": "Neural Basis of Object Recognition (2016)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysics and Behavioral Modeling"
        },
        {
          "id": "iitd-1-i10",
          "title": "Subliminal Messaging and Behavior",
          "description": "Revisiting the impact of subliminal visual cues on consumer choices.",
          "sourcePublication": "Temporal Dynamics of Awareness (2019)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Subliminal Priming Task"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydelhi-new-0",
      "name": "Prof. Varsha Singh",
      "specialization": "Cognitive Psychology",
      "focus": "Decision making, emotion, and cognition.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Varsha%20Singh",
      "citations": "1723",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i1",
          "title": "Cognitive Mechanisms of Risky Decision Making",
          "description": "How individuals weigh potential gains and losses under emotional stress.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Economics Tasks (e.g., IGT)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i2",
          "title": "Impact of Neuroplasticity on Cognitive Remediation",
          "description": "Evaluating the effectiveness of brain training in improving executive functions.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Cognitive Training"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i3",
          "title": "Behavioral Interventions for Impulsive Behavior",
          "description": "Testing a new mindfulness-based program for reducing impulsivity in adolescents.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i4",
          "title": "Advanced Methodologies in Decision Research",
          "description": "Using computational modeling to decompose the components of choice behavior.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Drift Diffusion Modeling (DDM)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i5",
          "title": "Cross-cultural Perspectives on Emotional Regulation",
          "description": "Comparing emotional suppression and reappraisal strategies in India vs. the West.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i6",
          "title": "Quantitative Analysis of Choice Consistency",
          "description": "Developing a mathematical index to measure the stability of preferences over time.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i7",
          "title": "Theoretical Models of Cognitive Control",
          "description": "Integrating proactive and reactive control into a unified theoretical framework.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Synthesis"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i8",
          "title": "Workplace Stress and Decision Quality",
          "description": "How chronic organizational stress affects strategic decision making in managers.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Contextual Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Performance Tasks"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i9",
          "title": "Developmental Trajectories of Executive Function",
          "description": "A longitudinal study on how early environment shapes cognitive control.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-0-i10",
          "title": "Psychometric Evaluation of Decision-Making Scales",
          "description": "Assessing the reliability and validity of standard tools for measuring cognitive styles.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation (CFA)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydelhi-new-1",
      "name": "Prof. Yashpal Jogdand",
      "specialization": "Social Psychology",
      "focus": "Intergroup relations, prejudice, and collective action.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Yashpal%20Jogdand",
      "citations": "724",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i1",
          "title": "Psychological Mechanisms of Collective Action",
          "description": "Investigating why individuals participate in social movements for group rights.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Survey and Structural Equation Modeling"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i2",
          "title": "Impact of Social Identity on Prejudice Reduction",
          "description": "How common ingroup identity can reduce bias between conflicting groups.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Intervention"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i3",
          "title": "Cognitive Biases in Intergroup Perception",
          "description": "Analyzing how stereotypes influence the processing of information about outgroup members.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i4",
          "title": "Role of Emotion in Intergroup Conflict",
          "description": "How collective guilt and shame influence reconciliation efforts.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i5",
          "title": "Quantitative Analysis of Social Network Data",
          "description": "Using graph theory to study the spread of prejudice in online communities.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i6",
          "title": "Developmental Trajectories of Ingroup Bias",
          "description": "A longitudinal study on how children acquire social identities and prejudices.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Study"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i7",
          "title": "Applied Social Psychology in Organizational Diversity",
          "description": "Evaluating the impact of diversity training on intergroup relations in the workplace.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Evaluation Research"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i8",
          "title": "Neuroplasticity and Empathy Training",
          "description": "Can empathy-building exercises change neural responses to outgroup suffering?",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Study"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i9",
          "title": "Advanced Methodologies in Social Research",
          "description": "Using experience sampling to study real-world intergroup interactions.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Experience Sampling Method (ESM)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-1-i10",
          "title": "Psychometric Evaluation of Prejudice Scales",
          "description": "Validating measures of subtle and blatant prejudice in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydelhi-new-2",
      "name": "Prof. Purnima Singh",
      "specialization": "Social Psychology",
      "focus": "Justice, identity, and intergroup relations.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Purnima%20Singh",
      "citations": "2450",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i1",
          "title": "Perceptions of Justice in Resource Allocation",
          "description": "How individuals determine if the distribution of social goods is fair.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Justice Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Experimental Vignettes"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i2",
          "title": "Identity and Well-being in Marginalized Groups",
          "description": "Investigating the role of social identity in fostering resilience among disadvantaged communities.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Population Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i3",
          "title": "Cognitive Mechanisms of Fairness Judgments",
          "description": "How heuristics and biases affect the perception of procedural justice.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i4",
          "title": "Intergroup Relations and Social Cohesion",
          "description": "Evaluating the impact of intergroup contact on social harmony in diverse neighborhoods.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiment"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i5",
          "title": "Quantitative Assessment of Social Identity",
          "description": "Developing a new mathematical model to measure the strength of group identification.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i6",
          "title": "Theoretical Models of Social Justice",
          "description": "Integrating psychological and sociological perspectives into a unified theory of justice.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Synthesis"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i7",
          "title": "Impact of Neuroplasticity on Social Cognition",
          "description": "Investigating how social experiences shape brain regions involved in perspective-taking.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i8",
          "title": "Advanced Methodologies in Justice Research",
          "description": "Using multi-level modeling to analyze justice perceptions across different social contexts.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-level Modeling (MLM)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i9",
          "title": "Developmental Trajectories of Moral Reasoning",
          "description": "A longitudinal study on how children develop concepts of fairness and rights.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-2-i10",
          "title": "Psychometric Evaluation of Identity Scales",
          "description": "Assessing the reliability and validity of tools for measuring multiple social identities.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologydelhi-new-3",
      "name": "Prof. Samar Husain",
      "specialization": "Cognitive Science",
      "focus": "Sentence processing, psycholinguistics, and computational linguistics.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Samar%20Husain",
      "citations": "3357",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i1",
          "title": "Cognitive Modeling of Dependency Locality",
          "description": "Testing the dependency locality theory in head-final languages like Hindi.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Simulation and Self-paced Reading"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i2",
          "title": "Impact of Working Memory on Sentence Parsing",
          "description": "How individual differences in working memory capacity affect the processing of long-distance dependencies.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and WM Tasks"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i3",
          "title": "Neural Correlates of Syntactic Ambiguity Resolution",
          "description": "Mapping brain regions involved in resolving structural ambiguities in real-time speech.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and ERP"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i4",
          "title": "Cross-linguistic Differences in Prediction Mechanisms",
          "description": "Comparing pre-activation of syntactic categories in verb-medial vs. verb-final languages.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking during Reading"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i5",
          "title": "Computational Analysis of Discourse Coherence",
          "description": "Using graph-based models to measure the flow of information in natural language texts.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Natural Language Processing (NLP)"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i6",
          "title": "Developmental Trajectories of Sentence Comprehension",
          "description": "A longitudinal study on how children acquire complex syntactic structures in Hindi.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i7",
          "title": "Applied Psycholinguistics in Literacy Programs",
          "description": "Designing evidence-based reading interventions for first-generation learners.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Educational Intervention Study"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i8",
          "title": "Psychometric Evaluation of Language Proficiency",
          "description": "Developing standardized tools to measure syntactic complexity in bilingual speakers.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i9",
          "title": "Behavioral Interventions for Reading Difficulties",
          "description": "Evaluating the impact of phonological awareness training on reading fluency.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologydelhi-new-3-i10",
          "title": "Advanced Methodologies in Eye-tracking Research",
          "description": "Integrating pupillometry with gaze-contingent paradigms to study cognitive effort in parsing.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Pupillometry"
        }
      ]
    }
  ],
  "Indian Institute of Technology Kanpur": [
    {
      "id": "indianinstituteoftechnologykanpur-new-0",
      "name": "Prof. Ark Verma",
      "specialization": "Cognitive Science",
      "focus": "Lateralization of cognitive functions, bilingualism, and visual word recognition.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Ark%20Verma",
      "citations": "1085",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i1",
          "title": "Hemispheric Lateralization of Emotional Prosody",
          "description": "Investigating how the left and right hemispheres process emotional cues in speech.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Dichotic Listening and ERP"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i2",
          "title": "Cognitive Advantages of Early Bilingualism",
          "description": "Comparing executive function performance in bilingual vs. monolingual children in India.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i3",
          "title": "Visual Word Recognition in Devanagari Script",
          "description": "Analyzing the role of orthographic depth in reading speed and accuracy.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking during Reading"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i4",
          "title": "Impact of Cross-linguistic Influence on Lexical Access",
          "description": "How the first language affects the retrieval of words in the second language among bilinguals.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Linguistic Gap",
          "difficulty": "Advanced",
          "methodology": "Picture-Word Interference Paradigm"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i5",
          "title": "Quantitative Modeling of Lateralized Word Recognition",
          "description": "Developing a computational model to simulate hemispheric differences in visual processing.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Connectionist Modeling"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i6",
          "title": "Neural Plasticity in Adult Language Learning",
          "description": "Investigating brain changes associated with intensive second language training in adults.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and DTI"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i7",
          "title": "Applied Cognitive Psychology in Interface Design",
          "description": "Optimizing digital layouts based on hemispheric processing advantages.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Usability Testing and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i8",
          "title": "Psychometric Evaluation of Bilingual Proficiency",
          "description": "Validating a new multi-dimensional tool for assessing language dominance in India.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i9",
          "title": "Behavioral Interventions for Dyslexia in Bilinguals",
          "description": "Evaluating the effectiveness of cross-linguistic phonological training.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Interventional Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-0-i10",
          "title": "Advanced Methodologies in Lateralization Research",
          "description": "Using transcranial direct current stimulation (tDCS) to modulate hemispheric dominance.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "tDCS and Behavioral Tasks"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykanpur-new-1",
      "name": "Prof. Shikha Dixit",
      "specialization": "Cognitive Psychology",
      "focus": "Health psychology, illness narratives, and social cognition.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Shikha%20Dixit",
      "citations": "4962",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i1",
          "title": "Illness Narratives and Coping Mechanisms",
          "description": "Analyzing how patients with chronic diseases construct stories to make sense of their condition.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Narrative Gap",
          "difficulty": "Intermediate",
          "methodology": "Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i2",
          "title": "Social Cognition and Health-Seeking Behavior",
          "description": "How social norms and perceptions of stigma influence the decision to seek mental health support.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Social Gap",
          "difficulty": "Advanced",
          "methodology": "Survey and Focus Group Discussions"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i3",
          "title": "Cognitive Biases in Health Risk Perception",
          "description": "Investigating the optimism bias in young adults regarding lifestyle-related diseases.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Vignettes"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i4",
          "title": "Impact of Caregiver Burden on Mental Well-being",
          "description": "A longitudinal study on the psychological health of family caregivers of dementia patients.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Population Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i5",
          "title": "Quantitative Analysis of Health-Related Quality of Life",
          "description": "Using structural equation modeling to identify predictors of well-being in cancer survivors.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Structural Equation Modeling (SEM)"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i6",
          "title": "Neural Correlates of Health-Related Decision Making",
          "description": "Mapping brain activity during choices between immediate gratification and long-term health benefits.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Study"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i7",
          "title": "Theoretical Models of Health Behavior Change",
          "description": "Integrating the Health Belief Model and Theory of Planned Behavior into a unified framework.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Synthesis"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i8",
          "title": "Applied Health Psychology in Workplace Wellness",
          "description": "Evaluating the effectiveness of mindfulness-based stress reduction programs in corporate settings.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i9",
          "title": "Psychometric Evaluation of Health Belief Scales",
          "description": "Validating tools for measuring perceived susceptibility and severity in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-1-i10",
          "title": "Advanced Methodologies in Health Research",
          "description": "Using experience sampling to study real-time health behaviors and emotional states.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Experience Sampling Method (ESM)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykanpur-new-2",
      "name": "Prof. Kumar Ravi Priya",
      "specialization": "Health Psychology",
      "focus": "Disaster mental health, qualitative methods, and cultural psychology.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Kumar%20Ravi%20Priya",
      "citations": "2495",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i1",
          "title": "Psychosocial Recovery after Natural Disasters",
          "description": "Investigating the long-term mental health outcomes of survivors of major floods in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Disaster Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Narrative Analysis"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i2",
          "title": "Cultural Resilience in Marginalized Communities",
          "description": "How indigenous knowledge and community practices foster resilience in the face of adversity.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Ethnographic Fieldwork"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i3",
          "title": "Cognitive Appraisals of Traumatic Events",
          "description": "Analyzing how different appraisal styles influence the development of PTSD symptoms.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i4",
          "title": "Impact of Social Support on Post-traumatic Growth",
          "description": "A longitudinal study on how social networks facilitate positive psychological change after trauma.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Social Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i5",
          "title": "Quantitative Modeling of Mental Health Resilience",
          "description": "Using latent growth curve modeling to track recovery trajectories after disasters.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Statistical Modeling"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i6",
          "title": "Neural Correlates of Emotional Regulation in Trauma",
          "description": "Investigating brain activity during emotional regulation tasks in disaster survivors.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI Study"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i7",
          "title": "Theoretical Frameworks for Cultural Psychology",
          "description": "Developing new models to integrate cultural context into disaster mental health research.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Theoretical Gap",
          "difficulty": "Advanced",
          "methodology": "Conceptual Synthesis"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i8",
          "title": "Applied Psychology in Disaster Management",
          "description": "Evaluating the effectiveness of community-based psychological first aid programs.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Evaluation Research"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i9",
          "title": "Psychometric Evaluation of Resilience Scales",
          "description": "Validating tools for measuring resilience in diverse cultural contexts in India.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-2-i10",
          "title": "Advanced Qualitative Methodologies in Health Research",
          "description": "Using interpretative phenomenological analysis (IPA) to explore the lived experience of illness.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Interpretative Phenomenological Analysis (IPA)"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykanpur-new-3",
      "name": "Prof. Devpriya Kumar",
      "specialization": "Cognitive Science",
      "focus": "Sense of agency, intentionality, and motor control.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Devpriya%20Kumar",
      "citations": "1763",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i1",
          "title": "Sense of Agency in Automated Driving",
          "description": "Investigating how levels of automation influence the driver's feeling of control.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Driving Simulator and Intentional Binding Paradigm"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i2",
          "title": "Impact of Motor Delays on Intentional Binding",
          "description": "How temporal delays between action and effect alter the perception of agency.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i3",
          "title": "Neural Correlates of Voluntary Action",
          "description": "Mapping brain regions involved in the generation of intentional motor commands.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and EEG"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i4",
          "title": "Sense of Agency in Schizophrenia",
          "description": "Analyzing deficits in self-agency and their relationship to auditory hallucinations.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Tasks"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i5",
          "title": "Quantitative Analysis of Motor Control Variability",
          "description": "Using entropy measures to characterize the stability of motor performance.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Kinematic Analysis"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i6",
          "title": "Developmental Trajectories of Self-Agency",
          "description": "A longitudinal study on how children acquire the sense of being an agent.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i7",
          "title": "Applied Cognitive Science in Prosthetics",
          "description": "Optimizing prosthetic control systems to enhance the user's sense of agency.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "User Experience Testing"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i8",
          "title": "Psychometric Evaluation of Agency Scales",
          "description": "Validating self-report measures of agency and responsibility.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i9",
          "title": "Cross-cultural Perspectives on Intentionality",
          "description": "Comparing concepts of agency and free will across different cultural groups.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-3-i10",
          "title": "Advanced Methodologies in Agency Research",
          "description": "Using virtual reality to manipulate visual feedback and study agency in complex environments.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Virtual Reality and Behavioral Modeling"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologykanpur-new-4",
      "name": "Prof. Braj Bhushan",
      "specialization": "Cognitive Psychology",
      "focus": "Neuropsychology, cognitive profiling, and trauma.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Braj%20Bhushan",
      "citations": "4991",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i1",
          "title": "Cognitive Profiling of PTSD Survivors",
          "description": "Identifying specific deficits in executive function and memory in individuals with post-traumatic stress disorder.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Neuropsychological Battery"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i2",
          "title": "Impact of Early Life Trauma on Brain Development",
          "description": "A longitudinal study on how childhood adversity shapes the structure and function of the prefrontal cortex.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal MRI and Behavioral Tasks"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i3",
          "title": "Neural Correlates of Resilience to Trauma",
          "description": "Mapping brain activity in individuals who maintain high levels of functioning despite significant adversity.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and DTI"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i4",
          "title": "Cognitive Mechanisms of Flashback Phenomena",
          "description": "Investigating the involuntary retrieval of traumatic memories using experimental paradigms.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and ERP"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i5",
          "title": "Quantitative Analysis of Neuropsychological Data",
          "description": "Using machine learning to predict clinical outcomes based on cognitive profiles.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Machine Learning (Random Forest/SVM)"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i6",
          "title": "Cross-cultural Perspectives on Trauma Expression",
          "description": "Comparing how trauma is experienced and reported in Indian vs. Western cultures.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Mixed Methods"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i7",
          "title": "Applied Neuropsychology in Rehabilitation",
          "description": "Evaluating the effectiveness of cognitive remediation programs for trauma survivors.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i8",
          "title": "Psychometric Evaluation of Trauma Assessment Tools",
          "description": "Validating standardized neuropsychological tests for the Indian population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i9",
          "title": "Impact of Chronic Stress on Cognitive Aging",
          "description": "How long-term exposure to stress influences the rate of cognitive decline in older adults.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Population Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Survey and Cognitive Testing"
        },
        {
          "id": "indianinstituteoftechnologykanpur-new-4-i10",
          "title": "Advanced Methodologies in Trauma Research",
          "description": "Integrating physiological measures (e.g., heart rate variability) with cognitive tasks to study trauma.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Physiological Monitoring and Behavioral Tasks"
        }
      ]
    }
  ],
  "Indian Institute of Technology Jodhpur": [
    {
      "id": "indianinstituteoftechnologyjodhpur-new-0",
      "name": "Prof. Romi Banerjee",
      "specialization": "Cognitive Science",
      "focus": "Human-computer interaction and cognitive modeling.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Romi%20Banerjee",
      "citations": "3587",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i1",
          "title": "Cognitive Modeling of User Navigation in Complex Websites",
          "description": "Developing computational models to predict how users search for information in hierarchical menus.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "ACT-R Modeling and Eye-tracking"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i2",
          "title": "Impact of Interface Complexity on Cognitive Load",
          "description": "Using physiological measures to quantify the mental effort required by different UI designs.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Pupillometry"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i3",
          "title": "Human-AI Collaboration in Decision Making",
          "description": "Investigating how users build trust and delegate tasks to intelligent agents.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Survey"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i4",
          "title": "Designing Accessible Interfaces for Older Adults",
          "description": "Adapting HCI principles to account for age-related changes in cognition and motor control.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Population Gap",
          "difficulty": "Intermediate",
          "methodology": "User-centered Design and Usability Testing"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i5",
          "title": "Neural Correlates of Digital Distraction",
          "description": "Mapping brain activity associated with multitasking and notification-driven interruptions.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i6",
          "title": "Cross-cultural Differences in Icon Perception",
          "description": "Analyzing how cultural background influences the interpretation of universal UI symbols.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Online Survey and Reaction Time Tasks"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i7",
          "title": "Behavioral Interventions for Reducing Screen Time",
          "description": "Testing the effectiveness of 'nudges' in mobile apps to promote digital well-being.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiment (A/B Testing)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i8",
          "title": "Psychometric Validation of User Experience Scales",
          "description": "Evaluating the reliability and validity of standardized UX questionnaires in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Analysis"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i9",
          "title": "Cognitive Ergonomics in Remote Work Environments",
          "description": "Assessing the impact of virtual collaboration tools on team performance and mental fatigue.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods (Survey and Performance Metrics)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-0-i10",
          "title": "Advanced Methodologies for Studying Mobile Interaction",
          "description": "Using mobile sensing and experience sampling to capture real-world user behavior.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Mobile Sensing and ESM"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjodhpur-new-1",
      "name": "Prof. Ankita Sharma",
      "specialization": "Social Psychology",
      "focus": "Social cognition and intergroup relations.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Ankita%20Sharma",
      "citations": "3018",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i1",
          "title": "Implicit Bias in Intergroup Relations",
          "description": "Measuring unconscious prejudices towards marginalized groups using the Implicit Association Test (IAT).",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Implicit Association Test (IAT)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i2",
          "title": "Impact of Social Identity on Decision Making",
          "description": "How group membership influences choices in economic games and resource allocation.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Social Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Games (e.g., Ultimatum Game)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i3",
          "title": "Neural Correlates of In-group Favoritism",
          "description": "Mapping brain activity associated with processing information about in-group vs. out-group members.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i4",
          "title": "Role of Empathy in Reducing Intergroup Conflict",
          "description": "Testing the effectiveness of perspective-taking interventions in improving intergroup attitudes.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i5",
          "title": "Quantitative Analysis of Social Network Influence",
          "description": "Using social network analysis to track the spread of attitudes and behaviors within groups.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Social Network Analysis (SNA)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i6",
          "title": "Cross-cultural Perspectives on Collective Identity",
          "description": "Comparing how individuals in individualistic vs. collectivistic cultures define their social groups.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i7",
          "title": "Development of Intergroup Attitudes in Children",
          "description": "A longitudinal study on the emergence of group-based preferences and stereotypes in early childhood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Observation"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i8",
          "title": "Impact of Social Media on Intergroup Polarization",
          "description": "Analyzing how online interactions contribute to the hardening of group boundaries.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Content Analysis and Survey"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i9",
          "title": "Cognitive Models of Stereotype Formation",
          "description": "Developing computational models to simulate how individuals categorize others based on social cues.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-1-i10",
          "title": "Advanced Methodologies in Social Cognition Research",
          "description": "Using immersive virtual reality to study real-time social interactions and group dynamics.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Virtual Reality and Behavioral Tracking"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjodhpur-new-2",
      "name": "Prof. Rajendra Singh",
      "specialization": "Neuroscience",
      "focus": "Computational neuroscience and neural networks.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Rajendra%20Singh",
      "citations": "3167",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i1",
          "title": "Modeling Synaptic Plasticity in Recurrent Neural Networks",
          "description": "Developing computational models to simulate how synaptic changes underlie learning and memory.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling (Python/NEST)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i2",
          "title": "Neural Dynamics of Decision Making in Noisy Environments",
          "description": "Investigating how neural networks integrate evidence to make choices under uncertainty.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Stochastic Differential Equations and Simulation"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i3",
          "title": "Impact of Network Topology on Information Processing",
          "description": "Analyzing how the structural connectivity of brain regions influences cognitive efficiency.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Structural Gap",
          "difficulty": "Advanced",
          "methodology": "Graph Theory and Network Analysis"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i4",
          "title": "Computational Models of Neurodegenerative Diseases",
          "description": "Simulating the progression of Alzheimer's disease in large-scale neural networks.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Biophysical Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i5",
          "title": "Quantitative Analysis of Neural Oscillations",
          "description": "Using signal processing techniques to extract meaningful patterns from EEG/MEG data.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Time-Frequency Analysis (Wavelets/STFT)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i6",
          "title": "Cross-cultural Differences in Neural Response to Stress",
          "description": "A comparative study on how cultural factors modulate the brain's reaction to stressors.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Computational Modeling"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i7",
          "title": "Developmental Changes in Neural Connectivity",
          "description": "Modeling the maturation of functional brain networks from childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Dynamic Causal Modeling (DCM)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i8",
          "title": "Applied Neuroscience in Brain-Computer Interfaces (BCI)",
          "description": "Optimizing decoding algorithms to improve the performance of motor-based BCIs.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing and Machine Learning"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i9",
          "title": "Psychometric Evaluation of Neural Complexity Measures",
          "description": "Validating measures of brain signal complexity as biomarkers for cognitive health.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Non-linear Dynamical Analysis"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-2-i10",
          "title": "Advanced Methodologies for Large-scale Neural Simulation",
          "description": "Developing high-performance computing frameworks for simulating human-scale neural networks.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Parallel Computing and GPU Acceleration"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjodhpur-new-3",
      "name": "Prof. K. Vyas",
      "specialization": "Cognitive Psychology",
      "focus": "Decision making.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20K.%20Vyas",
      "citations": "2542",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i1",
          "title": "Heuristics and Biases in Financial Decision Making",
          "description": "Investigating how cognitive shortcuts lead to systematic errors in investment choices.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Survey"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i2",
          "title": "Impact of Time Pressure on Choice Consistency",
          "description": "Analyzing how urgent deadlines alter the stability of individual preferences.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Experimental Tasks with Time Constraints"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i3",
          "title": "Neural Correlates of Risk Perception",
          "description": "Mapping brain activity associated with evaluating uncertain outcomes and potential losses.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i4",
          "title": "Role of Emotion in Ethical Decision Making",
          "description": "Testing how affective states influence moral judgments and prosocial behavior.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods (Experimental and Qualitative)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i5",
          "title": "Quantitative Analysis of Choice Architecture",
          "description": "Using computational models to predict the impact of different 'nudges' on consumer behavior.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and A/B Testing"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i6",
          "title": "Cross-cultural Differences in Decision Styles",
          "description": "Comparing intuitive vs. analytical decision-making processes across cultural groups.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i7",
          "title": "Developmental Trajectories of Economic Rationality",
          "description": "A longitudinal study on how children and adolescents acquire normative decision-making skills.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i8",
          "title": "Impact of Group Dynamics on Collective Choice",
          "description": "Analyzing how social influence and groupthink affect the quality of team decisions.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Group-based Experimental Tasks"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i9",
          "title": "Psychometric Evaluation of Decision-Making Competence",
          "description": "Validating standardized scales for assessing individual differences in decision-making ability.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-3-i10",
          "title": "Advanced Methodologies for Studying Real-world Choice",
          "description": "Using naturalistic observation and big data analytics to study decision making in everyday life.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Big Data Analytics and Field Observation"
        }
      ]
    },
    {
      "id": "indianinstituteoftechnologyjodhpur-new-4",
      "name": "Prof. L. Rathore",
      "specialization": "Clinical Psychology",
      "focus": "Behavioral therapy.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20L.%20Rathore",
      "citations": "2558",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i1",
          "title": "Effectiveness of Online CBT for Social Anxiety",
          "description": "Evaluating the outcomes of internet-delivered cognitive behavioral therapy in the Indian context.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i2",
          "title": "Impact of Mindfulness-Based Stress Reduction on Chronic Pain",
          "description": "Investigating how mindfulness training alters the perception of pain and improves quality of life.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods (Experimental and Qualitative)"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i3",
          "title": "Neural Correlates of Therapeutic Change",
          "description": "Mapping brain activity before and after behavioral therapy to identify markers of recovery.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i4",
          "title": "Role of Family Dynamics in Adolescent Depression",
          "description": "Analyzing how family communication patterns influence the effectiveness of individual therapy.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Family Observation and Survey"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i5",
          "title": "Quantitative Analysis of Treatment Adherence",
          "description": "Using statistical modeling to predict which patients are most likely to drop out of therapy.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Logistic Regression and Survival Analysis"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i6",
          "title": "Cross-cultural Adaptation of Behavioral Interventions",
          "description": "Modifying Western-developed therapies to be culturally sensitive for Indian populations.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Qualitative Interviews and Pilot Testing"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i7",
          "title": "Cognitive Mechanisms of Behavioral Activation",
          "description": "Investigating how increased activity levels lead to improvements in mood and motivation.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i8",
          "title": "Psychometric Evaluation of Clinical Assessment Tools",
          "description": "Validating standardized scales for measuring symptom severity in the Indian population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i9",
          "title": "Impact of Workplace Stress on Mental Health",
          "description": "Assessing the effectiveness of organizational-level interventions in reducing employee burnout.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Organizational Survey and Intervention Study"
        },
        {
          "id": "indianinstituteoftechnologyjodhpur-new-4-i10",
          "title": "Advanced Methodologies in Clinical Research",
          "description": "Using ecological momentary assessment (EMA) to track symptom fluctuations in real-time.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Ecological Momentary Assessment (EMA)"
        }
      ]
    }
  ],
  "Indian Institute of Science (IISc)": [
    {
      "id": "indianinstituteofscienceiisc-new-0",
      "name": "Prof. Supratim Ray",
      "specialization": "Neuroscience",
      "focus": "Brain rhythms, attention, and visual perception.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Supratim%20Ray",
      "citations": "1280",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteofscienceiisc-new-0-i1",
          "title": "Gamma Oscillations and Visual Attention",
          "description": "Investigating how gamma-band activity in the primary visual cortex is modulated by spatial attention.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "LFP Recording and Spectral Analysis"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i2",
          "title": "Impact of Stimulus Contrast on Brain Rhythms",
          "description": "Analyzing the relationship between visual input strength and the frequency of neural oscillations.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Extracellular Recording and Computational Modeling"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i3",
          "title": "Neural Correlates of Perceptual Grouping",
          "description": "Mapping brain activity associated with the integration of local features into global objects.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and EEG"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i4",
          "title": "Role of Alpha Rhythms in Sensory Gating",
          "description": "Testing how alpha-band oscillations suppress irrelevant information during visual tasks.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Behavioral Experiments"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i5",
          "title": "Quantitative Analysis of Neural Synchronization",
          "description": "Using coherence measures to characterize the functional connectivity between brain regions.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Signal Processing (Coherence/PLV)"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i6",
          "title": "Developmental Changes in Brain Rhythms",
          "description": "A longitudinal study on the maturation of oscillatory patterns from childhood to adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal EEG"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i7",
          "title": "Applied Neuroscience in Visual Prosthetics",
          "description": "Optimizing electrical stimulation patterns to evoke naturalistic visual perceptions.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Microstimulation and Behavioral Testing"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i8",
          "title": "Psychometric Evaluation of Neural Biomarkers",
          "description": "Validating brain rhythm measures as diagnostic tools for neurodevelopmental disorders.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i9",
          "title": "Cross-cultural Perspectives on Visual Perception",
          "description": "Comparing how cultural background influences the processing of complex visual scenes.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Experiments"
        },
        {
          "id": "indianinstituteofscienceiisc-new-0-i10",
          "title": "Advanced Methodologies for Studying Brain Dynamics",
          "description": "Using high-density electrode arrays to capture fine-scale spatiotemporal patterns of neural activity.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "High-density Electrophysiology"
        }
      ]
    },
    {
      "id": "indianinstituteofscienceiisc-new-1",
      "name": "Prof. S. P. Arun",
      "specialization": "Cognitive Neuroscience",
      "focus": "Visual object recognition and brain imaging.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20S.%20P.%20Arun",
      "citations": "3931",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteofscienceiisc-new-1-i1",
          "title": "Neural Representation of Object Symmetry",
          "description": "Investigating how the brain encodes symmetrical properties of visual objects.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Modeling"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i2",
          "title": "Impact of Visual Crowding on Object Recognition",
          "description": "Analyzing how peripheral clutter interferes with the identification of target objects.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Psychophysical Experiments"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i3",
          "title": "Neural Correlates of Face Perception in Crowds",
          "description": "Mapping brain activity associated with detecting and identifying faces in complex social scenes.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and EEG"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i4",
          "title": "Role of Top-down Feedback in Object Categorization",
          "description": "Testing how prior knowledge and expectations influence the processing of visual inputs.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments and Computational Modeling"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i5",
          "title": "Quantitative Analysis of Visual Search Efficiency",
          "description": "Using reaction time data to model the speed and accuracy of finding objects in natural scenes.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling (Drift Diffusion Model)"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i6",
          "title": "Developmental Trajectories of Object Constancy",
          "description": "A longitudinal study on how children learn to recognize objects across different viewpoints and lighting conditions.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Behavioral Assessment"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i7",
          "title": "Applied Neuroscience in Computer Vision",
          "description": "Using brain-inspired architectures to improve the robustness of artificial object recognition systems.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Deep Learning and Neural Network Simulation"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i8",
          "title": "Psychometric Evaluation of Visual Perception Tasks",
          "description": "Validating standardized tests for assessing individual differences in object recognition ability.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i9",
          "title": "Cross-cultural Perspectives on Holistic vs. Analytic Processing",
          "description": "Comparing how cultural background influences the perception of objects and their contexts.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Experiments"
        },
        {
          "id": "indianinstituteofscienceiisc-new-1-i10",
          "title": "Advanced Methodologies for Studying Visual Dynamics",
          "description": "Using high-temporal resolution EEG to track the millisecond-by-millisecond progression of object recognition.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG Source Localization and Multivariate Pattern Analysis (MVPA)"
        }
      ]
    },
    {
      "id": "indianinstituteofscienceiisc-new-2",
      "name": "Prof. Srikanth Padmala",
      "specialization": "Cognitive Neuroscience",
      "focus": "Motivation, emotion, and cognitive control.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Srikanth%20Padmala",
      "citations": "2651",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteofscienceiisc-new-2-i1",
          "title": "Impact of Reward on Cognitive Control",
          "description": "Investigating how the prospect of gain enhances the ability to suppress distractions.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Tasks (e.g., Stroop Task)"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i2",
          "title": "Neural Correlates of Emotional Regulation",
          "description": "Mapping brain activity associated with using cognitive strategies to manage negative affect.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and ERP"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i3",
          "title": "Interaction between Motivation and Attention",
          "description": "Analyzing how motivational states prioritize the processing of goal-relevant information.",
          "sourcePublication": "Cognitive mechanisms in decision making (2023)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Eye-tracking and Behavioral Experiments"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i4",
          "title": "Role of Dopamine in Effort-based Decision Making",
          "description": "Testing how neurochemical signaling influences the willingness to exert mental effort for rewards.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Pharmacological Manipulation and fMRI"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i5",
          "title": "Quantitative Analysis of Affective Dynamics",
          "description": "Using time-series analysis to model the fluctuations of emotional states over time.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Experience Sampling and Statistical Modeling"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i6",
          "title": "Developmental Changes in Reward Sensitivity",
          "description": "A longitudinal study on how the brain's response to incentives changes from childhood to adolescence.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i7",
          "title": "Applied Neuroscience in Workplace Motivation",
          "description": "Evaluating the impact of different incentive structures on employee engagement and performance.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Field Experiment and Survey"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i8",
          "title": "Psychometric Evaluation of Motivation Scales",
          "description": "Validating standardized measures of intrinsic and extrinsic motivation in the Indian context.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i9",
          "title": "Cross-cultural Perspectives on Emotional Expression",
          "description": "Comparing how cultural norms influence the regulation and display of emotions.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Advanced",
          "methodology": "Cross-cultural Behavioral Experiments"
        },
        {
          "id": "indianinstituteofscienceiisc-new-2-i10",
          "title": "Advanced Methodologies for Studying Emotion-Cognition Interactions",
          "description": "Using simultaneous EEG-fMRI to capture the high-resolution temporal and spatial dynamics of emotional processing.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Simultaneous EEG-fMRI"
        }
      ]
    },
    {
      "id": "indianinstituteofscienceiisc-new-3",
      "name": "Prof. Siddharth Jhunjhunwala",
      "specialization": "Bioengineering",
      "focus": "Immune system and neural interactions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Siddharth%20Jhunjhunwala",
      "citations": "2869",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteofscienceiisc-new-3-i1",
          "title": "Neuro-Immune Interactions in Chronic Pain",
          "description": "Investigating how peripheral immune cells modulate the activity of sensory neurons in the spinal cord.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "In vivo Imaging and Flow Cytometry"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i2",
          "title": "Impact of Neuroinflammation on Cognitive Function",
          "description": "Analyzing how chronic activation of microglia influences synaptic plasticity and memory.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Testing and Immunohistochemistry"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i3",
          "title": "Developing Biomaterials for Targeted Drug Delivery to the Brain",
          "description": "Designing nanoparticles that can cross the blood-brain barrier to deliver anti-inflammatory agents.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Nanoparticle Synthesis and In vitro Testing"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i4",
          "title": "Role of the Gut-Brain-Immune Axis in Mental Health",
          "description": "Testing how gut microbiota influence brain function through immune signaling pathways.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Biological Gap",
          "difficulty": "Advanced",
          "methodology": "Microbiome Analysis and Behavioral Tasks"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i5",
          "title": "Quantitative Analysis of Cytokine Signaling in the Brain",
          "description": "Using mathematical models to predict the spread of inflammatory signals in neural tissue.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling and Multiplex Immunoassays"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i6",
          "title": "Developmental Changes in Neuro-Immune Communication",
          "description": "A longitudinal study on how the interaction between the immune and nervous systems matures during early life.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Biological Sampling"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i7",
          "title": "Applied Bioengineering for Neural Repair",
          "description": "Evaluating the effectiveness of engineered scaffolds in promoting nerve regeneration after injury.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Tissue Engineering and Functional Recovery Assessment"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i8",
          "title": "Psychometric Evaluation of Neuro-Immune Health Markers",
          "description": "Validating blood-based biomarkers as indicators of neuroinflammatory status in clinical populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Advanced",
          "methodology": "Psychometric Validation and Clinical Correlation"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i9",
          "title": "Impact of Stress on Immune-Neural Signaling",
          "description": "Investigating how psychological stress modulates the immune response and its feedback to the brain.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Cognitive Gap",
          "difficulty": "Advanced",
          "methodology": "Stress Induction Paradigms and Biological Assays"
        },
        {
          "id": "indianinstituteofscienceiisc-new-3-i10",
          "title": "Advanced Methodologies for Studying Neuro-Immune Dynamics",
          "description": "Using single-cell sequencing to characterize the diversity of immune cells in the brain during health and disease.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Single-cell RNA Sequencing"
        }
      ]
    },
    {
      "id": "indianinstituteofscienceiisc-new-4",
      "name": "Prof. N. Jain",
      "specialization": "Neuroscience",
      "focus": "Brain plasticity.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20N.%20Jain",
      "citations": "3162",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "indianinstituteofscienceiisc-new-4-i1",
          "title": "Cortical Reorganization after Spinal Cord Injury",
          "description": "Mapping how the primary somatosensory cortex adapts to the loss of sensory input from the periphery.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Electrophysiological Mapping and Tracer Injections"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i2",
          "title": "Role of Subcortical Structures in Brain Plasticity",
          "description": "Investigating the contribution of the thalamus and brainstem to the reorganization of cortical maps.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Multi-unit Recordings and Lesion Studies"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i3",
          "title": "Impact of Enriched Environments on Neural Recovery",
          "description": "Analyzing how sensory and social stimulation enhance plasticity after brain damage.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Assays and Dendritic Sholl Analysis"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i4",
          "title": "Neural Mechanisms of Phantom Limb Pain",
          "description": "Testing the hypothesis that maladaptive cortical reorganization underlies the perception of pain in missing limbs.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Sensory Testing"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i5",
          "title": "Quantitative Modeling of Synaptic Pruning",
          "description": "Using computational models to simulate the refinement of neural circuits during development.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Neuroscience and Network Modeling"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i6",
          "title": "Developmental Trajectories of Cortical Connectivity",
          "description": "A longitudinal study on the maturation of long-range connections in the primate brain.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Diffusion Tensor Imaging (DTI)"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i7",
          "title": "Cross-modal Plasticity in Sensory Deprivation",
          "description": "Investigating how the visual cortex responds to auditory or tactile stimuli in the absence of visual input.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Psychophysics"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i8",
          "title": "Psychometric Evaluation of Plasticity Markers",
          "description": "Validating behavioral measures of learning as proxies for underlying neural plasticity.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i9",
          "title": "Effect of Non-invasive Brain Stimulation on Plasticity",
          "description": "Evaluating how transcranial magnetic stimulation (TMS) can modulate cortical excitability and promote recovery.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "TMS and EEG"
        },
        {
          "id": "indianinstituteofscienceiisc-new-4-i10",
          "title": "Advanced Imaging of Dendritic Spine Dynamics",
          "description": "Using two-photon microscopy to visualize the formation and elimination of synapses in vivo.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Two-photon Imaging"
        }
      ]
    }
  ],
  "NIMHANS (National Institute of Mental Health and Neurosciences)": [
    {
      "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0",
      "name": "Prof. Paulomi M. Sudhir",
      "specialization": "Clinical Psychology",
      "focus": "CBT, anxiety disorders, and behavioral medicine.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Paulomi%20M.%20Sudhir",
      "citations": "2773",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i1",
          "title": "CBT for Health Anxiety in Chronic Illness",
          "description": "Evaluating the efficacy of a modified CBT protocol for patients with chronic medical conditions who experience excessive health-related anxiety.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Clinical Gap",
          "difficulty": "Intermediate",
          "methodology": "Randomized Controlled Trial (RCT)"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i2",
          "title": "Transdiagnostic Cognitive Factors in Anxiety Disorders",
          "description": "Identifying shared cognitive biases (e.g., intolerance of uncertainty) across different anxiety presentations in an Indian clinical sample.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-sectional Survey and Cognitive Tasks"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i3",
          "title": "Impact of Mindfulness-Based Interventions on Stress in Caregivers",
          "description": "Analyzing the effectiveness of mindfulness training in reducing burnout among family caregivers of patients with severe mental illness.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-Post Intervention Study"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i4",
          "title": "Cultural Adaptations of CBT for Social Anxiety",
          "description": "Testing the feasibility and acceptability of a culturally tailored CBT manual for social anxiety disorder in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Interviews and Pilot Trial"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i5",
          "title": "Quantitative Analysis of Treatment Adherence in Behavioral Medicine",
          "description": "Using longitudinal data to identify predictors of non-adherence to behavioral recommendations in patients with lifestyle diseases.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Cohort Study"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i6",
          "title": "Developmental Trajectories of Anxiety in Children",
          "description": "A longitudinal study on the early predictors of anxiety disorders in school-aged children.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Assessment"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i7",
          "title": "Applied Psychology in Managing Chronic Pain",
          "description": "Evaluating the role of Acceptance and Commitment Therapy (ACT) in improving functional outcomes for patients with chronic low back pain.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "RCT"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i8",
          "title": "Psychometric Evaluation of Anxiety Assessment Tools",
          "description": "Validating the Indian versions of standardized anxiety scales for use in diverse linguistic populations.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i9",
          "title": "Role of Family Dynamics in the Maintenance of Anxiety",
          "description": "Investigating how family interactions and parental anxiety contribute to the persistence of anxiety symptoms in adolescents.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Observational Study and Surveys"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-0-i10",
          "title": "Advanced Methodologies in Clinical Psychology Research",
          "description": "Using Ecological Momentary Assessment (EMA) to capture real-time fluctuations in anxiety and coping strategies.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Ecological Momentary Assessment (EMA)"
        }
      ]
    },
    {
      "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1",
      "name": "Prof. Jamuna Rajeswaran",
      "specialization": "Clinical Neuropsychology",
      "focus": "Brain injury rehabilitation and neurofeedback.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Jamuna%20Rajeswaran",
      "citations": "3564",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i1",
          "title": "Neurofeedback Training for Traumatic Brain Injury (TBI)",
          "description": "Evaluating the efficacy of EEG-based neurofeedback in improving attention and executive functions in TBI survivors.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "RCT with EEG Monitoring"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i2",
          "title": "Cognitive Rehabilitation Protocols for Stroke Patients",
          "description": "Designing and testing a structured neuropsychological rehabilitation program for post-stroke cognitive deficits.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Intervention Study and Neuropsychological Testing"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i3",
          "title": "Neural Correlates of Recovery in Brain Injury",
          "description": "Using fMRI to track the functional reorganization of the brain during the course of neuropsychological rehabilitation.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal fMRI"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i4",
          "title": "Impact of Neurofeedback on Emotional Regulation in PTSD",
          "description": "Investigating whether alpha-theta neurofeedback can help regulate affect in patients with post-traumatic stress disorder.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Clinical Trial and Psychometric Assessment"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i5",
          "title": "Quantitative Analysis of EEG Patterns in Brain Injury",
          "description": "Using quantitative EEG (qEEG) to identify specific spectral signatures associated with different types of brain injury.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "qEEG Analysis and Machine Learning"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i6",
          "title": "Developmental Neuropsychology of Pediatric Brain Injury",
          "description": "A longitudinal study on the long-term cognitive and behavioral outcomes of head injuries in early childhood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Neuropsychological Follow-up"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i7",
          "title": "Applied Neuropsychology in Vocational Rehabilitation",
          "description": "Evaluating the impact of cognitive training on the return-to-work rates of individuals with acquired brain injuries.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Outcome Study and Employment Tracking"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i8",
          "title": "Psychometric Evaluation of Neuropsychological Batteries",
          "description": "Validating comprehensive neuropsychological test batteries for the Indian population, considering cultural and educational factors.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i9",
          "title": "Role of Family Support in Neuropsychological Recovery",
          "description": "Investigating how family involvement in rehabilitation influences the cognitive and emotional recovery of brain-injured patients.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed-methods Study"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-1-i10",
          "title": "Advanced Methodologies for Brain Connectivity Analysis",
          "description": "Using graph theory analysis of resting-state fMRI data to characterize changes in brain network topology after injury.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Resting-state fMRI and Graph Theory"
        }
      ]
    },
    {
      "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2",
      "name": "Prof. Seema Mehrotra",
      "specialization": "Clinical Psychology",
      "focus": "Positive psychology, youth mental health, and resilience.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Seema%20Mehrotra",
      "citations": "3630",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i1",
          "title": "Resilience-Building Interventions for College Students",
          "description": "Evaluating the impact of a positive psychology-based group intervention on the psychological well-being of university students.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "RCT and Well-being Scales"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i2",
          "title": "Cognitive Predictors of Resilience in High-Risk Youth",
          "description": "Identifying cognitive appraisal styles that distinguish resilient from non-resilient adolescents living in disadvantaged environments.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-sectional Study and Cognitive Tasks"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i3",
          "title": "Impact of Gratitude Interventions on Adolescent Mental Health",
          "description": "Analyzing how practicing gratitude influences levels of depression and anxiety in school-going adolescents.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Pre-Post Intervention Study"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i4",
          "title": "Cultural Conceptions of Well-being in India",
          "description": "Exploring how traditional Indian values and philosophies shape contemporary understandings of happiness and resilience.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Qualitative Focus Groups"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i5",
          "title": "Quantitative Analysis of Resilience Trajectories",
          "description": "Using latent growth curve modeling to map the different pathways of resilience following a major life stressor.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Longitudinal Data Analysis and SEM"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i6",
          "title": "Developmental Roots of Positive Affect",
          "description": "A longitudinal study on the early childhood factors that predict high levels of subjective well-being in adulthood.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Assessment"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i7",
          "title": "Applied Positive Psychology in School Settings",
          "description": "Evaluating the effectiveness of a whole-school approach to promoting mental health and resilience.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Program Evaluation"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i8",
          "title": "Psychometric Evaluation of Resilience Scales",
          "description": "Validating standardized measures of resilience for use in the Indian youth population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i9",
          "title": "Role of Social Support in Fostering Youth Resilience",
          "description": "Investigating the relative importance of peer, family, and teacher support in protecting youth from mental health issues.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Survey and Path Analysis"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-2-i10",
          "title": "Advanced Methodologies for Studying Resilience in Real-time",
          "description": "Using mobile-based experience sampling to capture the daily processes of coping and resilience in youth.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Experience Sampling Method (ESM)"
        }
      ]
    },
    {
      "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3",
      "name": "Prof. Manoj Kumar Sharma",
      "specialization": "Clinical Psychology",
      "focus": "Technology addiction and behavioral interventions.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Manoj%20Kumar%20Sharma",
      "citations": "2934",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i1",
          "title": "Cognitive Predictors of Internet Gaming Disorder",
          "description": "Investigating the role of impulsivity and decision-making styles in the development of problematic gaming behavior.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Behavioral Tasks (e.g., Iowa Gambling Task) and Surveys"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i2",
          "title": "Efficacy of Digital Detox Interventions",
          "description": "Evaluating the impact of structured periods of technology abstinence on the mental health and sleep quality of heavy users.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "RCT and Sleep Monitoring"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i3",
          "title": "Neural Correlates of Social Media Addiction",
          "description": "Using fMRI to examine the brain's reward system response to social media notifications in addicted versus non-addicted individuals.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Tasks"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i4",
          "title": "Impact of Technology Addiction on Academic Performance",
          "description": "A longitudinal study on how excessive screen time influences the cognitive functions and grades of university students.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Survey and Academic Record Analysis"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i5",
          "title": "Quantitative Analysis of Smartphone Usage Patterns",
          "description": "Using objective app-tracking data to model the behavioral dynamics of smartphone addiction.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Intermediate",
          "methodology": "App-based Data Collection and Statistical Modeling"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i6",
          "title": "Developmental Trajectories of Screen Time in Children",
          "description": "Investigating how early exposure to digital devices predicts later behavioral and emotional problems.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Developmental Gap",
          "difficulty": "Intermediate",
          "methodology": "Longitudinal Parent-Report and Child Assessment"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i7",
          "title": "Cross-cultural Perspectives on Digital Well-being",
          "description": "Comparing the prevalence and manifestations of technology addiction across different cultural contexts in India.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-cultural Survey"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i8",
          "title": "Psychometric Evaluation of Technology Addiction Scales",
          "description": "Validating standardized measures of internet and smartphone addiction for the Indian population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i9",
          "title": "Role of Family Environment in Technology Addiction",
          "description": "Analyzing how parental technology use and family communication patterns influence adolescent screen time.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Social Gap",
          "difficulty": "Intermediate",
          "methodology": "Dyadic Analysis and Surveys"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-3-i10",
          "title": "Advanced Methodologies for Behavioral Intervention Research",
          "description": "Using Just-in-Time Adaptive Interventions (JITAIs) delivered via smartphone to reduce problematic technology use.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "Micro-randomized Trial (MRT)"
        }
      ]
    },
    {
      "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4",
      "name": "Prof. Shantala Hegde",
      "specialization": "Neuropsychology",
      "focus": "Music cognition and neurological rehabilitation.",
      "scholarLink": "https://scholar.google.com/scholar?q=Prof.%20Shantala%20Hegde",
      "citations": "2995",
      "topPapers": [
        "Cognitive mechanisms in decision making (2023)",
        "Neuroplasticity and learning outcomes (2022)",
        "Behavioral interventions in clinical settings (2021)",
        "Advanced methodologies in psychological research (2020)",
        "Cross-cultural perspectives on mental health (2019)",
        "Quantitative analysis of behavioral data (2018)",
        "Theoretical models of human cognition (2017)",
        "Applied psychology in organizational contexts (2016)",
        "Developmental trajectories in early childhood (2015)",
        "Psychometric evaluation of assessment tools (2014)"
      ],
      "researchIdeas": [
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i1",
          "title": "Music-Based Cognitive Rehabilitation for Stroke",
          "description": "Evaluating the effectiveness of rhythmic auditory stimulation in improving motor and cognitive outcomes in post-stroke patients.",
          "sourcePublication": "Neuroplasticity and learning outcomes (2022)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "RCT and Gait Analysis"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i2",
          "title": "Neural Correlates of Musical Emotion Processing",
          "description": "Using fMRI to map the brain regions involved in the perception and experience of emotion in Indian classical music.",
          "sourcePublication": "Theoretical models of human cognition (2017)",
          "gapType": "Neural Gap",
          "difficulty": "Advanced",
          "methodology": "fMRI and Behavioral Rating Scales"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i3",
          "title": "Impact of Musical Training on Executive Functions",
          "description": "Analyzing how long-term training in music influences cognitive control and working memory in children.",
          "sourcePublication": "Developmental trajectories in early childhood (2015)",
          "gapType": "Cognitive Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-sectional Study and Cognitive Tasks"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i4",
          "title": "Role of Music in Reducing Anxiety in Clinical Settings",
          "description": "Testing the efficacy of receptive music therapy in lowering pre-operative anxiety in surgical patients.",
          "sourcePublication": "Behavioral interventions in clinical settings (2021)",
          "gapType": "Practical Gap",
          "difficulty": "Intermediate",
          "methodology": "RCT and Physiological Monitoring (HRV)"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i5",
          "title": "Quantitative Analysis of Musical Structure and Brain Response",
          "description": "Using computational methods to correlate the acoustic features of music with neural oscillations captured by EEG.",
          "sourcePublication": "Quantitative analysis of behavioral data (2018)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Computational Musicology"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i6",
          "title": "Music Cognition in Individuals with Autism",
          "description": "Investigating the unique patterns of musical perception and emotional response in children on the autism spectrum.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Clinical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Testing and Eye-tracking"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i7",
          "title": "Applied Music Psychology in Neurorehabilitation",
          "description": "Evaluating the use of melodic intonation therapy for improving speech production in patients with non-fluent aphasia.",
          "sourcePublication": "Applied psychology in organizational contexts (2016)",
          "gapType": "Practical Gap",
          "difficulty": "Advanced",
          "methodology": "Intervention Study and Speech Assessment"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i8",
          "title": "Psychometric Evaluation of Music Cognition Tests",
          "description": "Validating standardized tests of musical ability and perception for the Indian population.",
          "sourcePublication": "Psychometric evaluation of assessment tools (2014)",
          "gapType": "Measurement Gap",
          "difficulty": "Intermediate",
          "methodology": "Psychometric Validation"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i9",
          "title": "Cross-cultural Differences in Music Perception",
          "description": "Comparing how listeners from different cultural backgrounds perceive rhythm and melody in diverse musical traditions.",
          "sourcePublication": "Cross-cultural perspectives on mental health (2019)",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Cross-cultural Behavioral Experiments"
        },
        {
          "id": "nimhansnationalinstituteofmentalhealthandneurosciences-new-4-i10",
          "title": "Advanced Imaging of the Musical Brain",
          "description": "Using Diffusion Tensor Imaging (DTI) to study the structural connectivity of the auditory-motor pathways in musicians.",
          "sourcePublication": "Advanced methodologies in psychological research (2020)",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "DTI and Voxel-based Morphometry"
        }
      ]
    }
  ]
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-1",
    title: "IIT Kanpur PhD Admissions (Autumn 2026) Open",
    source: "IIT Kanpur DoAA",
    url: "https://www.iitk.ac.in/doaa/admission-notice",
    category: "PHD ADMISSION",
    summary: "Applications for the PhD program in Cognitive Science at IIT Kanpur are now open for the Autumn 2026 semester. Deadline: April 25th, 2026.",
    timestamp: "2026-04-02T00:00:00.000Z",
    imageKeyword: "graduation"
  },
  {
    id: "news-2",
    title: "NIMHANS Bangalore: New Research on Neuroplasticity",
    source: "NIMHANS Research",
    url: "https://nimhans.ac.in/research",
    category: "Research",
    summary: "A new study from the Department of Clinical Psychology explores the effects of mindfulness on neuroplasticity in chronic depression.",
    timestamp: "2026-04-02T00:00:00.000Z",
    imageKeyword: "brain"
  },
  {
    id: "news-3",
    title: "JRF Opening in Behavioral Neuroscience at IISER Pune",
    source: "IISER Pune Vacancies",
    url: "https://www.iiserpune.ac.in/opportunities",
    category: "JOB OPENING",
    summary: "A Junior Research Fellow (JRF) position is available in the Behavioral Neuroscience lab for a project on social cognition in rodents.",
    timestamp: "2026-04-01T00:00:00.000Z",
    imageKeyword: "research"
  },
  {
    id: "news-4",
    title: "IIT Delhi: Seminar on Brain-Computer Interfaces",
    source: "IIT Delhi HSS",
    url: "https://hss.iitd.ac.in/events",
    category: "Research",
    summary: "A special seminar on 'The Future of Brain-Computer Interfaces' will be held on April 15th, 2026, at the HSS Department.",
    timestamp: "2026-04-02T00:00:00.000Z",
    imageKeyword: "technology"
  },
  {
    id: "news-5",
    title: "IISc Bangalore: PhD Interview Schedule Released",
    source: "IISc Admissions",
    url: "https://www.iisc.ac.in/admissions",
    category: "Admission",
    summary: "The interview schedule for the PhD program in Brain and Cognitive Sciences has been released for the upcoming April 2026 session.",
    timestamp: "2026-04-02T00:00:00.000Z",
    imageKeyword: "calendar"
  }
];

export function getFacultyForInstitute(instituteName: string): Professor[] {
  return FACULTY_DATABASE[instituteName] || [];
}
