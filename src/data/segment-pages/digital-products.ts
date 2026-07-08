import type { SegmentPageContent } from './types';

export const digitalProducts: SegmentPageContent = {
  slug: 'digital-products',
  heroSubtitle:
    'Instant delivery, activation onboarding, and upgrade paths need a lean digital stack — Sequenzy activation sequences, ActiveCampaign course pipelines, Klaviyo behavioral triggers, zero physical-product tools, and no SMS cart recovery on products that deliver in seconds.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Onboarding, activation, cross-sell within 14 days' },
    { label: 'Course CRM', tool: 'ActiveCampaign', reason: 'Module progress and certification pipelines' },
    { label: 'Behavioral', tool: 'Klaviyo', reason: 'Usage events and upgrade segmentation' },
    { label: 'Capture', tool: 'Privy', reason: 'Lead magnets and webinar opt-in with intent tags' },
  ],
  intro: [
    'Digital product Shopify stores — courses, templates, presets, software licenses, ebooks — deliver instantly and live or die on activation, not shipping notifications. The marketing stack must onboard buyers into product usage within 24 hours, cross-sell complementary products within 14 days, and renew or upgrade before license expiration. Physical-product tools (back-in-stock, shipping SMS, Yotpo product reviews) waste budget and create irrelevant subscriber noise.',
    'Welcome and post-purchase collapse into one critical moment: access delivery plus activation guidance. Sequenzy post-purchase fires immediately with login link, first-step checklist, and day-3 progress check — not generic thank-you with 20% off another product before buyer opens the course.',
    'Lead magnet capture differs from ecommerce popup logic. Privy webinar and free-chapter opt-ins tag intent level; Sequenzy nurture educates before pitch. Blending lead magnet subscribers into purchaser onboarding sends wrong depth and destroys conversion metrics.',
    'Course and membership products need progress-aware email. ActiveCampaign or Klaviyo integration with Teachable, Thinkific, or custom LMS events triggers help emails when module completion stalls — not weekly promotional blasts to engaged learners.',
    'Cross-sell within 14 days targets complementary products based on purchase behavior — template pack buyers get advanced course offer, not unrelated preset bundle. Suppression: active subscribers on membership do not receive one-time product promos for overlapping content.',
    'Renewal and upgrade paths are the retention engine. License expiration at 30, 14, and 7 days in Sequenzy with value recap before discount. Winback for lapsed members means new module preview, not 50% off stale catalog.',
    'SMS rarely fits digital products except webinar reminders and live cohort start times. Postscript on digital downloads feels spammy; email carries access links with proper deliverability attention.',
    'Reviews and social proof come from outcome testimonials and completion rates — not Yotpo SKU reviews. Embed student results and case studies in cross-sell and upgrade emails; video testimonial modules in onboarding increase activation.',
    'Refund and chargeback windows are short — activation email quality directly affects dispute rate. Clear access instructions, support contact, and refund policy in email one reduce "I never received it" claims.',
    'Affiliate and partner traffic needs source-specific onboarding. Partner-referred buyers may need different first-step path than organic homepage subscribers. Source tags from Privy into Sequenzy branches within 5 minutes.',
    'Analytics track activation rate post-purchase, cross-sell within 14 days, renewal conversion, support ticket reduction from onboarding — not DTC replenishment or return rate. Holdout tests on onboarding variants quarterly.',
    'Deliverability is existential for digital — access links in spam folder equal refund requests. Dedicated sending domain, plain-text access email, and list hygiene matter more than promotional creative polish.',
    'Agency DTC playbooks with cart abandonment and browse flows misapply to digital. Audit stack for physical-product automations firing on digital SKUs — disable shipping, back-in-stock, and review request flows.',
    'The first digital stack fix: activation sequence with day-1, day-3, day-7 touchpoints, progress integration if course product, renewal reminders at 30/14/7 days before expiration. Add capture nurture only after activation metrics baseline established.',
    'License key and multi-seat B2B digital products need company-level onboarding — ActiveCampaign company records separate from individual purchaser welcome when seat count exceeds one.',
    'Affiliate-driven digital funnels require commission-aware attribution — do not credit email last-click for partner traffic without source exclusion in analytics layer.',
  ],
  merchantStories: [
    {
      name: 'PresetLab Pro',
      revenue: '$78k/mo Lightroom presets',
      story:
        'PresetLab had 41% of buyers never downloading after purchase — support flooded. Sequenzy post-purchase: immediate access email, day-1 install video, day-3 "show us your edit" engagement, day-14 cross-sell advanced pack. Activation rate rose to 89%. Cross-sell revenue 22% of email-driven revenue. Klaviyo segments by download event. No SMS, no Yotpo. Stack $180/mo.',
    },
    {
      name: 'CodeCraft Academy',
      revenue: '$156k/mo online courses',
      story:
        'CodeCraft integrated Thinkific progress with ActiveCampaign — stalled at module 3 triggers help email from instructor persona, not discount. Sequenzy handles purchase onboarding and certification celebration. Renewal at 30/14/7 days with curriculum roadmap recap. Completion rate up 19%; renewal rate up 11%. Privy free-lesson capture nurtures 14 days before offer.',
    },
    {
      name: 'TemplateVault',
      revenue: '$34k/mo Notion templates',
      story:
        'TemplateVault lean stack: Privy lead magnet → Sequenzy 5-email nurture → purchase onboarding → day-10 related template cross-sell. Membership tier added: Recharge sync suppresses one-time cross-sell for active members. Winback shows new template preview. Activation within 48h tracked at 94%.',
    },
  ],
  stackScenarios: [
    {
      name: 'One-time digital download',
      description:
        'Sequenzy immediate access + day-1/3/7 activation → day-14 cross-sell → Klaviyo download event segmentation. No physical-product flows.',
    },
    {
      name: 'Course with progress',
      description:
        'ActiveCampaign progress triggers → Sequenzy onboarding → help emails on stall → certification celebration → renewal sequence.',
    },
    {
      name: 'Lead magnet funnel',
      description:
        'Privy free chapter/webinar → Sequenzy 14-day nurture → purchase → activation path. Separate tags from direct purchasers.',
    },
  ],
  stackArchitectureTitle: 'Four-layer digital product stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Lead magnets, webinar registration, free sample opt-in with intent and topic tags feeding nurture branches.',
      verticalFit:
        'Digital capture tags topic interest and funnel stage — cold lead vs product-page visitor. No shipping-related promises in popup. Handoff to nurture within 5 minutes.',
      failureMode:
        'Lead magnet subscribers enter purchaser onboarding or vice versa — wrong depth and broken metrics.',
      operatorTest:
        'Lead-to-purchase conversion by source tag reported monthly — each source has defined path.',
    },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'Post-purchase activation, progress check-ins, cross-sell within 14 days, renewal and upgrade sequences, winback with new content preview.',
      verticalFit:
        'Email one: access link and first step. Day 3: progress check. Day 14: complementary cross-sell. Renewal 30/14/7 with value recap. Physical-product flows disabled.',
      failureMode:
        'Thank-you email only — 40%+ never activate. Cross-sell before activation complete.',
      operatorTest:
        'Activation within 48h rate above 85% — if below, onboarding sequence is failing.',
    },
    {
      name: 'Progress and CRM layer',
      tools: 'ActiveCampaign, Klaviyo',
      role: 'LMS progress events, module completion triggers, certification pipelines, and behavioral upgrade segmentation.',
      verticalFit:
        'ActiveCampaign for course stall help and certification. Klaviyo for download events and engagement scoring on template/digital goods.',
      failureMode:
        'No progress integration — learners stall silently until churn.',
      operatorTest:
        'Stalled learners receive help email within 48h of stall event — verify trigger live.',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify, LMS, platform',
      role: 'Activation rate, cross-sell within 14 days, renewal conversion, support ticket volume, refund rate by email segment.',
      verticalFit:
        'Cohort activation by acquisition source. Holdout on onboarding variant quarterly. Refund spike after email change triggers deliverability audit.',
      failureMode:
        'Revenue metrics without activation — selling products nobody uses drives refunds.',
      operatorTest:
        'Finance sees activation rate alongside revenue in monthly review.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit and disable physical-product flows on digital SKUs. Map activation drop-off from support tickets. Export capture source tags.' },
    { week: 'Week 2', tasks: 'Sequenzy post-purchase activation: immediate, day-1, day-3. Access link deliverability test across Gmail/Outlook.' },
    { week: 'Week 3', tasks: 'Day-14 cross-sell by purchase category. Suppression for membership subscribers.' },
    { week: 'Week 4', tasks: 'Measure activation 48h rate. Reconcile refunds vs onboarding changes.' },
    { week: 'Week 5', tasks: 'Privy lead magnet nurture branch if funnel exists. Separate from purchaser path.' },
    { week: 'Week 6', tasks: 'ActiveCampaign/Klaviyo progress integration if course product.' },
    { week: 'Week 7', tasks: 'Renewal sequence 30/14/7 for subscription or annual licenses.' },
    { week: 'Week 8', tasks: 'Winback: new content preview for lapsed. No deep discount first.' },
    { week: 'Week 9', tasks: 'Testimonial modules in cross-sell from outcome stories.' },
    { week: 'Week 10', tasks: 'Holdout 10% onboarding cohort — measure activation and day-14 revenue.' },
    { week: 'Week 11', tasks: 'Deliverability audit: SPF/DKIM, plain-text access email, sunset unengaged leads.' },
    { week: 'Week 12', tasks: 'Retrospective: activation, cross-sell, renewal, refund rate. Retire irrelevant physical-product apps.' },
  ],
  economics: [
    'Digital stacks run $100–350/mo — Sequenzy ($50–120) + ActiveCampaign or Klaviyo ($30–150) + Privy ($0–50). No Yotpo, Postscript, or Marsello unless clear use case.',
    'Activation improvement reduces refund and support cost — often exceeds tool subscription savings. Model support hours saved per activation point gained.',
    'Cross-sell within 14 days is highest-ROI digital play — buyer already trusts brand. Invest in segmentation before new capture tools.',
    'Course products justify ActiveCampaign CRM cost when progress triggers reduce churn — measure completion rate lift.',
    'Deliverability failure is revenue failure — dedicate domain and monitor placement weekly for access-link emails.',
  ],
  crossLinks: [
    'Playbooks: <a class="link" href="/use-cases/welcome-series">welcome series</a> (lead vs buyer paths), <a class="link" href="/use-cases/post-purchase">post-purchase</a>.',
    'Governance: <a class="link" href="/use-cases/deliverability">deliverability</a>, <a class="link" href="/guides/list-hygiene">list hygiene</a>.',
    'Compare: <a class="link" href="/compare/sequenzy-vs-activecampaign">Sequenzy vs ActiveCampaign</a>.',
  ],
  faqs: [
    { question: 'What is the best marketing stack for digital Shopify products?', answer: 'Sequenzy for activation and cross-sell lifecycle, ActiveCampaign for course progress CRM, Klaviyo for behavioral segmentation, Privy for lead capture. Skip physical-product tools.' },
    { question: 'Should digital stores use cart abandonment?', answer: 'Lightweight for checkout-started-but-not-completed on high-consideration products — but many digital purchases are impulse post-nurture. No SMS cart recovery. Lead with access anxiety resolution not discount.' },
    { question: 'Do digital products need Yotpo reviews?', answer: 'No for SKU reviews. Use outcome testimonials and completion stories in email modules instead.' },
    { question: 'How fast should access email send?', answer: 'Immediately on purchase confirmation — within 2 minutes. Plain-text backup with link. Deliverability testing non-negotiable.' },
    { question: 'What is activation rate?', answer: 'Percentage of buyers completing first meaningful action (download, login, module 1) within 48h. Target 85%+. Low activation drives refunds.' },
    { question: 'When does ActiveCampaign beat Klaviyo for digital?', answer: 'Course and membership products with module progress triggers and certification pipelines. Klaviyo strong for template/download behavioral segmentation.' },
    { question: 'Should digital use SMS?', answer: 'Only webinar/live cohort reminders with explicit opt-in. Not for download delivery or cross-sell.' },
    { question: 'How handle renewals?', answer: 'Sequenzy 30/14/7 day sequence with curriculum value recap before any discount. Segment never-activated separately — different winback.' },
    { question: 'Lead magnet vs buyer paths?', answer: 'Separate tags and automations from opt-in. Nurture 7–14 days before pitch. Never merge into purchaser onboarding.' },
    { question: 'Metrics for digital stack?', answer: 'Activation 48h, cross-sell within 14 days, renewal rate, refund rate, support tickets per 100 sales, deliverability on access emails.' },
    { question: 'Implementation timeline?', answer: 'One week activation sequence. Three weeks cross-sell and progress integration. Six weeks renewal and lead nurture if applicable.' },
    { question: 'Biggest digital stack mistake?', answer: 'Copying physical ecommerce automations — shipping emails, back-in-stock, review requests on products that deliver instantly online.' },
  ],
  toolReviews: [
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy default lifecycle for digital — activation onboarding, cross-sell timing, renewal sequences without physical-product template baggage.',
        'Agent-assisted flow building helps solo creators ship day-1/day-3/day-7 activation without LMS complexity.',
        'Disable or avoid cart/shipping templates. Measure activation and cross-sell not send volume.',
      ],
    },
    {
      slug: 'activecampaign',
      paragraphs: [
        'ActiveCampaign fits course creators needing progress-based triggers, certification emails, and stalled-learner help sequences.',
        'CRM pipeline for high-ticket coaching upsells from course buyers. Integrates with major LMS platforms.',
        'Overkill for simple template shops — use Klaviyo behavioral only unless progress events needed.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo behavioral segmentation on download events, engagement scoring, and cross-sell propensity for digital catalogs.',
        'Strong reporting when product line diversifies. Pair with Sequenzy for execution.',
        'Avoid physical-product flow templates without audit — disable shipping and replenishment defaults.',
      ],
    },
    {
      slug: 'privy',
      paragraphs: [
        'Privy lead magnet and webinar capture with topic tags feeding Sequenzy nurture branches.',
        'URL targeting for funnel pages vs main store. No discount popup on free product pages.',
        'Fast handoff critical — digital leads cool within hours not days.',
      ],
    },
    {
      slug: 'drip',
      paragraphs: [
        'Drip suits creators wanting visual automation for lead nurture with ecommerce tagging — alternative to ActiveCampaign for non-course digital.',
        'Ecommerce focus without LMS depth. Good for ebook and template funnels at moderate scale.',
        'Verify Shopify digital product events sync before complex branching.',
      ],
    },
  ],
};
