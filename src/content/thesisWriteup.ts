import type { Writeup } from './projectWriteups'

/* The crypto investment thesis, in three parts: the memo as it stood in
   April 2024, the confirmation signals through November, and the
   post-mortem. Every figure is a screenshot from the time; the text is
   Fernando's, lightly re-flowed from the PDF. */
export const thesisWriteup: Writeup = {
  title: 'Investment Thesis',
  subtitle:
    'My 2024–2025 investment thesis. A telling of what I got right and what it cost me.',
  sections: [
    {
      heading: 'Position summary',
      paragraphs: [
        'Asset: $ALB (Alien Base), Base chain.',
        'First entry: April 24, 2024 at $0.05. Average cost: roughly $0.075 over 180 days.',
        'Peak: November 27, 2024 at $0.57. Peak position value: roughly $500,000 across two wallets.',
        'Realized: $8,000. Outcome: total loss, plus $50,000 owed. ALB today: $0.0048.',
        '![My first ALB transaction, April 24, 2024. Every entry in this piece is on-chain.](/images/thesis/first-entry.jpg)',
      ],
    },
    {
      heading: 'The fog',
      paragraphs: [
        'Around April 2024 I put $50,000 into a token most people have never heard about. By late November it was worth close to $500,000. The following summer I had lost it all and was $50,000 in debt after my 20th birthday.',
        'The debt was a loan from family and friends, written up as a contract with real terms. Without that loan, holding too long would have cost me nothing but my gains. With it, the loss did not stop when the tokens ran out. Alienbase went to nearly zero and the $50,000 was still owed, so I spent the following year paying off a bet that had already finished losing.',
        'This period of my life I call the fog, a deeply lonely and reflective period of my life. No one has seen the thought process behind my investment until now.',
        'What follows is a three part story: my memo, thesis confirmation, and post-mortem reflection. The memo is reconstructed from my on-chain history, screenshots, and notes. It is held strictly to what I knew in April 2024. In my writing I will go through what I got right, what I got wrong, what it cost, and what I’d do differently.',
        '![ALB, April 2024 to November 2025. The arrow marks my first entry at roughly five cents.](/images/thesis/alb-chart.jpg)',
      ],
    },
    {
      heading: 'If you only read this far',
      paragraphs: [
        'The thesis: Coinbase had over 100 million users, and nearly all of them exclusively used the Coinbase app. Their crypto sat in Coinbase accounts similar to money in a bank, and they could only buy what Coinbase chose to list. The rest of crypto lives on public blockchains, open ledgers that anyone can read and that no single company controls. Out there you hold your own assets and trade through software instead of through a firm. This is what’s called being on-chain.',
        'In 2023 Coinbase built its own blockchain, called Base, and was incentivized to move its users onto it. If that happened, millions of people would start trading tokens that only exist on Base. Thousands of new tokens were being created every day and picking which one of these would win was a lottery I didn’t want to play.',
        'I went one layer up. On a blockchain you trade through a decentralized exchange, a DEX, which you can picture as software rather than a company. Every trade that passes through a DEX pays a fee, and most DEXes route a share of those fees to the people who hold and lock their token. Owning a DEX token is closer to owning a piece of the exchange than owning a currency. I didn’t need to know which tokens people would gamble on. What I needed to own was the house that they gambled in. I saw this as selling shovels in a gold rush.',
        'Two DEXes were native to Base. Aerodrome was the leader, backed by Coinbase Ventures, holding most of the trading volume and most of the deposits. Alienbase was the challenger, far smaller, and it was building the trading tools that did not exist anywhere on Base. Things like limit orders and recurring buys. Aerodrome positioned itself as the leading liquidity provider while Alienbase pushed its user trading experience.',
        'Aerodrome had already won its market, so I read most of the growth I was betting on as priced in. Its token minted new supply every week with no ceiling, which diluted you if you held it. Alienbase was a fraction of the size of Aerodrome. With a hard cap on how many tokens could ever exist and better tokenomics, the same wave of trading would push price up further. I bid my chips on Alienbase given that the risk to reward ratio looked better.',
        'My entry: I entered on April 24, 2024 at five cents and averaged in over the next 180 days to around 7.5 cents, roughly $50,000 in total. I bought in small pieces as large orders moved the price against me. Before I bought anything I wrote down where I would sell: $0.25, $0.30, $0.35 and $0.50, with a target of $0.70.',
        'What happened: The thesis worked. Base grew faster than any other network that year, the exchanges on it collected the fees exactly as I had drawn it up, and Alienbase peaked at $0.57 on November 27, 2024. My position was worth close to $500,000. Every price I had written down in April got hit. I sold at none of them. Eight months later the position was worth nothing and I owed $50,000 on top of it.',
        'I was right about the chain and right about the layer. I was wrong about the company inside it, and wrong about myself. Here is what I actually got wrong.',
        '1. I compared the two lock systems on generosity instead of duration. Both DEXes paid you for locking your tokens up. Alienbase locked them for thirty days. Aerodrome locked them for up to four years. I saw the thirty day lock as far better because it paid more and trapped me less. A lock only matters against the length of the downturn it has to survive, and a thirty day lock doesn’t survive anything. 60% of Alienbase supply was locked in October, I thought that I was buying into a supply shock but that portion was free to sell by December. Aerodrome holders got the same news and could not move for years. That is why one of them is at $0.49 today and the other is at half a cent.',
        '2. Buying the beta doesn’t always work. I bid my chips on Alienbase largely as a beta play to Aerodrome. I believed that any success that Aerodrome got from increased trading volume would create a tailwind that Alienbase could profit off of. This worked on the way up with Alienbase paying 3.6 times what Aerodrome returned. On the way down that ratio did not hold. Aerodrome fell about 75% and lived. Alienbase fell 98%.',
        '3. TVL is not thesis confirmation. All year I watched total value locked, the money sitting in the exchange, as proof the thesis was working. Price peaked November 27. TVL peaked December 7, ten days later. Deposits chase performance, so they show up after the move instead of before it. Every day in December my numbers were green and the top was already behind me.',
        '4. I focused heavily on bull market analysis and not bear market preservation. I spent 180 days averaging into my positions without allowing flexibility in my thesis. I believed the drawdowns and market wide pullbacks were mid-cycle retraces. I did not spend enough time preparing for the worst. Even when my position was bleeding out over eight months, I did not have set commitments that I went through with. I had extreme conviction that developed into stubbornness.',
        'Everything below is the long version, with the receipts.',
      ],
    },
    {
      heading: 'Part I. The memo',
      paragraphs: [
        'Reconstructed from on-chain history, screenshots, and notes from the time. Everything below is what I knew on April 24, 2024.',
        '*Why 2024?* Bitcoin tends to run on four-year cycles. In April 2024, the latest Bitcoin halving occurred, where miners earn half the new coin revenue per block. This historically marks the start of a crypto cycle. Three months prior, the first spot Bitcoin ETFs had gone live meaning the largest asset managers in the world now could sell Bitcoin exposure. This created pressure to rescind SAB 121, the accounting legislative rule that made it difficult for banks to hold crypto on behalf of clients. 2024 was also an election year with one candidate campaigning on crypto policy directly. With all of these events coinciding I began to question if there was a real opportunity to capitalize on.',
        '*Working down from Coinbase.* I started investigating who was positioned to win from these regulatory changes. FTX collapsed in November 2022 leaving Coinbase as the largest regulated venue left in the US. Coinbase had over 100 million users in custodial accounts benefitting from transaction revenue and a subscription model. All users at the time were off-chain and with Base, their new layer 2 blockchain they released in August 2023, Coinbase was incentivized to migrate users. Base ran on top of Ethereum as the cheaper and faster alternative to trade.',
        'Coinbase began separating itself from being a traditional trading exchange to an “everything app” with payments, stablecoins, and decentralized apps. Brian Armstrong, CEO of Coinbase, quickly became the public face of the chain. Base went from roughly 244,000 users in January to 3.69 million users in February and by April, there were 5.8 million users on-chain.',
        '![The cascade as I had it written down.](/images/thesis/cascade-note.jpg)',
        'If millions of users were arriving on-chain, that meant they would begin trading Base tokens. Figuring out which ones would be traded would be a lottery. Newly created tokens would not be available on the main Coinbase app, but traded through the Coinbase wallet app or a DEX, one of the exchanges that lives as software on the chain itself. If thousands of new tokens were created a day, there was no telling which one would win. Instead of following the masses to pick the best token, I looked to find who was positioned to benefit from all of this trading volume. If a certain player could capture this volume, they could earn fees regardless of which token wins or dies. In a speculative market, that doesn’t require you to be right.',
        'As more users were onboarded, who was positioned to benefit from this trading volume? How could I be positioned to sell pickaxes and shovels in this crypto gold rush?',
      ],
    },
    {
      heading: 'Early days of Base',
      paragraphs: [
        'Trading on Base in early 2024 was far from seamless. If you stayed inside the Coinbase Wallet app, they took an absurd portion of fees and with their routing, you got some of the worst prices available. Coinbase also did not offer any tools to help traders. This meant no limit orders, automated entries, charts worth reading, or anything that a serious trader would look for.',
        'By April, one DEX on Base had already won. Aerodrome, backed by Coinbase Ventures, held the majority of trading volume and money deposited on-chain. If Coinbase continued to bring users on-chain, then Aerodrome would benefit significantly. I passed for two main reasons.',
        'The first was that it had already dominated the market, meaning that the growth I was betting on was largely priced in. Aerodrome also had no cap on its token emissions. With new tokens being minted every week, holding the token meant getting severely diluted. The only way to escape dilution was to lock your tokens. You would escape dilution through a built-in rebase mechanism that rewarded you with an additional token weight to match weekly inflation. Lock periods ranged from one week up to four years. With crypto bull market cycles beginning and ending within two years, a four year lockup meant holders paid for the exchange’s own liquidity. As I went diving into Aerodrome forums, I found holders complaining about the same thing.',
        'Both of those reasons were wrong. I come back to them in Part III.',
        'In April, Aerodrome’s price ran up to $2.00 and sold off hard following a large rally from their market bottom. Posts on reddit and twitter were flooded with fear. I viewed this panic as extremely overdone and looking into the comments, people were not just selling Aerodrome. The same people that were trying to rotate out of their positions began asking each other where to put their money next. One name that kept surfacing was Alienbase. Alienbase was the only other native Base DEX at the time. As I followed this panic, a rotation into Alienbase began to unfold.',
        '![$AERO. The circle marks April 24, 2024, a sell-off I read as a rotation rather than collapse.](/images/thesis/aero-chart.jpg)',
      ],
    },
    {
      heading: 'Alienbase',
      paragraphs: [
        'Alienbase was built different to Aerodrome. Aerodrome marketed itself as the liquidity provider on chain, where Alienbase focused on the trader’s experience. Its token had a hard ceiling of 510 million and their emissions rate was scheduled to cut in half at fixed intervals, similar to Bitcoin halvings. The next emissions cut was scheduled to happen at the end of summer.',
        'As Aerodrome began to sell off, the rotation into Alienbase seemed interesting. This protocol positioned itself as an Aerodrome beta play and was garnering a lot of attention. I kept tabs on what people were saying in the forums and viewed it as alpha into a potential play. I entered Alienbase initially as a quick position, taking advantage of this social arbitrage. The same week I entered, Alien Base launched esALB, their version of locking tokens. You lock up for thirty days to receive a share of the trading fees and a vote in governance.',
        'The more time I spent analyzing Alienbase, the more convicted I got of a fantastic opportunity. I was on their platform daily, in their community discord, and close enough to the people building it. I saw that their roadmap was real and that they were positioned to deliver limit orders, recurring buys, DCA, and perpetuals. Nobody else on Base was building this type of trading terminal. I was betting on a team that I saw consistently build.',
        'If more trading occurred on Alienbase, this meant more fees paid out to people who lock their tokens. Higher payouts incentivized more tokens being locked and the available supply on the open market shrinks. Payouts were in the form of ALB emissions and Ethereum fees. With an emission schedule that was set to halve, supply would begin to decrease. Ethereum fees that were paid out could also be used to buy up more ALB. This flywheel theoretically could produce increased buy pressure. An important caveat is that this all depends on if trading volume shows up. Without it, the machine does not work.',
        'With Bitcoin consolidating at all time highs, large cap rotations would occur. Historically, during bull market cycles, money is rotated out of Bitcoin into Layer 1 protocols like Ethereum, Binance Smart Chain, Solana, etc. Over time, these rotations continue into layer 2 chains like Base. The unique part about Base is that it does not have a specific token. Liquidity would flow directly into thousands of protocols that Base chain housed. If Coinbase continued to bridge users onto Base, Aerodrome would capture a majority of trading volume, and Alienbase would be a beta play.',
      ],
    },
    {
      heading: 'What kills this',
      paragraphs: [
        'The flywheel is a point of contention. Everything paid out to lockers comes from trading fees, if volume falls as scheduled cuts happen, people begin to stop locking and the supply comes back onto the market. Every mechanism I described works just as great for me as it does against me. The locking pools are also thin, a large buy order moves the price before it fills. To combat this, DCA is the best avenue to buy in. On a market wide level, the whole cycle argument rests on an election outcome and a rate environment I do not control.',
        'All bets have a probability of failure but after enough diligence, I was convinced volume would flow into Base. From this volume, Aerodrome would capture significant fees. With their disgruntled holders complaining about long lock periods and recent sell offs, Alienbase was positioned to convert these people. Alienbase was a first mover into the trader’s experience. They offered new tools that previously did not exist on Base and their tokenomics, the rules written into the token’s code for how many can exist and who gets paid, had an interesting flywheel that would boost price if volume landed. With enough information, I bid my chips on this beta play.',
      ],
    },
    {
      heading: 'The position',
      paragraphs: [
        'I entered my position on April 24, 2024 at roughly five cents and averaged in over the following 180 days to somewhere around 7.5 cents, sized small enough each time to avoid paying for my own slippage. I set a target of seventy cents and a ladder out at twenty five, thirty, thirty five, and fifty cents.',
        '![Second entry, April 26, 2024.](/images/thesis/second-entry.jpg)',
        '![Swaps, allocations, conversions to esALB and harvests, running through the summer.](/images/thesis/summer-txns-1.jpg)',
        '![Harvests and transfers, continued.](/images/thesis/summer-txns-2.jpg)',
      ],
    },
    {
      heading: 'Part II. Thesis confirmation',
      paragraphs: [
        'Confirmation signals from May to November 2024.',
        'The six months after I entered my trade turned out to be the hardest. Bitcoin would chop sideways throughout the summer while Base kept growing. People who had rotated into Alienbase in April got bored and began leaving. My thesis remained intact that as Base continued to grow in TVL, the money sitting inside a protocol’s pools, and Volume, Alienbase would benefit greatly. So, I kept accumulating. I was convinced that the upcoming Alienbase halving would create supply shock and awaited new all time highs for Bitcoin so that layer 2 rotations could begin.',
        '![Bitcoin price action, Summer 2024.](/images/thesis/btc-summer-2024.jpg)',
        'I found that these boring stretches are where most plans go to die. With the average crypto investor’s attention span being that of a goldfish, most people run out of patience and look for the next thing.',
        'Base crossed two billion dollars in total value locked in September, up roughly 370% since January. By late November it was approaching four billion and sitting fifth among all chains, with 790,000 active addresses in a day. A chain less than a year old had passed networks with years of head starts.',
        '![Base total value locked, from launch through August 2026.](/images/thesis/base-tvl.jpg)',
        '![Base at fifth among all chains, November 2024.](/images/thesis/base-fifth.jpg)',
        'Around the middle of October, Aerodrome held $1.345B in TVL on Base with Alienbase trailing at $16.87M. Aerodrome was roughly 80x larger and I saw potential in the upside that came from this tailwind. Alienbase was the second among DEXes native to Base and would profit from the rising tide of Aerodrome.',
        'Then the deposits came in faster than at any point in the protocol’s life. Alienbase went from $16.87M in the middle of October to over $80M in the first week of December, close to 5x in seven weeks. Every one of those days I read as the thesis confirming itself.',
        '![Alien Base total value locked. $16.87M in mid-October, $80.69M on December 7, 2024.](/images/thesis/alienbase-tvl.jpg)',
        'In August after being heavily involved within the Alienbase community, I was let into the closed beta for the trading tools. This turned out to be an earned secret that I would lean into. I got it from being active within the community, not from being early to a chart.',
        '![August 16, 2024. Limit orders, five weeks before the public launch.](/images/thesis/limit-orders-beta.jpg)',
        '![Same day. A live limit order set one percent below market.](/images/thesis/limit-order-live.jpg)',
        'Alienbase would publicly launch limit orders, range orders, and recurring buys the following month and their emissions halving would land within the same window. By October, more than 60% of all Alienbase tokens in circulation were locked up by holders. The flywheel I saw in April was running in full motion: increased volume produces fees, fees produce payouts, larger payouts incentivized more tokens locked, more locked supply created supply shock.',
        '![Main wallet on October 29, 2024.](/images/thesis/main-wallet-oct-29.jpg)',
        'I had also been tracking a wallet that was accumulating ALB at an absurd rate and locking almost all of it. At the peak it held more than 34 million locked tokens worth roughly $16,000,000. Someone with far more capital than me understood the same setup and committed to it. This was a signal that was spread throughout the community and served as a marketing tool to recruit more disgruntled Aerodrome users. Whales were finally noticing the protocol and beginning to bid their chips.',
        '![The wallet: 0x66d883e1b6c6a959e90b72e6b2333d783c57a327. As of 08/01/2026.](/images/thesis/whale-wallet.jpg)',
        'On November 12, Coinbase launched free US bank accounts, meaning users could receive payments from Upwork or Deel directly into non-custodial wallets with no transfer fees. The following week, Jesse Pollak announced 4.7% APY on USDC held on-chain in Coinbase Wallet. Coinbase was now paying its own users to leave custody and migrate on-chain.',
        '![November 12, 2024.](/images/thesis/coinbase-bank-accounts.jpg)',
        '![November 20, 2024.](/images/thesis/coinbase-usdc-apy.jpg)',
        'On November 27, 2024, Alienbase peaked at $0.57 following the Bitcoin rally to $100,000 that same month. My position was now worth roughly $500,000 across two wallets. Every sell target of mine had been reached. Alienbase hit $0.25, $0.30, $0.35, and $0.50.',
        'I sold at none of them.',
      ],
    },
    {
      heading: 'Part III. The post-mortem',
      paragraphs: [
        'What I got right: Coinbase migrated its users on-chain and Base compounded faster than any other network. The DEX layer captured this volume, and fees accrued regardless of which tokens people were gambling on. The native Base DEX tokens caught this move with Alienbase up 1300% from its low and Aerodrome’s 361% over the same stretch.',
        'I was right about the chain and right about the layer. What follows is where I was wrong, starting with the part that would follow me into any other market.',
      ],
    },
    {
      heading: 'The analytical failure',
      paragraphs: [
        'I rejected Aerodrome because it had endless token emissions and a four year locking period. Today Aerodrome handles close to 60% of all trading on Base, and $1.3B in deposits. It currently trades around $0.49 with Alienbase trading under half a cent.',
        'The two reasons I saw as defects were actually the reason Aerodrome survived. The four year lock meant that when the cycle turned, its holders structurally could not sell and the supply couldn’t hit the market.',
        'The test I should have run measures the lock period against the length of the downturn it has to survive. Alienbase locked for thirty days. Aerodrome locked for up to four years. I compared those two on how generous they were, how much of the fee stream came back to me and how quickly I could get liquid again. I scored Alienbase higher on both. I never compared them on what happens in a bear market. A thirty day lock means the entire float can be back on the market within a month. By October more than 60% of ALB was locked and I called it a supply shock. It was actually a thirty day supply shock. The same 60% that made the flywheel spin in October was free to sell by December, and it did. Aerodrome holders got identical news and could not do anything about it for years.',
        'I had written in my own memo that crypto bull cycles begin and end within two years. That observation was correct and I drew the wrong conclusion from it. If the cycle is two years then a four year lock covers the whole thing and a thirty day lock does nothing. The question was never how long am I trapped. It was how long everyone else was trapped.',
        'The specific features I underwrote did not survive either. Alienbase later voted to abandon the fixed schedule of emission cuts in favor of a flexible one and raise the hard ceiling from 510 million to 1 billion. The scarcity I bought was voted away and I never priced that in. Aerodrome’s rules were ugly and fixed. Alienbase’s were elegant and amendable.',
        'Alienbase was never its own bet. It was a higher beta version of a view about Aerodrome, and when I was right about the sector it paid me 1300% against Aerodrome’s 361%, about 3.6 times the move. When the market turned, that ratio did not hold. Aerodrome fell about 75% and lived. Alienbase fell 99% and did not. Once a protocol gets small enough the price stops being a multiple of anything, because there is nobody left on the other side of your sell.',
        'I passed on Aerodrome partly because I viewed the market pricing in its dominance. In a market with real liquidity and network effects the obvious winner usually keeps winning, and what you pay for that is often the cheapest thing available. Being contrarian is a tool but I had turned it into a personality.',
        'I optimized for token scarcity when I should have been looking at liquidity durability.',
      ],
    },
    {
      heading: 'The execution failure',
      paragraphs: [
        'Before I invested in April, I wrote down price targets where I would sell. Seeing all of them get reached in November, I still held.',
        'The first reason is that the number I was watching could not have warned me. Price peaked on November 27 at $0.57. TVL peaked on December 7 at $80.69M, ten days later. Deposits chase the asset’s performance, so they arrive after the move instead of before it. Every day in early December I was looking at more TVL, more deposits, more tokens locked, and all of those numbers told me I was right. TVL then fell under $20M by spring. The deposits that made December feel like a beginning were the top.',
        'I never asked whether what I was monitoring leads or lags the decision I would actually make. A lagging indicator is fine for retrospective analysis. It can’t tell you what to do, and if it is the only thing on your screen it will keep you in a position for too long.',
        'The second reason is that I never committed to the ladder. I spent seven months building up a thesis that was confirming itself and the moves felt inevitable as time went on. I was so invested within the community that I fed off of the hivemind. I negotiated with myself on price targets and never drew a line I committed to. What followed was a gradual bleed over eight months, a series of drops that each looked like the bottom. I didn’t have strict rules for selling on the way up and neither did I for selling on the way down. Instead, I waited for the price that would make my decision painless and it never came. I believed that Alienbase would rebound and convinced myself that we were in the historical mid-cycle pullback. Hope is not a viable strategy.',
        'I had a concrete thesis that lacked structure. It told me what to buy and when but I never allowed myself to think that I could be wrong. Admitting defeat felt like losing a version of who I was and I put off this uncomfortable feeling until it was too late. I spent more of my time questioning if my thesis could remain intact and self-negotiating whether I was right. I convinced myself through the pullbacks that I was still correct and to let it ride. This only led to further turmoil and suffering. Watching my position bleed over eight months destroyed me. It got so bad to the point of panic attacks at 3AM. I told no one about what had happened and largely felt that it was my burden to carry.',
        'I often contemplated what this large sum of money would do to my life if I sold at the top. Fortunately, I did sell a small portion and was able to splurge on Christmas gifts for my family and buy expensive shoes for myself. During this period in college, I spent most of my money on DoorDash, Ubers, and going out with friends. This is what made it so difficult to sell. I did not have a strong enough reason to liquidate my position. I had not built a foundation of beliefs or direction on what to do after I sold. This entire journey was my livelihood and I felt as long as my portfolio kept rising, I would be okay.',
        'What I actually needed was to share my thesis with others. I begged my hometown friends to accumulate with me over the summer and still no one was interested. This continued for months on end and after enough attempts, I cemented in my mind that I had to go on this journey alone. I needed someone from the outside to tell me how this looked. In the moments where I couldn’t make a decision, I needed a trusted friend to bounce ideas off of.',
      ],
    },
    {
      heading: 'What I’d do differently',
      paragraphs: [
        'The most important change I’d implement would be to increase my visibility. I would spend less time trying to convince others to invest with me and instead ask them what they thought about my positions. I used to feel that asking for help was admitting you failed, when it’s necessary to prevent failure. Outside perspectives are just as important as your own conviction. I carried the burden of loss with me and it cost me panic attacks at 3AM. You often suffer more in imagination than in reality. Reaching out to others about this story still feels like losing a version of myself. It is difficult to accept loss, but it is crucial if you want change. It is why I am publicly sharing this for the first time. If I had just one person telling me to rethink holding, I don’t think this loss would have happened.',
        'I would underwrite survival before upside. What holds this together in a 75% drawdown? Who is locked in and for how long? How long will potential downturns run? Whose supply hits the market first, and which of the mechanisms I like can be undone?',
        'I would size against the exit instead of the entry. What share of the real trading depth do I become at the size I want, and who is buying when I want out?',
        'I would check whether the numbers I watch lead or lag the decision I would make. Anything that only confirms what already happened does not belong on the screen I am making decisions from.',
        'I would also set commitments and go through with them. This means that before I invest, I would write down my targets. What would invalidate them and what would be the worst case scenario? Allowing yourself to be nimble is the name of the game. If you can pivot and have set strategies in place, this will give your mind clarity. This is far better than trying to convince yourself that your original plan can still work. Stay analytical!',
        'I had a thesis that I worked out for months and was too stubborn to pivot. What I needed was to remind myself why I got into the investment in the first place, and whether that aligned with my current situation. I’d make sure to have conviction, not stubbornness. I would also prioritize reflection and be ok with admitting defeat. The only way to win is to taste what failure is like.',
        'Ironically, this was one of the best things that happened to me. I had developed a heightened level of self-pride and ego that I would not have seen without this loss. I was deeply humbled and learned to appreciate all I have. Even when you are $50,000 in debt, being 20 years old means you are rich beyond measure. This was an experiment that went wrong, but it taught me lessons that I truly cherish. I was able to acknowledge the faults in my thinking and this served as a costly lesson.',
        '> I learned to love what I wish had not happened.\n— Stephen Colbert',
      ],
    },
    {
      heading: 'My thoughts on crypto',
      paragraphs: [
        'I believe that most crypto is an extraction game. It is the same way I feel about prediction markets. I developed real analysis and stood behind my process, but most protocols are useless. There is no product underneath Alienbase that matters. It is a good trading interface built by competent founders, but value was never created. This is the same story throughout 98% of crypto. It has only been exacerbated by the memecoin frenzy going around. The arena is simply a glorified casino. I am now in a period of my life where I want to direct my analytical thinking into companies that are producing meaningful change. This was a fun but costly experiment.',
        'This is not to say that the entire crypto industry is useless. I believe that Bitcoin, real world assets (RWA), and stablecoins are crucial to digital finance. Bitcoin is what initially got me interested in crypto and what keeps me staying. I see it as a permanent, scarce store of value. It is the ultimate, incorruptible foundation for the future of global finance.',
        'If you are thinking about investing in crypto, buy Bitcoin ;)',
      ],
    },
  ],
}
