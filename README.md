# PipMCP connector and API integration directory

[Browse the directory](https://jannikco.github.io/pipmcp-connectors/)

500 independent provider integration pages · 41 workflow guides · 7 connection/compiler guides · 41 connector implementations · 155 recorded published repositories · 2 operations with Live evidence. These counts measure different things.

## Use the directory

Search providers, operation names, categories and authentication requirements. Each provider page records its own sources, credential field names and local/managed capability evidence. A **Setup** page documents prerequisites; a **Connector** includes named implemented operations. Documented, Tested and Live levels apply separately to operations and execution modes. Schema import or tools/list never proves Live execution.

Repository links come only from successful publication receipts or an initialized-public remote audit. Missing targets are not linked. Provider names do not imply endorsement.

## Local search

Node.js 22+, no runtime dependencies:

```sh
npm ci --ignore-scripts
npm test
npm start -- hubspot
node cli.mjs search --artifactType Connector --status Tested --json
python3 -m http.server 8080
```

Open http://localhost:8080/. Browser search uses only static catalog JSON. No credentials or telemetry are collected. Onboarding links preserve app, integration and explicit directory campaign fields.

## Recorded public projects

- [Typed LeadAdapter API client](https://github.com/jannikco/linkedin-typescript-sdk) — sdk-typescript
- [LeadAdapter Python API client](https://github.com/jannikco/linkedin-python-sdk) — sdk-python
- [LinkedIn API quickstart](https://github.com/jannikco/linkedin-api) — leadadapter-recipe
- [LinkedIn people and post search](https://github.com/jannikco/linkedin-search-api) — leadadapter-recipe
- [LinkedIn post engagers](https://github.com/jannikco/linkedin-post-engagers) — leadadapter-recipe
- [LeadAdapter LinkedIn MCP server](https://github.com/jannikco/linkedin-mcp) — provider-connector
- [OpenAPI to MCP import starter](https://github.com/jannikco/openapi-to-mcp) — import-example
- [Swagger to MCP import starter](https://github.com/jannikco/swagger-to-mcp) — import-example
- [Postman to MCP import starter](https://github.com/jannikco/postman-to-mcp) — import-example
- [GraphQL to MCP import starter](https://github.com/jannikco/graphql-to-mcp) — import-example
- [LinkedIn profile enrichment](https://github.com/jannikco/linkedin-profile-api) — leadadapter-recipe
- [LinkedIn company data](https://github.com/jannikco/linkedin-company-api) — leadadapter-recipe
- [LinkedIn lead export](https://github.com/jannikco/linkedin-lead-export) — leadadapter-recipe
- [LinkedIn content records](https://github.com/jannikco/linkedin-content-api) — leadadapter-recipe
- [LeadAdapter approvals inspector](https://github.com/jannikco/linkedin-approvals-api) — leadadapter-recipe
- [LeadAdapter CRM records](https://github.com/jannikco/linkedin-crm-api) — leadadapter-recipe
- [Scheduled posts inspector](https://github.com/jannikco/linkedin-scheduled-posts-api) — leadadapter-recipe
- [LeadAdapter webhook inspector](https://github.com/jannikco/linkedin-webhooks-api) — leadadapter-recipe
- [GitHub MCP server](https://github.com/jannikco/github-mcp) — provider-connector
- [HubSpot MCP server](https://github.com/jannikco/hubspot-mcp) — provider-connector
- [Pipedrive MCP server](https://github.com/jannikco/pipedrive-mcp) — provider-connector
- [Trello MCP server](https://github.com/jannikco/trello-mcp) — provider-connector
- [Notion MCP server](https://github.com/jannikco/notion-mcp) — provider-connector
- [Stripe MCP server](https://github.com/jannikco/stripe-mcp) — provider-connector
- [e-conomic MCP server](https://github.com/jannikco/e-conomic-mcp) — provider-connector
- [Google Drive MCP server](https://github.com/jannikco/google-drive-mcp) — provider-connector
- [Slack MCP server](https://github.com/jannikco/slack-mcp) — provider-connector
- [Asana MCP server](https://github.com/jannikco/asana-mcp) — provider-connector
- [Zendesk MCP server](https://github.com/jannikco/zendesk-mcp) — provider-connector
- [Airtable MCP server](https://github.com/jannikco/airtable-mcp) — provider-connector
- [Linear MCP server](https://github.com/jannikco/linear-mcp) — provider-connector
- [WooCommerce MCP server](https://github.com/jannikco/woocommerce-mcp) — provider-connector
- [Xero MCP server](https://github.com/jannikco/xero-mcp) — provider-connector
- [Dinero MCP setup and connection checker](https://github.com/jannikco/dinero-mcp) — published-project
- [Billy MCP setup and connection checker](https://github.com/jannikco/billy-mcp) — published-project
- [ClickUp MCP server](https://github.com/jannikco/clickup-mcp) — provider-connector
- [Intercom MCP server](https://github.com/jannikco/intercom-mcp) — provider-connector
- [Supabase Management MCP server](https://github.com/jannikco/supabase-mcp) — provider-connector
- [GitLab MCP server](https://github.com/jannikco/gitlab-mcp) — provider-connector
- [ActiveCampaign MCP server](https://github.com/jannikco/activecampaign-mcp) — provider-connector
- [Brevo MCP server](https://github.com/jannikco/brevo-mcp) — provider-connector
- [Attio MCP server](https://github.com/jannikco/attio-mcp) — provider-connector
- [Close MCP setup and connection checker](https://github.com/jannikco/close-mcp) — published-project
- [PayPal MCP server](https://github.com/jannikco/paypal-mcp) — provider-connector
- [Dropbox MCP server](https://github.com/jannikco/dropbox-mcp) — provider-connector
- [Discord Bot MCP server](https://github.com/jannikco/discord-mcp) — provider-connector
- [Google Calendar MCP server](https://github.com/jannikco/google-calendar-mcp) — provider-connector
- [Microsoft Outlook MCP server](https://github.com/jannikco/microsoft-outlook-mcp) — provider-connector
- [Microsoft Teams MCP server](https://github.com/jannikco/microsoft-teams-mcp) — provider-connector
- [0CodeKit MCP setup and connection checker](https://github.com/jannikco/0codekit-mcp) — published-project
- [10,000ft (Resource Management by Smartsheet) MCP setup and connection checker](https://github.com/jannikco/10000ft-mcp) — published-project
- [100Hires ATS MCP setup and connection checker](https://github.com/jannikco/100hires-ats-mcp) — published-project
- [1ClickImpact MCP setup and connection checker](https://github.com/jannikco/1clickimpact-mcp) — published-project
- [1Lookup MCP setup and connection checker](https://github.com/jannikco/1lookup-mcp) — published-project
- [2Chat MCP setup and connection checker](https://github.com/jannikco/2chat-mcp) — published-project
- [360dialog MCP setup and connection checker](https://github.com/jannikco/360dialog-mcp) — published-project
- [360Score.me MCP setup and connection checker](https://github.com/jannikco/360scoreme-mcp) — published-project
- [3Scribe MCP setup and connection checker](https://github.com/jannikco/3scribe-mcp) — published-project
- [44API MCP setup and connection checker](https://github.com/jannikco/44api-mcp) — published-project
- [46elks MCP server](https://github.com/jannikco/46elks-mcp) — provider-connector
- [4Dem.it MCP setup and connection checker](https://github.com/jannikco/4demit-mcp) — published-project
- [4.events MCP setup and connection checker](https://github.com/jannikco/4events-mcp) — published-project
- [4Pay MCP setup and connection checker](https://github.com/jannikco/4pay-mcp) — published-project
- [6clicks MCP setup and connection checker](https://github.com/jannikco/6clicks-mcp) — published-project
- [7shifts MCP setup and connection checker](https://github.com/jannikco/7shifts-mcp) — published-project
- [8x8 MCP server](https://github.com/jannikco/8x8-mcp) — provider-connector
- [ABC Sales AI MCP setup and connection checker](https://github.com/jannikco/abc-sales-ai-mcp) — published-project
- [ABM.dev MCP setup and connection checker](https://github.com/jannikco/abmdev-mcp) — published-project
- [Abyssale MCP server](https://github.com/jannikco/abyssale-mcp) — provider-connector
- [Academy by Coassemble MCP setup and connection checker](https://github.com/jannikco/academy-by-coassemble-mcp) — published-project
- [Accredible Certificates MCP server](https://github.com/jannikco/accredible-mcp) — provider-connector
- [Acquia DAM MCP setup and connection checker](https://github.com/jannikco/acquia-dam-mcp) — published-project
- [Acquire MCP setup and connection checker](https://github.com/jannikco/acquire-mcp) — published-project
- [Acronis Cyber Protect Cloud MCP setup and connection checker](https://github.com/jannikco/acronis-cyber-protect-cloud-ca18-mcp) — published-project
- [Act-On MCP setup and connection checker](https://github.com/jannikco/act-on-mcp) — published-project
- [Action Network MCP setup and connection checker](https://github.com/jannikco/actionnetwork-mcp) — published-project
- [Active Knocker MCP setup and connection checker](https://github.com/jannikco/active-knocker-mcp) — published-project
- [ActiveCalculator MCP setup and connection checker](https://github.com/jannikco/activecalculator-mcp) — published-project
- [ActivitySmith MCP setup and connection checker](https://github.com/jannikco/activitysmith-mcp) — published-project
- [Adafruit IO MCP setup and connection checker](https://github.com/jannikco/adafruit-io-mcp) — published-project
- [Adanos MCP setup and connection checker](https://github.com/jannikco/adanos-mcp) — published-project
- [Add to Calendar PRO MCP setup and connection checker](https://github.com/jannikco/add-to-calendar-pro-mcp) — published-project
- [AddCal MCP setup and connection checker](https://github.com/jannikco/addcal-mcp) — published-project
- [AddEvent MCP setup and connection checker](https://github.com/jannikco/addevent-mcp) — published-project
- [Addo Sign MCP setup and connection checker](https://github.com/jannikco/addo-sign-mcp) — published-project
- [AddressZen MCP setup and connection checker](https://github.com/jannikco/addresszen-mcp) — published-project
- [AddToWallet MCP setup and connection checker](https://github.com/jannikco/addtowallet-mcp) — published-project
- [Admanage MCP setup and connection checker](https://github.com/jannikco/admanage-mcp) — published-project
- [Admoji MCP setup and connection checker](https://github.com/jannikco/admoji-mcp) — published-project
- [Adobe Acrobat Sign MCP server](https://github.com/jannikco/adobe-acrobat-sign-mcp) — provider-connector
- [Adobe Workfront MCP setup and connection checker](https://github.com/jannikco/adobe-workfront-mcp) — published-project
- [AdRoll MCP setup and connection checker](https://github.com/jannikco/adroll-mcp) — published-project
- [Adversus MCP setup and connection checker](https://github.com/jannikco/adversus-mcp) — published-project
- [Adversus Dialer MCP setup and connection checker](https://github.com/jannikco/adversus-dialer-mcp) — published-project
- [Adyen MCP setup and connection checker](https://github.com/jannikco/adyen-mcp) — published-project
- [Aerion MCP setup and connection checker](https://github.com/jannikco/aerion-mcp) — published-project
- [Aero Workflow MCP setup and connection checker](https://github.com/jannikco/aero-workflow-mcp) — published-project
- [Aesthetix CRM MCP setup and connection checker](https://github.com/jannikco/aesthetix-crm-mcp) — published-project
- [Affinity MCP setup and connection checker](https://github.com/jannikco/affinity-mcp) — published-project
- [AgendaForge MCP setup and connection checker](https://github.com/jannikco/agendaforge-mcp) — published-project
- [Agendor MCP setup and connection checker](https://github.com/jannikco/agendor-mcp) — published-project
- [Agent Response MCP setup and connection checker](https://github.com/jannikco/agent-response-mcp) — published-project
- [AgentHub MCP setup and connection checker](https://github.com/jannikco/agenthub-mcp) — published-project
- [agentOS MCP setup and connection checker](https://github.com/jannikco/agentos-mcp) — published-project
- [AgentQL MCP setup and connection checker](https://github.com/jannikco/agentql-mcp) — published-project
- [Agenty MCP setup and connection checker](https://github.com/jannikco/agenty-mcp) — published-project
- [Agiled MCP setup and connection checker](https://github.com/jannikco/agiled-mcp) — mcp-setup
- [Agorapulse MCP server](https://github.com/jannikco/agorapulse-mcp) — provider-connector
- [Agrello MCP setup and connection checker](https://github.com/jannikco/agrello-mcp) — published-project
- [Aha! MCP setup and connection checker](https://github.com/jannikco/aha-mcp) — published-project
- [AI Scraper by Parsera MCP setup and connection checker](https://github.com/jannikco/ai-scraper-by-parsera-mcp) — published-project
- [AI Studios MCP setup and connection checker](https://github.com/jannikco/ai-studios-mcp) — published-project
- [AI Super MCP setup and connection checker](https://github.com/jannikco/ai-super-mcp) — published-project
- [AI21 Labs MCP setup and connection checker](https://github.com/jannikco/ai21-labs-mcp) — published-project
- [Aidbase MCP setup and connection checker](https://github.com/jannikco/aidbase-mcp) — published-project
- [AI/ML API MCP setup and connection checker](https://github.com/jannikco/aiml-api-mcp) — published-project
- [Aimtell MCP setup and connection checker](https://github.com/jannikco/aimtell-mcp) — published-project
- [Air MCP setup and connection checker](https://github.com/jannikco/air-mcp) — published-project
- [Airbrake MCP setup and connection checker](https://github.com/jannikco/airbrake-mcp) — published-project
- [airfocus MCP setup and connection checker](https://github.com/jannikco/airfocus-mcp) — published-project
- [AirOps MCP setup and connection checker](https://github.com/jannikco/airops-mcp) — published-project
- [Airparser MCP setup and connection checker](https://github.com/jannikco/airparser-mcp) — published-project
- [AirPinpoint MCP setup and connection checker](https://github.com/jannikco/airpinpoint-mcp) — published-project
- [Airtop MCP setup and connection checker](https://github.com/jannikco/airtop-mcp) — published-project
- [Airwallex MCP setup and connection checker](https://github.com/jannikco/airwallex-mcp) — published-project
- [AITable.ai MCP setup and connection checker](https://github.com/jannikco/aitableai-mcp) — published-project
- [Akkio MCP setup and connection checker](https://github.com/jannikco/akkio-mcp) — published-project
- [AKOOL MCP setup and connection checker](https://github.com/jannikco/akool-open-api-mcp) — published-project
- [Algebras MCP setup and connection checker](https://github.com/jannikco/algebras-mcp) — published-project
- [Algodocs MCP setup and connection checker](https://github.com/jannikco/algodocs-mcp) — published-project
- [Algolia MCP server](https://github.com/jannikco/algolia-mcp) — provider-connector
- [Algomo MCP setup and connection checker](https://github.com/jannikco/algomo-mcp) — published-project
- [Aliaddo MCP setup and connection checker](https://github.com/jannikco/aliaddo-mcp) — published-project
- [Aligno MCP setup and connection checker](https://github.com/jannikco/aligno-mcp) — published-project
- [Alium MCP setup and connection checker](https://github.com/jannikco/alium-mcp) — published-project
- [All Quiet MCP setup and connection checker](https://github.com/jannikco/all-quiet-mcp) — published-project
- [Allo MCP setup and connection checker](https://github.com/jannikco/allo-mcp) — published-project
- [Allowly MCP setup and connection checker](https://github.com/jannikco/allowly-mcp) — published-project
- [Alpaca MCP setup and connection checker](https://github.com/jannikco/alpaca-mcp) — published-project
- [AlphaInsider MCP setup and connection checker](https://github.com/jannikco/alphainsider-mcp) — published-project
- [AlphaLoops MCP setup and connection checker](https://github.com/jannikco/alphaloops-mcp) — published-project
- [AlphaSMS MCP setup and connection checker](https://github.com/jannikco/alphasms-mcp) — published-project
- [AlterEstate MCP setup and connection checker](https://github.com/jannikco/alterestate-mcp) — published-project
- [Altoviz MCP setup and connection checker](https://github.com/jannikco/altoviz-mcp) — published-project
- [AltText.ai MCP setup and connection checker](https://github.com/jannikco/alttextai-mcp) — published-project
- [AltTextLab MCP setup and connection checker](https://github.com/jannikco/alttextlab-mcp) — published-project
- [Amazing Marvin MCP setup and connection checker](https://github.com/jannikco/amazing-marvin-mcp) — published-project
- [Amazon Bedrock MCP setup and connection checker](https://github.com/jannikco/amazon-aws-bedrock-mcp) — published-project
- [Ambee MCP setup and connection checker](https://github.com/jannikco/ambee-mcp) — published-project
- [Apify MCP server](https://github.com/jannikco/apify-mcp) — provider-connector
- [Arize AX MCP server](https://github.com/jannikco/arize-ax-mcp) — provider-connector
- [AssemblyAI MCP server](https://github.com/jannikco/assemblyai-mcp) — provider-connector
- [Sentry MCP server](https://github.com/jannikco/sentry-mcp) — provider-connector
- [Cloudflare MCP server](https://github.com/jannikco/cloudflare-mcp) — provider-connector

## Deployment and provenance

Canonical base: https://jannikco.github.io/pipmcp-connectors/
Source digest: `b3fea9a42d1dc7af4105d9587784cdabc2e72390fb1de5f5687b2ee679bd2d13`. Includes independent HTML pages, authentication facts, scoped evidence, sitemap, robots.txt and SHA256SUMS. Custom-domain generation and CNAME require DNS/Pages review; the default preserves existing hosting. English. MIT.
