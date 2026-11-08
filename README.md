# PipMCP connectors and developer integration directory

Search provider setup requirements, authentication methods, API clients and import examples without credentials or network access. This directory contains **190 provider setup projects** and 19 SDK, API, MCP, importer and catalog projects.

[Open the searchable directory](https://jannikco.github.io/pipmcp-connectors/)

## Search

Requires Node.js 22+. No runtime dependencies.

```sh
npm ci --ignore-scripts
npm test
npm start -- hubspot
node cli.mjs search --auth api_key_header
node cli.mjs search graphql --json
```

Open index.html through a local HTTP server or static hosting for the searchable browser directory. Search runs locally with no tracking.

## Use an integration

1. Find a project and inspect its authentication fields and provider documentation.
2. [Create or sign in to PipMCP](https://pipmcp.com/register?utm_source=github&utm_campaign=github-pipmcp-connectors) and select the provider.
3. Connect your authorized provider account, copy its hosted MCP endpoint and follow the project quickstart. LinkedIn projects use [LeadAdapter](https://leadadapter.com/register?utm_source=github&utm_campaign=github-pipmcp-connectors).

This is source-backed setup inventory. Provider authentication and live execution are **not established** by this directory. Repository links are rollout targets; this offline catalog does not poll their publication status. Some providers require separate API access or account approval. No endorsement by the listed providers is implied.

## Directory

| Project | Type | Authentication | Provider documentation |
| --- | --- | --- | --- |
| [0CodeKit](https://github.com/jannikco/0codekit-mcp) | mcp-setup | api_key_header | [Setup docs](https://prod.0codekit.com/openapi.json) |
| [10,000ft (Resource Management by Smartsheet)](https://github.com/jannikco/10000ft-mcp) | mcp-setup | api_key_header | [Setup docs](https://developers.smartsheet.com/_spec/api/resource_management/openapi.yaml) |
| [100Hires ATS](https://github.com/jannikco/100hires-ats-mcp) | mcp-setup | bearer | [Setup docs](https://api.100hires.com/v2/openapi.json) |
| [1ClickImpact](https://github.com/jannikco/1clickimpact-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.1clickimpact.com/openapi.yaml) |
| [1Lookup](https://github.com/jannikco/1lookup-mcp) | mcp-setup | bearer | [Setup docs](https://www.1lookup.io/openapi.json) |
| [2Chat](https://github.com/jannikco/2chat-mcp) | mcp-setup | api_key_header | [Setup docs](https://developers.2chat.co/docs/category/api) |
| [360dialog](https://github.com/jannikco/360dialog-mcp) | mcp-setup | api_key_header | [Setup docs](https://openapi.gitbook.com/o/-M4UA2Des2wa1sGak_JB/spec/messaging-api-v2.yaml) |
| [360Score.me](https://github.com/jannikco/360scoreme-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.360score.me/openapi/v1.json) |
| [3Scribe](https://github.com/jannikco/3scribe-mcp) | mcp-setup | api_key_header | [Setup docs](https://helpcentre.3scri.be/developers/api/) |
| [44API](https://github.com/jannikco/44api-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.44api.dev/openapi.yaml) |
| [46elks](https://github.com/jannikco/46elks-mcp) | mcp-setup | basic | [Setup docs](https://raw.githubusercontent.com/46elks/46elks-getting-started/master/code-examples/Swagger/46elksAPI.yaml) |
| [4Dem.it](https://github.com/jannikco/4demit-mcp) | mcp-setup | token_exchange | [Setup docs](https://api.4dem.it/open-api) |
| [4.events](https://github.com/jannikco/4events-mcp) | mcp-setup | bearer | [Setup docs](https://4events.stoplight.io/api/v1/projects/4events/api/nodes/reference/API.yaml) |
| [4Pay](https://github.com/jannikco/4pay-mcp) | mcp-setup | custom_headers | [Setup docs](https://4pay.online/api/openapi) |
| [6clicks](https://github.com/jannikco/6clicks-mcp) | mcp-setup | token_exchange | [Setup docs](https://api-au.6clicks.io/swagger/v1/swagger.json) |
| [7shifts](https://github.com/jannikco/7shifts-mcp) | mcp-setup | bearer | [Setup docs](https://developers.7shifts.com/reference/) |
| [8x8](https://github.com/jannikco/8x8-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/connect/sms_api.json) |
| [ABC Sales AI](https://github.com/jannikco/abc-sales-ai-mcp) | mcp-setup | bearer | [Setup docs](https://developers.abcsales.ai/openapi.yaml) |
| [ABM.dev](https://github.com/jannikco/abmdev-mcp) | mcp-setup | api_key_header | [Setup docs](https://abm.dev/openapi.json) |
| [Abyssale](https://github.com/jannikco/abyssale-mcp) | mcp-setup | api_key_header | [Setup docs](https://developers.abyssale.com/api.yaml) |
| [Academy by Coassemble](https://github.com/jannikco/academy-by-coassemble-mcp) | mcp-setup | custom_headers | [Setup docs](https://api.coassemble.com/api/docs/json) |
| [Accredible Certificates](https://github.com/jannikco/accredible-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.api.accredible.com/openapi.json) |
| [Acquia DAM](https://github.com/jannikco/acquia-dam-mcp) | mcp-setup | bearer | [Setup docs](https://api.widencollective.com/openapi/openapi.json) |
| [Acquire](https://github.com/jannikco/acquire-mcp) | mcp-setup | bearer | [Setup docs](https://developer.acquire.io/rest-apis/introduction) |
| [Acronis Cyber Protect Cloud](https://github.com/jannikco/acronis-cyber-protect-cloud-ca18-mcp) | mcp-setup | token_exchange | [Setup docs](https://developer.acronis.com/doc/account-management/v2/reference/openapi.json) |
| [Act-On](https://github.com/jannikco/act-on-mcp) | mcp-setup | token_exchange | [Setup docs](https://developer.act-on.com/reference) |
| [Action Network](https://github.com/jannikco/actionnetwork-mcp) | mcp-setup | api_key_header | [Setup docs](https://actionnetwork.org/docs/v2/) |
| [Active Knocker](https://github.com/jannikco/active-knocker-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.activeknocker.com/document-json) |
| [ActiveCalculator](https://github.com/jannikco/activecalculator-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.activecalculator.com/openapi.json) |
| [ActiveCampaign](https://github.com/jannikco/activecampaign-mcp) | mcp-setup | api_key_header | [Setup docs](https://dash.readme.com/api/v1/api-registry/21t7f145tmufpfc93) |
| [ActivitySmith](https://github.com/jannikco/activitysmith-mcp) | mcp-setup | bearer | [Setup docs](https://activitysmith.com/openapi.json) |
| [Adafruit IO](https://github.com/jannikco/adafruit-io-mcp) | mcp-setup | api_key_header | [Setup docs](https://io.adafruit.com/api/docs/v2.json) |
| [Adanos](https://github.com/jannikco/adanos-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.adanos.org/openapi.json) |
| [Add to Calendar PRO](https://github.com/jannikco/add-to-calendar-pro-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.add-to-calendar-pro.com/api/introduction) |
| [AddCal](https://github.com/jannikco/addcal-mcp) | mcp-setup | bearer | [Setup docs](https://addcal.co/docs.openapi) |
| [AddEvent](https://github.com/jannikco/addevent-mcp) | mcp-setup | bearer | [Setup docs](https://docs.addevent.com/) |
| [Addo Sign](https://github.com/jannikco/addo-sign-mcp) | mcp-setup | bearer | [Setup docs](https://addosign.net/api/) |
| [AddressZen](https://github.com/jannikco/addresszen-mcp) | mcp-setup | api_key_query | [Setup docs](https://openapi.addresszen.com/openapi.json) |
| [AddToWallet](https://github.com/jannikco/addtowallet-mcp) | mcp-setup | api_key_header | [Setup docs](https://app.addtowallet.co/api-docs) |
| [Admanage](https://github.com/jannikco/admanage-mcp) | mcp-setup | bearer | [Setup docs](https://admanage.ai/api-docs) |
| [Admoji](https://github.com/jannikco/admoji-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.admoji.com/) |
| [Adobe Acrobat Sign](https://github.com/jannikco/adobe-acrobat-sign-mcp) | mcp-setup | bearer | [Setup docs](https://secure.na1.adobesign.com/restapijson/v6/restapi.json) |
| [Adobe Workfront](https://github.com/jannikco/adobe-workfront-mcp) | mcp-setup | api_key_query | [Setup docs](https://raw.githubusercontent.com/AdobeDocs/workfront-apis/main/static/workflow.json) |
| [AdRoll](https://github.com/jannikco/adroll-mcp) | mcp-setup | oauth2_authorization_code | [Setup docs](https://developers.adroll.com/portals/api/sites/adroll-arbu/liveportal/apis/adroll-organization-api/download_spec) |
| [Adversus Dialer](https://github.com/jannikco/adversus-dialer-mcp) | mcp-setup | basic | [Setup docs](https://api.adversus.io/swagger/apinew.json) |
| [Adversus](https://github.com/jannikco/adversus-mcp) | mcp-setup | basic | [Setup docs](https://api.adversus.io/swagger/apinew.json) |
| [Adyen](https://github.com/jannikco/adyen-mcp) | mcp-setup | api_key_header | [Setup docs](https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CheckoutService-v72.json) |
| [Aerion](https://github.com/jannikco/aerion-mcp) | mcp-setup | token_exchange | [Setup docs](https://docs.aerion.app/api) |
| [Aero Workflow](https://github.com/jannikco/aero-workflow-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.aeroworkflow.com/swagger/v1/swagger.json) |
| [Aesthetix CRM](https://github.com/jannikco/aesthetix-crm-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/GoHighLevel/highlevel-api-docs/main/apps/contacts.json) |
| [Affinity](https://github.com/jannikco/affinity-mcp) | mcp-setup | bearer | [Setup docs](https://developer.affinity.co/llms.txt) |
| [AgendaForge](https://github.com/jannikco/agendaforge-mcp) | mcp-setup | bearer | [Setup docs](https://agendaforge.app/openapi.json) |
| [Agendor](https://github.com/jannikco/agendor-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.agendor.com.br/v3/swagger.json) |
| [Agent Response](https://github.com/jannikco/agent-response-mcp) | mcp-setup | api_key_query | [Setup docs](https://api.agentresponse.co.uk/) |
| [AgentHub](https://github.com/jannikco/agenthub-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/GoHighLevel/highlevel-api-docs/main/apps/contacts.json) |
| [agentOS](https://github.com/jannikco/agentos-mcp) | mcp-setup | api_key_header | [Setup docs](https://live-api.letmc.com/swagger/docs/v4-advertising) |
| [AgentQL](https://github.com/jannikco/agentql-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.agentql.com/openapi.json) |
| [Agenty](https://github.com/jannikco/agenty-mcp) | mcp-setup | bearer | [Setup docs](https://api.agenty.com/openapi.json) |
| [Agiled](https://github.com/jannikco/agiled-mcp) | mcp-setup | api_key_query | [Setup docs](https://my.agiled.app/docs/api-docs.json) |
| [Agiliron](https://github.com/jannikco/agiliron-mcp) | mcp-setup | api_key_query | [Setup docs](https://api.agiliron.com/reference/getting-started) |
| [Agility CMS](https://github.com/jannikco/agility-cms-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.aglty.io/swagger/v2/swagger.json) |
| [Agility Writer](https://github.com/jannikco/agility-writer-mcp) | mcp-setup | api_key_query | [Setup docs](https://apidocs.agilitywriter.ai/agilitywriter-swagger.json) |
| [Agorapulse](https://github.com/jannikco/agorapulse-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.agorapulse.com/docs/open-api.yml) |
| [Agrello](https://github.com/jannikco/agrello-mcp) | mcp-setup | oauth2_client_credentials | [Setup docs](https://api.agrello.io/public/api-docs/v3) |
| [Aha!](https://github.com/jannikco/aha-mcp) | mcp-setup | bearer | [Setup docs](https://www.aha.io/openapi.json) |
| [AI Scraper by Parsera](https://github.com/jannikco/ai-scraper-by-parsera-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.parsera.org/openapi.json) |
| [AI Studios](https://github.com/jannikco/ai-studios-mcp) | mcp-setup | token_exchange | [Setup docs](https://docs.aistudios.com/aistudioV3/getting-started) |
| [AI Super](https://github.com/jannikco/ai-super-mcp) | mcp-setup | bearer | [Setup docs](https://aibotsuper.com/api-docs/openapi.json) |
| [AI21 Labs](https://github.com/jannikco/ai21-labs-mcp) | mcp-setup | bearer | [Setup docs](https://api.ai21.com/openapi.json) |
| [Aidbase](https://github.com/jannikco/aidbase-mcp) | mcp-setup | bearer | [Setup docs](https://docs.aidbase.ai/apis/introduction/) |
| [AI/ML API](https://github.com/jannikco/aiml-api-mcp) | mcp-setup | bearer | [Setup docs](https://api.aimlapi.com/docs-json) |
| [Aimtell](https://github.com/jannikco/aimtell-mcp) | mcp-setup | api_key_header | [Setup docs](https://developers.aimtell.com/api-reference/sites-openapi.json) |
| [Air](https://github.com/jannikco/air-mcp) | mcp-setup | custom_headers | [Setup docs](https://developer.air.inc/llms.txt) |
| [Airbrake](https://github.com/jannikco/airbrake-mcp) | mcp-setup | api_key_query | [Setup docs](https://docs.airbrake.io/docs/devops-tools/api/) |
| [airfocus](https://github.com/jannikco/airfocus-mcp) | mcp-setup | bearer | [Setup docs](https://developer.airfocus.com/openapi.json) |
| [AirOps](https://github.com/jannikco/airops-mcp) | mcp-setup | bearer | [Setup docs](https://api.airops.com/public_api/openapi.yaml) |
| [Airparser](https://github.com/jannikco/airparser-mcp) | mcp-setup | api_key_header | [Setup docs](https://help.airparser.com/public-api/public-api) |
| [AirPinpoint](https://github.com/jannikco/airpinpoint-mcp) | mcp-setup | bearer | [Setup docs](https://api.airpinpoint.com/openapi.json) |
| [Airtable](https://github.com/jannikco/airtable-mcp) | mcp-setup | bearer | [Setup docs](https://airtable.com/developers/web/api/introduction) |
| [Airtop](https://github.com/jannikco/airtop-mcp) | mcp-setup | bearer | [Setup docs](https://docs.airtop.ai/openapi.json) |
| [Airwallex](https://github.com/jannikco/airwallex-mcp) | mcp-setup | token_exchange | [Setup docs](https://raw.githubusercontent.com/airwallex/airwallex-openapi/main/openapi/client-api/2026-08-21/airwallex-openapi-2026-08-21.json) |
| [AITable.ai](https://github.com/jannikco/aitableai-mcp) | mcp-setup | bearer | [Setup docs](https://developers.aitable.ai/api/reference/) |
| [Akkio](https://github.com/jannikco/akkio-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.akkio.com/api/v1/api.yaml) |
| [AKOOL](https://github.com/jannikco/akool-open-api-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.akool.com/) |
| [Al Quran Cloud](https://github.com/jannikco/al-quran-mcp) | mcp-setup | none | [Setup docs](https://api.alquran.cloud/v1/documentation/openapi/yaml) |
| [Alai](https://github.com/jannikco/alai-mcp) | mcp-setup | bearer | [Setup docs](https://docs.getalai.com/openapi.json) |
| [Alchemy](https://github.com/jannikco/alchemy-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/alchemyplatform/docs/main/src/openapi/portfolio/portfolio.yaml) |
| [Alegra](https://github.com/jannikco/alegra-mcp) | mcp-setup | basic | [Setup docs](https://dash.readme.com/api/v1/api-registry/4jm978fumf1gyiuy) |
| [Algebras](https://github.com/jannikco/algebras-mcp) | mcp-setup | api_key_header | [Setup docs](https://platform.algebras.ai/api/v1/openapi.json) |
| [Algodocs](https://github.com/jannikco/algodocs-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.algodocs.com/) |
| [Algolia](https://github.com/jannikco/algolia-mcp) | mcp-setup | custom_headers | [Setup docs](https://raw.githubusercontent.com/algolia/api-clients-automation/main/specs/bundled/search.yml) |
| [Algomo](https://github.com/jannikco/algomo-mcp) | mcp-setup | bearer | [Setup docs](https://help.algomo.com/article/55454c448eae4ca4a80c6cf0ffcc3627-api-access) |
| [Aliaddo](https://github.com/jannikco/aliaddo-mcp) | mcp-setup | bearer | [Setup docs](https://docs.aliaddo.com/) |
| [Aligno](https://github.com/jannikco/aligno-mcp) | mcp-setup | bearer | [Setup docs](https://aligno.io/api/v1/openapi.json) |
| [Alium](https://github.com/jannikco/alium-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.alium.io/api/) |
| [All Quiet](https://github.com/jannikco/all-quiet-mcp) | mcp-setup | bearer | [Setup docs](https://allquiet.app/api/swagger/public-v1/swagger.json) |
| [Allo](https://github.com/jannikco/allo-mcp) | mcp-setup | api_key_header | [Setup docs](https://help.withallo.com/openapi.json) |
| [Allowly](https://github.com/jannikco/allowly-mcp) | mcp-setup | bearer | [Setup docs](https://allowly.ai/docs/api-reference/openapi/allowly-runtime-api.v1.json) |
| [Alpaca](https://github.com/jannikco/alpaca-mcp) | mcp-setup | basic | [Setup docs](https://docs.alpaca.markets/us/openapi/trading-api.json) |
| [AlphaInsider](https://github.com/jannikco/alphainsider-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.alphainsider.com/openapi.yaml) |
| [AlphaLoops](https://github.com/jannikco/alphaloops-mcp) | mcp-setup | bearer | [Setup docs](https://runalphaloops.com/openapi.json) |
| [AlphaSMS](https://github.com/jannikco/alphasms-mcp) | mcp-setup | api_key_query | [Setup docs](https://docs.alphasms.ua/ru/api/http/) |
| [AlterEstate](https://github.com/jannikco/alterestate-mcp) | mcp-setup | custom_headers | [Setup docs](https://dev.alterestate.com/) |
| [Altoviz](https://github.com/jannikco/altoviz-mcp) | mcp-setup | api_key_header | [Setup docs](https://developer.altoviz.com/openapi.json) |
| [AltText.ai](https://github.com/jannikco/alttextai-mcp) | mcp-setup | api_key_header | [Setup docs](https://alttext.ai/openapi.yml) |
| [AltTextLab](https://github.com/jannikco/alttextlab-mcp) | mcp-setup | api_key_header | [Setup docs](https://www.alttextlab.com/docs/api) |
| [Amazing Marvin](https://github.com/jannikco/amazing-marvin-mcp) | mcp-setup | custom_headers | [Setup docs](https://github.com/amazingmarvin/MarvinAPI/wiki/Marvin-API) |
| [Amazon Bedrock](https://github.com/jannikco/amazon-aws-bedrock-mcp) | mcp-setup | bearer | [Setup docs](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_Operations_Amazon_Bedrock_Runtime.html) |
| [Ambee](https://github.com/jannikco/ambee-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.ambeedata.com/apis) |
| [Ambient](https://github.com/jannikco/ambient-mcp) | mcp-setup | bearer | [Setup docs](https://help.ambient.us/en/articles/14188000-ambient-rest-api-developer-guide) |
| [Ambivo](https://github.com/jannikco/ambivo-mcp) | mcp-setup | bearer | [Setup docs](https://fapi.ambivo.com/openapi.json) |
| [AmeriCommerce](https://github.com/jannikco/americommerce-mcp) | mcp-setup | api_key_header | [Setup docs](https://raw.githubusercontent.com/AmeriCommerce/rest-api/master/acapi.yaml) |
| [Amplifier](https://github.com/jannikco/amplifier-mcp) | mcp-setup | basic | [Setup docs](https://docs.amplifier.com/amplifier_openapi.yaml) |
| [Anakin](https://github.com/jannikco/anakin-mcp) | mcp-setup | api_key_header | [Setup docs](https://anakin.io/docs/api-reference) |
| [Anchor Browser](https://github.com/jannikco/anchor-agentic-browser-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.anchorbrowser.io/openapi.yaml) |
| [Anchor](https://github.com/jannikco/anchor-mcp) | mcp-setup | bearer | [Setup docs](https://docs.sayanchor.com/reference/get-started) |
| [Android Texter](https://github.com/jannikco/android-texter-mcp) | mcp-setup | api_key_header | [Setup docs](https://androidtexter.com/api/openapi.json) |
| [Anduin Fund Subscription](https://github.com/jannikco/anduin-fund-subscription-ca12562-mcp) | mcp-setup | api_key_header | [Setup docs](https://developers.anduintransact.com/reference) |
| [AnnounceKit](https://github.com/jannikco/announcekit-mcp) | mcp-setup | bearer | [Setup docs](https://announcekit.app/gq/v2) |
| [Anthropic (Claude)](https://github.com/jannikco/anthropic-claude-mcp) | mcp-setup | bearer | [Setup docs](https://storage.googleapis.com/stainless-sdk-openapi-specs/anthropic/anthropic-465bff21a179090915396565d1ae8f705cf8596e2ec920eb121072f25b8a7d68.yml) |
| [AntsRoute](https://github.com/jannikco/antsroute-mcp) | mcp-setup | api_key_header | [Setup docs](https://app.antsroute.com/v3/api-docs/public) |
| [Anvil](https://github.com/jannikco/anvil-mcp) | mcp-setup | basic | [Setup docs](https://raw.githubusercontent.com/anvilco/python-anvil/master/schema/anvil_schema.graphql) |
| [Anymail finder](https://github.com/jannikco/anymail-finder-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.anymailfinder.com/openapi.json) |
| [Anypost](https://github.com/jannikco/anypost-mcp) | mcp-setup | bearer | [Setup docs](https://anypost.com/docs/api-conventions) |
| [Apacta](https://github.com/jannikco/apacta-mcp) | mcp-setup | bearer | [Setup docs](https://apidoc.apacta.com/partner.yaml) |
| [aperfectstay](https://github.com/jannikco/aperfectstay-mcp) | mcp-setup | token_exchange | [Setup docs](https://aperfectstay.ai/api/docs) |
| [ApexVerify](https://github.com/jannikco/apexverify-mcp) | mcp-setup | api_key_header | [Setup docs](https://documentation.apexverify.com/openapi.json) |
| [Apiframe](https://github.com/jannikco/apiframe-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.apiframe.ai/v2/openapi.json) |
| [Apify](https://github.com/jannikco/apify-mcp) | mcp-setup | bearer | [Setup docs](https://docs.apify.com/api/openapi.json) |
| [APImage](https://github.com/jannikco/apimage-mcp) | mcp-setup | bearer | [Setup docs](https://apimage.org/docs/api-reference) |
| [APITemplate.io](https://github.com/jannikco/apitemplateio-mcp) | mcp-setup | api_key_header | [Setup docs](https://apitemplateio.s3.ap-southeast-1.amazonaws.com/redoc_apiv2/apitemplateiov2_api.yaml) |
| [APIVerve](https://github.com/jannikco/apiverve-mcp) | mcp-setup | api_key_header | [Setup docs](https://raw.githubusercontent.com/apiverve/barcodegenerator-api/HEAD/openapi.yaml) |
| [api.video](https://github.com/jannikco/apivideo-mcp) | mcp-setup | basic | [Setup docs](https://docs.api.video/openapi.yaml) |
| [Apollo.io](https://github.com/jannikco/apollo-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.apollo.io/openapi/apollo-rest-api.json) |
| [Apparound](https://github.com/jannikco/apparound-mcp) | mcp-setup | token_exchange | [Setup docs](https://docs.apparound.com/api_spec/openapi_v2.yaml) |
| [Appointedd](https://github.com/jannikco/appointedd-mcp) | mcp-setup | oauth2_client_credentials | [Setup docs](https://json-api.appointedd.com/openapi/json) |
| [Approval Studio](https://github.com/jannikco/approval-studio-mcp) | mcp-setup | token_exchange | [Setup docs](https://api.approval.studio/swagger/v1/swagger.json) |
| [ApproveThis](https://github.com/jannikco/approvethis-mcp) | mcp-setup | bearer | [Setup docs](https://app.approvethis.com/docs/api.json) |
| [ApptiveGrid](https://github.com/jannikco/apptivegrid-mcp) | mcp-setup | basic | [Setup docs](https://docs.apptivegrid.de/openapi.json) |
| [Appzi](https://github.com/jannikco/appzi-mcp) | mcp-setup | bearer | [Setup docs](https://portal.api.appzi.io/api/v1/openapi/v1.json) |
| [Aranda Service Management](https://github.com/jannikco/aranda-service-management-ca2239-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.arandasoft.com/asms-api/index.html) |
| [Arca](https://github.com/jannikco/arca-1-mcp) | mcp-setup | bearer | [Setup docs](https://docs.getarca.app/api-reference/introduction) |
| [ArcSite](https://github.com/jannikco/arcsite-mcp) | mcp-setup | bearer | [Setup docs](https://dev.arcsite.com/) |
| [Are.na](https://github.com/jannikco/arena-1-mcp) | mcp-setup | bearer | [Setup docs](https://api.are.na/v3/openapi.json) |
| [Arize AX](https://github.com/jannikco/arize-ax-mcp) | mcp-setup | bearer | [Setup docs](https://api.arize.com/v2/spec.yaml) |
| [Arpoone](https://github.com/jannikco/arpoone-mcp) | mcp-setup | bearer | [Setup docs](https://docs.arpoone.com/services/Api/api/swagger/v1.2/swagger.json) |
| [Artworker](https://github.com/jannikco/artworker-mcp) | mcp-setup | api_key_query | [Setup docs](https://docs.artworker.io/) |
| [Aryeo](https://github.com/jannikco/aryeo-mcp) | mcp-setup | bearer | [Setup docs](https://docs.aryeo.com/_spec/api/aryeo.json) |
| [Asana](https://github.com/jannikco/asana-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml) |
| [Áskell](https://github.com/jannikco/askell-mcp) | mcp-setup | api_key_header | [Setup docs](https://askell.is/api/swagger/swagger.json) |
| [AskNicely](https://github.com/jannikco/asknicely-mcp) | mcp-setup | api_key_header | [Setup docs](https://asknicely.asknice.ly/help/apidocs) |
| [AssemblyAI](https://github.com/jannikco/assemblyai-mcp) | mcp-setup | api_key_header | [Setup docs](https://www.assemblyai.com/docs/openapi.json) |
| [Assembly](https://github.com/jannikco/assemblycom-mcp) | mcp-setup | api_key_header | [Setup docs](https://assembly.com/docs/api-reference/openapi.json) |
| [Asset Panda Pro](https://github.com/jannikco/asset-panda-pro-1-mcp) | mcp-setup | bearer | [Setup docs](https://dash.readme.com/api/v1/api-registry/5qqftmejqafnl) |
| [Assignar](https://github.com/jannikco/assignar-mcp) | mcp-setup | oauth2_client_credentials | [Setup docs](https://apidocs.assignar.com/api-docs/swagger.yaml) |
| [AssistLoop](https://github.com/jannikco/assistloop-mcp) | mcp-setup | bearer | [Setup docs](https://assistloop.ai/docs/public-api) |
| [Asyntai](https://github.com/jannikco/asyntai-mcp) | mcp-setup | bearer | [Setup docs](https://asyntai.com/documentation/api/) |
| [Atlas AI Revenue Engine](https://github.com/jannikco/atlas-ai-revenue-engine-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.youratlas.com/openapi.json) |
| [Attendu](https://github.com/jannikco/attendu-ca217914-mcp) | mcp-setup | api_key_header | [Setup docs](https://docs.attendu.com/openapi.json) |
| [Attentive](https://github.com/jannikco/attentive-mcp) | mcp-setup | bearer | [Setup docs](https://dash.readme.com/api/v1/api-registry/e1a3ybmue9n04e) |
| [Attio](https://github.com/jannikco/attio-mcp) | mcp-setup | bearer | [Setup docs](https://api.attio.com/openapi/api) |
| [ATZ CRM](https://github.com/jannikco/atz-crm-mcp) | mcp-setup | bearer | [Setup docs](https://docs.atzcrm.com/docs/category/endpoints) |
| [Audience Republic](https://github.com/jannikco/audience-republic-mcp) | mcp-setup | bearer | [Setup docs](https://developer.arep.co/production/openapi.json) |
| [Billy](https://github.com/jannikco/billy-mcp) | mcp-setup | api_key_header | [Setup docs](https://www.billy.dk/api/) |
| [Brevo](https://github.com/jannikco/brevo-mcp) | mcp-setup | api_key_header | [Setup docs](https://api.brevo.com/v3/swagger_definition_v3.yml) |
| [ClickUp](https://github.com/jannikco/clickup-mcp) | mcp-setup | api_key_header | [Setup docs](https://developer.clickup.com/openapi/clickup-api-v2-reference.json) |
| [Close](https://github.com/jannikco/close-mcp) | mcp-setup | basic | [Setup docs](https://developer.close.com/openapi.json) |
| [Dinero](https://github.com/jannikco/dinero-mcp) | mcp-setup | token_exchange | [Setup docs](https://api.dinero.dk/openapi/v1/swagger.json) |
| [Discord](https://github.com/jannikco/discord-mcp) | mcp-setup | api_key_header | [Setup docs](https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json) |
| [Dropbox](https://github.com/jannikco/dropbox-mcp) | mcp-setup | oauth2_authorization_code | [Setup docs](https://www.dropbox.com/developers/documentation/http/documentation) |
| [e-conomic](https://github.com/jannikco/e-conomic-mcp) | mcp-setup | custom_headers | [Setup docs](https://restdocs.e-conomic.com/) |
| [GitHub](https://github.com/jannikco/github-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.yaml) |
| [GitLab](https://github.com/jannikco/gitlab-mcp) | mcp-setup | api_key_header | [Setup docs](https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi_v2.yaml) |
| [Google Calendar](https://github.com/jannikco/google-calendar-mcp) | mcp-setup | oauth2_authorization_code | [Setup docs](https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest) |
| [Google Drive](https://github.com/jannikco/google-drive-mcp) | mcp-setup | oauth2_authorization_code | [Setup docs](https://www.googleapis.com/discovery/v1/apis/drive/v3/rest) |
| [GraphQL to MCP import starter](https://github.com/jannikco/graphql-to-mcp) | import-example | not-applicable | See project |
| [HubSpot](https://github.com/jannikco/hubspot-mcp) | mcp-setup | bearer | [Setup docs](https://api.hubspot.com/public/api/spec/v2/specs/release/75278/version/2026-03) |
| [Intercom](https://github.com/jannikco/intercom-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/intercom/Intercom-OpenAPI/main/descriptions/2.15/api.intercom.io.yaml) |
| [Linear](https://github.com/jannikco/linear-mcp) | mcp-setup | api_key_header | [Setup docs](https://raw.githubusercontent.com/linear/linear/master/packages/sdk/src/schema.graphql) |
| [LinkedIn API quickstart](https://github.com/jannikco/linkedin-api) | leadadapter-recipe | not-applicable | See project |
| [LeadAdapter approvals inspector](https://github.com/jannikco/linkedin-approvals-api) | leadadapter-recipe | not-applicable | See project |
| [LinkedIn company data](https://github.com/jannikco/linkedin-company-api) | leadadapter-recipe | not-applicable | See project |
| [LinkedIn content records](https://github.com/jannikco/linkedin-content-api) | leadadapter-recipe | not-applicable | See project |
| [LeadAdapter CRM records](https://github.com/jannikco/linkedin-crm-api) | leadadapter-recipe | not-applicable | See project |
| [LinkedIn lead export](https://github.com/jannikco/linkedin-lead-export) | leadadapter-recipe | not-applicable | See project |
| [LinkedIn MCP setup and connection checker](https://github.com/jannikco/linkedin-mcp) | mcp-setup | not-applicable | See project |
| [LinkedIn post engagers](https://github.com/jannikco/linkedin-post-engagers) | leadadapter-recipe | not-applicable | See project |
| [LinkedIn profile enrichment](https://github.com/jannikco/linkedin-profile-api) | leadadapter-recipe | not-applicable | See project |
| [LeadAdapter Python API client](https://github.com/jannikco/linkedin-python-sdk) | sdk-python | not-applicable | See project |
| [Scheduled posts inspector](https://github.com/jannikco/linkedin-scheduled-posts-api) | leadadapter-recipe | not-applicable | See project |
| [LinkedIn people and post search](https://github.com/jannikco/linkedin-search-api) | leadadapter-recipe | not-applicable | See project |
| [Typed LeadAdapter API client](https://github.com/jannikco/linkedin-typescript-sdk) | sdk-typescript | not-applicable | See project |
| [LeadAdapter webhook inspector](https://github.com/jannikco/linkedin-webhooks-api) | leadadapter-recipe | not-applicable | See project |
| [Microsoft Outlook](https://github.com/jannikco/microsoft-outlook-mcp) | mcp-setup | oauth2_authorization_code | [Setup docs](https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml) |
| [Microsoft Teams](https://github.com/jannikco/microsoft-teams-mcp) | mcp-setup | oauth2_authorization_code | [Setup docs](https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml) |
| [Notion](https://github.com/jannikco/notion-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/makenotion/notion-mcp-server/main/scripts/notion-openapi.json) |
| [OpenAPI to MCP import starter](https://github.com/jannikco/openapi-to-mcp) | import-example | not-applicable | See project |
| [PayPal](https://github.com/jannikco/paypal-mcp) | mcp-setup | oauth2_client_credentials | [Setup docs](https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/invoicing_v2.json) |
| [Pipedrive](https://github.com/jannikco/pipedrive-mcp) | mcp-setup | api_key_header | [Setup docs](https://developers.pipedrive.com/docs/api/v1/openapi-v2.yaml) |
| [PipMCP connectors and developer integration directory](https://github.com/jannikco/pipmcp-connectors) | catalog-hub | not-applicable | See project |
| [Postman to MCP import starter](https://github.com/jannikco/postman-to-mcp) | import-example | not-applicable | See project |
| [Slack](https://github.com/jannikco/slack-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json) |
| [Stripe](https://github.com/jannikco/stripe-mcp) | mcp-setup | bearer | [Setup docs](https://raw.githubusercontent.com/stripe/openapi/master/latest/openapi.spec3.json) |
| [Supabase](https://github.com/jannikco/supabase-mcp) | mcp-setup | bearer | [Setup docs](https://api.supabase.com/api/v1-json) |
| [Swagger to MCP import starter](https://github.com/jannikco/swagger-to-mcp) | import-example | not-applicable | See project |
| [Trello](https://github.com/jannikco/trello-mcp) | mcp-setup | custom_headers | [Setup docs](https://developer.atlassian.com/cloud/trello/swagger.v3.json) |
| [WooCommerce](https://github.com/jannikco/woocommerce-mcp) | mcp-setup | basic | [Setup docs](https://woocommerce.github.io/woocommerce-rest-api-docs/) |
| [Xero](https://github.com/jannikco/xero-mcp) | mcp-setup | oauth2_client_credentials | [Setup docs](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_accounting.yaml) |
| [Zendesk](https://github.com/jannikco/zendesk-mcp) | mcp-setup | basic | [Setup docs](https://developer.zendesk.com/zendesk/oas.yaml) |

## Evidence and maintenance

Catalog data is sanitized from the reviewed integration-factory artifact registry. It contains credential field names, never credential values. Source digest: `eed57f610329e2506a7b2e8d7a4f65af66d8ad47d5adb5d3b24fac88271560cc`. See catalog.json and integration.json. Changes to the source registry regenerate this repository deterministically. Maintainer: jannikco. MIT license.
