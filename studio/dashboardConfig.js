const projectInfoWidget = {
  name: 'project-info',
  options: {
    data: [
      {
        title: 'GitHub repo',
        value: 'https://github.com/SophieAu/crocs-site',
        category: 'Code',
      },
      {
        title: 'Frontend',
        value: 'https://eager-clarke-a32b73.netlify.app',
        category: 'apps',
      },
    ],
  },
};

const eventsWidget = {
  name: 'document-list',
  options: { title: 'Events', order: 'startTime desc', types: ['event'] },
  layout: { width: 'medium' },
};

export default {
  widgets: [projectInfoWidget, eventsWidget],
};
