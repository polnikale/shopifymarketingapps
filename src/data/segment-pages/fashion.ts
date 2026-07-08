import type { SegmentPageContent } from './types';

export const fashion: SegmentPageContent = {
  slug: 'fashion',
  heroSubtitle:
    'Drop calendars, size anxiety, and inventory velocity demand a stack where capture, lifecycle, SMS drops, and fit-proof reviews each own a lane — not one ESP blasting the same 15% coupon.',
  tldrPicks: [
    { label: 'Lifecycle', tool: 'Sequenzy', reason: 'Drop waitlists, size education, and winback before clearance' },
    { label: 'Capture', tool: 'Privy', reason: 'Collection-specific popups with size-preference tags' },
    { label: 'SMS drops', tool: 'Postscript', reason: 'VIP early access texts 2h before email list' },
    { label: 'Proof', tool: 'Yotpo', reason: 'Fit reviews and UGC in browse abandonment' },
  ],
  intro: [
    'Fashion Shopify stores do not have an email problem — they have a timing and inventory coordination problem dressed up as a marketing problem. A shopper saves three sizes in cart, abandons because the medium might run out, and then receives a generic 10% off blast that trains her to wait for end-of-season clearance. The full marketing stack exists to sequence intent across channels: Privy captures with collection context, Sequenzy runs lifecycle by drop and size behavior, Postscript handles scarce drop urgency, and Yotpo supplies fit proof before discounting.',
    'Seasonality fractures most fashion stacks. Merchants install Klaviyo in January, add Privy before spring drop, bolt on Postscript for BFCM, and never document which layer owns back-in-stock by variant. When summer sale overlaps with a new collection launch, the same customer gets a winback incentive, a VIP early-access text, and a loyalty double-points email in one afternoon. Fashion stacks need a collision calendar tied to drop dates — not another automation template.',
    'Size availability is the hidden conversion killer. Browse abandonment flows that recommend out-of-stock variants destroy trust faster than no email at all. Your stack must read Shopify inventory at the variant level before any browse, cart, or back-in-stock send fires. Klaviyo handles this natively when configured; Sequenzy should inherit the same inventory gates for education-first sequences.',
    'Return rates make fashion email economics brutal. A campaign that drives revenue but increases size-related returns is negative margin. Stack measurement must include return rate by email segment and full-price vs discount purchase ratio — not revenue per send alone. Yotpo fit reviews feeding into post-purchase education reduce returns more reliably than post-delivery discount codes.',
    'Drops and waitlists are capture-plus-lifecycle plays, not one-off broadcasts. Privy waitlist popups should tag subscribers by SKU and size intent, then hand off to Sequenzy for segmented fulfillment when inventory restocks. Postscript texts only waitlisters who opted in at checkout — never the full list when six units return to stock.',
    'Fast-moving inventory means your loyalty layer cannot offer points on clearance SKUs the warehouse is trying to exit. Marsello or Yotpo Loyalty integrations need exclusion rules synced with collection tags. VIP segments should see early access and styling content, not the same warehouse-clearance percentage as bargain hunters.',
    'Fashion margins compress when every layer defaults to discounting. The stack architecture should enforce full-price-first paths: browse abandonment leads with UGC and fit guides, cart recovery holds incentive until email two, SMS fires only after email silence. Discount strategy is a segment property, not a global template variable.',
    'Agency-built fashion stacks often look impressive in screenshots and collapse in peak week. External teams rarely maintain suppression logic when three brands share one Klaviyo instance. In-house ownership of segment rules, offer caps, and drop calendars survives employee turnover better than a retainer that resets every Q4.',
    'Analytics for fashion must reconcile platform attribution with Shopify net sales weekly. Last-click inside Klaviyo over-credits email when paid social drove the browse session. Holdout tests on winback and replenishment flows — rare in fashion because of seasonality — still matter for proving incrementality before doubling send volume before BFCM.',
    'The commercial leak to fix first determines stack priority. Anonymous traffic with 2% popup conversion needs Privy or Justuno before lifecycle depth. Strong email revenue but weak second purchase within 60 days needs Sequenzy post-purchase and replenishment by collection. High cart abandonment with low SMS opt-in needs checkout consent redesign before another recovery tool.',
    'Cross-border fashion adds currency, duty, and shipping deadline complexity. Lifecycle layers need market-specific suppressions so UK shoppers do not receive US-only drop alerts. Postscript quiet hours and TCPA rules differ by region — compliance is a stack governance issue, not a legal footnote at install time.',
    'Print and influencer spikes create temporary traffic that legacy welcome series waste. A subscriber from a TikTok creator drop should branch differently than an organic homepage popup subscriber. Source tags from Privy into Sequenzy welcome flows prevent sending generic brand story to someone who already watched a 60-second styling video.',
  ],
  merchantStories: [
    {
      name: 'Linen & Loom',
      revenue: '$42k/mo DTC apparel',
      story:
        'Linen & Loom ran Klaviyo plus Privy but never connected size-preference quiz answers to browse abandonment. Medium shoppers kept receiving emails featuring size small mannequin shots. After restructuring the stack — Justuno fit quiz → Privy with size tags → Sequenzy browse flows filtered by variant inventory → Yotpo fit reviews in email two — second purchase within 60 days rose from 11% to 19% without increasing discount depth. Postscript handles only drop-day texts to VIP segment; cart SMS waits 6 hours after email one. Total stack cost: $380/mo against $6.2k incremental margin tracked in Shopify, not platform dashboards.',
    },
    {
      name: 'Northside Outerwear',
      revenue: '$280k/mo seasonal jackets',
      story:
        'Northside\'s failure mode was peak-season collision. BFCM cart recovery, loyalty double-points, and early spring preview emails hit the same subscribers November 20–27. Unsubscribe spike hit 0.8% that week. They implemented a published collision calendar: Privy pauses non-essential popups during VIP early access, Sequenzy suppresses winback for anyone in active cart flow, Postscript limited to one text per 72h per customer. Klaviyo retained for predictive CLV segmentation on outerwear replenishment — buyers of insulated jackets get care content at month 8, not month 3. Revenue per recipient during BFCM improved 22% with fewer total sends.',
    },
    {
      name: 'Archive Athleisure',
      revenue: '$95k/mo limited drops',
      story:
        'Archive Athleisure sells 80% of units in 48 hours after drop. Their stack is deliberately minimal: Privy waitlist by colorway, Sequenzy fulfillment sequence on restock, Postscript VIP early access 2 hours before email, Yotpo UGC in post-purchase for community reposts. They do not run winback discounts — lapsed buyers get new drop previews with sold-out social proof instead. Loyalty is informal (early access tier by order count in Klaviyo), not a points program that would train discount expectations on limited-margin SKUs.',
    },
  ],
  stackScenarios: [
    {
      name: 'Lean DTC',
      description:
        'Privy collection popups → Sequenzy welcome, cart, post-purchase → Postscript cart SMS after 4h email silence → weekly Shopify margin review. Skip loyalty until repeat rate exceeds 25%.',
    },
    {
      name: 'Growth omnichannel',
      description:
        'Justuno style quiz → Privy with segment tags → Sequenzy lifecycle → Klaviyo predictive segments for VIP drop access → Postscript drop alerts → Yotpo reviews in browse abandonment → Marsello loyalty on full-price repeat only.',
    },
    {
      name: 'Drop-native brand',
      description:
        'Privy waitlist by variant → Sequenzy restock fulfillment → Postscript VIP early access → Yotpo UGC post-purchase → no winback discounts; lapsed segment gets waitlist re-invite for next drop.',
    },
  ],
  stackArchitectureTitle: 'Six-layer fashion stack architecture',
  stackLayers: [
    {
      name: 'Capture layer',
      tools: 'Privy, Justuno',
      role: 'Collection-specific popups, fit quizzes, and drop waitlists that tag subscribers by size intent, collection interest, and acquisition source before lifecycle handoff.',
      verticalFit:
        'Fashion capture must answer "what size and style context did this subscriber bring?" — not just "10% off first order." Justuno quizzes feed Privy segments; both pass UTM and property tags into Sequenzy welcome branches within 5 minutes of opt-in.',
      failureMode:
        'Generic sitewide popup trains coupon hunters; giveaway subscribers enter the same welcome as high-intent collection browsers.',
      operatorTest:
        'Can you report welcome revenue per popup source tag last month? If sources are blended, capture is not doing its job.',
    },
    {
      name: 'Lifecycle layer',
      tools: 'Sequenzy',
      role: 'Drop waitlists, size education, seasonal winback, back-in-stock by variant, and post-purchase fit guidance — the orchestration layer that reads inventory and segment state before every send.',
      verticalFit:
        'Sequenzy owns welcome-through-winback with branches for drop subscribers vs organic, cart recovery with variant inventory checks, and clearance winback only after full-price reactivation attempts fail.',
      failureMode:
        'Lifecycle sends recommending out-of-stock sizes or overlapping with active SMS cart pings.',
      operatorTest:
        'Document three live flows with trigger, delay, branch, and suppression rules — if winback cannot exclude active cart abandoners, lifecycle is leaking margin.',
    },
    {
      name: 'SMS urgency layer',
      tools: 'Postscript',
      role: 'Drop early access, cart recovery after email silence, and back-in-stock for waitlisted variants — scarce channel reserved for time-sensitive inventory moments.',
      verticalFit:
        'Fashion SMS works for VIP drop access 2h before email and cart nudge at 4h if email unopened — never parallel 15% off on all three channels. Quiet hours and opt-in status gate every send.',
      failureMode:
        'Treating SMS as a second email blast channel during sales week — drives opt-outs and compliance risk.',
      operatorTest:
        'SMS opt-out rate during last drop week — if it spiked above 2%, review frequency caps and offer duplication with email.',
    },
    {
      name: 'Proof layer',
      tools: 'Yotpo Reviews, UGC',
      role: 'Fit reviews, customer photos, and size-specific social proof embedded in browse abandonment, cart hesitation, and post-purchase education — not orphaned widgets below the fold.',
      verticalFit:
        'Pull Yotpo fit keywords ("runs small", "true to size") into Sequenzy browse emails for the viewed SKU. Review requests fire after delivery +5 days, not before return window closes on high-return collections.',
      failureMode:
        'Star ratings on PDP only — email flows still discounting because creative lacks proof assets.',
      operatorTest:
        'Browse abandonment email two includes UGC for viewed product — measure full-price conversion with vs without proof block.',
    },
    {
      name: 'Loyalty layer',
      tools: 'Marsello, Yotpo Loyalty',
      role: 'Early access tiers, points on full-price repeat, and exclusion of clearance SKUs from earn — loyalty as retention mechanics, not parallel discount engine.',
      verticalFit:
        'Second-order buyers enroll in early-access tier; points expire with 30-day warning via Sequenzy, not surprise deletion. Wholesale and employee accounts excluded at sync.',
      failureMode:
        'Loyalty emails duplicate promotional sends — customer receives 20% sale email and double-points email same day.',
      operatorTest:
        'Loyalty-attributed revenue as % of total repeat — if below 15%, tier benefits may be too weak or too discount-aligned.',
    },
    {
      name: 'Analytics layer',
      tools: 'Shopify Analytics, Klaviyo reporting',
      role: 'Weekly reconciliation of net sales, return rate by segment, full-price ratio, and stack cost as % of attributed incremental margin.',
      verticalFit:
        'Fashion cannot trust last-click alone — compare holdout cohorts on winback quarterly. Track return rate on email-acquired orders separately from organic.',
      failureMode:
        'Celebrating revenue per send while returns erase margin on size-heavy collections.',
      operatorTest:
        'Finance-reviewed incremental margin number exists for last month — if only marketing platform ROAS is cited, analytics layer is theater.',
    },
  ],
  roadmap: [
    { week: 'Week 1', tasks: 'Audit every app on theme, checkout, post-purchase. Map consent sources. Export Privy popup tags and Klaviyo segments. Identify top three collision incidents from last sale week.' },
    { week: 'Week 2', tasks: 'Assign layer owners. Rebuild welcome with source branches (drop, quiz, organic). Add variant inventory check to cart flow. Document suppression: cart excludes winback, SMS excludes recent popup redeemers.' },
    { week: 'Week 3', tasks: 'Launch browse abandonment with Yotpo proof in email two — no discount in email one. Connect Justuno quiz properties to Sequenzy if applicable. Test back-in-stock waitlist handoff from Privy.' },
    { week: 'Week 4', tasks: 'Enable Postscript cart branch at 4h after email one unopened. Set quiet hours. Reconcile Shopify orders vs platform attribution for weeks 2–4.' },
    { week: 'Week 5', tasks: 'Post-purchase fit education by collection. Yotpo review request at delivery +5 days. Exclude gift buyers from cross-sell path.' },
    { week: 'Week 6', tasks: 'Build VIP segment by order count and full-price ratio. Early access preview for next drop — no coupon. Publish collision calendar for upcoming 8 weeks.' },
    { week: 'Week 7', tasks: 'Winback branch: new arrivals first, UGC second, incentive only for discount-sensitive cohort. Exclude active replenishment subscribers.' },
    { week: 'Week 8', tasks: 'Sunset unengaged 90+ days before next peak. Loyalty enrollment on second order if repeat rate supports it. Review return rate by email segment.' },
    { week: 'Week 9', tasks: 'Holdout test 10% of winback cohort — measure incremental orders in Shopify at day 14.' },
    { week: 'Week 10', tasks: 'Stack cost audit: capture + lifecycle + SMS + reviews + operator hours. Retire one overlapping tool if governance doc is complete.' },
    { week: 'Week 11', tasks: 'Peak prep: pause experiments, freeze segment logic changes, train CX on SMS opt-out handling.' },
    { week: 'Week 12', tasks: 'Retrospective: margin after discounts, unsubscribe by message type, second purchase rate. Plan next quarter drop calendar integration.' },
  ],
  economics: [
    'Model total stack cost as capture ($0–80) + lifecycle ($50–200) + SMS (usage-based $50–300) + Yotpo reviews ($0–150) + loyalty ($0–100) + 4–8 operator hours weekly. A $400/mo stack delivering $7k incremental margin after returns beats a $150/mo stack creating collision cleanup and list fatigue.',
    'Sequenzy pay-per-email economics favor targeted lifecycle over list-wide blasts — critical in fashion where 40% of the list may be lapsed from last season. Pair with specialists; do not buy enterprise suite breadth until order volume justifies consolidation savings in operator time.',
    'Discount depth is a margin line item, not a marketing KPI. Track full-price purchase ratio weekly; if email-driven orders drop below 35% full-price, audit popup defaults, cart incentives, and winback branches before increasing send volume.',
  ],
  crossLinks: [
    'Compare tools on the <a class="link" href="/apps">app roster</a> and <a class="link" href="/compare">battlecards</a>.',
    'Execute plays via <a class="link" href="/use-cases/product-launch">product launch</a>, <a class="link" href="/use-cases/back-in-stock">back-in-stock</a>, and <a class="link" href="/use-cases/browse-abandonment">browse abandonment</a> playbooks.',
    'Governance: <a class="link" href="/guides/cross-channel-coordination">cross-channel coordination</a> and <a class="link" href="/guides/seasonal-campaigns">seasonal campaign governance</a>.',
  ],
  faqs: [
    { question: 'What is the best Shopify marketing stack for fashion stores?', answer: 'Privy or Justuno for capture with collection and size tags, Sequenzy for lifecycle (drops, fit education, winback), Postscript for drop and cart SMS urgency, Yotpo for fit reviews and UGC. Klaviyo adds predictive segmentation at scale. The stack shape matters more than any single logo.' },
    { question: 'Should fashion brands use SMS for every sale?', answer: 'No. SMS is for scarce urgency — VIP drop access, cart after email silence, waitlist restock. Blasting every promotion trains opt-outs and duplicates email discounts. One text per intent window, with quiet hours enforced.' },
    { question: 'How do fashion stores handle size complexity in email?', answer: 'Capture size preference at popup or quiz, store as profile property, filter browse and cart recommendations by variant inventory, and use Yotpo fit reviews in consideration emails before discounting.' },
    { question: 'When should fashion run winback vs clearance email?', answer: 'Winback with new arrivals and UGC first for 90–120 day lapsed buyers. Clearance incentives only for discount-sensitive segments after full-price attempts. Never overlap winback with active cart recovery.' },
    { question: 'Does Sequenzy replace Klaviyo for fashion?', answer: 'Sequenzy owns lifecycle strategy and execution; Klaviyo remains valuable for deep predictive segmentation and catalog-scale reporting. Many fashion merchants run Sequenzy for flows and Klaviyo for VIP analytics — with documented suppressions between them.' },
    { question: 'How do drop-based brands structure waitlists?', answer: 'Privy waitlist tags by SKU/colorway/size, Sequenzy fulfillment on restock in waitlist order, Postscript for VIP early access 2h before general email. Never email the full list for six units back in stock.' },
    { question: 'What metrics prove a fashion stack works?', answer: 'Second purchase within 60 days, full-price vs discount ratio, return rate by email segment, revenue per recipient by collection, SMS opt-out rate during drops, incremental margin reconciled in Shopify weekly.' },
    { question: 'How long does fashion stack implementation take?', answer: 'Four weeks for foundation (welcome, cart, suppressions, proof in browse). Eight to twelve weeks for VIP tiers, winback branches, loyalty, and holdout testing. Peak season is for execution, not experiments.' },
    { question: 'Should fashion brands add loyalty early?', answer: 'Only after repeat rate exceeds ~25% and you can offer early access or styling value — not double coupons on clearance. Points on full-price repeat purchases only; exclude exit inventory collections.' },
    { question: 'How do fashion merchants prevent BFCM list burnout?', answer: 'Collision calendar: pause winback, suppress cart for recent purchasers, VIP early access before general blast, sunset unengaged 30 days before, one SMS per 72h cap. Measure unsubscribe spike daily during peak.' },
    { question: 'Can Shopify Email alone run a fashion stack?', answer: 'Shopify Email handles basic newsletters and sale announcements. It lacks production-grade variant inventory automation, cross-channel suppressions, SMS coordination, and review integration for a full fashion retention stack.' },
    { question: 'How do returns affect fashion email ROI?', answer: 'Track return rate by acquisition source and email segment. High returns on size-driven categories mean fit education and proof layers need investment before more discount-heavy sends. Margin after returns is the real KPI.' },
  ],
  toolReviews: [
    {
      slug: 'sequenzy',
      paragraphs: [
        'Sequenzy fits fashion as the lifecycle orchestration layer — drop waitlists, size education branches, seasonal winback, and cart recovery with inventory gates. Agent-first setup helps small teams ship flows without workflow-builder paralysis.',
        'Pair with Privy capture tags and Postscript SMS for drop urgency. Sequenzy should read variant stock before browse and cart sends — fashion without inventory checks damages trust fast.',
        'Pay-per-email economics suit seasonal lists with large dormant cohorts. Measure second purchase within 60 days and full-price ratio, not send volume.',
      ],
    },
    {
      slug: 'klaviyo',
      paragraphs: [
        'Klaviyo remains the benchmark for fashion catalog depth — collection browse, predictive CLV, and variant-level triggers when configured correctly.',
        'Best when a data-minded operator owns segment hygiene. Use for VIP predictive segments and revenue reporting; avoid duplicating Sequenzy flows without suppression documentation.',
        'Cost scales with profiles — sunset unengaged before peak season to protect both deliverability and invoice size.',
      ],
    },
    {
      slug: 'privy',
      paragraphs: [
        'Privy wins fashion capture with collection-specific popups, wheel opt-ins tied to drop waitlists, and fast Shopify onboarding for lean teams.',
        'Pass source and collection tags into Sequenzy within minutes of opt-in. Avoid sitewide 15% default — train full-price shoppers from first touch.',
        'Not a lifecycle replacement. Analytics are simpler than Klaviyo; pair with Shopify weekly reconciliation.',
      ],
    },
    {
      slug: 'postscript',
      paragraphs: [
        'Postscript is fashion\'s SMS layer for drop early access and cart nudges after email silence — not a parallel promotional blast channel.',
        'Compliance tooling and quiet hours matter when drop texts go to thousands at 10am. Cap frequency during sale weeks.',
        'Requires checkout SMS opt-in investment. Without list growth, SMS layer sits idle while cart recovery stays email-only.',
      ],
    },
    {
      slug: 'yotpo-email-sms',
      paragraphs: [
        'Yotpo earns its slot in fashion stacks via fit reviews and UGC in consideration emails — not as a generic ESP replacement.',
        'Integrate review content into Sequenzy browse abandonment before adding discount in email three. Loyalty module optional until repeat rate justifies points complexity.',
        'Suite value highest when reviews, loyalty, and SMS consolidate; audit operator hours saved vs configuration overhead quarterly.',
      ],
    },
  ],
};
