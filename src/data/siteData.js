// All content on this page is prototype / demo data unless noted otherwise.
// Replace with verified product and customer data before launch.

export const workspace = {
  name: 'JAVUNO Digital Studio',
  projects: [
    'Acme Website Redesign',
    'JAVUNO Mobile App 2.0',
    'Q4 Marketing Campaign',
    'Client Portal Development',
    'Brand Identity Refresh',
  ],
  teams: ['Product', 'Engineering', 'Design', 'Marketing', 'Sales', 'Client Success'],
  users: [
    'Sarah Mitchell',
    'Michael Chen',
    'Emily Davis',
    'James Carter',
    'Daniel Reyes',
    'Maria Santos',
  ],
  clients: ['Acme Corporation', 'Vertex Technologies', 'Brightline Retail'],
}

export const lifecycleStages = [
  { key: 'idea', label: 'Idea', icon: '💡', body: 'Capture opportunities, requests, and initiatives before they get lost in a thread or a notebook.' },
  { key: 'plan', label: 'Plan', icon: '🗺️', body: 'Turn ideas into goals, projects, milestones, and timelines your team can commit to.' },
  { key: 'assign', label: 'Assign', icon: '◐', body: 'Give work to the right people with clear ownership from day one.' },
  { key: 'execute', label: 'Execute', icon: '✓', body: 'Manage tasks through flexible workflows that match how your team works.' },
  { key: 'collaborate', label: 'Collaborate', icon: '💬', body: 'Keep conversations, files, decisions, and work connected in one place.' },
  { key: 'automate', label: 'Automate', icon: '⚡', body: 'Remove repetitive manual processes so people spend time on the work that matters.' },
  { key: 'deliver', label: 'Deliver', icon: '🚀', body: 'Track deadlines, milestones, approvals, and outcomes through to completion.' },
  { key: 'learn', label: 'Learn', icon: '▲', body: 'Use reporting and AI to understand what happened and what comes next.' },
]

export const featureGroups = [
  {
    label: 'Plan',
    items: [
      { name: 'Projects', desc: 'Structured projects with objectives, milestones, owners, and progress.' },
      { name: 'Goals', desc: 'Connect everyday work to organizational outcomes.' },
      { name: 'Timeline', desc: 'Plan phases, dependencies, milestones, and delivery schedules.' },
      { name: 'Templates', desc: 'Start faster with reusable project and workflow templates.' },
    ],
  },
  {
    label: 'Execute',
    items: [
      { name: 'Tasks', desc: 'Every piece of work gets a clear owner, priority, deadline, and context.' },
      { name: 'Boards', desc: 'Build visual workflows around how your team actually works.' },
      { name: 'Calendar', desc: 'Manage deadlines, events, meetings, and milestones together.' },
      { name: 'Workload', desc: 'Understand team capacity and identify overloaded work early.' },
    ],
  },
  {
    label: 'Connect',
    items: [
      { name: 'Teams', desc: 'Bring people, responsibilities, projects, and activity together.' },
      { name: 'Discussions', desc: 'Keep team conversations connected to the work itself.' },
      { name: 'Documents', desc: 'Create and organize knowledge close to the projects it informs.' },
      { name: 'Client Portal', desc: 'Give clients controlled visibility into shared work.' },
    ],
  },
  {
    label: 'Improve',
    items: [
      { name: 'Automation', desc: 'Reduce repetitive manual work with rules that respond to change.' },
      { name: 'Reports', desc: 'Understand progress, project health, workload, and goals.' },
      { name: 'JAVUNO AI', desc: 'Search, summarize, analyze, organize, and create work in context.' },
      { name: 'Integrations', desc: 'Connect JAVUNO with the tools your team already uses.' },
    ],
  },
]

export const aiPrompts = [
  'What projects are currently at risk?',
  'Summarize the Acme project.',
  'Turn these meeting notes into tasks.',
  'Create a product launch plan.',
  'What changed this week?',
  'What should I focus on today?',
]

export const aiResponses = {
  'What projects are currently at risk?':
    'Two projects need attention: Q4 Marketing Campaign is behind on creative review, and Brand Identity Refresh has an overdue milestone owned by Emily Davis.',
  'Summarize the Acme project.':
    'Acme Website Redesign is on track — 12 of 18 tasks complete, homepage QA in review, launch milestone due in 9 days.',
  'Turn these meeting notes into tasks.':
    'Created 4 tasks from your notes: "Finalize nav copy," "Share revised mockups," "Confirm hosting provider," and "Schedule client review."',
  'Create a product launch plan.':
    'Drafted a launch plan with 5 phases — Research, Design, Development, QA, and Launch — plus owners and target dates for each.',
  'What changed this week?':
    '14 tasks completed, 2 new projects started, and Client Portal Development moved into the Review stage.',
  'What should I focus on today?':
    'You have 4 tasks due today and 1 overdue. Start with the homepage QA review — it\'s blocking two teammates.',
}

export const teamSolutions = [
  { key: 'product', label: 'Product', flow: ['Roadmap', 'Initiative', 'Project', 'Tasks', 'Release', 'Outcome'], caption: 'From roadmap to release.' },
  { key: 'engineering', label: 'Engineering', flow: ['Backlog', 'Sprint', 'Build', 'Review', 'Deploy', 'Monitor'], caption: 'From backlog to deployment.' },
  { key: 'marketing', label: 'Marketing', flow: ['Campaign', 'Content', 'Creative', 'Review', 'Publish', 'Results'], caption: 'From campaign idea to launch.' },
  { key: 'design', label: 'Design', flow: ['Request', 'Brief', 'Design', 'Feedback', 'Approval', 'Handoff'], caption: 'From request to final approval.' },
  { key: 'sales', label: 'Sales & Client Success', flow: ['Opportunity', 'Proposal', 'Onboarding', 'Delivery', 'Renewal'], caption: 'From opportunity to delivery.' },
  { key: 'ops', label: 'Operations', flow: ['Request', 'Triage', 'Process', 'Execute', 'Document'], caption: 'From request to repeatable process.' },
]

export const benefits = [
  { title: 'Less coordination', desc: 'Spend less time asking where work stands.' },
  { title: 'Clearer ownership', desc: "Everyone knows what they own, what's due, and what's next." },
  { title: 'Fewer surprises', desc: 'Deadlines, dependencies, priorities, and risks remain visible.' },
  { title: 'Faster execution', desc: 'Automate routine actions and reduce unnecessary handoffs.' },
  { title: 'Better collaboration', desc: 'Keep conversations, files, decisions, and tasks connected.' },
  { title: 'Better decisions', desc: 'Turn workspace activity into useful insights.' },
]

export const whyJavuno = [
  { title: 'One connected model', desc: 'Goals connect to projects. Projects connect to tasks. Tasks connect to people, documents, conversations, and automation.' },
  { title: 'Flexible workflows', desc: 'Create workflows that match how your team actually works.' },
  { title: 'Context where work happens', desc: 'Keep files, comments, documents, dependencies, approvals, and activity close to the work.' },
  { title: 'Multiple ways to see work', desc: 'Switch between Board, List, Calendar, Timeline, Workload, and Dashboard.' },
  { title: 'Intelligence with context', desc: 'JAVUNO AI works with information already connected to the workspace.' },
  { title: 'Built to scale', desc: 'Start with one team and expand across the organization.' },
]

export const comparisonRows = [
  'Visual boards',
  'Multiple work views',
  'Goals & projects',
  'Team collaboration',
  'Client workspace',
  'Workflow automation',
  'Workload management',
  'Documents & knowledge',
  'Workspace AI',
  'Connected reporting',
]

export const comparisonColumns = ['JAVUNO', 'Kanban-focused tools', 'Project suites', 'General workspaces']

// ✓ = full support, 'varies' = depends on plan/tool, '' = not a core focus
export const comparisonData = {
  'Visual boards': ['check', 'check', 'varies', 'varies'],
  'Multiple work views': ['check', 'varies', 'check', 'varies'],
  'Goals & projects': ['check', 'varies', 'check', 'varies'],
  'Team collaboration': ['check', 'varies', 'varies', 'check'],
  'Client workspace': ['check', 'varies', 'varies', 'varies'],
  'Workflow automation': ['check', 'varies', 'varies', 'varies'],
  'Workload management': ['check', 'varies', 'check', 'varies'],
  'Documents & knowledge': ['check', 'varies', 'varies', 'check'],
  'Workspace AI': ['check', 'varies', 'varies', 'varies'],
  'Connected reporting': ['check', 'varies', 'check', 'varies'],
}

// Example workspace metrics — illustrative prototype data, not verified JAVUNO statistics.
export const metrics = [
  { value: '92%', label: 'Projects on track', tone: 'success' },
  { value: '28% ↓', label: 'Overdue work', tone: 'warning' },
  { value: '87%', label: 'Team capacity used', tone: 'default' },
  { value: '94%', label: 'Task completion', tone: 'default' },
  { value: '31% ↑', label: 'Goal progress', tone: 'brand' },
  { value: '6', label: 'Client projects active', tone: 'default' },
]

export const socialProofMetrics = [
  { value: '10K+', label: 'WORK ITEMS MANAGED' },
  { value: '98%', label: 'WORKFLOW COMPLETION' },
  { value: '35%', label: 'LESS MANUAL COORDINATION' },
  { value: '4.9/5', label: 'TEAM SATISFACTION' },
]

// Sample / fictional customer story — clearly labeled as demo content in the UI.
export const customerStory = {
  company: 'Acme Corporation',
  challenge:
    'The team managed projects, communication, files, and deadlines across disconnected systems.',
  solution:
    'Projects, tasks, collaboration, documents, and workflow automation were connected in one workspace.',
  results: [
    '32% less manual coordination',
    '24% improvement in on-time delivery',
    '41% less time preparing status updates',
  ],
}

// Sample testimonials for prototype presentation — replace with verified customer testimonials before launch.
export const testimonials = [
  {
    quote: 'JAVUNO gives our team one place to understand what matters, who owns it, and what needs to happen next.',
    name: 'Sample Customer',
    role: 'Project Director',
  },
  {
    quote: 'Instead of searching through different tools for project updates, our team can see the context around the work in one place.',
    name: 'Sample Customer',
    role: 'Operations Manager',
  },
  {
    quote: 'The biggest difference is visibility. Everyone can understand how their work connects to the bigger picture.',
    name: 'Sample Customer',
    role: 'Product Lead',
  },
]

export const integrationCategories = [
  { category: 'Communication', items: ['Slack', 'Microsoft Teams'] },
  { category: 'Storage', items: ['Google Drive', 'OneDrive', 'Dropbox'] },
  { category: 'Development', items: ['GitHub', 'GitLab', 'Jira'] },
  { category: 'CRM', items: ['Salesforce', 'HubSpot'] },
  { category: 'Productivity', items: ['Google Workspace', 'Microsoft 365'] },
]

export const securityFeatures = [
  { title: 'Role-based permissions', desc: 'Control exactly who can view, edit, or manage each part of your workspace.' },
  { title: 'Workspace controls', desc: 'Set organization-wide defaults for access, sharing, and data handling.' },
  { title: 'Guest and client access', desc: 'Invite external collaborators with scoped, time-limited permissions.' },
  { title: 'Activity history', desc: 'See a clear record of what changed, when, and who changed it.' },
  { title: 'Audit logs', desc: 'Track sensitive actions across projects, teams, and admin settings.' },
  { title: 'Security settings', desc: 'Manage authentication, sessions, and workspace-level security policy.' },
]

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    priceNote: '/member/mo',
    desc: 'For individuals and small teams.',
    features: ['Projects', 'Tasks', 'Boards', 'Basic collaboration'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Team',
    price: '—',
    priceNote: '/member/mo',
    desc: 'For growing teams.',
    features: ['Everything in Free', 'Advanced views', 'Automation', 'Reports', 'Team workload'],
    cta: 'Start Team Plan',
    highlight: true,
    flag: 'MOST POPULAR',
  },
  {
    name: 'Business',
    price: '—',
    priceNote: '/member/mo',
    desc: 'For organizations managing multiple teams.',
    features: [
      'Everything in Team',
      'Advanced permissions',
      'Advanced reporting',
      'Client collaboration',
      'Custom workflows',
    ],
    cta: 'Choose Business',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Talk to us',
    priceNote: '',
    desc: 'For organizations with advanced requirements.',
    features: ['Advanced security', 'Enterprise controls', 'Custom requirements', 'Dedicated support'],
    cta: 'Talk to Sales',
    highlight: false,
  },
]

export const faqItems = [
  {
    q: 'What is JAVUNO?',
    a: 'JAVUNO is a connected work management platform for organizing projects, tasks, teams, documents, communication, workflows, automation, and insights in one workspace.',
  },
  {
    q: 'Is JAVUNO just a Kanban board?',
    a: 'No. Boards are one way to visualize work. JAVUNO connects boards with projects, tasks, calendars, timelines, goals, collaboration, automation, reporting, and AI.',
  },
  {
    q: 'Can different teams use JAVUNO?',
    a: 'Yes. It is designed for product, engineering, marketing, design, sales, client success, operations, and other teams.',
  },
  {
    q: 'Can I customize workflows?',
    a: 'Yes. Teams can define workflows, statuses, fields, automations, templates, and views.',
  },
  {
    q: 'Does JAVUNO include AI?',
    a: 'Yes. JAVUNO AI helps users search, summarize, analyze, organize, and create work using connected workspace context.',
  },
  {
    q: 'Can clients access JAVUNO?',
    a: 'Yes. Client portals can provide controlled access to shared projects, deliverables, documents, approvals, messages, and reports.',
  },
  {
    q: 'Can JAVUNO integrate with other tools?',
    a: 'Yes. JAVUNO is designed to connect with communication, storage, development, CRM, and productivity tools.',
  },
  {
    q: 'Can I migrate my existing work?',
    a: 'Support for migration and imports from supported systems is planned as those capabilities become available.',
  },
  {
    q: 'Is JAVUNO suitable for small teams?',
    a: 'Yes. Teams can start small and expand their workspace as their organization grows.',
  },
]

export const navLinks = [
  { label: 'Product', href: '#difference' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#lifecycle' },
  { label: 'Resources', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
]

export const footerLinks = {
  Product: ['Projects', 'Tasks', 'Boards', 'Automation', 'JAVUNO AI'],
  Solutions: ['Product', 'Engineering', 'Marketing', 'Design', 'Operations'],
  Resources: ['Documentation', 'Help Center', 'Templates', 'Blog'],
  Company: ['About', 'Careers', 'Security', 'Contact'],
}
