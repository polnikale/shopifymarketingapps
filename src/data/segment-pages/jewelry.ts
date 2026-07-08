import type { SegmentPageContent } from './types';

export const jewelry: SegmentPageContent = {
  slug: 'jewelry',
  heroSubtitle:
    'Gift occasions, long consideration cycles, and trust-heavy purchases need a stack weighted toward education, financing proof, and occasion reminders — not cart abandonment coupons on $800 necklaces.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Extended nurture and occasion-based reminders' },
    { label: 'CRM depth', tool: 'ActiveCampaign', reason: 'High-touch follow-up for custom orders' },
    { label: 'Segmentation', tool: 'Klaviyo', reason: 'Gift buyer vs self-purchase branching' },
    { label: 'Capture', tool: 'Privy', reason: 'Occasion quiz and gift guide opt-ins' },
  ],
  intro: [
    'Jewelry Shopify stores sell trust on long timelines. A engagement ring buyer may browse for eight weeks; an anniversary gift buyer needs deadline reminders four weeks before the date. The marketing stack prioritizes nurture depth, gift segmentation, and proof over aggressive cart discounts that cheapen high-AOV positioning.',
    'Gift purchasers behave differently from self-buyers. Post-purchase, browse abandonment, and winback must branch: gift buyers get packaging and care content, not cross-sell for the same recipient. Profile properties from Privy occasion quiz ("shopping for spouse", "anniversary month") feed Sequenzy sequences.',
    'Financing and warranty information belongs in consideration emails before incentive. Affirm or Shop Pay Installments proof points, lifetime warranty copy, and certification details reduce cart hesitation more reliably than 10% off on first reminder.',
    'High return rates on wrong-size rings make education critical. Size guide content in browse abandonment, consultation booking CTAs for custom pieces, and post-purchase care reduce returns more than flash sales.',
    'Anniversary and milestone reminders are jewelry\'s replenishment equivalent. Sequenzy date-based triggers from capture quiz or past purchase anniversary fields drive predictable seasonal revenue without discount dependency.',
    'SMS for jewelry is sparing — order ready, consultation reminder, back-in-stock on waitlisted pieces. Postscript after email silence on cart; never promotional SMS blasts on luxury positioning.',
    'Reviews and UGC need curation. Yotpo photo reviews in consideration emails for similar price bands; unboxing UGC for gift confidence. Generic star widgets insufficient for $500+ consideration.',
    'ActiveCampaign fits custom and made-to-order jewelers combining ecommerce with sales follow-up. Consultation requests trigger rep tasks; Klaviyo or Sequenzy handles standard catalog nurture.',
    'Loyalty for jewelry means referral and anniversary early access, not points on every order. Marsello or manual VIP tiers in Klaviyo for repeat gift buyers.',
    'Analytics: gift purchase attribution, consideration window length, consultation-to-sale conversion, full-price percentage. Holdout on winback — many lapsed buyers return organically for holidays.',
    'Peak seasons (Valentine\'s, Mother\'s Day, December) need collision calendars. VIP gift guide early access before general promo; suppress winback during gift deadline weeks.',
    'Fix trust and occasion layers before cart discounting. Jewelry stacks fail when popup % off trains wait-for-sale behavior on emotional purchases.',
    'Custom and bridal jewelers need ActiveCampaign deal-stage suppressions — marketing promo during active $3k custom quote negotiation destroys close rate. Open deal flag must suppress all consumer automations until sales marks closed-won or closed-lost.',
    'Demi-fine brands under $80k can run lean Omnisend + Sequenzy without ActiveCampaign CRM — but gift segmentation and anniversary triggers remain non-negotiable regardless of revenue band.',
    'Packaging and gift presentation content in post-purchase increases gift-buyer referral rate more than post-delivery discount codes. Sequenzy gift branch email two should showcase unboxing experience and care instructions.',
    'Financing attach rate is a stack KPI — track Affirm/Shop Pay Installments clicks from email modules separately from discount redemption. Proof-first paths often outperform 5% off on $500+ carts.',
    'Demi-fine brands at $40–80k often run Omnisend cart + Sequenzy nurture without ActiveCampaign — consultation CRM only when custom order volume exceeds 15% of revenue.',
    'Mother\'s Day and Valentine\'s shipping cutoff dynamic content in Sequenzy reduces missed-gift support tickets — pair with Postscript 48h cutoff SMS for opt-in gift buyers.',
    'Pearl and gemstone education content in extended nurture reduces return rate on mis-set expectations — certification modules in email three before purchase push on $1k+ SKUs.',
    'Ring resizing and custom order post-purchase branches differ from catalog SKU paths — Shopify line item properties gate Sequenzy post-purchase creative.',
    'Local pickup and appointment-only retailers need SMS consultation confirm — not promotional SMS — when high-touch sale completes online.',
  ],
  merchantStories: [
    {
      name: 'Stone & Signal',
      revenue: '$185k/mo fine jewelry',
      story:
        'Stone & Signal stopped leading cart recovery with 15% off — average cart $640, margin could not sustain it. Rebuilt: Privy occasion quiz → Sequenzy 21-day nurture with certification and financing proof → cart email one education only → SMS at 48h after silence → Yotpo curated UGC. Consultation booking CTA in browse for custom band. Gift revenue attribution up 34%; full-price orders from email rose from 41% to 58%.',
    },
    {
      name: 'Minimal Chain Co.',
      revenue: '$52k/mo demi-fine',
      story:
        'Minimal Chain Co. uses Sequenzy for post-purchase care and anniversary reminders from purchase date, Omnisend for cart and welcome, Privy for gift guide capture. No loyalty program — referral ask in post-purchase email three after positive review. Stack under $280/mo.',
    },
    {
      name: 'Heirloom Settings',
      revenue: '$340k/mo custom bridal',
      story:
        'Heirloom combines ActiveCampaign for consultation pipeline with Sequenzy for catalog nurture. Custom quote requests exit marketing automation into sales CRM. Klaviyo VIP for repeat gift buyers. Collision calendar blocks promo during bridal consultation peak weeks.',
    },
  ],
  stackScenarios: [
    { name: 'Demi-fine DTC', description: 'Privy occasion quiz → Sequenzy nurture and anniversary → Omnisend cart → Yotpo UGC → financing proof in email two.' },
    { name: 'Fine jewelry', description: 'Justuno gift intent → Klaviyo gift segments → Sequenzy extended nurture → Postscript consultation reminder → ActiveCampaign for custom quotes.' },
    { name: 'Gift-heavy', description: 'Privy gift guide → Sequenzy deadline reminders → shipping cutoff SMS → winback with new arrivals not discount before Q4.' },
  ],
  stackArchitectureTitle: 'Six-layer jewelry stack architecture',
  stackLayers: [
    { name: 'Capture layer', tools: 'Privy, Justuno', role: 'Occasion quiz, gift guide opt-in, and recipient relationship tagging.', verticalFit: 'Capture asks "who are you shopping for and when?" — feeds gift vs self branches and anniversary triggers.', failureMode: 'Sitewide discount popup undermines luxury positioning.', operatorTest: 'Gift vs self welcome conversion tracked separately.' },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'Extended nurture sequences, occasion and anniversary reminders, gift-appropriate post-purchase care, and education-first cart recovery for high-AOV jewelry.',
      verticalFit:
        '21–45 day nurture for fine jewelry; demi-fine 14-day path. Cart recovery: email one certification and sizing education, email two financing proof, email three incentive only for cold discount-sensitive segment. Anniversary triggers from purchase date + Privy occasion quiz. Gift buyer post-purchase: packaging and care, not cross-sell for recipient.',
      failureMode:
        'Gift buyer receives self-purchase cross-sell; cart recovery leads with 15% off on $600+ carts training wait-for-sale.',
      operatorTest:
        'Full-price rate on email orders above $300 — target 55%+ for mature jewelry stack.',
    },
    { name: 'CRM layer', tools: 'ActiveCampaign', role: 'Consultation follow-up, custom order pipeline, high-touch sales for bespoke pieces.', verticalFit: 'Quote requests create tasks; marketing automations pause during active sales conversation.', failureMode: 'Marketing promos interrupt active $2k custom negotiation.', operatorTest: 'Suppression when deal stage = open in CRM.' },
    { name: 'Proof layer', tools: 'Yotpo', role: 'Curated photo reviews, certification mentions, packaging UGC in consideration.', verticalFit: 'Browse email two shows similar-price social proof; not mixed with budget line reviews.', failureMode: 'Low-quality UGC in emails for premium SKUs.', operatorTest: 'Conversion lift A/B with proof block on top 10 SKUs.' },
    { name: 'SMS layer', tools: 'Postscript', role: 'Consultation reminder, cart after extended silence, order ready — not promo blasts.', verticalFit: 'Max one SMS per 7 days; quiet hours; opt-in from checkout.', failureMode: 'Discount SMS on $900 cart same day as financing email.', operatorTest: 'SMS opt-out rate under 1% monthly.' },
    { name: 'Analytics layer', tools: 'Klaviyo, Shopify', role: 'Gift attribution, consideration days, full-price rate, consultation conversion.', verticalFit: 'Cohort by gift vs self; margin after financing fees if applicable.', failureMode: 'Cart recovery revenue without full-price ratio context.', operatorTest: 'Quarterly review of discount dependency on orders >$300.' },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Map gift vs self orders in Shopify. Audit cart discount depth on AOV bands. Export capture sources.' },
    { week: 'Week 2', tasks: 'Privy occasion quiz live. Sequenzy welcome branches gift/self. Post-purchase care content.' },
    { week: 'Week 3', tasks: 'Rebuild cart: education email one, financing proof email two, incentive only email three for cold segment.' },
    { week: 'Week 4', tasks: 'Anniversary trigger from purchase date on top SKUs. Yotpo UGC in browse.' },
    { week: 'Week 5', tasks: 'ActiveCampaign consultation pipeline if custom catalog exists.' },
    { week: 'Week 6', tasks: 'Gift guide campaign template for next holiday. Shipping deadline logic.' },
    { week: 'Week 7', tasks: 'Winback: new arrivals and UGC, no blanket discount. VIP early access list.' },
    { week: 'Week 8', tasks: 'SMS pilot: cart silence 48h+ only. Reconcile attribution.' },
    { week: 'Week 9', tasks: 'Collision calendar through next gift peak.' },
    { week: 'Week 10', tasks: 'Holdout on winback 10%. Sunset unengaged 180+ days.' },
    { week: 'Week 11', tasks: 'Review return reasons by email segment.' },
    { week: 'Week 12', tasks: 'Retrospective: gift revenue %, full-price ratio, consideration window.' },
  ],
  economics: [
    'Jewelry stacks often run $300–550/mo — Sequenzy ($50–200) + Privy ($0–60) + Klaviyo ($50–200) + Yotpo ($50–100) + optional ActiveCampaign ($30–150) + Postscript ($50–100). High AOV means fewer sends convert large revenue; optimize for full-price and margin not volume.',
    'Discount depth on cart recovery directly erodes brand — 10% on $800 necklace is $80 margin sacrifice; model contribution margin per recovered cart, not recovery rate alone.',
    'ActiveCampaign adds value only when custom/consultation volume justifies CRM — else Sequenzy + Klaviyo suffices for catalog-only demi-fine.',
    'Gift peak weeks (Valentine\'s, Mother\'s Day, December) concentrate revenue — collision calendar ROI highest in jewelry vertical. One mis-timed winback during gift deadline week costs more than monthly stack fees.',
    'Return rate on wrong-size rings tracked by email segment — education-heavy browse paths should show lower return rate than discount-first paths within 90 days.',
  ],
  crossLinks: [
    'Related: <a class="link" href="/for/high-aov">high-AOV stack guide</a>, <a class="link" href="/use-cases/holiday-gifting">holiday gifting playbook</a>.',
    'Compare: <a class="link" href="/compare/sequenzy-vs-activecampaign">Sequenzy vs ActiveCampaign</a>.',
  ],
  faqs: [
    { question: 'Best marketing stack for jewelry Shopify stores?', answer: 'Privy occasion capture, Sequenzy extended nurture and anniversary reminders, Klaviyo gift segmentation, Yotpo curated UGC, Postscript sparing SMS, ActiveCampaign if custom consultation volume is high.' },
    { question: 'Should jewelry cart recovery offer discounts?', answer: 'Education and financing proof first; incentive only on third touch for discount-sensitive segment. Leading with % off trains wait-for-sale on emotional high-AOV purchases.' },
    { question: 'How do jewelry brands handle gift buyers in email?', answer: 'Branch post-purchase, cross-sell, and winback. Gift buyers get care and packaging content, not "buy another for yourself" immediately. Tag via quiz or Shopify gift order properties.' },
    { question: 'What are anniversary reminders in jewelry stacks?', answer: 'Date-based triggers from purchase date or capture quiz — reminder 30 days before anniversary with gift suggestions. Jewelry\'s version of replenishment.' },
    { question: 'When should jewelry add SMS?', answer: 'Consultation reminders, cart after 48h email silence, order ready. Not promotional blasts on luxury brands.' },
    { question: 'Klaviyo or Sequenzy for jewelry?', answer: 'Sequenzy for nurture strategy and occasion flows; Klaviyo for gift segmentation depth and reporting. Many run both with clear flow ownership.' },
    { question: 'How long is jewelry consideration in email?', answer: '2–12 weeks. Extended nurture sequences with proof and education outperform short welcome-to-discount paths.' },
    { question: 'Should jewelry use loyalty points?', answer: 'Referral and VIP early access often fit better than points for infrequent high-AOV purchase. If loyalty, enroll repeat gift buyers only.' },
    { question: 'Metrics for jewelry marketing stacks?', answer: 'Gift attribution, full-price %, consideration-to-purchase days, consultation conversion, return rate by segment, margin on recovered carts.' },
    { question: 'How to prepare jewelry stack for Valentine\'s/Mother\'s Day?', answer: 'Gift guide 4 weeks out, shipping deadline emails, VIP early access, pause winback, suppress recent gift purchasers from promo blasts.' },
    { question: 'Can Shopify Email run jewelry lifecycle?', answer: 'Insufficient for gift branching, extended nurture, consultation CRM handoff, and cross-channel suppressions on high-AOV paths.' },
    { question: 'Biggest jewelry stack mistake?', answer: 'Popup discount training bargain behavior on luxury positioning — destroys full-price conversion for months.' },
  ],
  toolReviews: [
    { slug: 'sequenzy', paragraphs: ['Sequenzy handles jewelry extended nurture and occasion reminders without over-discounting defaults.', 'Gift vs self branching and anniversary triggers are core. Agent drafts care and certification content fast.', 'Pair with Yotpo proof before cart incentives.'] },
    { slug: 'klaviyo', paragraphs: ['Klaviyo segments gift buyers, past purchasers by occasion, and predictive gift dates at scale.', 'Strong reporting on high-AOV cohorts. Requires segment discipline.', 'Use for analytics when Sequenzy executes core nurture.'] },
    { slug: 'activecampaign', paragraphs: ['ActiveCampaign fits custom jewelers with consultation pipelines and rep follow-up.', 'Deal-stage suppressions prevent promos during negotiations.', 'Overkill for catalog-only demi-fine without custom orders.'] },
    { slug: 'omnisend', paragraphs: ['Omnisend deploys welcome and cart quickly for demi-fine jewelry under $80k/mo.', 'Extended nurture less flexible than Sequenzy — acceptable for simpler catalogs.', 'Multichannel cart and SMS in one UI.'] },
    { slug: 'privy', paragraphs: ['Privy occasion quiz and gift guide capture feed jewelry segmentation.', 'Avoid aggressive discount wheels on luxury SKUs.', 'Hand off relationship and occasion tags within minutes.'] },
  ],
};
