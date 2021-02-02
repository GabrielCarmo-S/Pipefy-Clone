export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        },
        {
          id: 2,
          content: 'Estudar ReactJS',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        },
        {
          id: 4,
          content: 'Estudar CSS',
          labels: ['#54e1f7'],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Aprender EXPO',
          labels: ['#7159c1'],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Teste React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Aprender HTML',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}