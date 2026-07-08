import type { SegmentPageContent } from './types';

export const printOnDemand: SegmentPageContent = {
  slug: 'print-on-demand',
  heroSubtitle:
    'Trend cycles, thin margins, and personalization flows need a stack optimized for launch sell-through and margin-safe promos — Privy waitlists, Sequenzy launch fulfillment, Omnisend drop urgency, and Klaviyo niche cohorts, not enterprise loyalty suites that assume 60% gross margin.',
  tldrPicks: [
    { label: 'Capture', tool: 'Privy', reason: 'Design waitlists and niche community opt-in with design-ID tags' },
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Trend launch, personalization recovery, production timeline' },
    { label: 'Launch urgency', tool: 'Omnisend', reason: '48h sell-through email+SMS for lean POD operators' },
    { label: 'Niche segments', tool: 'Klaviyo', reason: 'Design-line and community cohort reporting at scale' },
  ],
  intro: [
    'Print-on-demand Shopify stores ride trend waves with thin margins and unpredictable virality. A design blows up on TikTok, sells 400 units in 72 hours, then flatlines. The full marketing stack must capture trend traffic fast, fulfill waitlists on restock, and avoid deep discounting that destroys already-slim contribution margin. This is not an email problem — it is a launch coordination problem where capture, lifecycle, SMS, and segmentation each own a lane.',
    'Personalization flows — custom text, uploaded images, pet names on mugs — need abandonment paths that recover incomplete designs with the personalized preview in email one. Generic cart emails that show a blank product tile destroy recovery rates on $28 personalized shirts where the buyer already invested five minutes in the design tool.',
    'Trend drop alerts are the core retention mechanic for POD, not replenishment timers built for serum bottles. Privy waitlist by design ID, Sequenzy notify-on-publish in waitlist order, Omnisend or Postscript SMS for 48h sell-through push to opt-in list only. Blasting the full list on a niche meme design trains unsubscribes from buyers who only want cat content, not dog designs.',
    'Creator and niche community content in email builds repeat without constant promo — meme drops, collab announcements, behind-the-design stories. Sequenzy community cadence emails outperform weekly 20% off when gross margin sits at 25–40%. Loyalty points on thin-margin SKUs often cost more than they return; early access to next drop replaces Marsello for most POD brands under $100k.',
    'Margin-safe discount rules cap incentives across the stack — max 10% on cart recovery, no stacking with popup on trend launches where full-price sell-through is likely. Document the margin floor in week one; every layer owner signs off before BFCM. A viral drop with 25% sitewide popup can generate six-figure revenue and negative contribution margin if fulfillment and print costs spike.',
    'Klaviyo segments by design category, niche, and purchase history when catalog complexity exceeds a single trend line. Cat-meme buyers should not receive dog-only viral blasts. Segmentation layer activates around $70–80k monthly revenue when operator time on manual list splits exceeds two hours weekly.',
    'Reviews matter less than creator social proof for POD — embed UGC, TikTok-style creative, and sold-out social proof in launch emails instead of empty Yotpo widgets. When reviews exist, pull star counts into browse abandonment for personalized products where trust hesitation is high.',
    'Winback for POD means new design drop previews and waitlist re-invites — not 25% off on old inventory nobody wanted. Lapsed buyers follow trends; they do not need clearance on last month\'s failed design. Sequenzy winback branches by last purchased niche tag.',
    'SMS is justified on viral drop day for waitlist opt-in only — frequency caps strict, quiet hours enforced. Postscript or Omnisend SMS at go-live converts waitlist urgency; weekly promotional texts on thin-margin impulse buys drive opt-outs without incremental sell-through.',
    'Tool sprawl hurts lean POD operators managing trend cycles alone. Omnisend + Privy + Sequenzy covers most stores under $100k until a data hire exists. Adding Klaviyo, Postscript, and Marsello simultaneously creates collision cleanup work that exceeds the margin benefit.',
    'Inventory is theoretically infinite but production time is not — shipping expectation and production timeline emails in post-purchase reduce chargebacks and "where is my order" tickets. Sequenzy post-purchase owns production updates; do not bolt on a separate transactional tool without suppressions.',
    'Fix waitlist-to-launch handoff before scaling paid on trends. Captured traffic without launch fulfillment leaks viral moments — Privy collects thousands of waitlist emails, then Sequenzy sends to the full list instead of waitlist order, and the design sells out before true fans convert. Ordered fulfillment is a stack governance rule, not a nice-to-have.',
    'Analytics for POD must track 48h sell-through, margin per email-attributed order, discount dependency ratio, and waitlist conversion — not revenue per send alone. Shopify net sales reconciled weekly against platform attribution; celebrate contribution margin after print, shipping, and discount costs.',
    'Cross-border POD adds currency and production-partner latency. Lifecycle suppressions by market prevent US-only trend alerts to EU subscribers when fulfillment partner differs. Shipping deadline modules belong in post-purchase, not cart recovery on personalized products still in production queue.',
  ],
  merchantStories: [
    {
      name: 'Meme Merch Co.',
      revenue: '$56k/mo viral designs',
      story:
        'Meme Merch captures TikTok traffic with Privy design waitlists tagged by design ID, fires Sequenzy launch to waitlist in signup order within 3 minutes of publish, Omnisend SMS at go-live for checkout opt-in only. Margin cap policy: no cart discount above 10%, no popup stacking on launch day. Viral drop 48h sell-through improved 40% vs blasting full list; unsubscribe on launch sends dropped from 0.6% to 0.2%. Klaviyo added at $80k for niche segment reporting — cat vs dog vs gaming cohorts. Stack cost $210/mo; incremental margin from waitlist-ordered launches tracked at $8.4k/mo in Shopify.',
    },
    {
      name: 'Custom Pet Shirts',
      revenue: '$19k/mo personalization',
      story:
        'Custom Pet Shirts abandonment flow included generic cart emails until they rebuilt with personalized product preview image in Sequenzy email one — recovery rate up 18% without increasing discount depth. Post-purchase production timeline at order +1 day, shipping at fulfillment, review ask removed (low value for custom one-offs). Privy niche capture by pet type feeds welcome branches. Postscript skipped — checkout SMS opt-in at 4%. Stack $140/mo total.',
    },
    {
      name: 'Niche Quote Shop',
      revenue: '$88k/mo bookish POD',
      story:
        'Niche Quote Shop runs community content weekly in Sequenzy — new quote context, author notes, reader poll — with promotional sends only on new design drops. Marsello loyalty removed after finance review showed points on 38% gross margin SKUs destroyed margin on repeat orders. Full-price rate from email-driven orders hit 72%. Klaviyo segments by literary niche (fantasy, romance, classics); collision calendar prevents promo + community email same day. BFCM strategy: early access waitlist only, no sitewide discount deeper than 12%.',
    },
  ],
  stackScenarios: [
    {
      name: 'Viral trend lean',
      description:
        'Privy design waitlist → Sequenzy ordered launch fulfillment → Omnisend SMS at go-live (opt-in only) → margin-capped cart recovery at 10% max → weekly Shopify margin review. No loyalty until repeat rate exceeds 30% on full-price.',
    },
    {
      name: 'Personalization-first',
      description:
        'Privy capture on design tool entry → Sequenzy incomplete-design recovery with preview image → production timeline post-purchase → Klaviyo segment by customization type at scale. SMS only for back-in-stock on design template limits.',
    },
    {
      name: 'Niche community growth',
      description:
        'Sequenzy weekly community content → Klaviyo niche tags by design line → creator collab launch template → Privy waitlist for collabs → no discount stack on launch week. Postscript for superfan early access 2h before email.',
    },
  ],
  stackArchitectureTitle: 'Five-layer print-on-demand stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Design waitlists, niche community opt-in, trend landing capture with design-ID and niche tags before lifecycle handoff.',
      verticalFit:
        'POD capture tags subscribers by design ID, niche (cats, gaming, quotes), and acquisition source (TikTok, organic, paid). Waitlist position stored as profile property for ordered launch fulfillment. Avoid sitewide 20% wheels on viral traffic — margin death on impulse cohorts.',
      failureMode:
        'Sitewide discount popup on viral spike trains coupon hunters; giveaway subscribers enter same welcome as high-intent design-page visitors.',
      operatorTest:
        '48h sell-through from waitlist-ordered launch vs cold list blast — waitlist cohort should convert 2x+ at higher margin.',
    },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'Launch sequences in waitlist order, personalization abandonment with preview, production timeline updates, community content cadence, trend winback without clearance discounts.',
      verticalFit:
        'Sequenzy owns launch fulfillment trigger on publish, incomplete-design recovery within 1h, post-purchase production messaging, and winback with new-drop previews. Margin caps enforced as flow rules — cart recovery cannot exceed 10% without operator override.',
      failureMode:
        'Generic cart email without personalized preview; launch sent to full list ignoring waitlist order; winback offers 25% on dead SKUs.',
      operatorTest:
        'Personalized cart recovery rate and launch waitlist conversion documented last month — both should beat generic baselines.',
    },
    {
      name: 'Multichannel urgency layer',
      tools: 'Omnisend, Postscript',
      role: 'Launch-day email+SMS for 48h sell-through windows — scarce channel, not weekly promo engine.',
      verticalFit:
        'Omnisend suits lean POD needing fast launch email+SMS without Postscript-tier SMS depth. SMS fires at go-live to waitlist opt-in only; one text per design per 72h. Quiet hours and TCPA compliance non-negotiable.',
      failureMode:
        'Deep discount on every launch via SMS+email same hour; weekly SMS promos on thin-margin designs.',
      operatorTest:
        'Margin per SMS-attributed order on last launch — must exceed blended store margin or SMS pauses.',
    },
    {
      name: 'Segmentation layer',
      tools: 'Klaviyo',
      role: 'Niche cohorts, design-line reporting, and predictive engagement when catalog diversifies beyond single trend.',
      verticalFit:
        'Cat lovers excluded from dog-only viral blast; gaming cohort receives collab launches only. Profile pruning after trend spikes prevents Klaviyo bill inflation from one-time viral subscribers.',
      failureMode:
        'Full list blast every micro-trend — unsubscribe spike and margin erosion from irrelevant promos.',
      operatorTest:
        'Revenue per recipient by niche segment last quarter — mismatched sends show as low RPR and high unsub.',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify Analytics',
      role: 'Margin per email order, 48h sell-through, discount dependency ratio, waitlist conversion, stack cost as % of incremental margin.',
      verticalFit:
        'POD cannot trust last-click alone — contribution margin after print, shipping, and discounts is the KPI. Track discount dependency weekly; above 40% means capture and cart layers over-discounting.',
      failureMode:
        'Celebrating launch revenue while fulfillment costs and discounts produce negative margin orders.',
      operatorTest:
        'Finance-reviewed margin on email-attributed orders exists for last month — if only platform ROAS cited, analytics layer is incomplete.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit every app on theme and checkout. Document margin floor policy (max discount %). Map top 5 designs by 48h velocity. Export Privy waitlist tags and consent sources.' },
    { week: 'Week 2', tasks: 'Privy waitlist per design ID with niche tags. Draft Sequenzy launch sequence in waitlist order. Assign layer owners. Document suppression: launch excludes recent buyers of same design.' },
    { week: 'Week 3', tasks: 'Launch personalization abandonment with preview image if applicable. Test incomplete-design trigger within 1h. Community content template in Sequenzy for weekly cadence.' },
    { week: 'Week 4', tasks: 'Production timeline post-purchase at order +1 day. Margin-capped cart recovery live. Reconcile Shopify orders vs platform attribution for weeks 2–4.' },
    { week: 'Week 5', tasks: 'Omnisend SMS on next launch for checkout opt-in only. Quiet hours configured. Measure 48h sell-through waitlist vs email-only cohort.' },
    { week: 'Week 6', tasks: 'Winback branch: new design preview only, no clearance discount. Exclude buyers who purchased in last 30 days. Klaviyo niche tags if catalog has 3+ design lines.' },
    { week: 'Week 7', tasks: 'Sunset unengaged 90+ days before next viral paid push. Review Klaviyo profile count vs engaged — prune one-time viral subscribers.' },
    { week: 'Week 8', tasks: 'Creator collab launch template: waitlist → early access → general. Document collision rules for promo + community sends.' },
    { week: 'Week 9', tasks: 'Holdout 10% of launch list — measure incremental orders in Shopify at day 7. Compare margin not just revenue.' },
    { week: 'Week 10', tasks: 'Stack cost audit: capture + lifecycle + SMS + operator hours. Remove Marsello or loyalty if margin-negative. Retire one overlapping tool.' },
    { week: 'Week 11', tasks: 'Peak prep: freeze discount rules, pause experiments, document viral response playbook for CX.' },
    { week: 'Week 12', tasks: 'Retrospective: sell-through, margin per email order, discount dependency, waitlist conversion. Plan next quarter niche segmentation depth.' },
  ],
  economics: [
    'POD stacks typically run $120–280/mo in tools — Privy ($0–60) + Sequenzy ($50–120) + Omnisend ($0–80) + Klaviyo ($0–100 when added). Resist enterprise suite until margin structure supports operator consolidation savings.',
    'Every discount point matters at 25–40% gross margin. A 15% sitewide popup on a $22 AOV shirt may erase contribution margin entirely after print and shipping. Model incentive depth as finance line item, not marketing creativity.',
    'SMS ROI visible on viral 48h windows — not justified for weekly newsletters. Budget Postscript/Omnisend SMS per launch, not per month flat, until opt-in list and launch frequency support predictable return.',
    'Klaviyo profile costs spike after viral traffic — sunset unengaged and one-time trend subscribers within 60 days of spike or invoice grows faster than niche segmentation value.',
    'Operator hours matter: governed three-tool stack at 4h/week beats five-tool stack at 8h/week collision cleanup. Document suppressions once; revisit quarterly not daily firefighting.',
  ],
  crossLinks: [
    'Execute plays via <a class="link" href="/use-cases/product-launch">product launch</a> and <a class="link" href="/use-cases/discount-strategy">discount strategy</a> playbooks.',
    'Compare capture tools on <a class="link" href="/compare/privy-vs-omnisend">Privy vs Omnisend</a> and lifecycle on <a class="link" href="/compare/sequenzy-vs-omnisend">Sequenzy vs Omnisend</a>.',
    'Governance: <a class="link" href="/guides/tool-sprawl">tool sprawl remediation</a> and <a class="link" href="/guides/attribution">marketing attribution</a>.',
  ],
  faqs: [
    { question: 'What is the best Shopify marketing stack for print-on-demand?', answer: 'Privy for design waitlist capture with design-ID tags, Sequenzy for launch fulfillment and personalization recovery, Omnisend for launch-day email+SMS urgency, Klaviyo for niche segmentation at scale. Margin caps on all incentives. Skip loyalty until repeat full-price rate justifies it.' },
    { question: 'How should POD stores handle viral trend traffic?', answer: 'Waitlist capture during spike with Privy, launch to waitlist in signup order via Sequenzy, SMS to opt-in at go-live only, no deep discount on high-velocity designs. Scale paid only after waitlist handoff tested.' },
    { question: 'What about personalization cart recovery?', answer: 'Email one must include personalized product preview image and complete-design CTA — generic cart emails underperform 15–20% on customized products. Trigger within 1h of abandoned design session.' },
    { question: 'Should print-on-demand brands use loyalty programs?', answer: 'Rarely at thin margins. Community content, early access to drops, and waitlist priority outperform Marsello points unless repeat full-price rate exceeds 30%. Points on 35% margin SKUs often destroy economics.' },
    { question: 'What discount strategy works for POD?', answer: 'Hard cap 10% on cart recovery; no popup+cart stack same session; full-price on trend launches when sell-through likely in 48h. Document margin floor before BFCM — viral weeks tempt destructive discounting.' },
    { question: 'When does SMS make sense for POD?', answer: 'Launch day waitlist opt-in only, one text per design per 72h, quiet hours enforced. Not weekly promo texts. Requires checkout SMS opt-in investment — below 6% opt-in, skip SMS layer.' },
    { question: 'When should POD add Klaviyo?', answer: 'When multiple niches or design lines need cohort reporting and operator manual splits exceed 2h/week — often $70–80k+ monthly revenue. Prune profiles after viral spikes.' },
    { question: 'How should POD winback work?', answer: 'New design announcements and waitlist re-invites for lapsed buyers — not 25% off old inventory. Branch winback by last purchased niche tag. Lapsed meme buyers want fresh trends, not clearance.' },
    { question: 'What metrics prove a POD stack works?', answer: '48h sell-through rate, margin per email-attributed order, discount dependency percentage, waitlist-to-purchase conversion, SMS opt-out on launch weeks, incremental margin reconciled in Shopify weekly.' },
    { question: 'What post-purchase emails do POD stores need?', answer: 'Production timeline at order +1 day, shipping at fulfillment, expectation-setting on custom production time — reduces chargebacks and support tickets. Cross-sell only after delivery on non-custom add-ons.' },
    { question: 'How fast can a POD stack be implemented?', answer: 'Two weeks for waitlist + ordered launch; four weeks for personalization recovery, margin rules, and post-purchase production timeline. Six to eight weeks for Klaviyo niche segmentation and SMS launch branch.' },
    { question: 'What is the biggest POD stack mistake?', answer: 'Aggressive sitewide discounts on viral traffic — high revenue, negative margin. Second biggest: blasting full list on launch instead of waitlist order, burning trust with true fans.' },
  ],
  toolReviews: [
    {
      slug: 'privy',
      paragraphs: [
        'Privy wins POD capture with design-level waitlists, fast Shopify onboarding, and source tags that feed Sequenzy launch branches within minutes.',
        'Avoid high-discount spin wheels on viral traffic — margin preservation beats list growth when gross margin sits below 40%. Tag by design ID and niche before lifecycle handoff.',
        'Not a lifecycle replacement. Pair with Sequenzy for ordered launch fulfillment and margin-capped cart recovery.',
      ],
    },
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy fits POD as lifecycle layer — trend launch in waitlist order, personalization abandonment with preview, production timeline post-purchase, community cadence without promo fatigue.',
        'Agent-first setup helps solo operators ship flows during volatile trend weeks without workflow-builder paralysis.',
        'Measure sell-through and margin per order, not send volume. Pay-per-email economics suit seasonal viral list spikes with large dormant cohorts.',
      ],
    },
    {
      slug: 'omnisend',
      paragraphs: [
        'Omnisend delivers fast launch email+SMS for trend-driven POD brands needing multichannel urgency without Postscript-tier depth.',
        'Prebuilt automations reduce setup time on short trend cycles — critical when design lifespan is 72 hours not 72 days.',
        'Watch SMS costs on frequent launches; cap texts per design. Pair with Privy waitlist for opt-in targeting.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo earns its place when POD catalog diversifies into multiple niches — design-line cohorts, engagement scoring, and launch reporting by segment.',
        'Profile costs spike after viral traffic — sunset one-time subscribers within 60 days. Use for segmentation, not duplicating Sequenzy launch flows without suppressions.',
        'Best when operator documents niche tags and reviews segment overlap quarterly.',
      ],
    },
    {
      slug: 'postscript',
      paragraphs: [
        'Postscript suits POD brands with strong checkout SMS opt-in needing launch-day urgency beyond Omnisend — VIP early access 2h before email on collab drops.',
        'Strict frequency caps: one text per design per 72h. Never weekly promo blasts on thin-margin impulse SKUs.',
        'Requires waitlist tags from Privy for ordered outreach — do not text full list on six-unit restock.',
      ],
    },
  ],
};
