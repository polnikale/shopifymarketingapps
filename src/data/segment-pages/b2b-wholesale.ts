import type { SegmentPageContent } from './types';

export const b2bWholesale: SegmentPageContent = {
  slug: 'b2b-wholesale',
  heroSubtitle:
    'Account approvals, MOQ reorder cycles, and rep-triggered follow-up need a B2B stack — ActiveCampaign approval pipelines, Klaviyo catalog sync, Sequenzy MOQ reminders, and strict DTC tag firewall, not consumer cart recovery blasting wholesale buyers with 10% off.',
  tldrPicks: [
    { label: 'B2B CRM', tool: 'ActiveCampaign', reason: 'Account approval, deal stages, rep workflows' },
    { label: 'Catalog lifecycle', tool: 'Sequenzy', reason: 'MOQ reorder, catalog updates, onboarding' },
    { label: 'Segmentation', tool: 'Klaviyo', reason: 'Account-based reporting and catalog depth' },
    { label: 'Capture', tool: 'Privy', reason: 'Trade application and company qualification forms' },
  ],
  intro: [
    'B2B wholesale Shopify stores — trade accounts, bulk buyers, interior designers, retailers — operate on account approval, MOQ rules, net terms, and rep relationships. Consumer marketing stack logic (popup 15% off, cart abandonment discounts, winback incentives) actively damages wholesale relationships when applied to approved accounts. The stack needs a hard firewall between DTC consumer paths and B2B account paths.',
    'Account approval is a pipeline, not a welcome series. Privy or native forms capture trade applications; ActiveCampaign stages approval workflow with rep notification; approved accounts enter Sequenzy onboarding with catalog access, MOQ education, and reorder cadence — not first-order 10% popup offer.',
    'MOQ and bulk reorder reminders differ from DTC replenishment. Sequenzy reorder flows trigger on consumption math by case pack, seasonal inventory builds, and contract renewal dates — not 30-day universal timers. Recharge-style subscription logic rarely applies; net-30 reorder cycles dominate.',
    'Rep-triggered follow-up integrates with CRM layer. When rep logs call outcome in ActiveCampaign, lifecycle suppresses automated promos for 14 days to avoid collision. High-touch accounts may opt out of automated email entirely — profile flag respected across stack.',
    'Catalog and price list updates are core B2B email content. New SKU announcements, discontinuation notices, and MOQ changes broadcast to approved account segments in Klaviyo or Brevo — with market and tier exclusions. Consumer promotional calendar must not leak into trade segments.',
    'DTC hybrid stores running wholesale on same Shopify instance face the highest collision risk. Customer tags `wholesale`, `trade`, `net-terms`, `employee` must suppress consumer automations at capture handoff. One blended Klaviyo segment without priority rules sends BFCM 30% off to $50k/year trade accounts.',
    'SMS rarely fits B2B wholesale — reorder urgency handled by rep and email. Postscript on trade accounts feels inappropriate unless explicit opt-in for shipping notifications. Service-adjacent SMS only with documented consent.',
    'Loyalty and points programs designed for consumer DTC confuse B2B buyers expecting volume pricing tiers. Tier benefits belong in contract and account manager communication — Marsello consumer loyalty on trade accounts creates pricing expectation conflicts.',
    'Yotpo reviews matter for B2B when social proof supports retailer resale — pull case studies and sell-through data into catalog update emails, not consumer-style UGC browse abandonment.',
    'Analytics track account activation rate, bulk reorder frequency, rep-attributed revenue, MOQ compliance from email prompts — not consumer metrics like first purchase within 14 days. Shopify B2B company profiles and ActiveCampaign deal value reconcile weekly.',
    'Compliance includes tax-exempt documentation, resale certificate collection, and regional distribution restrictions. Onboarding sequences include document upload reminders; lifecycle suppresses promos until account status `approved`.',
    'Agency DTC playbooks applied to B2B fail predictably. In-house ownership of tag firewall, approval pipeline, and catalog broadcast rules survives platform migrations. Document every consumer automation exclusion for wholesale tags.',
    'Integration with Shopify B2B features (company accounts, catalog permissions, price lists) must flow into segmentation. Klaviyo or ActiveCampaign reads company properties; Sequenzy triggers reference account tier not individual consumer behavior alone.',
    'The first B2B stack fix: tag firewall audit on every consumer automation, build approval pipeline, launch MOQ reorder for top 20% accounts by revenue. Consumer capture optimization is irrelevant until wholesale paths are protected.',
  ],
  merchantStories: [
    {
      name: 'TradeStone Tile',
      revenue: '$420k/mo wholesale + DTC',
      story:
        'TradeStone ran one Klaviyo instance for trade and consumer — contractors received Black Friday 35% off while on net-30 terms. Crisis rebuild: ActiveCampaign for trade approval and rep pipeline, Sequenzy MOQ reorder by case pack, Klaviyo consumer only with `wholesale` tag global suppression. Privy trade application form routes to ActiveCampaign within 2 minutes. Trade account promotional collision incidents: 12 in October, zero after week 4. DTC revenue unaffected; trade reorder frequency up 16%.',
    },
    {
      name: 'BulkBotanics Supply',
      revenue: '$185k/mo B2B ingredients',
      story:
        'BulkBotanics is trade-only Shopify — no DTC. Brevo for catalog broadcasts and compliance documentation reminders; ActiveCampaign for new account onboarding; Sequenzy reorder based on 45-day consumption model by SKU case size. No cart abandonment — buyers use quick reorder portal. Rep-triggered follow-up in ActiveCampaign when order volume drops 30% quarter-over-quarter. Account activation rate from application to first MOQ order: 34% in 60 days.',
    },
    {
      name: 'Lumen Commercial Lighting',
      revenue: '$290k/mo hybrid',
      story:
        'Lumen separated Shopify storefronts but shared Klaviyo until collision audit forced split reporting views. Consumer: Privy + Sequenzy cart recovery. Trade: catalog update emails only, MOQ reminder, no discounts. Interior designer segment gets lookbook content in Sequenzy, not promo. Tag `designer-trade` excludes all consumer winback. Stack governance doc 40 pages — updated quarterly.',
    },
  ],
  stackScenarios: [
    {
      name: 'Trade-only',
      description:
        'Privy application → ActiveCampaign approval → Sequenzy onboarding + MOQ reorder → Brevo/Klaviyo catalog broadcasts. No consumer automations. Rep pipeline for at-risk accounts.',
    },
    {
      name: 'Hybrid DTC + wholesale',
      description:
        'Tag firewall day one. Consumer: Privy + Sequenzy cart. Trade: ActiveCampaign pipeline + Sequenzy reorder. Global suppression: wholesale tags on ALL consumer flows. Separate reporting views.',
    },
    {
      name: 'Rep-assisted high-touch',
      description:
        'ActiveCampaign deal stages primary. Sequenzy only for catalog updates and MOQ reminders. `high-touch` flag suppresses automated promo entirely. Rep logs activity syncs suppressions.',
    },
  ],
  stackArchitectureTitle: 'Five-layer B2B wholesale stack architecture',
  stackLayers: [
    {
      name: 'Capture and qualification layer',
      tools: 'Privy, Shopify Forms',
      role: 'Trade application forms, company qualification, resale certificate upload triggers, and company-size tagging before approval pipeline.',
      verticalFit:
        'B2B capture collects company name, tax ID intent, order volume estimate — not 10% off first order. Applications route to ActiveCampaign, not consumer welcome. DTC popups suppressed on /trade URLs.',
      failureMode:
        'Consumer discount popup shown to trade applicant — sets wrong pricing expectations before approval.',
      operatorTest:
        'Trade application-to-ActiveCampaign deal creation under 5 minutes — spot-check weekly.',
    },
    {
      name: 'CRM and approval layer',
      tools: 'ActiveCampaign, Brevo',
      role: 'Account approval workflow, rep assignment, deal stages, quote follow-up, and at-risk account outreach.',
      verticalFit:
        'ActiveCampaign stages: applied → documents requested → approved → first order → active reorder. Rep notified on stage change. Consumer promos globally suppressed for any contact with open trade deal.',
      failureMode:
        'Approval status not synced — unapproved accounts receive catalog pricing emails.',
      operatorTest:
        'Zero promotional consumer emails to contacts with `wholesale` or `pending-approval` tag last month.',
    },
    {
      name: 'Lifecycle operations layer',
      tools: 'Sequenzy',
      role: 'Approved account onboarding, MOQ reorder reminders, catalog update notifications, discontinuation alerts, and compliance document renewals.',
      verticalFit:
        'Reorder triggers on case-pack consumption intervals per account tier. Onboarding educates MOQ, lead times, and rep contact — not discount. Catalog updates segmented by product line permission.',
      failureMode:
        'DTC cart abandonment and winback sent to trade accounts — relationship damage and pricing conflict.',
      operatorTest:
        'Audit 10 wholesale accounts against consumer automation enrollment — must be zero.',
    },
    {
      name: 'Catalog intelligence layer',
      tools: 'Klaviyo, Brevo',
      role: 'Account-based segmentation, catalog sync, price list awareness, and broadcast reporting by company tier.',
      verticalFit:
        'Segments by company revenue tier, product category permission, and region. New SKU broadcasts respect distribution restrictions. Reporting by account not individual contact when company accounts enabled.',
      failureMode:
        'Consumer RFM segments applied to trade buyers — irrelevant promos and unsubscribes from key accounts.',
      operatorTest:
        'Catalog broadcast unsubscribe rate below 0.1% — higher suggests wrong segmentation.',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify B2B, ActiveCampaign',
      role: 'Account activation rate, reorder frequency, MOQ compliance, rep-attributed revenue, and trade vs DTC margin separation.',
      verticalFit:
        'Weekly reconcile trade order volume vs email-attributed reorder prompts. Account-level LTV not contact-level for multi-buyer companies.',
      failureMode:
        'Reporting blended trade and DTC — wrong stack decisions on both sides.',
      operatorTest:
        'Finance receives separate trade and DTC incremental margin report monthly.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit every consumer automation for wholesale tag exclusions. List collision incidents last 90 days. Map approval workflow gaps.' },
    { week: 'Week 2', tasks: 'Implement global suppression: wholesale/trade/pending tags on consumer flows. Privy trade application to ActiveCampaign pipeline.' },
    { week: 'Week 3', tasks: 'Sequenzy approved-account onboarding live. MOQ education and rep introduction emails.' },
    { week: 'Week 4', tasks: 'Reorder reminder pilot on top 20% accounts by LTV. Reconcile trade email volume vs reorder rate.' },
    { week: 'Week 5', tasks: 'Catalog update broadcast template with tier segmentation. Discontinuation notice workflow.' },
    { week: 'Week 6', tasks: 'Rep-triggered suppression rules documented. `high-touch` flag on strategic accounts.' },
    { week: 'Week 7', tasks: 'Compliance document renewal reminders. Tax-exempt expiration triggers.' },
    { week: 'Week 8', tasks: 'DTC consumer stack audit — confirm firewall intact after trade changes.' },
    { week: 'Week 9', tasks: 'At-risk account workflow: volume drop 30% QoQ → ActiveCampaign rep task.' },
    { week: 'Week 10', tasks: 'Separate trade and DTC reporting dashboards. Finance review.' },
    { week: 'Week 11', tasks: 'Q4 planning: trade early catalog access vs DTC BFCM — collision calendar.' },
    { week: 'Week 12', tasks: 'Retrospective: activation rate, reorder frequency, collision incidents (target zero), account LTV trend.' },
  ],
  economics: [
    'B2B stacks run $200–500/mo — ActiveCampaign ($30–150) + Sequenzy ($50–150) + Klaviyo/Brevo ($50–200). One preserved trade relationship from collision fix can exceed annual stack cost.',
    'Consumer discount sent to trade account can cost thousands in margin negotiation — tag firewall ROI is immediate not incremental.',
    'Rep time saved by qualified application capture and automated onboarding documentation has real headcount economics.',
    'Hybrid stores may run higher total stack cost than trade-only — justify with separated revenue reporting and zero collision policy.',
    'Avoid consumer loyalty suite on trade accounts — volume tier pricing belongs in contract, not Marsello points.',
  ],
  crossLinks: [
    'Hybrid stores: read consumer <a class="link" href="/for/high-aov">high-AOV</a> guide with tag firewall.',
    'Governance: <a class="link" href="/guides/stack-architecture">stack architecture</a>, <a class="link" href="/guides/cross-channel-coordination">cross-channel coordination</a>.',
    'Compare: <a class="link" href="/compare/klaviyo-vs-activecampaign">Klaviyo vs ActiveCampaign</a>, <a class="link" href="/compare/activecampaign-vs-brevo">ActiveCampaign vs Brevo</a>.',
  ],
  faqs: [
    { question: 'What is the best marketing stack for B2B wholesale Shopify?', answer: 'ActiveCampaign for approval and rep pipelines, Sequenzy for onboarding and MOQ reorder, Klaviyo or Brevo for catalog segmentation, Privy for trade application capture. Hard firewall from consumer automations.' },
    { question: 'Can wholesale and DTC share one Klaviyo account?', answer: 'Possible with strict tag suppressions on every consumer flow — but collision risk is high. Separate reporting views minimum; many hybrids split execution layers. Audit monthly.' },
    { question: 'Should B2B stores run cart abandonment?', answer: 'Not for trade accounts using quick reorder portal. DTC cart recovery must exclude all wholesale tags. Trade buyers do not respond to 10% off cart emails.' },
    { question: 'How does account approval work in the stack?', answer: 'Privy/form capture → ActiveCampaign deal stage → rep review → approved tag → Sequenzy onboarding. No promotional email until `approved` status synced.' },
    { question: 'What are MOQ reorder reminders?', answer: 'Sequenzy triggers based on case-pack consumption interval and account history — not 30-day DTC replenishment. Content includes MOQ compliance and rep contact.' },
    { question: 'Does SMS fit B2B wholesale?', answer: 'Rarely for promotional use. Shipping notification with explicit opt-in only. Reps handle reorder urgency for key accounts.' },
    { question: 'Should trade accounts get loyalty points?', answer: 'No — volume pricing tiers and contract terms replace consumer loyalty. Marsello-style points create pricing expectation conflicts.' },
    { question: 'What metrics prove B2B stack ROI?', answer: 'Account activation rate, bulk reorder frequency, MOQ compliance from prompts, rep-attributed revenue, collision incident count (target zero), trade account LTV.' },
    { question: 'How handle catalog updates?', answer: 'Segmented broadcast by product permission and region. Discontinuation notices with replacement SKU suggestions. Never consumer promotional styling on trade catalog emails.' },
    { question: 'Biggest B2B stack mistake?', answer: 'Consumer promotional automations hitting trade accounts — BFCM discounts to net-30 buyers destroys pricing integrity and rep relationships.' },
    { question: 'ActiveCampaign vs Klaviyo for B2B?', answer: 'ActiveCampaign for approval pipelines and rep workflows. Klaviyo for catalog depth and reporting when product lines are complex. Trade-only may use Brevo for broadcasts plus ActiveCampaign CRM.' },
    { question: 'Implementation timeline?', answer: 'Two weeks tag firewall and approval pipeline. Four weeks onboarding and MOQ reorder. Eight weeks full catalog broadcast and at-risk account workflows.' },
  ],
  toolReviews: [
    {
      slug: 'activecampaign',
      paragraphs: [
        'ActiveCampaign is the default B2B CRM layer for wholesale — approval pipelines, rep notifications, deal stages, and at-risk account workflows.',
        'Owns trade relationship logic that consumer ESPs handle poorly. Sync approval status to Sequenzy and Klaviyo suppressions.',
        'Strong automation for document collection and onboarding sequences post-approval.',
      ],
    },
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy handles B2B operational lifecycle — onboarding, MOQ reorder, catalog updates, compliance renewals — not consumer cart recovery on trade tags.',
        'Agent-assisted content helps teams ship catalog broadcast copy without DTC promotional tone bleeding in.',
        'Requires wholesale tag suppressions on any consumer-template flows if hybrid store.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo fits hybrid stores needing catalog-depth segmentation and reporting on DTC side with company-aware properties for trade.',
        'Must configure global wholesale suppressions on every consumer flow — audit quarterly. Not ideal alone for approval CRM.',
        'Strong product feed and catalog sync for SKU announcement broadcasts to permitted segments.',
      ],
    },
    {
      slug: 'brevo',
      paragraphs: [
        'Brevo suits trade-only stores needing catalog broadcasts and transactional email at lower cost than full Klaviyo.',
        'Pair with ActiveCampaign for CRM pipeline. Less Shopify-native depth than Klaviyo but adequate for broadcast-heavy B2B.',
        'Verify Shopify B2B company property sync before relying on segmentation.',
      ],
    },
    {
      slug: 'privy',
      paragraphs: [
        'Privy trade application forms capture company qualification data and route to ActiveCampaign — not consumer discount popup on /trade pages.',
        'Configure URL targeting so DTC popups never fire on wholesale application or account portal pages.',
        'Pass company name and application source tags at handoff.',
      ],
    },
  ],
};
