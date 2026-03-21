export interface Feature {
  title: string
  description: string
  icon: string
}

export const features: Feature[] = [
  {
    title: 'Drag & Drop Editor',
    description: 'Create stunning content with our intuitive drag-and-drop editor. No design skills required.',
    icon: 'MdDragIndicator',
  },
  {
    title: 'Remote Management',
    description: 'Control all your screens from anywhere. Update content, monitor status, and manage devices remotely.',
    icon: 'MdDevices',
  },
  {
    title: 'Smart Scheduling',
    description: 'Schedule content by time, day, or date. Set up playlists that change automatically.',
    icon: 'MdSchedule',
  },
  {
    title: 'Offline Mode',
    description: 'Your screens keep running even without internet. Content is cached locally for uninterrupted playback.',
    icon: 'MdCloudOff',
  },
  {
    title: 'Portrait & Landscape',
    description: 'Support for any screen orientation. Design once, display perfectly in portrait or landscape.',
    icon: 'MdScreenRotation',
  },
  {
    title: '10+ Widgets',
    description: 'Weather, social feeds, news tickers, clocks, and more. Add dynamic widgets to any layout.',
    icon: 'MdWidgets',
  },
  {
    title: 'Real-Time Updates',
    description: 'Push content updates instantly to all screens. Changes go live in seconds, not minutes.',
    icon: 'MdBolt',
  },
  {
    title: 'Proof of Play',
    description: 'Verify your content played as scheduled. Get detailed reports on screen activity and uptime.',
    icon: 'MdVerified',
  },
  {
    title: 'Multi-User Teams',
    description: 'Invite team members with role-based access. Collaborate on content across departments.',
    icon: 'MdGroups',
  },
]
