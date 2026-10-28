import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'siaw',
    title: 'Smart Insurance Agent Workspace',
    tagline: 'Centralized sales enablement platform for insurance agents to track prospects, meetings, and follow-ups.',
    category: 'Web Development',
    categoryDisplay: 'Full-Stack Web Development',
    featured: true,
    priorityOrder: 1,
    status: 'Internship Project',
    statusType: 'internship',
    context: 'Developed during IT Support internship at PT Manulife, Agency Borobudur, Jakarta (July–August 2026).',
    description: 'Smart Insurance Agent Workspace (SIAW) is a web-based sales enablement platform designed to help insurance agents manage prospects, follow-ups, and meeting notes in a unified, centralized workspace.',
    technologies: ['React', 'TypeScript', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'JWT Auth', 'Tailwind CSS'],
    highlights: [
      'Comprehensive data models for users, prospects, activities, follow-ups, meeting notes, products, and WhatsApp templates.',
      'Organizes fragmented prospect interactions into a structured, status-driven sales pipeline.',
      'Designed to reduce missed follow-ups with scheduled reminders and activity history tracking.'
    ],
    architecture: {
      nodes: ['React + TypeScript SPA', 'Express.js REST API', 'Prisma ORM', 'PostgreSQL Database'],
      description: 'Client-server architecture with relational database schema modeling agent-prospect relationships, activity lifecycles, and notification triggers.'
    },
    details: {
      overview: 'During an IT Support internship at PT Manulife, Agency Borobudur, sales agents frequently managed prospect records, follow-up dates, and product proposals across disparate notes and messaging channels. SIAW was initiated to streamline and centralize these sales enablement activities into a responsive web application.',
      problem: 'Insurance agents deal with high-touch prospect pipelines where consistent follow-ups are critical. Without a structured workflow, agents risked losing track of client interest stages, meeting outcomes, and promised documentation.',
      objectives: [
        'Centralize prospect contact information and interaction histories in one accessible web portal.',
        'Implement structured stage transitions: New Lead → Contacted → Needs Analysis → Proposal Sent → Closing.',
        'Provide quick-action templates for messaging and schedule upcoming follow-up appointments.',
        'Ensure secure data isolation and role-aware access using authentication tokens.'
      ],
      myRole: 'Full-Stack Developer & IT Support Intern — Designed relational schemas in Prisma, engineered RESTful API endpoints with Express and TypeScript, and built the frontend interface in React.',
      architecture: 'The frontend interacts with an Express.js backend via authenticated JSON REST endpoints. Prisma ORM translates structured TypeScript types into PostgreSQL queries, ensuring type safety from database models through API payloads to UI components.',
      implementation: [
        'Designed relational schema spanning Users, Prospects, Activities, FollowUps, MeetingNotes, Products, and WhatsAppTemplates.',
        'Implemented JWT authentication with bcrypt password hashing and token expiration handling.',
        'Created prospect management views with multi-criteria filtering (status, priority, last contact date).',
        'Built dynamic meeting note logging allowing agents to attach actionable follow-up tasks immediately after client calls.'
      ],
      challengesAndLessons: [
        'Gained firsthand insight into enterprise sales workflows and the friction points faced by non-technical agents.',
        'Learned to optimize Prisma queries with relational joins to prevent N+1 query bottlenecks.',
        'Balanced comprehensive feature requirements against practical development timelines during a 2-month internship cycle.'
      ],
      currentStatus: 'Functional prototype developed during internship. The project serves as an internal operational proof-of-concept; production deployment status is managed within the agency ecosystem.',
      caveatOrNote: 'Visual preview illustrates the CRM dashboard workflow; all previewed agent data is mock data for demonstration.'
    }
  },
  {
    id: 'ai-review-detection',
    title: 'AI-Generated Indonesian Review Detection',
    tagline: 'NLP classification exploring the identification of machine-generated app reviews in Bahasa Indonesia.',
    category: 'AI / Machine Learning',
    categoryDisplay: 'Artificial Intelligence / NLP',
    featured: true,
    priorityOrder: 2,
    status: 'Experimental NLP Research',
    statusType: 'research',
    context: 'Machine learning coursework experiment on Bahasa Indonesia e-commerce / ride-hailing app reviews (Gojek dataset).',
    description: 'A text classification project exploring the detection of AI-generated Indonesian-language app reviews using natural language processing and machine learning models across classical and transformer architectures.',
    technologies: ['Python', 'XLM-RoBERTa', 'Hugging Face Transformers', 'PyTorch', 'scikit-learn', 'TF-IDF', 'Pandas'],
    metrics: [
      { label: 'XLM-RoBERTa Test Accuracy', value: '94%', subtext: 'Documented 150-row test split' },
      { label: 'Logistic Regression Baseline', value: '80%', subtext: 'TF-IDF baseline on test split' },
      { label: 'Documented Dataset Size', value: '1,000', subtext: '700 train / 150 val / 150 test' }
    ],
    highlights: [
      'Empirical evaluation of classical TF-IDF baseline vs. multilingual deep transformer representation (XLM-RoBERTa).',
      'Documented split of 1,000 Indonesian reviews: 700 training, 150 validation, and 150 test instances.',
      'Explored linguistic patterns, lexical repetition, and stylistic cues unique to synthetic Indonesian text.'
    ],
    architecture: {
      nodes: ['Indonesian Text Preprocessing', 'Subword Tokenization (SentencePiece)', 'Transformer Encoder (XLM-RoBERTa)', 'Classification Head', 'Softmax Probability'],
      description: 'Pipeline ingesting raw Indonesian reviews, tokenizing with pretrained multilingual vocabularies, fine-tuning classification representations, and computing prediction confidences.'
    },
    details: {
      overview: 'As generative language models become capable of synthesizing fluent text, app stores face challenges verifying the authenticity of product reviews. This project investigated whether machine-generated reviews in Bahasa Indonesia exhibit detectable structural differences compared to human-written customer feedback.',
      problem: 'Online reputation systems rely heavily on review authenticity. Automated bot campaigns can generate believable reviews at scale, skewing consumer trust. Detecting synthetic text in low-resource and vernacular languages like informal Bahasa Indonesia requires specialized evaluation.',
      objectives: [
        'Curate and structure a 1,000-instance Indonesian review corpus (700 train / 150 val / 150 test).',
        'Establish a baseline using TF-IDF feature extraction with Logistic Regression.',
        'Fine-tune XLM-RoBERTa and evaluate deep contextual representations on synthetic text nuances.',
        'Document empirical performance differences across model complexities.'
      ],
      myRole: 'ML Engineer & Researcher — Conducted text normalization, tokenization experiments, model fine-tuning with PyTorch and Hugging Face, and comparative evaluation against baseline metrics.',
      architecture: 'Text inputs undergo lowercase normalization and tokenization via XLM-RoBERTa subword encoding. Embeddings pass through 12 cross-attention transformer layers, whose pooled output feeds a dropout and linear classification head producing binary classification logits (Human vs. AI-Generated).',
      implementation: [
        'Processed Gojek app review samples and generated paired synthetic counterparts for evaluation.',
        'Trained TF-IDF vectorizer (ngram range 1-2, max 5,000 features) coupled with L2-regularized Logistic Regression.',
        'Fine-tuned XLM-RoBERTa base using AdamW optimizer with linear learning rate warmup and early stopping based on validation loss.',
        'Evaluated precision, recall, and test accuracy on the dedicated 150-sample holdout test partition.'
      ],
      challengesAndLessons: [
        'Informal Indonesian contains heavy slang, abbreviations, and code-mixing that challenge standard vocabularies.',
        'Observed that deep pretrained multilingual transformers capture subtle syntax coherence anomalies far better than n-gram frequency distributions.',
        'Emphasized rigorous separation of test partitions to avoid data leakage during fine-tuning.'
      ],
      currentStatus: 'Completed academic experiment. Results reflect the documented 150-row test dataset and demonstrate comparative model performance rather than generalized production claims across all domains.',
      caveatOrNote: 'Documented test accuracy: Logistic Regression 80%, XLM-RoBERTa 94% on the 150-row test partition.'
    }
  },
  {
    id: 'data-lakehouse',
    title: 'Big Data Data Lakehouse',
    tagline: 'Layered big data engineering pipeline implementing Bronze, Silver, and Gold lakehouse architecture.',
    category: 'Data Engineering',
    categoryDisplay: 'Data Engineering / Lakehouse',
    featured: true,
    priorityOrder: 3,
    status: 'Academic Big Data Pipeline',
    statusType: 'academic',
    context: 'Coursework and practical big data processing using Apache Spark and distributed lakehouse patterns.',
    description: 'A data engineering project implementing a multi-tiered data processing workflow following the medallion (Bronze, Silver, Gold) architecture to transform raw distributed data into analytics-ready datasets.',
    technologies: ['Python', 'Apache Spark / PySpark', 'ETL Pipelines', 'Data Lakehouse', 'Google Colab', 'Parquet'],
    highlights: [
      'Layered Medallion architecture separating ingestion, cleansing/standardization, and business aggregation.',
      'Distributed ETL data transformation routines implemented in PySpark.',
      'Ensures data quality progression from immutable raw logs to curated analytic tables.'
    ],
    architecture: {
      nodes: ['Raw Ingestion', 'Bronze Layer (Raw Storage)', 'Silver Layer (Cleaned & Schema Validated)', 'Gold Layer (Aggregated KPIs)', 'Analytics & Dashboards'],
      description: 'Progressive transformation pipeline ensuring raw preservation, schema validation, and optimized columnar query performance.'
    },
    details: {
      overview: 'Traditional data warehouses and unstructured data lakes both face trade-offs between schema rigidity and data reliability. This project explored implementing a Data Lakehouse architecture using PySpark, demonstrating how raw data evolves into trusted analytical data through systematic stage boundaries.',
      problem: 'Raw data is often noisy, inconsistent, and burdened with duplicate records or corrupt schema variations. Processing analytics directly on raw data leads to slow queries, query failures, and contradictory business metrics.',
      objectives: [
        'Ingest varied raw datasets into an append-only Bronze landing zone without destructive preprocessing.',
        'Implement Silver-layer ETL pipelines that clean nulls, deduplicate records, and enforce strict type schemas.',
        'Synthesize Gold-layer aggregations optimized for fast BI reporting and downstream consumption.',
        'Utilize Apache Spark distributed operations for scalable parallel computation.'
      ],
      myRole: 'Data Engineering Student — Built PySpark transformation scripts, defined data cleansing criteria, structured partitioned outputs, and validated schema integrity across layers.',
      architecture: 'Raw files land in Bronze storage retaining source fidelity. Spark jobs read Bronze files, apply data quality filters, casting, and deduplication into Silver Parquet format. Subsequent aggregations compute key business metrics and output Gold tables partitioned for analytical queries.',
      implementation: [
        'Constructed ingestion notebooks running on PySpark within Google Colab environments.',
        'Applied column transformations, datetime standardizations, and null imputations during the Silver pass.',
        'Engineered Gold summarization scripts generating group-by aggregates and windowed statistics.',
        'Analyzed Spark execution DAGs to avoid unnecessary shuffles and costly full table scans.'
      ],
      challengesAndLessons: [
        'Understood the distinction between batch landing and curated query layers in modern data platforms.',
        'Learned how columnar file formats (Parquet) accelerate analytical scan times compared to plain text CSVs.',
        'Gained practical experience with Spark DataFrame API operations and partition pruning.'
      ],
      currentStatus: 'Completed coursework project with verifiable repository references; reflects educational scale big data workflows.',
      caveatOrNote: 'Architecture modeled after the reference Big-Data-Data-Lakehouse repository; processes academic datasets without production cluster orchestration.'
    }
  },
  {
    id: 'weatherpulse',
    title: 'WeatherPulse',
    tagline: 'Multi-city meteorological monitoring application with automated periodic REST API data collection.',
    category: 'Data Engineering',
    categoryDisplay: 'Data Applications / Engineering',
    featured: true,
    priorityOrder: 4,
    status: 'Big Data Coursework Project',
    statusType: 'academic',
    context: 'Big Data coursework project focused on periodic weather data collection and visualization.',
    description: 'WeatherPulse is a Big Data coursework project focused on collecting, storing, and visualizing weather metrics across six monitored cities using periodic REST API ingestion and trend analysis.',
    technologies: ['Python', 'Open-Meteo API', 'REST API Ingestion', 'Data Processing', 'Pandas', 'JSON ETL'],
    highlights: [
      'Automated data ingestion polling meteorological data every ~10 minutes from Open-Meteo REST endpoints.',
      'Monitors six distinct cities with metrics covering temperature, humidity, wind velocity, and condition trends.',
      'Stores time-series records for comparative historical queries and visualization.'
    ],
    architecture: {
      nodes: ['Open-Meteo REST API', 'Periodic Scheduler (~10m)', 'Ingestion Worker (Python)', 'Time-Series Store', 'Monitoring Interface'],
      description: 'Scheduled Python worker periodically polling multi-city coordinates, parsing JSON responses, appending structured metrics, and powering dashboard trend panels.'
    },
    details: {
      overview: 'Weather monitoring systems require consistent time-series data collection to identify microclimate patterns and temperature shifts. WeatherPulse was developed as a coursework project to demonstrate how periodic automated API collectors capture and maintain reliable time-series records.',
      problem: 'Public meteorological APIs provide dynamic weather updates, but raw point-in-time responses are ephemeral. Without scheduled ingestion, historical pattern analysis across multiple geographic points is not feasible.',
      objectives: [
        'Establish scheduled polling routines querying Open-Meteo API endpoints at regular ~10-minute intervals.',
        'Track six designated city locations simultaneously without exceeding rate limits or encountering polling drift.',
        'Parse unstructured JSON payloads into clean, queryable tabular schemas.',
        'Enable visual comparisons across ambient temperature, humidity levels, and wind dynamics.'
      ],
      myRole: 'Developer — Designed the Python API polling routines, configured interval schedules, managed JSON schema normalization, and built visualization components.',
      architecture: 'A scheduled Python service issues asynchronous HTTP GET requests to Open-Meteo endpoints for six coordinate pairs. Payloads are validated against expected schemas, enriched with local timestamps, and persisted to structured tabular files for dashboard consumption.',
      implementation: [
        'Implemented HTTP polling routines with graceful error retry mechanisms for network hiccups.',
        'Extracted core metrics: 2-meter air temperature, relative humidity, wind speed, surface pressure, and weather codes.',
        'Standardized timestamps to UTC+7 (WIB) for Indonesian regional consistency.',
        'Generated interactive exploratory visualization charts mapping multi-city temperature fluctuations over time.'
      ],
      challengesAndLessons: [
        'Handled API request timeouts and partial responses to prevent data pipeline interruptions.',
        'Learned time-series data handling best practices, including timezone normalization and gap detection.',
        'Explored lightweight data persistence strategies suitable for academic monitoring scopes.'
      ],
      currentStatus: 'Completed academic project. Weather values shown in the portfolio preview are representative illustrative samples demonstrating system visualization capabilities.',
      caveatOrNote: 'Dashboard preview uses illustrative sample data representing the 6 monitored cities (Surabaya, Jakarta, Bandung, Yogyakarta, Semarang, Malang).'
    }
  },
  {
    id: 'rsa-verification',
    title: 'RSA Secure Update Verification',
    tagline: 'First-principles cryptographic implementation of RSA mathematics and digital signature verification.',
    category: 'Cybersecurity',
    categoryDisplay: 'Cybersecurity / Cryptography',
    featured: true,
    priorityOrder: 5,
    status: 'Educational Cryptography Implementation',
    statusType: 'academic',
    context: 'Developed for Cryptography coursework, exploring digital signatures for secure software update verification.',
    description: 'A cryptography project implementing the fundamental mathematical algorithms of RSA from scratch in Python to explore digital signatures, message integrity, and public-key authenticity for software update packages.',
    technologies: ['Python', 'Number Theory', 'Miller-Rabin Primality', 'Extended Euclidean', 'Digital Signatures', 'unittest'],
    highlights: [
      'Implemented from first principles: GCD, Extended Euclidean Algorithm, modular inverse, and modular exponentiation.',
      'Probabilistic prime generation using Miller-Rabin primality testing.',
      'Rigorous verification suite built with Python unittest validating signing and tampering detection.'
    ],
    architecture: {
      nodes: ['Software Package / Payload', 'Cryptographic Digest', 'RSA Private Key Signing', 'Public Key Distribution', 'Modular Verification', 'Integrity Verdict (Valid/Tampered)'],
      description: 'Mathematical signing and verification flow demonstrating asymmetric cryptography principles without reliance on black-box high-level cryptography libraries.'
    },
    details: {
      overview: 'Rather than calling pre-packaged cryptographic functions, this project was developed to deeply understand the exact number-theoretic foundations that underpin modern asymmetric public-key cryptography and code-signing systems.',
      problem: 'When software updates are distributed over untrusted networks, users need mathematical proof that the binary was created by the authentic author and has not been altered or backdoored in transit. Understanding how digital signatures guarantee integrity requires studying the core mathematics of RSA.',
      objectives: [
        'Implement core number-theoretic algorithms: Greatest Common Divisor, Extended Euclidean Algorithm, modular inverse.',
        'Build large prime generation utilizing the Miller-Rabin probabilistic primality test.',
        'Generate mathematically valid RSA keypairs (public exponent e, private exponent d, modulus n).',
        'Demonstrate digital signature creation and verification under the RSA mathematical model.',
        'Write automated unit tests verifying that altered payload bits produce verification failures.'
      ],
      myRole: 'Student Developer — Implemented the mathematical algorithms from scratch in pure Python and engineered unit test suites to validate cryptographic edge cases.',
      architecture: 'Key generation selects two random candidate primes p and q, tests primality via multiple Miller-Rabin rounds, calculates modulus n = p * q and Euler totient φ(n), derives private key d using the Extended Euclidean Algorithm, and verifies signatures via modular exponentiation (s^e mod n == m).',
      implementation: [
        'Programmed recursive and iterative Extended Euclidean Algorithms to compute Bezout coefficients.',
        'Engineered Miller-Rabin primality testing with configurable witness rounds for high confidence.',
        'Implemented fast modular exponentiation (binary exponentiation) to handle large integer powers efficiently.',
        'Constructed test suites in Python unittest verifying key generation, sign/verify loops, and bit-flip tamper rejection.'
      ],
      challengesAndLessons: [
        'Deepened understanding of prime density and probabilistic algorithms in computational number theory.',
        'Recognized that educational first-principles RSA lacks critical production defenses such as OAEP/PSS padding, side-channel attack mitigations, and timing protections.',
        'Appreciated why production code-signing systems rely on vetted industrial cryptographic libraries while validating foundational math through first principles.'
      ],
      currentStatus: 'Completed academic project with automated unit tests.',
      caveatOrNote: 'Educational implementation demonstrating RSA mathematical foundations. Real production code signing requires standardized padding schemes (PKCS#1 / PSS), secure hardware key storage, and trusted certificate authorities.'
    }
  },
  {
    id: 'traffic-light-iot',
    title: 'Traffic Light Simulation with Train Priority',
    tagline: 'IoT simulation of a 3-way intersection with interrupt-driven train priority logic and DC fan control.',
    category: 'IoT / Systems',
    categoryDisplay: 'IoT / Embedded Systems',
    featured: false,
    priorityOrder: 6,
    status: 'Practicum Simulation',
    statusType: 'simulation',
    context: 'IoT practicum project utilizing Tinkercad circuit simulation and Arduino microcontrollers.',
    description: 'An IoT practicum project simulating a three-way traffic intersection with normal sequential traffic-light operation, emergency train-passing priority override logic, and a DC motor representing a tunnel ventilation fan.',
    technologies: ['Arduino C/C++', 'Tinkercad Circuits', 'Embedded Logic', 'State Machines', 'Sensors & Actuators'],
    highlights: [
      'State-machine driven 3-way traffic light sequencing with 3-second cycle intervals.',
      'Interrupt/priority logic instantly switching lights to red for vehicles when train arrival is signaled.',
      'Integrated DC motor behavior dynamically modulating ventilation airflow based on traffic state transitions.'
    ],
    architecture: {
      nodes: ['Sensor/Button Input (Train Signal)', 'Arduino Microcontroller Logic', 'Traffic Light LED Matrix', 'DC Motor Driver (Fan Control)'],
      description: 'Microcontroller simulation executing cyclic timing states and priority interrupt routines.'
    },
    details: {
      overview: 'Urban traffic junctions adjacent to railroad crossings face acute congestion and safety challenges. This simulation was built in Tinkercad to explore microcontroller-based state machines capable of interrupting standard cyclic light cycles when a train crosses.',
      problem: 'At level crossings, failure to synchronize vehicle signals with approaching trains causes severe hazards. In addition, enclosed or underground intersection areas require adaptive ventilation based on vehicle idling status.',
      objectives: [
        'Design a 3-way intersection schematic in Tinkercad with red/yellow/green LED indicators.',
        'Program non-blocking timing routines governing normal 3-second light phases.',
        'Implement override priority logic when a train sensor triggers.',
        'Drive a DC motor acting as an environmental ventilation fan synchronized with operational states.'
      ],
      myRole: 'IoT Practicum Student — Designed the circuit schematic in Tinkercad, wrote the Arduino C++ state machine, and verified priority logic timing.',
      architecture: 'An Arduino MCU executes a non-blocking main loop tracking elapsed time via millis(). When the simulated train input is asserted, the normal state counter is suspended, driving road LEDs to protective red while activating warning sequences and increasing fan motor duty cycles.',
      implementation: [
        'Mapped input and output digital pins to RGB LED arrays representing three traffic lanes.',
        'Configured timer-based state transitions without using blocking delay() calls.',
        'Integrated transistor-driven DC motor circuit to simulate active ventilation under high congestion.',
        'Validated train override sequence ensuring vehicle signals clear safely before train clearance.'
      ],
      challengesAndLessons: [
        'Learned to manage state machine transitions without race conditions or unresponsive delays.',
        'Gained hands-on familiarity with embedded electronic components: pull-down resistors, transistors, and diode protections.',
        'Understood the safety-critical constraints of transport automation systems.'
      ],
      currentStatus: 'Completed practicum circuit simulation in Tinkercad; strictly an academic prototype.',
      caveatOrNote: 'Simulation project in Tinkercad; not a deployment on physical city transit infrastructure.'
    }
  },
  {
    id: 'cloudsim-scheduling',
    title: 'CloudSim Task Scheduling & Load Balancing',
    tagline: 'Academic simulation analyzing cloudlet scheduling and resource allocation behavior in CloudSim 4.0.',
    category: 'IoT / Systems',
    categoryDisplay: 'Cloud Computing / Systems',
    featured: false,
    priorityOrder: 7,
    status: 'Cloud Systems Practicum',
    statusType: 'academic',
    context: 'Cloud computing practicum exploring virtual machine provisioning and task distribution.',
    description: 'A cloud computing practicum project exploring task scheduling and load-balancing behavior across simulated data centers, hosts, and virtual machines using CloudSim 4.0.',
    technologies: ['Java', 'CloudSim 4.0', 'Distributed Simulation', 'Task Scheduling', 'Load Balancing'],
    highlights: [
      'Simulated multi-host data center topologies with heterogeneous processing cores (MIPS) and memory.',
      'Evaluated cloudlet allocation policies and execution queuing under fluctuating workloads.',
      'Observed resource contention and virtual machine utilization dynamics.'
    ],
    architecture: {
      nodes: ['DataCenter Broker', 'Cloudlet Queue', 'VM Allocation Policy', 'Virtual Machine Instances', 'Host Hardware Cores'],
      description: 'Hierarchical simulation framework modeling cloud infrastructure layers from physical silicon to virtual execution units.'
    },
    details: {
      overview: 'In large-scale cloud infrastructure, efficient task scheduling minimizes makespan and maximizes hardware utilization without incurring excessive energy overhead. This practicum investigated how CloudSim 4.0 models these distributed dynamics.',
      problem: 'Testing scheduling algorithms on physical cloud clusters is expensive and difficult to reproduce under identical workloads. Discrete-event simulation offers a controlled environment to benchmark scheduling policies.',
      objectives: [
        'Construct a simulated DataCenter comprising heterogeneous Host servers and VM configurations.',
        'Submit batches of Cloudlets (computational tasks) with varying instruction lengths.',
        'Observe scheduling behavior and execution queuing across available virtual processors.',
        'Analyze system makespan and workload distribution across simulated resources.'
      ],
      myRole: 'Practicum Student — Configured CloudSim entities, defined cloudlet workloads, executed simulation runs, and analyzed execution logs.',
      architecture: 'CloudSim 4.0 models discrete events: DataCenter Brokers map tasks to VMs based on defined scheduling policies (Time-Shared or Space-Shared), while VM Schedulers allocate host processing elements (PEs) across virtual machines.',
      implementation: [
        'Configured Java classes defining Datacenter characteristics (RAM, bandwidth, storage, MIPS rating).',
        'Created VM profiles and configured Cloudlet lists with varying input/output file sizes and instruction counts.',
        'Monitored broker lifecycle events from creation through task completion.',
        'Logged start times, finish times, and execution status for each simulated cloudlet.'
      ],
      challengesAndLessons: [
        'Understood discrete-event simulation mechanics in distributed systems.',
        'Learned how scheduling policies directly impact resource starvation and overall execution time.',
        'Recognized the importance of matching workload characteristics to VM capacity.'
      ],
      currentStatus: 'Completed academic systems experiment. Metrics reflect simulated execution environments.',
      caveatOrNote: 'Academic simulation using CloudSim 4.0; specific numeric makespan figures depend on user-configured simulated parameters.'
    }
  },
  {
    id: 'grpc-chat',
    title: 'Full-Stack gRPC Chat System',
    tagline: 'High-performance inter-process and client-server messaging system combining gRPC and WebSockets.',
    category: 'Web Development',
    categoryDisplay: 'Distributed Systems / Networking',
    featured: false,
    priorityOrder: 8,
    status: 'Networking Practicum',
    statusType: 'academic',
    context: 'Communication system project exploring client-server messaging protocols and duplex streams.',
    description: 'A distributed communication project exploring client-server messaging architecture with a high-performance gRPC backend service on port 50051 and a WebSocket gateway on port 8765.',
    technologies: ['Python / Node', 'gRPC', 'Protocol Buffers', 'WebSockets', 'AsyncIO', 'Client-Server Architecture'],
    highlights: [
      'gRPC service listening on port 50051 for structured, low-latency binary message transport.',
      'WebSocket bridge on ws://localhost:8765 facilitating bi-directional browser client communication.',
      'Protocol Buffers defining strongly typed message schemas for chat packets and acknowledgments.'
    ],
    architecture: {
      nodes: ['Browser Client', 'WebSocket (ws://localhost:8765)', 'Message Gateway', 'gRPC Service (Port 50051)', 'Message Dispatcher'],
      description: 'Hybrid protocol architecture bridging web client WebSocket connections with backend gRPC remote procedure calls.'
    },
    details: {
      overview: 'While HTTP REST works well for transactional data, real-time messaging requires low-latency, full-duplex communication. This project implemented a proof-of-concept chat architecture exploring Protocol Buffers, gRPC RPCs, and WebSocket bridging.',
      problem: 'Modern web browsers cannot natively initiate raw HTTP/2 gRPC TCP connections directly without an intermediary bridge. Integrating web clients with backend microservices requires efficient protocol bridging.',
      objectives: [
        'Define clear message contracts using Protocol Buffers (.proto specifications).',
        'Implement a gRPC server bound to port 50051 handling message dispatch.',
        'Expose a WebSocket endpoint at ws://localhost:8765 to support browser clients.',
        'Ensure real-time message broadcast to all connected client sessions.'
      ],
      myRole: 'Developer — Defined .proto service schemas, implemented the gRPC server handlers, and built the WebSocket communication loop.',
      architecture: 'Client connections connect via WebSockets to a local proxy worker. Incoming messages are serialized into Protobuf structures and dispatched to the gRPC service running on port 50051, which routes messages back through active streaming channels to recipient listeners.',
      implementation: [
        'Authored proto definitions for ChatMessage, UserSession, and BroadcastStream.',
        'Generated language-specific stubs for client and server bindings.',
        'Constructed asynchronous WebSocket server managing connection pools and disconnect cleanups.',
        'Tested duplex streaming loops under local concurrent simulated clients.'
      ],
      challengesAndLessons: [
        'Mastered Protobuf schema versioning and serialization mechanics.',
        'Gained insight into binary wire protocols compared to standard JSON over HTTP.',
        'Handled connection dropouts and socket reconnection gracefully in local development environments.'
      ],
      currentStatus: 'Local development and academic networking implementation; not deployed to public infrastructure.',
      caveatOrNote: 'Documented local environment: gRPC on port 50051 and WebSocket at ws://localhost:8765.'
    }
  },
  {
    id: 'customer-billing-analytics',
    title: 'Customer Billing Analytics',
    tagline: 'Predictive churn and billing analysis on the Golden Dragon Telecom dataset using gradient boosting.',
    category: 'AI / Machine Learning',
    categoryDisplay: 'Data Science / Machine Learning',
    featured: false,
    priorityOrder: 9,
    status: 'Data Science Experiment',
    statusType: 'academic',
    context: 'Machine learning coursework experiment utilizing the Golden Dragon Telecom billing dataset.',
    description: 'A customer billing analysis and machine learning experiment using the Golden Dragon Telecom dataset to evaluate predictive models for customer churn and revenue leakage using CatBoost and LightGBM with KFold cross-validation.',
    technologies: ['Python', 'CatBoost', 'LightGBM', 'scikit-learn', 'KFold Cross-Validation', 'Pandas', 'Seaborn'],
    highlights: [
      'Comparative evaluation of gradient boosting algorithms (CatBoost vs. LightGBM) on tabular telecom billing data.',
      'KFold cross-validation strategy ensuring stable evaluation across heterogeneous customer segments.',
      'Exploratory data analysis identifying billing anomalies and correlation with customer tenure.'
    ],
    architecture: {
      nodes: ['Telecom Billing Dataset', 'Feature Engineering & Imputation', 'KFold Cross-Validation Splits', 'CatBoost & LightGBM Training', 'Evaluation & Feature Ranking'],
      description: 'End-to-end tabular machine learning pipeline from raw billing records to cross-validated model evaluation.'
    },
    details: {
      overview: 'Telecom enterprises manage vast volumes of recurring billing and call usage records. Understanding customer churn triggers requires systematic exploratory analysis and predictive modeling on tabular features.',
      problem: 'Customer churn directly impacts recurring telecom revenue. Identifying at-risk customers prior to churn requires detecting subtle payment fluctuations, service usage dips, and billing complaints.',
      objectives: [
        'Clean and preprocess tabular attributes from the Golden Dragon Telecom dataset.',
        'Handle categorical variables and skewed billing amounts using robust feature encoders.',
        'Train CatBoost and LightGBM classifiers with stratified KFold validation.',
        'Evaluate comparative model robustness and identify dominant predictive features.'
      ],
      myRole: 'Data Science Student — Conducted exploratory data analysis, engineered feature transformations, tuned boosting parameters, and analyzed validation metrics.',
      architecture: 'Data is partitioned across K-folds. In each split, categorical columns are handled via CatBoost native target encodings and LightGBM categorical bins. Models minimize log-loss and optimize area under the ROC curve (ROC-AUC).',
      implementation: [
        'Performed EDA on customer tenure, contract types, payment methods, and monthly charges.',
        'Engineered interaction features combining monthly bill ratios and tenure duration.',
        'Trained CatBoostClassifier with categorical feature indices specified.',
        'Validated cross-fold consistency to prevent overfitting on specific customer cohorts.'
      ],
      challengesAndLessons: [
        'Observed how CatBoost efficiently processes high-cardinality categorical attributes without manual one-hot blowup.',
        'Learned to interpret feature importance rankings to extract actionable domain insights.',
        'Gained appreciation for KFold cross-validation in avoiding over-optimistic evaluation metrics.'
      ],
      currentStatus: 'Completed academic machine learning notebook experiment.',
      caveatOrNote: 'Experiment conducted on the Golden Dragon Telecom academic dataset; models evaluate tabular patterns rather than real-time billing production systems.'
    }
  }
];
