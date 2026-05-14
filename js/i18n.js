/* ========== i18n Translation System ========== */
const i18n = {
  zh: {
    'nav.home': '首页',
    'nav.publications': '论文',
    'nav.research': '研究',
    'nav.achievements': '成果',
    'nav.about': '履历',
    'nav.brand': '个人主页',
    'lang.switch': 'EN',
    'home.name': '李佳津',
    'home.title': '医学人工智能 · 硕士研究生',
    'home.intro.title': '个人简介',
    'home.intro.text':
      '研究方向为深度学习在光学和医学图像方面的应用。以第一或共一作者在Laser & Photonics Reviews（JCRQ1，IF: 10）、Measurement（JCRQ1，IF: 5.6）、Advanced Intelligent Systems（JCRQ1，IF: 6.1）发表期刊论文3篇，参与发表论文2篇；在IEEE IUS等超声领域顶级会议发表会议论文3篇，并获得组委会学生旅行补助；完成国内外学术会议口头报告5次、壁报交流2次；参与省部级科研基金3项；在全国大学生生物医学工程创新设计竞赛中获国赛一等奖2项、二等奖1项，作品聚焦面向ICSI的精子实时智能分析系统，完成从算法研究到系统集成的转化，并已获批1项国家发明专利与5项软件著作权。',
    'home.research.title': '研究方向',
    'home.research.text':
      '计算机视觉 · 图像分割 · 多目标追踪 · 超分辨重构 · 超声平面波重建',
    'home.news.title': '最新动态',
    'home.news.item1':
      'DP-HAFNet论文已被Measurement (中科院二区Top, IF=5.6) 接收',
    'home.news.item2':
      'MTCA-Net论文被Advanced Intelligent Systems (IF=6.1, 中科院二区) 接收',
    'home.news.item3':
      'HOPE-Net论文投稿至IEEE JBHI (中科院一区, IF=6.8)，审稿中',
    'home.news.item4':
      '获第十届全国大学生生物医学工程创新设计竞赛国赛一等奖',
    'home.education.msc.date': '2023.09 — 至今',
    'home.education.msc': '安徽医科大学 · 生物医学工程（硕士）',
    'home.education.msc.desc': '生物医学工程学院 · 电子信息方向（医学人工智能）',
    'home.education.bsc': '曲阜师范大学 · 计算机科学与技术（本科）',
    'home.education.bsc.desc': '计算机学院',
    'home.contact.email': '邮箱：',
    'home.contact.phone': '电话：',
    'home.basic.info': '籍贯：山东省烟台市 · 汉族',
    'home.basic.age': '年龄：26岁 · 硕士在读',
    'home.tag.seg': '图像分割',
    'home.tag.det': '目标检测',
    'home.tag.track': '多目标追踪',
    'home.tag.sr': '超分辨重构',
    'home.tag.us': '超声平面波重建',
    'pub.title': '学术论文',
    'pub.subtitle': '5篇已接收 · 2篇返修中',
    'pub.filter.all': '全部',
    'pub.filter.published': '已接收',
    'pub.filter.revision': '返修中',
    'pub.filter.conference': '会议论文',
    'pub.badge.q1top': '中科院一区Top',
    'pub.badge.q2': '中科院二区',
    'pub.badge.q2top': '中科院二区Top',
    'pub.badge.q1': '中科院一区',
    'pub.badge.jcr_q1': 'JCR Q1',
    'pub.badge.oral': '口头汇报',
    'research.title': '研究项目',
    'research.subtitle': '深度学习在医学图像处理中的应用',
    'research.nav.sperm': '精子分析',
    'research.nav.fpm': 'FPM成像',
    'research.nav.ultrasound': '超声重建',
    'research.nav.photoacoustic': '光声成像',
    'research.label.background': '背景：',
    'research.label.dataset': '数据集：',
    'research.label.method': '方法：',
    'research.label.deploy': '应用落地：',
    'research.label.result': '结果：',
    'research.label.pain1': '痛点一：',
    'research.label.pain2': '痛点二：',
    'research.label.solution': '解决方案：',
    'research.label.contribution': '预期贡献：',
    'research.sperm.heading': '研究内容一：基于深度学习的实时精子质量评估',
    'research.mtca.title': 'MTCA-Net：多任务级联分析网络',
    'research.mtca.background': '不孕不育影响全球1.86亿人，男性因素占20%-70%。临床上普遍采用人类卵胞质内单精子注射（ICSI），需人工挑选单个活精子注入卵母细胞完成受精，该精子质量直接影响临床种植率和婴儿出生率。传统手工精子分析效率低、主观性强。',
    'research.mtca.dataset': '与安徽医科大学第一附属医院生殖中心合作，在60倍水浸物镜下拍摄精子图像，共形成3166个分割样本和397个检测样本，用于网络训练和测试。训练环境：NVIDIA RTX 3090。',
    'research.mtca.method': '提出多任务级联分析网络（MTCA-Net），将目标检测、实例分割、运动追踪等任务统一到端到端框架中。在1920×1200分辨率下实现94 FPS实时精子追踪与分割，51 FPS联合分析，可同时量化评估精子活力与形态学参数。',
    'research.mtca.deploy': '将MTCA-Net算法封装为软件，与奥林巴斯显微镜集成，构建可准确量化精子活力与形态学参数的计算显微系统。',
    'research.hope.title': 'HOPE-Net：Mamba引导的混合全感知增强网络',
    'research.hope.background': '临床场景中杂质较多且形态与精子相似，传统CNN感受野局限于局部区域，Transformer虽能建模全局依赖但计算复杂度高，难以在实时性要求下部署。',
    'research.hope.method': '设计了Mamba引导的ShuffleNet（MGS-Net）为主干网络，混合状态空间路径聚合网络（HSS-PAN）为颈部网络。HOPE-Net能够同时兼顾局部细节特征与全局上下文信息，通过选择性扫描机制自适应地聚焦于关键区域，在复杂临床场景中实现鲁棒的精子检测。',
    'research.fpm.heading': '研究内容二：基于小波变换和线性注意力的快速高保真傅里叶叠层显微成像',
    'research.wmfp.title': 'WM-FPM：小波变换与线性注意力结合的生成对抗架构',
    'research.wmfp.background': '傅里叶叠层显微成像（FPM）可实现大视场高分辨率成像，突破物镜数值孔径与空间带宽积的限制。但传统迭代FPM重建算法（如基于平移照明的相位恢复算法）速度极慢，难以实时应用。',
    'research.wmfp.method': '提出结合小波变换和线性注意力机制的生成对抗架构（WM-FPM）。将图像分解到小波域进行处理，利用线性注意力降低长距离依赖的计算复杂度，在保证重建质量的同时大幅提升推理速度。',
    'research.wmfp.result': '对于单张1.51亿像素图像，WM-FPM重建时间仅需5.63秒，相比传统迭代算法提速超100倍且无需牺牲重建保真度。该方法在低光剂量条件下同样表现优异。',
    'research.ultrasound.heading': '研究内容三：基于深度学习的超声平面波重建',
    'research.u2net.title': 'U2-Net：基于U²-Net的可学习波束形成器',
    'research.u2net.background': '平面波超声成像在单角度发射时帧率极高但图像质量差，多角度相干复合（CPWC）虽提升质量但帧率降低、计算复杂。传统自适应波束形成器（如最小方差法）依赖精确协方差矩阵估计，计算复杂度高。',
    'research.u2net.method': '提出基于U²-Net深度学习模型的可学习波束形成器，从单角度平面波射频数据重建高质量超声图像。成像质量媲美传统75角度CPWC复合方法，同时显著降低计算复杂度。提出维纳后置滤波器与最小方差相结合的方法（RMTW-ESCMV）进一步提升成像质量。',
    'research.dphaf.title': 'DP-HAFNet：双路径分层自适应融合网络',
    'research.dphaf.background': '单一路径的深度学习波束形成器难以同时优化像素级重建质量和通道级特征表示，在旁瓣抑制和斑点纹理保留之间存在权衡。',
    'research.dphaf.method': '提出双路径分层自适应融合网络（DP-HAFNet），可同时预测基于像素的自适应权重输出和基于通道加权的波束形成输出。通过双路径架构与分层融合策略，有效抑制旁瓣和噪声，提升分辨率与对比度的同时保留斑点纹理。',
    'research.lada.title': 'LADA Net：线性注意力域自适应网络',
    'research.lada.background': '深度学习超声重建方法通常依赖大量配对的仿真-实测训练数据，域偏移问题导致网络在未见过的数据分布上泛化性能下降。域自适应融合是解决该问题的关键方向。',
    'research.lada.method': '提出基于线性注意力机制的域自适应网络（LADA Net），通过线性注意力高效建模跨域长距离依赖关系，减少对配准训练数据的依赖。在源域和目标域之间实现高效的特征对齐，提升跨域泛化能力。',
    'research.photo.heading': '博士研究计划：物理先验约束的深度学习光声成像去噪算法',
    'research.photo.title': '融合物理先验知识的深度学习光声成像框架',
    'research.photo.pain1': '传统光声重建依赖理想物理假设（如均匀介质、点探测器），实际成像中存在声学衰减、非均匀传播、探测器响应不理想等问题，导致重建图像噪声大、采样伪影重、细节丢失严重。',
    'research.photo.pain2': '纯数据驱动的深度学习方法虽能从大量数据中学习映射关系，但缺乏物理约束，泛化性差，易产生非物理失真，在临床应用中存在可靠性风险。',
    'research.photo.solution': '构建融合物理先验知识的深度学习框架，将光声成像的物理模型（波动方程、声传播算子、探测器模型）嵌入网络架构或损失函数中，实现低噪声、高物理保真的光声成像。',
    'research.photo.contribution': '物理先验与深度学习的有机结合，有望突破现有光声成像的质量瓶颈，为光声显微成像在微血管网络、肿瘤微环境等生物医学应用中的定量分析提供可靠工具。',
    'research.badge.cas_q2': '中科院二区 · JCR Q1',
    'research.badge.patent': '发明专利 ZL202510901918.1',
    'research.badge.soft_copyrights': '软著×3',
    'research.badge.nat_first_2025': '国赛一等奖 (2025)',
    'research.badge.nat_second_2024': '国赛二等奖 (2024)',
    'research.badge.bme_oral': 'BME2025 口头汇报',
    'research.badge.cas_q1_if': '中科院一区 · IF 6.8',
    'research.badge.mamba_ssm': 'Mamba · 状态空间模型',
    'research.badge.cas_q1_top': '中科院一区Top · JCR Q1',
    'research.badge.co_first': '共一作者 (W. Sun†, J. Li†)',
    'research.badge.oral': '口头汇报',
    'research.badge.single_angle': '单角度平面波重建',
    'research.badge.cas_q2_top': '中科院二区Top · JCR Q1',
    'research.badge.dual_path': '双路径自适应融合',
    'research.badge.domain_adapt': '域自适应',
    'research.badge.phd_plan': '博士研究计划',
    'research.badge.photoacoustic': '光声成像',
    'research.badge.physics_prior': '物理先验约束',
    'research.badge.dl_denoising': '深度学习去噪',
    'achieve.title': '获奖与成果',
    'achieve.competition': '学科竞赛',
    'achieve.patent': '国家发明专利',
    'achieve.software': '软件著作权',
    'achieve.conference': '学术会议',
    'achieve.label.first_prize': '国赛一等奖 ×2',
    'achieve.label.second_prize': '国赛二等奖 ×1',
    'achieve.label.granted': '已授权 1项',
    'achieve.label.registered': '已登记 5项',
    'achieve.label.oral': '口头汇报 1次',
    'achieve.comp.item1': '2025 · 第十届"全国大学生生物医学工程创新设计竞赛" — 精益求精——面向ICSI的精子实时智能分析系统（算法设计与软件开发）',
    'achieve.comp.item2': '2025 · 第十届"全国大学生生物医学工程创新设计竞赛" — 优生优育-精子质量检测与优选仪器',
    'achieve.comp.item3': '2024 · 第九届"全国大学生生物医学工程创新设计竞赛" — 基于深度学习的计算机辅助精子分析（CASA）软件（算法设计与软件开发）',
    'achieve.comp.others': '另获中国大学生计算机设计大赛国赛二等奖、全国三维数字化创新设计大赛二等奖、山东省电子与信息大赛等省级A类赛事二等奖四项、三等奖两项',
    'achieve.patent.desc': '基于多任务级联分析网络的精子实时追踪与分割方法及其系统',
    'achieve.patent.number': '专利号：',
    'achieve.patent.inventors': '发明人：周金华，李佳津，孙雯雯，章志国（学生一作）',
    'achieve.soft.reg_label': '登记号：',
    'achieve.soft.item1': '1. 精子医学图像检测系统',
    'achieve.soft.item2': '2. 病理细胞虚拟染色软件2.0',
    'achieve.soft.item3': '3. 病理细胞虚拟染色软件1.0',
    'achieve.soft.item4': '4. 基于U-net的精子头部分割软件2.0',
    'achieve.soft.item5': '5. 基于U-net的精子头部分割软件1.0',
    'achieve.conf.desc': '2025中国生物医学工程大会暨创新医疗峰会 (BME2025)',
    'achieve.conf.report': '报告题目：MTCA-Net：一种用于精子实时追踪和分割的多任务级联分析网络',
    'achieve.conf.extra': '另在 IEEE UFFC-JS 2024、IEEE IUS 2025 等国际会议发表论文3篇，并获 IEEE IUS 2025 Student Travel Grant',
    'about.title': '个人履历',
    'about.education': '教育经历',
    'about.research': '研究方向',
    'about.funding': '科研基金',
    'about.contact': '联系方式',
    'about.basic': '基本信息',
    'about.msc.achievements': '科研成果：以第一或共一作者发表期刊/会议论文5篇，在投期刊论文2篇，授权国家发明专利1项，软著5项，参与省部级科研基金4项，国家级比赛获奖2项',
    'about.bsc.projects': '关键项目：基于ARCore的增强现实家居应用APP；基于Vuforia的脑肿瘤病灶三维显示；基于Unity的物理仿真实验系统',
    'about.bsc.awards': '竞赛奖项：中国大学生计算机设计大赛二等奖（2020年山东省移动应用开发组唯一进入国赛复赛的队伍）、全国三维数字化创新设计大赛二等奖等',
    'about.research.line1': '计算机视觉 · 图像分割 · 多目标追踪',
    'about.research.line2': '超分辨重构 · 超声平面波重建',
    'about.research.line3': '深度学习在光学和医学图像方面的应用',
    'about.funding.intro': '参与省部级科研基金',
    'about.funding.count': '3项',
    'about.funding.item1': '安徽省转化医学研究院科研基金',
    'about.funding.item2': '安徽省自然科学基金',
    'about.funding.item3': '法医遗传学公安部重点实验室开放课题',
    'about.contact.email_label': '📮 邮箱：',
    'about.contact.phone_label': '📱 电话：',
    'about.basic.hometown': '籍贯：山东省烟台市',
    'about.basic.ethnicity': '民族：汉族 · 年龄：26岁',
    'about.basic.status': '硕士在读',
    'footer.text': '© 2026 李佳津. All rights reserved.',
    'stat.papers': '学术论文',
    'stat.patents': '发明专利',
    'stat.software': '软件著作权',
    'stat.awards': '国赛获奖',
  },
  en: {
    'nav.home': 'Home',
    'nav.publications': 'Publications',
    'nav.research': 'Research',
    'nav.achievements': 'Achievements',
    'nav.about': 'CV',
    'nav.brand': 'Home',
    'lang.switch': '中文',
    'home.name': 'Jiajin Li',
    'home.title': 'Medical AI · M.S. Candidate',
    'home.intro.title': 'About Me',
    'home.intro.text':
      'Research focuses on deep learning applications in optical and medical image processing. First/co-first author of 3 journal papers in Laser & Photonics Reviews (JCR Q1, IF: 10), Measurement (JCR Q1, IF: 5.6), and Advanced Intelligent Systems (JCR Q1, IF: 6.1); co-author of 2 additional papers. Published 3 conference papers at top ultrasound conferences including IEEE IUS, awarded Student Travel Grant. Delivered 5 oral presentations and 2 poster sessions at international and domestic conferences. Participated in 3 provincial/ministerial research fund projects. Won 2 national first prizes and 1 national second prize in the National Biomedical Engineering Innovation Design Competition, with projects focusing on ICSI-oriented real-time sperm intelligent analysis systems, completing the transformation from algorithm research to system integration. Granted 1 national invention patent and 5 software copyrights.',
    'home.research.title': 'Research Directions',
    'home.research.text':
      'Computer Vision · Image Segmentation · Multi-Object Tracking · Super-Resolution Reconstruction · Ultrasound Plane Wave Imaging',
    'home.news.title': 'Latest News',
    'home.news.item1':
      'DP-HAFNet accepted by Measurement (CAS Q2 Top, IF=5.6)',
    'home.news.item2':
      'MTCA-Net accepted by Advanced Intelligent Systems (IF=6.1, CAS Q2)',
    'home.news.item3':
      'HOPE-Net submitted to IEEE JBHI (CAS Q1, IF=6.8), under revision',
    'home.news.item4':
      'Won First Prize at the 10th National Biomedical Engineering Innovation Design Competition',
    'home.education.msc.date': '2023.09 — Present',
    'home.education.msc': 'Anhui Medical University · Biomedical Engineering (M.S.)',
    'home.education.msc.desc': 'School of Biomedical Engineering · Medical AI',
    'home.education.bsc': 'Qufu Normal University · Computer Science and Technology (B.S.)',
    'home.education.bsc.desc': 'School of Computer Science',
    'home.contact.email': 'Email: ',
    'home.contact.phone': 'Tel: ',
    'home.basic.info': 'Hometown: Yantai, Shandong · Han Chinese',
    'home.basic.age': 'Age: 26 · M.S. Candidate',
    'home.tag.seg': 'Image Segmentation',
    'home.tag.det': 'Object Detection',
    'home.tag.track': 'Multi-Object Tracking',
    'home.tag.sr': 'Super-Resolution',
    'home.tag.us': 'Ultrasound Plane Wave Imaging',
    'pub.title': 'Publications',
    'pub.subtitle': '5 Published · 2 Under Revision',
    'pub.filter.all': 'All',
    'pub.filter.published': 'Published',
    'pub.filter.revision': 'Under Revision',
    'pub.filter.conference': 'Conference',
    'pub.badge.q1top': 'CAS Q1 Top',
    'pub.badge.q2': 'CAS Q2',
    'pub.badge.q2top': 'CAS Q2 Top',
    'pub.badge.q1': 'CAS Q1',
    'pub.badge.jcr_q1': 'JCR Q1',
    'pub.badge.oral': 'Oral Presentation',
    'research.title': 'Research Projects',
    'research.subtitle': 'Deep Learning in Medical Image Processing',
    'research.nav.sperm': 'Sperm Analysis',
    'research.nav.fpm': 'FPM Imaging',
    'research.nav.ultrasound': 'Ultrasound Imaging',
    'research.nav.photoacoustic': 'Photoacoustic Imaging',
    'research.label.background': 'Background:',
    'research.label.dataset': 'Dataset:',
    'research.label.method': 'Method:',
    'research.label.deploy': 'Application:',
    'research.label.result': 'Results:',
    'research.label.pain1': 'Challenge 1:',
    'research.label.pain2': 'Challenge 2:',
    'research.label.solution': 'Solution:',
    'research.label.contribution': 'Contribution:',
    'research.sperm.heading': 'Research Area 1: Real-Time Sperm Quality Assessment via Deep Learning',
    'research.mtca.title': 'MTCA-Net: Multi-Task Cascade Analysis Network',
    'research.mtca.background': 'Infertility affects approximately 186 million people globally, with male factors accounting for 20%-70% of cases. Intracytoplasmic sperm injection (ICSI) is widely used clinically, requiring manual selection of individual viable sperm for injection into oocytes. Sperm quality directly impacts clinical implantation rates and live birth outcomes. Traditional manual sperm analysis suffers from low efficiency and high subjectivity.',
    'research.mtca.dataset': 'In collaboration with the Reproductive Center of the First Affiliated Hospital of Anhui Medical University, sperm images were captured under a 60x water immersion objective, forming 3,166 segmentation samples and 397 detection samples for network training and testing. Training environment: NVIDIA RTX 3090.',
    'research.mtca.method': 'We propose a Multi-Task Cascade Analysis Network (MTCA-Net) that unifies object detection, instance segmentation, and motion tracking into an end-to-end framework. It achieves 94 FPS for real-time sperm tracking and segmentation at 1920×1200 resolution, and 51 FPS for joint analysis, enabling simultaneous quantitative assessment of sperm motility and morphological parameters.',
    'research.mtca.deploy': 'The MTCA-Net algorithm has been packaged as software and integrated with an Olympus microscope, constructing a computational microscopy system capable of accurately quantifying sperm motility and morphological parameters.',
    'research.hope.title': 'HOPE-Net: Mamba-Guided Hybrid Omni-Perceptual Enhanced Network',
    'research.hope.background': 'Clinical scenarios contain numerous impurities resembling sperm in morphology. Traditional CNNs are limited by local receptive fields, while Transformers, despite modeling global dependencies, suffer from high computational complexity, making deployment under real-time constraints challenging.',
    'research.hope.method': 'We design a Mamba-Guided ShuffleNet (MGS-Net) as the backbone network, with a Hybrid State-Space Path Aggregation Network (HSS-PAN) as the neck. HOPE-Net simultaneously captures local detail features and global contextual information, adaptively focusing on key regions through a selective scanning mechanism, achieving robust sperm detection in complex clinical scenarios.',
    'research.fpm.heading': 'Research Area 2: Fast High-Fidelity Fourier Ptychographic Microscopy via Wavelet Transform and Linear Attention',
    'research.wmfp.title': 'WM-FPM: Wavelet Transform & Linear Attention GAN Architecture',
    'research.wmfp.background': 'Fourier ptychographic microscopy (FPM) enables large field-of-view, high-resolution imaging, overcoming limitations of objective numerical aperture and space-bandwidth product. However, traditional iterative FPM reconstruction algorithms are extremely slow, making real-time application difficult.',
    'research.wmfp.method': 'We propose a generative adversarial architecture combining wavelet transform and linear attention mechanism (WM-FPM). The image is decomposed into the wavelet domain for processing, utilizing linear attention to reduce computational complexity of long-range dependencies, significantly improving inference speed while maintaining reconstruction quality.',
    'research.wmfp.result': 'For a single 151-megapixel image, WM-FPM reconstruction takes only 5.63 seconds, achieving over 100x speedup compared to traditional iterative methods without sacrificing reconstruction fidelity. The method also performs excellently under low light dose conditions.',
    'research.ultrasound.heading': 'Research Area 3: Deep Learning for Ultrasound Plane-Wave Imaging',
    'research.u2net.title': 'U2-Net: Learnable Beamformer Based on U²-Net',
    'research.u2net.background': 'Single-angle plane-wave ultrasound imaging achieves extremely high frame rates but suffers from poor image quality. Multi-angle coherent plane-wave compounding (CPWC) improves quality but reduces frame rates and increases computational complexity. Traditional adaptive beamformers rely on accurate covariance matrix estimation with high computational cost.',
    'research.u2net.method': 'We propose a learnable beamformer based on the U²-Net deep learning model, reconstructing high-quality ultrasound images from single-angle plane-wave RF data. Imaging quality is comparable to traditional 75-angle CPWC compounding while significantly reducing computational complexity. A Wiener post-filter combined with minimum variance (RMTW-ESCMV) is proposed to further improve imaging quality.',
    'research.dphaf.title': 'DP-HAFNet: Dual-Path Hierarchical Adaptive Fusion Network',
    'research.dphaf.background': 'Single-path deep learning beamformers struggle to simultaneously optimize pixel-level reconstruction quality and channel-level feature representation, facing a trade-off between sidelobe suppression and speckle texture preservation.',
    'research.dphaf.method': 'We propose a Dual-Path Hierarchical Adaptive Fusion Network (DP-HAFNet) that simultaneously predicts pixel-wise adaptive weight outputs and channel-weighted beamforming outputs. Through a dual-path architecture with hierarchical fusion strategy, it effectively suppresses sidelobes and noise while enhancing resolution and contrast without sacrificing speckle texture.',
    'research.lada.title': 'LADA Net: Linear Attention Domain Adaptation Network',
    'research.lada.background': 'Deep learning ultrasound reconstruction methods typically rely on large amounts of paired simulation-to-measurement training data. Domain shift causes performance degradation on unseen data distributions. Domain adaptive fusion is a key direction for addressing this problem.',
    'research.lada.method': 'We propose a Linear Attention Domain Adaptation Network (LADA Net) that efficiently models cross-domain long-range dependencies through linear attention, reducing dependence on aligned training data. It achieves effective feature alignment between source and target domains, enhancing cross-domain generalization.',
    'research.photo.heading': 'Ph.D. Research Plan: Physics-Informed Deep Learning for Photoacoustic Imaging Denoising',
    'research.photo.title': 'Physics-Informed Deep Learning Framework for Photoacoustic Imaging',
    'research.photo.pain1': 'Traditional photoacoustic reconstruction relies on ideal physical assumptions (e.g., homogeneous medium, point detectors). Real imaging involves acoustic attenuation, heterogeneous propagation, and non-ideal detector response, leading to noisy reconstruction, severe sampling artifacts, and significant detail loss.',
    'research.photo.pain2': 'Purely data-driven deep learning methods can learn mappings from large datasets but lack physical constraints, resulting in poor generalization and non-physical distortions, posing reliability risks in clinical applications.',
    'research.photo.solution': 'We construct a deep learning framework that incorporates physical prior knowledge, embedding photoacoustic imaging physics models (wave equation, acoustic propagation operators, detector models) into the network architecture or loss functions, achieving low-noise, high-fidelity photoacoustic imaging.',
    'research.photo.contribution': 'The organic integration of physical priors and deep learning is expected to overcome the quality bottleneck of current photoacoustic imaging, providing reliable tools for quantitative analysis in biomedical applications such as microvascular networks and tumor microenvironments.',
    'research.badge.cas_q2': 'CAS Q2 · JCR Q1',
    'research.badge.patent': 'Invention Patent ZL202510901918.1',
    'research.badge.soft_copyrights': 'Software Copyrights ×3',
    'research.badge.nat_first_2025': 'National First Prize (2025)',
    'research.badge.nat_second_2024': 'National Second Prize (2024)',
    'research.badge.bme_oral': 'BME2025 Oral Presentation',
    'research.badge.cas_q1_if': 'CAS Q1 · IF 6.8',
    'research.badge.mamba_ssm': 'Mamba · State Space Model',
    'research.badge.cas_q1_top': 'CAS Q1 Top · JCR Q1',
    'research.badge.co_first': 'Co-first authors (W. Sun†, J. Li†)',
    'research.badge.oral': 'Oral Presentation',
    'research.badge.single_angle': 'Single-Angle Plane Wave',
    'research.badge.cas_q2_top': 'CAS Q2 Top · JCR Q1',
    'research.badge.dual_path': 'Dual-Path Adaptive Fusion',
    'research.badge.domain_adapt': 'Domain Adaptation',
    'research.badge.phd_plan': 'Ph.D. Research Plan',
    'research.badge.photoacoustic': 'Photoacoustic Imaging',
    'research.badge.physics_prior': 'Physics Prior Constraint',
    'research.badge.dl_denoising': 'Deep Learning Denoising',
    'achieve.title': 'Awards & Achievements',
    'achieve.competition': 'Academic Competitions',
    'achieve.patent': 'Invention Patent',
    'achieve.software': 'Software Copyrights',
    'achieve.conference': 'Academic Conferences',
    'achieve.label.first_prize': 'National First Prize ×2',
    'achieve.label.second_prize': 'National Second Prize ×1',
    'achieve.label.granted': 'Granted: 1',
    'achieve.label.registered': 'Registered: 5',
    'achieve.label.oral': 'Oral Presentations: 1',
    'achieve.comp.item1': '2025 · 10th National Biomedical Engineering Innovation Design Competition — Excellence in ICSI-Oriented Real-Time Sperm Intelligent Analysis System (Algorithm Design & Software Development)',
    'achieve.comp.item2': '2025 · 10th National Biomedical Engineering Innovation Design Competition — Healthy Birth: Sperm Quality Detection and Selection Instrument',
    'achieve.comp.item3': '2024 · 9th National Biomedical Engineering Innovation Design Competition — Deep Learning-Based Computer-Aided Sperm Analysis (CASA) Software (Algorithm Design & Software Development)',
    'achieve.comp.others': 'Also won National Second Prize at China Collegiate Computer Design Competition and National Second Prize at National 3D Digital Innovation Design Competition, along with four second prizes and two third prizes at provincial A-level competitions including Shandong Electronic and Information Competition.',
    'achieve.patent.desc': 'Real-time Sperm Tracking and Segmentation Method and System Based on Multi-Task Cascade Analysis Network',
    'achieve.patent.number': 'Patent No.: ',
    'achieve.patent.inventors': 'Inventors: Jinhua Zhou, Jiajin Li, Wenwen Sun, Zhiguo Zhang (First Student Inventor)',
    'achieve.soft.reg_label': 'Reg. No.: ',
    'achieve.soft.item1': '1. Sperm Medical Image Detection System',
    'achieve.soft.item2': '2. Pathological Cell Virtual Staining Software 2.0',
    'achieve.soft.item3': '3. Pathological Cell Virtual Staining Software 1.0',
    'achieve.soft.item4': '4. U-Net Based Sperm Head Segmentation Software 2.0',
    'achieve.soft.item5': '5. U-Net Based Sperm Head Segmentation Software 1.0',
    'achieve.conf.desc': '2025 China Biomedical Engineering Conference & Innovation Medical Summit (BME2025)',
    'achieve.conf.report': 'Report Title: MTCA-Net: A Multi-Task Cascade Analysis Network for Real-Time Sperm Tracking and Segmentation',
    'achieve.conf.extra': 'Additionally presented 3 papers at international conferences including IEEE UFFC-JS 2024 and IEEE IUS 2025, and received IEEE IUS 2025 Student Travel Grant',
    'about.title': 'Curriculum Vitae',
    'about.education': 'Education',
    'about.research': 'Research Interests',
    'about.funding': 'Research Funding',
    'about.contact': 'Contact',
    'about.basic': 'Basic Information',
    'about.msc.achievements': 'Achievements: Published 5 journal/conference papers as first/co-first author, 2 papers under review, granted 1 invention patent and 5 software copyrights, participated in 4 provincial/ministerial research projects, won 2 national competition awards',
    'about.bsc.projects': 'Key Projects: ARCore-based augmented reality home application APP; Vuforia-based 3D brain tumor visualization; Unity-based physics simulation experiment system',
    'about.bsc.awards': 'Competition Awards: Second Prize in China Collegiate Computer Design Competition (the only team from Shandong mobile application development group to advance to national finals in 2020), Second Prize in National 3D Digital Innovation Design Competition, etc.',
    'about.research.line1': 'Computer Vision · Image Segmentation · Multi-Object Tracking',
    'about.research.line2': 'Super-Resolution · Ultrasound Plane Wave Imaging',
    'about.research.line3': 'Deep Learning in Optical and Medical Image Processing',
    'about.funding.intro': 'Participated in provincial/ministerial research funds',
    'about.funding.count': '3 projects',
    'about.funding.item1': 'Anhui Institute of Translational Medicine Research Fund',
    'about.funding.item2': 'Anhui Provincial Natural Science Foundation',
    'about.funding.item3': 'Open Project of Key Laboratory of Forensic Genetics, Ministry of Public Security',
    'about.contact.email_label': '📮 Email: ',
    'about.contact.phone_label': '📱 Tel: ',
    'about.basic.hometown': 'Hometown: Yantai, Shandong',
    'about.basic.ethnicity': 'Ethnicity: Han · Age: 26',
    'about.basic.status': 'M.S. Candidate',
    'footer.text': '© 2026 Jiajin Li. All rights reserved.',
    'stat.papers': 'Publications',
    'stat.patents': 'Patents',
    'stat.software': 'Software Copyrights',
    'stat.awards': 'National Awards',
  },
};

/**
 * Get the current language from the html element.
 * @returns {string} Current language code ('zh' or 'en')
 */
function getLang() {
  return document.documentElement.lang || 'zh';
}

/**
 * Set the interface language.
 * @param {string} lang - Language code ('zh' or 'en')
 */
function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
  updateLangButton();
}

/**
 * Apply translations to all elements with data-i18n attributes.
 * Iterates [data-i18n] for textContent and [data-i18n-placeholder] for placeholders.
 */
function applyTranslations() {
  const lang = getLang();
  const translations = i18n[lang];

  if (!translations) return;

  // Apply text content translations
  const textElements = document.querySelectorAll('[data-i18n]');
  textElements.forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (translations[key] !== undefined) {
      el.textContent = translations[key];
    }
  });

  // Apply placeholder translations
  const placeholderElements = document.querySelectorAll(
    '[data-i18n-placeholder]'
  );
  placeholderElements.forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] !== undefined) {
      el.placeholder = translations[key];
    }
  });
}

/**
 * Update the language toggle button text to show the opposite language.
 */
function updateLangButton() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  const lang = getLang();
  const oppositeLang = lang === 'zh' ? 'en' : 'zh';
  btn.textContent = i18n[oppositeLang]['lang.switch'];
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('lang') || 'zh';
  setLang(savedLang);
});
