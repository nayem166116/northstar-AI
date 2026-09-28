// Long-form copy for every card on the blog. Keyed by article title.
// body lines: "## ..." = heading, "> ..." = pull quote, anything else = paragraph.
const ARTICLES={

"Automating the slowest step in shipping hardware":{chip:"Founder story",by:"Alex Rivera",date:"June 2026",read:"6 min read",img:"blog/hero.jpg",body:[
 "Ask a hardware team where their last launch slipped and you will rarely hear about the physics. You hear about certification: the months spent assembling test evidence, chasing standards clauses and rewriting the same technical file for a different market.",
 "Saphira AI is building for exactly that step. Its agents read the applicable standards, map them against a product design, and assemble the compliance evidence engineers would otherwise compile by hand. The pitch is not that certification disappears. It is that the work stops being a bottleneck owned by one overloaded person.",
 "## Why this is a real market",
 "Certification is mandatory, repeatable and badly tooled — three conditions that usually point to software. Every regulated market adds another version of the same document set, and the cost of getting it wrong is a blocked shipment rather than a bad quarter.",
 "> The unglamorous step in a process is usually the one worth automating first.",
 "It is also a wedge. Once a system understands a product's design intent well enough to defend it to a regulator, it is well positioned to sit underneath test planning, supplier documentation and change management.",
 "## What we watch for",
 "We look for founders who have lived inside the workflow, who can describe the failure modes in specifics, and who are willing to sell into teams that do not enjoy buying software. Saphira's team came in with all three."]},

"Becoming essential to the AI revolution":{chip:"Founder story",by:"Alex Rivera",date:"May 2026",read:"5 min read",img:"blog/stories/story-1.jpg",body:[
 "The interesting AI companies of the next few years will not all be model companies. Some of them will be the ones that make regulated, physical industries able to move at software speed.",
 "Certification and compliance software is a good example. It is the quiet bottleneck in hardware: the point where a finished design waits on paperwork. Teams attacking it have to understand standards, engineering data and how an auditor actually reads a file.",
 "## The bottleneck nobody markets",
 "Compliance work is invisible until it is late. Because it sits at the end of a programme, delay there is the most expensive delay in the whole process, and it is also the least measured.",
 "> If a task is measured in months and nobody owns it, that is a product.",
 "The companies we find compelling here start with evidence generation, then expand into the design decisions upstream. That order matters: you earn the right to change how engineers work by first removing a job they dislike."]},

"In the arena":{chip:"Founder story",by:"Priya Nair",date:"May 2026",read:"4 min read",img:"blog/stories/story-2.jpg",body:[
 "Most industrial sites already have more cameras than they can watch. The footage is recorded, stored and almost never used, because reviewing it requires a person with time.",
 "Zapdos Labs treats that archive as a query surface. Instead of dashboards of motion alerts, its video agents answer questions: when did this line stop, how often does this step get skipped, which bay is the constraint this week.",
 "## What changes on the floor",
 "The first thing operators notice is that they stop describing incidents from memory. A question that used to take an afternoon of scrubbing takes a sentence.",
 "> The data was always there. What was missing was a way to ask.",
 "The second change is cultural. When footage becomes evidence for process improvement rather than for blame, teams start volunteering the questions themselves — which is when this kind of product gets sticky."]},

"Culture of shipping, the artist as CEO, and running a full-stack company":{chip:"Interview",by:"Mina Park",date:"April 2026",read:"7 min read",img:"blog/stories/story-3.jpg",body:[
 "Callie Care runs on a phone number. No app, no tablet, no new device for an eighty-year-old to learn. You call, and something on the other end arranges the ride, the groceries or the prescription refill.",
 "That constraint shapes everything about the company. A voice-first product cannot hide behind an interface, so latency, interruption handling and graceful failure are not polish — they are the product.",
 "## Full-stack by necessity",
 "Because the promise is an outcome rather than an answer, the team owns the fulfilment too: the partner network, the escalation path, the human who steps in when the model should not.",
 "> Taste is a technical decision when your only interface is a voice.",
 "## On shipping",
 "The team ships in small, frequent increments and listens to recordings every week. That habit is the closest thing we have seen to a moat in consumer AI: an unusually short loop between a confused caller and a fixed behaviour."]},

"Selling software into a forty-year-old workflow":{chip:"Founder story",by:"Grace Liu",date:"April 2026",read:"5 min read",img:"blog/stories/story-1.jpg",body:[
 "Apparel development still moves through sketches, spreadsheets and email threads with factories in a different time zone. Everyone in the chain knows where the delays are; nobody owns the whole picture.",
 "PatternFast's approach is to pull design, visualisation and production handoff into a single workflow rather than asking teams to adopt yet another tool alongside the ones they have.",
 "## Do not ask anyone to change jobs",
 "The founders were blunt about the lesson: a designer will not become a data entry clerk to make your software work. Adoption came from absorbing existing files and producing the outputs a factory already expects.",
 "> The fastest way into an old industry is to look like the thing it already uses.",
 "Once the workflow runs in one place, the interesting part begins — every sample, cost and revision becomes structured data about how a collection actually gets made."]},

"The mineral map nobody had":{chip:"Interview",by:"Diego Santos",date:"March 2026",read:"6 min read",img:"blog/stories/story-2.jpg",body:[
 "Exploration data is abundant and almost unusable. Survey results, drill logs and production reports sit in incompatible formats across agencies, companies and decades.",
 "Mineflow's team spent years inside that problem before starting the company. Their conclusion was that the analysis was not the hard part; assembling a trustworthy, current picture of what is in the ground and what is coming out of it was.",
 "## Why now",
 "Demand for critical minerals is being planned years ahead by battery, grid and defence buyers who need supply visibility they have never had. That creates a customer for data infrastructure that did not exist a decade ago.",
 "> Every energy forecast eventually becomes a question about minerals.",
 "The team's view is that the map is the wedge, and the decisions it informs — where to drill, what to offtake, which supply to hedge — are the business."]},

"Fraud is a data problem before it is a policy problem":{chip:"Founder story",by:"Omar Haddad",date:"March 2026",read:"5 min read",img:"blog/stories/story-3.jpg",body:[
 "Health plans pay a very large number of claims they would have questioned if they had the context at the time. The rules exist. The evidence usually arrives too late to matter.",
 "ClaimQI works on that gap: surfacing fraud, waste and abuse by reading claims against provider history, clinical plausibility and billing patterns before the money leaves.",
 "## Why plans keep missing it",
 "Review capacity is finite, so plans sample. Sampling catches the obvious cases and misses the patient, low-grade leakage that adds up to most of the loss.",
 "> Recovering a payment is a legal process. Preventing one is a data process.",
 "The product's job is to move review from after the fact to inside the decision, and to explain itself well enough that a clinician reviewer trusts the flag."]},
"The physical world has the data back":{chip:"Applied AI",by:"Sam Okafor",date:"June 2026",read:"5 min read",img:"blog/views/view-1.jpg",body:[
 "Cameras, meters, vibration sensors and fleet telemetry now produce more new data every day than most of the consumer internet did a decade ago. Almost none of it is queried.",
 "The gap is not model capability. It is storage economics, indexing and the unglamorous question of how you ask a question of a petabyte of video you cannot afford to keep hot.",
 "## Where we think value accrues",
 "We expect the durable companies to sit between the sensor and the application: ingestion that survives messy hardware, representations that make retrieval cheap, and interfaces that let a domain expert ask something in their own words.",
 "> The winners here will be judged on cost per answer, not on benchmark scores.",
 "That is a systems problem more than a research problem, which is why we keep meeting infrastructure engineers rather than model researchers in this category."]},

"We are living in a multi-model world":{chip:"Applied AI",by:"Mina Park",date:"May 2026",read:"4 min read",img:"blog/views/view-2.jpg",body:[
 "The single-provider default is over. Most serious teams we work with now route between several models by task, cost and latency, and treat any one of them as replaceable.",
 "That has consequences for buyers and builders. Prompts become assets that must survive a swap. Evaluation stops being optional. Vendor lock-in arguments lose their force.",
 "## What it means for founders",
 "If your product is a thin wrapper over one provider, its margin is somebody else's pricing decision. If your product owns the workflow, the data and the evaluation, the model underneath becomes an implementation detail.",
 "> Portability is now a feature customers ask about in the first call.",
 "We look for teams that designed for substitution from day one and can show what happens to quality when they change engines."]},

"CISOs have budget for AI security. The missing layer is the control plane":{chip:"Security",by:"Nora Bell",date:"May 2026",read:"6 min read",img:"blog/views/view-3.jpg",body:[
 "In conversations with enterprise security leaders this year, the budget question has largely been settled. The open question is what they are supposed to buy.",
 "Teams have scanners, gateways and policy documents. What they lack is a single place to see which models, agents and data sources are in use, who authorised them, and what an agent is permitted to do on its own.",
 "## The category gap",
 "Every organisation we spoke to had shadow AI. Most had no inventory. Several discovered production agents with standing credentials during the conversation itself.",
 "> You cannot govern what you cannot enumerate.",
 "## What a control plane needs",
 "Discovery, identity for non-human actors, granular permission, and an audit trail an external auditor will accept. Products that deliver the first two quickly tend to earn the rest of the stack later."]},

"The failure forecast":{chip:"Consumer",by:"Grace Liu",date:"April 2026",read:"4 min read",img:"blog/views/view-4.jpg",body:[
 "Consumer AI has no shortage of launches and very little retention. The pattern is consistent enough to plan around: strong week one, collapse by week four, a long tail of users who never return.",
 "Our reading is that novelty carries a product to first use, and only a job carries it to habit. Products that replace a recurring chore survive. Products that offer a capability do not.",
 "## Three places experimentation stalls",
 "First, output quality that is impressive once and unreliable twice. Second, no memory, so every session restarts the relationship. Third, no social or economic reason to come back on a Tuesday.",
 "> Retention is the only consumer metric that has not been inflated by curiosity.",
 "We would rather back a narrow product with a boring weekly reason to exist than a broad one with a spectacular launch week."]},

"Inside the energy build":{chip:"Energy",by:"Diego Santos",date:"March 2026",read:"6 min read",img:"blog/views/view-5.jpg",body:[
 "Compute growth has turned into an electricity question. Siting a new cluster is now a negotiation about interconnection queues, transformer lead times and who pays for the upgrade underneath it.",
 "That reshuffles who matters. Utilities, independent power producers and industrial developers are suddenly on the critical path for products that look like software.",
 "## Where the opportunities sit",
 "We see three: tooling that makes interconnection and permitting faster, hardware and controls that let large loads be flexible, and data products that tell buyers what capacity will actually be available and when.",
 "> The bottleneck moved from chips to substations, and the software has not caught up.",
 "The financing question is just as open. Grid upgrades have thirty-year lives and are being triggered by customers with three-year plans."]},

"The great splintering":{chip:"Fintech",by:"Omar Haddad",date:"February 2026",read:"5 min read",img:"blog/views/view-6.jpg",body:[
 "For a decade, financial infrastructure consolidated around a handful of defaults. That consolidation is unwinding, and early-stage buyers are assembling stacks from specialists again.",
 "Part of it is pricing. Part is regional regulation that no single provider handles well. Most of it is that the best product for payments, ledgering, onboarding and risk is rarely the same company.",
 "## What a fragmented stack demands",
 "Reconciliation between providers, consistent identity across them, and an internal view of money movement that does not depend on any one dashboard.",
 "> Fragmentation always creates a market for the layer that hides it.",
 "That layer is where we are spending time: unglamorous middleware that makes a five-vendor stack behave like one."]},

"Evaluation is the new moat":{chip:"Applied AI",by:"Sam Okafor",date:"June 2026",read:"4 min read",img:"blog/views/view-1.jpg",body:[
 "When every team can call the same frontier model, the differentiator is not access. It is being able to prove that your output is right, repeatedly, for a customer who is accountable for the result.",
 "Evaluation is how that proof gets made: task-specific test sets, graded failures, regression gates before a prompt or model change reaches production.",
 "## Why it compounds",
 "Every corrected failure becomes a permanent test. Over time a company accumulates a private description of what good looks like in its domain, which a competitor cannot buy.",
 "> The eval suite is the part of the product nobody can copy from your marketing site.",
 "In diligence we now ask to see it. A team that cannot show how they measure quality is usually guessing about it."]},

"Compliance is becoming a product surface":{chip:"Security",by:"Nora Bell",date:"April 2026",read:"5 min read",img:"blog/views/view-2.jpg",body:[
 "Compliance used to be a document produced at the end of a project by people who were not in the room while it was built. That arrangement is breaking down.",
 "As automated systems make more decisions, buyers want the evidence continuously: which model made the call, on what data, under whose authorisation, and how to reconstruct it a year later.",
 "## From artifact to feature",
 "The practical consequence is that audit trails, policy enforcement and explanation move into the product, and get sold as a reason to buy rather than a cost of doing business.",
 "> If your customer has to ask a human for the audit log, you have not shipped compliance.",
 "We think this is one of the more reliable wedges in regulated software right now, precisely because it is boring to build."]},

"The quiet return of vertical software":{chip:"Applied AI",by:"Priya Nair",date:"March 2026",read:"4 min read",img:"blog/views/view-3.jpg",body:[
 "Horizontal AI tools sell demos. Vertical ones sell outcomes. In the last year, the fastest commercial traction we have seen has come from products narrow enough to promise a specific result in a specific industry.",
 "The reason is unglamorous: an old industry does not want a general assistant. It wants the claim adjudicated, the sample approved, the certification filed.",
 "## Depth beats breadth early",
 "Going deep means absorbing the file formats, the regulations and the exceptions that make a workflow ugly. That work is also the defensibility; it is not fun to replicate.",
 "> A narrow product with a real buyer beats a broad product with a large market.",
 "The expansion path is real too. Own one workflow completely and the adjacent ones tend to arrive as customer requests."]},
"Agents for the hardest engineering work":{chip:"Portfolio news",by:"Alex Rivera",date:"June 2026",read:"3 min read",img:"blog/portfolio/news-1.jpg",body:[
 "Saphira AI is building agents for physical-systems engineering, starting with the certification and compliance work that sits between a finished design and a shipped product.",
 "The company raised a $500K pre-seed round to expand the team and push further into standards coverage. Its early users are hardware groups that treat compliance as a scheduling risk rather than a paperwork task.",
 "## Why we are watching",
 "Certification is mandatory, repetitive and poorly served by existing software, and the people who do it are the same engineers a hardware company most wants building product. That is a clean case for automation."]},

"Fashion, from sketch to launch":{chip:"Portfolio news",by:"Grace Liu",date:"May 2026",read:"3 min read",img:"blog/portfolio/news-2.jpg",body:[
 "PatternFast pulls apparel design, visualisation and production handoff into one workflow, replacing the spreadsheet-and-email chain that most development teams still run on.",
 "The product generates the outputs a factory already expects, which keeps adoption from depending on a supplier changing its process.",
 "## Why we are watching",
 "Apparel development is one of the last large industries where the core workflow is still assembled by hand every season. A tool that captures it becomes the system of record for how a collection is made."]},

"Cameras that finally pay for themselves":{chip:"Portfolio news",by:"Priya Nair",date:"May 2026",read:"3 min read",img:"blog/portfolio/news-3.jpg",body:[
 "Zapdos Labs turns cameras that industrial sites already own into AI video agents that answer questions about what happened, when and how often.",
 "Rather than another alerting dashboard, the interface is a question. Operators use it to find the constraint on a line, verify a procedure or reconstruct an incident without scrubbing footage.",
 "## Why we are watching",
 "The hardware is installed and the footage is already being stored. The cost of trying this is unusually low for the buyer, which is a good property in a slow-moving market."]},

"AI-native banking in Brazil":{chip:"Portfolio news",by:"Omar Haddad",date:"April 2026",read:"3 min read",img:"blog/portfolio/news-4.jpg",body:[
 "Yolo Bank is building banking and financial services with AI in the core product rather than bolted on as a support channel.",
 "Brazil is a good place to attempt it: a modern payments rail, high digital adoption and customers who have already changed banks once for a better app.",
 "## Why we are watching",
 "Most incumbents will add an assistant to an existing core. Very few will design the product assuming the assistant is the interface, and that difference tends to show up in unit economics."]},

"Help for the everyday, by phone":{chip:"Portfolio news",by:"Mina Park",date:"April 2026",read:"3 min read",img:"blog/portfolio/news-5.jpg",body:[
 "Callie Care handles rides, groceries and prescription refills for older adults through an ordinary phone call. There is no app to install and no device to learn.",
 "Behind the call, the company coordinates the fulfilment and escalates to a human when the request needs one.",
 "## Why we are watching",
 "Voice is the only interface with universal adoption in this demographic, and the product is judged on completed errands rather than conversation quality. That is a hard promise, and a defensible one."]},

"The claims payers never checked":{chip:"Portfolio news",by:"Omar Haddad",date:"March 2026",read:"3 min read",img:"blog/portfolio/news-6.jpg",body:[
 "ClaimQI reviews health plan claims for fraud, waste and abuse, flagging the low-grade leakage that sampling-based review tends to miss.",
 "The system reads a claim against provider history, clinical plausibility and billing patterns, and explains each flag well enough for a reviewer to act on it.",
 "## Why we are watching",
 "Payers already agree the problem is expensive. The product question is whether review can move from recovery after payment to prevention before it, which is where the margin is."]},

"The security review, without the backlog":{chip:"Portfolio news",by:"Nora Bell",date:"March 2026",read:"3 min read",img:"blog/portfolio/news-1.jpg",body:[
 "Truffle AI puts agents on the security questionnaires, evidence requests and review threads that stall enterprise deals for weeks at a time.",
 "The work is repetitive and high stakes: the same forty questions, answered slightly differently by whoever has time, against a policy set that changes quarterly.",
 "## Why we are watching",
 "This is a revenue problem disguised as a security problem. Any company that shortens an enterprise review cycle can point directly at the deals it unblocked."]},

"Mapping the critical-minerals gap":{chip:"Portfolio news",by:"Diego Santos",date:"February 2026",read:"3 min read",img:"blog/portfolio/news-2.jpg",body:[
 "Mineflow brings exploration and production data for critical minerals into one queryable picture, across sources that were never designed to be combined.",
 "Its users are the teams planning supply years ahead: battery manufacturers, grid developers and the investors underwriting both.",
 "## Why we are watching",
 "Every credible energy forecast eventually becomes a minerals question, and the underlying data is still scattered across decades of incompatible reporting."]},

"Storefronts that answer back":{chip:"Portfolio news",by:"Grace Liu",date:"February 2026",read:"3 min read",img:"blog/portfolio/news-3.jpg",body:[
 "Kart AI gives e-commerce teams agents that sell: answering product questions, handling comparisons and carrying a customer through to checkout.",
 "The bar is set by a good in-store salesperson rather than by search, which changes what the product has to know about inventory, fit and returns.",
 "## Why we are watching",
 "Conversion is the most directly measurable metric in commerce. Products that move it get renewed without a committee."]},

"A new chapter for our platform team":{chip:"Firm news",by:"Alex Rivera",date:"June 2026",read:"3 min read",img:"blog/firm/firm-1.jpg",body:[
 "We are rebuilding founder support around a smaller, closer group rather than a long menu of services.",
 "In practice that means fewer programmes and more direct work: hiring for the first ten roles, unblocking a first enterprise contract, and sitting in on the customer calls that decide a roadmap.",
 "Founders told us consistently that they did not want another portal. They wanted a person who already knew the context. That is what we are staffing for."]},

"Our newest partner backs researchers early":{chip:"Firm news",by:"Priya Nair",date:"May 2026",read:"3 min read",img:"blog/firm/firm-2.jpg",body:[
 "We are adding a partner whose focus is backing researcher-founders earlier than most firms find comfortable — often before there is a company, sometimes before there is a decision to leave the lab.",
 "That stage is awkward for everyone. The technical risk is legible and the commercial risk is not, so the round is usually assembled from people who understand the field.",
 "Our view is that the first cheque is the one that changes the outcome, and we would rather be early and wrong occasionally than late and correct."]},

"Year one: new venture partners":{chip:"Firm news",by:"Sam Okafor",date:"May 2026",read:"3 min read",img:"blog/firm/firm-3.jpg",body:[
 "Four operators have joined us as venture partners, each working with founders through their first eighteen months.",
 "They come from security, industrial software, payments and health, and they are here for the specific problems of that window: first hires, first pricing model, first real customer commitment.",
 "Each partner works with a small number of companies at a time. We would rather have depth in a handful of relationships than availability across all of them."]},

"Welcome Nils Wallace, our new head of AI":{chip:"Team",by:"Mina Park",date:"April 2026",read:"2 min read",img:"blog/firm/firm-4.jpg",body:[
 "Nils Wallace joins as head of AI, leading the internal tools our investment and platform teams use every day.",
 "That includes how we research a market, keep track of companies we are tracking, and prepare for a first meeting without asking a founder to repeat what is already public.",
 "The goal is simple: spend less of a founder's meeting on information gathering and more of it on the actual question."]},

"Meet Nora Bell, our newest partner":{chip:"Team",by:"Alex Rivera",date:"April 2026",read:"2 min read",img:"blog/firm/firm-5.jpg",body:[
 "Nora Bell joins as a partner focused on enterprise security, developer infrastructure and applied security research.",
 "She spends most of her time with security leaders at large organisations, which is where our view on the AI control plane came from, and with the researchers who tend to found the companies that address it.",
 "If you are building in that space, her calendar is open."]},

"Announcing our largest fund yet: Fund XIV at $900M":{chip:"Fund",by:"Alex Rivera",date:"March 2026",read:"3 min read",img:"blog/firm/firm-6.jpg",body:[
 "We have closed Fund XIV at $900M. The strategy is unchanged: lead first rounds, concentrate, and stay for the decade that follows.",
 "A larger fund does not mean larger cheques at the seed. It means we can keep supporting a company through the rounds where conviction gets expensive, without asking founders to find a new lead at the worst possible moment.",
 "Thank you to the partners who have backed this approach across several funds, and to the founders who make it work."]},

"Three years of the Fellows programme":{chip:"Fellows",by:"Grace Liu",date:"February 2026",read:"3 min read",img:"blog/firm/firm-1.jpg",body:[
 "Three years in, the Fellows programme has funded students and early researchers to keep working on their own projects rather than taking the safe internship.",
 "What they built is less uniform than we expected: a few companies, several papers, one open-source tool now used well beyond its original lab.",
 "The programme's real output is a network of people who met each other early. We are keeping the cohort small for that reason."]},

"A no-strings first call for founders":{chip:"Founders",by:"Priya Nair",date:"February 2026",read:"2 min read",img:"blog/firm/firm-2.jpg",body:[
 "We run an open first call for founders. No deck required, no process implied, and no obligation on either side afterwards.",
 "It exists because the most useful conversations we have had started long before a round, when the question was still what to build rather than what to raise.",
 "Bring a problem you are stuck on. If we are not the right people, we will usually know someone who is."]},

"Welcome Lisa Schreiber as head of talent":{chip:"Team",by:"Sam Okafor",date:"January 2026",read:"2 min read",img:"blog/firm/firm-3.jpg",body:[
 "Lisa Schreiber joins as head of talent after nine years building engineering and go-to-market teams at companies going through their first scaling period.",
 "Her focus is helping our portfolio hire ahead of the curve: getting the role definition right before the search starts, and keeping a bench warm for the hires that always come sooner than planned.",
 "She also runs our founder-to-founder referral network, which has quietly become the fastest hiring channel we have."]},

"What we changed after our first hundred first calls":{chip:"Firm news",by:"Mina Park",date:"January 2026",read:"3 min read",img:"blog/firm/firm-4.jpg",body:[
 "A year of open founder calls taught us more about our own process than about the market.",
 "Three changes came out of it. We now answer within a week, always with a reason. We stopped asking for a deck before a first conversation. And we tell founders where we are unlikely to be helpful, early, rather than staying politely in touch.",
 "None of this is generous. A clear no is cheaper for everyone than a slow maybe, and it is the only part of our process founders consistently remember."]},

"Our diligence memo, published":{chip:"Firm news",by:"Omar Haddad",date:"December 2025",read:"3 min read",img:"blog/firm/firm-5.jpg",body:[
 "We are publishing the internal template we use to write up an investment, with the questions we ask ourselves before leading a round.",
 "It is not a scoring rubric. It is a short set of prompts about the customer, the wedge, what has to be true, and what would make us wrong.",
 "Founders spend a great deal of energy guessing at how a firm thinks. There is no reason for that part to be private."]},

"Office hours for technical founders, every Thursday":{chip:"Founders",by:"Sam Okafor",date:"December 2025",read:"2 min read",img:"blog/firm/firm-6.jpg",body:[
 "Every Thursday we hold open office hours with our engineering partners. No deck, no pitch, no follow-up unless you want one.",
 "Typical sessions are about architecture decisions that are hard to reverse, evaluation strategy, or how to scope a first production deployment with a demanding customer.",
 "Slots are first come, first served, and they are for anyone building — not only companies we have invested in."]}
};
