import type { SegmentPageContent } from './types';

export const homeGoods: SegmentPageContent = {
  slug: 'home-goods',
  heroSubtitle:
    'Room-by-room inspiration, long browse cycles, and cross-sell completion need a stack built for catalog depth and project-based segmentation — not single-product cart blasts.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Room-series education and project completion nudges' },
    { label: 'Segmentation', tool: 'Klaviyo', reason: 'Catalog-scale browse and collection segments' },
    { label: 'Workflows', tool: 'Drip', reason: 'Visual journeys for multi-room cross-sell' },
    { label: 'Capture', tool: 'Privy', reason: 'Style quiz and room intent popups' },
  ],
  intro: [
    'Home goods Shopify stores carry large catalogs and long purchase cycles. A shopper redoing a living room may browse for six weeks, buy a sofa, then return three months later for accent tables. The stack segments by room and style project, not single-session cart urgency alone.',
    'Inspiration content drives consideration more than discounts. Sequenzy room-series emails (living room week 1, lighting week 2) outperform promo blasts for full-price conversion. Mailchimp or Klaviyo catalog feeds power product grids when inventory is accurate.',
    'Cross-sell by room completion is the retention play. Purchased sofa → rug and table recommendations at day 30, not day 2 before delivery. Post-purchase waits for fulfillment signal from Shopify or AfterShip before cross-sell.',
    'Browse abandonment for home goods should lead with lifestyle imagery and dimensions/fit guides — discount only after education for high-consideration SKUs like sectionals.',
    'Seasonal refresh campaigns (spring outdoor, holiday decor) align with home buying patterns. Collision calendar prevents outdoor furniture promo overlapping winter bedding winback.',
    'High shipping costs make margin tracking essential. Email-driven orders with free shipping promos need contribution margin in analytics, not revenue alone.',
    'SMS fits back-in-stock on waitlisted furniture and cart nudge on high-AOV abandoned sectionals — Postscript after 24h email silence.',
    'Reviews matter for comfort, assembly, and durability. Yotpo photo reviews in browse for bulky SKUs reduce return anxiety.',
    'Loyalty for home is project-based VIP — early access to new collections for customers who completed room bundles.',
    'Justuno style quizzes feed room and aesthetic tags (modern, farmhouse) into welcome and browse segments.',
    'B2B designers and trade accounts may need exclusion from consumer room campaigns — Shopify customer tags gate automations.',
    'Fix room segmentation and post-purchase cross-sell timing before scaling capture. Home goods lists grow fast with weak project completion without lifecycle depth.',
    'Agency DTC playbooks misapply urgency tactics to sectionals and sofas. In-house ownership of delivery-gated cross-sell rules and room tag schema survives turnover better than quarterly campaign reskins from generic ecommerce retainers.',
    'White-glove delivery and assembly services are stack content modules — mention in cart hesitation emails for bulky SKUs before discount. AfterShip or Shopify fulfillment events must gate cross-sell; ordering triggers without delivery signal increases returns.',
    'Marsello loyalty for home goods works as project-completion VIP — early access to new collections for customers who purchased sofa + rug within 120 days, not points on every $29 candle that trains discount expectations.',
    'Holdout testing on room-series nurture quarterly proves incrementality — many home purchases happen after long offline consideration; last-click over-credits single browse abandonment email.',
  ],
  merchantStories: [
    {
      name: 'Hearth & Frame',
      revenue: '$145k/mo furniture accents',
      story:
        'Hearth & Frame mapped room tags from Justuno quiz into Klaviyo segments and Sequenzy room-series nurture. Cross-sell after sofa delivery +14 days lifted AOV 28%. Cart recovery holds discount until email three for sectionals over $800. Drip runs A/B on room completion paths. Full-price email orders rose from 33% to 47%.',
    },
    {
      name: 'Clay & Cord',
      revenue: '$38k/mo tabletop decor',
      story:
        'Clay & Cord uses Privy seasonal capture, Sequenzy post-purchase and seasonal refresh, Omnisend cart. Small catalog — no Drip complexity. Yotpo reviews in browse for set purchases. Stack $210/mo.',
    },
    {
      name: 'Urban Loft Living',
      revenue: '$290k/mo multi-category home',
      story:
        'Urban Loft syncs AfterShip delivery to trigger cross-sell. Sequenzy education on assembly before review ask. Klaviyo predictive segments for VIP room completers. Postscript cart on orders >$500 after email silence. Trade accounts tagged out of consumer promos.',
    },
  ],
  stackScenarios: [
    { name: 'Small decor', description: 'Privy seasonal popup → Sequenzy post-purchase and seasonal → Omnisend cart → Yotpo reviews.' },
    { name: 'Furniture focus', description: 'Justuno room quiz → Klaviyo segments → Sequenzy room series → Drip cross-sell → Postscript high-AOV cart SMS.' },
    { name: 'Omnichannel home', description: 'AfterShip delivery triggers → Sequenzy cross-sell → Marsello VIP for room completers → Klaviyo reporting.' },
  ],
  stackArchitectureTitle: 'Six-layer home goods stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Style and room quizzes, seasonal opt-ins, and project intent tagging that qualifies subscribers for room-series content paths.',
      verticalFit:
        'Home capture asks "which room are you decorating?" and aesthetic preference (modern, farmhouse, coastal) — not sitewide 10% off. Justuno room quiz feeds Privy segments; tags pass to Sequenzy welcome branches within 5 minutes. Seasonal popups align with outdoor spring and holiday decor peaks.',
      failureMode:
        'Coupon popup attracts small-basket buyers not project shoppers; giveaway subscribers enter same welcome as high-intent sectional browsers.',
      operatorTest:
        'AOV by capture source last quarter — room quiz cohort should beat sitewide popup by 40%+ on revenue per subscriber.',
    },
    { name: 'Lifecycle layer', tools: 'Sequenzy', role: 'Room-series education, delivery-gated cross-sell, seasonal refresh campaigns, and winback with new collection previews before clearance discounts.', verticalFit: 'Sequenzy owns 4–8 week room-series nurture (living room week 1, lighting week 2), cross-sell post-delivery +14 days gated on AfterShip or Shopify fulfillment event, browse abandonment with dimensions/fit guides before discount on sectionals over $800.', failureMode: 'Cross-sell email before sofa delivered; winback discount overlapping active room-series education.', operatorTest: 'Fulfillment status gates cross-sell in documented flow — spot-check 5 orders.' },
    { name: 'Segmentation layer', tools: 'Klaviyo, Drip', role: 'Catalog browse segments, room completion scoring, predictive next purchase, and VIP room completer identification.', verticalFit: 'Klaviyo for catalog-scale reporting; Drip for visual multi-step room completion journeys. Segment priority: recent buyer > active browse > lapsed. Trade accounts excluded globally.', failureMode: 'Same promotional campaign to sectional browser and recent sofa buyer without exclusion.', operatorTest: 'Monthly segment overlap audit — target under 5% conflicting enrollments.' },
    { name: 'Delivery layer', tools: 'AfterShip, Shopify Fulfillment', role: 'Delivery-triggered post-purchase messaging and cross-sell timing accuracy for bulky home goods.', verticalFit: 'Cross-sell fires on `delivered` event, not `ordered`. Assembly instruction email at delivery +1 day before review ask. White-glove delivery mentions in cart hesitation for applicable SKUs.', failureMode: 'Assembly frustration email before product arrives; review request pre-delivery on furniture.', operatorTest: 'Cross-sell revenue timestamped after delivery event in reporting.' },
    { name: 'Proof layer', tools: 'Yotpo', role: 'Assembly, comfort, and room photo reviews in browse and post-purchase.', verticalFit: 'Photo reviews for bulky SKUs in browse email two.', failureMode: 'Text-only reviews insufficient for furniture consideration.', operatorTest: 'Return rate down on email-influenced bulky SKUs.' },
    { name: 'Analytics layer', tools: 'Shopify, Klaviyo', role: 'Room completion rate, cross-sell revenue, margin after shipping promos, browse window.', verticalFit: 'Project completion = multiple category purchases within 120 days.', failureMode: 'Revenue without shipping subsidy margin.', operatorTest: 'Contribution margin on email orders monthly.' },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Room and style tag audit. Map delivery data source. Catalog top 20 SKUs by margin.' },
    { week: 'Week 2', tasks: 'Justuno or Privy quiz → welcome room branch. Post-purchase fulfillment-gated.' },
    { week: 'Week 3', tasks: 'Browse abandonment with dimensions content. No discount email one.' },
    { week: 'Week 4', tasks: 'Cross-sell rules post-delivery +14d for hero categories.' },
    { week: 'Week 5', tasks: 'Seasonal refresh template for upcoming month. Yotpo in browse.' },
    { week: 'Week 6', tasks: 'Cart recovery tiered by AOV — sectionals education-first.' },
    { week: 'Week 7', tasks: 'Winback with new arrivals. Trade tag exclusions.' },
    { week: 'Week 8', tasks: 'Postscript pilot orders >$400. Reconcile margin.' },
    { week: 'Week 9', tasks: 'Room completion segment definition in Klaviyo.' },
    { week: 'Week 10', tasks: 'Sunset unengaged. Collision calendar seasonal.' },
    { week: 'Week 11', tasks: 'VIP early access for room completers.' },
    { week: 'Week 12', tasks: 'Retrospective: cross-sell attach, room completion, full-price %.' },
  ],
  economics: [
    'Home goods stacks $250–500/mo typical at $100k+ revenue — Privy ($0–60) + Sequenzy ($50–200) + Klaviyo/Drip ($50–200) + Yotpo ($0–100) + optional Postscript ($50–150). One incremental sectional cross-sell covers months of stack cost.',
    'Shipping promos in email must be modeled — free shipping on $900 sofa with $180 freight cost erodes margin. Finance threshold on automated shipping incentives before cart recovery goes live.',
    'Room-series content investment pays off in full-price rate — discount-heavy stacks train wait-for-sale on big-ticket items. Track full-price ratio weekly; below 40% on email orders triggers discount audit.',
    'AfterShip or delivery integration optional but high ROI for cross-sell timing accuracy — mistimed cross-sell increases returns and assembly frustration support tickets.',
    'Operator hours on room segmentation and delivery-gated logic: budget 5–6h/week for governed stack vs 10h+ firefighting collisions without collision calendar.',
    'Drip visual workflows add operator time but pay off when room-completion paths need frequent A/B — document Sequenzy vs Drip ownership to prevent duplicate sends.',
    'Trade account exclusion errors are expensive — one consumer promo to designer trade account damages relationship more than monthly Klaviyo fee.',
  ],
  crossLinks: [
    'Playbooks: <a class="link" href="/use-cases/browse-abandonment">browse abandonment</a>, <a class="link" href="/use-cases/post-purchase">post-purchase</a>.',
    'Segment: <a class="link" href="/for/high-aov">high-AOV guide</a>.',
  ],
  faqs: [
    { question: 'Best stack for home goods Shopify stores?', answer: 'Justuno/Privy room capture, Sequenzy room-series and cross-sell, Klaviyo or Drip segmentation, AfterShip delivery triggers, Yotpo photo reviews, Postscript for high-AOV cart SMS.' },
    { question: 'When should home goods cross-sell fire?', answer: 'After delivery +14 days for bulky items; sooner for small decor if fulfillment fast. Never before customer has product.' },
    { question: 'How to segment home goods email?', answer: 'By room, style aesthetic, browse collection, and project completion stage — not one list for entire catalog.' },
    { question: 'Should home goods cart recovery discount immediately?', answer: 'Education and dimensions first for AOV >$300. Graduated incentive on later touches only.' },
    { question: 'Does Mailchimp work for home goods?', answer: 'Acceptable for simple decor under $40k. Large catalogs and room logic need Klaviyo, Drip, or Sequenzy depth.' },
    { question: 'How does seasonality affect home stacks?', answer: 'Outdoor spring, holiday decor Q4 — collision calendar and seasonal capture popups. Pause conflicting winback during peak category weeks.' },
    { question: 'SMS for furniture ecommerce?', answer: 'High-AOV cart after email silence, delivery updates if opted in. Not weekly promo texts.' },
    { question: 'Metrics for home goods marketing?', answer: 'Room completion rate, cross-sell revenue, browse-to-purchase window, margin after shipping promos, full-price %.' },
    { question: 'Sequenzy vs Drip for home?', answer: 'Sequenzy for strategy and room-series content speed; Drip for visual multi-branch room completion workflows. Document ownership.' },
    { question: 'How long home goods consideration?', answer: '4–16 weeks for furniture; shorter for decor. Match nurture length to category — don\'t use 3-day urgency on sectionals.' },
    { question: 'Trade account email handling?', answer: 'Shopify B2B/trade tags exclude from consumer room campaigns and promos.' },
    { question: 'Biggest home goods stack mistake?', answer: 'Cross-sell and review asks before delivery — increases returns and support tickets.' },
  ],
  toolReviews: [
    { slug: 'sequenzy', paragraphs: ['Sequenzy room-series nurture and delivery-gated cross-sell fit home project buying cycles.', 'Agent content helps inspiration emails without heavy design team.', 'Measure room completion and cross-sell attach.'] },
    { slug: 'klaviyo', paragraphs: ['Klaviyo catalog browse segments and collection reporting at scale for large home catalogs.', 'Predictive next purchase for VIP room completers.', 'Profile cost discipline on large lists.'] },
    { slug: 'drip', paragraphs: ['Drip visual workflows for multi-step room completion journeys.', 'Good for operators who want hands-on branch design.', 'Pair with Sequenzy to avoid duplicate sends.'] },
    { slug: 'mailchimp', paragraphs: ['Mailchimp works for small decor brands with simple campaigns.', 'Outgrown when room logic and catalog depth matter.', 'Familiar editor; weaker Shopify event depth.'] },
    { slug: 'privy', paragraphs: ['Privy seasonal and room popups qualify home shoppers.', 'Pass room/style tags to lifecycle on opt-in.', 'Not a replacement for Sequenzy cross-sell depth.'] },
  ],
};
