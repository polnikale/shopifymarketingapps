import type { SegmentPageContent } from './types';

export const petProducts: SegmentPageContent = {
  slug: 'pet-products',
  heroSubtitle:
    'Pet life-stage transitions, consumption-based reorder math, and species-specific segmentation need a stack where Privy captures pet profile, Sequenzy runs consumption replenishment, Klaviyo segments by breed/weight, and Yotpo supplies pet UGC proof — not generic 30-day reorder blasts.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Pet onboarding, consumption reorder, life-stage transitions' },
    { label: 'Segmentation', tool: 'Klaviyo', reason: 'Species, breed, weight, and life-stage cohorts' },
    { label: 'Capture', tool: 'Privy', reason: 'Pet profile quiz with species and weight tags' },
    { label: 'Proof', tool: 'Yotpo', reason: 'Pet UGC and vet-trusted reviews in consideration' },
  ],
  intro: [
    'Pet product Shopify stores sell to the pet, through the owner — segmentation by species, breed, weight, and life-stage determines whether email is relevant or instant unsubscribe. A Great Dane owner receiving Chihuahua portion emails loses trust immediately. The marketing stack must capture pet profile at opt-in and maintain consumption-based reorder math per product type, not universal 30-day reminders.',
    'New pet onboarding is a high-LTV moment. Privy pet profile quiz tags species, age, and size; Sequenzy new-pet series educates on nutrition, gear sizing, and training products over 21 days — not generic welcome with 15% off. Puppy owners transition to adult formulas at month 10–12; stack must trigger life-stage transition emails automatically.',
    'Consumption reorder math differs by category: kibble by weight and daily serving, flea treatment by 30/60/90 day protocol, toys and accessories by discretionary not timer. Sequenzy replenishment reads SKU category and pet weight property — flea meds at day 25 of 30, kibble at 80% of bag duration estimate.',
    'Subscription adoption is high in pet — Recharge/Skio sync mandatory. Active subscribers suppress replenishment promos on subscribed SKUs; skip-flow recovery gets save branch with pet health education, not immediate discount.',
    'Yotpo pet UGC — dogs with products, cats using beds — outperforms stock photography in browse abandonment and post-purchase. Breed-matched UGC when available increases consideration for size-sensitive products like harnesses and beds.',
    'SMS works for reorder urgency on flea/tick and food running low when checkout opt-in exists — Postscript at 80% consumption window after email one unopened. Not daily promo texts; pet owners appreciate timely food reminders, resent spam.',
    'Vet and expert content builds trust for health-adjacent products — supplements, dental, anxiety. Education sequences compliance-reviewed; avoid medical claims in automation. Sequenzy education paths before promotional cross-sell on health SKUs.',
    'Multi-pet households need profile architecture supporting 2+ pets — separate reorder timers per pet weight tag or consolidated household reminder with SKU breakdown. Klaviyo custom properties for pet count and primary species.',
    'Gift purchasers buying pet products for others branch differently in post-purchase — no replenishment to gift buyer for recipient\'s pet. Gift message detection from Shopify order properties.',
    'Winback for lapsed pet owners: new product for their pet\'s life-stage, seasonal needs (summer cooling gear), not 25% off when competitor subscription may have won.',
    'Loyalty via Marsello or Yotpo on repeat full-price food and supply orders — points on first-order discount hunters trains bad behavior. Enroll on second order; exclude wholesale and vet clinic accounts.',
    'Analytics track reorder rate by pet segment, life-stage transition revenue, subscription retention, education-to-purchase conversion — not fashion-style full-price/discount ratio alone.',
    'Collision calendar prevents flea reminder, food replenishment, and promotional toy sale same afternoon. Pet owners are loyal until annoyed — frequency caps matter.',
    'First stack fix for pet brands: pet profile capture, consumption reorder by category, Recharge suppressions, new-pet onboarding. SMS and loyalty after reorder metrics prove baseline.',
    'Vet clinic and shelter partnership traffic needs co-branded welcome — not consumer promo. Source tag `partnership` branches to education without discount pressure.',
    'Autoship competitors (Chewy, Amazon) win on convenience — pet stack must nail timing accuracy and species relevance, not deeper discounts that destroy margin on heavy kibble bags.',
  ],
  merchantStories: [
    {
      name: 'Pawsitive Meals',
      revenue: '$112k/mo fresh dog food',
      story:
        'Pawsitive Meals calculated reorder by dog weight and recipe calories — not flat 30 days. Privy quiz captures weight and activity level; Sequenzy fires at 80% bag consumption; Recharge subscribers suppressed. Life-stage transition at month 11 for puppy buyers. Reorder rate up 24%. Yotpo dog UGC in browse abandonment. Postscript SMS at consumption window for opt-in only. Churn on subscription skip-save improved with vet-nutritionist content vs 15% off.',
    },
    {
      name: 'Whisker & Wag',
      revenue: '$44k/mo pet accessories',
      story:
        'Whisker & Wag segmented by species — cat owners never received dog harness emails after Klaviyo species tag enforcement. Sequenzy new-cat and new-dog onboarding paths. Lean stack: Privy + Sequenzy + Klaviyo under $220/mo. Replenishment only on consumables (litter, treats), not discretionary toys.',
    },
    {
      name: 'VetChoice Supplements',
      revenue: '$89k/mo pet health',
      story:
        'VetChoice compliance-reviewed education in Sequenzy before any promotional cross-sell. Flea treatment reorder at protocol-specific intervals (30/60/90). Multi-pet household consolidated reminder with per-pet SKU list. Marsello loyalty on third full-price order. Gift buyer suppression on replenishment. Support tickets down 15% from life-stage education emails.',
    },
  ],
  stackScenarios: [
    {
      name: 'Food and consumables',
      description:
        'Privy pet quiz → Sequenzy consumption reorder by weight → Recharge sync → Postscript SMS at 80% window → Yotpo UGC in browse.',
    },
    {
      name: 'Accessories and gear',
      description:
        'Species/size capture → new-pet onboarding → life-stage transition → discretionary cross-sell without false replenishment timers.',
    },
    {
      name: 'Health and supplements',
      description:
        'Education-first Sequenzy → compliance-reviewed claims → protocol-based reorder → vet testimonial proof in consideration.',
    },
  ],
  stackArchitectureTitle: 'Six-layer pet products stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Pet profile quiz capturing species, breed, weight, age, and health concerns as profile properties before lifecycle handoff.',
      verticalFit:
        'Pet capture asks "who is your pet?" not "10% off first order." Species and weight tags pass to Sequenzy within 5 minutes. Multi-pet optional second profile capture.',
      failureMode:
        'Generic popup — subscribers receive wrong species emails forever.',
      operatorTest:
        '100% of welcome branches have species tag — audit profiles missing pet data monthly.',
    },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'New-pet onboarding, consumption replenishment by category, life-stage transitions, health education, winback with seasonal relevance.',
      verticalFit:
        'Kibble reorder by weight math; flea by protocol days; toys excluded from timer replenishment. Puppy→adult transition month 10–12. Gift buyer branch suppresses recipient replenishment.',
      failureMode:
        'Universal 30-day reorder — wrong timing on 60-day flea and 14-day small-breed food.',
      operatorTest:
        'Replenishment timing varies by SKU category in live flow documentation.',
    },
    {
      name: 'Segmentation layer',
      tools: 'Klaviyo',
      role: 'Species, breed, weight band, life-stage, and multi-pet household cohorts with engagement scoring.',
      verticalFit:
        'Cat-only campaigns never include dog SKUs. Large breed harness recommendations gated on weight >60lbs property.',
      failureMode:
        'Full list blast — cat owners unsubscribe after dog emails.',
      operatorTest:
        'Unsubscribe spike on species-mismatched campaign — should be zero if segmented.',
    },
    {
      name: 'Subscription sync layer',
      tools: 'Recharge, Skio',
      role: 'Subscription status, skip events, and churn risk feeding replenishment suppressions and save offers.',
      verticalFit:
        'Active food subscribers skip kibble replenishment promo. Skip-save leads with pet health content. Churned enter winback with portion calculator value.',
      failureMode:
        'Replenishment email to active subscriber on same SKU — annoyance and skip behavior.',
      operatorTest:
        'Zero replenishment promos to active subscribers on subscribed SKU last month.',
    },
    {
      name: 'Proof layer',
      tools: 'Yotpo',
      role: 'Pet UGC, breed-matched photos, and vet-trusted reviews in browse, cart hesitation, and post-purchase.',
      verticalFit:
        'Harness browse shows same-breed dog wearing product. Review request post-delivery +5 days on consumables.',
      failureMode:
        'Stock photo only — size-anxious owners still abandon harness purchases.',
      operatorTest:
        'Browse abandonment with pet UGC vs without — measure add-to-cart lift.',
    },
    {
      name: 'SMS urgency layer',
      tools: 'Postscript, Omnisend',
      role: 'Consumption-window food reminder, flea due date, back-in-stock on viral toy — after email silence.',
      verticalFit:
        'SMS at 80% consumption if email unopened. One SMS per reorder cycle. Quiet hours.',
      failureMode:
        'Weekly promotional SMS — pet owners opt out permanently.',
      operatorTest:
        'SMS reorder reminder conversion vs email-only cohort.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit species segmentation gaps. Map SKU categories to reorder logic. Export Privy quiz completion rate.' },
    { week: 'Week 2', tasks: 'Privy pet profile quiz live. Species/weight tags on all new subscribers. Welcome branches by species.' },
    { week: 'Week 3', tasks: 'Sequenzy consumption replenishment by category — kibble, flea, treats separate timers.' },
    { week: 'Week 4', tasks: 'Recharge/Skio suppressions on replenishment. Gift buyer branch. Reconcile reorder rate.' },
    { week: 'Week 5', tasks: 'New-pet 21-day onboarding series. Life-stage transition trigger pilot.' },
    { week: 'Week 6', tasks: 'Yotpo pet UGC in browse abandonment. Review request timing by category.' },
    { week: 'Week 7', tasks: 'Postscript SMS at consumption window for opt-in cohort.' },
    { week: 'Week 8', tasks: 'Multi-pet household reminder template. Klaviyo species enforcement audit.' },
    { week: 'Week 9', tasks: 'Marsello loyalty on second full-price order if repeat rate supports.' },
    { week: 'Week 10', tasks: 'Collision calendar: max one pet promo per 72h per household.' },
    { week: 'Week 11', tasks: 'Holdout 10% replenishment cohort — incremental reorder in Shopify day 14.' },
    { week: 'Week 12', tasks: 'Retrospective: reorder by segment, subscription retention, species email performance.' },
  ],
  economics: [
    'Pet stacks $200–450/mo — Privy + Sequenzy + Klaviyo + Yotpo + optional Postscript. High reorder LTV justifies full stack early.',
    'Consumption math accuracy drives margin — early reminders waste discounts; late reminders lose to competitor subscription.',
    'Species segmentation reduces unsubscribe waste — smaller engaged list outperforms large mistargeted list.',
    'Subscription save offer depth matters — 15% off every skip trains skip-for-deal behavior; content save often sufficient.',
    'Pet UGC investment pays in harness, bed, and carrier categories where size anxiety blocks conversion.',
  ],
  crossLinks: [
    'Overlap: <a class="link" href="/for/food-and-beverage">food and beverage</a> consumption logic, <a class="link" href="/for/supplements">supplements</a> compliance.',
    'Playbooks: <a class="link" href="/use-cases/replenishment">replenishment</a>, <a class="link" href="/use-cases/welcome-series">welcome series</a>.',
    'Compare: <a class="link" href="/compare/klaviyo-vs-omnisend">Klaviyo vs Omnisend</a>.',
  ],
  faqs: [
    { question: 'Best marketing stack for pet Shopify stores?', answer: 'Privy pet profile capture, Sequenzy consumption reorder and life-stage flows, Klaviyo species segmentation, Recharge sync, Yotpo pet UGC, Postscript for reorder SMS when opted in.' },
    { question: 'How calculate pet food reorder timing?', answer: 'By pet weight, product calories/serving, and bag size — trigger at 80% consumption not calendar 30 days. Store weight as profile property.' },
    { question: 'Why segment by species?', answer: 'Dog owners ignore cat emails and unsubscribe. Species tag at capture is non-negotiable for multi-species catalogs.' },
    { question: 'New pet onboarding?', answer: '21-day education series after first pet product purchase or quiz completion — nutrition, sizing, life-stage preview. High LTV moment.' },
    { question: 'Life-stage transitions?', answer: 'Automated at puppy→adult, adult→senior thresholds per species. Product recommendations update in Sequenzy branches.' },
    { question: 'Subscription and replenishment collision?', answer: 'Recharge/Skio active status suppresses replenishment on subscribed SKU. Separate skip-save branch.' },
    { question: 'SMS for pet products?', answer: 'Consumption-window reminders and flea due dates after email silence — not weekly promos. Checkout opt-in prerequisite.' },
    { question: 'Pet loyalty programs?', answer: 'Second full-price order enrollment. Points on food and consumable repeat — not first-order popup hunters.' },
    { question: 'Multi-pet households?', answer: 'Per-pet properties or consolidated household reminder listing SKUs per pet. Klaviyo supports multiple custom properties.' },
    { question: 'Gift purchases?', answer: 'Suppress replenishment to gift buyer — recipient data rarely available. Gift confirmation branch only.' },
    { question: 'Metrics for pet stack?', answer: 'Reorder rate by segment, life-stage transition revenue, subscription retention, species campaign RPR, SMS reorder conversion.' },
    { question: 'Biggest pet stack mistake?', answer: 'Universal 30-day reorder without species or consumption math — wrong product, wrong timing, churn to Chewy subscription.' },
  ],
  toolReviews: [
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy owns pet lifecycle — new-pet onboarding, consumption reorder by category, life-stage transitions, health education paths.',
        'Agent workflows help draft species-specific content without rebuilding flows per breed.',
        'Pair with Recharge suppressions and Privy pet tags for coordinated replenishment.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo species, breed, and weight segmentation when catalog spans multiple pet types and life-stages.',
        'Predictive churn on subscription pet food. Reporting by pet cohort.',
        'Custom properties for multi-pet households — audit data completeness monthly.',
      ],
    },
    {
      slug: 'privy',
      paragraphs: [
        'Privy pet profile quiz captures species, weight, age at opt-in — foundation for all downstream segmentation.',
        'Avoid generic discount wheel — pet owners respond to relevant product recommendations.',
        'Quiz completion handoff to Sequenzy within 5 minutes critical.',
      ],
    },
    {
      slug: 'yotpo-email-sms',
      paragraphs: [
        'Yotpo pet UGC in browse and post-purchase — same-breed photos reduce size anxiety on gear.',
        'Review requests timed to product category. Vet-trusted review highlights for health SKUs.',
        'SMS module for reorder reminders if consolidating suite.',
      ],
    },
    {
      slug: 'omnisend',
      paragraphs: [
        'Omnisend suits lean pet brands needing replenishment email+SMS without full Klaviyo depth under $60k revenue.',
        'Prebuilt ecommerce automations need pet-specific customization — do not use default 30-day timer.',
        'Upgrade to Klaviyo when species segmentation complexity grows.',
      ],
    },
  ],
};
