import eduImage from '../assets/categories/education.svg';
import medicalImage from '../assets/categories/medical.svg';
import communityImage from '../assets/categories/community.svg';
import environmentImage from '../assets/categories/environment.svg';
import childrenImage from '../assets/categories/children.svg';
import animalImage from '../assets/categories/animal.svg';
import othersImage from '../assets/categories/others.svg';

export const fundCategories = [
  {
    categoryId: 1234,
    categoryName: 'Education',
    categoryImage: eduImage.src
  },
  {
    categoryId: 1235,
    categoryName: 'Medical',
    categoryImage: medicalImage.src
  },
  {
    categoryId: 1236,
    categoryName: 'Community',
    categoryImage: communityImage.src
  },
  {
    categoryId: 1237,
    categoryName: 'Animals',
    categoryImage: animalImage.src
  },
  {
    categoryId: 1238,
    categoryName: 'Children',
    categoryImage: childrenImage.src
  },
  {
    categoryId: 1239,
    categoryName: 'Environment',
    categoryImage: environmentImage.src
  },
  {
    categoryId: 1240,
    categoryName: 'Others',
    categoryImage: othersImage.src
  }
]

export const fundsData = [
  {
    id: 12345,
    category: "Medical",
    status: "Pending",
    heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
    raisedAmount: `25000`,
    targetAmount: `100000`,
    progress: '25'
  },
  {
    id: 12346,
    category: "Charity",
    status: "Approved",
    heading: "cajnsjc na soci charity servie cporicna s o",
    description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
    raisedAmount: `10000`,
    targetAmount: `50000`,
    progress: '20'
  },
  {
    id: 12347,
    category: "Medical",
    status: "In-process",
    heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
    raisedAmount: `25000`,
    targetAmount: `100000`,
    progress: '25'
  },
  {
    id: 12348,
    category: "Medical",
    status: "Rejected",
    heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
    raisedAmount: `25000`,
    targetAmount: `100000`,
    progress: '25'
  },
  {
    id: 12349,
    category: "Medical",
    status: "Approved",
    heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
    raisedAmount: `25000`,
    targetAmount: `100000`,
    progress: '25'
  },
  {
    id: 12340,
    category: "Medical",
    status: "Pending",
    heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
    description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
    raisedAmount: `25000`,
    targetAmount: `100000`,
    progress: '25'
  }
]

export const fundsPageData = [
  {
    categoryId: 1235,
    categoryName: 'Medical',
    funds: [
      {
        id: 12345,
        category: "Medical",
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        description: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        raisedAmount: `25000`,
        targetAmount: `50000`,
        progress: '50'
      },
      {
        id: 12347,
        category: "Medical",
        heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
        raisedAmount: `13400`,
        targetAmount: `80000`,
        progress: '40'
      },
      {
        id: 12348,
        category: "Medical",
        heading: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta conguen ivascaoi caskn oic acav",
        raisedAmount: `25000`,
        targetAmount: `100000`,
        progress: '25'
      },
      {
        id: 12349,
        category: "Medical",
        heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
        raisedAmount: `25000`,
        targetAmount: `100000`,
        progress: '25'
      },
      {
        id: 12630,
        category: "Medical",
        heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
        raisedAmount: `25000`,
        targetAmount: `100000`,
        progress: '25'
      }
    ]
  },
  {
    categoryId: 1236,
    categoryName: 'Community',
    funds: [
      {
        id: 12365,
        category: "Community",
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        description: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        raisedAmount: `65000`,
        targetAmount: `100000`,
        progress: '65'
      },
      {
        id: 12368,
        category: "Community",
        heading: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta conguen ivascaoi caskn oic acav",
        raisedAmount: `80000`,
        targetAmount: `100000`,
        progress: '80'
      },
      {
        id: 12660,
        category: "Community",
        heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
        raisedAmount: `80000`,
        targetAmount: `100000`,
        progress: '80'
      }
    ]
  },
  {
    categoryId: 1234,
    categoryName: 'Education',
    funds: [
      {
        id: 12365,
        category: "Education",
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta congue.",
        description: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        raisedAmount: `65000`,
        targetAmount: `100000`,
        progress: '65'
      },
      {
        id: 12368,
        category: "Education",
        heading: "Aenean non lorem hendrerit, vehicula libero mollis, dapibus sapien.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus non porta conguen ivascaoi caskn oic acav",
        raisedAmount: `80000`,
        targetAmount: `100000`,
        progress: '80'
      },
      {
        id: 12660,
        category: "Education",
        heading: "Heart Transplant ackjn u aiuh rof 1982e rfjn asidn caknsd lcas",
        description: "cans cakjsn oais d aciuns ib oviw eu van socc aksn ivascaoi caskn oic acav",
        raisedAmount: `80000`,
        targetAmount: `100000`,
        progress: '80'
      }
    ]
  },
  {
    categoryId: 1237,
    categoryName: 'Animals',
    funds: []
  },
  {
    categoryId: 1238,
    categoryName: 'Children',
    funds: []
  },
  {
    categoryId: 1239,
    categoryName: 'Environment',
    funds: []
  },
  {
    categoryId: 1240,
    categoryName: 'Others',
    funds: []
  }
]

export const fundDetails = {
  id: 1242,
  name: `Fundraiser for Medical Support `,
  image: '',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  diam at libero vulputate, at lobortis risus lobortis. Maecenas consectetur elementum vehicula. Praesent mollis sem.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor commodo diam, et condimentum risus pharetra in. In lobortis viverra augue, vitae finibus ipsum. Duis pretium ornare libero. Curabitur elementum diam at libero vulputate, at lobortis risus lobortis. lobortis erat facilisis. Nullam semper sagittis lobortis. Maecenas lacinia felis sit amet aliqu
  Curabitur elementum diam at libero vulputate, at`,
  document: '',
  minAmount: 500,
  raisedAmount: 60000,
  targetAmount: 100000,
  supporters: '12,86,700',
  deadline: '15th October 2022',
  campaignerInfo: {
    name: 'Ankush Patra',
    mobile: '+919678901234'
  }
}