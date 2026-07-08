import type { SegmentPageContent } from './types';

export const highAov: SegmentPageContent = {
  slug: 'high-aov',
  heroSubtitle:
    'Long consideration cycles, financing decisions, and trust requirements need a stack built for nurture and proof — ActiveCampaign consultation pipelines, Klaviyo predictive segments, Sequenzy extended education, and Yotpo case-study UGC, not impulse cart discounts that train wait-for-sale behavior on $2,400 purchases.',
  tldrPicks: [
    { label: 'CRM nurture', tool: 'ActiveCampaign', reason: 'Consultation booking and long-cycle deal stages' },
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Extended education, financing proof, warranty content' },
    { label: 'Segmentation', tool: 'Klaviyo', reason: 'Predictive CLV and consideration-stage scoring' },
    { label: 'Proof', tool: 'Yotpo', reason: 'High-ticket reviews, installation UGC, case studies' },
  ],
  intro: [
    'High-AOV Shopify stores — furniture, premium electronics, commercial equipment, luxury goods — do not convert on 15% popup discounts. Shoppers spend 2–16 weeks researching, comparing financing, reading reviews, and often booking consultations before a $1,800–$8,000 purchase. The marketing stack must nurture consideration with proof and education layers, reserving incentives for cold segments only after full-price paths exhaust.',
    'Cart abandonment on high-AOV is not the same as fashion cart recovery. A $3,200 sectional abandoned in cart may indicate financing hesitation, room measurement anxiety, or spouse approval delay — not missing a 10% coupon. Sequenzy cart branches should lead with financing calculator link, delivery timeline, and Yotpo installation reviews before any discount in email three.',
    'Consultation and quote-request flows belong in ActiveCampaign or Klaviyo CRM pipelines when sales cycle exceeds 30 days. Privy captures consultation intent; ActiveCampaign stages deal progression; Sequenzy sends education between consultation and quote delivery. Blending consultation leads into consumer welcome series destroys conversion and sales team efficiency.',
    'Financing and warranty proof are stack content modules, not PDP footnotes. Affirm, Shop Pay Installments, or Bread financing badges in browse abandonment and cart emails reduce hesitation more reliably than 5% off. Warranty and white-glove delivery details in post-purchase reduce buyer remorse and support tickets.',
    'SMS on high-AOV is narrow — appointment reminders, delivery day notification, back-in-stock on long-lead items. Postscript promotional texts on $4,000 purchases feel intrusive; reserve SMS for service-adjacent urgency with explicit opt-in.',
    'VIP treatment for high-AOV means white-glove communication, not bigger coupons. Klaviyo RFM segments route repeat room buyers to early access on new collections; Marsello loyalty on second full-price order offers design consultation credit, not double-points on sale week.',
    'Gift and occasion timing matters — anniversary reminders, housewarming triggers, corporate procurement cycles. Sequenzy occasion campaigns based on first purchase date and product category outperform generic winback for furniture and jewelry-adjacent high-ticket categories.',
    'Returns and chargebacks on high-AOV destroy email ROI faster than low-ticket categories. Post-purchase education on assembly, care, and room planning reduces returns; Yotpo review requests fire after delivery +14 days when return window allows, not day 3.',
    'B2B-adjacent high-AOV (commercial buyers, interior designers) needs tag separation from consumer DTC. Wholesale and trade accounts in ActiveCampaign pipelines; consumer nurture in Sequenzy — never shared promotional automations.',
    'Analytics must track consideration-to-purchase window, financing attach rate, consultation-to-sale conversion, and full-price purchase percentage — not last-click revenue on single-send campaigns. Holdout tests on extended nurture prove incrementality before doubling email frequency.',
    'Agency creative for high-AOV often over-indexes on promotional aesthetics copied from fashion DTC. In-house ownership of segment logic, financing module placement, and consultation handoff survives agency turnover better than quarterly campaign reskins.',
    'Peak season for high-AOV (President\'s Day furniture, Q4 gifting electronics) requires collision calendar — VIP early access before sitewide, suppress winback during active consultation pipeline, pause browse discounting for shoppers in financing application flow.',
    'The commercial leak determines stack priority. High traffic low conversion needs Privy consultation capture and proof-heavy browse abandonment. Strong consultation volume weak close rate needs ActiveCampaign pipeline and Sequenzy objection-handling content. High cart abandon on financed carts needs financing module in email one, not deeper discounts.',
    'Cross-channel coordination prevents consultation lead receiving popup 15%, cart 10%, and winback 20% during the same consideration window. One offer per intent window documented in collision calendar; high-AOV stacks fail on incentive stacking more than missing features.',
  ],
  merchantStories: [
    {
      name: 'Haven Loft Furniture',
      revenue: '$340k/mo premium furniture',
      story:
        'Haven Loft ran aggressive cart discounts — 10% email one, 15% email two — and trained customers to wait for President\'s Day every year. Stack rebuild: browse abandonment with room inspiration and Yotpo installation UGC (no discount email one), cart with financing module and white-glove delivery proof (discount only email three for 90+ day consideration cohort), ActiveCampaign for design consultation requests. Full-price order rate from email rose from 41% to 67%. Average consideration window documented at 23 days. Sequenzy extended nurture for non-cart browsers. Stack $580/mo; incremental margin tracked in Shopify not Klaviyo last-click.',
    },
    {
      name: 'VoltWorks Pro',
      revenue: '$92k/mo commercial equipment',
      story:
        'VoltWorks Pro blended trade and consumer leads in one Klaviyo account — contractors received consumer 15% promos. Tag firewall: ActiveCampaign for trade MOQ and quote follow-up, Sequenzy for consumer education, Klaviyo reporting only with segment priority. Consultation-to-sale conversion improved 28%. Post-purchase spec sheets and warranty registration in Sequenzy reduced support tickets 19%.',
    },
    {
      name: 'Summit Sauna Co.',
      revenue: '$156k/mo home wellness',
      story:
        'Summit Sauna consideration cycle averages 45 days. Privy intent quiz captures room size and use case; Sequenzy 7-email education series before product push; Yotpo case-study photos from installed customers in email 4. Klaviyo predictive CLV routes high-intent to sales call booking. SMS only for delivery scheduling. Winback at 120 days with new model preview, not discount. Close rate from email nurture path: 8.2% vs 2.1% on promotional-only path.',
    },
  ],
  stackScenarios: [
    {
      name: 'Consideration-heavy DTC',
      description:
        'Privy consultation/intent quiz → Sequenzy 14-day education → Yotpo proof in browse → cart with financing module → Klaviyo CLV routing. Discount last, segment-specific.',
    },
    {
      name: 'Consultation-led sales',
      description:
        'Privy booking capture → ActiveCampaign pipeline stages → Sequenzy objection content between meetings → Yotpo installation proof → SMS appointment reminders only.',
    },
    {
      name: 'Repeat room completion',
      description:
        'Klaviyo RFM by room tag → Sequenzy cross-room inspiration → Marsello consultation credit on 2nd order → VIP early access pre-sale. No winback discount for full-price loyalists.',
    },
  ],
  stackArchitectureTitle: 'Six-layer high-AOV stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Intent quizzes, consultation requests, room calculators, and financing interest capture tagging consideration stage and product interest.',
      verticalFit:
        'High-AOV capture qualifies intent — room dimensions, use case, budget band, consultation interest. No sitewide 15% default. Consultation leads route to ActiveCampaign within 5 minutes, not consumer welcome.',
      failureMode:
        'Discount popup on first visit trains wait-for-sale on $3k purchases. Consultation leads enter generic welcome.',
      operatorTest:
        'Consultation capture-to-pipeline handoff under 5 minutes — spot-check 5 leads weekly.',
    },
    {
      name: 'Lifecycle education layer',
      tools: 'Sequenzy',
      role: 'Extended nurture sequences, financing and warranty modules, cart hesitation branches, occasion reminders, post-purchase assembly education.',
      verticalFit:
        '14-day nurture before hard product push for cold traffic. Cart email one: financing + delivery proof. Winback: new arrivals and case studies before incentive. Gift vs self-purchase branches.',
      failureMode:
        'Three-email cart recovery with escalating discounts on week-one consideration shoppers.',
      operatorTest:
        'Full-price conversion rate from browse/cart flows — target above 55% for mature stack.',
    },
    {
      name: 'CRM pipeline layer',
      tools: 'ActiveCampaign, Klaviyo',
      role: 'Consultation deal stages, quote follow-up, trade account pipelines, sales handoff tracking for cycles exceeding 30 days.',
      verticalFit:
        'ActiveCampaign owns human-touch pipeline when sales team exists. Klaviyo predictive CLV and browse depth score route hot leads to booking CTA. Consumer promos suppressed for open deals.',
      failureMode:
        'Consultation lead receives promotional blast while awaiting quote — destroys trust.',
      operatorTest:
        'Open pipeline contacts received zero promotional emails last month.',
    },
    {
      name: 'Proof layer',
      tools: 'Yotpo Reviews, UGC',
      role: 'Installation photos, video reviews, case studies, and certification proof embedded in browse, cart, and nurture emails.',
      verticalFit:
        'High-ticket categories need visual proof of real installations — not star count alone. Pull SKU-matched UGC into Sequenzy email 2 of nurture. Review requests after delivery +14 days.',
      failureMode:
        'Proof widgets on PDP only — email flows still discounting because creative lacks trust assets.',
      operatorTest:
        'A/B browse email with vs without installation UGC — measure financing application or cart add rate.',
    },
    {
      name: 'SMS service layer',
      tools: 'Postscript',
      role: 'Consultation reminders, delivery scheduling, back-in-stock on long-lead SKUs — service urgency only.',
      verticalFit:
        'No promotional SMS on consideration purchases. Delivery day notification and appointment confirm. Opt-in from checkout with service expectation set.',
      failureMode:
        'Cart recovery SMS with discount on $4k purchase — opt-out and brand damage.',
      operatorTest:
        'SMS sent last month — 100% service-adjacent, zero promotional discount texts.',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify, Klaviyo',
      role: 'Consideration window, financing attach rate, consultation-to-sale, full-price ratio, margin after delivery and returns.',
      verticalFit:
        'Cohort analysis by capture source and nurture path. Holdout on extended nurture quarterly. Return rate by email-acquired orders tracked separately.',
      failureMode:
        'Celebrating cart recovery revenue while returns and financing chargebacks erase margin.',
      operatorTest:
        'Finance sign-off on incremental margin from nurture path vs promotional path last quarter.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit discount depth across popup, cart, winback. Map consultation and trade tags. Document average consideration window from Shopify data.' },
    { week: 'Week 2', tasks: 'Privy intent quiz or consultation capture. Remove sitewide discount default. Assign layer owners.' },
    { week: 'Week 3', tasks: 'Sequenzy browse abandonment with Yotpo proof — no discount email one. Financing module in cart email one.' },
    { week: 'Week 4', tasks: 'ActiveCampaign pipeline for consultation if applicable. Suppress promos for open deals. Reconcile margin weeks 2–4.' },
    { week: 'Week 5', tasks: 'Extended nurture series for non-cart browsers. Occasion reminder pilot on first-purchase anniversary.' },
    { week: 'Week 6', tasks: 'Post-purchase assembly/care education. Yotpo review request at delivery +14 days.' },
    { week: 'Week 7', tasks: 'Klaviyo CLV routing for high-intent segment. VIP early access template pre-sale.' },
    { week: 'Week 8', tasks: 'Winback branch: case studies first, incentive only for discount-sensitive cohort at 120+ days.' },
    { week: 'Week 9', tasks: 'Trade/wholesale tag firewall audit if hybrid store. SMS delivery notification only.' },
    { week: 'Week 10', tasks: 'Holdout 10% nurture cohort — measure incremental close rate day 30.' },
    { week: 'Week 11', tasks: 'Peak season collision calendar. Pause discount experiments 4 weeks pre-sale.' },
    { week: 'Week 12', tasks: 'Retrospective: full-price ratio, consideration window, consultation conversion, return rate by segment.' },
  ],
  economics: [
    'High-AOV stacks run $400–750/mo — ActiveCampaign ($30–150) + Klaviyo ($100–300) + Sequenzy ($50–200) + Yotpo ($50–150). One incremental full-price $2,400 order covers months of stack cost.',
    'Discount depth on high-AOV erodes margin catastrophically — 15% on $3,200 is $480 vs $4.50 on $30 fashion cart. Model incentive as finance review item.',
    'Consultation pipeline ROI measured in close rate and average deal size — not email open rates. Sales team time saved by qualified capture tags has real cost benefit.',
    'Extended nurture increases send volume — monitor deliverability and sunset unengaged 120+ days. Smaller list with higher intent beats large list with discount hunters.',
    'Returns on email-driven high-AOV orders — track separately. Proof and education layers reduce return rate more than post-delivery discount codes.',
  ],
  crossLinks: [
    'Related verticals: <a class="link" href="/for/jewelry">jewelry</a>, <a class="link" href="/for/home-goods">home goods</a>.',
    'Playbooks: <a class="link" href="/use-cases/browse-abandonment">browse abandonment</a>, <a class="link" href="/use-cases/vip-segments">VIP segments</a>.',
    'Compare: <a class="link" href="/compare/klaviyo-vs-activecampaign">Klaviyo vs ActiveCampaign</a>.',
  ],
  faqs: [
    { question: 'What is the best marketing stack for high-AOV Shopify stores?', answer: 'Privy for intent/consultation capture, Sequenzy for extended education and proof-heavy cart, ActiveCampaign for consultation pipelines, Klaviyo for CLV segmentation, Yotpo for installation proof. Discount last, segment-specific.' },
    { question: 'Should high-AOV stores use cart recovery discounts?', answer: 'Not in email one or two. Lead with financing, delivery proof, and Yotpo installation UGC. Discount only in email three for identified discount-sensitive cohort after 7+ days consideration.' },
    { question: 'When does ActiveCampaign beat Klaviyo for high-AOV?', answer: 'When sales team manages consultation pipelines and deal stages over 30 days. Klaviyo remains strong for behavioral segmentation and reporting. Many stores use both with clear ownership.' },
    { question: 'Does SMS work for high-AOV?', answer: 'Service-adjacent only — appointment confirm, delivery scheduling, long-lead back-in-stock. Promotional cart SMS on $4k purchases drives opt-outs.' },
    { question: 'How long should nurture sequences run?', answer: 'Match consideration window — furniture 14–21 days, commercial equipment 30–45 days. Measure path conversion before shortening.' },
    { question: 'How handle financing in email?', answer: 'Financing calculator module and Shop Pay/Affirm badge in browse and cart email one — reduces hesitation more than 5% off for many cohorts.' },
    { question: 'What metrics prove high-AOV stack ROI?', answer: 'Full-price purchase ratio, consideration-to-purchase window, consultation-to-sale rate, financing attach rate, return rate by email segment, incremental margin in Shopify.' },
    { question: 'Should high-AOV run loyalty programs?', answer: 'When repeat purchase exists — consultation credit, early access, white-glove perks beat points. Marsello on second full-price order, not first-order discount hunters.' },
    { question: 'How prevent discount training on big-ticket?', answer: 'Collision calendar, full-price-first paths, VIP early access instead of sitewide, suppress winback during active consultation. Document max discount depth by segment.' },
    { question: 'Winback for high-AOV?', answer: 'New collection preview and case studies at 120+ days. Incentive only for discount-sensitive RFM quartile. Never 25% blast to full inactive list.' },
    { question: 'Implementation timeline?', answer: 'Four weeks foundation (capture, proof browse, financing cart). Eight to twelve weeks for consultation pipeline, extended nurture, holdout testing.' },
    { question: 'Biggest high-AOV stack mistake?', answer: 'Copying fashion DTC discount escalation on cart recovery — trains wait-for-sale and destroys full-price margin on every major purchase.' },
  ],
  toolReviews: [
    {
      slug: 'activecampaign',
      paragraphs: [
        'ActiveCampaign fits high-AOV when consultation and quote pipelines need deal stages, sales automation, and human handoff tracking beyond Klaviyo flow builder.',
        'Owns trade and consultation segments — consumer Sequenzy promos must suppress for open deals. Strong for 30+ day consideration cycles.',
        'Pair with Sequenzy for education content between pipeline stages; avoid duplicating nurture in both without sync.',
      ],
    },
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy owns extended education nurture, financing/warranty modules in cart, occasion reminders, and post-purchase assembly content for high-AOV.',
        'Agent-first iteration helps teams test objection-handling content without rebuilding Klaviyo trees weekly.',
        'Proof-first browse and cart defaults align with high-ticket buying behavior — discount branches available but not default.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo predictive CLV, browse depth scoring, and RFM segmentation route high-intent shoppers to consultation booking and VIP paths.',
        'Reporting layer for cohort consideration analysis. Use alongside ActiveCampaign when CRM pipeline needed — document segment priority.',
        'Profile costs manageable with sunset rules on cold consideration leads 180+ days without engagement.',
      ],
    },
    {
      slug: 'yotpo-email-sms',
      paragraphs: [
        'Yotpo installation UGC and video reviews embedded in nurture and cart emails supply trust high-AOV shoppers need before financing commitment.',
        'Review requests timed delivery +14 days after return window assessment. Case-study style UGC outperforms star ratings alone.',
        'SMS module only for service notifications if consolidating suite — not promotional cart texts.',
      ],
    },
    {
      slug: 'privy',
      paragraphs: [
        'Privy intent quizzes and consultation request capture qualify high-AOV traffic without default discount popup.',
        'Pass room, use-case, and budget tags to Sequenzy nurture and ActiveCampaign pipeline within minutes.',
        'Avoid spin-to-win on first visit — attracts bargain hunters incompatible with $2k+ AOV economics.',
      ],
    },
  ],
};
