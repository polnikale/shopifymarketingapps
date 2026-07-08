import type { SegmentPageContent } from './types';

export const subscriptionBoxes: SegmentPageContent = {
  slug: 'subscription-boxes',
  heroSubtitle:
    'Subscriber retention, skip behavior, and box-preview engagement need a stack where Recharge events gate every send — Sequenzy skip recovery, Klaviyo churn prediction, Omnisend box previews, and Yotpo unboxing proof, not DTC cart recovery logic on monthly billing relationships.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Skip recovery, churn prevention, box preview sequences' },
    { label: 'Subscription sync', tool: 'Klaviyo', reason: 'Recharge/Skio event depth and churn scoring' },
    { label: 'Multichannel', tool: 'Omnisend', reason: 'Box preview email+SMS for lean box brands' },
    { label: 'Proof', tool: 'Yotpo', reason: 'Unboxing UGC in preview and referral campaigns' },
  ],
  intro: [
    'Subscription box Shopify brands sell continuity, not one-time transactions. The marketing stack must read Recharge, Skio, or Bold subscription state before any promotional send fires — active subscribers need box previews and skip-save offers, not "reorder your favorites" DTC replenishment emails. Churn peaks at month 3–4 when novelty fades; the stack coordinates preview content, skip recovery, and referral incentives across email, SMS, and loyalty layers.',
    'Skip behavior is the leading churn signal, not cancellation itself. A subscriber who skips two consecutive months needs a different branch than a happy active subscriber — Sequenzy skip-recovery sequences with box teaser content outperform immediate discount offers that train skip-to-wait-for-deal behavior.',
    'Box preview emails drive retention more than promotional blasts. Omnisend or Sequenzy preview sequences 5–7 days before billing date increase excitement and reduce passive churn. Yotpo unboxing UGC from prior subscribers embedded in preview emails supplies social proof without discounting.',
    'Referral and gifting campaigns are stack plays, not isolated broadcasts. Privy gift subscription capture tags gift buyers separately from subscribers; Sequenzy gift confirmation branches away from subscriber preview flows. Gifting spikes Q4 — collision calendar prevents gift buyers receiving skip-recovery emails.',
    'SMS for subscription boxes works for billing reminder and shipping notification urgency — not weekly promotional texts. Postscript or Omnisend SMS when box ships or skip deadline approaches; TCPA opt-in at checkout with clear subscription identification.',
    'Winback for churned subscribers differs from DTC winback. Former box subscribers need "what you missed" preview content and flexible restart offers — not generic 25% off that ignores why they cancelled (too much product, wrong category fit, budget).',
    'Segmentation must separate active, paused, skipped, churned, and gift-recipient profiles with priority rules. Klaviyo predictive churn scores and Recharge event properties feed Sequenzy branches; overlapping segments without priority cause preview emails to hit churned profiles.',
    'Loyalty and referral layers (Marsello, Yotpo Loyalty, or native referral apps) integrate with preview campaigns — refer-a-friend bonus in month 2–3 when novelty fade risk peaks. Points on subscription renewals need exclusion during skip-save offer windows.',
    'Compliance and transparency reduce chargeback-driven churn. Billing date, skip deadline, and cancellation path clarity in email footer and dedicated preference center — not buried links. Lifecycle layer owns transactional-adjacent education; legal reviews cancellation copy annually.',
    'Analytics for box brands track skip-to-active recovery rate, churn by subscriber month, box preview engagement correlation with retention, and referral revenue from email — not DTC-style second purchase within 60 days. Holdout tests on skip-recovery quarterly prove incrementality.',
    'Agency-built box stacks often miss subscription state suppressions because agencies optimize DTC playbooks. In-house ownership of Recharge → Klaviyo → Sequenzy sync documentation survives employee turnover; retainer teams rarely maintain skip-branch logic through platform updates.',
    'BFCM for subscription boxes means gift subscription campaigns and annual plan upgrades — not sitewide discounts that cannibalize monthly ARPU. VIP early access for existing subscribers to gift bundles; collision calendar separates subscriber preview from gift prospect nurture.',
    'The first stack fix for most box brands: wire Recharge/Skio events into lifecycle suppressions, launch box preview 7 days before bill date, build skip-recovery branch before winback discounts. Capture optimization is secondary to retention mechanics.',
    'Cross-sell one-time add-ons in box context differs from DTC cross-sell. Add-on offers belong in preview email or subscriber portal reminder — not cart abandonment flows that treat subscribers like anonymous browsers.',
  ],
  merchantStories: [
    {
      name: 'Crate & Cultivate',
      revenue: '$124k/mo lifestyle boxes',
      story:
        'Crate & Cultivate ran Klaviyo promotional blasts to full list including active subscribers — NPS dropped when subscribers received "subscribe and save 20%" while already paying monthly. Stack rebuild: Recharge events sync to Klaviyo, Sequenzy owns preview (day -7), skip-recovery (day -3 after skip), churn prevention at month 3 with Yotpo unboxing UGC. Skip-to-active recovery rose from 22% to 41%. Postscript ships notification SMS only. Churn at month 4 fell from 18% to 12%. Stack $420/mo; saved ARPU exceeded tool cost 8x.',
    },
    {
      name: 'PupParcel',
      revenue: '$47k/mo pet subscription box',
      story:
        'PupParcel had no gift buyer segmentation — gift purchasers received subscriber skip emails. Privy gift capture tags + Sequenzy branch fixed collision. Pet profile quiz at signup feeds box customization preview content. Omnisend preview email+SMS for lean team. Referral campaign in month 2 drove 14% of new subscribers from email. Lean stack under $280/mo.',
    },
    {
      name: 'SpiceRoute Monthly',
      revenue: '$89k/mo food subscription',
      story:
        'SpiceRoute Monthly added recipe content in Sequenzy preview emails tied to upcoming box SKUs — engagement rate on preview doubled vs product-list-only emails. Skio skip events trigger save offer with recipe archive access, not immediate 15% off. Klaviyo churn score above 0.7 enters proactive outreach. Yotpo reviews on individual spices post-delivery feed cross-sell in month 5. Perishability shipping deadline in SMS 48h before regional cutoff.',
    },
  ],
  stackScenarios: [
    {
      name: 'Lean box startup',
      description:
        'Recharge sync → Sequenzy preview + skip recovery → Omnisend billing SMS → Yotpo unboxing UGC in preview. Referral at month 2. Skip loyalty until month-6 retention proven.',
    },
    {
      name: 'Growth retention focus',
      description:
        'Skio events → Klaviyo churn scoring → Sequenzy preview, skip-save, month-3 churn prevention → Postscript ship + skip deadline SMS → Marsello referral points → Privy gift capture.',
    },
    {
      name: 'Premium curated box',
      description:
        'Justuno preference quiz → Klaviyo personalization → Sequenzy editorial preview content → Yotpo UGC community → VIP annual upgrade path. No winback discount — restart with missed-box preview.',
    },
  ],
  stackArchitectureTitle: 'Six-layer subscription box stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Subscriber waitlist, gift subscription capture, preference quizzes tagging box interest and pet/household profile before first box ships.',
      verticalFit:
        'Box capture qualifies gift vs self-subscribe intent and preference data for customization preview. Gift tags suppress subscriber-only flows. Quiz answers feed preview content personalization in Sequenzy.',
      failureMode:
        'Generic 15% popup attracts one-month churners; gift and subscriber sources blended in welcome.',
      operatorTest:
        'Gift purchasers received zero skip-recovery emails last month — verify in suppression documentation.',
    },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'Box preview sequences, skip recovery, churn prevention at risk months, referral campaigns, churned winback with missed-box content.',
      verticalFit:
        'Preview fires day -7 before bill date; skip-recovery day -3 after skip event; month-3 churn prevention branch for novelty-fade cohort. All branches check Recharge/Skio status before send.',
      failureMode:
        'DTC cart recovery and replenishment promos sent to active subscribers; skip-recovery offers discount before content save attempt.',
      operatorTest:
        'Zero replenishment-style promos sent to active subscribers last billing cycle — audit live flows.',
    },
    {
      name: 'Subscription intelligence layer',
      tools: 'Klaviyo + Recharge/Skio',
      role: 'Subscription events, churn prediction, billing properties, and segment priority rules feeding lifecycle branches.',
      verticalFit:
        'Klaviyo receives skipped, paused, churned, active events in real time. Predictive churn score routes high-risk subscribers to proactive Sequenzy branch. Segment priority: churned > skipped > active for conflicting triggers.',
      failureMode:
        'Stale subscription status — cancelled subscribers still receive preview emails.',
      operatorTest:
        'Spot-check 10 churned profiles against emails received last 30 days — should be winback or nothing.',
    },
    {
      name: 'SMS urgency layer',
      tools: 'Postscript, Omnisend',
      role: 'Shipping notification, skip deadline reminder, gift deadline urgency — not promotional weekly texts.',
      verticalFit:
        'SMS when box ships and 48h before skip deadline for at-risk cohort. One SMS per billing cycle max for promotional-adjacent content. Quiet hours enforced.',
      failureMode:
        'Weekly SMS promos to subscribers already paying monthly — opt-out spike and brand damage.',
      operatorTest:
        'SMS opt-out rate during billing week below 1.5% — if higher, audit frequency and content relevance.',
    },
    {
      name: 'Proof layer',
      tools: 'Yotpo Reviews, UGC',
      role: 'Unboxing photos and subscriber testimonials in preview, referral, and churn-prevention emails — social proof that next box is worth keeping.',
      verticalFit:
        'Pull Yotpo UGC from prior box themes into preview email two. Review requests post-delivery day +5 on individual products, not box cancellation window.',
      failureMode:
        'UGC orphaned on site — preview emails still discounting because creative lacks proof assets.',
      operatorTest:
        'Preview email with UGC block vs without — measure skip rate correlation (lower skip = proof working).',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify, Klaviyo, Recharge',
      role: 'Skip recovery rate, churn by month, preview engagement vs retention, referral revenue, ARPU impact of skip-save offers.',
      verticalFit:
        'Monthly cohort retention chart by acquisition source. Holdout 10% on skip-recovery quarterly. Finance reconciles subscription MRR impact of email-driven saves.',
      failureMode:
        'Celebrating promotional email revenue while subscriber churn erases MRR gains.',
      operatorTest:
        'Month-4 churn rate trended down last two quarters — if flat, preview and skip branches need revision.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit Recharge/Skio → Klaviyo/Sequenzy sync. Map every email sent to subscribers last 30 days. Identify collision incidents (promo to active subscriber). Export gift vs subscriber tags.' },
    { week: 'Week 2', tasks: 'Document subscription state suppressions. Assign layer owners. Build preview sequence day -7 with box content. Pause DTC-style promos to active list.' },
    { week: 'Week 3', tasks: 'Launch skip-recovery branch: content save first, discount only on email two for high churn score. Wire Yotpo UGC into preview email two.' },
    { week: 'Week 4', tasks: 'Gift buyer segmentation live. Reconcile subscriber email volume vs churn rate weeks 2–4.' },
    { week: 'Week 5', tasks: 'Month-3 churn prevention branch for novelty-fade cohort. Referral campaign creative with Marsello or native referral.' },
    { week: 'Week 6', tasks: 'Postscript/Omnisend ship notification and skip deadline SMS. Quiet hours and opt-in audit.' },
    { week: 'Week 7', tasks: 'Churned winback: missed-box preview content, flexible restart. No generic 25% off.' },
    { week: 'Week 8', tasks: 'Klaviyo churn score threshold documented. Proactive outreach for score > 0.7.' },
    { week: 'Week 9', tasks: 'Holdout 10% skip-recovery — measure incremental saves in Recharge at day 14.' },
    { week: 'Week 10', tasks: 'Q4 gift campaign prep: Privy gift capture, collision calendar for gift vs subscriber.' },
    { week: 'Week 11', tasks: 'Annual plan upgrade path for month-6+ happy subscribers. VIP early access to limited boxes.' },
    { week: 'Week 12', tasks: 'Retrospective: churn by month, skip recovery, preview engagement, referral MRR. Plan next quarter content calendar integration.' },
  ],
  economics: [
    'Box stacks run $280–550/mo — Recharge/Skio ($20–100) + Klaviyo ($50–200) + Sequenzy ($50–150) + Yotpo ($0–100) + Postscript ($50–150). One saved subscriber month often covers entire stack cost.',
    'Skip-save discount depth erodes ARPU — model save offer margin impact. Content-first save (bonus item, recipe archive, early sneak peek) often outperforms 15% off without training skip behavior.',
    'Klaviyo profile count includes churned — sunset or suppress churned 90+ days from promotional sends; keep for winback only. Profile hygiene protects deliverability and invoice size.',
    'Agency retainer for "email marketing" without subscription sync expertise wastes spend — in-house Recharge event documentation pays off within one churn reduction cycle.',
    'Gift subscription Q4 revenue spikes should not cannibalize January subscriber MRR — track gift-to-subscriber conversion separately from gift-only purchasers.',
  ],
  crossLinks: [
    'Playbooks: <a class="link" href="/use-cases/replenishment">replenishment</a> (subscription-aware), <a class="link" href="/use-cases/winback">winback</a>, <a class="link" href="/use-cases/holiday-gifting">holiday gifting</a>.',
    'Vertical overlap: <a class="link" href="/for/food-and-beverage">food and beverage</a> for perishable box variants.',
    'Governance: <a class="link" href="/guides/cross-channel-coordination">cross-channel coordination</a>.',
  ],
  faqs: [
    { question: 'What is the best marketing stack for subscription box Shopify stores?', answer: 'Recharge/Skio sync to Klaviyo for subscription intelligence, Sequenzy for preview/skip/churn lifecycle, Omnisend or Postscript for ship and deadline SMS, Yotpo for unboxing UGC in preview. Privy for gift capture. Subscription state gates every send.' },
    { question: 'Why do subscribers churn at month 3–4?', answer: 'Novelty fade — preview content and month-3 churn prevention branches address this before discounting. Box preview engagement correlates with retention; invest in preview creative not promo blasts.' },
    { question: 'How should skip recovery work?', answer: 'Content save first (sneak peek, bonus recipe, exclusive digital content) on day -3 after skip. Discount only on email two for high churn-score cohort. Never train skip-to-wait-for-deal.' },
    { question: 'Should box brands send cart abandonment emails?', answer: 'Not to active subscribers — they are not cart shoppers. One-time add-on abandonment is separate flow with subscription status check. DTC cart logic on subscribers causes collision and confusion.' },
    { question: 'When does SMS make sense for subscription boxes?', answer: 'Box shipped notification, skip deadline 48h warning, gift shipping cutoff — not weekly promos. Requires checkout opt-in. One billing-cycle cap on promotional-adjacent SMS.' },
    { question: 'How handle gift subscriptions in the stack?', answer: 'Privy gift capture tags gift buyers. Separate confirmation and reminder flows from subscriber preview. Gift recipients never receive skip-recovery. Q4 collision calendar mandatory.' },
    { question: 'Does Sequenzy replace Klaviyo for box brands?', answer: 'Sequenzy owns lifecycle execution (preview, skip, churn); Klaviyo owns subscription event depth, churn scoring, and reporting. Most box brands need both with documented sync.' },
    { question: 'What metrics prove box stack ROI?', answer: 'Skip-to-active recovery rate, churn by subscriber month, preview email engagement vs retention correlation, referral MRR from email, incremental saves on holdout tests.' },
    { question: 'How should winback work for churned subscribers?', answer: 'Missed-box preview content showing what they lost, flexible restart without deep discount first. Branch by stated cancellation reason if collected. Not generic DTC winback.' },
    { question: 'Should box brands run BFCM discounts?', answer: 'Gift subscription campaigns and annual plan upgrades — not sitewide discounts cannibalizing monthly ARPU. Existing subscribers get gift bundle early access, not 30% off their own subscription.' },
    { question: 'How fast implement subscription box stack?', answer: 'Two weeks for Recharge sync and preview sequence. Four weeks for skip-recovery and gift segmentation. Eight weeks for churn scoring, referral, and holdout testing.' },
    { question: 'Biggest subscription box stack mistake?', answer: 'Treating subscribers like DTC email list — promotional blasts, cart recovery, and replenishment emails to active paying subscribers. Second: skip-recovery leading with discount instead of content save.' },
  ],
  toolReviews: [
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy fits box brands as lifecycle layer — preview sequences, skip recovery, month-3 churn prevention, and referral campaigns with Recharge-aware suppressions.',
        'Agent-assisted branching helps small teams iterate preview content monthly without rebuilding complex Klaviyo trees.',
        'Pair with Klaviyo subscription events — Sequenzy executes, Klaviyo scores and reports.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo benchmark for subscription event depth — Recharge/Skio integration, churn prediction, and cohort reporting when box catalog and segments grow complex.',
        'Owns segment priority rules and predictive churn routing to Sequenzy branches. Profile hygiene on churned subscribers protects deliverability.',
        'Cost scales with profiles — suppress churned from promos, keep for winback only.',
      ],
    },
    {
      slug: 'omnisend',
      paragraphs: [
        'Omnisend suits lean box brands needing preview email+SMS and ship notifications without full Postscript investment.',
        'Prebuilt automations accelerate preview launch for teams under $80k MRR. Watch SMS costs on weekly-adjacent sends.',
        'Verify Recharge sync depth vs Klaviyo before choosing as sole data layer at scale.',
      ],
    },
    {
      slug: 'yotpo-email-sms',
      paragraphs: [
        'Yotpo UGC from unboxing feeds preview and referral campaigns — proof layer reduces skip rate more than discount in many box categories.',
        'Review requests on individual box products post-delivery; integrate photos into Sequenzy preview templates.',
        'Loyalty/referral module optional when native referral app already handles month-2 referral push.',
      ],
    },
    {
      slug: 'rejoiner',
      paragraphs: [
        'Rejoiner targets subscription-adjacent recovery for box brands with one-time add-on storefronts — cart recovery on non-subscription SKUs only.',
        'Must exclude active subscribers from DTC recovery flows. Best as supplement when box shop sells individual products alongside subscription.',
        'Audit collision with Sequenzy preview before install.',
      ],
    },
  ],
};
