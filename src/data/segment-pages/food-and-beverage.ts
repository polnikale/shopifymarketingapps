import type { SegmentPageContent } from './types';

export const foodAndBeverage: SegmentPageContent = {
  slug: 'food-and-beverage',
  heroSubtitle:
    'Consumption windows, perishability deadlines, and subscription skips need a stack where Recharge gates every send — Sequenzy consumption replenishment, Omnisend launch urgency, Klaviyo flavor cohorts, and shipping-cutoff SMS, not fashion drop logic on 7-day yogurt cycles.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Consumption reorder, flavor launches, perishability clarity' },
    { label: 'Multichannel', tool: 'Omnisend', reason: 'Launch sell-through email+SMS for limited flavors' },
    { label: 'Subscription', tool: 'Klaviyo', reason: 'Recharge sync, skip recovery, churn scoring' },
    { label: 'Capture', tool: 'Privy', reason: 'Flavor waitlist and dietary preference tags' },
  ],
  intro: [
    'Food and beverage Shopify brands operate on consumption physics — 7-day yogurt, 30-day coffee, 90-day hot sauce, weekly meal kit delivery. The marketing stack must time replenishment at actual consumption rates, communicate perishability and shipping cutoffs clearly, and respect subscription state before any promotional send. Fashion drop calendars and 30-day universal replenishment destroy relevance and margin on perishable SKUs.',
    'Limited-time flavors and seasonal releases are launch events, not evergreen promos. Privy waitlist by flavor, Sequenzy launch to waitlist, Omnisend SMS for 48h sell-through on opt-in list — same playbook as POD trend drops but with expiration date urgency instead of design virality.',
    'Subscription-heavy food brands need Recharge/Skio as stack governor. Active subscribers suppress single-purchase replenishment; skip events trigger save branch with recipe content or flavor preview, not immediate 20% off that trains skip-for-deal behavior.',
    'Shipping deadline modules belong in lifecycle layer — regional cutoff dates in email and SMS 72h and 24h before holiday windows. Gift and self-purchase branches differ; gift buyers need recipient delivery clarity not replenishment for themselves.',
    'Perishability anxiety drives support tickets — post-purchase storage instructions, consumption timeline, and freshness guarantee in Sequenzy post-purchase reduce "is it still good?" contacts more than discount codes.',
    'Compliance and allergen communication constrain copy — education sequences list ingredients and allergen warnings on first purchase of new SKU. Supplement-adjacent health claims need legal review; stack governance includes approved copy blocks version-controlled.',
    'Margin after shipping promos is the real KPI — free shipping thresholds in email must reconcile with weight and cold-chain cost. Analytics layer tracks margin after shipping subsidy on email-driven orders weekly.',
    'SMS excels at shipping cutoff and delivery day for perishables — Postscript or Omnisend when box ships and when reorder window opens. Not weekly promotional texts; food subscribers appreciate timely reorder, resent spam.',
    'Yotpo reviews on taste and freshness supply social proof for consideration-heavy categories — craft hot sauce, specialty coffee. Photo reviews in browse abandonment before discount on gift sets.',
    'Wholesale and café B2B accounts need tag separation from DTC replenishment — read b2b-wholesale guide if hybrid. Consumer winback with 25% off on trade accounts destroys pricing integrity.',
    'Cold-chain and regional availability require market suppressions — West Coast subscribers do not receive East Coast-only fresh delivery promos. Shopify market tags flow into Klaviyo segments.',
    'Winback for lapsed food buyers: new flavor announcement and seasonal menu preview, not deep discount on stale inventory approaching code date.',
    'First stack fix: consumption replenishment by SKU category, Recharge suppressions, shipping deadline module for Q4, flavor launch waitlist handoff. Loyalty after repeat rate exceeds 25% on full-price.',
    'Meal kit and perishable brands need temperature and delivery window clarity in every post-purchase and replenishment email — reduces chargebacks more than 10% off reorder incentive.',
    'Café and restaurant wholesale hybrid stores must read b2b-wholesale guide — MOQ reorder for trade accounts separate from DTC consumption replenishment entirely.',
    'Cold-chain SKUs need regional suppressions — subscribers outside serviceable zip codes must not receive fresh delivery promos that cannot fulfill.',
    'Coffee subscription and one-time bag purchasers share Klaviyo account but different Sequenzy branches — collision audit monthly on promotional vs replenishment overlap.',
    'Limited-run flavor launches coordinate with Privy waitlist and Omnisend 48h SMS — same architecture as POD trend drops with perishability cutoff overlay.',
  ],
  merchantStories: [
    {
      name: 'Roast & Route Coffee',
      revenue: '$94k/mo specialty coffee',
      story:
        'Roast & Route set replenishment by bag size and household consumption quiz — 2-week vs 4-week cycles. Privy quiz at capture; Sequenzy reminder at 80% consumption; Recharge subscribers suppressed. Limited roast launches: waitlist → launch → 48h Omnisend SMS. Margin after free-shipping promos tracked weekly — reduced shipping subsidy depth 5% after audit. Subscription skip-save with brewing guide content outperformed 15% off.',
    },
    {
      name: 'Ferment Kitchen',
      revenue: '$52k/mo refrigerated ferments',
      story:
        'Ferment Kitchen added shipping cutoff dynamic content by zip region in Sequenzy — holiday gift orders up 31% with fewer missed-cutoff support tickets. Perishability education post-purchase day 1. Cold-chain SKU suppressions for non-serviceable zips. Postscript delivery-day SMS only. No winback discount — seasonal flavor preview.',
    },
    {
      name: 'SnackCrate Direct',
      revenue: '$128k/mo snack subscription',
      story:
        'SnackCrate merged box preview (day -7) with flavor reveal UGC from prior subscribers. Klaviyo churn score routes to Sequenzy save branch. Skip recovery leads with "next box sneak peek" not coupon. Referral in month 2. DTC one-time snack purchases separate flow from subscribers — collision incidents dropped to zero after tag audit.',
    },
  ],
  stackScenarios: [
    {
      name: 'Consumable DTC',
      description:
        'Privy consumption quiz → Sequenzy SKU-timed replenishment → Recharge sync → shipping cutoff modules → Omnisend launch SMS for limited flavors.',
    },
    {
      name: 'Subscription-first food',
      description:
        'Recharge events → Klaviyo churn → Sequenzy preview/skip/churn → Yotpo taste UGC in preview → referral month 2.',
    },
    {
      name: 'Seasonal and gift-heavy',
      description:
        'Shipping deadline email+SMS cascade → gift buyer branch → self-purchase replenishment separate → flavor waitlist launches.',
    },
  ],
  stackArchitectureTitle: 'Six-layer food and beverage stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Flavor waitlists, dietary preference and allergen tags, consumption quiz for reorder math at opt-in.',
      verticalFit:
        'Food capture tags dietary restrictions, flavor preferences, and household consumption rate. Waitlist per limited SKU. No deep discount on perishable first-touch.',
      failureMode:
        'Generic popup — nut-allergy subscriber receives peanut product promos.',
      operatorTest:
        'Allergen/dietary tags present on 90%+ new subscribers from quiz popup.',
    },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'Consumption replenishment, flavor launch fulfillment, perishability education, shipping cutoff campaigns, gift vs self branches.',
      verticalFit:
        'Replenishment at 80% consumption by SKU category. Launch to waitlist in order. Shipping cutoff dynamic content by region. Post-purchase storage instructions day 1.',
      failureMode:
        '30-day universal reorder on 7-day and 90-day SKUs mixed in one flow.',
      operatorTest:
        'Replenishment timing documented per product category — audit 3 SKUs.',
    },
    {
      name: 'Subscription intelligence',
      tools: 'Klaviyo + Recharge/Skio',
      role: 'Subscription status, skip/churn events, box preview triggers, and replenishment suppressions.',
      verticalFit:
        'Active subscribers skip single-purchase replenishment on subscribed SKU. Preview day -7. Skip-save content-first. Churn score >0.7 proactive branch.',
      failureMode:
        'Replenishment promo to active weekly meal kit subscriber.',
      operatorTest:
        'Zero replenishment-to-subscriber collisions last billing cycle.',
    },
    {
      name: 'Multichannel urgency',
      tools: 'Omnisend, Postscript',
      role: 'Limited flavor launch SMS, shipping cutoff reminders, delivery-day notification for perishables.',
      verticalFit:
        'SMS 72h and 24h before regional shipping cutoff. Launch day waitlist opt-in only. Delivery-day confirm for cold-chain.',
      failureMode:
        'Weekly SMS promos on perishable SKUs — opt-out and waste guilt.',
      operatorTest:
        'Shipping cutoff SMS conversion vs email-only — measure incremental orders before cutoff.',
    },
    {
      name: 'Proof layer',
      tools: 'Yotpo',
      role: 'Taste reviews, freshness testimonials, and unboxing photos in browse and gift-set consideration.',
      verticalFit:
        'Gift set browse includes taste review quotes. Review request delivery +3 days for ambient, +1 day check-in for perishable quality.',
      failureMode:
        'No proof on gift consideration — default to discounting premium baskets.',
      operatorTest:
        'Gift set conversion with taste UGC module vs without.',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify',
      role: 'Margin after shipping promos, replenishment conversion, subscription retention, launch sell-through, waste/return proxy via support tags.',
      verticalFit:
        'Weekly margin on email orders including shipping subsidy. Cohort replenishment by consumption segment.',
      failureMode:
        'Free shipping promo drives revenue negative on heavy cold-chain orders.',
      operatorTest:
        'Finance margin line includes shipping subsidy impact monthly.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Map SKU consumption windows. Audit Recharge suppressions. List allergen/dietary segmentation gaps.' },
    { week: 'Week 2', tasks: 'Privy consumption quiz or flavor waitlist. Dietary tags on new subscribers.' },
    { week: 'Week 3', tasks: 'Sequenzy replenishment by category at 80% consumption. Recharge suppressions live.' },
    { week: 'Week 4', tasks: 'Post-purchase perishability education. Reconcile replenishment conversion.' },
    { week: 'Week 5', tasks: 'Shipping cutoff dynamic content pilot for next holiday window.' },
    { week: 'Week 6', tasks: 'Flavor launch waitlist → fulfillment sequence. Omnisend SMS opt-in branch.' },
    { week: 'Week 7', tasks: 'Subscription preview day -7 if applicable. Skip-save content branch.' },
    { week: 'Week 8', tasks: 'Yotpo taste reviews in gift browse. Regional market suppressions.' },
    { week: 'Week 9', tasks: 'Gift vs self-purchase branch audit. Margin after shipping promo review.' },
    { week: 'Week 10', tasks: 'Winback new flavor preview. Exclude recent purchasers.' },
    { week: 'Week 11', tasks: 'Q4 shipping cutoff cascade tested. Collision calendar for promo + replenishment.' },
    { week: 'Week 12', tasks: 'Retrospective: replenishment rate, subscription retention, margin after shipping, launch sell-through.' },
  ],
  economics: [
    'Food stacks $250–500/mo — Recharge + Klaviyo + Sequenzy + Omnisend/Postscript. Shipping subsidy mistakes cost more than tool fees.',
    'Consumption accuracy prevents waste and churn — late coffee reminder loses to competitor; early yogurt promo wastes margin.',
    'Limited flavor launches justify SMS cost — everyday replenishment may be email-only until opt-in list grows.',
    'Cold-chain shipping promos need finance approval threshold — model per-order contribution before automating free shipping in cart recovery.',
    'Subscription preview content investment reduces skip rate — often outperforms skip-save discounts on food boxes.',
  ],
  crossLinks: [
    'Related: <a class="link" href="/for/subscription-boxes">subscription boxes</a>, <a class="link" href="/use-cases/replenishment">replenishment playbook</a>.',
    'Seasonal: <a class="link" href="/use-cases/holiday-gifting">holiday gifting</a>, <a class="link" href="/guides/seasonal-campaigns">seasonal governance</a>.',
    'Compare: <a class="link" href="/compare/omnisend-vs-klaviyo">Omnisend vs Klaviyo</a>.',
  ],
  faqs: [
    { question: 'Best marketing stack for food and beverage Shopify?', answer: 'Privy flavor/dietary capture, Sequenzy consumption replenishment and shipping cutoffs, Klaviyo + Recharge subscription sync, Omnisend launch SMS, Yotpo taste proof.' },
    { question: 'How set replenishment timing for food?', answer: 'By SKU consumption category — days to consume based on size and usage quiz. Trigger at 80% not calendar 30 days for all.' },
    { question: 'Subscription vs one-time replenishment?', answer: 'Recharge active status suppresses replenishment on subscribed SKU. Separate flows. Collision audit monthly.' },
    { question: 'Shipping cutoff emails?', answer: 'Dynamic content by region in Sequenzy — 72h and 24h cascade. SMS for opt-in. Gift and self branches differ.' },
    { question: 'Limited flavor launches?', answer: 'Privy waitlist → Sequenzy ordered fulfillment → Omnisend SMS 48h sell-through. Full list blast wastes perishable inventory.' },
    { question: 'Perishability post-purchase?', answer: 'Storage instructions day 1, freshness FAQ, support contact — reduces tickets and chargebacks on refrigerated SKUs.' },
    { question: 'SMS for food brands?', answer: 'Shipping cutoff, delivery day, reorder window — not weekly promos. High value for perishable timing.' },
    { question: 'Allergen segmentation?', answer: 'Capture dietary restrictions at quiz. Suppress allergen-conflict product promos. Compliance-critical.' },
    { question: 'Margin after shipping promos?', answer: 'Track weekly in Shopify — free shipping on heavy cold-chain can erase contribution. Finance threshold on automated offers.' },
    { question: 'Winback for food?', answer: 'New flavor and seasonal menu preview — not deep discount on near-code-date inventory.' },
    { question: 'Metrics?', answer: 'Replenishment conversion, subscription retention, margin after shipping, launch 48h sell-through, cutoff campaign conversion.' },
    { question: 'Biggest food stack mistake?', answer: '30-day universal replenishment across mixed consumption SKUs — wrong timing trains ignore of all food emails.' },
  ],
  toolReviews: [
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy food lifecycle — consumption replenishment, perishability education, shipping cutoff dynamic content, flavor launch fulfillment.',
        'Agent content helps seasonal menu and storage instruction copy without compliance-heavy manual rebuilds.',
        'Gift vs self branches and regional suppressions configured per market.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo Recharge integration depth, churn scoring, and flavor cohort reporting for food subscription brands.',
        'Market and dietary segmentation at scale. Subscription event suppressions on replenishment flows.',
        'Reporting on margin-sensitive segments — pair with Shopify finance view.',
      ],
    },
    {
      slug: 'omnisend',
      paragraphs: [
        'Omnisend launch email+SMS for limited flavor sell-through when lean team needs speed.',
        'Replenishment automations need consumption customization — reject default 30-day.',
        'Strong fit under $80k until Klaviyo subscription depth required.',
      ],
    },
    {
      slug: 'privy',
      paragraphs: [
        'Privy flavor waitlist and dietary quiz capture — tags feed replenishment math and allergen suppressions.',
        'Waitlist per limited SKU for ordered launch. Avoid deep discount wheels on perishable first purchase.',
        'Handoff to Sequenzy within 5 minutes on opt-in.',
      ],
    },
    {
      slug: 'rejoiner',
      paragraphs: [
        'Rejoiner cart recovery for one-time food gift purchases — inventory and perishability check before send.',
        'Exclude subscription subscribers from DTC cart paths. Shipping cutoff in recovery email two.',
        'Supplement to Sequenzy replenishment not replacement.',
      ],
    },
  ],
};
