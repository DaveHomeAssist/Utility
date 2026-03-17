import { useState } from "react";

const sections = [
  "Overview",
  "Architecture",
  "Algorithm",
  "API Spec",
  "Examples",
  "Edge Cases",
  "Stack",
];

const codeStyle = {
  background: "#1a1a2e",
  color: "#e0e0e0",
  borderRadius: "8px",
  padding: "20px",
  fontFamily: "'Courier New', monospace",
  fontSize: "13px",
  lineHeight: "1.7",
  overflowX: "auto",
  border: "1px solid rgba(255,255,255,0.06)",
};

const Keyword = ({ children }) => (
  <span style={{ color: "#ff6b9d" }}>{children}</span>
);
const Str = ({ children }) => (
  <span style={{ color: "#a8e6cf" }}>{children}</span>
);
const Comment = ({ children }) => (
  <span style={{ color: "#6a6a8a" }}>{children}</span>
);
const Fn = ({ children }) => (
  <span style={{ color: "#ffd93d" }}>{children}</span>
);
const Type = ({ children }) => (
  <span style={{ color: "#6bcbff" }}>{children}</span>
);
const Num = ({ children }) => (
  <span style={{ color: "#f4a261" }}>{children}</span>
);

const Badge = ({ children, color = "#ff6b9d" }) => (
  <span
    style={{
      display: "inline-block",
      background: `${color}18`,
      color: color,
      padding: "3px 10px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      border: `1px solid ${color}30`,
    }}
  >
    {children}
  </span>
);

const Card = ({ title, children, accent = "#ff6b9d" }) => (
  <div
    style={{
      background: "#16162a",
      borderRadius: "12px",
      padding: "24px",
      border: "1px solid rgba(255,255,255,0.06)",
      borderLeft: `3px solid ${accent}`,
      marginBottom: "16px",
    }}
  >
    {title && (
      <h4
        style={{
          margin: "0 0 12px 0",
          color: accent,
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h4>
    )}
    {children}
  </div>
);

// ─── SECTION COMPONENTS ───

function OverviewSection() {
  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        The <strong style={{ color: "#fff" }}>ChatRenamer</strong> system
        automatically generates concise, human-readable titles (3–7 words) for
        chat conversations by analyzing message content, extracting dominant
        themes, and synthesizing a descriptive label. It is designed for
        real-time usage in messaging platforms, support systems, and AI
        assistants.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "14px",
          margin: "28px 0",
        }}
      >
        {[
          {
            metric: "< 2s",
            label: "Processing Latency",
            icon: "⚡",
            color: "#ffd93d",
          },
          {
            metric: "3–7",
            label: "Title Word Count",
            icon: "✎",
            color: "#ff6b9d",
          },
          {
            metric: "1–1000",
            label: "Messages Supported",
            icon: "💬",
            color: "#6bcbff",
          },
          {
            metric: "30+",
            label: "Languages",
            icon: "🌍",
            color: "#a8e6cf",
          },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "#1a1a2e",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              border: `1px solid ${item.color}25`,
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "6px" }}>
              {item.icon}
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: item.color,
                fontFamily: "'Courier New', monospace",
              }}
            >
              {item.metric}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#8080a0",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginTop: "4px",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <Card title="Design Principles" accent="#6bcbff">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            [
              "Deterministic Fallbacks",
              "Every code path produces a valid title, even on LLM failure.",
            ],
            [
              "Streaming-Compatible",
              "Can generate provisional titles from partial conversations and refine later.",
            ],
            [
              "Language-Agnostic Core",
              "Pipeline detects language first, then routes to appropriate models/heuristics.",
            ],
            [
              "Tiered Processing",
              "Short chats use fast heuristics; long/complex chats invoke LLM summarization.",
            ],
          ].map(([term, desc]) => (
            <div key={term} style={{ display: "flex", gap: "12px" }}>
              <span
                style={{
                  color: "#6bcbff",
                  fontWeight: 700,
                  minWidth: "190px",
                  fontSize: "13px",
                }}
              >
                {term}
              </span>
              <span style={{ color: "#9090b0", fontSize: "13px" }}>{desc}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ArchitectureSection() {
  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        The system follows a layered pipeline architecture with three processing
        tiers that route conversations based on length and complexity.
      </p>

      {/* Architecture Diagram */}
      <div
        style={{
          background: "#1a1a2e",
          borderRadius: "12px",
          padding: "28px",
          border: "1px solid rgba(255,255,255,0.06)",
          margin: "24px 0",
          fontFamily: "'Courier New', monospace",
          fontSize: "12px",
          lineHeight: 1.6,
          overflowX: "auto",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#ff6b9d",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "16px",
            fontWeight: 700,
          }}
        >
          System Architecture Diagram
        </div>
        <pre
          style={{
            margin: 0,
            color: "#c0c0e0",
            whiteSpace: "pre",
            fontSize: "11.5px",
          }}
        >
          {`
 ┌─────────────────────────────────────────────────────────────────┐
 │                     API GATEWAY (REST/gRPC)                     │
 │            POST /api/v1/conversations/:id/title                 │
 └───────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │                    INGESTION LAYER                               │
 │  ┌──────────┐  ┌──────────────┐  ┌───────────────────────────┐ │
 │  │ Validate │→ │ Normalize &  │→ │ Language Detection         │ │
 │  │ Input    │  │ Clean Text   │  │ (fastText / lingua-py)     │ │
 │  └──────────┘  └──────────────┘  └───────────────────────────┘ │
 └───────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │                    ROUTING LAYER                                 │
 │                                                                 │
 │  msg_count ≤ 5    ──→  TIER 1: Keyword Extraction (heuristic)  │
 │  msg_count ≤ 50   ──→  TIER 2: TF-IDF + Clustering            │
 │  msg_count > 50   ──→  TIER 3: LLM Summarization              │
 │                                                                 │
 └────────┬──────────────────┬──────────────────┬──────────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
 ┌────────────────┐ ┌────────────────┐ ┌────────────────────────┐
 │   TIER 1       │ │   TIER 2       │ │   TIER 3               │
 │                │ │                │ │                        │
 │ • Stop-word    │ │ • TF-IDF      │ │ • Truncate to last     │
 │   removal      │ │   vectorize   │ │   ~4K tokens           │
 │ • POS tagging  │ │ • K-means     │ │ • Prompt LLM with      │
 │ • NP chunking  │ │   clustering  │ │   system instruction   │
 │ • Top-N noun   │ │ • Cluster     │ │ • Parse & validate     │
 │   phrases      │ │   labeling    │ │   response             │
 │ • Template     │ │ • Rank &      │ │ • Fallback to Tier 2   │
 │   fill         │ │   compose     │ │   on timeout/error     │
 └───────┬────────┘ └───────┬────────┘ └───────────┬────────────┘
         │                  │                      │
         └──────────────────┼──────────────────────┘
                            ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │                  POST-PROCESSING LAYER                          │
 │  ┌───────────┐  ┌──────────────┐  ┌────────────────────────┐  │
 │  │ Word Count│→ │ Dedup &      │→ │ Title Case / Grammar   │  │
 │  │ Enforce   │  │ Profanity    │  │ Validation             │  │
 │  │ (3-7)     │  │ Filter       │  │                        │  │
 │  └───────────┘  └──────────────┘  └────────────────────────┘  │
 └───────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │                     STORAGE & CACHE                             │
 │  ┌─────────────────┐  ┌────────────────────────────────────┐   │
 │  │ Redis Cache      │  │ PostgreSQL (conversation_titles)   │   │
 │  │ TTL: 1 hour      │  │ id | conv_id | title | created_at │   │
 │  └─────────────────┘  └────────────────────────────────────┘   │
 └─────────────────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px",
          marginTop: "20px",
        }}
      >
        <Card title="Input Format" accent="#a8e6cf">
          <pre style={{ ...codeStyle, padding: "14px", fontSize: "12px" }}>
            {`{
  `}
            <Str>"conversation_id"</Str>
            {`: `}
            <Str>"conv_8f3a1b"</Str>
            {`,
  `}
            <Str>"messages"</Str>
            {`: [
    {
      `}
            <Str>"role"</Str>
            {`: `}
            <Str>"user"</Str>
            {`,
      `}
            <Str>"content"</Str>
            {`: `}
            <Str>"How do I deploy..."</Str>
            {`,
      `}
            <Str>"timestamp"</Str>
            {`: `}
            <Str>"2026-03-09T14:22:00Z"</Str>
            {`
    }
  ],
  `}
            <Str>"options"</Str>
            {`: {
    `}
            <Str>"max_words"</Str>
            {`: `}
            <Num>7</Num>
            {`,
    `}
            <Str>"language"</Str>
            {`: `}
            <Str>"auto"</Str>
            {`
  }
}`}
          </pre>
        </Card>

        <Card title="Output Format" accent="#ffd93d">
          <pre style={{ ...codeStyle, padding: "14px", fontSize: "12px" }}>
            {`{
  `}
            <Str>"conversation_id"</Str>
            {`: `}
            <Str>"conv_8f3a1b"</Str>
            {`,
  `}
            <Str>"title"</Str>
            {`: `}
            <Str>"Deploying Flask App to AWS"</Str>
            {`,
  `}
            <Str>"metadata"</Str>
            {`: {
    `}
            <Str>"tier_used"</Str>
            {`: `}
            <Num>2</Num>
            {`,
    `}
            <Str>"processing_ms"</Str>
            {`: `}
            <Num>340</Num>
            {`,
    `}
            <Str>"language"</Str>
            {`: `}
            <Str>"en"</Str>
            {`,
    `}
            <Str>"confidence"</Str>
            {`: `}
            <Num>0.87</Num>
            {`,
    `}
            <Str>"word_count"</Str>
            {`: `}
            <Num>5</Num>
            {`,
    `}
            <Str>"topics"</Str>
            {`: [`}
            <Str>"deployment"</Str>
            {`, `}
            <Str>"flask"</Str>
            {`, `}
            <Str>"aws"</Str>
            {`]
  }
}`}
          </pre>
        </Card>
      </div>
    </div>
  );
}

function AlgorithmSection() {
  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        The core algorithm uses a tiered approach: fast heuristics for short
        conversations, statistical methods for medium ones, and LLM
        summarization for long or complex threads.
      </p>

      <Card title="Core Pipeline — Python Implementation" accent="#ff6b9d">
        <pre style={codeStyle}>
          <Comment># chat_renamer/pipeline.py</Comment>
          {`\n\n`}
          <Keyword>from</Keyword>
          {` dataclasses `}
          <Keyword>import</Keyword>
          {` dataclass\n`}
          <Keyword>from</Keyword>
          {` enum `}
          <Keyword>import</Keyword>
          {` Enum\n`}
          <Keyword>import</Keyword>
          {` time\n\n`}
          <Keyword>class</Keyword>
          {` `}
          <Type>Tier</Type>
          {`(Enum):\n`}
          {`    KEYWORD   = `}
          <Num>1</Num>
          {`   `}
          <Comment># ≤ 5 messages</Comment>
          {`\n`}
          {`    TFIDF     = `}
          <Num>2</Num>
          {`   `}
          <Comment># ≤ 50 messages</Comment>
          {`\n`}
          {`    LLM       = `}
          <Num>3</Num>
          {`   `}
          <Comment># > 50 messages</Comment>
          {`\n\n`}
          <Keyword>@dataclass</Keyword>
          {`\n`}
          <Keyword>class</Keyword>
          {` `}
          <Type>TitleResult</Type>
          {`:\n`}
          {`    title: `}
          <Type>str</Type>
          {`\n`}
          {`    tier: `}
          <Type>Tier</Type>
          {`\n`}
          {`    confidence: `}
          <Type>float</Type>
          {`\n`}
          {`    processing_ms: `}
          <Type>float</Type>
          {`\n`}
          {`    topics: list[`}
          <Type>str</Type>
          {`]\n\n`}
          <Keyword>class</Keyword>
          {` `}
          <Type>ChatRenamer</Type>
          {`:\n`}
          {`    `}
          <Keyword>def</Keyword>
          {` `}
          <Fn>__init__</Fn>
          {`(self, llm_client, config):\n`}
          {`        self.llm = llm_client\n`}
          {`        self.config = config\n`}
          {`        self.lang_detector = `}
          <Fn>LanguageDetector</Fn>
          {`()\n`}
          {`        self.profanity_filter = `}
          <Fn>ProfanityFilter</Fn>
          {`()\n\n`}
          {`    `}
          <Keyword>def</Keyword>
          {` `}
          <Fn>generate_title</Fn>
          {`(self, messages: list[dict]) -> `}
          <Type>TitleResult</Type>
          {`:\n`}
          {`        start = time.`}
          <Fn>perf_counter</Fn>
          {`()\n\n`}
          {`        `}
          <Comment># 1. Validate & normalize</Comment>
          {`\n`}
          {`        cleaned = self.`}
          <Fn>_preprocess</Fn>
          {`(messages)\n`}
          {`        `}
          <Keyword>if not</Keyword>
          {` cleaned:\n`}
          {`            `}
          <Keyword>return</Keyword>
          {` `}
          <Fn>TitleResult</Fn>
          {`(`}
          <Str>"New Conversation"</Str>
          {`, ...)\n\n`}
          {`        `}
          <Comment># 2. Detect language</Comment>
          {`\n`}
          {`        lang = self.lang_detector.`}
          <Fn>detect</Fn>
          {`(cleaned)\n\n`}
          {`        `}
          <Comment># 3. Route to tier</Comment>
          {`\n`}
          {`        n = `}
          <Fn>len</Fn>
          {`(messages)\n`}
          {`        `}
          <Keyword>if</Keyword>
          {` n <= `}
          <Num>5</Num>
          {`:\n`}
          {`            result = self.`}
          <Fn>_tier1_keywords</Fn>
          {`(cleaned, lang)\n`}
          {`        `}
          <Keyword>elif</Keyword>
          {` n <= `}
          <Num>50</Num>
          {`:\n`}
          {`            result = self.`}
          <Fn>_tier2_tfidf</Fn>
          {`(cleaned, lang)\n`}
          {`        `}
          <Keyword>else</Keyword>
          {`:\n`}
          {`            result = self.`}
          <Fn>_tier3_llm</Fn>
          {`(cleaned, lang)\n\n`}
          {`        `}
          <Comment># 4. Post-process</Comment>
          {`\n`}
          {`        title = self.`}
          <Fn>_postprocess</Fn>
          {`(result.title)\n`}
          {`        elapsed = (time.`}
          <Fn>perf_counter</Fn>
          {`() - start) * `}
          <Num>1000</Num>
          {`\n`}
          {`        result.title = title\n`}
          {`        result.processing_ms = elapsed\n`}
          {`        `}
          <Keyword>return</Keyword>
          {` result`}
        </pre>
      </Card>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "14px",
          marginTop: "16px",
        }}
      >
        <Card title="Tier 1 — Keywords" accent="#a8e6cf">
          <pre
            style={{
              ...codeStyle,
              padding: "14px",
              fontSize: "11.5px",
              background: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            <Keyword>def</Keyword>
            {` `}
            <Fn>_tier1_keywords</Fn>
            {`(self, text, lang):\n`}
            {`  `}
            <Comment># Remove stopwords</Comment>
            {`\n`}
            {`  tokens = `}
            <Fn>tokenize</Fn>
            {`(text, lang)\n`}
            {`  filtered = `}
            <Fn>remove_stops</Fn>
            {`(tokens)\n\n`}
            {`  `}
            <Comment># POS tag → extract NPs</Comment>
            {`\n`}
            {`  phrases = `}
            <Fn>extract_noun_phrases</Fn>
            {`(\n`}
            {`    filtered\n`}
            {`  )\n\n`}
            {`  `}
            <Comment># Rank by frequency</Comment>
            {`\n`}
            {`  top = phrases[:`}
            <Num>3</Num>
            {`]\n\n`}
            {`  `}
            <Comment># Template: join phrases</Comment>
            {`\n`}
            {`  title = `}
            <Fn>compose</Fn>
            {`(top)\n`}
            {`  `}
            <Keyword>return</Keyword>
            {` title`}
          </pre>
        </Card>

        <Card title="Tier 2 — TF-IDF" accent="#ffd93d">
          <pre
            style={{
              ...codeStyle,
              padding: "14px",
              fontSize: "11.5px",
              background: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            <Keyword>def</Keyword>
            {` `}
            <Fn>_tier2_tfidf</Fn>
            {`(self, text, lang):\n`}
            {`  `}
            <Comment># Vectorize messages</Comment>
            {`\n`}
            {`  vectors = `}
            <Fn>tfidf_vectorize</Fn>
            {`(\n`}
            {`    text\n`}
            {`  )\n\n`}
            {`  `}
            <Comment># Cluster into topics</Comment>
            {`\n`}
            {`  k = `}
            <Fn>min</Fn>
            {`(`}
            <Num>3</Num>
            {`, `}
            <Fn>optimal_k</Fn>
            {`(vectors))\n`}
            {`  clusters = `}
            <Fn>kmeans</Fn>
            {`(vectors, k)\n\n`}
            {`  `}
            <Comment># Label each cluster</Comment>
            {`\n`}
            {`  labels = `}
            <Fn>label_clusters</Fn>
            {`(\n`}
            {`    clusters\n`}
            {`  )\n\n`}
            {`  `}
            <Comment># Rank → compose title</Comment>
            {`\n`}
            {`  `}
            <Keyword>return</Keyword>
            {` `}
            <Fn>rank_compose</Fn>
            {`(labels)`}
          </pre>
        </Card>

        <Card title="Tier 3 — LLM" accent="#6bcbff">
          <pre
            style={{
              ...codeStyle,
              padding: "14px",
              fontSize: "11.5px",
              background: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            <Keyword>def</Keyword>
            {` `}
            <Fn>_tier3_llm</Fn>
            {`(self, text, lang):\n`}
            {`  `}
            <Comment># Truncate to ~4K tokens</Comment>
            {`\n`}
            {`  truncated = `}
            <Fn>smart_truncate</Fn>
            {`(\n`}
            {`    text, max_tokens=`}
            <Num>4096</Num>
            {`\n`}
            {`  )\n\n`}
            {`  `}
            <Comment># Call LLM with prompt</Comment>
            {`\n`}
            {`  prompt = TITLE_PROMPT.`}
            <Fn>format</Fn>
            {`(\n`}
            {`    text=truncated, lang=lang\n`}
            {`  )\n\n`}
            {`  `}
            <Keyword>try</Keyword>
            {`:\n`}
            {`    resp = self.llm.`}
            <Fn>complete</Fn>
            {`(\n`}
            {`      prompt, timeout=`}
            <Num>1.5</Num>
            {`\n`}
            {`    )\n`}
            {`    `}
            <Keyword>return</Keyword>
            {` `}
            <Fn>parse</Fn>
            {`(resp)\n`}
            {`  `}
            <Keyword>except</Keyword>
            {` Timeout:\n`}
            {`    `}
            <Keyword>return</Keyword>
            {` self.`}
            <Fn>_tier2_tfidf</Fn>
            {`(...)`}
          </pre>
        </Card>
      </div>

      <Card title="LLM System Prompt" accent="#ff6b9d">
        <pre
          style={{
            ...codeStyle,
            fontSize: "12.5px",
            lineHeight: 1.8,
            color: "#a8e6cf",
          }}
        >
          {`TITLE_PROMPT = """
You are a conversation title generator.
Given a chat transcript, produce a concise title.

RULES:
- Exactly 3 to 7 words
- Capture the PRIMARY topic (not every subtopic)
- Use Title Case
- No quotes, punctuation marks, or ellipses
- If multi-topic, summarize the dominant theme
- Language: respond in {lang}

TRANSCRIPT:
{text}

Respond with ONLY the title, nothing else.
"""`}
        </pre>
      </Card>
    </div>
  );
}

function APISection() {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/title/generate",
      desc: "Generate a title for a conversation",
      body: `{ "messages": [...], "options": { "max_words": 7 } }`,
      response: `{ "title": "...", "metadata": { ... } }`,
      status: "201",
    },
    {
      method: "POST",
      path: "/api/v1/title/batch",
      desc: "Batch-generate titles for multiple conversations",
      body: `{ "conversations": [{ "id": "...", "messages": [...] }] }`,
      response: `{ "results": [{ "id": "...", "title": "..." }] }`,
      status: "200",
    },
    {
      method: "GET",
      path: "/api/v1/title/:conv_id",
      desc: "Retrieve a cached title by conversation ID",
      body: null,
      response: `{ "title": "...", "cached": true }`,
      status: "200",
    },
    {
      method: "PUT",
      path: "/api/v1/title/:conv_id",
      desc: "Override / manually set a title",
      body: `{ "title": "Custom Title Here" }`,
      response: `{ "title": "Custom Title Here", "manual": true }`,
      status: "200",
    },
    {
      method: "DELETE",
      path: "/api/v1/title/:conv_id",
      desc: "Remove a cached title (forces regeneration)",
      body: null,
      response: `{ "deleted": true }`,
      status: "204",
    },
  ];

  const methodColors = {
    GET: "#a8e6cf",
    POST: "#6bcbff",
    PUT: "#ffd93d",
    DELETE: "#ff6b9d",
  };

  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        RESTful API with JSON request/response bodies. All endpoints require
        authentication via Bearer token. Rate limited to 100 req/min per API
        key.
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        <Badge color="#6bcbff">JSON API</Badge>
        <Badge color="#a8e6cf">Bearer Auth</Badge>
        <Badge color="#ffd93d">Rate Limited</Badge>
        <Badge color="#ff6b9d">OpenAPI 3.1</Badge>
      </div>

      {endpoints.map((ep, i) => (
        <div
          key={i}
          style={{
            background: "#16162a",
            borderRadius: "10px",
            padding: "18px 20px",
            marginBottom: "10px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                background: `${methodColors[ep.method]}20`,
                color: methodColors[ep.method],
                padding: "3px 10px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 800,
                fontFamily: "'Courier New', monospace",
                border: `1px solid ${methodColors[ep.method]}30`,
                minWidth: "55px",
                textAlign: "center",
              }}
            >
              {ep.method}
            </span>
            <code
              style={{
                color: "#fff",
                fontSize: "13px",
                fontFamily: "'Courier New', monospace",
              }}
            >
              {ep.path}
            </code>
            <span
              style={{
                marginLeft: "auto",
                fontSize: "11px",
                color: "#6a6a8a",
              }}
            >
              {ep.status}
            </span>
          </div>
          <div
            style={{ color: "#8080a0", fontSize: "13px", marginLeft: "79px" }}
          >
            {ep.desc}
          </div>
        </div>
      ))}

      <Card title="Authentication Header" accent="#ffd93d">
        <code
          style={{
            color: "#a8e6cf",
            fontFamily: "'Courier New', monospace",
            fontSize: "13px",
          }}
        >
          Authorization: Bearer cr_live_xxxxxxxxxxxxxxxxxxxxxxxx
        </code>
      </Card>

      <Card title="Error Response Format" accent="#ff6b9d">
        <pre style={{ ...codeStyle, padding: "14px", fontSize: "12px" }}>
          {`{
  `}
          <Str>"error"</Str>
          {`: {
    `}
          <Str>"code"</Str>
          {`: `}
          <Str>"EMPTY_CONVERSATION"</Str>
          {`,
    `}
          <Str>"message"</Str>
          {`: `}
          <Str>"No messages provided"</Str>
          {`,
    `}
          <Str>"status"</Str>
          {`: `}
          <Num>422</Num>
          {`
  }
}`}
        </pre>
      </Card>
    </div>
  );
}

function ExamplesSection() {
  const examples = [
    {
      input: [
        { role: "user", msg: "How do I center a div in CSS?" },
        {
          role: "assistant",
          msg: "You can use flexbox: display: flex; align-items: center; justify-content: center;",
        },
      ],
      title: "Centering a Div With CSS",
      tier: 1,
      ms: 45,
      confidence: 0.94,
    },
    {
      input: [
        { role: "user", msg: "My dog isn't eating and seems lethargic" },
        { role: "assistant", msg: "That could indicate several conditions..." },
        { role: "user", msg: "He's a 7yr old golden retriever" },
        { role: "assistant", msg: "For senior goldens, lethargy plus..." },
        { role: "user", msg: "Should I take him to the vet today?" },
      ],
      title: "Senior Dog Health Concerns",
      tier: 1,
      ms: 62,
      confidence: 0.88,
    },
    {
      input: [
        { role: "user", msg: "Let's plan a trip to Japan" },
        { role: "assistant", msg: "Great choice! When are you thinking?" },
        { role: "user", msg: "Spring, for cherry blossoms" },
        { role: "assistant", msg: "Late March to mid-April is ideal..." },
        "... 20 more messages about itinerary, budget, hotels ...",
      ],
      title: "Spring Japan Travel Planning",
      tier: 2,
      ms: 280,
      confidence: 0.91,
    },
    {
      input: [
        "... 200+ messages spanning React state management,",
        "API integration, deployment to Vercel, debugging",
        "CORS issues, adding authentication with NextAuth,",
        "and database schema design with Prisma ...",
      ],
      title: "Full Stack React App Development",
      tier: 3,
      ms: 1340,
      confidence: 0.82,
    },
  ];

  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        Real-world examples showing how conversations of varying length and
        complexity produce titles through different processing tiers.
      </p>

      {examples.map((ex, i) => (
        <div
          key={i}
          style={{
            background: "#16162a",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "16px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Badge
                color={
                  ex.tier === 1
                    ? "#a8e6cf"
                    : ex.tier === 2
                      ? "#ffd93d"
                      : "#6bcbff"
                }
              >
                Tier {ex.tier}
              </Badge>
              <Badge color="#8080a0">{ex.ms}ms</Badge>
              <Badge color="#8080a0">{Math.round(ex.confidence * 100)}%</Badge>
            </div>
          </div>

          <div
            style={{
              background: "#1a1a2e",
              borderRadius: "8px",
              padding: "14px",
              marginBottom: "14px",
              maxHeight: "160px",
              overflowY: "auto",
            }}
          >
            {ex.input.map((msg, j) =>
              typeof msg === "string" ? (
                <div
                  key={j}
                  style={{
                    color: "#6a6a8a",
                    fontStyle: "italic",
                    fontSize: "12px",
                    padding: "4px 0",
                  }}
                >
                  {msg}
                </div>
              ) : (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "4px 0",
                    fontSize: "13px",
                  }}
                >
                  <span
                    style={{
                      color: msg.role === "user" ? "#6bcbff" : "#a8e6cf",
                      fontWeight: 700,
                      minWidth: "75px",
                      fontFamily: "'Courier New', monospace",
                      fontSize: "11px",
                      textTransform: "uppercase",
                    }}
                  >
                    {msg.role}
                  </span>
                  <span style={{ color: "#c0c0e0" }}>{msg.msg}</span>
                </div>
              ),
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                color: "#6a6a8a",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Generated Title
            </span>
            <span
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0.3px",
              }}
            >
              {ex.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function EdgeCasesSection() {
  const cases = [
    {
      name: "Empty Conversation",
      trigger: "messages array is empty or all messages have blank content",
      handling: 'Return default title "New Conversation" with confidence 0.0',
      fallback: "None needed — deterministic default",
      color: "#ff6b9d",
    },
    {
      name: "Single-Word Messages",
      trigger: "All messages are < 3 words (e.g., 'yes', 'ok', 'thanks')",
      handling:
        'Concatenate unique tokens; if still < 3 words, prefix with "Brief Chat About"',
      fallback: '"Brief Chat" as minimum viable title',
      color: "#ffd93d",
    },
    {
      name: "Multi-Topic Sprawl",
      trigger:
        "Tier 2 clustering produces 4+ distinct clusters with no dominant topic",
      handling:
        "Use the cluster containing the first and last messages as anchor; title reflects the conversational arc rather than a single topic",
      fallback:
        'Format: "{first_topic} and More" or escalate to Tier 3 LLM for synthesis',
      color: "#6bcbff",
    },
    {
      name: "Code-Heavy Content",
      trigger: "> 60% of message content is code blocks or stack traces",
      handling:
        "Strip code blocks, analyze only natural-language portions; detect programming language from code for context",
      fallback:
        '"Debugging {Language} Code" or "{Language} Implementation Help"',
      color: "#a8e6cf",
    },
    {
      name: "Non-Text Content",
      trigger: "Messages contain URLs, images, or file attachments only",
      handling:
        "Extract domain names from URLs, file extensions, and alt-text; use metadata as keyword source",
      fallback: '"Shared Files Discussion" or "Link Review"',
      color: "#ff6b9d",
    },
    {
      name: "Profanity / Sensitive Content",
      trigger: "Title generation includes profanity or PII",
      handling:
        "Run profanity filter on generated title; redact PII (emails, phone numbers, names) via regex + NER",
      fallback: "Replace flagged words with sanitized topic descriptors",
      color: "#ffd93d",
    },
    {
      name: "LLM Timeout / Failure",
      trigger: "Tier 3 LLM call exceeds 1.5s timeout or returns error",
      handling: "Graceful degradation: fall back to Tier 2 TF-IDF pipeline",
      fallback:
        "If Tier 2 also fails, fall back to Tier 1 keyword extraction",
      color: "#6bcbff",
    },
    {
      name: "Mixed Languages",
      trigger: "Messages contain 2+ languages (e.g., code-switching)",
      handling:
        "Detect dominant language (> 50% of content); generate title in that language with optional cross-language keywords",
      fallback: "Default to English if no language achieves majority",
      color: "#a8e6cf",
    },
  ];

  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        Robust handling for edge cases ensures every conversation gets a valid,
        useful title — no matter the input quality.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {cases.map((c) => (
          <div
            key={c.name}
            style={{
              background: "#16162a",
              borderRadius: "10px",
              padding: "18px",
              border: `1px solid ${c.color}15`,
              borderTop: `2px solid ${c.color}`,
            }}
          >
            <div
              style={{
                color: c.color,
                fontWeight: 700,
                fontSize: "13px",
                marginBottom: "10px",
              }}
            >
              {c.name}
            </div>
            <div style={{ fontSize: "12px", marginBottom: "6px" }}>
              <span
                style={{
                  color: "#6a6a8a",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  letterSpacing: "0.5px",
                }}
              >
                Trigger:{" "}
              </span>
              <span style={{ color: "#9090b0" }}>{c.trigger}</span>
            </div>
            <div style={{ fontSize: "12px", marginBottom: "6px" }}>
              <span
                style={{
                  color: "#6a6a8a",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  letterSpacing: "0.5px",
                }}
              >
                Handling:{" "}
              </span>
              <span style={{ color: "#b0b0d0" }}>{c.handling}</span>
            </div>
            <div style={{ fontSize: "12px" }}>
              <span
                style={{
                  color: "#6a6a8a",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  letterSpacing: "0.5px",
                }}
              >
                Fallback:{" "}
              </span>
              <span style={{ color: "#8080a0" }}>{c.fallback}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StackSection() {
  const categories = [
    {
      name: "Core Language & Runtime",
      color: "#ff6b9d",
      items: [
        {
          tool: "Python 3.12+",
          purpose: "Primary implementation language",
          why: "Rich NLP ecosystem, async support, fast prototyping",
        },
        {
          tool: "FastAPI",
          purpose: "API framework",
          why: "Async, auto OpenAPI docs, Pydantic validation",
        },
        {
          tool: "uvicorn",
          purpose: "ASGI server",
          why: "High-performance async serving with uvloop",
        },
      ],
    },
    {
      name: "NLP & Machine Learning",
      color: "#6bcbff",
      items: [
        {
          tool: "spaCy 3.x",
          purpose: "Tokenization, POS tagging, NER, noun phrase extraction",
          why: "Fast, production-ready, multi-language models",
        },
        {
          tool: "scikit-learn",
          purpose: "TF-IDF vectorization, K-means clustering",
          why: "Lightweight, no GPU needed, battle-tested",
        },
        {
          tool: "fastText / lingua-py",
          purpose: "Language detection",
          why: "176+ languages, sub-millisecond inference",
        },
        {
          tool: "tiktoken",
          purpose: "Token counting for LLM context windows",
          why: "Exact token counts for OpenAI/Anthropic models",
        },
      ],
    },
    {
      name: "LLM Integration",
      color: "#a8e6cf",
      items: [
        {
          tool: "Anthropic Claude API",
          purpose: "Primary LLM for Tier 3 summarization",
          why: "Strong instruction following, consistent formatting",
        },
        {
          tool: "litellm",
          purpose: "LLM abstraction layer",
          why: "Swap providers (OpenAI, Anthropic, local) without code changes",
        },
      ],
    },
    {
      name: "Infrastructure",
      color: "#ffd93d",
      items: [
        {
          tool: "Redis",
          purpose: "Title caching (TTL-based)",
          why: "Sub-ms lookups, automatic expiry, pub/sub for invalidation",
        },
        {
          tool: "PostgreSQL",
          purpose: "Persistent title storage, analytics",
          why: "JSONB for metadata, full-text search, reliable",
        },
        {
          tool: "Docker",
          purpose: "Containerization",
          why: "Reproducible builds, easy scaling",
        },
        {
          tool: "Prometheus + Grafana",
          purpose: "Monitoring & observability",
          why: "Track latency percentiles, tier distribution, error rates",
        },
      ],
    },
  ];

  return (
    <div>
      <p style={{ color: "#b0b0d0", lineHeight: 1.8, fontSize: "15px" }}>
        The stack prioritizes Python's NLP ecosystem for processing, FastAPI for
        serving, and a Redis + PostgreSQL pairing for caching and persistence.
      </p>

      {categories.map((cat) => (
        <div key={cat.name} style={{ marginBottom: "20px" }}>
          <h4
            style={{
              color: cat.color,
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "10px",
              paddingBottom: "6px",
              borderBottom: `1px solid ${cat.color}25`,
            }}
          >
            {cat.name}
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {cat.items.map((item) => (
              <div
                key={item.tool}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 1fr",
                  gap: "16px",
                  padding: "10px 14px",
                  background: "#16162a",
                  borderRadius: "8px",
                  fontSize: "13px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "'Courier New', monospace",
                    fontSize: "12px",
                  }}
                >
                  {item.tool}
                </span>
                <span style={{ color: "#b0b0d0" }}>{item.purpose}</span>
                <span style={{ color: "#6a6a8a", fontSize: "12px" }}>
                  {item.why}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Card title="Quick Start" accent="#a8e6cf">
        <pre style={{ ...codeStyle, fontSize: "12px" }}>
          <Comment># Install dependencies</Comment>
          {`\npip install fastapi uvicorn spacy scikit-learn \\\n`}
          {`            tiktoken litellm redis asyncpg lingua-language-detector\n\n`}
          <Comment># Download spaCy models</Comment>
          {`\npython -m spacy download en_core_web_sm\n`}
          {`python -m spacy download xx_ent_wiki_sm  `}
          <Comment># multilingual</Comment>
          {`\n\n`}
          <Comment># Start the service</Comment>
          {`\nuvicorn chat_renamer.main:app --host 0.0.0.0 --port 8000`}
        </pre>
      </Card>
    </div>
  );
}

// ─── MAIN APP ───

const sectionComponents = {
  Overview: OverviewSection,
  Architecture: ArchitectureSection,
  Algorithm: AlgorithmSection,
  "API Spec": APISection,
  Examples: ExamplesSection,
  "Edge Cases": EdgeCasesSection,
  Stack: StackSection,
};

export default function ChatRenamerDesignDoc() {
  const [activeSection, setActiveSection] = useState("Overview");
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        color: "#e0e0e0",
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "36px 40px 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #ff6b9d, #6bcbff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            C
          </div>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.3px",
              }}
            >
              ChatRenamer
            </h1>
            <span
              style={{
                fontSize: "12px",
                color: "#6a6a8a",
                letterSpacing: "0.5px",
              }}
            >
              System Architecture &amp; Design Specification
            </span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: "8px",
            }}
          >
            <Badge color="#a8e6cf">v1.0</Badge>
            <Badge color="#6a6a8a">2026-03-09</Badge>
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginTop: "20px",
            overflowX: "auto",
          }}
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              style={{
                background: "none",
                border: "none",
                padding: "10px 18px",
                color: activeSection === s ? "#ff6b9d" : "#6a6a8a",
                fontSize: "13px",
                fontWeight: activeSection === s ? 700 : 500,
                cursor: "pointer",
                borderBottom:
                  activeSection === s
                    ? "2px solid #ff6b9d"
                    : "2px solid transparent",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "32px 40px 60px", maxWidth: "1100px" }}>
        <ActiveComponent />
      </div>
    </div>
  );
}
